import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Breadcrumbs, { BreadcrumbsItem } from './Breadcrumbs'

export const BreadcrumbsContainer = (): JSX.Element => {
  const [items, setItems] = useState([] as BreadcrumbsItem[])
  let location = useLocation()

  useEffect(() => {
    const pathes = location.pathname.split('/').filter(item => item !== '')
    let pointer = 0
    const breadcrumbsItems: BreadcrumbsItem[] = [] as BreadcrumbsItem[]
    while (pointer < pathes.length) {
      let path = ''
      for (let i = 0; i <= pointer; i++) {
        path += '/' + pathes[i]
      }
      breadcrumbsItems.push({
        href: path,
        title: pathes[pointer]
      })
      pointer++
    }
    setItems(breadcrumbsItems)
  }, [location])

  return <Breadcrumbs items={items} />
}

export default BreadcrumbsContainer
