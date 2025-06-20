import State from '../hooks/State.jsx';
import Form from '../hooks/Form.jsx';
import Effect from '../hooks/Effect.jsx';
import React from 'react';

import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div>
        <h1>About Page </h1>
        
        <p>This is the about page of your Vite project.</p>
        <Link to='/State'>UseState Example</Link><br/>
        <Link to='/form'>Controlled Form</Link><br/>
        <Link to='/effect'>UseEffect Example</Link>
        </div>
    )
}
export default About;