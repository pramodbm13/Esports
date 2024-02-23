import React from 'react'
import '../../Style/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';


function Footer() {
   
    return (
        <footer class="site-footer">
        <div class="container">
            <div class="row">
    
                <div className='col-sm-3 social-footer'>
                  
                  <p>XOR Esports</p>
                  <InstagramIcon/>
                  <TwitterIcon/>
                  <YouTubeIcon/>
                  <GitHubIcon/>
                  
                  
                  
                </div>
                <div className="col">
                    <p>About</p>
                    <a href="/overview">About Us</a><br/>
    
                    <a  href="/cart">Contact Us</a><br/>
    
                    <a  href="/orderonline">Advertise with Us</a><br/>

                    <a  href="/review">Terms & Conditions</a><br/>
                </div>
                <div className="col">
                    <p>Legal</p>
                    <a href="/overview">Privacy policy</a><br/>
    
                    <a  href="/cart">Fair play policy</a><br/>
    
                    <a  href="/orderonline">Refund policy</a><br/>

                    <a  href="/review">Cancellation policy</a><br/>
                    
                    <a  href="/review">Disclaimer & Credits</a><br/>
                </div>
                <div class="col-sm-3 info">
                    <p>Information</p>
                    <p>XOR Esports - An ulimate eSport platform.Participate in the online multiplayer Tournament or contest & win  cash prizes, Rewards. Currently support<b>Battlegrounds Mobile india, free Fire and COD Moblie.</b>Upcoming game on playzon:Fotnite,Valorate,etc.</p><br/>
                </div>
                
            </div>
        </div>
        <hr/>
      <div class="footer">
        <div class="footerrow">
          <div class="mainfooter">
            <p>We are here to help you. Call us at 07700050050</p>
          </div>
        </div>
      </div>
</footer>
  )
}

export default Footer