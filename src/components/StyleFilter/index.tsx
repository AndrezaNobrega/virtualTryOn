import "./StyleFilter.css";
import {
  Heart,
  TShirt,
  Handbag,
  ShieldCheck,
  Fire,
  SquaresFour
} from "@phosphor-icons/react";

const styles = [
  { id: "all", label: "All", icon: SquaresFour },
  { id: "minimal", label: "Minimal", icon: Heart },
  { id: "casual", label: "Casual", icon: TShirt },
  { id: "chic", label: "Chic", icon: Handbag },
  { id: "classic", label: "Classic", icon: ShieldCheck },
  { id: "bold", label: "Bold", icon: Fire },
];

type Props = {
  selectedStyle: string;
  onSelectStyle: (style: string) => void;
  availableStyles: string[];
};

export function StyleFilter({
  selectedStyle,
  onSelectStyle,
  availableStyles,
}: Props) {
  const filteredStyles = styles.filter((style) =>
    availableStyles.includes(style.id)
  );

  return (
    <div className="stylesContainer">
      {filteredStyles.map((style) => {
        const Icon = style.icon;
        const isActive = selectedStyle === style.id;

        return (
          <button
            key={style.id}
            className={`styleButton ${isActive ? "active" : ""}`}
            onClick={() => onSelectStyle(style.id)}
          >
            <Icon size={20} />
            <span>{style.label}</span>
          </button>
        );
      })}
    </div>
  );
}
