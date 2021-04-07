import React from "react"
import * as classes from "./contactForm.module.scss"
import axios from "axios"


class ContactForm extends React.Component{

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     email: '',
  //     phone: '',
  //     message: ''
  //   }
  // }
  //
  // onNameChange(event) {
  //   this.setState({name: event.target.value})
  // }
  //
  // onEmailChange(event) {
  //   this.setState({email: event.target.value})
  // }
  //
  // onPhoneChange(event) {
  //   this.setState({phone: event.target.value})
  // }
  //
  // onMsgChange(event) {
  //   this.setState({message: event.target.value})
  // }
  //
  // submitEmail(e){
  //   e.preventDefault();
  //   axios({
  //     method: "POST",
  //     url:"https://healthylivingpharmacyli-mailer.herokuapp.com/api/sendMail",
  //     data:  this.state
  //   }).then((response)=>{
  //     if (response.data.status === 'success'){
  //       console.log("Message Sent.");
  //       this.resetForm()
  //     }else if(response.data.status === 'fail'){
  //       console.log("Message failed to send.")
  //     }
  //   })
  // }
  //
  // resetForm(){
  //   this.setState({name: '', email: '',phone:'', message: ''})
  // }


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
              <div>
                <label htmlFor="name">Name</label>
                <input name="name" placeholder={`Enter name`} type="text"/>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input  name="email" placeholder={`Enter email`} type="email" />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input  name="phone" placeholder={`Enter phone`} id={`phone`} type="tel" />
              </div>
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea name="message" placeholder={`Comments Or Questions`} name="" id="description" />
            </div>
            <button  type={`submit`}>Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

export default ContactForm