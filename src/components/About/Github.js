import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const today = new Date();
  const lastYear = new Date();
  lastYear.setFullYear(today.getFullYear() - 1);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="devaniyagnik"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
        transformData={(data) =>
          data.filter((day) => new Date(day.date) >= lastYear)
        }
      />
    </Row>
  );
}

export default Github;
