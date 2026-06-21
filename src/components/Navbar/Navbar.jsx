import { UserSvg } from '../../assets/user-svg'
import { useClock } from '../hooks/Clock'
import { useState , useEffect } from 'react'

export default function Navbar() {
    const time = useClock();
    const [isChecked , setIsChecked] = useState(false)
    const handleChecked = (e) => {
        setIsChecked(e.target.checked)
    }
    useEffect(() => {
        const html = document.querySelector('html')
        if(isChecked){
            html.classList.add('dark')
        }else{
            html.classList.remove('dark')
        }
    }, [isChecked])
    return <>
        <div className="container h-18 w-full bg-primary p-2">
            <div className="flex-container w-full h-full bg-primary text-ui-text flex flex-row justify-between items-center gap-2">
                <div className="time h-full pl-3 pr-3 flex items-center justify-center font-medium">{time}</div>
                <div className="controll-option w-auto flex flex-row gap-4">
                    <div className="toggle">
                        <label class="relative inline-flex items-center cursor-pointer select-none">
                            <input type="checkbox" 
                            name="toggle" 
                            class="sr-only peer" 
                            checked={isChecked}
                            onChange={handleChecked}
                            />
                            <div class="w-11 h-6 bg-gray-200 rounded-full transition-colors duration-300 ease-in-out
                            peer-checked:bg-blue-600 
                            peer-focus:ring-2 peer-focus:ring-blue-300">
                            </div>
                            <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out
                            peer-checked:translate-x-5">
                            </div>
                        </label>
                    </div>
                    <div className="profile h-full pr-2 pl-2 flex items-center justify-center font-medium text-xl"><UserSvg /></div>
                </div>
            </div>
        </div>
    </>
}