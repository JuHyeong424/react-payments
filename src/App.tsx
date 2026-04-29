import styled from "@emotion/styled";
import CardPaymentWidget from "./components/cardPaymentWidget/CardPaymentWidget";

function App() {
  return (
    <AppWrapper>
      <CardPaymentWidget />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(231, 231, 231);
`;

export default App;
