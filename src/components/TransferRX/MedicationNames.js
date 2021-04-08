import React, {useState} from "react"
import Plus from "../../images/plus.svg"
import * as classes from "./FormPrescription/formPrescription.module.scss"
import Cross from "../../images/Cross.svg"


export class MedicationNames extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      textareaArray: [],
      key: 0,
    }
  }


  addTextarea = () => {
    this.setState({

      textareaArray: this.state.textareaArray.concat(
       <div>
       <textarea
                  className={classes.refill}
                  name="RefillNumbersMedicationNames"
                  placeholder={`Medication Name(s)/ Or Prescription Number(s)`}
                />
        <button  type={`button`} className={classes.buttonClose} >
          <img src={Cross} alt="" />
        </button>
      </div>
      ),
      key: this.state.key + 1,
    })

  }

  removeTextarea = (id) =>{
    this.setState(({textareaArray}) => {
      const idx = textareaArray.indexOf(id);
      textareaArray.splice(idx, 1)


      return {textareaArray: textareaArray}
    })
  }


  render(){
    return(
      <div className={classes.medicationTextarea}>
        <label className={classes.textareaContainer}>
          <h4>Please Enter Your Refill Numbers or Medication Names</h4>
          <div>
                <textarea
                  className={classes.refill}
                  name="RefillNumbersMedicationNames"
                  placeholder={`Medication Name(s)/ Or Prescription Number(s)`}
                />
            <button onClick={this.removeTextarea.bind(this, this.state.key)} type={`button`} className={classes.buttonClose} >
              <img src={Cross} alt="" /></button>
          </div>

        {

          this.state.textareaArray.map((item, i) =>{
            return (
         <div>
                <textarea
                  className={classes.refill}
                  name="Please Enter Your Refill Numbers or Medication Names"
                  placeholder={`Medication Name(s)/ Or Prescription Number(s)`}
                />
              <button onClick={this.removeTextarea.bind(this, this.state.key)} type={`button`} className={classes.buttonClose} >
                <img src={Cross} alt="" /></button>
          </div>
            )
          })
        }
        </label>
        <button
          onClick={this.addTextarea.bind(this)}
          type={`button`}
          className={classes.buttonOpen}>
          <img src={Plus} alt="" />Add more</button>
      </div>
    )
  }


}