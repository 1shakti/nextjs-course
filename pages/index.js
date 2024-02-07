import { useRef } from "react"

export default function Home() {
  const emailInputRef = useRef(null); 
  const feedbackInputRef = useRef(null);

  const submitFeedbackHandler = (event) => {
    event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredFeedback = feedbackInputRef.current.value;
    
        const reqBody = { email: enteredEmail, text: enteredFeedback }
  
        fetch('/api/feedback',{
          method:"POST",
          body: JSON.stringify(reqBody),
          headers:{
            "Content-Type": "application/json"
          }
        })
        .then(response => response.json())
        .then(data => console.log(data))
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFeedbackHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" name="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Email Address</label>
          <textarea id='feedback' rows='5' ref={feedbackInputRef}></textarea>
        </div>
        <button>Submit Feedback</button>
      </form>
    </div>
  )
}
