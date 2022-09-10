import { FunctionComponent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getMatchPredictions,
  // submitMatchPredictions,
  updateMatchPredictions
} from './../../redux/actions/matchesTaskActions'
import GamedayTemplate from './GamedayTemplate'
import { RootState } from './../../redux/store'

const Predictions: FunctionComponent = () => {
  const { matchPredictions } = useSelector((state: RootState) => state.matches)
  const dispatcher = useDispatch()

  const onMatchPredictionUpdated = (dateIndex, matchIndex, homeTeam, awayTeam, homeTeamScore, awayTeamScore, matchDate): void => {
    dispatcher(updateMatchPredictions(dateIndex, matchIndex, homeTeam, awayTeam, homeTeamScore, awayTeamScore, matchDate))
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    dispatcher(getMatchPredictions())
  }, [])
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  return (
      <>
      <GamedayTemplate header="Predictions" matchDetails={matchPredictions} onMatchDataChanged={onMatchPredictionUpdated} />
          {/* <button onClick={e => dispatcher(submitMatchPredictions())}>test</button> */}
      </>
  )
}

export default Predictions
