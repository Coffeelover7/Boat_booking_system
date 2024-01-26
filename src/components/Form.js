import React from "react";
import "./FormStyles.css";
import Navbar from "./Navbar";
import About from "../routes/About";
import Footer from "./Footer";

function Form() {
  const [showForm, setShowForm] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  return (
    <>
  <Navbar />
    <div className="form-container">
      <h1>Sign Up Form</h1>
      <form>
        <input placeholder="Name" name="name" />
        <input placeholder="Email" name="email" />
        <input placeholder="Phone" name="phone" />
        <input placeholder="Password" name="password" />
        <input placeholder="Confirm Password" name="confirmPassword" />
        <button onSubmit={handleSubmit}>Sign UP</button>
      </form>
    </div>
    <About />
    <Footer />
    </>
  );
}

export default Form;
