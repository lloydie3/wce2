import { FunctionComponent, useState } from 'react'

interface FullGameAndGroupSelectorOwnProps {
  onAllDatesSelected?: (boolean) => void
  onAllGroupsSelected?: (boolean) => void
}

const FullGameAndGroupSelector: FunctionComponent<FullGameAndGroupSelectorOwnProps> = ({ onAllDatesSelected, onAllGroupsSelected }: FullGameAndGroupSelectorOwnProps) => {
  const [viewAllDatesSelected, setViewAllDatesSelected] = useState(true)
  const [viewAllGroupsSelected, setViewAllGroupsSelected] = useState(true)

  const allDatesSelected = (): void => {
    if (onAllDatesSelected) onAllDatesSelected(!viewAllDatesSelected)
    setViewAllDatesSelected(!viewAllDatesSelected)
  }

  const allGroupsSelected = (): void => {
    if (onAllGroupsSelected) onAllGroupsSelected(!viewAllGroupsSelected)
    setViewAllGroupsSelected(!viewAllGroupsSelected)
  }

  return (
      <>
          <div onClick={() => allDatesSelected()}>View all dates</div>
          <div onClick={() => allGroupsSelected()}>View all groups</div>
      </>
  )
}

export default FullGameAndGroupSelector
