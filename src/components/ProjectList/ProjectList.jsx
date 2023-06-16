
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Button, Card } from "react-bootstrap";

import { Link} from "react-router-dom";


const ProjectList = ({ projects }) => {

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      loop={true}
      slidesPerView={"auto"}
      coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      }}
      modules={[
        EffectCoverflow,
        Pagination,
        Navigation,
      ]} className="swiper_container"
    >
      {projects.map(({ id, title, image }) => (
        <SwiperSlide key={id}>
          <Card className="" key={id}>
            <Card.Img variant="top" src={image} className="" />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Link to={`/detail/${id}`}>
                <Button variant="success">+ Detalles</Button>
              </Link>
            </Card.Body>
          </Card>
        </SwiperSlide>
      ))}

    </Swiper>
  );
};

export default ProjectList;
