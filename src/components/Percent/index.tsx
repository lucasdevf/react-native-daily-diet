import { ArrowLeft } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { ButtonGoBack, IconExpand, Label, PercentContainer, Value } from "./styles";

interface Props {
  showGoBackButton?: boolean
  showExpandButton?: boolean
}

export function Percent({ showGoBackButton, showExpandButton }: Props) {
  const theme = useTheme()

  return (
    <PercentContainer>
      {showGoBackButton && 
        (
          <ButtonGoBack>
            <ArrowLeft color={theme.COLORS.GREEN_500} />
          </ButtonGoBack>
        )
      }

      <Value>90,86%</Value>

      <Label>das refeições dentro da dieta</Label>

      {showExpandButton && <IconExpand />}
    </PercentContainer>
  )
}