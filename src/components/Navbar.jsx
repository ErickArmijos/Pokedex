import { useState } from 'react';
import { SiPokemon } from 'react-icons/si';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    };

    return (
        <nav className={`navbar`}>
            <SiPokemon size={150} color="white" className="logoPokemon" />
            <div className="themeChanger">
                <FaSun size={20} color="white" />
                <label className="btnSwitch">
                    <input
                        type="checkbox"
                        className="changeTheme"
                        hidden
                        onChange={toggleTheme}
                    />
                    <span className="sliderTheme"></span>
                </label>
                <FaMoon size={20} color="white" />
            </div>
        </nav>
    );
};

export default Navbar;
