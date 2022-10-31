import { Plus } from "phosphor-react-native";
import { Button } from "../../components/Button";
import { HeaderHome } from "../../components/HeaderHome";
import { Percent } from "../../components/Percent";
import { HomeContainer, Label, Meals } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <HeaderHome />

      <Percent />

      <Meals>
        <Label>Refeições</Label>

        <Button icon={<Plus color="white" size={18} weight="bold" />} title="Nova refeição" />
      </Meals>
    </HomeContainer>
  )
}