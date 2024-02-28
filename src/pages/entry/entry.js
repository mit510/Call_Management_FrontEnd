 import React, { useState } from 'react';
// import {Jumbotron} from 'react-bootstrap'
import "./entry.css";
import Login from '../../components/login/login';
import { ResetPassword } from  "../../components/password-reset/PasswordReset"

const Entry = () => {
 
  const [formLoad, setFormLoad] = useState('login')

  
 
  const handleResetsubmit = e => {
    e.preventDefault();
    

    //todo call api to submit the form
   
  }
  const formChange = fc => {
    setFormLoad(fc);
  }




  return (
    <div className='entry-page bg-info'>
      <div className="p-5 mb-4 bg-light rounded-3 shadow">
        {formLoad === 'login' && <Login
          
          formChange={formChange}
         
        />

        }

        {formLoad === 'rest' && <ResetPassword
          handleResetsubmit={handleResetsubmit}
          formChange={formChange}
          // email={email}
        />
        }
      </div>
    </div>
  )
}

export default Entry