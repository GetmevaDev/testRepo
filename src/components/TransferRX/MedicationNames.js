import React from "react"
import * as classes from "./FormPrescription/formPrescription.module.scss"



export class MedicationNames extends React.Component{

  render(){
    return(
      <div className={classes.medicationTextarea}>
        <label className={classes.textareaContainer}>
          <h4>Please Enter Your Refill Numbers or Medication Names</h4>
          <div>
                <textarea
                  className={classes.refill}
                  name="Please Enter Your Refill Numbers or Medication Names"
                  placeholder={`Medication Name(s)/ Or Prescription Number(s)`}
                />
          </div>
            </label>
          </div>
    )
  }
}