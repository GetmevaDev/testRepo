import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import * as classes from "../../ContactUs/ContactForm/contactForm.module.scss"




export function FormRefillYourRX(){

  const data = useStaticQuery(graphql`
      {
          strapiRefillsPage {
              Text
              Title_Form
          }
      }
  `)

  const {Title_Form, Text} = data.strapiRefillsPage;
  return(
    <section style={{
      marginTop: `-140px`,
    }}  className={`${classes.sectionContactForm } ${classes.adaptiveStyles}`}>
      <div className="container">
        <h2>{Title_Form}</h2>
        <p>{Text}</p>
        <form
          name="contact v3"
          method="post"
          data-netlify="true"
          onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="contact v3" />
          <h3>Refill a Prescription</h3>
          <div className={`row ${classes.flexStyles}`}>

            <div className={classes.flexBlock}>
              <label htmlFor="name">First Name</label>
              <input name="First Name" placeholder={`Enter First Name`} id={`First-name`} type="text"/>
            </div>
            <div className={classes.flexBlock}>
              <label htmlFor="name">Last Name</label>
              <input name="First Name" placeholder={`Enter Last Name`} id={`Last-name`} type="text"/>
            </div>

            <div className={classes.flexBlock}>
              <label htmlFor="email">Email Address</label>
              <input  name="Email Address" placeholder={`Enter Email Address`} id={`email`} type="email" />
            </div>

            <div className={classes.flexBlock}>
              <label htmlFor="phone">Phone Number</label>
              <input  name="Phone Number" placeholder={`Enter Phone Number`} id={`phone`} type="tel" />
            </div>
          </div>
          <div>
            <label htmlFor="description">Please Enter Your Refill Numbers or Medication Names</label>
            <textarea name="Please Enter Your Refill Numbers or Medication Names" placeholder={`Refill # or Name`} />
          </div>

          <div className={`row ${classes.flexStyles}`}>
            <div className={classes.formInput}>
              <h4>Delivery or Pick up?</h4>

              <div className="row">
                <label className={classes.labelRadio}>
                  <input className={classes.radio} value={`Delivery`} type="radio" name={`Delivery or Pick up?`} />
                  <span className={classes.fake}></span>
                  <span>Delivery</span>
                </label>

                <label className={classes.labelRadio}>
                  <input className={classes.radio} value={`Pickup`} type="radio" name={`Delivery or Pick up?`} />
                  <span className={classes.fake}></span>
                  <span>Pickup</span>
                </label>
              </div>
            </div>
            <div className={classes.flexBlock}>
              <label htmlFor="YourMessage">Your Message to Us</label>
              <input name="Your Message to Us" placeholder={`Enter First Name`} id={`YourMessage`} type="text"/>
            </div>

            <div className={classes.flexBlock}>
              <label htmlFor="number">3 plus 9 equals?*</label>
              <input name="3 plus 9 equals?*" placeholder={`Write Here`} id={`number`} type="text"/>
            </div>
          </div>

          <button  type={`submit`}>Submit</button>
        </form>
      </div>
    </section>
  )
}