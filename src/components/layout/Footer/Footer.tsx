
import {Container} from "@mui/material";

import MediaIcons from "../../common/MediaIcons/MediaIcons.tsx";

import styles from './Footer.module.css';

function Footer() {
    return (
        <Container className={styles.footer} sx={{textAlign: "center", py: 4}} >
            <MediaIcons />
        </Container>
    );
}

export default Footer;