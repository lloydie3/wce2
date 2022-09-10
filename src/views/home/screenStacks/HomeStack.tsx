import { FunctionComponent } from 'react'
import {
  Stack
} from '@mui/material'
import Leaderboard from './../../leaderboard/Leaderboard'
import GroupTable from '../../matches/GroupTable'
import { PageProps } from '../../components/PageProps'

const HomeStack: FunctionComponent<PageProps> = ({ activeTab }: PageProps) => {
  return (
      <Stack spacing={3} style={{ display: activeTab !== 'home' ? 'none' : undefined }}>
          <>
              <Leaderboard />
              <GroupTable />
          </>
      </Stack>
  )
}

export default HomeStack
