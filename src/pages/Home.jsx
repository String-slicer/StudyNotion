import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
function Home() {
  return (
    <div>
      {/* section 1 */}
        <div className='relative mx-auto flex flex-col w-11/12 items-center text-white justify-between'>
            <Link to={"/signup"}>
                <div>
                     <div>
                        <p>Become an Instructor </p>
                        <FaArrowRight/>
                     </div>
                </div>
            
            </Link>
        </div>

      {/* section 2 */}
      {/* section 3 */}
      {/* footer */}

    </div>
  )
}

export default Home
