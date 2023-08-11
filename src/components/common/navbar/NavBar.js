// TODO. 모달창 구현 필요 (채팅, 알림, 프로필)

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Font } from "/public/fonts/Font";

export default function NavBar() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const notificationModalRef = useRef(null);
  const messageModalRef = useRef(null);
  const moreModalRef = useRef(null);

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

  useEffect(() => {
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
    <nav>
      <Link href="/" passHref>
        <div className="home-link">
          <Image
            src="/icon/Logo.svg"
            alt="logo"
            loader={() => "/icon/Logo.svg"}
            width={139}
            height={41}
          />
        </div>
      </Link>
      <Link href="/video" passHref>
        <div className="video-link">
          <Image
            src="/icon/Video.svg"
            alt="video"
            loader={() => "/icon/Video.svg"}
            width={34}
            height={34}
          />
        </div>
      </Link>
      <Link href="" passHref>
        <div className="notification-link" onClick={openNotification}>
          <Image
            src="/icon/Notification.svg"
            alt="notification"
            loader={() => "/icon/Notification.svg"}
            width={26}
            height={26}
          />
        </div>
      </Link>
      {isNotificationOpen && (
        <div className="notification-modal" ref={notificationModalRef}>
          {/* 로그인 작업 후 모달 구현 필요 */}
          <div className="notification-content">
            <h2>업데이트</h2>
            <p>내용</p>
          </div>
        </div>
      )}
      <Link href="" passHref>
        <div className="message-link" onClick={openMessage}>
          <Image
            src="/icon/Message.svg"
            alt="message"
            loader={() => "/icon/Message.svg"}
            width={32}
            height={26}
          />
        </div>
      </Link>
      {isMessageOpen && (
        <div className="message-modal" ref={messageModalRef}>
          {/* 로그인 작업 후 모달 구현 필요 */}
          <div className="message-content">
            <h2>받은 메시지</h2>
            <p>내용</p>
          </div>
        </div>
      )}
      <Link href="/profil" passHref>
        <div className="profil-link">
          <Image
            src="/icon/Profil.svg"
            alt="profil"
            loader={() => "/icon/Profil.svg"}
            width={35}
            height={35}
          />
        </div>
      </Link>
      <Link href="/login">
        <div className="login-link">로그인</div>
      </Link>
      <Link href="" passHref>
        <div className="more-link" onClick={openMore}>
          <Image
            src="/icon/Morebutton.svg"
            alt="more"
            loader={() => "/icon/Morebutton.svg"}
            width={18}
            height={20}
          />
        </div>
      </Link>
      {isMoreOpen && (
        <div className="more-modal" ref={moreModalRef}>
          {/* 로그인 작업 후 모달 구현 필요 */}
          <div className="more-content">
            <p>나의 공부방</p>
            <p>내가 문의한 글</p>
            <p>회원정보 수정</p>
            <p>로그아웃</p>
          </div>
        </div>
      )}
      {/* CSS */}
      <style jsx>{`
        nav {
          width: 120rem;
          height: 4.125rem;
          background: #229eeb;
          display: flex;
          align-items: center;
        }

        .home-link {
          position: absolute;
          width: 8.6875rem;
          height: 2.5625rem;
          left: 21.9rem;
          right: 89.4rem;
          top: 0.75rem;
          bottom: 0.82rem;
        }

        .video-link {
          position: absolute;
          width: 2.125rem;
          height: 2.125rem;
          left: 80.8rem;
          right: 37.1rem;
          top: 1rem;
          bottom: 1rem;
        }

        .notification-link {
          position: absolute;
          width: 1.625rem;
          height: 1.625rem;
          left: 84.6rem;
          right: 33.8rem;
          top: 1.25rem;
          bottom: 1.25rem;
        }

        .notification-modal {
          position: absolute;
          z-index: 1000;
          width: 23.4375rem;
          height: 15.125rem;
          border-radius: 1.0625rem;
          background: #f5f5f5;
          box-shadow: 3px 3px 12px 5px rgba(0, 0, 0, 0.25);
          left: 72.19rem;
          right: 24.38rem;
          top: 4.31rem;
          bottom: 48.06rem;
        }

        .notification-content {
          color: #000;
          font-size: 1.0625rem;
          font-weight: 900;
          letter-spacing: 0.01063rem;
          text-align: center;
        }

        .message-modal {
          position: absolute;
          z-index: 1000;
          width: 23.4375rem;
          height: 30.5rem;
          border-radius: 1.0625rem;
          background: #f5f5f5;
          box-shadow: 3px 3px 12px 5px rgba(0, 0, 0, 0.25);
          left: 72.25rem;
          right: 24.31rem;
          top: 4.31rem;
          bottom: 32.69rem;
        }

        .message-content {
          color: #000;
          font-size: ${Font.Size.M};
          font-weight: 900;
          letter-spacing: 0.01125rem;
          text-align: center;
        }

        .more-modal {
          position: absolute;
          z-index: 1000;
          width: 6rem;
          height: 8.8125rem;
          border-radius: 1rem;
          border: 1px solid #e9f7ff;
          background: #229eeb;
          box-shadow: 3px 3px 12px -2px rgba(0, 0, 0, 0.25);
          left: 97.5rem;
          right: 16.5rem;
          top: 3.19rem;
          bottom: 55.5rem;
        }

        .more-content {
          color: #fff;
          text-align: center;
          font-size: ${Font.Size.S};
          font-weight: 500;
          text-align: center;
        }

        .message-link {
          position: absolute;
          width: 1.90156rem;
          height: 1.57888rem;
          left: 87.8rem;
          right: 30.3rem;
          top: 1.25rem;
          bottom: 1.3rem;
        }

        .profil-link {
          position: absolute;
          width: 2.1875rem;
          height: 2.1875rem;
          left: 91.62rem;
          right: 26.19rem;
          top: 1rem;
          bottom: 0.94rem;
        }

        .login-link {
          position: absolute;
          width: 2.625rem;
          height: 1.375rem;
          color: #fff;
          text-align: center;
          font-size: 0.9375rem;
          font-weight: 900;
          left: 94.44rem;
          right: 22.94rem;
          top: 1.58rem;
          bottom: 1.57rem;
        }

        .more-link {
          position: absolute;
          z-index: 1000;
          width: 1.125rem;
          height: 1.25rem;
          left: 97.3rem;
          right: 21.6rem;
          top: 1.44rem;
          bottom: 1.44rem;
        }
      `}</style>
    </nav>
  );
}
