import React, { useState } from "react";

const Newsletter = () => {
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    // Do whatever you need on click
    console.log("Button clicked!");

    // Disable the button after click
    setDisabled(true);
  };

  return (
    <section className="py-20 px-6 md:px-16 bg-base-200 text-center rounded-t-3xl">
      <h2 className="text-3xl font-bold mb-4 text-amber-400">Stay Updated!</h2>
      <p className="text-base-content/70 mb-8 max-w-xl mx-auto">
        Subscribe to our newsletter to get the latest travel deals, tips, and
        guides delivered straight to your inbox.
      </p>

      <form className="flex bg-white flex-col md:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-4 rounded-lg flex-1 text-cyan-900 focus:outline-none"
        />
        <button
          onClick={handleClick}
          disabled={disabled} 
          className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
            disabled
              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
              : "bg-amber-400 text-cyan-900 hover:bg-amber-300"
          }`}
        >
          {disabled ? "Subscribed" : "Subscribe"}
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
