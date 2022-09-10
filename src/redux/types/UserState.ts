export interface UserState {
  walletAddress: string
  priceTier: string
}

export const initialUserState: UserState = {
  walletAddress: '0x1',
  priceTier: 'Default'
}
