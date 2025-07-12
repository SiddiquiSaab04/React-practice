import React, { useState } from 'react'

export default function Sidebar({ isSidebarOpen }) {

    return (
        isSidebarOpen && (
            <div className='min-h-screen w-64 flex flex-col justify-between items-center space-y-4 py-6 bg-pink-300'>
                <div>
                    <p>Logo</p>
                </div>
                <div>
                    <ul className='space-y-5'>
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Candidates</li>
                        <li>Settings</li>
                    </ul>
                </div>
            </div>
        )

    )
}
