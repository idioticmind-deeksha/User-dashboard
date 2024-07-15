import { Button, Col, Row,Table } from "react-bootstrap";
import Layout from "../components/Layout";
import { IoFilter } from "react-icons/io5";
import SaleCard from "../components/SaleCard";
import { BsThreeDotsVertical } from "react-icons/bs";

const Dashboard = () => {
  return (
    <>
      <Layout>
        <section>
          <div className="dashboard">
            <div className="header-section d-flex align-items-center justify-content-between">
              <div className="header-data">
                <h4>Welcome back</h4>
                <p>Track your sales activity, leads and deals here.</p>
              </div>
              <div className="header-btn">
                <Button className="btn btn-purple">
                  <span className="me-2">
                    <IoFilter />
                  </span>
                  Filter
                </Button>
              </div>
            </div>
            <div className="salesContainer py-4">
              <SaleCard />
            </div>
            <Row xs={1} md={2} className="g-4">
              <Col lg={6}>
                <div className="sale-order info-boxes">
                  <div className="header-order d-flex align-items-center justify-content-between">
                    <h5>Sale Order</h5>
                    <BsThreeDotsVertical />
                  </div>
                  <div className="OrderTable border-top pt-3 px-2">
                    <Table responsive className=" ">
                      <thead>
                        <tr>
                          <th>PRICE</th>	
                          <th>AMOUNT</th>	
                          <th>TOTAL</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>82.3</td>                    
                          <td>0.15</td>
                          <td>$134,12</td>
                        </tr>
                        <tr>
                          <td>82.3</td>                    
                          <td>0.15</td>
                          <td>$134,12</td>
                        </tr>
                        <tr>
                          <td>82.3</td>                    
                          <td>0.15</td>
                          <td>$134,12</td>
                        </tr>
                        <tr>
                          <td>82.3</td>                    
                          <td>0.15</td>
                          <td>$134,12</td>
                        </tr>
                        <tr>
                          <td>82.3</td>                    
                          <td>0.15</td>
                          <td>$134,12</td>
                        </tr>
                        <tr>
                          <td>82.3</td>                    
                          <td>0.15</td>
                          <td>$134,12</td>
                        </tr>
                        <tr>
                          <td>82.3</td>                    
                          <td>0.15</td>
                          <td>$134,12</td>
                        </tr>
                        
                      </tbody>
                    </Table>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="buy-order info-boxes">
                  <div className="header-order d-flex align-items-center justify-content-between">
                    <h5>Buy Order</h5>
                    <BsThreeDotsVertical />
                  </div>
                  <div className="OrderTable border-top pt-3 px-2">
                    <Table responsive className="">
                      <thead>
                        <tr>
                          <th>PRICE</th>	
                          <th>AMOUNT</th>	
                          <th>TOTAL</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>82.3</td>                    
                          <td>0.15</td>
                          <td>$134,12</td>
                        </tr>
                        <tr>
                          <td>82.3</td>                    
                          <td>0.15</td>
                          <td>$134,12</td>
                        </tr>
                        <tr>
                          <td>82.3</td>                    
                          <td>0.15</td>
                          <td>$134,12</td>
                        </tr>
                        <tr>
                          <td>82.3</td>                    
                          <td>0.15</td>
                          <td>$134,12</td>
                        </tr>
                        <tr>
                          <td>82.3</td>                    
                          <td>0.15</td>
                          <td>$134,12</td>
                        </tr>
                        <tr>
                          <td>82.3</td>                    
                          <td>0.15</td>
                          <td>$134,12</td>
                        </tr>
                        <tr>
                          <td>82.3</td>                    
                          <td>0.15</td>
                          <td>$134,12</td>
                        </tr>
                        
                      </tbody>
                    </Table>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </Layout>
    </>
  );
};
export default Dashboard;
