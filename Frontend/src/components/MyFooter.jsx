import React from 'react'
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";


const MyFooter = () => {
    return (
        <Footer bgDark>
          <div className="w-full">
            <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
              <div>
                <Footer.Title title="Company" />
                <Footer.LinkGroup col>
                  <Footer.Link href="/about">About</Footer.Link>
                  <Footer.Link href="https://www.bookswagon.com/career" target='_blank'>Careers</Footer.Link>
                  <Footer.Link href="https://www.bookswagon.com/affiliate/login" target='_blank'>Brand Center</Footer.Link>
                  <Footer.Link href="/blog">Blog</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="help center" />
                <Footer.LinkGroup col>
                  <Footer.Link href="https://discord.com/channels/1089091416992534658/1089091417504219167" target='_blank'>Discord</Footer.Link>
                  <Footer.Link href="https://twitter.com" target='_blank'>Twitter</Footer.Link>
                  <Footer.Link href="facebook.com" target='_blank'>Facebook</Footer.Link>
                  <Footer.Link href="/chatwithai">Contact Us</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="https://www.bookswagon.com/privacypolicy" target='_blank'>Privacy Policy</Footer.Link>
                  <Footer.Link href="https://www.bookswagon.com/affiliate/login" target='_blank'>Licensing</Footer.Link>
                  <Footer.Link href="https://www.bookswagon.com/termsofuse" target='_blank'>Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Social Media" />
                <Footer.LinkGroup col>
                <Footer.Icon href="https://instagram.com/the_vijay_jat" target='_blank' icon={BsInstagram} />
                <Footer.Icon href="https://twitter.com/VijayKu10512750" target='_blank' icon={BsTwitter} />
                <Footer.Icon href="facebook.com" target='_blank' icon={BsFacebook} />
                <Footer.Icon href="https://github.com/vijay66071" target='_blank' icon={BsGithub} />
                </Footer.LinkGroup>
              </div>
            </div>
            <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
              <Footer.Copyright href="#" by="BookStore" year={2024} />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon href="facebook.com" icon={BsFacebook} />
                <Footer.Icon href="https://instagram.com/the_vijay_jat" target='_blank' icon={BsInstagram} />
                <Footer.Icon href="https://twitter.com/VijayKu10512750" target='_blank' icon={BsTwitter} />
                <Footer.Icon href="https://github.com/vijay66071" target='_blank' icon={BsGithub} />
              </div>
            </div>
          </div>
        </Footer>
      );
}

export default MyFooter