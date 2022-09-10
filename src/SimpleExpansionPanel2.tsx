import { useSelector } from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import {RootState} from "./redux/store";

const AccordionRoot = styled("div")(({ theme }) => ({
    width: "100%",
    "& .heading": {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function SimpleExpansionPanel2() {
    const { gamedays }  = useSelector((state: RootState) => state.matches);

    return (
        <AccordionRoot>
            {gamedays.map(d => {
                return <Accordion>
                    <AccordionSummary
                        id="panel1a-header"
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                    >
                        <Typography className="heading">{d.day}</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            <table>
                                <thead>
                                <th>Home</th>
                                <th></th>
                                <th></th>
                                <th>Away</th>
                                </thead>
                                <tbody>
                                {d.matches.map((match) => {
                                    return (<tr>
                                        <td>{match.home}</td>
                                        <td><input type="text" /></td>
                                        <td><input type="text" /></td>
                                        <td>{match.away}</td>
                                    </tr>);
                                })
                                }
                                </tbody>
                            </table>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            })}
        </AccordionRoot>);
}
