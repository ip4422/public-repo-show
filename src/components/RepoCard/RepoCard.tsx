import React from 'react'
import { Card, Typography, Divider } from 'antd'
import { Link } from 'react-router-dom'

/**
 * Interface for RepoCard component
 * @typedef CardProps
 * @type {object}
 * @param {string} name - repository
 * @param {string} description - repository description
 * @param {string} link - local link to reposytory page
 */
interface CardProps {
  name?: string
  link?: string
  description?: string
}

const { Title, Text } = Typography

/**
 * Show reposytory info. Link and description
 */
export const RepoCard = (props: CardProps): JSX.Element => {
  const { name = '', description = '', link = '' } = props
  return (
    <Card bordered={false} style={{ width: '100%' }}>
      <Title level={4}>
        <Link to={link}>{name}</Link>
      </Title>
      <Text>{description}</Text>
      <Divider />
    </Card>
  )
}
