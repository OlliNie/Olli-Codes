import React, { PureComponent } from 'react';
import './contactMe.css'


export default class ContactMe extends PureComponent {

  state = {
    userEmail: '',
    message: ''
  }

  render() {
    return (
      <form>
        <label>EMAIL:
        <input placeholder='YOUR EMAIL'></input>
        </label>
        <label>MESSAGE:
          <textarea placeholder='message' placeholder='MESSAGE' id='message'></textarea>
        </label>
        <button>SUBMIT</button>
      </form>
    )
  }
}