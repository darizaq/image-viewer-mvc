import { Model } from "../../core/model";

export class ImageViewerModel extends Model {
  constructor() {
    super({
      url: "",
      caption: ""
    });
  }
}
