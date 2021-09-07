import { Controller } from "../../core/controller";
import { ImageViewerModel } from "./image-viewer.model";
import { ImageViewerView } from "./image-viewer.view";
import { template } from "./image-viewer.template";

const configuration = {
  modelClass: ImageViewerModel,
  selector: "gl-image-viewer",
  template,
  viewClass: ImageViewerView
};

export class ImageViewerController extends Controller {
  constructor() {
    super(configuration);
  }
}
