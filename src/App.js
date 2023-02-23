import "./App.css";
import Greeting from "./components/Greeting";
import Bye from "./components/Bye";
import Greet from "./components/Greet";
import Layout from "./components/Layout";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <Layout>
        <Todo />
        {/* <Form /> */}
        {/* <Counter /> */}
        {/* <Greeting />
        <Bye />

        <Greet name="Ade" age="12" />
        <Greet name="John" age="12" />
        <Greet name="Bola" age="12" />
        <Greet name="Sade" age="12" />
        <Greet name="Ola" age="12" />
        <Greet name="Yemi" age="12" />
        <Greet name="Sakira" age="12" />
        <Greet name="Chinwie" age="12" /> */}
      </Layout>
    </div>
  );
}

export default App;
