import { NavLink, Link } from "react-router-dom"


export function AppHeader() {

    return (
        <section className="app-header flex align-center">

            <nav className="flex space-between align-center">
                <NavLink to="/">Wheather</NavLink>
                <NavLink to="/timer">Timer</NavLink>
            </nav>

        </section>
    )
}