import {
  Menu01Icon,
  ProjectorIcon,
  UserGroupIcon,
  WaterfallUp01Icon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

export const DEFAULT_USER = {
  name: 'User',
  email: '',
  avatar: '/onus_avatar.png',
}

export const navMain = [
  {
    title: 'Lifecycle',
    url: '#',
    icon: <HugeiconsIcon icon={Menu01Icon} />,
  },
  {
    title: 'Analytics',
    url: '#',
    icon: <HugeiconsIcon icon={WaterfallUp01Icon} />,
  },
  {
    title: 'Projects',
    url: '#',
    icon: <HugeiconsIcon icon={ProjectorIcon} />,
  },
  {
    title: 'Team',
    url: '#',
    icon: <HugeiconsIcon icon={UserGroupIcon} />,
  },
]
