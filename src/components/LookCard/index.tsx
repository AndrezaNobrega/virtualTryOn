import { useState } from "react";
import "./LookCard.css";
import { Sparkle } from "@phosphor-icons/react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type LookCardProps = {
  name: string;
  image: string;
  isSelected?: boolean;
  onClick?: () => void;
};

export function LookCard({ name, image, isSelected, onClick }: LookCardProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`lookCard ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <div className="imageWrapper" style={{ position: "relative" }}>
        {!loaded && <Skeleton width={180} height={240} borderRadius={12} />}

        <img
          src={image}
          alt={name}
          className="lookImage"
          onLoad={() => setLoaded(true)}
          style={{ display: loaded ? "block" : "none" }}
        />

        <div className="lookHover">
          <Sparkle size={16} />
          <span>Try this look</span>
        </div>
      </div>

      <p className="lookName">{name}</p>
    </div>
  );
}
