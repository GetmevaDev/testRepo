import * as React from "react"
import Head from "./Head"
import Header from "./header"
import "./layout.css"
import { Footer } from "./footer"
import { PopUp } from "./PopUp"

class Layout extends React.Component{

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: ''
  //   }
  // }
  //
  // componentDidMount() {
  //   const storedValue = localStorage.getItem("my_value");
  //   if (storedValue) {
  //     this.setState({ value: storedValue });
  //   }
  // }
  //
  // handleChange = e => {
  //   const value = e.target.value;
  //   this.setState({ value });
  //   localStorage.setItem("my_value", value);
  // }

  // marginSocialMedia, children
  render() {
    return (
      <>
        <Head />
        <PopUp />
        <Header marginSocialMedia={this.props.marginSocialMedia} />
        <main>{this.props.children}</main>
        <Footer />
      </>
    )
  }


}

export default Layout
