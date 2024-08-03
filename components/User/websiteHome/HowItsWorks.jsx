import { faBarsStaggered, faHeart, faLocationDot, faMessage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function HowItsWorks() {
  return (
    <div className="z-50 flex flex-col gap-16 lg:gap-24 md:gap-24 
    text-eternal-dark items-center justify-center w-full 
    h-screen lg:mt-96 md:mt-92 sm:mt-56 p-2 
    bg-gradient-to-t from-eternal-light to-transparent">
      <h1 className="text-2xl md:text-3xl lg:text-3xl font-semibold z-50">How Eternal Half Works</h1>
      <div className="flex gap-5">
      <div className=" px-3  py-8  md:px-12 lg:px-12 flex flex-col items-center justify-center border-r-[3px] border-dashed border-[#E39F9F] gap-4">
      <FontAwesomeIcon icon={faLocationDot}  className="w-6 hidden  md:block lg:block text-eternal-dark cursor-pointer"/>
        <p>choose a partner</p>
      </div>

      <div className="px-3  py-8 gap-4  md:px-12 lg:px-12 flex flex-col border-r-[3px] border-dashed border-[#E39F9F] items-center justify-center">
      <FontAwesomeIcon icon={faMessage}  className="w-7 hidden  md:block lg:block text-eternal-dark cursor-pointer"/>
      <p>Started conversation</p>
      </div>

      <div className="px-3 py-8 gap-4 md:px-12 lg:px-12 flex flex-col items-center justify-center">
      <FontAwesomeIcon icon={faHeart}  className="w-7 hidden  md:block lg:block text-eternal-dark cursor-pointer"/>
      <p>First dating</p>
      </div>
      </div>
    </div>
  )
}

export default HowItsWorks
