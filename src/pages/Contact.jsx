import React from "react";
const Contact = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();

    setForm({
      name: "",
      email: "",
      message: "",
    });
    alert("Thank you for your message. We will get back to you soon!");
  };
  return (
    <div className="contact">
      <h2 className="contact__title">Contact Us</h2>

      <h3 className="contact__subtitle">Get in Touch</h3>
      <p className="contact__description">
        If you have any questions or inquiries, please feel free to contact us using the form below:
      </p>

      <form action="" onSubmit={handleSubmit} className="contact__form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required onChange={e => handleChange(e)} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required onChange={e => handleChange(e)} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required onChange={e => handleChange(e)}></textarea>

        <button type="submit" className="contact__submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
