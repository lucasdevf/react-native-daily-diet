import styled, { css } from 'styled-components/native'

export const MealContainer = styled.View`
  margin-top: 16px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 6px;

  padding: 16px 12px;
  flex-direction: row;
  align-items: center;
`

export const Hour = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_900};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Divisor = styled.View`
  margin: 0 12px;
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const Name = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_900};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

interface StatusProps {
  statusGreen: boolean
}

export const Status = styled.View<StatusProps>`
  width: 14px;
  height: 14px;
  border-radius: 999px;

  background: ${({ theme, statusGreen }) => statusGreen ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300};
`