import React, { useRef } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
import "./carousel.scss";
import CircleRating from "../circleRaring/CircleRating";

const Carousel = ({ data, loading }) => {

  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigation = (dir) => {};

  const skItem = () =>{
    return(
      <div className="skeletonItem">
        <div className="posterBlock skeleton">
          <div className="textBlock">
            <div className="title skeleton"></div>
            <div className="date skeleton"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="carousel">
      <ContentWrapper>
        <BsFillArrowLeftCircleFill className="carouselLeftNav arrow" onClick={() => navigation("left")} />
        <BsFillArrowRightCircleFill className="carouselRighttNav arrow" onClick={() => navigation("right")} />
          {!loading ? (
            <div className="carouselItems">
              {
                data.map((item)=>{
                  const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback
                  return(
                    <div className="carouselItem">
                      <div className="posterBlock">
                        <Img src={posterUrl} />
                        <CircleRating rating={item.vote_average.toFixed(2)}/>
                      </div>
                      <div className="textBlock">
                        <div className="title">{item.title || item.name}</div>
                        <div className="date">{dayjs(item.release_date).format("MMMM DD, YYYY")}</div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          ):(
            <div className="loadingSkeleton">
              {skItem()}
              {skItem()}
              {skItem()}
              {skItem()}
              {skItem()}
            </div>
          )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
