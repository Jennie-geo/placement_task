import Clear from "./components/Clear/Clear";
import Output from "./components/Output/Output";
import Numbers from "./components/Numbers/Numbers";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Body>
        <Output />
        <Clear />
        {/* <Numbers /> */}
      </Body>
    </div>
  );
}

const Body = styled.div`
background-Color: white;
height: 34vh;
width: 25%;
border: 1px solid red;
margin: 180px auto;
`

export default App;
