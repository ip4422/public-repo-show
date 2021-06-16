import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'

/**
 * Interface for Breadcrumbs component
 * @typedef BreadcrumbsItem
 * @type {object}
 * @property {string} href - link of breadcrumb item
 * @property {string} title - title of breacrumb item
 */
export type BreadcrumbsItem = {
  href: string
  title: string
}

interface BreadcrumbsProps {
  items: BreadcrumbsItem[]
}

/**
 * Breadcrumbs presentation component
 * Draw passed array of items
 */
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
