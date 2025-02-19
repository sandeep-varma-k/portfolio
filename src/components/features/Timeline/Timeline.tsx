
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


import profile from '../../../data/profile.json';
import {Avatar, Container, Stack, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";



type IconKeys = "work" | "study";

const iconMap: Record<IconKeys,any> = {
    work: faBriefcase,
    study: faUserGraduate
}


function Timeline() {
    return (
        <Container id="timeline" sx={{pt:8}}>
                <Typography variant={"h4"} pb={4}>Career Timeline</Typography>

                <VerticalTimeline>
                    {profile.timeline.map((item, index) => (
                        <VerticalTimelineElement
                            key={index}
                            contentStyle={{ background: 'white', textAlign: 'justify' }}
                            contentArrowStyle={{ borderRight: '8px solid white' }}
                            date={item.time}
                            iconStyle={{ background: 'white'}}
                            icon={<FontAwesomeIcon icon={iconMap[item.type as IconKeys]} />}
                        >
                            <Stack direction={"column"} spacing={1} alignItems={"center"} justifyContent={"space-between"} pb={1}>

                                <Stack direction={"column"} spacing={0.5} alignItems={"center"} >
                                    <Avatar src={item.image} alt={item.company} sx={{ width: 64, height: 64 }} />
                                    <Stack  alignItems={"center"}  >
                                        <Typography variant={"subtitle2"} sx={{ fontWeight: 600, fontSize: 16, textAlign: "center"  }} >{item.company}</Typography>
                                        <Typography variant={"subtitle2"} sx={{fontSize: 12 }}>{item.location}</Typography>
                                    </Stack>

                                </Stack>


                                <Stack alignItems={"center"} sx={{textAlign:'right', pt: 2 }} >
                                    <Typography variant="subtitle1" sx={{fontSize: 16}}> {item.type==="work"?"Roles":"Concentration"}:</Typography>
                                    <Stack alignItems={"center"}>
                                        {item.roles.map((role, index) => (
                                            <Typography key={index} variant="subtitle2" textAlign={"center"} sx={{fontWeight: 600}}>{role}</Typography>
                                        ))}
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Divider />

                            <Typography textAlign={"left"} fontSize={16} >
                                {item.description}
                            </Typography>


                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
        </Container>
    );
}

export default Timeline;