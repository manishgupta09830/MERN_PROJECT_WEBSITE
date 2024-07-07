import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:4000/api/v1/message/send",
        {
          name,
          email,
          subject,
          message,
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>Any where, Any City, 4521</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>Call Us: +91-321-1111111</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>zk@gmail.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114312.51528009173!2d80.25598103996941!3d26.44715007162656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1720357625773!5m2!1sen!2sin"
              style={{ width: "100%", height: "450px", border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                rows={10}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;