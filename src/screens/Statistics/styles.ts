import styled, { css } from 'styled-components/native'

import { SafeAreaView } from 'react-native-safe-area-context'

export const StatisticsContainer = styled(SafeAreaView)`
  background: ${({ theme }) => theme.COLORS.GREEN_100};
  flex: 1;
  padding-top: 24px;
`

export const Content = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 32px;
  margin-top: 34px;
  padding: 24px;
  padding-top: 34px;

  flex-direction: column;
  align-items: center;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_900};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  margin-bottom: 12px;
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`