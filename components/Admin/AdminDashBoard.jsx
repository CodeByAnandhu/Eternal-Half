
import NavbarAdmin from './NavBarAdmin'
import SideBar from './SideBar'
import Chart1 from './chart/Chart1'
function AdminDashboard() {
  return (
    <div> 
      <NavbarAdmin/>
      <div className='lg:absolute md:absolute right-0 lg:bg-gray-100 lg:p-7 rounded-tl-3xl top-24'>
      <div className="container mx-auto p-4">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">

        {/* First Row */}
        <div className="p-4 bg-indigo-100 rounded-2xl"><Chart1/></div>
        <div className="p-4 bg-indigo-100 rounded-2xl"><Chart1/></div>
        <div className="p-4 bg-indigo-100 rounded-2xl"><Chart1/></div>
      </div>


      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-4">
        {/* Second Row */}
        <div className="bg-green-100 p-6 rounded-lg shadow-md">Box 1</div>
        <div className="bg-green-200 p-6 rounded-lg shadow-md">Box 2</div>
      </div>


      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mt-4">
        {/* Third Row */}
        <div className="bg-red-100 p-6 rounded-lg shadow-md">Box 1</div>
        <div className="bg-red-200 p-6 rounded-lg shadow-md">Box 2</div>
        <div className="bg-red-300 p-6 rounded-lg shadow-md">Box 3</div>
      </div>
    </div>
   
    </div>
    <SideBar/>
    </div>
  )
}

export default AdminDashboard
