import { NavLink } from 'react-router-dom'

const GridHelper = ({ logo, title, description }) => {
    return <>
        <div className="container p-4 rounded-xl bg-background flex gap-4 items-center justify-fit flex-row">
            <div className="logo h-full">{logo}</div>
            <div className="text-container flex flex-col">
                <h3 className="text-lg font-bold text-title">{title}</h3>
                <p className="text-sm text-text">{description}</p>
            </div>
        </div>
    </>
}

export default function DashBoard() {
    return <>
        <div className="container bg-background w-vh bg-background h-full flex flex-col text-ui-text gap-4 items-start justify-start">
            <div className="text-container w-full h-auto pt-3 pb-3 pl-10 pr-4 mt-2 flex flex-col gap-2">
                <h1 className="text-4xl font-bold text-title">Welcome Back, User 👋</h1>
                <p className="text-md text-text">Organize your tasks and boost your productivity with our intuitive and user-friendly Todo App. Stay on top of your to-do list and never miss a deadline again!</p>
            </div>
            <div className="Quick-access flex p-18 w-full h-full mt-4">
                <div className="container w-full h-full bg-primary p-6 rounded-lg flex flex-col gap-2 justify-start items-start">
                    <div className="text-place w-full flex flex-row justify-between items-center pl-6 pr-6">
                        <h1 className="text-xl font-bold text-title">Quick Actions</h1>
                        <NavLink to="/notes" end>
                            <button className="bg-button text-white py-2 px-4 rounded-lg hover:bg-button-hover">
                                + Add Task
                            </button>
                        </NavLink>
                    </div>
                    <div className="grid-place p-6 w-full h-full grid grid-cols-2 gap-6">
                        <GridHelper
                            logo={<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsQDQCh0fBsIMtTXo_kiAmo1Q6jSkcFNW9vUgcfiXyDg&s=10" alt="Logo 1" className="w-12 h-12 rounded-full" />}
                            title="+ New notes"
                            description="Create a new note"
                        />
                        <GridHelper
                            logo={<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX0YrSmVHEi7rGYK96Iotw0OdD2sW7b-my355BQCaLRg&s=10" alt="Logo 1" className="w-12 h-12 rounded-full" />}
                            title="+ New task"
                            description="Save new task"
                        />
                        <GridHelper
                            logo={<img src="https://thumbs.dreamstime.com/b/update-application-progress-icon-upgrade-software-loader-update-application-progress-icon-100980508.jpg" alt="Logo 1" className="w-12 h-12 rounded-full" />}
                            title="View notes"
                            description="View and edit your notes"
                        />
                        <GridHelper
                            logo={<img src="https://static.vecteezy.com/system/resources/thumbnails/068/083/383/small/blue-eye-icon-cartoon-style-simple-graphic-isolated-on-a-transparent-background-image-png.png" alt="Logo 1" className="w-12 h-12 rounded-full" />}
                            title="View tasks"
                            description="View and edit your tasks"
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
}