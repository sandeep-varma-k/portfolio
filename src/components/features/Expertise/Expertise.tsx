import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';


import profile from '../../../data/profile.json';
import {Container, Stack} from "@mui/material";
import Grid from '@mui/material/Grid2';
import Typography from "@mui/material/Typography";

const iconMap = {
    fullStack: faReact,
    architecture: faDocker,
    management: faPeopleRoof
};


type ExpertiseKeys = "Full Stack Development" | "Application Architecture" | "Engineering Management";


function Expertise() {

    return (
        <Container id="expertise">
            <Stack>
                <Typography variant={"h4"} pb={4} pt={8}>Expertise</Typography>

                <Grid container spacing={6}
                    >
                    {Object.keys(profile.expertise).map((expertise, index) => {
                        const expertiseKey = expertise as ExpertiseKeys;
                        // @ts-ignore
                        const icon = iconMap[profile.expertise[expertiseKey].icon];
                        return (
                            <Grid key={index} size={{ xs: 12, md: 4 }} sx={{ backgroundColor: "white", p: 2, borderRadius: 2 }}>
                                <FontAwesomeIcon icon={icon} size="3x"/>
                                <Typography variant={"h6"} fontWeight={600}>{expertise}</Typography>
                                <Typography>{profile.expertise[expertiseKey]?.Description}</Typography>
                                <Container sx={{mt:1, px:0}} disableGutters>
                                    <Typography variant={"caption"}>Tech stack</Typography>
                                    <Container sx={{px:0}} disableGutters>
                                    {profile.expertise[expertiseKey].skills.map((label, index) => (
                                        <Chip key={index} label={label}  size="small" sx={{m:.5 }} />
                                    ))}
                                    </Container>
                                </Container>
                            </Grid>
                        );
                    })}
                </Grid>
            </Stack>
        </Container>
    );
}

export default Expertise;