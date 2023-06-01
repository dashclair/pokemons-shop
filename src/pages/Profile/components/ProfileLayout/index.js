import { startCase } from "lodash";
import { Box } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';

import ProfileCard from "../../../../components/ProfileCard";
import OrdersCard from "../../../../components/OrdersCard";
import Spinner from "../../../../components/Spinner";

import styles from './styles.module.scss';

const ProfileLayout = ({
    profileName,
    email,
    phone,
    roles,
    items,
    lastName,
    gender,
    profileLoading
}) =>{
    return (
    <div className={styles.wrapper}>
        {profileLoading ? <Spinner/> : 
        <div>
            <Box sx={{paddingBottom:4, paddingTop:3}}>
                <ProfileCard 
                profileName={profileName} 
                email={email}
                phone = {phone}
                lastName={lastName}
                gender = {gender}
                role = {roles.map((role)=>{
                    return startCase(role)
                })}
                />
            </Box>
            <Accordion expanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <h3>Orders lists</h3>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={styles.order_wrapper}> {items.map(({id, name,price, image, quantity})=>{
                        return (
                            <OrdersCard
                                key = {id}
                                id={id}
                                name = {startCase(name)}
                                price = {price}
                                image = {image}
                                quantity = {quantity}
                            />
                        )
                    })}</div>
                </AccordionDetails>
            </Accordion>
        </div>}
    </div>
    )
};

ProfileLayout.propTypes= {
    profileName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    roles: PropTypes.array,
    items: PropTypes.arrayOf(PropTypes.object),
    lastName: PropTypes.string,
    gender: PropTypes.string,
    profileLoading: PropTypes.bool,
}

export default ProfileLayout