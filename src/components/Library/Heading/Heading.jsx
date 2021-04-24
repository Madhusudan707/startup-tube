import styles from '../../../styles/heading.module.css'
export const Heading = ({text}) => {
    return (
        <div  className={styles.heading}>
            <h1>{text}</h1>
        </div>
      
    )
}


