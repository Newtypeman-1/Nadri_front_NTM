import { useEffect, useState } from "react";
import "./management.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PageNavigation from "../utils/PageNavigtion";
import StarRating from "../utils/StarRating";
import { loginNicknameState } from "../utils/RecoilData";
import { useRecoilState } from "recoil";

const Reviews = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [message, setMessage] = useState("");
  const [memberNickname, setMemberNickname] =
    useRecoilState(loginNicknameState);

  console.log(memberNickname);

  const changeContent = (value) => {
    setContent(value);

    // 카테고리별로 다른 빈 메시지 설정
    let message = "";
    switch (value) {
      case "room":
        message = "내가 쓴 숙소 리뷰가 없습니다.";
        break;
      case "spot":
        message = "내가 쓴 관광지 리뷰가 없습니다.";
        break;
      case "food":
        message = "내가 쓴 음식 리뷰가 없습니다.";
        break;
      case "todo":
        message = "내가 쓴 즐길거리 리뷰가 없습니다.";
        break;
      case "planner":
        message = "내가 쓴 플래너 리뷰가 없습니다.";
        break;
      default:
        message = "";
    }
    setMessage(message);

    axios
      .get(
        `${process.env.REACT_APP_BACK_SERVER}/mypage/reviews?nickname=${memberNickname}&value=${value}`
      )
      .then((res) => {
        console.log(res);
        setReviews(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 페이지가 로드될 때 자동으로 "다가오는 플래너"로 설정
  useEffect(() => {
    changeContent("room");
  }, []);

  return (
    <section className="section review-list-section2">
      <div className="page-title">내 리뷰 관리</div>
      <div className="manage-wrap">
        <nav className="manage-nav">
          <ul>
            <li
              className={content === "room" ? "active-link" : ""}
              style={{ width: "20%" }}
              onClick={() => {
                changeContent("room");
              }}
            >
              숙소
            </li>
            <li
              className={content === "spot" ? "active-link" : ""}
              style={{ width: "20%" }}
              onClick={() => {
                changeContent("spot");
              }}
            >
              관광지
            </li>
            <li
              className={content === "food" ? "active-link" : ""}
              style={{ width: "20%" }}
              onClick={() => {
                changeContent("food");
              }}
            >
              음식
            </li>
            <li
              className={content === "todo" ? "active-link" : ""}
              style={{ width: "20%" }}
              onClick={() => {
                changeContent("todo");
              }}
            >
              즐길거리
            </li>
            <li
              className={content === "planner" ? "active-link" : ""}
              style={{ width: "20%" }}
              onClick={() => {
                changeContent("planner");
              }}
            >
              플래너
            </li>
          </ul>
        </nav>
      </div>
      <div className="contnent-manage-list">
        <div>
          {reviews.length === 0 ? (
            <div className="empty-manage">
              <h3>{message}</h3>
              <p>지금 새로운 리뷰를 작성해보세요.</p>
              <button
                className="manage-button"
                onClick={() => navigate("/review")}
              >
                리뷰 쓰러가기
              </button>
            </div>
          ) : (
            <ul className="posting-wrap">
              {reviews.map((reviews, index) => {
                return <ReviewItem key={"review-" + index} reviews={reviews} />;
              })}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};
const ReviewItem = (props) => {
  const navigate = useNavigate();
  const reviews = props.reviews;
  return (
    <li
      className="posting-item2"
      onClick={() => {
        navigate(`/review/detail/${reviews.reviewNo}`);
      }}
    >
      <div className="posting-thumb2">
        <img
          src={reviews.placeThumb || "/image/dora.png"}
          className="place-image2"
          alt=""
        />
      </div>
      <div className="posting-info">
        <div>
          <StarRating rating={reviews.starRate} />
        </div>
        <div className="posting-title">{reviews.reviewTitle}</div>
        <div className="place-title">{reviews.placeTitle}</div>
        <div className="place-addr">{reviews.placeAddr}</div>
        <div
          className="review-content2"
          dangerouslySetInnerHTML={{
            __html: reviews.reviewContent, // p 태그 제거
          }}
        />
        <div className="posting-sub-info">
          <span>{reviews.memberNickname}</span>
          <span>{reviews.reviewDate}</span>
        </div>
      </div>
    </li>
  );
};
export default Reviews;
