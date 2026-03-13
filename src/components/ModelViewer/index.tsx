import "./ModelViewer.css";
import { Sparkle } from "@phosphor-icons/react";
import { useState } from "react";

type Props = {
  image: string;
  blurImage?: string;
};

export function ModelViewer({ image, blurImage }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="modelViewer">
      <div className="modelImageWrapper">
        {blurImage && (
          <img
            src={blurImage}
            className="modelImageBlur"
            alt=""
            aria-hidden
          />
        )}

        <img
          src={image}
          loading="lazy"
          alt="Model preview"
          className={`modelImage ${loaded ? "loaded" : ""}`}
          onLoad={() => setLoaded(true)}
        />
      </div>

      <button className="tryOnButton">
        <Sparkle size={16} />
        Try on
      </button>
    </div>
  );
}