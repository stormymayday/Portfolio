import React from 'react';
import { Link } from 'gatsby';

// Array of objects containing links in the Navbar and Sidebar
const data = [
	{
		id: 1,
		text: 'home',
		url: '/'
	},
	{
		id: 2,
		text: 'about',
		url: '/about/'
	},
	{
		id: 3,
		text: 'projects',
		url: '/projects/'
	},
	// {
	// 	id: 4,
	// 	text: 'resume',
	// 	url: '/resume/'
	// },
	{
		id: 5,
		text: 'contact',
		url: '/contact/'
	}
];

// Iterating over the array of link objects (data), returning the list item, and storing it in the tempLinks
const tempLinks = data.map((link) => {
	return (
		<li key={link.id}>
			<Link to={link.url}>{link.text}</Link>
		</li>
	);
});

// Can be combined

// Exporting the component adding a specific css class for the Navbar and the Sidebar
export default ({ styleClass }) => {
	return <ul className={`page-links ${styleClass ? styleClass : ''}`}>{tempLinks}</ul>;
};
