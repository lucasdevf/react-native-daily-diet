import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";
import { ButtonGoBack, IconExpand, Label, PercentContainer, Value } from "./styles";

interface Props extends TouchableOpacityProps {
  showGoBackButton?: boolean
  showExpandButton?: boolean
}

export function Percent({ showGoBackButton, showExpandButton, ...rest }: Props) {
  const theme = useTheme()

  const navigation = useNavigation()

  return (
    <PercentContainer {...rest}>
      {showGoBackButton && 
        (
          <ButtonGoBack onPress={() => navigation.goBack()}>
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