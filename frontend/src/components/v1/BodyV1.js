import styles from '../../styles/bodyV1.module.css'

const BodyV1 = () => {
  return (
    <div className={styles.body_container}>
      <div className={styles.bodyChildren_container}>
        <h1 className={styles.about_title}>Sobre Mi</h1>
        <div className={styles.about_container}>
          <div className={styles.about_photo}></div>
          <div className={styles.description_container}>
            <h3>I create products not just art</h3>
            <p>My name is John Smith. I am a web designer and developer.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            <a>Saber más.</a>
          </div>
        </div>
        <div className={styles.tecnologies_container}>
          <span>React</span>
          <span>React</span>
          <span>React</span>
          <span>React</span>
          <span>React</span>
          <span>React</span>
          <span>React</span>
          <span>React</span>
          <span>React</span>
        </div>
      </div>
    </div>
  )
}

export default BodyV1