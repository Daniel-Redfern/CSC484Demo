import { Link } from 'react-router-dom';
import Icon from './UserIcon.PNG'
import Logo from './Logo.JPG'
import Bike from './bike.PNG';
import Crockpot from './Crockpot.PNG';
import Dress from './Dress.PNG';
import Golf from './Golf.PNG';
import Guitar from './Guitar.PNG';
import Lawnmower from './Lawnmower.PNG';
import Pool from './Pool Cleaner.PNG';
import Projector from './Projector.PNG';
import Xbox from './Xbox.PNG'

export const ViewPage = ({data}) => {
  
    const imgList = [Bike, Bike, Crockpot, Dress, Golf, Guitar, Lawnmower, Pool, Projector, Xbox]
    const img = imgList[data[0]]
    const title = data[1]
    const cost = data[2]
    const owner = data[3]
    const desc = data[4]
  
    return (
        <div style={{position: 'absolute', width: '100%', height: '100%', margin: 0, background: '#123456'}}>
            <div style={{ position: 'relative', background: '#6c7073', height: '10%', width: '100%', margin: '0'}}>
                <div style={{display: 'flex', flexDirection: 'row', flex: 'auto', width: '100%', height: '100%', justifyContent: 'left', alignItems: 'left'}}>
                    <Link style={{position: 'relative', height: '100%'}} className='linkClass' to="/">
                        <img src={Logo} alt='imgalt' style={{borderRadius: '100%', height: '100%', marginTop: '.25%'}}/>
                    </Link>
                    <h1 style={{marginTop: '1.25%', color: 'white', position: 'absolute', height: '100%', marginLeft: '8%'}}> Friends In Need </h1>
                    <Link style={{position: 'relative', height: '100%', marginLeft: '88%', marginTop: '.25%'}} className='linkClass' to="/Profile">
                        <img src={Icon} alt='imgalt' style={{borderRadius: '100%', height: '90%'}}/>
                    </Link>
                </div>
            </div>
            <div style={{ position: 'relative', background: '#303030', height: '80%', width: '100%', marginTop: '-1.40%' }}>
                <h1 style={{width: '98%', textAlign:'center', fontSize: '48', color: 'white', padding: '1%'}}> {title} </h1>
                <div style={{width: '100%', position: 'relative', display: 'flex', flexDirection: 'row', flex: 'auto'}}>
                    <div style={{width: '56%', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', flex: 'auto', margin: '2%'}}>
                        <h2 style={{color: 'white', textAlign: 'center'}}>{desc}</h2>
                        <h1 style={{color: 'white', textAlign: 'center'}}> {cost}</h1>
                        <h1 style={{color: 'white', textAlign: 'center'}}>Owner: {owner}</h1>
                    </div>
                    <div style={{width: '40%', height: '100%'}}>
                    <img src={img} alt={'altId'} style={{position: 'relative', marginLeft: '20%', width:'60%', height: '100%'}}>

                    </img>
                    </div>

                </div>




            </div>
            <div style={{ position: 'relative', background: '#6c7073', height: '10%', width: '100%', margin: '0' }}>
                <div style={{display: 'flex', flexDirection: 'row', flex: 'auto', width: '100%', height: '100%', justifyContent: 'left', alignItems: 'left'}}>
                    <button style={{position: 'relative', height: '50%', width: '5%', marginLeft: '.5%', marginTop: '1.25%', background: '#808080', border: '0' }}>
                        <Link style={{position: 'relative', height: '100%', width: '100%'}} className='linkClass' to="/Help">FAQ</Link>
                    </button>
                    <button style={{position: 'relative', height: '50%', width: '5%', marginLeft: '.5%', marginTop: '1.25%', background: '#808080', border: '0' }}>
                        <Link style={{position: 'relative', height: '100%', width: '100%'}} className='linkClass' to="/Help">How To Rent</Link>
                    </button>
                    <button style={{position: 'relative', height: '50%', width: '5%', marginLeft: '.5%', marginTop: '1.25%', background: '#808080', border: '0' }}>
                        <Link style={{position: 'relative', height: '100%', width: '100%'}} className='linkClass' to="/Help">Common Questions</Link>
                    </button>
                    <button style={{position: 'relative', height: '50%', width: '5%', marginLeft: '.5%', marginTop: '1.25%', background: '#808080', border: '0' }}>
                        <Link style={{position: 'relative', height: '100%', width: '100%'}} className='linkClass' to="/Help">Other Questions</Link>
                    </button>
                    <button style={{position: 'relative', height: '50%', width: '5%', marginLeft: '.5%', marginTop: '1.25%', background: '#808080', border: '0' }}>
                        <Link style={{position: 'relative', height: '100%', width: '100%'}} className='linkClass' to="/Help">Etc...</Link>
                    </button>
                </div>
            </div>
        </div>
  );

  }
  
  export default ViewPage;