import * as style from "@/components/pages/login/find-link-box/FindLinkBox.style";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
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
    <style.BoxDiv>
      <Link href="" passHref>
        <style.FindDiv onClick={openPwFind}>잊으셨나요?</style.FindDiv>
      </Link>
      {isPwFindOpen && (
        <style.PwModalWrapper ref={pwFindModalRef}>
          <PwFindModal onClose={closePwFind} />
        </style.PwModalWrapper>
      )}
      <Link href="/signup" passHref>
        <style.SignDiv>회원가입</style.SignDiv>
      </Link>
    </style.BoxDiv>
  );
}
