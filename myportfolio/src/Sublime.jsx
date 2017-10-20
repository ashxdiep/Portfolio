import React, { Component } from 'react';
import  './Sublime.css';
import Works from './Works';
import Contact from './Contact';

class Sublime extends Component {
	constructor(props){
		super(props);

		this.state = {
			clicked: 'me'
		}
		console.log(this.state.clicked);
	}
	render(){
		if (this.state.clicked === 'me'){
		return (
		<div className="container bigbox">
        <div className="row exbox">
          <div className = "col-md-4 icons" ><span className="glyphicon glyphicon-remove-circle" aria-hidden="true" />
            <span className="glyphicon glyphicon-minus-sign" aria-hidden="true" />
            <span className="glyphicon glyphicon-resize-full" aria-hidden="true" /></div>
          <div className="col-md-4 readme"> README.md --- myportfolio </div>
        </div>
        <div className="tabs">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
          <div className="btn-group" role="group" aria-label="...">
            <button type="button" className="btn btn-default" onClick = {() => { this.setState({ clicked: 'me' }) } }>Me</button>
            <button type="button" className="btn btn-default" onClick = {() => { this.setState({ clicked: 'works' }) } }>Works</button>
            <button type="button" className="btn btn-default" onClick = {() => { this.setState({ clicked: 'contact' }) } }>Contact me</button>
          </div>
        </div>
        <div className="text-box">
          <div className="one"><span className="number">1</span> Hello world, my name is Ashley Diep. </div>
          <div className="two"><span className="number">2</span> I am a full stack developer living in Austin, Texas. </div>
          <div className="three"><span className="number">3</span> Check out my recent projects </div>
          <div className="four"><span className="number">4</span> Orrr lets chit chat. Contact me @ ash.d.321@gmail.com <span className="blinker"> | </span> </div> 
          <div className="container bashwindow">
            <div className="row bashheader">
              <div className="col-md-3 icons" ><span className="glyphicon glyphicon-menu-left" aria-hidden="true" />
                <span className="glyphicon glyphicon-minus-sign" aria-hidden="true" />
                <span className="glyphicon glyphicon-resize-full" aria-hidden="true" /></div>
              <div className="col-md-9">
                ashleydiep -- -bash -- 80x24 </div>
            </div>
            <div className="bashbody">
              Last login: Thu Oct 19 11:15:28 on ttys000 <br/>
              Ashleys-MacBook-Pro:~ ashleydiep$ cd myportfolio 
              <div className="components">
              	<img className = "pic" src = "https://avatars0.githubusercontent.com/u/24279695?s=460&v=4" alt = "my pic"/>
              </div>
            </div>
          </div>
          </div>
      </div>
		);
	}

	else if (this.state.clicked === 'works'){
		return (
		<div className="container bigbox">
        <div className="row exbox">
          <div className = "col-md-4 icons" ><span className="glyphicon glyphicon-remove-circle" aria-hidden="true" />
            <span className="glyphicon glyphicon-minus-sign" aria-hidden="true" />
            <span className="glyphicon glyphicon-resize-full" aria-hidden="true" /></div>
          <div className="col-md-4 readme"> README.md --- myportfolio </div>
        </div>
        <div className="tabs">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
          <div className="btn-group" role="group" aria-label="...">
            <button type="button" className="btn btn-default" onClick = {() => { this.setState({ clicked: 'me' }) } }>Me</button>
            <button type="button" className="btn btn-default" onClick = {() => { this.setState({ clicked: 'works' }) } }>Works</button>
            <button type="button" className="btn btn-default" onClick = {() => { this.setState({ clicked: 'contact' }) } }>Contact me</button>
          </div>
        </div>
        <div className="text-box">
          <div className="one"><span className="number">1</span> Hello world, my name is Ashley Diep. </div>
          <div className="two"><span className="number">2</span> I am a full stack developer living in Austin, Texas. </div>
          <div className="three"><span className="number">3</span> Check out my recent projects!</div>
          <div className="four"><span className="number">4</span> Orrr lets chit chat. Contact me @ ash.d.321@gmail.com <span className="blinker"> | </span> </div> 
          <div className="container bashwindow">
            <div className="row bashheader">
              <div className="col-md-3 icons" ><span className="glyphicon glyphicon-menu-left" aria-hidden="true" />
                <span className="glyphicon glyphicon-minus-sign" aria-hidden="true" />
                <span className="glyphicon glyphicon-resize-full" aria-hidden="true" /></div>
              <div className="col-md-9">
                ashleydiep -- -bash -- 80x24 </div>
            </div>
            <div className="bashbody">
              Last login: Thu Oct 19 11:15:28 on ttys000 <br/>
              Ashleys-MacBook-Pro:~ ashleydiep$ cd myportfolio 
              <div className="components">
              	<Works />
              </div>
            </div>
          </div>
          </div>
      </div>
		);
	}
	else {
		return (
		<div className="container bigbox">
        <div className="row exbox">
          <div className = "col-md-4 icons" ><span className="glyphicon glyphicon-remove-circle" aria-hidden="true" />
            <span className="glyphicon glyphicon-minus-sign" aria-hidden="true" />
            <span className="glyphicon glyphicon-resize-full" aria-hidden="true" /></div>
          <div className="col-md-4 readme"> README.md --- myportfolio </div>
        </div>
        <div className="tabs">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
          <div className="btn-group" role="group" aria-label="...">
            <button type="button" className="btn btn-default" onClick = {() => { this.setState({ clicked: 'me' }) } }>Me</button>
            <button type="button" className="btn btn-default" onClick = {() => { this.setState({ clicked: 'works' }) } }>Works</button>
            <button type="button" className="btn btn-default" onClick = {() => { this.setState({ clicked: 'contact' }) } }>Contact me</button>
          </div>
        </div>
        <div className="text-box">
          <div className="one"><span className="number">1</span> Hello world, my name is Ashley Diep. </div>
          <div className="two"><span className="number">2</span> I am a full stack developer living in Austin, Texas. </div>
          <div className="three"><span className="number">3</span> Check out my recent projects!</div>
          <div className="four"><span className="number">4</span> Orrr lets chit chat. Contact me @ ash.d.321@gmail.com <span className="blinker"> | </span> </div> 
          <div className="container bashwindow">
            <div className="row bashheader">
              <div className="col-md-3 icons" ><span className="glyphicon glyphicon-menu-left" aria-hidden="true" />
                <span className="glyphicon glyphicon-minus-sign" aria-hidden="true" />
                <span className="glyphicon glyphicon-resize-full" aria-hidden="true" /></div>
              <div className="col-md-9">
                ashleydiep -- -bash -- 80x24 </div>
            </div>
            <div className="bashbody">
              Last login: Thu Oct 19 11:15:28 on ttys000 <br/>
              Ashleys-MacBook-Pro:~ ashleydiep$ cd myportfolio 
              <div className="components">
                <Contact />
              </div>
            </div>
          </div>
          </div>
      </div>
		);
	}
	}
}

export default Sublime;