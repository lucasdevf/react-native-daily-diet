import { ViewProps } from "react-native"
import { CardStatisticContainer, CardStatisticVariant, Label, Value } from "./styles"

interface Props extends ViewProps {
  value: number
  label: string
  variant?: CardStatisticVariant
}

export function CardStatistic({ value, label, variant = 'default', ...rest }: Props) {
  return (
    <CardStatisticContainer variant={variant} {...rest}>
      <Value>{value}</Value>
      
      <Label>{label}</Label>
    </CardStatisticContainer>
  )
}