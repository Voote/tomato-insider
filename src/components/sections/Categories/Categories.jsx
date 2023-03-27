import { tomatoColors } from "../../../api/colors";
import { tomatoShapes } from "../../../api/shapes";
import { tomatoSizes } from "../../../api/sizes";
import Sections from "../Sections";

const Categories = () => (
  <>
    <Sections cat={tomatoColors} />
    <Sections cat={tomatoShapes} />
    <Sections cat={tomatoSizes} />
  </>
);

export default Categories;
