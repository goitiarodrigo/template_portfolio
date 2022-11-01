import styles from "../styles/nav.module.css"

const Nav = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav_container}>
        <img src="./assets/portfolio.png"/>
        <div className={styles.anchor_container}>
          <a>Inicio</a>
          <a href="#about">Sobre Mi</a>
          <a href="#projects">Proyectos</a>
          <a href="#contactForm">Contacto</a>
        </div>
      </nav>
    </div>
  )
}

export default Nav