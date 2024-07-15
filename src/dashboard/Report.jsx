import React from "react";
import Layout from "../components/Layout";
import { Badge, Table } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";

const Report = () => {
  return (
    <>
      <Layout>
        <div className="reportpage">
          <h3 className="mb-4 fs-6">Tasks Summary</h3>
          <div className="info-boxes">
            <div className="report-table">
              <div className="header-order d-flex align-items-center justify-content-between">
                <h5>Generated Report</h5>
                <BsThreeDotsVertical />
              </div>
              <Table responsive>
                <thead className="table-light">
                  <tr>
                    <th>Invoice</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Due Date</th>
                    <th>Amount</th>
                    <th>Discount</th>
                    <th>Amount Open</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>INV-00001</td>
                    <td>Ricky Antony</td>
                    <td>14 Jan 2023</td>
                    <td>20 Jan 2023</td>
                    <td>105 $</td>
                    <td>5 $</td>
                    <td>120 $</td>
                    <td><Badge className="badge-success">Active</Badge></td>
                  </tr>
                  <tr>
                    <td>INV-00001</td>
                    <td>Ricky Antony</td>
                    <td>14 Jan 2023</td>
                    <td>20 Jan 2023</td>
                    <td>105 $</td>
                    <td>5 $</td>
                    <td>120 $</td>
                    <td><Badge className="badge-success">Active</Badge></td>
                  </tr>
                  <tr>
                    <td>INV-00001</td>
                    <td>Ricky Antony</td>
                    <td>14 Jan 2023</td>
                    <td>20 Jan 2023</td>
                    <td>105 $</td>
                    <td>5 $</td>
                    <td>120 $</td>
                    <td><Badge className="badge-success">Active</Badge></td>
                  </tr>
                  <tr>
                    <td>INV-00001</td>
                    <td>Ricky Antony</td>
                    <td>14 Jan 2023</td>
                    <td>20 Jan 2023</td>
                    <td>105 $</td>
                    <td>5 $</td>
                    <td>120 $</td>
                    <td><Badge className="badge-in-pending">Pending</Badge></td>
                  </tr>
                  <tr>
                    <td>INV-00001</td>
                    <td>Ricky Antony</td>
                    <td>14 Jan 2023</td>
                    <td>20 Jan 2023</td>
                    <td>105 $</td>
                    <td>5 $</td>
                    <td>120 $</td>
                    <td><Badge className="badge-in-pending">Pending</Badge></td>
                  </tr>
                  <tr>
                    <td>INV-00001</td>
                    <td>Ricky Antony</td>
                    <td>14 Jan 2023</td>
                    <td>20 Jan 2023</td>
                    <td>105 $</td>
                    <td>5 $</td>
                    <td>120 $</td>
                    <td><Badge className="badge-in-pending">Pending</Badge></td>
                  </tr>
                  <tr>
                    <td>INV-00001</td>
                    <td>Ricky Antony</td>
                    <td>14 Jan 2023</td>
                    <td>20 Jan 2023</td>
                    <td>105 $</td>
                    <td>5 $</td>
                    <td>120 $</td>
                    <td><Badge className="badge-in-pending">Pending</Badge></td>
                  </tr>
                  <tr>
                    <td>INV-00001</td>
                    <td>Ricky Antony</td>
                    <td>14 Jan 2023</td>
                    <td>20 Jan 2023</td>
                    <td>105 $</td>
                    <td>5 $</td>
                    <td>120 $</td>
                    <td><Badge className="badge-success">Active</Badge></td>
                  </tr>
                  <tr>
                    <td>INV-00001</td>
                    <td>Ricky Antony</td>
                    <td>14 Jan 2023</td>
                    <td>20 Jan 2023</td>
                    <td>105 $</td>
                    <td>5 $</td>
                    <td>120 $</td>
                    <td><Badge className="badge-in-pending">Pending</Badge></td>
                  </tr>
                  <tr>
                    <td>INV-00001</td>
                    <td>Ricky Antony</td>
                    <td>14 Jan 2023</td>
                    <td>20 Jan 2023</td>
                    <td>105 $</td>
                    <td>5 $</td>
                    <td>120 $</td>
                    <td><Badge className="badge-success">Active</Badge></td>
                  </tr>
                  <tr>
                    <td>INV-00001</td>
                    <td>Ricky Antony</td>
                    <td>14 Jan 2023</td>
                    <td>20 Jan 2023</td>
                    <td>105 $</td>
                    <td>5 $</td>
                    <td>120 $</td>
                    <td><Badge className="badge-in-pending">Pending</Badge></td>
                  </tr>
                  <tr>
                    <td>INV-00001</td>
                    <td>Ricky Antony</td>
                    <td>14 Jan 2023</td>
                    <td>20 Jan 2023</td>
                    <td>105 $</td>
                    <td>5 $</td>
                    <td>120 $</td>
                    <td><Badge className="badge-success">Active</Badge></td>
                  </tr>
                  <tr>
                    <td>INV-00001</td>
                    <td>Ricky Antony</td>
                    <td>14 Jan 2023</td>
                    <td>20 Jan 2023</td>
                    <td>105 $</td>
                    <td>5 $</td>
                    <td>120 $</td>
                    <td><Badge className="badge-in-pending">Pending</Badge></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Report;
