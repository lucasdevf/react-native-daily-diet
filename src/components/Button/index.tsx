import { ReactNode } from "react"
import { TouchableOpacityProps } from "react-native"
import { ButtonContainer, Title } from "./styles"

type Props = TouchableOpacityProps & {
  title: string
  icon?: ReactNode
}

export function Button({ title, icon, ...rest }: Props) {
  return (
    <ButtonContainer {...rest}>
      {icon ? icon : ''}
      <Title style={{ marginLeft: icon ? 12 : 0 }}>{title}</Title>
    </ButtonContainer>
  )
}