import React from 'react'
import { Card, Typography } from 'antd'
import { Link } from 'react-router-dom'

interface CardProps {
  title?: string
  link?: string
  description?: string
}

const { Title, Text } = Typography

export const RepoCard = (props: CardProps): JSX.Element => {
  const { title = '', description = '' } = props
  return (
    <Card bordered={false} style={{ width: '100%' }}>
      <Title level={4}>
        <Link to={'#'} component={Typography.Link}>
          {title}
        </Link>
      </Title>
      <Text>{description}</Text>
    </Card>
  )
}

export default RepoCard
