// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"n
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;






// // ==> 1
// import logo from './logo.svg';
// import './App.css';

// import React,{ useState } from "react";
// function Counter(){
//   const [count,setCounter] = useState(0);

//   function handleClick() {
//     setCount(count+3);
//   }
//   return(
//     <div>
//       <h2>Count:{count}</h2>
//       <button onClick={handleClick}>Increment by 3</button>
//       </div>
//   );
// }
// function App() {
//   return {
//     <div className="App">
//     <div className='App-header'>
//     <Counter></Counter>
//     <div></div>
//   }
// }
// export default Counter;









// ===>3
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './TodoGrid.css';

// const TodoGrid = () => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     axios.get('https://gorest.co.in/public/v1/todos')
//       .then(response => {
//         setTodos(response.data.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   const chunkArray = (array, size) => {
//     const chunkedArray = [];
//     for (let i = 0; i < array.length; i += size) {
//       chunkedArray.push(array.slice(i, i + size));
//     }
//     return chunkedArray;
//   };

//   const renderTodo = (todo) => {
//     return (
//       <div key={todo.id} className={`todo ${todo.completed ? 'completed' : ''}`}>
//         <h4>{todo.title}</h4>
//       </div>
//     );
//   };

//   const renderRow = (row) => {
//     return (
//       <div key={row[0].id} className="row">
//         {row.map(todo => {
//           return renderTodo(todo);
//         })}
//       </div>
//     );
//   };

//   const renderGrid = () => {
//     const chunkedTodos = chunkArray(todos, 3);
//     return (
//       <div className="grid">
//         {chunkedTodos.map(row => {
//           return renderRow(row);
//         })}
//       </div>
//     );
//   };

//   return (
//     <div className="container">
//       {renderGrid()}
//     </div>
//   );
// };






// // ===>4
// import { useEffect, useState } from "react";
// import { useState } from 'react-hook-form';
// import axios from "axios";


// function CoutactForm() {
//   const {register, handleSubmit,
//     fromState:{ errors}} = useForm();
//     const [sucessMessage,setSucessMessage] = useState("");
//   const [errorMessage,setErrorMessage]=useState("");

//   const onSubmit = (data) => {
//     axios.post("https://admin.srkprojects.com/web/api/client",data)
//     .then(response => {
//       setErrorMessage("Message sent sucessfully!")
//       setErrorMessage("")
//     })
//     .catch(error => {
//       setSucessMessage("");
//       setErrorMessage("Failed to send message.please try again later.")
//     });
//   };

// }

// return (
//   <form
//   onSubmit={handlieSubmit(onSubmit)}>
//     <div>
//       <label>Email:</label>
//       <input
//       type="email" {...register("email",
//       {required:true,pattern:/^/S+@/S+$/i})}
//       />

//       {errors.email?.type === "required" && 
//       <span> This feild is required</span>}
//       {errors.email?.type === "pattern"
//       && <span>please enter a valid email addres</span>}
//     </div>
//     <div>
//       <lable>Name:</lable>
//       <input type="text"  {...register("name",{required:true})} />
//         {errors.name?.type === "required" && 
//         <span>This feild is required</span>}
//     </div>
//     <div>
//       <lable>Message:</lable>
//       <textarea {...register("message",
//       {required:true})} />
//       {errors.message?.type === "required" && <span>This field is required</span>}
//     </div>
//     <div>
//       <button type ="submit">Send</button>
//     </div>
//     {sucessMessage && <p>{errorMessage}</p>}
//     {errorMessage && <p>{errorMessage}
//     </p>}
//   </form>
// );


// export default ContactForm;








// ===>5
// import { useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import axios from "axios";

// function ContactForm() {
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const initialValues = { email: "", name: "", message: "" };

//   const validationSchema = Yup.object({
//     email: Yup.string().email("Invalid email address").required("Email is required"),
//     name: Yup.string().required("Name is required"),
//     message: Yup.string().required("Message is required"),
//   });

//   const onSubmit = (values, { setSubmitting, resetForm }) => {
//     axios.post("https://admin.srkprojects.com/web/api/client/v1/contact-us/", values)
//       .then(response => {
//         setSuccessMessage("Message sent successfully!");
//         setErrorMessage("");
//         setSubmitting(false);
//         resetForm();
//       })
//       .catch(error => {
//         setSuccessMessage("");
//         setErrorMessage("Failed to send message. Please try again later.");
//         setSubmitting(false);
//       });
//   };

//   return (
//     <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
//       {({ isSubmitting }) => (
//         <Form>
//           <div>
//             <label>Email:</label>
//             <Field type="email" name="email" />
//             <ErrorMessage name="email" component="div" />
//           </div>
//           <div>
//             <label>Name:</label>
//             <Field type="text" name="name" />
//             <ErrorMessage name="name" component="div" />
//           </div>
//           <div>
//             <label>Message:</label>
//             <Field as="textarea" name="message" />
//             <ErrorMessage name="message" component="div" />
//           </div>
//           <div>
//             <button type="submit" disabled={isSubmitting}>Send</button>
//           </div>
//           {successMessage && <p>{successMessage}</p>}
//           {errorMessage && <p>{errorMessage}</p>}
//         </Form>
//       )}
//     </Formik>
//   );
// }

// export default ContactForm;








// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
