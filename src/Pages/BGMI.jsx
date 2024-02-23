import React from 'react'
import '../../src/Style/Allpage.css'
import join1 from '../Asstes/bgmi-min.jpg'
import { Button } from '@mui/material'
import Layout from '../Components/Layout/Layout'

const BGMI = () => {
    return (
        <Layout>
            <div className='Bgmi_join'>
                <div className="cardname">
                    <h1>Upcoming Matches</h1>
                </div>
                <div class="card-group">
                    <div class="card">
                        <img src={join1} alt="..." />
                        <div className='row text-center'>
                        <h5 class="card-title"><Button>Welcome BGMI - Match #11597</Button>
                        <Button>Time: 21-02-2024 at 05:00 PM</Button></h5>
                            <div className="col-4 p-0">
                                <p className='card-items-title m-0'>Prize Pool</p>
                                <p className='card-items'>$600</p>
                            </div>
                            <div className="col-4 p-0">
                                <p className='card-items-title m-0'>PER KILL</p>
                                <p className='card-items'>$5</p>
                            </div>
                            <div className="col-4 p-0">
                                <p className='card-items-title m-0'>PLAY FOR</p>
                                <p className='green'>FREE</p>
                            </div>
                            <div className="col-4 p-0">
                                <p className='card-items-title m-0'>TYPE</p>
                                <p className='card-items'>Solo</p>
                            </div><div className="col-4 p-0">
                                <p className='card-items-title m-0'>VERSION</p>
                                <p className='card-items'>TPP</p>
                            </div>
                            <div className="col-4 p-0">
                                <p className='card-items-title m-0'>MAP</p>
                                <p className='card-items'>Erangel</p>
                                <Button variant="outlined">JOin</Button>
                            </div>
                            
                        </div>
                    </div>


                    <div class="card">
                        <img src={join1} alt="..." />
                        <div className='row text-center'>
                        <h5 class="card-title"><Button>Welcome BGMI - Match #11597</Button>
                        <Button>Time: 21-02-2024 at 05:00 PM</Button></h5>
                            <div className="col-4 p-0">
                                <p className='card-items-title m-0'>Prize Pool</p>
                                <p className='card-items'>$600</p>
                            </div>
                            <div className="col-4 p-0">
                                <p className='card-items-title m-0'>PER KILL</p>
                                <p className='card-items'>$5</p>
                            </div>
                            <div className="col-4 p-0">
                                <p className='card-items-title m-0'>PLAY FOR</p>
                                <p className='card-items'>FREE</p>
                            </div>
                            <div className="col-4 p-0">
                                <p className='card-items-title m-0'>TYPE</p>
                                <p className='card-items'>Solo</p>
                            </div><div className="col-4 p-0">
                                <p className='card-items-title m-0'>VERSION</p>
                                <p className='card-items'>TPP</p>
                            </div>
                            <div className="col-4 p-0">
                                <p className='card-items-title m-0'>MAP</p>
                                <p className='card-items'>Erangel</p>
                                <Button variant="outlined">JOin</Button>
                            </div>
                            
                        </div>
                    </div>



                    <div class="card">
                        <img src={join1} alt="..." />
                        <div className='row text-center'>
                        <h5 class="card-title"><Button>Welcome BGMI - Match #11597</Button>
                        <Button>Time: 21-02-2024 at 05:00 PM</Button></h5>
                            <div className="col-4 p-0">
                                <p className='card-items-title m-0'>Prize Pool</p>
                                <p className='card-items'>$600</p>
                            </div>
                            <div className="col-4 p-0">
                                <p className='card-items-title m-0'>PER KILL</p>
                                <p className='card-items'>$5</p>
                            </div>
                            <div className="col-4 p-0">
                                <p className='card-items-title m-0'>PLAY FOR</p>
                                <p className='card-items'>FREE</p>
                            </div>
                            <div className="col-4 p-0">
                                <p className='card-items-title m-0'>TYPE</p>
                                <p className='card-items'>Solo</p>
                            </div><div className="col-4 p-0">
                                <p className='card-items-title m-0'>VERSION</p>
                                <p className='card-items'>TPP</p>
                            </div>
                            <div className="col-4 p-0">
                                <p className='card-items-title m-0'>MAP</p>
                                <p className='card-items'>Erangel</p>
                                <Button variant="outlined">JOin</Button>
                            </div>
                            
                        </div>
                    </div>


                </div>

            </div>

        </Layout>

    )
}

export default BGMI