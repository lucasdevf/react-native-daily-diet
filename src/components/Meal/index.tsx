import { Divisor, Hour, MealContainer, Name, Status } from "./styles";

export interface MealProps {
  id: string
  hour: string
  name: string
  insideDiet: boolean
}

interface Props {
  data: MealProps
}

export function Meal({ data }: Props) {
  return (
    <MealContainer> 
      <Hour>{data.hour}</Hour>

      <Divisor />

      <Name>{data.name}</Name>

      <Status statusGreen={data.insideDiet} />
    </MealContainer>
  )
}