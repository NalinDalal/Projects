import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_o7uvaom", "template_qr99caa", form.current, {
        publicKey: "CeI_EByylL4eHjhqi",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label style={{ color: "white" }}>Name</label>
      <input type="text" name="user_name" />
      <br />
      <label style={{ color: "white" }}>Email</label>
      <input type="email" name="user_email" />
      <br />
      <label style={{ color: "white" }}>Message</label>
      <textarea name="message" />
      <br />
      <input type="submit" value="Send" style={{ color: "white" }} />
    </form>
  );
};

export default ContactForm;
