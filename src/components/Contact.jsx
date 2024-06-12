import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="left-contact">
        <div className="contact-container">
          <form action="https://api.web3forms.com/submit" method="POST" className="contact-left">

            <div className="contact-left-title">
              {/* <h3>Let's see what we can achieve!</h3> */}
            </div>
            <input type="hidden" name="access_key" value="f4ec59c6-cb94-4735-85fa-50997721f141" />
            <input type="text" name="name" placeholder="Your Name" className="contact-inputs" required></input>
            <input type="text" name="email" placeholder="Your e-mail" className="contact-inputs" required></input>
            <textarea name="message" placeholder="Your Message" className="contact-inputs" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

      </div>

      <div className="right-contact">
        <h1>Interested in knowing more?</h1>
        <h3>(Note to self: When logic meets creativity, the impossible starts to become <em>acheiveable</em>)</h3>

      </div>
    </div>
  )
}

export default Contact
