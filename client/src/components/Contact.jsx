import React from 'react';
import ReactDom from 'react-dom';
import {Component} from 'react';
import './Contact.scss';


export default class Contact extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      name: '',
      body: ''
    }

  }

sendMe() {
window.open(`mailto:${this.state.email}?subject=${this.state.subject}&body=${this.state.body}`)
}


  render() {
    return (

    <div id="contactBG">
      <div id="form-main" class="fadeInLeftBig">
        <div id="form-div">
          <form class="form" id="form1">

            <p class="name" >
              <input name="name" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" onChange={(e)=> this.setState({ name: e.target.value})} />
            </p>

            <p class="email">
              <input name="email" type="text" class="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" onChange={(e)=> this.setState({ email: e.target.value})}/>
            </p>

            <p class="text">
              <textarea name="text" class="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Comment" onChange={(e)=> this.setState({ body: e.target.value})}></textarea>
            </p>


            <div class="submit">
              <input type="submit" value="SEND" id="button-blue" onClick={()=> this.sendMe()}/>
              <div class="ease"></div>
            </div>
          </form>
        </div>
        </div>

        </div>
    )
  }
}
