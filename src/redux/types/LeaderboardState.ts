import { PlayerStatistic } from '../../domain/PlayerStatistics'

export interface LeaderboardState {
  playerStatistics: PlayerStatistic[]
}

export const initialLeaderboardState: LeaderboardState = {
  playerStatistics: [
    { userId: 'Wallet A', todayPoints: 100, yesterdayPoints: 105 },
    { userId: 'Wallet B', todayPoints: 90, yesterdayPoints: 105 },
    { userId: 'Wallet C', todayPoints: 80, yesterdayPoints: 105 },
    { userId: 'Wallet D', todayPoints: 70, yesterdayPoints: 105 },
    { userId: 'Wallet E', todayPoints: 60, yesterdayPoints: 105 }
  ]
}
