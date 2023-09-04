import React from "react";
import ShareDiffTextBox from "@/components/pages/share/share-diff-text-box/ShareDiffTextBox";
import * as style from "@/components/pages/share/share-bottom-box/ShareBottomBox.style";

export default function ShareBottomBox() {
  const numberOfItems = 9;

  return (
    <>
      <style.Div>
        {Array.from({ length: numberOfItems }).map((_, index) => (
          <style.TextContainerDiv
            key={index}
            // style={{
            //   marginLeft: index % 3 === 0 ? "30rem" : "7.7rem",
            //   marginTop: index < 4 ? "10.3rem" : "7.5rem",
            // }}
          >
            <ShareDiffTextBox />
          </style.TextContainerDiv>
        ))}
      </style.Div>
      <style.PaginationDiv>
        <style.PaginationStyle>1</style.PaginationStyle>
        <style.PaginationStyle>2</style.PaginationStyle>
        <style.PaginationStyle>3</style.PaginationStyle>
        <style.PaginationStyle>4</style.PaginationStyle>
        <style.PaginationStyle>5</style.PaginationStyle>
        <style.PaginationStyle>6</style.PaginationStyle>
        <style.PaginationStyle>7</style.PaginationStyle>
        <style.PaginationStyle>8</style.PaginationStyle>
        <style.PaginationStyle>9</style.PaginationStyle>
        <style.PaginationStyle>10</style.PaginationStyle>
        <style.PaginationNextStyle>[다음 10개]</style.PaginationNextStyle>
      </style.PaginationDiv>
    </>
  );
}
