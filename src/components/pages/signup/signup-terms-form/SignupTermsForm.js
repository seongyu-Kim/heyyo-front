import React, { useState } from "react";
import Image from "next/image";
import { Font } from "/public/fonts/Font";

export default function SignupTermsForm() {
  const data = [
    { id: 0, title: "이용약관 동의 (필수)" },
    { id: 1, title: "개인정보 수집 및 이용 동의 (필수)" },
    { id: 2, title: "개인정보 제 3자 제공 동의 (필수)" },
    { id: 3, title: "개인정보 처리 위탁 동의 (필수)" },
    { id: 4, title: "개인정보 수입 및 이용 동의 (선택)" },
  ];

  const [checkItems, setCheckItems] = useState([]);

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
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <td style={{ width: "20px" }}>
                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    name="select-all"
                    onChange={(e) => handleAllCheck(e.target.checked)}
                    checked={checkItems.length === data.length}
                  />
                  {checkItems.length === data.length ? (
                    <Image
                      src="/icon/Checked_Checkbox.svg"
                      alt="Checked"
                      width={20}
                      height={20}
                    />
                  ) : (
                    <Image
                      src="/icon/Unchecked_Checkbox.svg"
                      alt="Unchecked"
                      width={20}
                      height={20}
                    />
                  )}
                </label>
              </td>
              <td className="terms-all">약관 전체동의</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2" className="line"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="data">
        <table>
          <tbody>
            {data?.map((item) => (
              <tr key={item.id}>
                <td>
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      name={`select-${item.id}`}
                      onChange={(e) =>
                        handleSingleCheck(e.target.checked, item.id)
                      }
                      checked={checkItems.includes(item.id)}
                    />
                    {checkItems.includes(item.id) ? (
                      <Image
                        src="/icon/Checked_Checkbox.svg"
                        alt="Checked"
                        width={20}
                        height={20}
                      />
                    ) : (
                      <Image
                        src="/icon/Unchecked_Checkbox.svg"
                        alt="Unchecked"
                        width={20}
                        height={20}
                      />
                    )}
                  </label>
                </td>
                <td className="terms-data">{item.title}</td>
                <td>
                  <button
                    className="terms-button"
                    onClick={() => alert(item.title + "의 내용 보기")}
                  >
                    내용 보기
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>
        {`
          .line {
            width: 27.9375rem;
            height: 0.0625rem;
            background: url("/icon/TermsLine.svg") no-repeat;
          }

          .terms-all {
            width: 14.0625rem;
            height: 1.25rem;
            flex-shrink: 0;
            color: #000;
            font-size: ${Font.Size.S};
            font-weight: 700;
          }

          .terms-data {
            width: 14.0625rem;
            height: 1.25rem;
            flex-shrink: 0;
            color: #000;
            font-size: ${Font.Size.S};
            font-weight: 400;
          }

          .data {
            margin-top: 0.94rem;
            margin-bottom: 1.87rem;
          }

          /* 체크박스 숨기기 */
          input[type="checkbox"] {
            display: none;
          }

          /* 커스텀 체크박스 */
          .custom-checkbox {
            display: inline-block;
            cursor: pointer;
            margin-right: 0.28rem;
          }

          .terms-button {
            color: #8c9499;
            text-align: right;
            font-size: ${Font.Size.XS};
            font-weight: 400;
            text-decoration-line: underline;
            margin-left: 9.38rem;
          }
        `}
      </style>
    </div>
  );
}
