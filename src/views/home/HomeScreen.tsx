import { FunctionComponent, useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './Header'
import HomeStack from './screenStacks/HomeStack'
import MatchResultStack from './screenStacks/MatchResultStack'
import MatchPredictionStack from './screenStacks/MatchPredictionStack'
import LeaderboardStack from './screenStacks/LeaderboardStack'

interface HomepageProps {
  defaultActiveTab: string
}

const HomeScreen: FunctionComponent<HomepageProps> = ({ defaultActiveTab = 'results' }: HomepageProps) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab)

  return (
      <Container fluid>
          <Header defaultActiveTab={defaultActiveTab} onActiveTabChanged={activeTab => setActiveTab(activeTab)} />
          <HomeStack activeTab={activeTab} />
          <MatchResultStack activeTab={activeTab} />
          <MatchPredictionStack activeTab={activeTab} />
          <LeaderboardStack activeTab={activeTab} />
      </Container>
  )
}

export default HomeScreen
