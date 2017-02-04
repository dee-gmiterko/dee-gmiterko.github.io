import React, { Component } from 'react';
import Template from './About.pug.js';
import siteSettings from './../../data/site.json';

class About extends Component {

	render() {

		var calculateAge = (birthMonth, birthDay, birthYear) => {
			let todayDate = new Date();
			let todayYear = todayDate.getFullYear();
			let todayMonth = todayDate.getMonth();
			let todayDay = todayDate.getDate();
			let age = todayYear - birthYear;

			if (todayMonth < birthMonth - 1)
			{
				age--;
			}

			if (birthMonth - 1 === todayMonth && todayDay < birthDay)
			{
				age--;
			}
			return age;
		};

		var siteAuthorYears = calculateAge(6, 23, 1996)

		return <Template locale={this.props.route.locale} siteSettings={siteSettings} siteAuthorYears={siteAuthorYears} />
	}
}

export default About;
