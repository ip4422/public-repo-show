import React from 'react'
import { List } from 'antd'
import { FolderFilled, FileOutlined } from '@ant-design/icons'

import { RepoContent, RepoContetItemType } from '@root/store'

/**
 * Item of repository content  with file or folder icon depends on item type
 */
export const RepoItem = ({ name, type }: RepoContent): JSX.Element => {
  return (
    <List.Item>
      <List.Item.Meta
        avatar={
          type === RepoContetItemType.dir ? (
            <FolderFilled style={{ color: '#79b8ff', fontSize: '16px' }} />
          ) : (
            <FileOutlined style={{ color: '#959da5', fontSize: '16px' }} />
          )
        }
        description={name}
      />
    </List.Item>
  )
}
