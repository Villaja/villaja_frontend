import React from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../../static/data'
import styles from '../../styles/styles'
import {MdArrowForwardIos} from 'react-icons/md'

const Navbar = ({active}) => {
  return (
    <div className={`w-full  block 800px:${styles.noramlFlex} mt-10 pr-4`}>
         {
            navItems && navItems.map((i,index) => (
                <div className="flex align-center justify-between">
                    <Link to={i.url}
                    className={`${active === index + 1 ? "text-gray-600" : "text-white 800px:text-gray-800"} pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
                    >
                    {i.title}
                    </Link>

                    <MdArrowForwardIos />
                </div>
            ))
         }
    </div>
  )
}

export default Navbar