import styles from '../../../styles/brand.module.css'
export const Brand = () => {
    return (
        <div className={styles.brand}>
             <span><img src='images/rocket.svg' alt='brand'/></span>
            <h2 className={styles.typing}>Startup-Tube</h2>
        </div>
    )
}
