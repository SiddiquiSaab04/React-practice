import { LayoutDashboard, Settings, Users } from 'lucide-react';
import React from 'react'
const MenuItems = [
  {
    name: 'Dashboard',
    icon: <LayoutDashboard />,
    path: '/'
  },
  {
    name: 'Users',
    icon: <Users />,
    path: '/about'

  },
  {
    name: 'Settings',
    icon: <Settings />,
    path: '/contact'

  },

];

export default MenuItems;