import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import Logo from './Logo.JPG';
import Icon from './UserIcon.PNG';
import Tile from './Tile';

export const HomePage = ({data, setSelected}) => {


    

    const [query, setQuery] = useState('')

    const handleChange = (event) => {
        setQuery(event.target.value)
    }
  
    return (
        <div style={{position: 'absolute', width: '100%', height: '100%', margin: 0, background: '#123456'}}>
            <div style={{ position: 'relative', background: '#6c7073', height: '10%', width: '100%', margin: '0'}}>
                <div style={{display: 'flex', flexDirection: 'row', flex: 'auto', width: '100%', height: '100%', justifyContent: 'left', alignItems: 'left'}}>
                    <img src={Logo} alt='imgalt' style={{ height: '100%', marginRight: '0'}} />
                    <h1 style={{marginTop: '1.25%', color: 'white', height: '100%', position: 'absolute', marginLeft: '8%'}}> Friends In Need </h1>
                    <Link style={{position: 'relative', height: '100%', width: '4%', marginTop: '.25%', marginLeft: '88%'}} className='linkClass' to="/Profile">
                        <img src={Icon} alt='imgalt' style={{borderRadius: '100%', height: '90%', marginTop: '.25%'}}/>
                    </Link>
                </div>
            </div>
            <div style={{ position: 'relative', background: '#303030', height: '80%', width: '100%' }}>
                <input
                    style={{position: 'relative', width: '70%', height: '10%', marginLeft: '15%', marginTop: '1%'}}
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder={"Search..."}
                />
                <div style={{ display: 'flex', flexDirection: 'row', flex:'auto', width: '90%', marginLeft: '5%', marginTop: '1.25%', height: '80%',  justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{ display: 'flex', flexDirection: 'column', flex:'auto', width: '90%', marginLeft: '5%', height: '80%', justifyContent: 'center', alignItems: 'center'}}>
                        <Tile data={data.Bicycle} setSelectedData={setSelected}/>
                        <Tile data={data.Crockpot} setSelectedData={setSelected}/>
                        <Tile data={data.Dress} setSelectedData={setSelected}/>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', flex:'auto', width: '90%', marginLeft: '5%', height: '80%', justifyContent: 'center', alignItems: 'center'}}>
                        <Tile data={data.Golf} setSelectedData={setSelected}/>
                        <Tile data={data.Guitar} setSelectedData={setSelected}/>
                        <Tile data={data.Lawnmower} setSelectedData={setSelected}/>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', flex:'auto', width: '90%', marginLeft: '5%', height: '80%', justifyContent: 'center', alignItems: 'center'}}>
                        <Tile data={data.Pool} setSelectedData={setSelected}/>
                        <Tile data={data.Projector} setSelectedData={setSelected}/>
                        <Tile data={data.Xbox} setSelectedData={setSelected}/>
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
  
  export default HomePage;