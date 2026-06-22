import { UserSvg } from '../../assets/user-svg'
import { useClock } from '../hooks/Clock'
import { useState, useEffect } from 'react'
import { darkMode } from '../../assets/dark-mode-svg'
import { lightMode } from '../../assets/light-mode-svg'

export default function Navbar() {
    const time = useClock();
    const [themeSvg , setThemeSvg] = useState(darkMode)
    const [themeMode, setThememode] = useState("light")
    const handleclicked = () => {
        if(themeMode === "light"){
            setThememode("dark")
            setThemeSvg(lightMode)
        }else if(themeMode === "dark"){
            setThememode("light")
            setThemeSvg(darkMode)
        }
    }
    // handleSvg
    useEffect(() => { 
        const html = document.querySelector('html')
        if(themeMode === "light"){
            html.classList.remove("dark")
        }else{
            html.classList.add("dark")
        }
    }, [themeMode])
    return <>
        <div className="container h-18 w-full bg-primary p-2">
            <div className="flex-container w-full h-full bg-primary text-ui-text flex flex-row justify-between items-center gap-2">
                <div className="time h-full pl-3 pr-3 flex items-center justify-center font-medium">{time}</div>
                <div className="controll-option w-auto flex flex-row gap-4">
                    <div className="toggle">
                        <button
                            onClick={handleclicked}
                            className="h-auto w-auto rounded-full">
                            {themeSvg}
                        </button>
                    </div>
                    <div className="profile h-full pr-2 pl-2 flex items-center justify-center font-medium text-xl"><UserSvg /></div>
                </div>
            </div>
        </div>
    </>
}