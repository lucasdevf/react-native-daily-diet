import { CardStatistic } from "../../components/CardStatistic";
import { Percent } from "../../components/Percent";
import { Content, Label, Row, StatisticsContainer } from "./styles";

export function Statistics() {
  return (
    <StatisticsContainer>
      <Percent showGoBackButton />

      <Content>
        <Label>Estatísticas gerais</Label>

        <CardStatistic value={22} label="melhor sequência de pratos dentro da dieta" />

        <CardStatistic value={109} label="refeições registradas" />

        <Row>
          <CardStatistic 
            value={99} 
            label="refeições dentro da dieta"
            variant="green" 
            style={{ width: '48%' }}
          />
          <CardStatistic 
            value={10} 
            label="refeições fora da dieta" 
            variant="red"
            style={{ width: '48%' }}
          />
        </Row>
      </Content>
    </StatisticsContainer>
  )
}