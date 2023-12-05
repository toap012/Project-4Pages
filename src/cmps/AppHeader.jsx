import { useState } from "react"
import { NavLink, Link } from "react-router-dom"


export function AppHeader() {
    const [theme, setTheme] = useState('')
    function onThemeChange() {
        if(!theme){
            setTheme('dark')
        }else{
            setTheme('')
        }
        console.log(theme);
    }
    return (
        <section className="app-header flex align-center">

            <nav className="flex space-between align-center">
                <NavLink to="/">Wheather</NavLink>
                <NavLink to="/timer">Timer</NavLink>
            </nav>
            <div className="theme-btn flex" onClick={onThemeChange}>
                <div className={`theme-ball ${theme}`}></div>
            </div>
        </section>
    )
}