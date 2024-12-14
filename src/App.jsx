
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import Examples from "./components/Examples";
import Section from "./components/Section";


function App() {


  return (
    <>
      <Header />
      <main>
        <Section title="Core concepts" id="core-concepts"> 
          <CardContainer />
        </Section> 
        <Examples />
      </main>
    </>
  );
}

export default App;
