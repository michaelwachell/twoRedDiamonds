import React from 'react';
import ReactDom from 'react-dom';
import {Component} from 'react';
import './Contact.scss';
import axios from 'axios';

export default class Contact extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      name: '',
      message: '',
      sent: false
    }

  }

  async sendMe() {
    try {
      const message = await axios.post('/contact', {
        from: this.state.email,
        name: this.state.name,
        message: this.state.message
      });

      console.log(message);
    } catch (err) {
      console.log(err, 'here yo error')
    }

    // window.open(`mailto:${this.state.email}?subject=${this.state.subject}&message=${this.state.message}`)
  }

  render() {
    return (<div id="contactBG">

      <div id="form-main" class="fadeInLeftBig">
        <div id="form-div">
          <form class="form" id="form1">

            <p class="name">
              <input name="name" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" onChange={(e) => this.setState({name: e.target.value})}/>
            </p>

            <p class="email">
              <input name="email" type="text" class="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" onChange={(e) => this.setState({email: e.target.value})}/>
            </p>

            <p class="text">
              <textarea name="text" class="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Comment" onChange={(e) => this.setState({message: e.target.value})}></textarea>
            </p>

            <div class="submit">
              <input type="submit" value="SEND" id="button-blue" onClick={() => this.sendMe()}/>
              <div class="ease"></div>
            </div>
          </form>
        </div>
        {
          this.sent
            ? <h2>It's away! Thanks for reaching out
              </h2>
            : null
        }
        </div>

    </div>)
  }
}
