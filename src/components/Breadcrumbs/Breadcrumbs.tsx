import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'

export type BreadcrumbsItem = {
  href: string
  title: string
}

interface BreadcrumbsProps {
  items: BreadcrumbsItem[]
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps): JSX.Element => {
  return (
    <Breadcrumb style={{ color: '#fff' }}>
      {items.length &&
        items.map(item => (
          <Breadcrumb.Item key={item.href + item.title}>
            <Link to={item.href}>{item.title}</Link>
          </Breadcrumb.Item>
        ))}
    </Breadcrumb>
  )
}

export default Breadcrumbs
