import { useRouter } from "next/router";

export default function Survey() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/survey2");
  };

  return (
    <>
      <div className="container">
        <h2 className="title">
          해요와 발자국을 함께하시게 된 걸 축하해요!
          <br />
          당신은 이제 (경험하게 될 가치) 거예요.
        </h2>
      </div>
      <div className="container">
        <img className="image" src="/img/Survey.svg" alt="asdasdasd" />
      </div>
      <div className="container">
        <button className="btn btnContent" onClick={handleButtonClick}>
          나의 공부 성향 알아보기
        </button>
      </div>
      <style jsx>{`
        .title {
          margin-top: 219px;
        }
        .image {
          margin-top: 60.98px;
        }
        .link {
          display: inline-block;
        }
        .btn {
          width: 300px;
          height: 50px;
          margin-top: 44.02px;

          border-radius: 13px;
          background: #f2923b;
        }
        .btnContent {
          color: #fff;
          font-size: 18px;
          font-weight: 900;
        }
      `}</style>
    </>
  );
}
