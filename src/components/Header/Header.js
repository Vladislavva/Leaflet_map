import React, { Component, useState, useRef } from 'react';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import Dev from './Dev/Dev';
const nav = [
    {
        name: 'О сервисе',
        href: 'kfk'
    },
    {
        name: 'Искать поездку',
        href: 'find'
    },
    {
        name: 'Cоздать поездку',
        href: 'create'
    },

]
const Header = () => {

    return (<div className=' header'>
        <Logo />
        <Dev />
        <Navigation navItems={nav} />
    </div>)
};
export default Header
