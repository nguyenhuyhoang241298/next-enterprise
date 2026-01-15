import { userEvent } from 'storybook/test'
// Replace nextjs-vite with the name of your framework
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { HugeiconsIcon } from '@hugeicons/react'

import {
  ArrowUp01Icon,
  Calendar04Icon,
  Home03Icon,
  InboxDownloadIcon,
  Search01Icon,
  Settings01Icon,
  UserIcon,
} from '@hugeicons/core-free-icons'

/**
 * A composable, themeable and customizable sidebar component.
 */
const meta = {
  title: 'ui/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
    side: {
      options: ['left', 'right'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['sidebar', 'floating', 'inset'],
      control: { type: 'radio' },
    },
    collapsible: {
      options: ['offcanvas', 'icon', 'none'],
      control: { type: 'radio' },
    },
  },
  args: {
    side: 'left',
    variant: 'sidebar',
    collapsible: 'icon',
  },
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <SidebarProvider>
        <Story />
        <section className="m-4">
          <SidebarTrigger />
          <div className="size-full" />
        </section>
      </SidebarProvider>
    ),
  ],
} satisfies Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof Sidebar>

// Menu items.
const items = [
  {
    title: 'Home',
    url: '#',
    icon: (
      <HugeiconsIcon icon={Home03Icon} strokeWidth={2} className="h-4 w-4" />
    ),
  },
  {
    title: 'Inbox',
    url: '#',
    icon: (
      <HugeiconsIcon
        icon={InboxDownloadIcon}
        strokeWidth={2}
        className="h-4 w-4"
      />
    ),
  },
  {
    title: 'Calendar',
    url: '#',
    icon: (
      <HugeiconsIcon
        icon={Calendar04Icon}
        strokeWidth={2}
        className="h-4 w-4"
      />
    ),
  },
  {
    title: 'Search',
    url: '#',
    icon: (
      <HugeiconsIcon icon={Search01Icon} strokeWidth={2} className="h-4 w-4" />
    ),
  },
  {
    title: 'Settings',
    url: '#',
    icon: (
      <HugeiconsIcon
        icon={Settings01Icon}
        strokeWidth={2}
        className="h-4 w-4"
      />
    ),
  },
]

/**
 * A simple sidebar with a group of menu items.
 */
export const Simple: Story = {
  render: (args) => (
    <Sidebar {...args}>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  ),
}

/**
 * A simple sidebar with a footer menu item.
 */
export const Footer: Story = {
  render: (args) => (
    <Sidebar {...args}>
      <SidebarHeader />
      <SidebarContent />
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <HugeiconsIcon icon={UserIcon} strokeWidth={2} /> Username
                  <HugeiconsIcon
                    icon={ArrowUp01Icon}
                    strokeWidth={2}
                    className="ml-auto"
                  />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-(--radix-popper-anchor-width)"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  ),
}

export const ShouldCloseOpen: Story = {
  ...Simple,
  name: 'when clicking the trigger, should close and open the sidebar',
  tags: ['!dev', '!autodocs'],
  play: async ({ canvas, step }) => {
    const sidebarBtn = await canvas.findByRole('button', {
      name: /toggle/i,
    })
    await step('close the sidebar', async () => {
      await userEvent.click(sidebarBtn)
    })

    await step('reopen the sidebar', async () => {
      await userEvent.click(sidebarBtn)
    })
  },
}
