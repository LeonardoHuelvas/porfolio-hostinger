import React from "react";

const Contact = () =>{
    return(
        <div id="contact" className="max-w-[1040px] m-auto md:pl-20 py-16">
            <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
                Contact
            </h1>
            <form action="https://getform.io/f/3b57d21a-939d-4e8a-8e22-6caf1731fdf9" 
            method="POST" 
            encType="multipart/form-data">
                
               <div className="grid md:grid-cols-2 gap-4 2-full py-2">
                    <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 ">Name</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" 
                        type="text" 
                        name="name"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2 ">Phone</label>
                        <input 
                        className="border-2 rounded-lg p-3 flex border-gray-300" 
                        type="text" 
                        name="phone"  pattern="[0-9]*"
                        required
                        title="Ingrese solo números"/>
                    </div>
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2 ">Email</label>
                        <input 
                        className="border-2 rounded-lg p-3 flex border-gray-300" 
                        type="email" 
                        name="email"
                      />
                    </div>
                    <div>
                        <label className="uppercase text-sm py-2 ">Subject</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="subject"/>
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Message</label>
                        <textarea className="border-2 rounded-lg p-3 border-gray-300" rows='10' name="message"></textarea>
                    </div>
                    <button className="bg-[#1b2781] text-gray-100 mt-4 w-full p-4 rounded-lg animate-none">
                        Send Message
                    </button>
                </form>
        </div>
    );

};

export default Contact