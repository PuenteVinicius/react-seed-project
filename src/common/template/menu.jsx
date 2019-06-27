import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='Main' icon='main' />
        <MenuTree label='Page' icon='edit'> 
            <MenuItem
                label='Page Item' icon='usd' />
        </MenuTree>
    </ul>
)