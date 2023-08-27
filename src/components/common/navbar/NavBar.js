// TODO. 모달창 구현 필요 (채팅, 알림, 프로필)
import * as style from "@/components/common/navbar/NavBar.style";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const notificationModalRef = useRef(null);
  const messageModalRef = useRef(null);
  const moreModalRef = useRef(null);
  const [accessToken, setAccessToken] = useState(null);
  const [userNickName, setUserNickName] = useState(null);

  const openNotification = () => {
    setIsNotificationOpen(true);
  };

  const closeNotification = () => {
    setIsNotificationOpen(false);
  };

  const openMessage = () => {
    setIsMessageOpen(true);
  };

  const closeMessage = () => {
    setIsMessageOpen(false);
  };

  const openMore = () => {
    setIsMoreOpen(true);
  };

  const closeMore = () => {
    setIsMoreOpen(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("userNickName");
    window.location.reload();
  };

  useEffect(() => {
    const storedAccessToken = sessionStorage.getItem("accessToken");
    const storedUserNickName = sessionStorage.getItem("userNickName");

    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
    }

    if (storedUserNickName) {
      setUserNickName(storedUserNickName);
    }

    const handleClickOutside = (event) => {
      if (
        notificationModalRef.current &&
        !notificationModalRef.current.contains(event.target) &&
        isNotificationOpen
      ) {
        closeNotification();
      }
      if (
        messageModalRef.current &&
        !messageModalRef.current.contains(event.target) &&
        isMessageOpen
      ) {
        closeMessage();
      }
      if (
        moreModalRef.current &&
        !moreModalRef.current.contains(event.target) &&
        isMoreOpen
      ) {
        closeMore();
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNotificationOpen, isMessageOpen, isMoreOpen]);

  return (
    <style.Nav>
      <Link href="/" passHref>
        <style.HomeLinkDiv>
          <Image
            src="/assets/icon/Logo.svg"
            alt="logo"
            loader={() => "/assets/icon/Logo.svg"}
            fill
          />
        </style.HomeLinkDiv>
      </Link>

      <style.MenuContainer>
        <Link href="/groupstudy" passHref>
          <style.VideoLinkDiv>
            <Image
              src="/assets/icon/Video.svg"
              alt="video"
              loader={() => "/assets/icon/Video.svg"}
              fill
            />
          </style.VideoLinkDiv>
        </Link>
        <Link href="" passHref>
          <style.NotificationLinkDiv onClick={openNotification}>
            <Image
              src="/assets/icon/Notification.svg"
              alt="notification"
              loader={() => "/assets/icon/Notification.svg"}
              fill
            />
          </style.NotificationLinkDiv>
        </Link>
        {isNotificationOpen && (
          <style.NotificationModalDiv ref={notificationModalRef}>
            {/* 로그인 작업 후 모달 구현 필요 */}
            <style.NotificationContentDiv>
              <h2>업데이트</h2>
              <p>내용</p>
            </style.NotificationContentDiv>
          </style.NotificationModalDiv>
        )}
        <Link href="" passHref>
          <style.MessageLinkDiv onClick={openMessage}>
            <Image
              src="/assets/icon/Message.svg"
              alt="message"
              loader={() => "/assets/icon/Message.svg"}
              fill
            />
          </style.MessageLinkDiv>
        </Link>
        {isMessageOpen && (
          <style.MessageModalDiv ref={messageModalRef}>
            {/* 로그인 작업 후 모달 구현 필요 */}
            <style.MessageContentDiv>
              <h2>받은 메시지</h2>
              <p>내용</p>
            </style.MessageContentDiv>
          </style.MessageModalDiv>
        )}
        <style.ProfileContainer>
          <Link href="/profil" passHref>
            <style.ProfilLinkDiv>
              <Image
                src="/assets/icon/Profile.svg"
                alt="profil"
                loader={() => "/assets/icon/Profile.svg"}
                fill
              />
            </style.ProfilLinkDiv>
          </Link>
          {accessToken ? (
            <style.LoginLinkDiv>{userNickName}님</style.LoginLinkDiv>
          ) : (
            <Link href="/login">
              <style.LoginLinkDiv>로그인</style.LoginLinkDiv>
            </Link>
          )}
          <Link href="" passHref>
            <style.MoreLinkDiv onClick={openMore}>
              <Image
                src="/assets/icon/Morebutton.svg"
                alt="more"
                loader={() => "/assets/icon/Morebutton.svg"}
                fill
              />
            </style.MoreLinkDiv>
          </Link>
        </style.ProfileContainer>
      </style.MenuContainer>
      {isMoreOpen && (
        <style.MoreModalDiv ref={moreModalRef}>
          {/* 로그인 작업 후 모달 구현 필요 */}
          <style.ModalDiv>
            <Link href="" passHref>
              <style.MoreContent>나의 공부방</style.MoreContent>
            </Link>
            <Link href="" passHref>
              <style.MoreContent>내가 문의한 글</style.MoreContent>
            </Link>
            <Link href="" passHref>
              <style.MoreContent>회원정보 수정</style.MoreContent>
            </Link>
            {accessToken ? (
              <style.MoreLogoutButton onClick={handleLogout}>
                로그아웃
              </style.MoreLogoutButton>
            ) : null}
          </style.ModalDiv>
        </style.MoreModalDiv>
      )}
    </style.Nav>
  );
}
