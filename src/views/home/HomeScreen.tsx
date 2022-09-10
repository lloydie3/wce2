import {
  Stack, styled
} from '@mui/material'
import { useSelector } from 'react-redux'
import Leaderboard from './../leaderboard/Leaderboard'
import Gameday from './../matches/Gameday'
import Predictions from './../matches/Predictions'
import { RootState } from '../../redux/store'
import { FunctionComponent, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import GroupTable from '../matches/GroupTable'
// import CarouselMain from '../../components/CarouselMain'
// import moment from 'moment'
// import styled from 'styled-components'

interface HomepageProps {
  defaultActiveTab: string
}

const NavBarCol = styled(Col)<{tabIsActive: boolean}>(({ tabIsActive }) => ({
  marginTop: '20px',
  marginBottom: '20px',
  fontFamily: 'Inter',
  fontWeight: tabIsActive ? 'bold' : 'normal',
  fontSize: '20px',
  lineHeight: '26px',
  textAlign: 'center',
  backgroundColor: tabIsActive ? '#D9D9D9' : 'white',
  borderRadius: '50px'
}))

const HomeScreen: FunctionComponent<HomepageProps> = ({ defaultActiveTab = 'results' }: HomepageProps) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab)
  const { walletAddress, priceTier } = useSelector((state: RootState) => state.user)

  return (
        <Container fluid>
            <Row>
                <h5 style={{ textAlign: 'center', fontSize: '48px' }}>World Cup Extravaganza!</h5>
            </Row>
                <Row style={{ borderBottom: '1px solid black', borderTop: '1px solid black' }}>
                    <Col md={2}>User: {walletAddress}<br /> Price Tier: {priceTier}</Col>
                    <Col>
                        <Row>
                            <NavBarCol tabIsActive={activeTab === 'home'} md={2} onClick={() => setActiveTab('home')}>HOMEPAGE</NavBarCol>
                            <NavBarCol tabIsActive={activeTab === 'results'} md={3} onClick={() => setActiveTab('results')}>MATCH RESULTS</NavBarCol>
                            <NavBarCol tabIsActive={activeTab === 'predictions'} md={3} onClick={() => setActiveTab('predictions')}>MATCH PREDICTIONS</NavBarCol>
                            <NavBarCol tabIsActive={activeTab === 'highlights'} md={2} onClick={() => setActiveTab('highlights')}>HIGHLIGHTS</NavBarCol>
                            <NavBarCol tabIsActive={activeTab === 'leaderboard'} md={2} onClick={() => setActiveTab('leaderboard')}>LEADERBOARD</NavBarCol>
                        </Row>
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Stack spacing={3} style={{ display: activeTab !== 'home' ? 'none' : undefined }}>
                    <>
                        <Leaderboard />
                        <GroupTable />
                    </>
                </Stack>
        <Stack spacing={3} style={{ display: activeTab !== 'results' ? 'none' : undefined }}>
            <GroupTable />
          <Gameday />
        </Stack>
          <Stack spacing={3} style={{ display: activeTab !== 'predictions' ? 'none' : undefined }}>
              <Predictions />
          </Stack>
            <Stack spacing={3} style={{ display: activeTab !== 'leaderboard' ? 'none' : undefined }}>
                <Leaderboard />
            </Stack>
            </Container>
  )
}

export default HomeScreen
