import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import ArticleIcon from '@mui/icons-material/Article';
import {Avatar, Stack} from "@mui/material";
import Divider from "@mui/material/Divider";

import profile from '../../data/profile.json';
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

export default function Hero() {

    const mailTo = `mailto:${profile.email}`;

    return (

            <Stack spacing={1} alignItems={"center"}>
                <Avatar
                    alt={profile.firstName}
                    src={profile.image}
                    sx={{ width: 120, height: 120 }}
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

                <Stack direction={"row"} sx={{ color: "black"}} spacing={1}>
                    <IconButton aria-label="Linkedin.com" href={profile.linkedin} target="_blank" rel="noreferrer">
                        <LinkedInIcon fontSize="medium" />
                    </IconButton>

                    <IconButton aria-label="Linkedin.com" href={profile.github} target="_blank" rel="noreferrer">
                        <GitHubIcon fontSize="medium" />
                    </IconButton>

                    <IconButton aria-label="Linkedin.com" href={mailTo} target="_blank" rel="noreferrer">
                        <MailIcon fontSize="medium" />
                    </IconButton>

                    <IconButton aria-label="Linkedin.com" href={profile.resume} target="_blank" rel="noreferrer">
                        <ArticleIcon fontSize="medium" />
                    </IconButton>
                </Stack>
            </Stack>
    );
}
