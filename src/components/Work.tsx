import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    image: "/images/xtreame.jpg",
    alt: "XtremeSkills",
    title: "XtremeSkills",
    category: "Frontend",
  },
  {
    image: "/images/caps.jpg",
    alt: "CAPS",
    title: "CAPS",
    category: "Fullstack",
  },
  {
    image: "/images/shake.jpg",
    alt: "Sheikh Maltoon Hospital",
    title: "Sheikh Maltoon Hospital",
    category: "Frontend",
  },
  {
    image: "/images/cys.jpg",
    alt: "Phishing Link Detector ",
    title: "Phishing Link Detector",
    category: "Fullstack",
  },
  {
    image: "/images/nexus.jpg",
    alt: "NexusCare",
    title: "NexusCare",
    category: "Fullstack",
  },
  {
    image: "/images/app.jpg",
    alt: "E-commerce App",
    title: "E-commerce App",
    category: "Frontend",
  },
    {
    image: "/images/Fashion.jpg",
    alt: "Fashion Store App",
    title: "Fashion Store App",
    category: "Frontend",
  },
];

const Work = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const viewport = scrollRef.current;
      const track = trackRef.current;

      if (!section || !viewport || !track) return;

      let maxX = 0;

      const calculateDistance = () => {
        maxX = Math.max(0, track.scrollWidth - viewport.clientWidth);
      };

      calculateDistance();

      if (maxX <= 0) {
        gsap.set(track, { x: 0 });
        return;
      }

      const tween = gsap.to(track, {
        x: () => {
          calculateDistance();
          return -maxX;
        },
        ease: "none",
        scrollTrigger: {
          id: "work-horizontal",
          trigger: section,
          start: "top top",
          end: () => {
            calculateDistance();
            return `+=${maxX}`;
          },
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      const onRefreshInit = () => calculateDistance();
      ScrollTrigger.addEventListener("refreshInit", onRefreshInit);

      return () => {
        ScrollTrigger.removeEventListener("refreshInit", onRefreshInit);
        tween.scrollTrigger?.kill();
        tween.kill();
        gsap.set(track, { clearProps: "x" });
      };
    },
    { scope: sectionRef }
  );

  return (
    <div className="work-section" id="work" ref={sectionRef}>
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-scroll" data-cursor="disable" ref={scrollRef}>
          <div className="work-flex" ref={trackRef}>
            {projects.map((project, index) => (
              <div className="work-box" key={index}>
                <WorkImage
                  image={project.image}
                  alt={project.alt}
                  loading={index < 2 ? "eager" : "lazy"}
                />
                <div className="work-info">
                  <div className="work-title">
                    <h3>{String(index + 1).padStart(2, "0")}</h3>

                    <div>
                      <h4>{project.title}</h4>
                      <p>{project.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
