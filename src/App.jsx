import "./App.css";
import React, { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="QnA">
      <div className="Q">
        <h4 className="question">{question}</h4>

        <button onClick={toggleAnswer} style={{ cursor: "pointer" }}>
          <img
            className="plusMinus"
            src={isOpen ? "/public/icon-minus.jpg" : "/public/icon-plus.jpg"}
            alt="Show/Hide"
          />
        </button>
      </div>
      {isOpen && <h5 className="ans">{answer}</h5>}
    </div>
  );
};

function App() {
  const faqData = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenge to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels ans ideal for portfolio building.",
    },
    {
      question: "Is Frontend Mentor free?",
      answer: "Not completely!",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!",
    },
    {
      question: "How can I get help if I'm stuck on a challenge?",
      answer: `The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated "help" channel! If you haven't joined yet, you can get an invite to our Discord server here.`,
    },
    // Add more FAQ items as needed
  ];
  return (
    <div className="main">
      <img
        className="backgroundIMG"
        src="/public/background-pattern-desktop.jpg"
        alt="background"
      />
      <div className="container">
        <h1>
          <img src="/public/icon-star.jpg" alt="star" />
          FAQs
        </h1>
        {faqData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

export default App;
