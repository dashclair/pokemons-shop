import arrowLeft from "../../../../static/icons/arrowLeft.svg";
import StatItem from '../StatsItem';
import { startCase } from 'lodash';

import styles from './styles.module.scss';

const PokemonDetailsLayout = ({
    name,
    image,
    stats,
    goBack
}) => {
    return (
        <div className = {styles.wrapper}>
            <button className={styles.arrow_back} onClick={goBack}> <img src = {arrowLeft} alt="" width = {50} height={30}/> </button>
            <div className = {styles.item_wrapper}>
                <h1> {startCase(name)}</h1>
                <div className = {styles.poke_wrapp}>
                    <img src={image} alt = "" width = {250} height={250} />
                    <div>{stats.map(({statValue, statName})=>(
                        <StatItem key = {statName} statValue = {statValue} statName = {statName}/>
                    ))}</div>
                </div>
            </div>
        </div>
    )
}

export default PokemonDetailsLayout