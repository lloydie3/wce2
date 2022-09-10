import { useDispatch, useSelector } from 'react-redux'
import { Card, Grid, styled, CardContent } from '@mui/material'

import { getGroupData } from './../../redux/actions/groupTaskActions'
import { useEffect } from 'react'
import { RootState } from './../../redux/store'
import { getImgByName } from './../../img/imgFetch'

const StyledOuterCard = styled(Card)(({ theme }) => ({
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px !important',
  background: theme.palette.background.paper,
  [theme.breakpoints.down('sm')]: { padding: '16px !important' }
}))

// const StyledCard = styled(Card)(({ theme }) => ({
//   display: 'flex',
//   flexWrap: 'wrap',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   padding: '24px !important',
//   background: theme.palette.background.paper,
//   [theme.breakpoints.down('sm')]: { padding: '16px !important' }
// }))

// const ContentBox = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexWrap: 'wrap',
//   alignItems: 'center',
//   '& small': { color: theme.palette.text.secondary },
//   '& .icon': { opacity: 0.6, fontSize: '44px', color: theme.palette.primary.main }
// }))

// const Heading = styled('h6')(({ theme }) => ({
//   margin: 0,
//   marginTop: '4px',
//   fontSize: '14px',
//   fontWeight: '500',
//   color: theme.palette.primary.main
// }))

const GroupTable: React.FunctionComponent = () => {
  const { groupDetails } = useSelector((state: RootState) => state.groups)
  const dispatch = useDispatch()
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    dispatch(getGroupData())
  }, [])

  return (
        <Grid container spacing={3} sx={{ mb: '24px' }}>
            {groupDetails?.map((groupDetail, index) => (
                <Grid item xs={12} md={3} key={index}>
                    <StyledOuterCard style={{ backgroundColor: '#D9D9D9', borderRadius: '15px' }} elevation={4}>
                        <h5>{groupDetail.group}</h5>
                        {/* <ContentBox> */}
                        {/*    <Box ml="12px"> */}
                        {/*        <Heading>{groupDetail.group}</Heading> */}
                        {/*    </Box> */}

                        {/* </ContentBox> */}
                        <CardContent style={{ background: 'white', borderRadius: '10px' }}>
<table style={{ borderCollapse: 'collapse' }}>
    <thead>
                                <tr>
                                    <th style={{ width: '15%' }}></th>
                                <th style={{ width: '15%', textAlign: 'left', fontFamily: 'Inter', fontWeight: '400', fontSize: '10px', lineHeight: '130%' }}></th>
                                <th style={{ width: '15%', fontFamily: 'Inter', fontWeight: '400', fontSize: '10px', lineHeight: '130%' }}>GP</th>
                                <th style={{ width: '15%', fontFamily: 'Inter', fontWeight: '400', fontSize: '10px', lineHeight: '130%' }}>W</th>
                                <th style={{ width: '15%', fontFamily: 'Inter', fontWeight: '400', fontSize: '10px', lineHeight: '130%' }}>D</th>
                                <th style={{ width: '15%', fontFamily: 'Inter', fontWeight: '400', fontSize: '10px', lineHeight: '130%' }}>L</th>
                                <th style={{ width: '15%', fontFamily: 'Inter', fontWeight: '400', fontSize: '10px', lineHeight: '130%' }}>GD</th>
                                <th style={{ width: '15%', fontFamily: 'Inter', fontWeight: '400', fontSize: '10px', lineHeight: '130%' }}>P</th>
                                </tr>
    </thead>
                                {groupDetail.teams.map((team, groupIndex) => {
                                  return (<tr key={groupIndex} style={{ borderBottom: '1pt solid black' }}>
                                        <td style={{ width: '15%', textAlign: 'left' }}><img style={{ height: '20px', borderRadius: '90px' }} src={getImgByName(team.team.name)} /></td>
                                        <td style={{ width: '15%', textAlign: 'left', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '400', fontSize: '10px', lineHeight: '130%' }}>{team.team.name}</td>
                                        <td style={{ width: '15%', textAlign: 'center', fontFamily: 'Inter', fontWeight: '400', fontSize: '10px', lineHeight: '130%' }}>{team.gamesPlayed ?? 0}</td>
                                        <td style={{ width: '15%', textAlign: 'center', fontFamily: 'Inter', fontWeight: '400', fontSize: '10px', lineHeight: '130%' }}>{team.wins ?? 0}</td>
                                        <td style={{ width: '15%', textAlign: 'center', fontFamily: 'Inter', fontWeight: '400', fontSize: '10px', lineHeight: '130%' }}>{team.draws ?? 0}</td>
                                        <td style={{ width: '15%', textAlign: 'center', fontFamily: 'Inter', fontWeight: '400', fontSize: '10px', lineHeight: '130%' }}>{team.losses ?? 0}</td>
                                        <td style={{ width: '15%', textAlign: 'center', fontFamily: 'Inter', fontWeight: '400', fontSize: '10px', lineHeight: '130%' }}>{team.gamesDrawn ?? 0}</td>
                                        <td style={{ width: '15%', textAlign: 'center', fontFamily: 'Inter', fontWeight: '400', fontSize: '10px', lineHeight: '130%' }}>{team.points ?? 0}</td>
                                    </tr>)
                                })
                                }
</table>,
                        </CardContent>
                    </StyledOuterCard>
                </Grid>
            ))}
        </Grid>
  )
}

export default GroupTable
