import React from 'react'
import './Footer.css'

//icons
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <div className='footer-outer-container'>
      <div className='footer-inner-container'>
        <div className='footer-icons'>
          <ul>
            <li><FacebookOutlinedIcon /></li>
            <li><InstagramIcon /></li>
            <li><YouTubeIcon /></li>
          </ul>
        </div>
        <div className='footer-data'>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
           </div>
            <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='service-code'>
            <p>Service code</p>
          </div>
          <div className='copy-write'>
            &copY: 19917-2025 Netflix, Inc.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
