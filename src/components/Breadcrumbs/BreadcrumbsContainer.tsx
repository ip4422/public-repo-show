import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Breadcrumbs, BreadcrumbsItem } from './'

import { ROOT_PATH } from '@root/config/constants'

/**
 * BreadcrumbsContainer responsibility for preparing breadcrumbs items
 * on location change
 */
export const BreadcrumbsContainer = (): JSX.Element => {
  const [items, setItems] = useState([] as BreadcrumbsItem[])
  let location = useLocation()

  useEffect(() => {
    const pathes = location.pathname.split('/').filter(item => item !== '')
    let pointer = 0
    const breadcrumbsItems: BreadcrumbsItem[] = [] as BreadcrumbsItem[]
    // should consider additional ROOT_PATH for every breadcrumb
    if (ROOT_PATH && `/${pathes[pointer]}` === ROOT_PATH) {
      pathes.shift()
    }
    while (pointer < pathes.length) {
      let path = ROOT_PATH ? ROOT_PATH : ''
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
