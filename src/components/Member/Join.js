import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
  const [member, setMember] = useState({
    memberNickname: "",
    memberPw: "",
    memberNickname: "",
    memberPhone: "",
  });
  const inputMemberData = (e) => {
    const name = e.target.name;
    const inputData = e.target.value;
    setMember({ ...member, [name]: inputData });
  };

  return (
    <section className="section">
      <div className="join-title">
        <h3>이메일 인증</h3>
        <p>가입을 위해 이메일을 인증해주세요.</p>
      </div>
      <div className="join-wrap">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="input-wrap">
            <div className="input-title">
              <label htmlFor="memberEmail">이메일</label>
            </div>
            <div className="input-item">
              <input
                text="text"
                name="memberEmail"
                id="memberEmail"
                value={member.memberEmail}
                onChange={inputMemberData}
              ></input>
            </div>
          </div>
          <div className="join-button-box">
            <button>이메일 인증</button>
          </div>

          <div className="input-title">
            <label htmlFor="emailCode">인증번호 6자리</label>
          </div>
          <div className="input-item">
            <input
              text="text"
              name="emailCode"
              id="emailCode"
              value={member.memberCode}
              onChange={inputMemberData}
            ></input>
          </div>
        </form>

        <Link to="/Join2" className="btn-primary lg">
          다음
        </Link>
      </div>
    </section>
  );
};

export default Join;
