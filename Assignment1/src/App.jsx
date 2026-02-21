import { useGSAP } from '@gsap/react';
import { use, useEffect } from 'react';
import gsap from 'gsap';
import React from 'react';
import { ScrollTrigger } from 'gsap/all';
import img1 from './assets/car1.png';
gsap.registerPlugin(ScrollTrigger);


function App() {



  useGSAP( () => {

    //on load animation for the whole container

    gsap.from('.container',{
      opacity : 0,
    })

    //animation for the cover to move from left to right as we scroll down
    gsap.to('.cover', {
      x : '99%',
      ease : 'none',
      scrollTrigger : {
        trigger : '.upperSection',
        start : 'top top',
        end : 'bottom top',
        scrub : true,
      }
    })

    //animation for the cards to fade in as we scroll down
    gsap.from('.card1', {
      opacity : 0,
      ease : 'none',
      scrollTrigger : {
        trigger : '.upperSection',
        start : 'top -25%',
        end : 'top -35%',
        scrub : true,
      }
    })

    gsap.from('.card2', {
      opacity : 0,
      ease : 'none',
      scrollTrigger : {
        trigger : '.upperSection',
        start : 'top -10%',
        end : 'top -15%',
        scrub : true,
      }
    })

    gsap.from('.card3', {
      opacity : 0,
      ease : 'none',
      scrollTrigger : {
        trigger : '.upperSection',
        start : 'top -40%',
        end : 'top -50%',
        scrub : true,
      }
    })

    gsap.from('.card4', {
      opacity : 0,
      ease : 'none',
      scrollTrigger : {
        trigger : '.upperSection',
        start : 'top -70%',
        end : 'top -80%',
        scrub : true,
      }
    })

    

  } ,[]); 

  
  

  return (
    
      //container : height 200vh to make the page scrollable
      <div className='container'>

        {/* on which start and end is calculated / tracked */}
        <div className='upperSection h-screen w-screen relative '>

          {/* Putting the road and title on their position */}
          <div className='track fixed h-full w-full top-0 left-0 flex items-center'>
            

            {/* middle road  */}
            <div className='road h-50 w-full relative bg-green-500 p-3'>
              <h1 className='text-9xl whitespace-nowrap text-white font-extrabold text-center'>H E L L O W O R L D</h1>
              <div className='cover h-full w-full absolute top-0 left-0 bg-black z-10'>
                <img src={img1} alt="" className='h-full absolute top-1/2 -translate-y-1/2 left-0' />
              </div>
            </div>

            {/* cards */}

            <div className=' card1 card h-40 w-50 text-center rounded-3xl bg-amber-300 absolute top-7 left-1/2 text-2xl font-bold flex flex-col items-center justify-center'>
              <h1>40%</h1>
              <p>Sharing views droped</p>
            </div>

            <div className=' card2 card h-40 w-50 text-center rounded-3xl bg-blue-600 text-white absolute top-7 right-2/3 text-2xl font-bold flex flex-col items-center justify-center'>
              <h1>550%</h1>
              <p>Likes Updated</p>
            </div>

            <div className=' card3 card  h-40 w-50 text-center rounded-3xl bg-red-500 text-white absolute bottom-7 right-1/3 text-2xl font-bold flex flex-col items-center justify-center'>
              <h1>70%</h1>
              <p>Comment Droped</p>
            </div>

            <div className=' card4 card h-40 w-50 text-center rounded-3xl bg-amber-950 text-white absolute bottom-7 right-1/8 text-2xl font-bold flex flex-col items-center justify-center'>
              <h1>90%</h1>
              <p>Solid ending</p>
            </div>
            
          </div>
        </div>
      </div>
    
  )
}

export default App