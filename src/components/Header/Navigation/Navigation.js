import React, { Component, useState, useRef } from 'react';
import {
    Link
  } from "react-router-dom";


const Navigation = ({navItems}) => {

    return (<div className='Navigation'>
        {
            navItems.map(navItem => {
                return  <Link to={navItem.href}>{navItem.name}</Link> 
            })
        }
       
    </div>)
  };
  export default Navigation
  