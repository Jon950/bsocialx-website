// React
import React from 'react';

// CSS
import '../styleSheet/footer.css';

function Footer() {
    const submitQuestion = (event:any) => {
        event.preventDefault();
    }
  return (
   <footer>
       <h2>Just SignUp Now!</h2>
       <a href="https://bsocialxapp.netlify.app" className="smallaTagBtn" >SignUp with BsocialX</a>

       <h4>Have any question?</h4>
       <form onSubmit={submitQuestion}>
           <input type="text" placeholder="Your name?" required/>
           <button type="submit" >Send</button>
           <textarea placeholder="Ask a question" required/>
       </form>
   </footer>
  );
}

export default Footer;
