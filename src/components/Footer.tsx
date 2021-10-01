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
       <a href="https://bsocialx.netlify.app" className="smallaTagBtn" >SignUp</a>
       <form onSubmit={submitQuestion}>
           <input type="text" placeholder="Ask a question"/>
           <button type="submit" >Send</button>
       </form>
   </footer>
  );
}

export default Footer;
