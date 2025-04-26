import { Header } from "../../../components";

const Dashboard = () => {
  const user = { name: "John" };
  return (
    <main className={"dashboard wrapper"}>
      <Header
        title={`Welcome ${user?.name ?? "Guest"} 👋`}
        description={
          "Track activity, trends and popular destinations in real time"
        }
      />
      Dashbaord content
    </main>
  );
};
export default Dashboard;
