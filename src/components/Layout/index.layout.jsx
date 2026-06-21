import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'

export default function MainLayout(){
    return <>
    <div className="container flex w-screen h-screen">
        <Sidebar />
        <div className="page flex flex-col flex-1">
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    </div>
    </>
}