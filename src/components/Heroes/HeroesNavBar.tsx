import { FC } from "react"
import { Link } from "react-router-dom"

const HeroesNavBar: FC = () => {
    return (
        <nav>
            <Link to={'/dashboard'}>Dashboard</Link>
            <Link to={'/heroes'}>Heroes</Link>
            <Link to={'/papers'}>Papers</Link>

        </nav>
    )
}

export default HeroesNavBar;