import { Model } from "../../core/model";
import { imageViewerConstants as constants } from "./image-viewer.constants";

export class ImageViewerModel extends Model {
  constructor() {
    super({
      url: constants.fallbackImageUrl,
      caption: ""
    });
  }
}
