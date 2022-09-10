import { FunctionComponent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMatchResults } from './../../redux/actions/matchesTaskActions'
import GamedayTemplate from './../matches/GamedayTemplate'
import { RootState } from './../../redux/store'

const Gameday: FunctionComponent = () => {
  const { matchResults } = useSelector((state: RootState) => state.matches)
  const dispatcher = useDispatch()

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    dispatcher(getMatchResults())
  }, [])

  return (
      <GamedayTemplate header="Match Results" matchDetails={matchResults} />
  )
}

export default Gameday
