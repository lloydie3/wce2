import { FunctionComponent, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {
  styled
} from '@mui/material'
import { RootState } from '../../redux/store'

interface HeaderOwnProps {
  onActiveTabChanged: (string) => void
  defaultActiveTab: string
}

interface NavbarColProps {
  tabIsActive: boolean
}

const NavBarCol = styled(Col)<NavbarColProps>(({ tabIsActive }) => ({
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

const Header: FunctionComponent<HeaderOwnProps> = ({ defaultActiveTab, onActiveTabChanged }: HeaderOwnProps) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab)
  const { walletAddress, priceTier } = useSelector((state: RootState) => state.user)

  const activeTabChanged = (activeTab: string): void => {
    onActiveTabChanged(activeTab)
    setActiveTab(activeTab)
  }

  return (
        <>
            <Row>
                <h5 style={{ textAlign: 'center', fontSize: '48px' }}>World Cup Extravaganza!</h5>
            </Row>
            <Row style={{ borderBottom: '1px solid black', borderTop: '1px solid black' }}>
                <Col md={2}>User: {walletAddress}<br /> Price Tier: {priceTier}</Col>
                <Col>
                    <Row>
                        <NavBarCol tabIsActive={activeTab === 'home'} md={2} onClick={() => activeTabChanged('home')}>HOMEPAGE</NavBarCol>
                        <NavBarCol tabIsActive={activeTab === 'results'} md={3} onClick={() => activeTabChanged('results')}>MATCH RESULTS</NavBarCol>
                        <NavBarCol tabIsActive={activeTab === 'predictions'} md={3} onClick={() => activeTabChanged('predictions')}>MATCH PREDICTIONS</NavBarCol>
                        <NavBarCol tabIsActive={activeTab === 'highlights'} md={2} onClick={() => activeTabChanged('highlights')}>HIGHLIGHTS</NavBarCol>
                        <NavBarCol tabIsActive={activeTab === 'leaderboard'} md={2} onClick={() => activeTabChanged('leaderboard')}>LEADERBOARD</NavBarCol>
                    </Row>
                </Col>
                <Col md={2}></Col>
            </Row>
        </>
  )
}

export default Header
