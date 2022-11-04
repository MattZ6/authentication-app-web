import { CenterContent } from '@components/CenterContent'

import { styled } from '@styles/stitches.config'

export namespace MainLayoutStyles {
  export const Container = styled('main', {
    display: 'flex',
    flexDirection: 'column',

    minHeight: '100vh',
  })

  export const Content = styled(CenterContent, {
    flex: 1,
    display: 'flex',
    paddingVertical: '$normal',
    gap: '$normal',

    '@media screen and (max-width: 760px)': {
      flexDirection: 'column',
    },
  })

  export const Page = styled('section', {
    flex: 1,
  })
}
