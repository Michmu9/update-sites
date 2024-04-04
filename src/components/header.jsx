import styles from '@/styles/header.module.css'

export default function Header() {
    return(
        <>
           <div className={styles.headS1}>
                <section className={styles.introH}>
                    <p className={styles.si}>BIENVENIDO A</p>
                    <input type="text"  className={styles.homeB} placeholder='Nombre de tu site'/>
                </section>
                <section>
                    <h1>Acerca de nosotros</h1>
                    <p></p>
                </section>
           </div>

        </>
    )
}