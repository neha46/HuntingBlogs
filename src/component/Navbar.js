import Link from "next/link";

const Navbar=()=>{
      return (
            <div>
                  <nav className=' p-4 text-blue-950 bg-purple-100'>
      <div className='p-4'>
      <ul className='flex text-lg justify-center font-bold font-sans'>
        
        <li><Link href='/' className='p-4' >Home</Link></li>
        
        <li><Link href='/Contact' className='p-4'>contact</Link> </li>
         <li><Link href='/About' className='p-4'>About</Link>

         </li>
        {/* <Link href='/pages/About' className='p-3'>About</Link> */}
      </ul>
      </div>
    </nav>
            </div>
      )
}
export default Navbar;