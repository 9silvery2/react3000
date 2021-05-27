import React from "react";
import WrapTitle from "../basics/WrapTitle";
import Header from "../Header";
import Layout from "../Layout";

function ScriptText({ image, title, desc1, desc2 }) {
  return (
    <div className="script__cont__wrap">
      <div className="script__cont__img"><img src={image} alt={title} /></div>
      <div className="script__cont__txt">
        <h2>{title}</h2>
        <p>{desc1}</p>
        <p>{desc2}</p>
        <ul>
          <li>
            <a href="/">1</a>
          </li>
          <li>
            <a href="/">2</a>
          </li>
          <li>
            <a href="/">3</a>
          </li>
          <li>
            <a href="/">4</a>
          </li>
          <li>
            <a href="/">5</a>
          </li>
          <li>
            <a href="/">6</a>
          </li>
          <li>
            <a href="/">7</a>
          </li>
          <li>
            <a href="/">8</a>
          </li>
          <li>
            <a href="/">9</a>
          </li>
          <li>
            <a href="/">10</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

const scriptInfo = [
  {
    id: 1,
    image: "img/video01.png",
    title: "animationRequestFrame",
    desc1:
      "레이아웃은 사이트를 만드는 데 가장 기본적인 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트 제작의 50%는 끝났다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
    desc2:
      "레이아웃은 사이트를 만드는 데 가장 기본적인 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트 제작의 50%는 끝났다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
  },
  {
    id: 2,
    image: "img/video02.png",
    title: "animationRequestFrame",
    desc1:
      "레이아웃은 사이트를 만드는 데 가장 기본적인 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트 제작의 50%는 끝났다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
    desc2:
      "레이아웃은 사이트를 만드는 데 가장 기본적인 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트 제작의 50%는 끝났다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
  },
  {
    id: 3,
    image: "img/video01.png",
    title: "animationRequestFrame",
    desc1:
      "레이아웃은 사이트를 만드는 데 가장 기본적인 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트 제작의 50%는 끝났다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
    desc2:
      "레이아웃은 사이트를 만드는 데 가장 기본적인 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트 제작의 50%는 끝났다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
  },
];

function Script() {
  return (
    <div id="wrap" className="light">
      <Header info="none" />
      <Layout>
        <section id="scriptCont">
          <div className="container">
            <WrapTitle text={["script", "javascript"]} />

            <div className="script__cont">
              {scriptInfo.map((text) => (
                <ScriptText
                  key={text.id}
                  image={text.image}
                  title={text.title}
                  desc1={text.desc1}
                  desc2={text.desc2}
                />
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default Script;
