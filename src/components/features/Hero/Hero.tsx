
import {Avatar, Stack} from "@mui/material";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import MediaIcons from "../../common/MediaIcons/MediaIcons.tsx";

import profile from '../../../data/profile.json';

export default function Hero() {

    return (

            <Stack id={"home"} spacing={1} alignItems={"center"} pt={16}>
                <Avatar
                    alt={profile.firstName}
                    src={profile.image}
                    sx={{ width: 160, height: 160 }}
                />
                <Typography sx={{fontWeight: 600, fontSize: 48 }}>{profile.firstName} {profile.lastName}</Typography>


                <Stack direction="row" spacing={2}
                       divider={<Divider orientation="vertical" flexItem sx={{backgroundColor: "white"}} />}>
                    {
                        profile.roles.map((skill, index) => {
                            return <span key={index} >{skill}</span>
                        })
                    }
                </Stack>

                <MediaIcons />
            </Stack>
    );
}
