import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-uou-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/moisesnetouou.png',
    alt: 'Moisés Neto',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
    alt: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: undefined,
  },
}
