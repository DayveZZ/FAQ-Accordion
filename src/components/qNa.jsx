// export default FaqItem = ({ question, answer }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAnswer = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="QnA">
//       <div className="Q">
//         <div className="question">{question}</div>

//         <button onClick={toggleAnswer} style={{ cursor: "pointer" }}>
//           <img
//             src={
//               isOpen
//                 ? "/public/images/icon-minus.svg"
//                 : "/public/images/icon-plus.svg"
//             }
//             alt=""
//           />
//         </button>
//       </div>
//       {isOpen && <div className="ans">{answer}</div>}
//     </div>
//   );
// };
