import React from "react";
import MagicButton from "./ui/MagicButton";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget); // Use `currentTarget`

    formData.append("access_key", "2b30a112-adcc-4024-9cb2-e8a5a61f7207");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contact" className="w-full px-[20%] py-10 scroll-mt-20">
      <h4 className="text-center mt-6 mb-4 text-lg z-50">Connect With Me</h4>
      <h2 className="text-center text-5xl ">Get in touch</h2>
      <p className="text-center max-w-2xl mb-12 mt-10 mx-auto">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text" name="name"
            placeholder="Enter your name"
            required
            className=" p-3 outline-none border
             rounded-md placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500
              bg-gray-900 border-gray-600 text-white"
          />
          <input
            className=" p-3 outline-none border
            rounded-md placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500
             bg-gray-900 border-gray-600 text-white"
            type="email" name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <textarea
          rows={6} name="message"
          placeholder="Enter your message"
          className="w-full p-4 outline-none border rounded-md placeholder-gray-400 focus:border-purple-500 
          focus:ring-1 focus:ring-purple-500
             bg-gray-900 border-gray-600 text-white"
          required
        ></textarea>
        {/* <button className="py-3 px-8 w-max flex items-center justify-between
        gap-2 bg-white/80 text-black"
        type="submit">Submit now</button> */}
        <div className="flex justify-center">
          <MagicButton title="Submit now" withIcon />
        </div>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
