import "./ModelSelector.css";
import { Check } from "@phosphor-icons/react";

type Model = {
  id: string;
  image: string;
};

type Props = {
  models: Model[];
  selectedModelId: string;
  onSelectModel: (id: string) => void;
};

export function ModelSelector({
  models,
  selectedModelId,
  onSelectModel,
}: Props) {
  return (
    <div className="modelSelector">
      {models.map((model) => {
        const isActive = model.id === selectedModelId;

        return (
          <button
            key={model.id}
            className={`modelItem ${isActive ? "active" : ""}`}
            onClick={() => onSelectModel(model.id)}
          >
            <img src={model.image} alt="Model" />

            {isActive && (
              <div className="selectedIndicator">
                <Check size={14} weight="bold" />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
