import React, { Component } from 'react';
import './Works.css';

class Works extends Component {
	render(){
		return(
			<div className = "project-container">
       			 <a href = "https://shielded-thicket-89622.herokuapp.com"><img className="project" src="https://d18l82el6cdm1i.cloudfront.net/solvable/2e19e72524.867b9a0062.H41FWU.png" /><span className = "proj-words"> TossUp</span></a>
        		 <a href = "https://evening-lake-18854.herokuapp.com/"><img className="project" src="https://lh3.googleusercontent.com/LvnBMnd1aGUB7-MDTjUlQFJi8iyH7fzKynwaWioQkq9vQXJW79Z5_TKZFaRBE-q4tOA=w300" /> <span className = "proj-words"> Restaurant Finder</span></a>
     			 <a href = "https://polar-everglades-77869.herokuapp.com/"><img className="project1" src="http://lh3.googleusercontent.com/T1eZ6-ibB-qlafRq6sRCULi4qO8lU3msaURAby23EhjlNm7RJEbu3prEV4mbkhJ8SQ=w300" /> <span className = "proj-words"> Aisle Finder</span></a>
      		</div>
		);
	}
}
export default Works;