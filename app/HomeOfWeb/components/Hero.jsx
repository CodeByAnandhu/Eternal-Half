
function Hero() {
  return (
    <section className="bg-eternal-light w-full h-[320px] justify-center items-center">
        <div className="text-center flex h-[200px] 
        flex-col items-center justify-center
         bg-eternal-light gap-2 p-1 ">
            <h1 className="text-3xl font-bold text-eternal-textcolor ">Find your eternal half</h1>
             <p className="text-[#904a4ac2] lg:px-8 z-20">Use our website to find your perfect companion <span className="hidden md:block lg:block">and start a beautiful journey together.</span> </p>
             <img className=" md:min-w-72 lg:min-w-96 sm:left-28
             w-40 absolute top-56  md:left-40 left-0 z-10" src="/gif/girlAngel.gif" alt="" />
             <img className="md:min-w-72 lg:min-w-96 w-40 absolute top-52 lg:right-28 right-1 sm:right-16 z-10 scale-x-[-1]" src="/hero/menAngel.png" alt="" />
        </div>
     

      <img className="relative lg:-bottom-[-80px]  " src="/hero/cloud.png" alt="" />
    </section>

  )
}

export default Hero
