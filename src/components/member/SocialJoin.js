import { Modal } from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const SocialJoin = () => {
  const location = useLocation(); // useLocation 훅으로 location 객체를 가져옴
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 훅
  const [isFormValid, setIsFormValid] = useState(false); // 폼 유효성 상태
  const { email } = location.state || {}; // 이메일과 코드 데이터를 가져옴 (없으면 기본값으로 빈 객체 설정)
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  const [check1, setCheck1] = useState(false); // '약관 전체 동의' 상태
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [check7, setCheck7] = useState(false);

  // '약관 전체 동의' 체크박스 클릭 시
  const handleAllCheckChange = (e) => {
    const checked = e.target.checked;
    setCheck1(checked);
    setCheck2(checked);
    setCheck3(checked);
    setCheck4(checked);
    setCheck5(checked);
    setCheck6(checked);
    setCheck7(checked);
  };

  useEffect(() => {
    if (check2 && check3 && check4 && check5 && check6 && check7) {
      setCheck1(true);
    } else {
      setCheck1(false);
    }
  });

  const handleToggle1 = () => {
    setIsOpen1((prev) => !prev); // 클릭 시 토글
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
  };
  const handleToggle2 = () => {
    setIsOpen2((prev) => !prev); // 클릭 시 토글
    setIsOpen1(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
  };
  const handleToggle3 = () => {
    setIsOpen3((prev) => !prev); // 클릭 시 토글
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
  };
  const handleToggle4 = () => {
    setIsOpen4((prev) => !prev); // 클릭 시 토글
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen5(false);
    setIsOpen6(false);
  };
  const handleToggle5 = () => {
    setIsOpen5((prev) => !prev); // 클릭 시 토글
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen6(false);
  };
  const handleToggle6 = () => {
    setIsOpen6((prev) => !prev); // 클릭 시 토글
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
  };

  // 폼 유효성 체크: 필수 항목들이 모두 체크되었는지 확인
  useEffect(() => {
    if (check2 && check3 && check4) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [check2, check3, check4]);

  const handleButtonClick = () => {
    if (isFormValid) {
      // 클릭 시 navigate로 이동
      navigate("/socialJoin2", {
        state: {
          email: email,
        },
      });
    }
  };

  return (
    <section className="join2-section">
      {email ? (
        <>
          <div className="join-title">
            <h2>이용약관</h2>
          </div>

          <div className="join-agree-wrap">
            <div className="join-agree-first">
              <input
                type="checkbox"
                id="check1"
                checked={check1}
                onChange={handleAllCheckChange}
              />
              <label htmlFor="check1">
                약관 전체동의 <p>선택항목 포함</p>
              </label>
            </div>

            <nav className="join-agree-table">
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="check2"
                    checked={check2}
                    onChange={(e) => {
                      setCheck2(e.target.checked);
                    }}
                  />
                  <label htmlFor="check2">(필수) 이용약관</label>
                  <ChevronRightIcon
                    className="join-chevron-icon"
                    onClick={handleToggle1}
                    style={{
                      transition: "transform 0.3s ease",
                      transform: isOpen1 ? "rotate(90deg)" : "rotate(0deg)",
                      marginLeft: "auto",
                      cursor: "pointer",
                    }}
                  />
                  <div
                    className={`agree-details ${isOpen1 ? "open" : ""}`}
                    style={{
                      maxHeight: isOpen1 ? "200px" : "0", // 펼쳐지거나 접힐 때의 높이
                      transform: isOpen1
                        ? "translateY(0)"
                        : "translateY(-20px)", // 아래로 떨어지는 효과
                      transition:
                        "max-height 0.5s ease, transform 0.3s ease, opacity 0.5s ease", // 부드러운 애니메이션
                      overflow: "hidden", // 내용이 넘치지 않도록 숨김 처리
                    }}
                  >
                    <div className="agree-content">
                      <div
                        className="agree-content2"
                        style={{ marginTop: "0px", marginLeft: "15px" }}
                      >
                        <h3>제 1조 (목적)</h3>
                        <p>
                          이 약관은 주식회사 여기어때컴퍼니(이하 "회사"라 함)가
                          운영하는 종합 여행·여가 플랫폼(이하 "플랫폼"이라
                          한다)에서 제공하는 예약 관련 서비스(이하 "서비스"라
                          한다)를 이용함에 있어 "회사"와 "이용자"의 권리․의무 및
                          책임사항을 규정함을 목적으로 합니다.
                        </p>
                        <h3>제 2조 (정의)</h3>
                        <p>
                          ① "플랫폼"이란 "이용자"가 컴퓨터 등 정보통신설비를
                          이용하여 "서비스"를 이용할 수 있도록 "회사"가 제공하는
                          가상의 영업장을 말하며, 아울러 "플랫폼"을 운영하는
                          사업자의 의미로도 사용합니다.
                        </p>
                        <p>
                          ② "이용자"란 "플랫폼"을 통하여 이 약관에 따라 제공하는
                          서비스를 받는 회원 및 비회원을 말합니다.
                        </p>
                        <p>
                          ③ "회원"이라 함은 "플랫폼"에 회원등록을 한 자로서,
                          계속적으로 "플랫폼"이 제공하는 서비스를 이용할 수 있는
                          자를 말합니다.
                        </p>
                        <p>
                          ④ "비회원"이라 함은 회원에 가입하지 않고 "플랫폼"이
                          제공하는 서비스를 이용하는 자를 말합니다.
                        </p>
                        <p>
                          ⑤ 서비스수수료란 "이용자"가 "홈&빌라" 서비스를 이용할
                          때 "플랫폼"에 지급하는 수수료를 말합니다.
                        </p>
                        <p>
                          ⑥ "게시물"이란 "이용자"가 "서비스" 이용 시 게시하는
                          리뷰,사진, 글, 댓글, 동영상, 프로필 사진 등의 콘텐츠
                          일체를 의미합니다.
                        </p>
                        <h3>제 3조 (약관 등의 명시와 설명 및 개정)</h3>
                        <p>
                          ① "회사"는 이 약관의 내용과 상호 및 대표자 성명,
                          영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의
                          주소를 포함), 전화번호, E-mail주소, 사업자등록번호,
                          통신판매업 신고번호, 개인정보보호책임자등을 "이용자"가
                          쉽게 알 수 있도록 "플랫폼"의 초기 서비스화면(전면)에
                          게시합니다. 다만, 약관의 내용은 "이용자"가 연결화면을
                          통하여 볼 수 있도록 할 수 있습니다.
                        </p>
                        <p>
                          ② "회사"는 「전자상거래 등에서의 소비자보호에 관한
                          법률」, 「약관의 규제에 관한 법률」, 「전자문서 및
                          전자거래기본법」, 「전자금융거래법」, 「전자서명법」,
                          「정보통신망 이용촉진 및 정보보호 등에 관한 법률」,
                          「소비자기본법」 등 관련 법을 위배하지 않는 범위에서
                          이 약관을 개정할 수 있습니다.
                        </p>
                        <p>
                          ③ "회사"가 약관을 개정할 경우에는 적용일자 및
                          개정사유를 명시하여 현행약관과 함께 플랫폼의
                          초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지
                          공지합니다. 다만, "이용자"에게 불리하게 약관내용을
                          변경하는 경우에는 최소한 30일 이상의 사전 유예기간을
                          두고 공지합니다. 이 경우 "회사"는 개정 전 내용과 개정
                          후 내용을 "이용자"가 알기 쉽도록 표시합니다.
                        </p>
                        <p>
                          ④ "회원"은 변경된 약관에 동의하지 않을 권리가 있으며,
                          동의하지 않을 경우에는 서비스이용을 중단하고 탈퇴할 수
                          있습니다.
                        </p>
                        <p>
                          ⑤ "회원"이 전④항에 따라 약관에 대한 반대의사를
                          표시하지 않고 "서비스"를 이용한 경우에는 약관에 동의한
                          것으로 봅니다.
                        </p>
                        <p>
                          ⑥ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에
                          관하여는 전자상거래 등에서의 소비자보호에 관한 법률,
                          약관의 규제 등에 관한 법률 및 관계법령 또는 상관례에
                          따릅니다.
                        </p>
                        <h3>제 4조 (회원가입)</h3>
                        <p>
                          ① "이용자"는 "플랫폼"이 정한 절차에 따라 이 약관에
                          동의한다는 의사표시를 함으로서 회원가입을 신청합니다.
                        </p>
                        <p>
                          ② "회사"는 제①항과 같이 회원으로 가입할 것을 신청한
                          "이용자" 중 다음 각 호에 해당하지 않는 한 회원으로
                          등록합니다. 1. 회원자격 상실 후 24시간이 경과하지 않은
                          경우 2. 등록 내용에 타인의 정보를 사용한 경우 3. 만
                          14세 미만의 아동이 신청하는 경우
                        </p>
                        <p>
                          ③ 회원가입계약의 성립 시기는 "회사"의 승낙이 회원에게
                          도달한 시점으로 합니다.
                        </p>
                        <p>
                          ④ 회원은 회원가입 시 등록한 사항에 변경이 있는 경우,
                          상당한 기간 이내에 "플랫폼"에 대하여 회원정보
                          수정하거나 E-mail 등의 방법으로 그 변경사항을 알려야
                          합니다.
                        </p>
                        <p>
                          ⑤ "회사"는 관련법령에 따라 필요한 경우 별도의 성인인증
                          절차를 실시할 수 있습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="check3"
                    checked={check3}
                    onChange={(e) => {
                      setCheck3(e.target.checked);
                    }}
                  />
                  <label htmlFor="check3">(필수) 만 14세 이상 확인</label>
                  <ChevronRightIcon
                    className="join-chevron-icon"
                    onClick={handleToggle2}
                    style={{
                      transition: "transform 0.3s ease",
                      transform: isOpen2 ? "rotate(90deg)" : "rotate(0deg)",
                      marginLeft: "auto",
                      cursor: "pointer",
                    }}
                  />
                  <div
                    className={`agree-details ${isOpen2 ? "open" : ""}`}
                    style={{
                      maxHeight: isOpen2 ? "200px" : "0", // 펼쳐지거나 접힐 때의 높이
                      transform: isOpen2
                        ? "translateY(0)"
                        : "translateY(-20px)", // 아래로 떨어지는 효과
                      transition:
                        "max-height 0.5s ease, transform 0.3s ease, opacity 0.5s ease", // 부드러운 애니메이션
                      overflow: "hidden", // 내용이 넘치지 않도록 숨김 처리
                    }}
                  >
                    <div className="agree-content">
                      <div
                        className="agree-content2"
                        style={{ marginTop: "0px", marginLeft: "15px" }}
                      >
                        <h3>
                          나드리는 만 14세 미만 아동의 서비스 이용을 제한하고
                          있습니다
                        </h3>
                        <p>
                          개인정보 보호법에는 만 14세미만 아동의 개인정보 수집
                          시 법정대리인 동의를 받도록 규정하고 있으며, 만 14세
                          미만 아동이 법정대리인 동의없이 회원가입을 하는 경우
                          회원탈퇴 또는 서비스 이용이 제한될 수 있음을
                          알려드립니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="check4"
                    checked={check4}
                    onChange={(e) => {
                      setCheck4(e.target.checked);
                    }}
                  />
                  <label htmlFor="check4">
                    (필수) 개인정보 수집 및 이용 동의
                  </label>
                  <ChevronRightIcon
                    className="join-chevron-icon"
                    onClick={handleToggle3}
                    style={{
                      transition: "transform 0.3s ease",
                      transform: isOpen3 ? "rotate(90deg)" : "rotate(0deg)",
                      marginLeft: "auto",
                      cursor: "pointer",
                    }}
                  />
                  <div
                    className={`agree-details ${isOpen3 ? "open" : ""}`}
                    style={{
                      maxHeight: isOpen3 ? "200px" : "0", // 펼쳐지거나 접힐 때의 높이
                      transform: isOpen3
                        ? "translateY(0)"
                        : "translateY(-20px)", // 아래로 떨어지는 효과
                      transition:
                        "max-height 0.5s ease, transform 0.3s ease, opacity 0.5s ease", // 부드러운 애니메이션
                      overflow: "hidden", // 내용이 넘치지 않도록 숨김 처리
                    }}
                  >
                    <div className="agree-content">
                      <div
                        className="agree-content2"
                        style={{ marginTop: "0px", marginLeft: "15px" }}
                      >
                        <h3>개인정보 수집 및 이용(필수)</h3>
                        <p>
                          구분 필수 수집•이용 목적 회원가입, 서비스 이용, 상담
                          및 부정이용 기록 확인, 서비스 이용 가능 연령 확인 및
                          본인 여부 확인, 이용자의 상품 및 서비스 이용 실적
                          정보를 활용한 통계 분석 및 상품 서비스 개선 제공,
                          맞춤형 서비스 제공을 위한 이용자 식별 수집 항목 [일반
                          회원] 휴대전화번호, 이메일, 기기고유번호(UUID, SSAID),
                          닉네임, 성별, 생년월일, 비밀번호(이메일로 가입 시),
                          SNS 계정 정보(페이스북, 카카오, 네이버, 애플, 구글
                          계정으로 가입 시) [비즈니스 회원] 휴대전화번호,
                          이메일, 기기고유번호(UUID, SSAID), 닉네임, 비밀번호,
                          회사명, 회사 이메일, 이름, 성별, 생년월일 [서비스 이용
                          및 부정이용 기록 확인] 서비스 이용시간/이용기록,
                          접속로그, 이용컨텐츠, 접속IP정보, 기기모델명, 브라우저
                          정보 [본인 인증 시] CI(연계정보)/DI(중복가입확인정보)
                          보유•이용기간 회원 탈퇴 시 또는 계약 만료 시까지 내부
                          방침에 따라 보존할 필요가 있는 경우 고지 기간까지 보유
                          관계 법령에 따라 보존할 필요가 있는 경우 해당 법령에서
                          요구하는 기한까지 보유
                        </p>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="check5"
                    checked={check5}
                    onChange={(e) => {
                      setCheck5(e.target.checked);
                    }}
                  />
                  <label htmlFor="check5">
                    (선택) 개인정보 수집 및 이용 동의
                  </label>
                  <ChevronRightIcon
                    className="join-chevron-icon"
                    onClick={handleToggle4}
                    style={{
                      transition: "transform 0.3s ease",
                      transform: isOpen4 ? "rotate(90deg)" : "rotate(0deg)",
                      marginLeft: "auto",
                      cursor: "pointer",
                    }}
                  />
                  <div
                    className={`agree-details ${isOpen4 ? "open" : ""}`}
                    style={{
                      maxHeight: isOpen4 ? "200px" : "0", // 펼쳐지거나 접힐 때의 높이
                      transform: isOpen4
                        ? "translateY(0)"
                        : "translateY(-20px)", // 아래로 떨어지는 효과
                      transition:
                        "max-height 0.5s ease, transform 0.3s ease, opacity 0.5s ease", // 부드러운 애니메이션
                      overflow: "hidden", // 내용이 넘치지 않도록 숨김 처리
                    }}
                  >
                    <div className="agree-content">
                      <div
                        className="agree-content2"
                        style={{ marginTop: "0px", marginLeft: "15px" }}
                      >
                        <h3>개인정보 수집 및 이용(선택)</h3>
                        <p>
                          구분 선택 수집•이용 목적 서비스 이용, 상담 및 부정
                          거래 기록 확인 수집 항목 [내 정보 관리] 이름, 프로필
                          사진 보유•이용기간 회원 탈퇴 시 또는 계약 만료 시까지
                          내부 방침에 따라 보존할 필요가 있는 경우 고지 기간까지
                          보유 관계 법령에 따라 보존할 필요가 있는 경우 해당
                          법령에서 요구하는 기한까지 보유
                        </p>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="check6"
                    checked={check6}
                    onChange={(e) => {
                      setCheck6(e.target.checked);
                    }}
                  />
                  <label htmlFor="check6">(선택) 마케팅 알림 수신 동의</label>
                  <ChevronRightIcon
                    className="join-chevron-icon"
                    onClick={handleToggle5}
                    style={{
                      transition: "transform 0.3s ease",
                      transform: isOpen5 ? "rotate(90deg)" : "rotate(0deg)",
                      marginLeft: "auto",
                      cursor: "pointer",
                    }}
                  />
                  <div
                    className={`agree-details ${isOpen5 ? "open" : ""}`}
                    style={{
                      maxHeight: isOpen5 ? "200px" : "0", // 펼쳐지거나 접힐 때의 높이
                      transform: isOpen5
                        ? "translateY(0)"
                        : "translateY(-20px)", // 아래로 떨어지는 효과
                      transition:
                        "max-height 0.5s ease, transform 0.3s ease, opacity 0.5s ease", // 부드러운 애니메이션
                      overflow: "hidden", // 내용이 넘치지 않도록 숨김 처리
                    }}
                  >
                    <div className="agree-content">
                      <div
                        className="agree-content2"
                        style={{ marginTop: "0px", marginLeft: "15px" }}
                      >
                        <h3>마케팅 수신 동의(선택)</h3>
                        <p>
                          ㈜나드리는 고객이 수집 및 이용에 동의한 개인정보를
                          활용하여 전자적 전송매체(앱 푸시, 이메일, 문자)를 통해
                          맞춤형 마케팅 알림을 전송할 수 있습니다. 본 동의는
                          거부하실 수 있습니다. 다만 거부 시 혜택 및 마케팅 알림
                          수신 동의 회원 대상 이벤트 등의 참여가 어려울 수
                          있습니다. 마케팅 알림은 여기어때 앱 > 내 정보 > 설정 >
                          마케팅 알림 또는 여기어때 웹 > 내정보 > 알림 에서
                          언제든지 철회하실 수 있습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="check7"
                    checked={check7}
                    onChange={(e) => {
                      setCheck7(e.target.checked);
                    }}
                  />
                  <label htmlFor="check7">
                    (선택) 위치기반 서비스 이용약관 동의
                  </label>
                  <ChevronRightIcon
                    className="join-chevron-icon"
                    onClick={handleToggle6}
                    style={{
                      transition: "transform 0.3s ease",
                      transform: isOpen6 ? "rotate(90deg)" : "rotate(0deg)",
                      marginLeft: "auto",
                      cursor: "pointer",
                    }}
                  />
                  <div
                    className={`agree-details ${isOpen6 ? "open" : ""}`}
                    style={{
                      maxHeight: isOpen6 ? "200px" : "0", // 펼쳐지거나 접힐 때의 높이
                      transform: isOpen6
                        ? "translateY(0)"
                        : "translateY(-20px)", // 아래로 떨어지는 효과
                      transition:
                        "max-height 0.5s ease, transform 0.3s ease, opacity 0.5s ease", // 부드러운 애니메이션
                      overflow: "hidden", // 내용이 넘치지 않도록 숨김 처리
                    }}
                  >
                    <div className="agree-content">
                      <div
                        className="agree-content2"
                        style={{ marginTop: "0px", marginLeft: "15px" }}
                      >
                        <h3>제 1조 (목적)</h3>
                        <p>
                          본 약관은 주식회사 여기어때컴퍼니(이하 "회사"라 함)이
                          제공하는 위치기반서비스(이하 "서비스"라 함)를 이용함에
                          있어 "회사"와 서비스를 이용하고자 하는 자(이하
                          "이용자"라 함)의 권리, 의무 및 책임사항을 규정함을
                          목적으로 합니다.
                        </p>
                        <h3>제 2조 (이용약관의 효력 및 변경)</h3>
                        <p>
                          ① 본 약관은 이용자가 본 약관에 동의하고 회사가 정한
                          소정의 절차에 따라 서비스의 이용자로 인정함으로써
                          효력이 발생합니다.
                        </p>
                        <p>
                          ② 이용자가 서비스를 이용하는 과정에서 약관 동의에
                          체크한 경우, 본 약관의 내용을 모두 읽고 이를 충분히
                          이해하였으며, 그 적용에 동의한 것으로 간주합니다.
                        </p>
                        <p>
                          ③ 회사는 위치정보의 보호 및 이용 등에 관한 법률,
                          콘텐츠산업 진흥법, 전자상거래 등에서의 소비자보호에
                          관한 법률, 소비자기본법 약관의 규제에 관한 법률 등
                          관련법령을 위배하지 않는 범위에서 본 약관을 개정할 수
                          있습니다.
                        </p>
                        <p>
                          ③ 회사는 위치정보의 보호 및 이용 등에 관한 법률,
                          콘텐츠산업 진흥법, 전자상거래 등에서의 소비자보호에
                          관한 법률, 소비자기본법 약관의 규제에 관한 법률 등
                          관련법령을 위배하지 않는 범위에서 본 약관을 개정할 수
                          있습니다.
                        </p>
                        <p>
                          ⑤ 회사가 전항에 따라 이용자에게 통지하면서 공지 또는
                          공지∙고지일로부터 개정약관 시행일 7일 후까지
                          거부의사를 표시하지 아니하면 이용약관에 승인한 것으로
                          봅니다. 이용자가 개정약관에 동의하지 않을 경우
                          이용자는 이용계약을 해지할 수 있습니다.
                        </p>
                        <h3>제 3조 (관계법령의 적용)</h3>
                        <p>
                          본 약관은 신의성실의 원칙에 따라 공정하게 적용하며, 본
                          약관에 명시되지 아니한 사항에 대하여는 관계법령 또는
                          상관례에 따릅니다.
                        </p>
                        <h3>제 4조 (서비스의 내용)</h3>
                        <p>
                          회사가 제공하는 서비스, 개인위치정보의 보유목적 및
                          기간은 아래와 같습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
            <div className="join-button-box2">
              <button
                type="button"
                className={`join-button ${isFormValid ? "" : "disabled"}`}
                disabled={!isFormValid}
                onClick={handleButtonClick}
                style={{
                  pointerEvents: !isFormValid ? "none" : "auto", // 버튼 비활성화 시 클릭 불가
                  backgroundColor: isFormValid ? "#30c272" : "white", // 비활성화 시 배경색 흰색으로
                  color: isFormValid ? "white" : "#d3d3d3", // 비활성화 시 글자색 여린 회색으로
                }}
                onMouseEnter={(e) => {
                  if (isFormValid) {
                    e.target.style.backgroundColor = "#166139"; // hover 시 배경색 변경
                  }
                }}
                onMouseLeave={(e) => {
                  if (isFormValid) {
                    e.target.style.backgroundColor = "#30c272"; // hover 끝난 후 원래 배경색으로 복구
                  }
                }}
              >
                다음
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="join-title">
          <h3>코드 누락</h3>
          <p>코드가 인증되지 않았습니다.</p>
        </div>
      )}
    </section>
  );
};

export default SocialJoin;
