import { FunctionComponent } from 'react'
import {
  Stack
} from '@mui/material'
import MatchResults from './../../matches/MatchResults'
import GroupTable from '../../matches/GroupTable'
import { PageProps } from '../../components/PageProps'

const MatchResultStack: FunctionComponent<PageProps> = ({ activeTab }: PageProps) => {
  return (
      <Stack spacing={3} style={{ display: activeTab !== 'results' ? 'none' : undefined }}>
          <GroupTable />
          <MatchResults />
      </Stack>
  )
}

export default MatchResultStack
