import styled, { css } from 'styled-components/native';

import { ArrowUpRight } from "phosphor-react-native";

export const PercentContainer = styled.TouchableOpacity`
  margin-top: 36px;
  background: ${({ theme }) => theme.COLORS.GREEN_100};

  padding: 16px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Value = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_900};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE['3XL']}px;
  `}

  margin-bottom: 8px;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`

export const IconArrow = styled(ArrowUpRight).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_500,
  weight: 'bold'
}))`
  position: absolute;
  top: 16px;
  right: 16px;
`