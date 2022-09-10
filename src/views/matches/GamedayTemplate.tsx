import SimpleCard from './../../SimpleCard'
import SimpleExpansionPanel, { AccordionProps } from './../../SimpleExpansionPanel'
import { FunctionComponent, useEffect, useState } from 'react'
import { Gameday } from '../../domain/Gameday'
import moment from 'moment'
import { getImgByName } from '../../img/imgFetch'
import CarouselMain from '../../components/CarouselMain'

interface GamedayTemplateProps {
  header: string
  matchDetails: Gameday[]
  onMatchDataChanged?: (dateIndex: number, matchIndex: number, homeTeam: string, awayTeam: string, homeScore: number, awayScore: number, matchDate: Date) => void
}

const GamedayTemplate: FunctionComponent<GamedayTemplateProps> = ({ header, matchDetails, onMatchDataChanged }: GamedayTemplateProps) => {
  const [selectedDate, setSelectedDate] = useState(undefined)
  const [accordionContent, setAccordionContent] = useState<AccordionProps[]>()

  useEffect(() => {
    const thisContent = matchDetails?.filter(matchDetail => {
      if (!selectedDate) return true
      return moment(matchDetail.day).isSame(selectedDate)
    })
      .map((gameday, dateIndex) => {
        const thisResponse: AccordionProps = {
          expanded: dateIndex === 0,
          heading: moment(gameday.day).format(),
          content: <table style={{ borderCollapse: 'collapse', borderSpacing: '0 10px' }}>
                    <tbody>
                    {gameday.matches.map((match, matchIndex) => {
                      return (<tr style={{ borderRadius: '50px', backgroundColor: 'grey', marginBottom: '10px' }} key={matchIndex}>
                            <td style={{ borderTopLeftRadius: '50px', borderBottomLeftRadius: '50px' }}><img style={{ height: '20px', borderRadius: '90px' }} src={getImgByName(match.home)} />{match.home}</td>
                            <td><input style={{ all: 'unset', borderBottom: '1px solid black', width: '50%' }} type="text" value={match.homeScore ?? 10} disabled={!onMatchDataChanged} onChange={e => onMatchDataChanged ? onMatchDataChanged(dateIndex, matchIndex, match.home, match.away, parseInt(e.target.value), match.awayScore, gameday.day) : console.log('') } /></td>
                            <td><input style={{ all: 'unset', borderBottom: '1px solid black', width: '50%' }} type="text" value={match.awayScore ?? 20} disabled={!onMatchDataChanged} onChange={e => onMatchDataChanged ? onMatchDataChanged(dateIndex, matchIndex, match.home, match.away, match.homeScore, parseInt(e.target.value), gameday.day) : console.log('') } /></td>
                            <td style={{ borderTopRightRadius: '50px', borderBottomRightRadius: '50px' }}>{match.away}<img style={{ height: '20px', borderRadius: '90px' }} src={getImgByName(match.away)} /></td>
                        </tr>)
                    })
                    }
                    </tbody>
                </table>
        }
        return thisResponse
      })

    setAccordionContent(thisContent)
  }, [matchDetails, selectedDate])

  const dates = matchDetails?.map(matchDetail => moment(matchDetail.day))
  const onSelectedDateUpdated = (date): void => {
    setSelectedDate(date)
  }

  console.log(accordionContent?.length)
  return (
      <>
          <CarouselMain
              items={dates}
              headerFormatter={date => moment(date).format('DD MMM')}
              mainItemFormatter={(date) => moment(date).format('ddd')}
              onSelectedDate={onSelectedDateUpdated}/>
          <div onClick={() => setSelectedDate(undefined)}>View all dates</div>
          <div>View all groups</div>
      <SimpleCard title={header}>
        <SimpleExpansionPanel accordionContent={accordionContent} isAccordion={accordionContent?.length !== 1} />
      </SimpleCard>
      </>
  )
}

export default GamedayTemplate
