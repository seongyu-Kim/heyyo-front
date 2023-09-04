import React from "react";
import * as style from "@/components/pages/share/share-bottom-box/ShareBottomBox.style";
import ShareTextBox from "@/components/pages/share/share-text-box/ShareTextBox";
import {
  BottomContainerDiv,
  PaginationStyle,
} from "@/components/pages/share/share-bottom-box/ShareBottomBox.style";
import { TextContainerDiv } from "@/components/pages/share/share-text-box/ShareTextBox.style";
import Image from "next/image";
import {
  PaginationDiv,
  PaginationNextStyle,
} from "@/components/pages/share/share-bottom-box/ShareBottomBox.style";

export default function ShareBottomBox() {
  return (
    <>
      <div>
        <BottomContainerDiv>
          <TextContainerDiv>
            <ShareTextBox />
          </TextContainerDiv>
          <TextContainerDiv>
            <ShareTextBox />
          </TextContainerDiv>
          <TextContainerDiv>
            <ShareTextBox />
          </TextContainerDiv>
          <TextContainerDiv>
            <ShareTextBox />
          </TextContainerDiv>
          <TextContainerDiv>
            <ShareTextBox />
          </TextContainerDiv>{" "}
          <TextContainerDiv>
            <ShareTextBox />
          </TextContainerDiv>{" "}
          <TextContainerDiv>
            <ShareTextBox />
          </TextContainerDiv>
        </BottomContainerDiv>

        <PaginationDiv>
          <PaginationStyle>1</PaginationStyle>
          <PaginationStyle>2</PaginationStyle>
          <PaginationStyle>3</PaginationStyle>
          <PaginationStyle>4</PaginationStyle>
          <PaginationStyle>5</PaginationStyle>
          <PaginationStyle>6</PaginationStyle>
          <PaginationStyle>7</PaginationStyle>
          <PaginationStyle>8</PaginationStyle>
          <PaginationStyle>9</PaginationStyle>
          <PaginationStyle>10</PaginationStyle>
          <PaginationNextStyle>[다음 10개]</PaginationNextStyle>
        </PaginationDiv>

        <style.Write>
          <Image
            src="/assets/img/write.svg"
            alt="write"
            loader={() => "/assets/img/write.svg"}
            width={46}
            height={46}
          />
        </style.Write>
      </div>
    </>
  );
}
