import { keyboardsData } from "./keyboardData";
import { mouseData } from "./mouseData";
import { cabinetData } from "./cabinetData";
import processorData from "./processorData";
import graphicData from "./graphicData";

// Helper to prefix IDs
const prefixData = (data, prefix) => {
  return data.map((item) => ({
    ...item,
    id: `${prefix}-${item.id}`,
    category: prefix.charAt(0).toUpperCase() + prefix.slice(1),
    // For demo: create an images gallery from the single image
    images: [item.image, item.image, item.image, item.image].filter(Boolean)
  }));
};

export const allProducts = [
  ...prefixData(keyboardsData, "keyboard"),
  ...prefixData(mouseData, "mouse"),
  ...prefixData(cabinetData, "cabinet"),
  ...prefixData(processorData, "processor"),
  ...prefixData(graphicData, "graphic"),
];

export const getProductById = (id) => {
  return allProducts.find((product) => product.id === id);
};
