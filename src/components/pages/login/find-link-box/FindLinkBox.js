import Link from "next/link";
import { Font } from "/public/fonts/Font";
import { useEffect, useRef, useState } from "react";
import PwFindModal from "/src/components/pages/login/pw-find-modal/PwFindModal";

export default function FindLinkBox() {
  const [isPwFindOpen, setIsPwFindOpen] = useState(false);
  const pwFindModalRef = useRef(null);

  const openPwFind = () => {
    setIsPwFindOpen(true);
  };

  const closePwFind = () => {
    setIsPwFindOpen(false);
  };

  useEffect(() => {
    const handleClickOver = (event) => {
      if (
        pwFindModalRef.current &&
        !pwFindModalRef.current.contains(event.target) &&
        isPwFindOpen
      ) {
        closePwFind();
      }
    };

    window.addEventListener("mousedown", handleClickOver);
    return () => {
      window.removeEventListener("mousedown", handleClickOver);
    };
  }, [isPwFindOpen]);

  return (
    <div className="box">
      <Link href="" passHref>
        <div className="find" onClick={openPwFind}>
          잊으셨나요?
        </div>
      </Link>
      {isPwFindOpen && (
        <div className="pw-modal-container" ref={pwFindModalRef}>
          <PwFindModal onClose={closePwFind} />
        </div>
      )}
      <Link href="/signup" passHref>
        <div className="sign">회원가입</div>
      </Link>

      {/* CSS */}
      <style jsx>
        {`
          .box {
            position: relative;
            display: flex;
            justify-content: center;
            padding-bottom: 1.37rem;
          }
          .find {
            position: relative;
            color: #8c9499;
            text-align: center;
            font-size: ${Font.Size.XS};
            font-weight: 400;
            padding: 0 0.5rem;
          }

          .sign {
            position: relative;
            color: #8c9499;
            text-align: center;
            font-size: ${Font.Size.XS};
            font-weight: 400;
            padding: 0 0.5rem;
          }

          .pw-modal-container {
            position: fixed;
            top: 19.75rem;
            left: 33rem;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }
        `}
      </style>
    </div>
  );
}
