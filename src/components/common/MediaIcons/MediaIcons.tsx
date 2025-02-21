import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from "@mui/icons-material/Mail";
import ArticleIcon from "@mui/icons-material/Article";
import IconButton from "@mui/material/IconButton";
import {Container, Stack} from "@mui/material";


import profile from "../../../data/profile.json";

const mailTo = `mailto:${profile.email}`;

function MediaIcons() {
    return (
        <Container sx={{textAlign: "center"}}>
            <Stack direction={"row"} sx={{ color: "black", alignItems: "center", justifyContent: "center" }} spacing={1}>
                <IconButton aria-label="Linkedin.com" href={profile.linkedin} target="_blank" rel="noreferrer">
                    <LinkedInIcon fontSize="medium" />
                </IconButton>

                <IconButton aria-label="Linkedin.com" href={profile.github} target="_blank" rel="noreferrer">
                    <GitHubIcon fontSize="medium"/>
                </IconButton>

                <IconButton aria-label="Linkedin.com" href={mailTo} target="_blank" rel="noreferrer">
                    <MailIcon fontSize="medium" sx={{ color: "#FF6347" }}/>
                </IconButton>

                <IconButton aria-label="Linkedin.com" href={profile.resume} target="_blank" rel="noreferrer">
                    <ArticleIcon fontSize="medium" sx={{ color: "#FF6347" }}/>
                </IconButton>
            </Stack>
        </Container>
    );
}

export default MediaIcons;