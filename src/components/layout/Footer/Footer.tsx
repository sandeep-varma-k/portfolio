
import {Container} from "@mui/material";

import MediaIcons from "../../common/MediaIcons/MediaIcons.tsx";



function Footer() {
    return (
        // TODO: Reuse code from Hero.tsx
        <Container sx={{textAlign: "center", py: 4}}>
            <MediaIcons />
        </Container>
    );
}

export default Footer;