import { NavLink } from 'react-router-dom'
import { GearSvg } from '../../assets/gear-svg.jsx'
import { HomeSvg } from '../../assets/home-svg.jsx'
import { NoteSvg } from '../../assets/note-svg.jsx'


function SideBarHelper({ svg, text, active = false }) {
    return (
        <div className="p-2 w-full">
            <div className={`
                    group flex items-center gap-2
                    h-14 px-4 rounded-md
                    ${active
                    ? "bg-button-hover"
                    : "hover:bg-button-hover"
                }
                `}>
                <div className="w-6 flex justify-center">
                    {svg}
                </div>
                <p className="text-md text-button-text">
                    {text}
                </p>

            </div>
        </div>
    );
}

export default function Sidebar() {
    return <>
        <div className="container h-full w-1/5 bg-sidebar flex flex-col justify-start items-center items-stretch gap-2">
            <div className="items-center flex flex-col p-4 w-full bg-sidebar-top">
                <div className="setings flex flex-row items-center justify-center gap-2 cursor-pointer w-full h-10 p-2 rounded-md">
                    <GearSvg className="w-6 h-6 text-svg" />
                    <p className="text-xl font-medium text-button-text">Settings</p>
                </div>
            </div>
            <NavLink to="/" end>
                {({ isActive }) => {
                    return <SideBarHelper svg={<HomeSvg className={`
                w-6 h-6
                ${isActive ? "text-svg-hover" : "text-svg group-hover:text-svg-hover"}`} />} text={"Dashboard"} active={isActive} />
                }}
            </NavLink>
            <NavLink to="/notes">
                {({ isActive }) => {
                    return <SideBarHelper svg={<NoteSvg className={`
                w-6 h-6
                ${isActive ? "text-svg-hover" : "text-svg group-hover:text-svg-hover"}`} />} text={"Notes"} endpoint={"Notes"} active={isActive} />
                }}
            </NavLink>

        </div>
    </>
}