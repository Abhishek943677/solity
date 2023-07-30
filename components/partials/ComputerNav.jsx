import { FavoriteOutlined, LocationOnOutlined, RestoreOutlined } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction, Button } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import { Box } from '@mui/system'
import Link from 'next/link'
import React from 'react'
import main  from "../../config/navbarmenu.json"

export default function ComputerNav() {

  return (
    <div className=" lg:flex-row lg:block hidden h-fit " >
      {main.menu.map(({name,path})=>
        <Link href={`${path}`} className="p-2 text-lg" key={name}>
            <Button className='dark:text-white'>{name}</Button>
          </Link>
      )}
        </div>


  ) 
}
