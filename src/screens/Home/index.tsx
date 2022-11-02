import { Plus } from "phosphor-react-native";
import { FlatList } from "react-native";
import { Button } from "../../components/Button";
import { HeaderHome } from "../../components/HeaderHome";
import { Meal, MealProps } from "../../components/Meal";
import { Percent } from "../../components/Percent";
import { HomeContainer, Label, Meals } from "./styles";

export function Home() {

  const meals: MealProps[] = [
    {
      id: '123',
      name: 'X-tudo',
      hour: '08:00',
      insideDiet: false
    },
    {
      id: '1236',
      name: 'Vitamina de banana com abacateo',
      hour: '09:30',
      insideDiet: true
    },
    {
      id: '1235',
      name: 'Salada cesar com frango grelhado',
      hour: '12:30',
      insideDiet: true
    },
    {
      id: '1234',
      name: 'Whey protein com leite',
      hour: '16:00',
      insideDiet: true
    },
    {
      id: '1237',
      name: 'Salada cesar com frango grelhado',
      hour: '12:30',
      insideDiet: true
    },
    {
      id: '1238',
      name: 'Whey protein com leite',
      hour: '16:00',
      insideDiet: true
    },
    {
      id: '1239',
      name: 'Whey protein com leite',
      hour: '16:00',
      insideDiet: true
    },
    {
      id: '12310',
      name: 'Whey protein com leite',
      hour: '16:00',
      insideDiet: true
    }
  ]

  return (
    <HomeContainer>
      <HeaderHome />

      <Percent showExpandButton />

      <Meals>
        <Label>Refeições</Label>

        <Button icon={<Plus color="white" size={18} weight="bold" />} title="Nova refeição" />
      </Meals>
      
      <FlatList 
        data={meals}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Meal data={item} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 16, paddingBottom: 54 }}
      />
    </HomeContainer>
  )
}