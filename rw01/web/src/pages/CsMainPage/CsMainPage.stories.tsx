import type { ComponentMeta } from '@storybook/react'

import CsMainPage from './CsMainPage'

export const generated = () => {
  return <CsMainPage />
}

export default {
  title: 'Pages/CsMainPage',
  component: CsMainPage,
} as ComponentMeta<typeof CsMainPage>
