import React from 'react';

import './SideBar.css'

const SideBar = (props) => {
    console.log(props);
    return (
        <div style={{
            'backgroundColor': 
            props.place === 'left' ? 'pink' : 'yellow'
        }} className="sidebar"> This is SideBar</div>

    );
};

export default SideBar; 