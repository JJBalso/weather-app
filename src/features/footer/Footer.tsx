import styles from './Footer.module.css';


function Footer(){
    return  <div className={styles.footer}>
        <div>
            <span>Juanjo Balcazar</span>            
            <a className={styles.githubLogoContainer} href="https://github.com/JJBalso/weather-app" target="_blank" rel="noreferrer">
                <img className={styles.githubLogo} src="github-logo.png" alt="Github"/>
            </a>
        </div>
        <a href="https://www.modo.studio" target="_blank" rel="noreferrer">
            <img src="logo-modo-black.svg" alt="Modo"/>
        </a>

    </div>
    
}

export default Footer