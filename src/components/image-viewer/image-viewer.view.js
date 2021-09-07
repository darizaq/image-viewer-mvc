import { imageHelper } from "../../helpers/image.helper";
import { imageViewerConstants as constants } from "./image-viewer.constants";
import { View } from "../../core/view";

export class ImageViewerView extends View {
  onViewUpdated() {
    this.setElementsRef();
    this.setEvents();
  }

  setElementsRef() {
    this.dragAndDrop = this.elementRef.querySelector(
      constants.dragAndDropSelector
    );
    this.fileUpload = this.elementRef.querySelector(
      constants.fileUploadSelector
    );
    this.searchBar = this.elementRef.querySelector(constants.searchBarSelector);
    this.searchBarInput = this.elementRef.querySelector(
      constants.searchBarInputSelector
    );
    this.image = this.elementRef.querySelector(constants.imageSelector);
  }

  setEvents() {
    this.dragAndDrop.addEventListener("dragover", (event) => {
      this.preventAndStopEvent(event);
      this.toggleDragAndDropActive(true);
    });

    this.dragAndDrop.addEventListener("dragleave", (event) => {
      this.preventAndStopEvent(event);
      this.toggleDragAndDropActive(false);
    });

    this.dragAndDrop.addEventListener("drop", (event) => {
      this.preventAndStopEvent(event);
      this.toggleDragAndDropActive(false);
      this.updateImage(
        imageHelper.getDataFromFile(event.dataTransfer.files[0])
      );
    });

    this.fileUpload.addEventListener("change", (event) =>
      this.updateImage(imageHelper.getDataFromFile(event.target.files[0]))
    );

    this.searchBar.addEventListener("submit", (event) => {
      const url = this.searchBarInput.value;

      event.preventDefault();

      if (url) this.updateImage(imageHelper.getDatatFromUrl(url));
    });

    this.image.addEventListener("error", () =>
      this.updateImage({
        url: constants.fallbackImageUrl,
        caption: "Image couldn't be loaded!"
      })
    );
  }

  toggleDragAndDropActive(active) {
    active
      ? this.dragAndDrop.classList.add(constants.dragAndDropActiveClass)
      : this.dragAndDrop.classList.remove(constants.dragAndDropActiveClass);
  }

  preventAndStopEvent(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  updateImage(data) {
    this.updateModel(data);
  }
}
