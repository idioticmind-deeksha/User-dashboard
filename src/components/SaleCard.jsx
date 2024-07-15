import React from "react";
import {ProgressBar, Card, Badge, Row, Col} from 'react-bootstrap';
import "../styles/SaleCard.css";
import SaleDaily from "../images/sale-daily.svg";
import SaleMonthy from "../images/sale-monthly.svg";
const SaleCard = () => {
    const saledata = [
        {
            id: 1,
            title: "Daily Sales",
            price: 249.65,
            rato: "36%",
            desc: "You made an extra 35,000 this daily",
            progress: 60,
            image: SaleDaily,

        },
        {
            id: 2,
            title: "Monthly Sales",
            price: 249.65,
            rato: "20%",
            desc: "You made an extra 35,000 this Monthly",
            progress: 30,
            image: SaleMonthy,
        },
        {
            id: 2,
            title: "Yearly Sales",
            price: 249.65,
            rato: "0%",
            desc: "You made an extra 35,000 this Daily",
            progress: 0,
            image: SaleMonthy,

        },
    ]
  return (
    <>
    <Row xs={1} md={2} className="g-4">
    {saledata.map((sale) => {
        const ratoValue = parseFloat(sale.rato);
        const bageClass= 
        ratoValue === 0 ? "d-none": 
        ratoValue === 20 ? "badge-start-success" :
         "badge-mid-success";
         return (
            <Col key={sale.id} lg={4} >
            <Card style={{ width: "100%", backgroundImage: `url(${sale.image})`}} >
                <Card.Body className="p-4">
                <Card.Title className="mb-4">{sale.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    <div className="d-flex align-items-center justify-content-start">
                        <h5>${sale.price}</h5>
                        <Badge className={`${bageClass} ud-badge ms-2`}>{sale.rato}</Badge>
                    </div>
                </Card.Subtitle>
                <Card.Text>
                <p>{sale.desc}</p>
                <ProgressBar now={sale.progress} />
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
         );
    })}
    </Row>
    </>
  );
};
export default SaleCard;
