import { Link } from 'react-router-dom'

const NavBar = (props) => {
    // console.log(props);
    return (
        <div className = 'navBar'>
            {props.user.id ? <>
            <span className = 'homeBtn'>
            <Link className = 'navLink' to = '/'>
                HOME
            </Link>
            </span>
            <span className = 'deleteBtn'>
            <span className = 'delete' onClick = {() => {
                localStorage.removeItem('userId')
                props.setUser({})
            }}>LOGOUT</span>
            </span>
            </>
             :
             <>
            <Link className = 'navLink' to = '/signup'>
                SIGN UP
            </Link>{ ' | '}
            <Link className = 'navLink' to = '/login'>
                LOGIN
            </Link>
             </>
            
         }
        </div>
    )
}

export default NavBar;