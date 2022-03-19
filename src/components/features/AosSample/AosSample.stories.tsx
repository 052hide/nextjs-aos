import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { AosSample } from './AosSample'

const meta: ComponentMeta<typeof AosSample> = {
  title: 'features/AosSample',
  component: AosSample,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Base: ComponentStoryObj<typeof AosSample> = {
  args: {},
}
