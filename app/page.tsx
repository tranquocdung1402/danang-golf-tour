import Image from "next/image";
import {
  ChevronRight,
  Compass,
  Flag,
  Hotel,
  MapPin,
  Mountain,
  Palmtree,
  Phone,
  Waves,
} from "lucide-react";
import { golfCourses } from "../lib/golfCourses";
import { sitePath } from "../lib/sitePaths";

const navItems = ["岘港", "高尔夫", "会安", "度假体验"];

const places = [
  {
    title: "My Khe Beach",
    zh: "美溪海滩",
    text: "清晨海岸、白沙与温柔海风，是岘港旅行最直接的度假开场。",
    className: "imageMyKhe",
    icon: Waves,
  },
  {
    title: "Son Tra Peninsula",
    zh: "山茶半岛",
    text: "山海相接的自然保护区，适合观景、轻徒步与海岸线摄影。",
    className: "imageSonTra",
    icon: Mountain,
  },
  {
    title: "Linh Ung Pagoda",
    zh: "灵应寺",
    text: "位于山茶半岛的静谧地标，可俯瞰城市、海湾与远处群山。",
    className: "imageLinhUng",
    icon: Compass,
  },
  {
    title: "Dragon Bridge",
    zh: "岘港龙桥",
    text: "城市夜景核心地标，适合安排晚餐后散步与夜游。",
    className: "imageDragon",
    icon: MapPin,
  },
  {
    title: "Hoi An Ancient Town",
    zh: "会安古城",
    text: "灯笼、老街、河岸与古建筑，让高尔夫旅程多一层文化温度。",
    className: "imageHoiAn",
    icon: Palmtree,
  },
  {
    title: "Thu Bon River",
    zh: "秋盆河",
    text: "水乡风景、椰林与传统船只体验，适合半日慢旅行。",
    className: "imageThuBon",
    icon: Waves,
  },
  {
    title: "Ba Na Hills",
    zh: "巴拿山",
    text: "山地气候、缆车与云雾景观，为岘港旅行增加清凉的高地体验。",
    className: "imageBaNa",
    icon: Mountain,
  },
  {
    title: "Golden Bridge",
    zh: "佛手金桥",
    text: "岘港最具辨识度的观光画面之一，适合作为旅行视觉亮点。",
    className: "imageGoldenBridge",
    icon: Flag,
  },
  {
    title: "Marble Mountains",
    zh: "五行山",
    text: "洞穴、寺庙与石灰岩山体组成短途文化探索路线。",
    className: "imageMarble",
    icon: Mountain,
  },
];

