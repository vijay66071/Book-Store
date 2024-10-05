const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const Razorpay = require('razorpay');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send("Hello Mongoose!");
});

const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

async function run() {
  try {
    await client.connect();
    const bookCollections = client.db("BookInventory").collection("books");

    app.post("/upload-book", async (req, res) => {
      try {
        const data = req.body;
        const result = await bookCollections.insertOne(data);
        res.send(result);
      } catch (error) {
        console.error("Error inserting book:", error);
        res.status(500).send("Error inserting book");
      }
    });

    app.get("/all-books", async (req, res) => {
      const books = bookCollections.find();
      const result = await books.toArray();
      res.send(result);
    });

    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = { $set: { ...updateBookData } };

      try {
        const result = await bookCollections.updateOne(filter, updateDoc, options);
        res.send(result);
      } catch (error) {
        console.error("Error updating book:", error);
        res.status(500).send("Error updating book");
      }
    });

    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.deleteOne(filter);
      res.send(result);
    });

    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category };
      }
      try {
        const result = await bookCollections.find(query).toArray();
        res.send(result);
      } catch (error) {
        console.error("Error retrieving book:", error);
        res.status(500).send("Error retrieving book");
      }
    });

    app.get("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.findOne(filter);
      res.send(result);
    });

    app.post('/create-order', async (req, res) => {
      const { amount, currency, receipt } = req.body;
      try {
        const order = await razorpay.orders.create({
          amount: amount * 100,
          currency,
          receipt,
        });
        res.json(order);
      } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).send("Error creating order");
      }
    });

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

run().catch(console.dir);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}....`);
});
