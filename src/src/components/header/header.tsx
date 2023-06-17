import logo from '../../assets/logo.png'
import { MdSettings } from "react-icons/md"
import { IoMdNotifications } from "react-icons/io"
import { FaRegUserCircle } from "react-icons/fa"
import './header.scss'

function Header() {
    return (
        <div className="c-header">
            <div className="div-logo">
                <img src={logo}/>
            </div>

            <h3 className='text-logo'>QUALITY <span>CODE</span></h3>

            <div className='icons'>
                <IoMdNotifications />
                <FaRegUserCircle />
                <MdSettings  />
                
            </div>
        </div>
    )
}

export {
    Header,
}