import Image from "next/image";
import { ArrowLeft, MapPin, Phone } from "lucide-react";
import { notFound } from "next/navigation";
import { getGolfCourse, golfCourses } from "../../../lib/golfCourses";
import { sitePath } from "../../../lib/sitePaths";

type GolfCoursePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return golfCourses.map((course) => ({
    slug: course.slug,
  }));
}

export function generateMetadata({ params }: GolfCoursePageProps) {
  const course = getGolfCourse(params.slug);

  if (!course) {
    return {
      title: "Golf Course Not Found | YD Travel",
    };
  }

  return {
    title: `${course.name} | YD Travel`,
    description: course.summary,
  };
}

export default function GolfCoursePage({ params }: GolfCoursePageProps) {
  const course = getGolfCourse(params.slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="detailPage">
      <header className="siteHeader" aria-label="YD Travel navigation">
        <a className="brand" href={sitePath("/")} aria-label="YD Travel home">
          <Image src={sitePath("/logo-transparent.webp")} alt="YD Travel" width={92} height={74} priority />
        </a>
        <nav className="nav" aria-label="Main navigation">
          <a href={sitePath("/#岘港")}>岘港</a>
          <a href={sitePath("/#高尔夫")}>高尔夫</a>
          <a href={sitePath("/#会安")}>会安</a>
          <a href={sitePath("/#度假体验")}>度假体验</a>
        </nav>
      </header>

      <section className="detailHero">
        <div className="detailHeroSlides" aria-hidden="true">
          {course.heroSlides.map((image, index) => (
            <span
              className="detailHeroImage"
              key={image}
              style={{
                backgroundImage: `url(${sitePath(image)})`,
                animationDelay: `${index * 6}s`,
              }}
            />
          ))}
        </div>
        <div className="detailHeroOverlay" />
        <div className="detailHeroContent">
          <a className="backLink" href={sitePath("/#高尔夫")}>
            <ArrowLeft size={18} />
            Back to Golf Courses / 返回高尔夫球场
          </a>
          <p className="eyebrow">GOLF COURSE DETAIL</p>
          <h1>{course.zh}</h1>
          <h2>{course.name}</h2>
          <p>{course.summary}</p>
          <strong className="heroSlogan">{course.slogan}</strong>
        </div>
      </section>

      <section className="detailIntro">
        <div className="detailIntroCopy">
          <p className="sectionKicker">COURSE PROFILE</p>
          <h2>球场档案</h2>
          <p>{course.summary}</p>
          <div className="detailLocation">
            <MapPin size={20} />
            <span>{course.location}</span>
          </div>
        </div>
        <div className="profileVisual">
          <div
            className="profileImage"
            style={{ backgroundImage: `url(${sitePath(course.sections[1]?.image ?? course.heroImage)})` }}
            aria-hidden="true"
          />
          <div className="profileBadge">
            <span>{course.zh}</span>
            <strong>{course.name}</strong>
          </div>
        </div>
        <div className="statGrid">
          {course.stats.map((stat) => (
            <article key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <nav className="detailSectionNav" aria-label="Golf course detail sections">
        {course.sections.map((section) => (
          <a href={`#${section.id}`} key={section.id}>
            <span>{section.eyebrow}</span>
            <strong>{section.title}</strong>
          </a>
        ))}
      </nav>

      <section className="detailContent">
        {course.sections.map((section, index) => (
          <article className="detailSection" id={section.id} key={section.title}>
            <aside className="detailSectionIndex" aria-hidden="true">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <small>{section.eyebrow.split("·")[1]?.trim()}</small>
            </aside>
            <div
              className="detailSectionImage"
              style={{ backgroundImage: `url(${sitePath(section.image)})` }}
              aria-hidden="true"
            />
            <div className="detailSectionBody">
              <div className="detailSectionTitle">
                <p>{section.eyebrow}</p>
                <h2>{section.title}</h2>
                <strong>{section.subtitle}</strong>
              </div>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <ul>
                {section.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
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
