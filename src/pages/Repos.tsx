import React from 'react'
import { Empty } from 'antd'

interface ReposProps {
  name?: string
}

export const Repos = (props: ReposProps): JSX.Element => {
  return (
    <div>
      Repos
      <Empty />
    </div>
  )
}

export default Repos
