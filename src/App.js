import Main from "./components/Main";
import CartProvider from "./store/CartProvider";


function App() {
  return (
    <CartProvider>
      <Main />
    </CartProvider>
  );
}

export default App;
