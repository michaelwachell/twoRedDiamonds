import React from "react";
import ReactDom from "react-dom";
import { Component } from "react";
import "./Contact.scss";
import axios from "axios";
import Github from "../../../Assets/github.svg";
import Linked from "../../../Assets/linked.png";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: "",
      message: "",
      sent: false
    };
  }

  async sendMe() {
    try {
      const message = await axios.post("/contact", {
        from: this.state.email,
        name: this.state.name,
        message: this.state.message
      });

      console.log(message);
    } catch (err) {
      console.log(err, "here yo error");
    }
  }

  render() {
    return (
      <div id="contactBG">
        <div id="form-main">
          <div id="form-div">
            <form className="form" id="form1">
              <p className="name">
                <input
                  name="name"
                  type="text"
                  className="feedback-input"
                  placeholder="Name"
                  id="name"
                  onChange={e => this.setState({ name: e.target.value })}
                />
              </p>

              <p className="email">
                <input
                  name="email"
                  type="text"
                  className="feedback-input"
                  id="email"
                  placeholder="Email"
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </p>

              <p className="theText">
                <textarea
                  name="text"
                  type="text"
                  className="feedback-input"
                  id="comment"
                  placeholder="Comment"
                  onChange={e => this.setState({ message: e.target.value })}
                />
              </p>

              <div className="submit">
                <input
                  type="submit"
                  value="SEND"
                  id="button-blue"
                  onClick={() => this.sendMe()}
                />
                <div className="ease" />
              </div>
            </form>
          </div>
        </div>
        <div className="find-me" style={{ marginTop: 30 }}>
          <div className="max-me" style={{marginRight: 80}} align="center">
         
            <a href="https://github.com/michaelwachell" target="_blank">
          
              <img width="100%" src={Github} />
            </a>
          </div>
          <div className="max-me" align="center">
        
            <a
              href="https://www.linkedin.com/in/mwachell
"
              target="_blank"
            >
            
              <img width="100%" src={Linked} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
