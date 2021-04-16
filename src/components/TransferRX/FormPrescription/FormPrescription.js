import React, { useRef, useState } from "react"
import {graphql, useStaticQuery} from "gatsby"
import DndUpload from "../dndUpload"
import { MedicationNames } from "../MedicationNames"
import * as classes from "./formPrescription.module.scss"


export function FormPrescription(){


    const data = useStaticQuery(graphql`
        {
            strapiTransferRx {
                Form {
                    Title_Form
                    Description_Form
                }
            }
        }
    `)
    return (
      <section className={classes.sectionFormPrescription}>
        <div className="container">
          <h2>{data.strapiTransferRx.Form.Title_Form}</h2>
          <p>{data.strapiTransferRx.Form.Description_Form}</p>

          <form
            name="contact v2"
            method="post"
            data-netlify="true"
            onSubmit="submit"
            className={`row ${classes.flexStyles}`}>
            <h3>Transfer Your Prescriptions</h3>
            <input type="hidden" name="form-name" value="contact v2" />

            <div className={classes.formInput}>
              <label>
                <h4>First Name</h4>
                <input name="First Name" placeholder={`Enter First Name`} id={`firstName`} type="text" />
              </label>
            </div>
            <div className={classes.formInput}>
              <label>
                <h4> Last Name</h4>
                <input name="Last Name" placeholder={`Enter Last Name`} id={`lastName`} type="text" />
              </label>
            </div>
            <div className={classes.formInput}>

              <label>
                <h4>Phone Number</h4>
                <input name="Phone Number" placeholder={`Enter Phone Number`} id={`phoneNumber`} type="tel" />
              </label>
            </div>
            <div className={classes.formInput}>

              <label>
                <h4>Email Address</h4>
                <input name="Email" placeholder={`Enter Email Address`} id={`emailAddress`} type="email" />
              </label>
            </div>
            <div className={classes.formInput}>
              <h4>Gender</h4>

              <div className="row">
                <label className={classes.labelRadio}>
                  <input className={classes.radio} value={`Female`} type="radio" name={`Gender`} />
                  <span className={classes.fake}></span>
                  <span>Female</span>
                </label>

                <label className={classes.labelRadio}>
                  <input className={classes.radio} value={`Male`} type="radio" name={`Gender`} />
                  <span className={classes.fake}></span>
                  <span>Male</span>
                </label>
              </div>
            </div>

            <div className={classes.formInput}>

              <label className={classes.date} htmlFor={`dateOfBirth`}>
                <h4>Date of Birth</h4>
                <input
                  onfocus="(this.type='date')"
                  placeholder={`Enter Date of Birth`}
                  id={`dateOfBirth`}
                  type="date"
                  name="Date of Birth"
                />
              </label>
            </div>


            <div className={classes.formInput}>

              <label>
                <h4>Home Address</h4>
                <input name="Home Address" placeholder={`Enter Home Address`}  type="text" />
              </label>
            </div>
            <div className={classes.formInput}>

              <label>
                <h4>Insurance Company</h4>
                <input name="Insurance Company" placeholder={`Enter Insurance Company`} type="text" />
              </label>
            </div>
            <div className={classes.formInput}>

              <label>
                <h4>ID Number of Cardholder</h4>
                <input name="ID Number of Cardholder" placeholder={`Enter ID Number of Cardholder `} type="text" />
              </label>
            </div>
            <div className={classes.formInput}>

              <label>
                <h4>RxBin</h4>
                <input name="RxBin" placeholder={`Enter RxBin`} type="text" />
              </label>
            </div>
            <div className={classes.formInput}>

              <label>
                <h4>RxGrp</h4>
                <input name="RxGrp" placeholder={`Enter RxGrp`}  type="text" />
              </label>
            </div>
            <div className={classes.formInput}>

              <label>
                <h4>RxPCN</h4>
                <input name="RxPCN" placeholder={`Enter RxPCN`} type="text" />
              </label>
            </div>
            <div className={classes.formInput}>

              <label>
                <h4>Insurance Member ID</h4>
                <input name="Insurance Member ID" placeholder={`Enter Insurance Member ID`}  type="text" />
              </label>
            </div>

            <DndUpload />

            <div className="row" style={{
              flexWrap: `wrap`,
            }}>
              <div className={classes.formInput}>
                <h4>Do you have drug allergies?</h4>

                <div className="row">
                  <label className={classes.labelRadio}>
                    <input className={classes.radio} value={`Yes`} type="radio" name={`Do you have drug allergies?`} />
                    <span className={classes.fake}></span>
                    <span>Yes</span>
                  </label>

                  <label className={classes.labelRadio}>
                    <input className={classes.radio} value={`No`} type="radio" name={`Do you have drug allergies?`} />
                    <span className={classes.fake}></span>
                    <span>No</span>
                  </label>
                </div>
              </div>
              <div className={classes.formInput}>

                <label>
                  <h4>If yes, please list</h4>
                  <input name="If yes, please list" placeholder={`Enter If yes, please list`}  type="text" />
                </label>
              </div>
            </div>

            <h3>Current Pharmacy Information</h3>

            <div className={classes.formInput}>

              <label>
                <h4>Pharmacy Name</h4>
                <input name="Pharmacy Name" placeholder={`Enter Pharmacy Name`} type="text" />
              </label>
            </div>
            <div className={classes.formInput}>

              <label>
                <h4>Pharmacy Address</h4>
                <input name="Pharmacy Address" placeholder={`Enter Pharmacy Address`} type="text" />
              </label>
            </div>
            <div className={classes.formInput}>

              <label>
                <h4>Pharmacy Phone</h4>
                <input name="Pharmacy Phone" placeholder={`Enter Pharmacy Phone`}  type="tel" />
              </label>
            </div>
            <MedicationNames />
            <div className={classes.formInput}>
              <h4>Do you have drug allergies?</h4>

              <div className="row" >
                <label className={classes.labelRadio}>
                  <input className={classes.radio} value={`Delivery`} type="radio" name={`Do you have drug allergies?`} />
                  <span className={classes.fake}></span>
                  <span>Delivery</span>
                </label>

                <label className={classes.labelRadio}>
                  <input className={classes.radio} value={`Pick up`} type="radio" name={`Do you have drug allergies?`} />
                  <span className={classes.fake}></span>
                  <span>Pick up</span>
                </label>
              </div>
            </div>
            <div className={classes.formInput}>

              <label>
                <h4>Your Message to Us</h4>
                <input name="Your Message to Us" placeholder={`Write Here`}  type="tel" />
              </label>
            </div>
            <div className={classes.formInput}>

              <label>
                <h4>7 plus 6 equals?</h4>
                <input name="7 plus 6 equals?" placeholder={`Write Here`} type="tel" />
              </label>
            </div>

            <button className={classes.submit} type={`Submit`}>Submit</button>
          </form>
        </div>
      </section>
    )
  }