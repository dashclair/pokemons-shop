import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const ProfileCard = ({
    profileName,
    email,
    phone,
    lastName,
    role,
    gender
}) => {
    return (
        <div className={styles.profileCard}>
            <CardContent>
            <h2 style={{marginBottom:10}}>{role}</h2>
                <Box sx={{display:'flex', gap:3}}>
                    <Avatar sx={{marginLeft:2}} src="/broken-image.jpg" />
                    <Box>
                        <Box sx={{display:'flex', gap:3}}>
                            <TextField
                                sx={{width:350}}
                                id="standard-read-only-input"
                                label="Name"
                                defaultValue={profileName}
                                variant="standard"
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                sx={{width:350}}
                                id="standard-read-only-input"
                                label="Last Name"
                                defaultValue={lastName}
                                variant="standard"
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Box>
                        <Box sx={{display:'flex', gap:3}}>
                            <TextField
                                sx={{width:350}}
                                id="standard-read-only-input"
                                label="email"
                                defaultValue={email}
                                variant="standard"
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                sx={{width:350}}
                                id="standard-read-only-input"
                                label="phone"
                                defaultValue={phone}
                                variant="standard"
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                         </Box>
                    </Box>
                    <TextField
                        sx={{width:350}}
                        id="standard-read-only-input"
                        label="Gender"
                        defaultValue={gender}
                        variant="standard"
                        InputProps={{
                            readOnly: true,
                        }}/>
                </Box>
            </CardContent>
        </div>
    )
};

ProfileCard.propTypes = {
    profileName: PropTypes.string,
    lastName: PropTypes.string,
    phone: PropTypes.string,
    role: PropTypes.array,
    gender: PropTypes.string,

};

export default ProfileCard