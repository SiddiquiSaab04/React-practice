import React, { useState } from 'react'
import MenuItems from './MenuItems'
import { Link, NavLink } from 'react-router-dom'
import Hello from '../Buttons/Hello'

export default function Sidebar({ isSidebarOpen }) {


    return (
        isSidebarOpen && (
            <aside className='h-full w-64 flex flex-col justify-start items-center space-y-4 py-6 bg-pink-300'>
                <div>
                    <p>Logo</p>
                </div>
                <div>

                    <ul className='space-y-5'>
                        {
                            MenuItems.map((e) => (
                                <li ><NavLink to={e.path} className={({ isActive }) => `flex gap-x-2 ${isActive ? "bg-blue-400 text-white" : "bg-green-400"} `} >  <span>{e.icon}</span>{e.name}
                                </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <Hello title="Open"/>
            </aside>
        )

    )
}
