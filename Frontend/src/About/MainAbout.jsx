import React from 'react'
import BackBanner from './BackBanner'
import MyFooter from '../components/MyFooter'
import OurStory from './OurStory'
import OurTeam from './OurTeam'

const MainAbout = () => {
  return (
    <div>
        <BackBanner/><br/>
        <OurStory/> <br/>
        <OurTeam/> <br/>
        <MyFooter/>
    </div>
  )
}

export default MainAbout