import React, { useState } from 'react';
import axios from 'axios';

const ChatWithAi = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [copied, setCopied] = useState(false); 

    async function generateAnswer() {
        const response = await axios({
            url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${import.meta.env.VITE_GEMINAI_SK}`, 
            method: "POST",
            data: {
                contents: [
                    {
                        parts: [{ text: question }]
                    }
                ]
            }
        });

        setQuestion("");
        // console.log(response);
        const generatedAnswer = response.data.candidates[0].content.parts[0].text;
        setAnswer(generatedAnswer);
        setCopied(false); 
    }

    const copyGeneratedAnswer = () => {
        navigator.clipboard.writeText(answer) // Copy the answer to the clipboard
            .then(() => setCopied(true)) // Set copied state to true if successful
            .catch((error) => console.error('Error copying text: ', error));
    }

    return (
        <div className="min-h-96 bg-green-100 py-4 px-4 lg:px-0">
            <div className="max-w-lg mx-auto">
                <textarea
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="mb-4 w-full min-h-20 p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your question here..."
                ></textarea>
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={generateAnswer}
                >
                    Generate Answer
                </button>
                <div className="mt-4 w-full border border-gray-300 rounded-md overflow-x-auto max-h-40">
                    <p className="p-2">{answer}</p>
                </div>

                <button
                    className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={copyGeneratedAnswer}
                >
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
        </div>
    );
}

export default ChatWithAi;
