 import React from 'react'
import Layout from '../components/Layout/Layout'
 import { Link } from 'react-router-dom'
 import banner from '../image/indian2.jpg'
 import '../Styles/Home.css'
 const Home = () => {
   return (
     <div className='home' style={{backgroundImage:`url(${banner})`}}>
      {/* //  <div>  */}
        <Layout>
          <div className="home">
            <div className="headerContainer">
              <h1>Foodiol Deel</h1>
              <p>A taste you'll remember.</p>
              <Link to="/menu" >
              <button>
                ORDER NOW
              </button>
              </Link>
             
            </div>
          </div>
        </Layout>
     </div>
   )
 }
 
 export default Home