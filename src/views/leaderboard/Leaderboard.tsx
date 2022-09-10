import {
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material'
import { FunctionComponent, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import SimpleCard from '../components/SimpleCard'

const StyledTable = styled(Table)(() => ({
  whiteSpace: 'pre',
  '& thead': {
    '& tr': { '& th': { paddingLeft: 0, paddingRight: 0 } }
  },
  '& tbody': {
    '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } }
  }
}))

const subscribarList = [
  {
    name: 'john doe',
    date: '18 january, 2019',
    amount: 1000,
    status: 'close',
    company: 'ABC Fintech LTD.'
  }
]

const Leaderboard: FunctionComponent = () => {
  const { playerStatistics } = useSelector((state: RootState) => state.playerStats)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangePage = (_, newPage): void => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event): void => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
        <SimpleCard title="Leaderboard">
      <Box width="100%" overflow="auto">
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell align="left">Wallet Address</TableCell>
              <TableCell align="center">Points</TableCell>
              <TableCell align="center">Daily Gain</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {playerStatistics
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((player, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{player.userId}</TableCell>
                      <TableCell align="center">{player.todayPoints}</TableCell>
                      <TableCell align="center">{(player.todayPoints - player.yesterdayPoints)}</TableCell>
                    </TableRow>
              ))}
          </TableBody>
        </StyledTable>

        <TablePagination
            sx={{ px: 2 }}
            page={page}
            component="div"
            rowsPerPage={rowsPerPage}
            count={subscribarList.length}
            onPageChange={handleChangePage}
            rowsPerPageOptions={[5, 10, 25]}
            onRowsPerPageChange={handleChangeRowsPerPage}
            nextIconButtonProps={{ 'aria-label': 'Next Page' }}
            backIconButtonProps={{ 'aria-label': 'Previous Page' }}
        />
      </Box>
        </SimpleCard>
  )
}

export default Leaderboard
