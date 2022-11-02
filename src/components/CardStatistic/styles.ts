import styled, { css } from 'styled-components/native'

export type CardStatisticVariant = 'default' | 'green' | 'red'

interface CardStatisticContainerProps {
  variant: CardStatisticVariant
}

const backgroundCardStatistic = {
  default: '#EFF0F0',
  green: '#E5F0DB',
  red: '#F4E6E7'
}

export const CardStatisticContainer = styled.View<CardStatisticContainerProps>`
  margin-top: 12px;
  background: ${({ variant }) => backgroundCardStatistic[variant]};

  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  border-radius: 8px;
  padding: 16px;
`

export const Value = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_900};
    font-size: ${theme.FONT_SIZE['2XL']}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  text-align: center;
`