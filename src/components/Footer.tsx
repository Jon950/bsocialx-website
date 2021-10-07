// React
import React from 'react';

// CSS
import '../styleSheet/footer.css';

function Footer() {
    // const submitQuestion = (event:any) => {
    //     event.preventDefault();
    // }
  return (
   <footer>
       <h2>Just SignUp Now!</h2>
       <a href="https://bsocialx-beta.netlify.app" className="smallaTagBtn" >SignUp with BsocialX</a>

       {/* <h4>Have any questions?</h4>
       <form name="contact" method="POST" data-netlify="true">
           <input type="text" name="name" placeholder="Your name..." required/>
           <button type="submit" >Send</button>
           
           <div data-netlify-recaptcha="true" className="recaptcha"></div>

           <input type="email" name="email" placeholder="Your email..." required/>
           <textarea name="message" placeholder="Your question..." required/>
       </form> */}
   </footer>
  );
}

export default Footer;
