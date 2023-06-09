import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

const Nav = ({ user, handleLogout }) => {

  return (
    <>
    {user && (
      <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-slate-700 fixed w-full top-0 z-10'>
      <header className='container flex flex-wrap items-center justify-evenly'>
      <Link to='/home' className='hover:text-blue-700 text-slate-50 font-medium  sm:py-1 px-2 sm:px-4 rounded-lg transition-all duration-300'>
        <img src={logo} className="h-8 w-auto" alt="Logo" />
      </Link>
      <Link to='/workout' className='hover:text-blue-700 text-slate-50 font-medium py-2 sm:py-1 px-2 sm:px-4 rounded-lg transition-all duration-300'>
      Workout
      </Link>
      <Link to='/history' className='hover:text-blue-700 text-slate-50 font-medium py-2 sm:py-1 px-2 sm:px-4 rounded-lg transition-all duration-300'>
      History
      </Link>
      <Link to='/feed' className='hover:text-blue-700 text-slate-50 font-medium py-2 sm:py-1 px-2 sm:px-4 rounded-lg transition-all duration-300'>
      Feed
      </Link>
      <Link onClick={handleLogout} to='/' className='hover:text-blue-700 text-slate-50 font-medium py-2 sm:py-1 px-2 sm:px-4 rounded-lg transition-all duration-300'>
      Sign Out
      </Link>
      </header>
      </nav>
      )}
      </>
      )
    }
    
    export default Nav
