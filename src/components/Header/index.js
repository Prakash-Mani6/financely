import React, { useEffect } from 'react'
import './style.css'
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import userImg from "../../assests/Icon.png";
import { signOut } from 'firebase/auth';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
function Header() {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  function logoutFunc(){
   // alert("LOGOUT!!");
   try {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
      toast.success("Logged Out Successfully");
    }).catch((error) => {
      // An error happened.
      toast.error(error.message);
    });
   } catch (error) {
    toast.error(error.message);
   }
  }
  useEffect(() => {
    if(user){
      navigate("/dashboard")
    }
  }, [user, loading])
  

  return (
    <div className="navbar">
      <p className='logo'>Financely.</p>
      {user && (
        <div style={{display:"flex", alignItems:"center", gap:"0.75rem"}}>
         <img
            src={user.photoURL ? user.photoURL : userImg}
            
            style={{ borderRadius: "50%", height:"2rem",
               width:"2rem"}}
           />
        <p className='logo link' onClick={logoutFunc}>Logout</p>
        </div>
      )}
    </div>
  );
}

export default Header;