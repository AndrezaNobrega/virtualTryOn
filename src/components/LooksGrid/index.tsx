import { useRef, useEffect, useState } from "react";
import { LookCard } from "../LookCard";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import "./LooksGrid.css";
import { looks } from "../../data/mockLooks";

export type Look = {
  id: number;
  style: string;
  name: string;
  image: string;
};



type Props = {
  selectedStyle: string | null;
  selectedLook: Look | null;
  onSelectLook: (look: Look | null) => void;
};

export function LooksGrid({
  selectedStyle,
  selectedLook,
  onSelectLook,
}: Props) {
  const gridRef = useRef<HTMLDivElement>(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const filteredLooks =
    selectedStyle === "all"
      ? looks
      : looks.filter((look) => look.style === selectedStyle);

  const checkScroll = () => {
    const el = gridRef.current;
    if (!el) return;

    const isOverflowing = el.scrollWidth > el.clientWidth;

    setShowLeft(el.scrollLeft > 0);
    setShowRight(
      isOverflowing && el.scrollLeft + el.clientWidth < el.scrollWidth - 1
    );
  };

  useEffect(() => {
    checkScroll();
  }, [filteredLooks]);

  const scroll = (direction: "left" | "right") => {
    if (!gridRef.current) return;

    const amount = 220;

    gridRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });

    setTimeout(checkScroll, 300);
  };

  return (
    <div className="looksContainer">
      {showLeft && (
        <button className="scrollButton left" onClick={() => scroll("left")}>
          <CaretLeft size={18} />
        </button>
      )}

      <div className="looksGrid" ref={gridRef} onScroll={checkScroll}>
        {filteredLooks.map((look) => (
          <LookCard
            key={look.id}
            name={look.name}
            image={look.image}
            isSelected={selectedLook?.id === look.id}
            onClick={() => onSelectLook(look)}
          />
        ))}
      </div>

      {showRight && (
        <button className="scrollButton right" onClick={() => scroll("right")}>
          <CaretRight size={18} />
        </button>
      )}
    </div>
  );
}