const itinerary = [
  ["Day 1", "抵达岘港", "海边晚餐、城市夜景与度假节奏开启。"],
  ["Day 2", "海岸高尔夫", "安排一场经典 links 球局，下午回到海滩或 resort 休息。"],
  ["Day 3", "会安文化", "上午挥杆，傍晚进入会安古城，感受灯笼与河岸夜色。"],
  ["Day 4", "山海探索", "山茶半岛、巴拿山或五行山，按客人节奏安排轻旅行。"],
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader" aria-label="YD Travel navigation">
        <a className="brand" href="#top" aria-label="YD Travel home">
          <Image src={sitePath("/logo-transparent.png")} alt="YD Travel" width={92} height={74} priority />
        </a>
        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item}`}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="heroSlides" aria-hidden="true">
          <span className="heroSlide heroSlideOne" />
          <span className="heroSlide heroSlideTwo" />
          <span className="heroSlide heroSlideThree" />
          <span className="heroSlide heroSlideFour" />
        </div>
        <div className="heroOverlay" />
        <div className="heroContent">
          <h1>岘港之美，海岸高尔夫之旅</h1>
          <p className="heroLead">
            在越南中部海岸线，把世界级球场、热带海滩、会安古城与山海风景连接成一次高质感旅行。
          </p>
          <div className="heroActions">
            <a href="#高尔夫" className="primaryCta">
              探索高尔夫球场 <ChevronRight size={18} />
            </a>
            <a href="#岘港" className="secondaryCta">
              发现岘港
            </a>
          </div>
        </div>
      </section>

      <section id="岘港" className="intro section">
        <div className="sectionSplit">
          <h2>一座适合高尔夫假期的海滨城市</h2>
          <div className="introStory">
            <div className="introImageMain imageMyKhe" aria-hidden="true" />
            <div className="introCopy">
              <p>
                岘港拥有紧凑的旅行半径：机场、海滩、度假酒店、会安古城与多座高尔夫球场彼此相连。
                白天可以在海风与沙丘之间挥杆，傍晚回到海边晚餐，或进入会安感受灯笼夜色。
              </p>
              <div className="introMiniGrid" aria-hidden="true">
                <span className="imageSonTra" />
                <span className="imageDragon" />
              </div>
            </div>
          </div>
        </div>
        <div className="featureGrid">
          <article>
            <Waves size={24} />
            <h3>海岸线</h3>
            <p>美溪海滩、山茶半岛与南会安海岸构成明亮、开阔的度假背景。</p>
          </article>
          <article>
            <Flag size={24} />
            <h3>高尔夫</h3>
            <p>多座 links 风格与 resort 球场集中分布，适合连续安排多场球局。</p>
          </article>
          <article>
            <Hotel size={24} />
            <h3>度假</h3>
            <p>从海边 resort 到会安周边酒店，旅行节奏舒适，适合家庭与商务客人。</p>
          </article>
        </div>
      </section>

      <section id="高尔夫" className="section muted">
        <div className="sectionHeader">
          <h2>岘港与会安周边高尔夫地标</h2>
          <p>精选海岸线与度假型球场，让旅行不只是观光，而是一次完整的挥杆体验。</p>
        </div>
        <div className="courseGrid">
          {golfCourses.map((course) => (
            <a className="courseCard" href={sitePath(`/golf/${course.slug}/`)} key={course.name}>
              <div className={`visual ${course.imageClass}`}>
                <span>{course.zh}</span>
              </div>
              <div className="cardBody">
                <p className="meta">{course.meta}</p>
                <h3>{course.name}</h3>
                <p>{course.summary}</p>
                <strong className="cardLink">
                  查看球场详情 <ChevronRight size={17} />
                </strong>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="会安" className="section">
        <div className="sectionHeader">
          <h2>从海滩到古城，一路都是旅行画面</h2>
          <p>每一个地点都可以独立成行，也可以与高尔夫日程组合成 4 天或更长的度假路线。</p>
        </div>
        <div className="placeGrid">
          {places.map((place) => {
            const Icon = place.icon;
            return (
              <article className="placeCard" key={place.title}>
                <div className={`placeImage ${place.className}`} />
                <div className="placeContent">
                  <Icon size={20} />
                  <div>
                    <p>{place.zh}</p>
                    <h3>{place.title}</h3>
                  </div>
                </div>
                <p className="placeText">{place.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="度假体验" className="section experience">
        <div className="experienceVisual imageLifestyle" aria-hidden="true" />
        <div className="experienceContent">
          <h2>推荐旅行节奏</h2>
          <p>
            网站以目的地推广为主，不展示固定价格，也不把行程包装成硬性产品。
            下面的路线只作为灵感，帮助客人理解岘港如何把高尔夫、海滨度假与文化体验串联起来。
          </p>
          <div className="timeline">
            {itinerary.map(([day, title, text]) => (
              <article key={day}>
                <strong>{day}</strong>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footerBrand">
          <strong>弈鼎旅游</strong>
          <span>YD TRAVEL</span>
        </div>
        <div className="footerInfo">
          <p>
            <Phone size={20} aria-hidden="true" />
            咨询热线: +84776765801
          </p>
          <p>
            <MapPin size={20} aria-hidden="true" />
            公司地址: 越南岘港
          </p>
        </div>
        <p className="footerSlogan">岘港之美，等你来探索！</p>
      </footer>
    </main>
  );
}
