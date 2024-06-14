import { Link } from 'react-router-dom';

export const Profile = () => {
  
    return (
        <div style={{innerWidth: '100%', innerHeight: '100%'}}>
            <h1>Profile Page</h1>
            <button>
                <Link to="/">Home Page</Link>
          </button>
        </div>
  );
  }
  
  export default Profile;