import { startCase } from 'lodash';
import PropTypes from 'prop-types';

import StatItem from '../StatsItem';
import { STATS_MAP } from "../../config/statsConfig";
import Spinner from "../../../../components/Spinner";

import styles from './styles.module.scss';


const PokemonDetailsLayout = ({
    name,
    image,
    stats,
    abilities,
    price,
    loadingDetails
}) => {
    return (
        <div className = {styles.wrapper}>
            {loadingDetails ? <Spinner/> : 
            <div> 
                <div className = {styles.item_wrapper}>
                    <h2 style={{fontSize:30, marginBottom:10}}> {startCase(name)}</h2>
                    <div className = {styles.poke_wrapp}>
                        <div className = {styles.pokeDetails__image}>
                            <img className = {styles.pokeDetails__image_img} src={image} alt = "" width = {250} height={250}/>
                        </div>
                        <div className={styles.pokeStats__wrapper}>{stats.map((stat)=>{
                            return (
                                <StatItem key = {stat.title} statValue = {stat.value} statImage = {STATS_MAP[stat.title]} statTitle = {stat.title}
                                />
                                )
                            })}
                        <div className={styles.price}>
                            <h3 style={{marginLeft:30}}> PRICE:</h3>
                            <h3>${price}</h3>
                        </div>
                    </div>
                </div>
                <div className={styles.separator}></div>
                <div className={styles.abilities__wrapper}>
                    <div className={styles.description__text}>
                        <p>Description</p>
                    </div>
                    <div className={styles.abilities__wrapper__text}>
                        {abilities.map((ability)=>{
                        return (
                        <div> 
                            <div className={styles.abilities__text}>
                                <p>{ability.description}</p>
                                <p>{ability.title}</p>
                            </div>
                        </div>
                        )
                        })}
                    </div>
                </div>
            </div>
        </div>}
    </div>
    )
};

PokemonDetailsLayout.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object),
    abilities: PropTypes.arrayOf(PropTypes.object),
    price: PropTypes.number,
    loadingDetails: PropTypes.bool,
}

export default PokemonDetailsLayout