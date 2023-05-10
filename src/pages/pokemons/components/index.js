import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../../routes/routeNames";
import { startCase } from "lodash";

import styles from './styles.module.scss';
import MaterialPagination from "../../../components/MaterialPagination";

const PokemonsLayout = ({
    pokemons,
    errors,
    page,
    handlePageChange,
}) => {
    return (
        <div className={styles.wrapper}>
            {errors && <p>{errors}</p>}
            <div className = {styles.pokemons_wrapper}>{pokemons.map(({id,image, name, price})=>{
                return (<Link key = {id} to = {`${ROUTE_NAMES.POKEMONS}/${name}`} className={styles.pokemon_item}>
                    <img src={image} alt = "" width = {250} height = {250}/>
                    <div>{startCase(name)}</div>
                    <p>{price}</p>
                </Link>)
            })}</div>
            <div className={styles.pagination}>
                <MaterialPagination page={page} handlePageChange={handlePageChange}/>
            </div>
        </div>
    )
}

export default PokemonsLayout