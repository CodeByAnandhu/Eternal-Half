
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../../globals.css'

function Navbar() {
  return (
    <div className="flex w-screen h-[65px] items-center justify-between px-6">
      <div>
        <img className="block md:hidden lg:hidden cursor-pointer" src="/logo/love.png" alt="" width={37}/>
        <h1 className="font-dancing hidden md:block lg:block text-2xl font-semibold text-gray-700 cursor-pointer">Eternal Half</h1>
      </div>

      <div className="flex cursor-pointer">
         <FontAwesomeIcon icon={faBarsStaggered}  className="w-7 block md:hidden lg:hidden text-eternal-dark cursor-pointer"/>
         <div className="hidden md:flex lg:flex gap-5 justify-center items-center text-[#E58787]">
         <span>Features</span>
         <span>About</span>
         <span>Dating Advise</span>
         <button className="bg-eternal-dark px-3 py-1 rounded-[50px] text-white">Create</button>
         </div>
      </div>
    </div>
  )
}

export default Navbar
