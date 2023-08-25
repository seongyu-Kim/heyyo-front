import * as style from "@/components/pages/signup/signup-terms-form/SignupTermsForm.style";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  CheckboxLabel,
  HiddenInput,
  TermsTr,
} from "@/components/pages/signup/signup-terms-form/SignupTermsForm.style";

export default function SignupTermsForm({ onCheckItemsChange }) {
  const data = [
    { id: 0, title: "이용약관 동의 (필수)" },
    { id: 1, title: "개인정보 수집 및 이용 동의 (필수)" },
    { id: 2, title: "개인정보 제 3자 제공 동의 (필수)" },
    { id: 3, title: "개인정보 처리 위탁 동의 (필수)" },
    { id: 4, title: "개인정보 수입 및 이용 동의 (선택)" },
  ];

  const [checkItems, setCheckItems] = useState([]);

  useEffect(() => {
    onCheckItemsChange(checkItems);
  }, [checkItems]);

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems((prev) => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      const idArray = data.map((item) => item.id);
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  return (
    <style.BoxDiv>
      <style.TermsContainer>
        <style.TermsTable>
          <style.TermsThead>
            <style.TermsTr>
              <style.TermsCheckTd>
                <style.CheckboxLabel>
                  <style.HiddenInput
                    type="checkbox"
                    name="select-all"
                    onChange={(e) => handleAllCheck(e.target.checked)}
                    checked={checkItems.length === data.length}
                  />
                  {checkItems.length === data.length ? (
                    <Image
                      src="/assets/icon/Checked_Checkbox.svg"
                      alt="Checked"
                      width={20}
                      height={20}
                    />
                  ) : (
                    <Image
                      src="/assets/icon/Unchecked_Checkbox.svg"
                      alt="Unchecked"
                      width={20}
                      height={20}
                    />
                  )}
                </style.CheckboxLabel>
              </style.TermsCheckTd>
              <style.TermsAllTd>약관 전체동의</style.TermsAllTd>
            </style.TermsTr>
          </style.TermsThead>
          <style.TermsTbody>
            <style.TermsTr>
              <style.TermsLineTd colSpan="2"></style.TermsLineTd>
            </style.TermsTr>
          </style.TermsTbody>
        </style.TermsTable>
      </style.TermsContainer>
      <style.DataDiv>
        <style.TermsTable>
          <style.TermsTbody>
            {data?.map((item) => (
              <TermsTr key={item.id}>
                <style.TermsTd>
                  <style.CheckboxLabel>
                    <style.HiddenInput
                      type="checkbox"
                      name={`select-${item.id}`}
                      onChange={(e) =>
                        handleSingleCheck(e.target.checked, item.id)
                      }
                      checked={checkItems.includes(item.id)}
                    />
                    {checkItems.includes(item.id) ? (
                      <Image
                        src="/assets/icon/Checked_Checkbox.svg"
                        alt="Checked"
                        width={20}
                        height={20}
                      />
                    ) : (
                      <Image
                        src="/assets/icon/Unchecked_Checkbox.svg"
                        alt="Unchecked"
                        width={20}
                        height={20}
                      />
                    )}
                  </style.CheckboxLabel>
                </style.TermsTd>
                <style.TermsData>{item.title}</style.TermsData>
                <style.TermsTd>
                  <style.TermsButton
                    onClick={() => alert(item.title + "의 내용 보기")}
                  >
                    내용 보기
                  </style.TermsButton>
                </style.TermsTd>
              </TermsTr>
            ))}
          </style.TermsTbody>
        </style.TermsTable>
      </style.DataDiv>
    </style.BoxDiv>
  );
}
