import styled, { css } from 'styled-components/native'

export const ButtonContainer = styled.TouchableOpacity`
  margin-top: 8px;
  padding: 16px;

  background: ${({ theme }) => theme.COLORS.GRAY_900};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`