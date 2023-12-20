import React from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../../static/data'
import styles from '../../styles/styles'
import {MdArrowForwardIos} from 'react-icons/md'

const Navbar = ({active}) => {
  return (
    <div className={`w-full  block 800px:${styles.noramlFlex} mt-5 px-4`}>
         {
            navItems && navItems.map((i,index) => (
                    <Link to={i.url} key={index}
                    className={`${active === index + 1 ? "text-gray-600" : "text-white 800px:text-gray-800"} pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
                    >
                      <div className="flex align-center justify-between">
                          {i.title}

                          <MdArrowForwardIos />
                      </div>
                    </Link>
            ))
         }
    </div>
  )
}

export default Navbar