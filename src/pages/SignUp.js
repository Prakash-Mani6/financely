import React from 'react'
import Header from '../components/Header'
import SignUpSignIn from '../components/SignUpSignIn'

function SignUp() {
  return (
    <div>
        <Header/>
        <div className='wrapper' >
            <SignUpSignIn/>
        </div>
    </div>
  )
}

export default SignUp