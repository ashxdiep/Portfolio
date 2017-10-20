import React, { Component } from 'react';
import './Contact.css'

class Contact extends Component {
render(){
	return(
		<div >
			<form className = "contactform">
			Name: <br/>
			<input type = "text" name ="name" placeholder="What do you want me to call you?"/><br/>
			Email: <br/>
			<input type = "text" name ="email" placeholder = "Where can I reach you?"/><br/>
			Message:<br/>
			<input type = "text" className = "message" name="message" placeholder ="Talk dirto me"/><br/>
			<input type = "submit"/>  
			</form>
		</div>
	);
}
}

export default Contact;