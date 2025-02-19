import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';


import profile from '../../data/profile.json';
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
                <Typography variant={"h4"} pb={4}>Expertise</Typography>

                <Grid container spacing={6}
                    >
                    {Object.keys(profile.expertise).map((expertise, index) => {
                        const expertiseKey = expertise as ExpertiseKeys;
                        // @ts-ignore
                        const icon = iconMap[profile.expertise[expertiseKey].icon];
                        return (
                            <Grid key={index} size={{ xs: 12, md: 4 }}>
                                <FontAwesomeIcon icon={icon} size="3x"/>
                                <Typography variant={"h6"} fontWeight={600}>{expertise}</Typography>
                                <Typography>{profile.expertise[expertiseKey]?.Description}</Typography>
                                <Container sx={{mt:1}}>
                                    <Typography variant={"caption"}>Tech stack</Typography>
                                    <Container>
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