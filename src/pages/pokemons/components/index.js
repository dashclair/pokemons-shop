import PropTypes from 'prop-types';

import MaterialPagination from "../../../components/MaterialPagination";
import PokeCard from "../../../components/PokeCard";
import Spinner from '../../../components/Spinner';

import styles from './styles.module.scss';

const PokemonsLayout = ({
    pokemons,
    errors,
    page,
    handlePageChange,
    handleLearnMore,
    addItemToCart,
    cartItem,
    isLoading

}) => {
    return (
        <div className={styles.wrapper}> 
            {errors && <p>{errors}</p>}
            {isLoading ? <Spinner/> : 
            <div className={styles.wrapper_item}>
                <div className = {styles.pokemons_wrapper}>{pokemons.map(({id,image, name, price})=>{
                return (<PokeCard 
                key = {id}
                id={id}
                image = {image}
                name = {name}
                price = {price}
                handleLearnMore={handleLearnMore}
                handleAddToCart ={addItemToCart}
                isDisabled = {cartItem.some((item)=> item.id===id)}
                />)
                })}</div>
            <div className={styles.pagination}>
            <MaterialPagination page={page} handlePageChange={handlePageChange}/>
            </div>
        </div>}
        </div>
    )
};

PokemonsLayout.propTypes = {
    pokemons: PropTypes.arrayOf(PropTypes.object),
    page: PropTypes.number,
    handlePageChange: PropTypes.func,
    handleLearnMore: PropTypes.func,
    addItemToCart: PropTypes.func,
    cartItem: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool,
}

export default PokemonsLayout