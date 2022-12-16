import React from 'react'
import './Sidebar.css'
import { Icon } from '@iconify/react';

function Sidebar() {
  return (
    <div id="sidebar">
        <div>
            <img id="side-logo" src={require('../../../resources/logos/ht-logo-white.png')} alt="" />
        </div>

        <div>
            <div id="side-button">
                <Icon id="side-button-icon" icon="material-symbols:chevron-right-rounded" />
            </div>
        </div>
        
        <h3>Navigation</h3>
        <div>
            <div class="sidebar-icons">
                <Icon class="sidebar-icon" icon="material-symbols:home-outline-rounded" />
            </div>
            <div class="sidebar-icons">
                <Icon class="sidebar-icon" icon="ic:baseline-work-outline" />
            </div>
            <div class="sidebar-icons">
                <Icon class="sidebar-icon" icon="mdi:user-circle-outline" />
            </div>
            <div class="sidebar-icons">
                <Icon class="sidebar-icon" icon="ic:outline-email" />
            </div>
            <div class="sidebar-icons">
                <Icon class="sidebar-icon" icon="uil:graph-bar" />
            </div>
            <div class="sidebar-icons">
                <Icon class="sidebar-icon" icon="octicon:gear-16" />
            </div>
            <div class="sidebar-icons">
                <Icon class="sidebar-icon" icon="ph:copyright-bold" />
            </div>
        </div>

        <h3>Socials</h3>
        <div>
            media
        </div>
    </div>
  )
}

export default Sidebar