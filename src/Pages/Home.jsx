import React from 'react'
import Layout from '../Components/Layout/Layout'
import '../../src/Style/Allpage.css'
import banner from '../Asstes/15.jpg'
import { Button } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download';
import pubg from '../Asstes/pubg.jpeg'
import freefire from '../Asstes/freefire.jpg'
import call from '../Asstes/call.webp'
import down from '../Asstes/download.png'
import { Link } from 'react-router-dom'



const Home = () => {
  return (


    <Layout>
      <div className="home" style={{ backgroundImage: `url(${banner})` }}>
        <div className='headerContainer'>
          <h1>An Ultimate eSports Platform</h1>
          <p>Are you addicted to Online Games?<br />
            Have you ever thought of earning through Online Gaming or from Playing Multiplayer Mobile Games? <br />
            What if you were rewarded for playing your favorite games and that too of which you are addicted to? Well, PlayerZon is the Platform which makes this possible.</p>
          <Button variant="contained" startIcon={<DownloadIcon />}>Download Now</Button>
        </div>
      </div>
      <hr />
      {/* card here */}
      <div className="cardname">
        <h1>Available Games</h1>
      </div>
      <div class="card-group">
        <div class="card">
          <img src={pubg} alt="..." />
          <div class="card-body">
            <h5 class="card-title"><Button href='/bgmi'>Battlegrounds Mobile India</Button></h5>
            <p class="card-text">Battlegrounds Mobile India (in short form BGMI, previously known as PUBG Mobile India) is the indian version of PUBG Mobile, exclusively for players in India. </p>
            
          </div>
        </div>
        <div class="card">
          <img src={freefire} alt="..." />
          <div class="card-body">
            <h5 class="card-title"><Button>Free Fire</Button></h5>
            <p class="card-text">Free Fire is the indain version of pubg ,exclusively for players in India.</p>
          </div>
        </div>
        <div class="card">
          <img src={call} alt="..." />
          <div class="card-body">
            <h5 class="card-title"><Button>Call of Duty</Button></h5>
            <p class="card-text">Call of Duty is the indian version battle war Mobile gameing site,exclusively for players in India.</p>
          </div>
        </div>
      </div>
      {/* end of card */}
      <hr />
      {/*Are you ready*/}
      <div className='ready'>

        <h1>Are you ready? Give it a try...</h1>
        <Link to="/Contact"><img src={down} alt="" width='350' height='100' /></Link>
        <hr />
      </div>
      {/*Are you ready end*/}
      {/* Question and Answer */}
      <div class="accordion" id="accordionExample">

        <p className='askqustion'>Frequently Asked Questions</p>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Which Games I can Play at PlayerZon and Earn Cash Rewards?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>Currently, there are multiple multi-player games contest available on PlayerZon in which you can participate and earn cash prizes on your performance. The games available includes:
                Free Fire: Play Free Fire Tournaments and Earn Prizes.
                COD - Mobile: Play COD Mobile (Call of Duty Mobile Game) Tournaments and Win Money.</strong>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              How to Get the Game Custom Room ID and Password?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>Room ID and Password (for Free Fire, COD Mobile, etc. ) are shared through Text Message (SMS) and also inside the app. Just open the app and scroll down to the match you participated, click on it and there you will get the Room ID and Password before 15 minutes of match start time. Make sure you join the Room within 15 minutes before match start time.</strong>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              How to find my Free Fire Username and ID?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>Click Here & follow the step-by-step guide to find your Free Fire Username and ID.</strong>
            </div>
          </div>
        </div>
      </div>
      {/* End Question and Answer */}
    </Layout>

  )
}

export default Home