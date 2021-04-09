import React from "react"
import * as classes from "./contactForm.module.scss"


class ContactForm extends React.Component{


render(){

    return(
      <section  className={classes.sectionContactForm}>
        <div className="container">
          <form
            name="contact v1"
            method="post"
            data-netlify="true"
            onSubmit="submit"
          >
            <input type="hidden" name="form-name" value="contact v1" />
            <div className={`row ${classes.flexStyles}`}>
              <div className={classes.flexBlock}>
                <label htmlFor="name">Name</label>
                <input name="name" placeholder={`Enter name`} type="text"/>
              </div>
              <div className={classes.flexBlock}>
                <label htmlFor="email">Email</label>
                <input  name="email" placeholder={`Enter email`} type="email" />
              </div>
              <div className={classes.flexBlock}>
                <label htmlFor="phone">Phone</label>
                <input  name="phone" placeholder={`Enter phone`} id={`phone`} type="tel" />
              </div>
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea name="message" placeholder={`Comments Or Questions`} />
            </div>
            <button  type={`submit`}>Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

export default ContactForm