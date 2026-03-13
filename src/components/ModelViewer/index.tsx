import "./ModelViewer.css";
import { Sparkle } from "@phosphor-icons/react";

type Props = {
  image: string;
};

export function ModelViewer({ image }: Props) {
  return (
    <div className="modelViewer">
      <img src={image} alt="Model preview" className="modelImage" />

      <button className="tryOnButton">
        <Sparkle size={16} />
        Try on
      </button>
    </div>
  );
}
