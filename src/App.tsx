import Layout from "./Layout";
import OrdersTable from "./components/OrdersTable";
import SalesChat from "./components/SalesChat";
import StartCards from "./components/StartCards";

const App = () => {
  return (
    <Layout>
      <StartCards />
      <SalesChat />
      <OrdersTable />
    </Layout>
  )
}

export default App;
