import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { styled } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import { FunctionComponent } from 'react'

const AccordionRoot = styled('div')(({ theme }) => ({
  width: '100%',
  '& .heading': {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}))

export interface AccordionProps {
  heading: string
  content: React.ReactNode
  expanded: boolean
}

interface SimpleExpansionPanelProps {
  accordionContent?: AccordionProps[]
  isAccordion: boolean
}

const SimpleExpansionPanel: FunctionComponent<SimpleExpansionPanelProps> = ({ accordionContent, isAccordion }: SimpleExpansionPanelProps) => {
  return (
      <>
        {!isAccordion && (<div>{accordionContent?.map(thisContent => thisContent.content)}</div>)}
        {isAccordion && (<AccordionRoot>
          {accordionContent?.map((accordion, index) => {
            return (<Accordion key={index} expanded={accordion.expanded}>
              <AccordionSummary
                  id="panel1a-header"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
              >
                <Typography className="heading">{accordion.heading}</Typography>
              </AccordionSummary>

              <AccordionDetails>
                {accordion.content}
              </AccordionDetails>
            </Accordion>)
          })}
        </AccordionRoot>)}
      </>
  )
}

export default SimpleExpansionPanel
