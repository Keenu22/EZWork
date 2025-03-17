import React, { useState } from "react";
import EZWorksBlue from "../../Components/EZWorksBlue.png";
import "./LeftSection.css";

const LeftSection = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email) {
      setError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    try {
      const response = await fetch("https://test.ezworks.ai/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 422) {
        setError("Emails ending with @ez.works are not allowed");
      } else if (response.status === 200) {
        setMessage("Form Submitted");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (error) {
      setError("Network error. Please try again later.");
    }
  };

  return (
    <section className="leftSection">
      {/* Replacing <h1> with an Image */}
      <img src={EZWorksBlue} alt="EZ Works Logo" className="logo" />

      <h3>Site of Business Support Services</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
        lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Donec velit
        neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
      </p>
      <form className="inputContainer" onSubmit={handleSubmit}>
        <input
          id="emailInput"
          type="email"
          placeholder="Enter email address"
          aria-label="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Contact Me</button>
      </form>
      {error && <p className="error">{error}</p>}
      {message && <p className="success">{message}</p>}
    </section>
  );
};

export default LeftSection;
