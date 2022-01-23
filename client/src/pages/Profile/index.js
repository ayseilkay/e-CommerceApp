import { Button } from '@chakra-ui/react';
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

function Profile({history}) {
    const {user,logout} = useAuth();

    const handleLogout =()=>{
        logout(()=>{
            // history.push("/");// cıkıs yaptıgında anasayfaya yönlendirme yapsın
        });
    }
  return <div>
      <code>
          <h2>Profile</h2>
          {JSON.stringify(user)}
      </code>
      <br/>
      <br/>
      <Button colorScheme="orange" variant="solid" onClick={handleLogout}> Logout</Button>
  </div>;
}

export default Profile;
