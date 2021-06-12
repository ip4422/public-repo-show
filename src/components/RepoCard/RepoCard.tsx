import React from 'react'
import { Card, Typography, Divider } from 'antd'
import { Link } from 'react-router-dom'

interface CardProps {
  name?: string
  link?: string
  description?: string
}

const { Title, Text } = Typography

export const RepoCard = (props: CardProps): JSX.Element => {
  const { name = '', description = '' } = props
  return (
    <Card bordered={false} style={{ width: '100%' }}>
      <Title level={4}>
        <Link to={'#'} component={Typography.Link}>
          {name}
        </Link>
      </Title>
      <Text>{description}</Text>
      <Divider />
    </Card>
  )
}

export default RepoCard
