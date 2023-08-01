import Link from "next/link";

const Navbar=()=>{
      return (
            <div>
                  <nav className='justify-between text-black bg-white
    '>
      <div className='p-4'>
      <div className='flex  p-3 m-3 text-xl font-bold text-clip justify-center'>
        <Link href='/' className='p-3'>Home</Link>
        <Link href='/Contact' className='p-3'>contact</Link>
        <Link href='/' className='p-3'>Home</Link>
        {/* <Link href='/pages/About' className='p-3'>About</Link> */}
      </div>
      </div>
    </nav>
            </div>
      )
}
export default Navbar;