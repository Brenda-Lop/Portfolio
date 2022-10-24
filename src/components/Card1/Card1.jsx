import './card1.css';
import {Link} from 'react-router-dom';
import squid from '../../squid.png';
import piggy from '../../piggy.png';
import devastated from '../../devastated.png';

function Card1() {
  return (
<div>
  <div className="box box1">
  <Link to='/details/squidgame'> 
    <img src={squid} alt='squid-logo'/>
  </Link>
  </div> 

  <div className="box box2">
  <Link to='/details/virtwallet'>
   <img src={piggy} alt='piggy-logo'/>
  </Link>
  </div> 

  <div className="box box3">
  <Link to='/details/notdevastated'> 
   <img src={devastated} alt='devastated-logo' className='devastated'/>
  </Link>
  </div> 
 
    {/* <div className='cards'>
      <article className='box box1'>
       <Link to='/details/squidgame'> 
         <img src={squid} alt='squid-logo'/>
       </Link>
      </article>    

      <article className='box box2'>
       <Link to='/details/virtwallet'>
       <img src={inverse} alt='piggy-logo'/>
       </Link>
      </article>

      <article className='box box3'>
       <Link to='/details/notdevastated'>
       <img src={devastated} alt='devastated-logo' className='devastated'/>
       </Link>
      </article>
       */}
    
    </div>
  )
}

export default Card1