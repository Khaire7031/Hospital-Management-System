import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Doctor/Sidebar/Sidebar'

export default function DoctorDashboard() {
    return (
        <div>
            <div>
                <div className='flex'>
                    <Sidebar />
                    <div className='w-full flex flex-col'>
                        <Header />
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
