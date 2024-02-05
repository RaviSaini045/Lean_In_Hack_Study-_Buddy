import React, { useContext } from 'react'
import { UserContext } from '../App';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const  {success}  = useContext(UserContext);
  console.log(success);
  return (
    <div className="p-5 bg-slate-950 text-gray-50 h-16">
      <div className="flex justify-evenly">
      
        <Link to={"/"}>            <p> StudyBuddy </p>                          </Link>
        <Link to={""}>             <p> Home </p>                                </Link>
        <Link to={"dashboard"}>    <p> Dashboard </p>                           </Link>
        <Link to={"group"}>        <p> Group </p>                               </Link>
        <Link to={"solve"}>        <p> Solve </p>                               </Link>
        <Link to={"leaderboard"} > <p> LeaderBoard </p>                         </Link>
        <Link to={"signup"}>       <p> {(!success) ? "SignUp/Login" : "" } </p> </Link>
       
      </div>
    </div>
  );
}

export default NavBar