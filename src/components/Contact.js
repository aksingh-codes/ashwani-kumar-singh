import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="container pattern-dots-sm">
      <div className="header">
        <h1>Contact</h1>
        <p>Get in touch</p>
      </div>
      <form>
        <ul className="form-style">
          {/* <p style={{ textAlign: "center", fontSize: "large" }}>Get in touch</p> */}
          <li>
            <label htmlFor="field1">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="field1"
              className="field-divided"
              placeholder="First"
            />{" "}
            <input
              type="text"
              name="field2"
              className="field-divided"
              placeholder="Last"
            />
          </li>
          <li>
            <label htmlFor="field3">
              Email <span className="required">*</span>
            </label>
            <input type="email" name="field3" className="field-long" />
          </li>
          <li>
            <label htmlFor="field5">
              Your Message <span className="required">*</span>
            </label>
            <textarea
              name="field5"
              id="field5"
              className="field-long field-textarea"
            ></textarea>
          </li>
          <li>
            <button className="btn">Send</button>
          </li>
        </ul>
      </form>
    </section>
  );
};

export default Contact;
