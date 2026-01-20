'use client'

import {
  Logout05Icon,
  MoreVerticalIcon,
} from '@hugeicons-pro/core-stroke-rounded'
import { HugeiconsIcon } from '@hugeicons/react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import { useMutation } from '@tanstack/react-query'
import { signOut, useSession } from 'next-auth/react'
import { toast } from 'sonner'
import { logout } from './api'
import { DEFAULT_USER } from './configs'

export function NavUser() {
  const { isMobile } = useSidebar()
  const { data: session } = useSession()

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      signOut()
    },
    onError: () => {
      toast.error('Logout failed. Please try again.')
    },
  })

  const handleLogout = () => {
    logoutMutation.mutate()
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent cursor-pointer data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-full">
                <AvatarImage
                  src={session?.picture || DEFAULT_USER.avatar}
                  alt={session?.name || DEFAULT_USER.name}
                />
                <AvatarFallback className="rounded-lg">Onus</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {session?.name || DEFAULT_USER.name}
                </span>
                <span className="truncate text-xs text-muted-foreground">
                  {session?.email || DEFAULT_USER.email}
                </span>
              </div>
              <HugeiconsIcon icon={MoreVerticalIcon} />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-full">
                  <AvatarImage
                    src={session?.picture || DEFAULT_USER.avatar}
                    alt={session?.name || DEFAULT_USER.name}
                  />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {session?.name || DEFAULT_USER.name}
                  </span>
                  <span className="truncate text-xs text-muted-foreground">
                    {session?.email || DEFAULT_USER.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleLogout}
              className={cn('cursor-pointer', {
                'opacity-50 pointer-events-none': logoutMutation.isPending,
              })}
            >
              <HugeiconsIcon icon={Logout05Icon} className="mr-2" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
