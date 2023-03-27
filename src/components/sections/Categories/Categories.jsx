import { tomatoColors } from "../../../api/colors";
import { tomatoShapes } from "../../../api/shapes";
import { tomatoSizes } from "../../../api/sizes";
import SectionsWrapper from "../Wrapper/SectionsWrapper";

const tomatoesCategories = [
  {
    title: "Tomato Colors",
    data: tomatoColors,
  },
  {
    title: "Tomato Shapes",
    data: tomatoShapes,
  },
  {
    title: "Tomato Sizes",
    data: tomatoSizes,
  },
];

const Categories = () => (
  <>
    {tomatoesCategories.map(({ title, data }) => (
      <SectionsWrapper key={title} title={title} data={data} />
    ))}
  </>
);

export default Categories;
