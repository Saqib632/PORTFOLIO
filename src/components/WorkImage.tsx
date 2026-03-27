import { useMemo, useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
  loading?: "eager" | "lazy";
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const [hasImageError, setHasImageError] = useState(false);

  const imageSrc = useMemo(() => {
    if (!props.image) return "";
    if (props.image.startsWith("/")) return props.image;
    return `/images/${props.image}`;
  }, [props.image]);

  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      try {
        const response = await fetch(`/assets/${props.video}`);
        if (!response.ok) return;
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        setVideo(blobUrl);
      } catch {
        setIsVideo(false);
      }
    }
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link ?? "#"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target={props.link ? "_blank" : undefined}
        rel={props.link ? "noopener noreferrer" : undefined}
        data-cursor={"disable"}
        onClick={(event) => {
          if (!props.link) event.preventDefault();
        }}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        {!!imageSrc && (
          <img
            src={hasImageError ? "/images/placeholder.webp" : imageSrc}
            alt={props.alt ?? "Project preview"}
            loading={props.loading ?? "lazy"}
            decoding="sync"
            onError={() => setHasImageError(true)}
          />
        )}
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </a>
    </div>
  );
};

export default WorkImage;
