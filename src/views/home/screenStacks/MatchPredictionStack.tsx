import { FunctionComponent } from 'react'
import {
  Stack
} from '@mui/material'
import Predictions from './../../matches/Predictions'
import { PageProps } from '../../components/PageProps'

const MatchPredictionStack: FunctionComponent<PageProps> = ({ activeTab }: PageProps) => {
  return (
      <Stack spacing={3} style={{ display: activeTab !== 'predictions' ? 'none' : undefined }}>
          <Predictions />
      </Stack>
  )
}

export default MatchPredictionStack
