import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const Nav = styled.nav`
  position: relative;
  width: 100%;
  height: 6.6rem;
  display: flex;
  align-items: center;
  background: #229eeb;
  justify-content: space-between;
  text-align: center;
`;

export const HomeLinkDiv = styled.div`
  position: relative;
  width: 13.9rem;
  height: 4.1rem;
  left: 35rem;
`;

export const MenuContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  right: 34.6rem;
  gap: 2.6rem;
`;

export const VideoLinkDiv = styled.div`
  position: relative;
  width: 3.4rem;
  height: 3.4rem;
  gap: 2.6rem;
`;

export const NotificationLinkDiv = styled.div`
  position: relative;
  width: 2.6rem;
  height: 2.6rem;
`;

export const MessageLinkDiv = styled.div`
  position: relative;
  width: 3.0425rem;
  height: 2.5262rem;
`;

export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const ProfilLinkDiv = styled.div`
  position: relative;
  width: 3.5rem;
  height: 3.5rem;
  margin-top: 0.2rem;
`;

export const LoginLinkDiv = styled.span`
  position: relative;
  width: 7rem;
  height: 2.2rem;
  font-size: 1.5rem;
  font-weight: 900;
  color: #fff;
  text-align: center;
  margin-left: 0.5rem;
  top: 0.9rem;
`;

export const MoreLinkDiv = styled.div`
  position: relative;
  width: 1.8rem;
  height: 2rem;
  text-align: center;
  top: 1.2rem;
  margin-left: 0.8rem;
`;

export const NotificationModalDiv = styled.div`
  position: absolute;
  z-index: 1300;
  transform: translateX(-50%);
  width: 37.5rem;
  height: 24.2rem;
  border-radius: 1.7rem;
  background: #f5f5f5;
  box-shadow: 3px 3px 12px 5px rgba(0, 0, 0, 0.25);
  top: calc(100% + 2.3rem);
  left: 50%;
`;

export const NotificationContentDiv = styled.div`
  color: #000;
  font-size: 1.7rem;
  font-weight: 900;
  letter-spacing: 0.017rem;
`;

export const MessageModalDiv = styled.div`
  position: absolute;
  z-index: 1300;
  transform: translateX(-50%);
  width: 23.4375rem;
  height: 30.5rem;
  border-radius: 1.0625rem;
  background: #f5f5f5;
  box-shadow: 3px 3px 12px 5px rgba(0, 0, 0, 0.25);
  top: calc(100% + 2.3rem);
  left: 50%;
`;

export const MessageContentDiv = styled.div`
  color: #000;
  font-size: ${Font.Size.M};
  font-weight: 900;
  letter-spacing: 0.018rem;
  text-align: center;
`;

export const MoreModalDiv = styled.div`
  position: absolute;
  z-index: 1300;
  width: 9.6rem;
  height: 14.1rem;
  border-radius: 1rem;
  border: 1px solid #e9f7ff;
  background: #229eeb;
  box-shadow: 3px 3px 12px -2px rgba(0, 0, 0, 0.25);
  top: 5rem;
  right: 27rem;
`;

export const ModalDiv = styled.div`
  position: relative;
`;

export const MoreContent = styled.p`
  color: #fff;
  text-align: center;
  font-size: ${Font.Size.S};
  font-weight: 500;
  text-align: center;
`;

export const MoreLogoutButton = styled.button`
  color: #fff;
  font-size: ${Font.Size.S};
  font-weight: 500;
  display: flex;
  margin: 0 auto;
`;
