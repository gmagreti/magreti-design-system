import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@magreti-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <p style={{ margin: 0, color: '#fff' }}>Box element</p>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
