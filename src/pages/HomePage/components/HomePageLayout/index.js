import PropTypes from 'prop-types';

import CustomButton from '../../../../components/CustomButton';
import pikachu from '../../../../static/images/pngwing.com.png';
import poke from '../../../../static/images/poke.png';

import styles from './styles.module.scss';

const HomePageLayout = ({
    isSignedIn,
    handleGoToPokemons,
    handleGoToSignUp,
    handleGoToSignIn
}) => {
    return (
    <div className={styles.wrapper}>
        <div className={styles.title}>
            <h1>Welcome to Pokémon</h1>
        </div>
        <div style={{display:'flex'}}>
            <img style={{position:'absolute', top: 400, left: 680}} src={poke} alt="" width={300} height={300}/>
        </div>
        <img style={{position:'absolute', top: 150, left: 950}} src={pikachu} alt="" width={300} height={300}/>
        <div className={styles.buttons__wrapper}>
            {isSignedIn ? <CustomButton size="medium" text='get pokemons' onClick={handleGoToPokemons}/> : 
            <div  className={styles.buttons__wrapper_auth}>
                <CustomButton size="medium" text='sign up'onClick={handleGoToSignUp} />
                <CustomButton size="medium" text='log in'onClick={handleGoToSignIn} />
            </div>}
        </div>
    </div>
    )
};

HomePageLayout.propTypes = {
    isSignedIn: PropTypes.bool,
    handleGoToPokemons: PropTypes.func,
    handleGoToSignUp: PropTypes.func,
    handleGoToSignIn: PropTypes.func,
};

export default HomePageLayout