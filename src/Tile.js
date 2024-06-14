import { Link } from 'react-router-dom';
import Logo from './Logo.JPG';
import Bike from './bike.PNG';
import Crockpot from './Crockpot.PNG';
import Dress from './Dress.PNG';
import Golf from './Golf.PNG';
import Guitar from './Guitar.PNG';
import Lawnmower from './Lawnmower.PNG';
import Pool from './Pool Cleaner.PNG';
import Projector from './Projector.PNG';
import Xbox from './Xbox.PNG'

export const Tile = ({data, setSelectedData}) => {
  
    const imgList = [0, Bike, Crockpot, Dress, Golf, Guitar, Lawnmower, Pool, Projector, Xbox]
    const selectedImg = imgList[data.img]
    
    const setData = ()=>{
        setSelectedData([data.img, data.title, data.cost, data.owner, data.description])
    }

    return (
        <Link style={{position: 'relative', height: '30%', width: '90%', borderRadius: '10%', background: '#444444', margin: '5%'}} className='linkClass' to="/ViewPage" onClick={setData}>
            <img src={selectedImg} alt='imgalt' style={{ position: 'relative', height: '70%', width: '100%'}}/>
            <div style={{position: 'realtive', height: '6%', width: '100%'}}>
                <h3 style={{positon: 'relative', color: 'white', height: '6%', width: '100%', margin:0, textAlign: 'center'}}>{data.title} {data.cost}</h3>
            </div>
        </Link>
  );
  }
  
  export default Tile;