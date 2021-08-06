import styles from './Header.module.css';


function Header(){
    return  <header className={styles.header}>
        <img className={styles.logoIcon} src="logo.gif" alt="Logo"/>
        <span>Weather App</span>
    </header>
    
}

export default Header