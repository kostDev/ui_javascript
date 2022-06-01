import { Container } from "react-bootstrap";
import TopPanel from "./TopPanel";
import Elements from "./Elements";

function Dashboard() {
  return (
    <Container className="dashboard vh-100 w-75">
      <TopPanel />
      <Elements />
    </Container>
  );
}

export default Dashboard;
