import React from 'react'
import { Empty } from 'antd'

interface RepoProps {
  name?: string
}

export const Repo = (props: RepoProps): JSX.Element => {
  return (
    <div>
      {/* Repo */}
      <Empty />
    </div>
  )
}

export default Repo
