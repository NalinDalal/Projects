import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState<string | null>(null);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID || "",
        process.env.REACT_APP_TEMPLATE_ID || "",
        e.target,
        process.env.REACT_APP_PUBLIC_KEY || "",
      );
      if (response.status === 200) {
        setStateMessage("Message sent!");
        setTimeout(() => {
          setStateMessage(null);
        }, 5000); // hide message after 5 seconds
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStateMessage("Something went wrong, please try again later");
    } finally {
      setIsSubmitting(false);
      e.target.reset(); // Clears the form after sending the email
    }
  };

  return (
    <div className="py-4">
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label
            htmlFor="user_name"
            className="text-gray-500 dark:text-gray-400 mb-1"
          >
            Name:
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
            className="block w-full mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="user_email"
            className="text-gray-500 dark:text-gray-400 mb-1"
          >
            Email:
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            required
            className="block w-full mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="text-gray-500 dark:text-gray-400 mb-1"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="block w-full mt-1"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
          {stateMessage && (
            <p className="text-sm text-gray-500">{stateMessage}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
