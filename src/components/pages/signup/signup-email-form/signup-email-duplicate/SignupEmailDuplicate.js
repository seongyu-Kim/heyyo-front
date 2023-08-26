import * as style from "@/components/pages/signup/signup-email-form/SignupEmailForm.style";
import Image from "next/image";

export const SignupEmailDuplicate = ({
  isDuplicateEmail,
  message,
  emailFormatError,
}) => {
  if (isDuplicateEmail === true && !emailFormatError) {
    return (
      <style.ErrorMessage>
        <Image
          src="/assets/icon/SignupError.svg"
          alt="error"
          loader={() => "/assets/icon/SignupError.svg"}
          width={10}
          height={10}
        />
        {message}
      </style.ErrorMessage>
    );
  } else if (
    isDuplicateEmail === false &&
    !emailFormatError &&
    message !== "init"
  ) {
    return (
      <style.SuccessMessage>
        <Image
          src="/assets/icon/SignupSuccess.svg"
          alt="success"
          loader={() => "/assets/icon/SignupSuccess.svg"}
          width={10}
          height={10}
        />
        {message}
      </style.SuccessMessage>
    );
  } else if (emailFormatError) {
    return <style.ErrorMessage>잘못된 이메일 형식 입니다.</style.ErrorMessage>;
  }
};
