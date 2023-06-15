import { FC } from "react"
import { Link, Outlet } from "react-router-dom"

const HeroesNavBar: FC = () => {
    return (
        <>
            <nav>
                <Link to={'/dashboard'}>Dashboard</Link>
                <Link to={'/heroes'}>Heroes</Link>
                <Link to={'/papers'}>Papers</Link>

            </nav>
            <Outlet />
        </>
    )
}

export default HeroesNavBar;