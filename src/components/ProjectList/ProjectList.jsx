import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ProjectList.scss";

const ProjectList = ({ projects }) => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      loop={true}
      slidesPerView={"auto"}
      coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
      {projects.map(({ id, title, image }) => (
        <SwiperSlide key={id}>
          <Card key={id} className="project-list-card">
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Link to={`/detail/${id}`}>
                <Button className="project-list-card-button">+ Detalles</Button>
              </Link>
            </Card.Body>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectList;
