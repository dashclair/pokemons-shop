import styles from './styles.module.scss';

const StatItem = ({statValue, statImage, statTitle}) => {

    return (
        <div className={styles.stats__wrapper}>
            <img src={statImage} alt="" width = {20} height={20}/>
            <div className={styles.stats__wrapper__text}>
                <p style={{width:200, paddingBottom:5, fontFamily:'Montserrat'}}> {statTitle}</p>
                <p> {statValue}</p>
            </div>
        </div>
    )
}

export default StatItem