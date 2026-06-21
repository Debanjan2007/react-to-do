import { UserSvg } from '../../assets/user-svg'
import { useClock } from '../hooks/Clock'

export default function Navbar() {
    const time = useClock();
    return <>
        <div className="container h-18 w-full bg-primary p-2">
            <div className="flex-container w-full h-full bg-primary text-ui-text flex flex-row justify-between items-center gap-2">
                <div className="time h-full pl-3 pr-3 flex items-center justify-center font-medium">{time}</div>
                <div className="profile h-full pr-2 pl-2 flex items-center justify-center font-medium text-xl"><UserSvg /></div>
            </div>
        </div>
    </>
}