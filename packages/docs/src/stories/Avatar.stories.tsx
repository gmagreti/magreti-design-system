import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@magreti-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://avatars.githubusercontent.com/u/55496302?v=4',
    alt: 'Gabriel Magreti',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
