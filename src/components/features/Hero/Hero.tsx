
import {Avatar, Stack} from "@mui/material";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import MediaIcons from "../../common/MediaIcons/MediaIcons.tsx";

import profile from '../../../data/profile.json';

// import css module
import styles from './Hero.module.css';

export default function Hero() {

    return (

            <Stack id={"home"} className={styles.hero}
                   spacing={1} alignItems={"center"} pt={16} pb={6}>
                <Avatar
                    alt={profile.firstName}
                    src={profile.image}
                    sx={{ width: 160, height: 160 }}
                />
                <Typography sx={{fontWeight: 600, fontSize: 48 }}>{profile.firstName} {profile.lastName}</Typography>


                <Stack direction="row" spacing={2}
                       divider={<Divider className={styles.hr} orientation="vertical" flexItem />}>
                    {
                        profile.roles.map((skill, index) => {
                            return <Typography key={index} sx={{fontWeight:600, fontSize:"1.25rem"}}>{skill}</Typography>
                        })
                    }
                </Stack>

                <MediaIcons />
            </Stack>
    );
}
