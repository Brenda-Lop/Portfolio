import { Link } from 'react-router-dom';
import './home.css';
import Card1 from '../../components/Card1/Card1';
import IMG from '../../IMG.JPG';


function Homepage() {

  return (
    <div className="intro">

    <Link to='/'><h1>WELCOME TO MY PORTFOLIO</h1></Link>

    <div className="avatar">
     <div className="w-29 mask mask-hexagon">
       <img src={IMG} alt='Brenda pic' />
     </div>
    </div>
    <br />
   
    <Link className='links' to='/aboutme'><button>about me</button></Link>
    <br />   
    <Link className='links' to='/projects'><button>projects</button></Link>
   
   <div>
    <Card1 />
  </div>

    </div>
  )
}

export default Homepage;