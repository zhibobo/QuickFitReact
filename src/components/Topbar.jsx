import './Topbar.css'
import { FaSearch, FaUserAlt, FaShoppingBag, FaHeart, FaTruck} from 'react-icons/fa'

const Topbar = () => {
    return (
        <div className='bar'>
            <a href='#home'>Logo</a>
            <div className='bar-right'>
                <a href='#home'><FaSearch /></a>
                <a href='#home'><FaHeart /></a>
                <a href='#home'><FaShoppingBag /></a>
                <a href='#home'><FaUserAlt /></a>
                <a href='#home'><FaTruck /></a>
            </div>
        </div>
    )
}

export default Topbar