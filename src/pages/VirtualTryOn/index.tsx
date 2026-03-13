import { useState } from "react";
import { StyleFilter } from "../../components/StyleFilter";
import { LooksGrid, type Look } from "../../components/LooksGrid";
import { looks } from "../../data/mockLooks";

import { models } from "../../data/mockModels";
import { ModelViewer } from "../../components/ModelViewer";
import { ModelSelector } from "../../components/ModelSelector";

export function VirtualTryOn() {
  const [selectedStyle, setSelectedStyle] = useState("all");
  const availableStyles = ["all", ...new Set(looks.map((look) => look.style))];
  const [selectedModelId, setSelectedModelId] = useState(models[0].id);
  const [selectedLook, setSelectedLook] = useState<Look | null>(null);

  const selectedModel =
    models.find((model) => model.id === selectedModelId) ?? models[0];

  const handleSelectStyle = (style: string) => {
    setSelectedStyle(style);
    setSelectedLook(null);
  };

  return (
    <div className="container">
      <h1>Virtual Try-On</h1>

      <ModelViewer image={selectedModel.image} />

      <ModelSelector
        models={models}
        selectedModelId={selectedModelId}
        onSelectModel={setSelectedModelId}
      />

      <StyleFilter
        availableStyles={availableStyles}
        selectedStyle={selectedStyle}
        onSelectStyle={handleSelectStyle}
      />

      <LooksGrid
        onSelectLook={setSelectedLook}
        selectedLook={selectedLook}
        selectedStyle={selectedStyle}
      />
    </div>
  );
}
