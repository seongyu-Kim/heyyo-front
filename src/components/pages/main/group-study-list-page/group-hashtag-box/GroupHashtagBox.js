import * as style from "@/components/pages/main/group-study-list-page/group-hashtag-box/GroupHashtagBox.style";
import Image from "next/image";
import Link from "next/link";

export default function GroupHashtagBox() {
  return (
    <style.Box>
      <style.HashtagBox>
        <Link
          href={{ pathname: "/groupstudyview", query: { mbti: "Loneliness" } }}
        >
          <Image
            src="/assets/img/HashtagBox_고독.svg"
            alt="HashtagBox_고독"
            loader={() => "/assets/img/HashtagBox_고독.svg"}
            width={256}
            height={66}
          />
        </Link>
        <Link
          href={{
            pathname: "/groupstudyview",
            query: { mbti: "Communication" },
          }}
        >
          <Image
            src="/assets/img/HashtagBox_소통.svg"
            alt="HashtagBox_소통"
            loader={() => "/assets/img/HashtagBox_소통.svg"}
            width={256}
            height={66}
          />
        </Link>
        <Link
          href={{ pathname: "/groupstudyview", query: { mbti: "Crowded" } }}
        >
          <Image
            src="/assets/img/HashtagBox_북적.svg"
            alt="HashtagBox_북적"
            loader={() => "/assets/img/HashtagBox_북적.svg"}
            width={256}
            height={66}
          />
        </Link>
        <Link href={{ pathname: "/groupstudyview", query: { mbti: "Quiet" } }}>
          <Image
            src="/assets/img/HashtagBox_한산.svg"
            alt="HashtagBox_한산"
            loader={() => "/assets/img/HashtagBox_한산.svg"}
            width={256}
            height={66}
          />
        </Link>
      </style.HashtagBox>

      <style.HashtagBox2>
        <Link
          href={{ pathname: "/groupstudyview", query: { mbti: "Researching" } }}
        >
          <Image
            src="/assets/img/HashtagBox_연구.svg"
            alt="HashtagBox_연구"
            loader={() => "/assets/img/HashtagBox_연구.svg"}
            width={256}
            height={66}
          />
        </Link>
        <Link href={{ pathname: "/groupstudyview", query: { mbti: "Useful" } }}>
          <Image
            src="/assets/img/HashtagBox_빨리.svg"
            alt="HashtagBox_빨리"
            loader={() => "/assets/img/HashtagBox_빨리.svg"}
            width={256}
            height={66}
          />
        </Link>
        <Link href={{ pathname: "/groupstudyview", query: { mbti: "Timid" } }}>
          <Image
            src="/assets/img/HashtagBox_소심.svg"
            alt="HashtagBox_소심"
            loader={() => "/assets/img/HashtagBox_소심.svg"}
            width={256}
            height={66}
          />
        </Link>
        <Link href={{ pathname: "/groupstudyview", query: { mbti: "Focus" } }}>
          <Image
            src="/assets/img/HashtagBox_집중.svg"
            alt="HashtagBox_집중"
            loader={() => "/assets/img/HashtagBox_집중.svg"}
            width={256}
            height={66}
          />
        </Link>
      </style.HashtagBox2>
    </style.Box>
  );
}
