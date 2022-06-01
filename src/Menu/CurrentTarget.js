import { memo } from "react";
import { Card } from "react-bootstrap";

function CurrentTarget({ target }) {
  return (
    <Card>
      <Card.Header className={target?.uiClass + " p-2"}>
        Current Target: <span className="fw-bold">{target?.name}</span>
      </Card.Header>
      <Card.Body>
        {/* <Card.Subtitle className="mb-2 text-muted">
        Card Subtitle
      </Card.Subtitle> */}
        <Card.Text>
          Some text some text some text some text some text some text some text
          some text some text .
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
}

export default memo(CurrentTarget);
