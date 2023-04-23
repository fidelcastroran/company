import React from "react";
import {GrSend} from 'react-icons/gr'
import {BiPhoneCall} from "react-icons/bi"
import { FaRegAddressCard } from "react-icons/fa"
import {HiMail} from 'react-icons/hi'
const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-blue-300  to-blue-200 p-4 text-black">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with us</p>
        </div>
          
         <div className="flex justify-center md:flex-row w-full flex-col">
         <form
            action=""
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            ></textarea>

            <button className="text-black bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk <GrSend size={25} className="ml-2"/>
            </button>
          </form>
          <div className="w-100  items-center justify-center pl-20 md:pt-20 pt-0 md:mb-1">
				        
                <div className="text  mb-2 flex flex-row">
                          <FaRegAddressCard size={25} className="pr-2 "/>
                          <p >xxxx, yyyyyyyy-6333333</p>
                </div>
                     
                       <div className="flex mb-2 items-center">
                            <BiPhoneCall size={25} className="pr-2"/>
                           <p><a href="tel://xxxxx">+7 xxxxxxxx</a></p>
                       </div>
                       <div className=" flex items-center">
                          <HiMail size={25} className="pr-2"/>
                          <a href="mailto:xyz@gmail.com">xyz@gmail.com</a>
                      
                       </div>
                      
                  
                     </div>
             </div>
        <div>
       </div>
         
			 </div>
       </div>
 
   
  );
};

export default Contact;