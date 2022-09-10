import { FunctionComponent } from 'react'
import {
  Stack
} from '@mui/material'
import Leaderboard from './../../leaderboard/Leaderboard'
import { PageProps } from '../../components/PageProps'

const LeaderboardStack: FunctionComponent<PageProps> = ({ activeTab }: PageProps) => {
  return (
      <Stack spacing={3} style={{ display: activeTab !== 'leaderboard' ? 'none' : undefined }}>
          <Leaderboard />
      </Stack>
  )
}

export default LeaderboardStack
