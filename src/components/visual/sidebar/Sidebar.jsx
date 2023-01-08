import React from 'react'
import './Sidebar.css'
import { Icon } from '@iconify/react';

function Sidebar(props) {

    const {open, setOpen} = props;

  return (
    <div className={'sidebar ' + (open ? 'open' : '')}>
        <div className="sidebar-logo">
            <img id="side-logo" src={require('../../../resources/logos/ht-logo-white.png')} alt="" />
            <h2 id="sidebar-name">Hugo Tamm</h2>
            <h3 id="sidebar-url">huxystudios.com</h3>
        </div>

        <div>
            <div id="side-button" onClick={() => setOpen(!open)}>
                <Icon id="side-button-icon" icon="material-symbols:chevron-right-rounded" />
            </div>
        </div>
        
        <h3 className="sidebar-section">Navigation</h3>
        <div>
            <div className="sidebar-icons">
                <Icon icon="material-symbols:home-outline-rounded" />
                <h3 className="icon-text">Home</h3>
            </div>
            <div className="sidebar-icons">
                <Icon icon="ic:baseline-work-outline" />
                <h3 className="icon-text">Work</h3>
            </div>
            <div className="sidebar-icons">
                <Icon icon="mdi:user-circle-outline" />
                <h3 className="icon-text">About</h3>
            </div>
            <div className="sidebar-icons">
                <Icon icon="ic:outline-email" />
                <h3 className="icon-text">Contact</h3>
            </div>
            <div className="sidebar-icons">
                <Icon icon="uil:graph-bar" />
                <h3 className="icon-text">Statistics</h3>
            </div>
            <div className="sidebar-icons">
                <Icon icon="octicon:gear-16" />
                <h3 className="icon-text">Settings</h3>
            </div>
            <div className="sidebar-icons">
                <Icon icon="ph:copyright-bold" />
                <h3 className="icon-text">Imprint</h3>
            </div>
        </div>

        <div id="sectionDivider">
            _
        </div>

        <h3 className="sidebar-section">Socials</h3>
        <div>
            <div className="sidebar-media">
                <Icon icon="ph:linkedin-logo-bold" />
                <h3 className="icon-text">LinkedIn</h3>
            </div>
            <div className="sidebar-media">
                <Icon icon="codicon:github" />
                <h3 className="icon-text">GitHub</h3>
            </div>
        </div>

        <div id="sidebar-copyright">
            <p>© 2022 Hugo Tamm. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Sidebar