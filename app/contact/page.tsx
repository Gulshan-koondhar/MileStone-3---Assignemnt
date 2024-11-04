// pages/contact.tsx
import React from "react";

const ContactPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="flex justify-center items-center p-4">
        <div className="w-full sm:w-1/2 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
                placeholder="Full name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
                placeholder="Email address"
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
                placeholder="Subject"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
                placeholder="Your message"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
