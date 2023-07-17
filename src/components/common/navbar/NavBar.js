import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [isReminderOpen, setIsReminderOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const openReminder = () => {
    setIsReminderOpen(true);
  };

  const closeReminder = () => {
    setIsReminderOpen(false);
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
  return (
    <nav>
      <Link href="/" passHref>
        <div className="home-link">
          <Image
            src="/icon/logo.svg"
            alt="logo"
            loader={() => "/icon/logo.svg"}
            width={139}
            height={41}
          />
        </div>
      </Link>
      <Link href="/video" passHref>
        <div className="video-link">
          <Image
            src="/icon/video.svg"
            alt="video"
            loader={() => "/icon/video.svg"}
            width={34}
            height={34}
          />
        </div>
      </Link>
      <Link href="" passHref>
        <div className="reminder-link" onClick={openReminder}>
          <Image
            src="/icon/reminder.svg"
            alt="reminder"
            loader={() => "/icon/reminder.svg"}
            width={26}
            height={26}
          />
        </div>
      </Link>
      {isReminderOpen && (
        <div className="modal">
          {/* 스타일 적용 필요 */}
          {/* 모달 내용 */}
          <div className="modal-content">
            {/* 모달 내용 */}
            <h2>업데이트</h2>
            <p>내용</p>
            {/* 모달 닫기 버튼 */}
            <button onClick={closeReminder}>닫기</button>
          </div>
        </div>
      )}
      <Link href="" passHref>
        <div className="message-link" onClick={openMessage}>
          <Image
            src="/icon/message.svg"
            alt="message"
            loader={() => "/icon/message.svg"}
            width={32}
            height={26}
          />
        </div>
      </Link>
      {isMessageOpen && (
        <div className="modal">
          {/* 스타일 적용 필요 */}
          {/* 모달 내용 */}
          <div className="modal-content">
            {/* 모달 내용 */}
            <h2>받은 메시지</h2>
            <p>내용</p>
            {/* 모달 닫기 버튼 */}
            <button onClick={closeMessage}>닫기</button>
          </div>
        </div>
      )}
      <Link href="/profil" passHref>
        <div className="profil-link">
          <Image
            src="/icon/profil.svg"
            alt="profil"
            loader={() => "/icon/profil.svg"}
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
            src="/icon/morebutton.svg"
            alt="more"
            loader={() => "/icon/morebutton.svg"}
            width={18}
            height={20}
          />
        </div>
      </Link>
      {isMoreOpen && (
        <div className="modal">
          {/* 스타일 적용 필요 */}
          {/* 모달 내용 */}
          <div className="modal-content">
            {/* 모달 내용 */}
            <h2>나의공부방</h2>
            <p>내용</p>
            {/* 모달 닫기 버튼 */}
            <button onClick={closeMore}>닫기</button>
          </div>
        </div>
      )}
      <style jsx>{`
        nav {
          width: 1920px;
          height: 66px;
          flex-shrink: 0;
          background: #229eeb;
          display: flex;
          align-items: center;
        }

        .home-link {
          width: 139px;
          height: 41px;
          flex-shrink: 0;
          margin-left: 150px;
          margin-right: 700px;
          margin-top: 12px;
          margin-bottom: 13px;
        }

        .video-link {
          width: 34px;
          height: 34px;
          flex-shrink: 0;
          margin-right: 26px;
          margin-top: 16px;
          margin-bottom: 16px;
        }

        .reminder-link {
          width: 26px;
          height: 26px;
          flex-shrink: 0;
          margin-right: 25.58px;
          margin-top: 20px;
          margin-bottom: 20px;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-content {
          background-color: #fff;
          padding: 20px;
          border-radius: 4px;
          text-align: center;
        }

        .message-link {
          width: 30.425px;
          height: 25.262px;
          flex-shrink: 0;
          margin-right: 31px;
          margin-top: 20px;
          margin-bottom: 20.74px;
        }

        .profil-link {
          width: 35px;
          height: 35px;
          flex-shrink: 0;
          margin-right: 10px;
          margin-top: 16px;
          margin-bottom: 15px;
        }

        .login-link {
          width: 42px;
          height: 22px;
          color: #fff;
          text-align: center;
          font-family: Noto Sans KR;
          font-size: 15px;
          font-style: normal;
          font-weight: 900;
          line-height: normal;
          margin-right: 3px;
          margin-top: 23px;
          margin-bottom: 15px;
        }

        .more-link {
          width: 18px;
          height: 20px;
          flex-shrink: 0;
          margin-right: 150px;
          margin-top: 23px;
          margin-bottom: 23px;
        }
      `}</style>
    </nav>
  );
}
