import Layout from "../components/Layout";
import { Row, Col, Card, Badge } from "react-bootstrap";
import { ProjectData, TasksSummary } from "../data/ProjectData";
import "../styles/Project.css";
import ClientImg from "../images/avater-img.jpg";

const Project = () => {
  return (
    <>
      <Layout>
        <div className="projectPage">
          <Row xs={1} md={2} className="g-4">
            {ProjectData.map((data) => (
              <Col lg={3} key={data.item}>
                <div className={`${data.item}-box info-boxes projectinfo`}>
                  <div className="d-flex align-items-center justify-content-start">
                    <div className="icons me-4">
                      <data.image size={32} />
                    </div>
                    <div className="data">
                      <h4>{data.number}</h4>
                      <p>{data.status}</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <div className="taskSummery">
            <h3 className="my-4 fs-6">Tasks Summary</h3>
            <Row xs={1} md={2} className="g-4">
              {
                TasksSummary.map((task)=> 
                  <Col lg={4} key={task.id}>
                <Card className="box-hover">
                  <Card.Header className="bg-white">
                  {task.title}
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <div className="d-flex align-items-center">
                        <img
                          alt="client"
                          src={ClientImg}
                          width={"60px"}
                          className="rounded-circle"
                        />
                        <div className="ms-3 clientIfo">
                          <h5 className="fs-6">{task.name}</h5>
                          <p className="py-0">{task.date}</p>
                        </div>
                      </div>
                    </Card.Text>
                    <p className="py-3 desc">{task.data}</p>
                  </Card.Body>
                  <Card.Footer className="text-muted bg-white">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="date">
                            <p>Deu: <span className={`${task.workstatus === "In Progress" ? "text-purple" : "text-red"} fw-bold`}>{task.date}</span></p>
                        </div>
                        <Badge className={`${task.workstatus === "In Progress" ? "badge-in-progress" : "badge-in-pending"} badge`} >{task.workstatus}</Badge>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
                )
              }
            </Row>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Project;
