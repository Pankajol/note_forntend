import React from 'react';

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "575e69b9-8e78-42b4-84ed-3278f8348c51");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-semibold mb-6 text-center">Contact Us</h1>

      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          
          <div className="flex flex-col">
            <label className="text-lg font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              className="mt-2 p-3 border border-gray-300 rounded-md"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              className="mt-2 p-3 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-medium">Message</label>
            <textarea
              name="message"
              className="mt-2 p-3 border border-gray-300 rounded-md"
              rows="5"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-8 rounded-md hover:bg-blue-600"
            >
              Submit Form
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500">{result}</span>
        </div>
      </div>
    </div>
  );
}
