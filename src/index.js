import { ImageViewerController } from "./components/image-viewer/image-viewer.controller";

new ImageViewerController();

(function () {
  /**
   * Drag & drop functionality
   */
  const setDragAndDropEvents = () => {
    /**
     * Elements
     */
    const imageViewer = document.querySelector(".image-viewer");
    const dragAndDrop = imageViewer.querySelector(".drag-and-drop");
    const fileUpload = imageViewer.querySelector(".file-input--control");
    const viewer = imageViewer.querySelector(".image-viewer__figure");
    const searchBar = imageViewer.querySelector(".search-bar");
    const image = imageViewer.querySelector(".image-viewer__figure-image");
    const searchBarInput = imageViewer.querySelector(".search-bar__input");
    const fallbackImageUrl = "https://i.stack.imgur.com/y9DpT.jpg";
    let imageCaption;

    /**
     * Methods
     */
    const preventAndStopEvent = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };

    const setImageUrl = (url) => (image.src = url);

    const getImageName = (filename) =>
      filename.substring(0, filename.lastIndexOf("."));

    const getImageNameFromUrl = (url) =>
      getImageName(
        url.substring(0, url.indexOf("?")).substring(url.lastIndexOf("/") + 1)
      );

    const setImageCaption = (caption) => (imageCaption.textContent = caption);

    const createCaption = () => {
      imageCaption = document.createElement("figcaption");

      imageCaption.classList.add("image-viewer__figure-caption");
      viewer.appendChild(imageCaption);
    };

    const viewImage = (url, caption) => {
      if (!imageCaption) createCaption();

      setImageUrl(url);
      setImageCaption(caption);
    };

    const viewImageFile = (file) =>
      viewImage(URL.createObjectURL(file), getImageName(file.name));

    /**
     * Events
     */
    dragAndDrop.addEventListener("dragover", (event) => {
      preventAndStopEvent(event);
      dragAndDrop.classList.add("drag-and-drop--active");
    });

    dragAndDrop.addEventListener("dragleave", (event) => {
      preventAndStopEvent(event);
      dragAndDrop.classList.remove("drag-and-drop--active");
    });

    dragAndDrop.addEventListener("drop", (event) => {
      preventAndStopEvent(event);
      dragAndDrop.classList.remove("drag-and-drop--active");
      viewImageFile(event.dataTransfer.files[0]);
    });

    fileUpload.addEventListener("change", (event) =>
      viewImageFile(event.target.files[0])
    );

    searchBar.addEventListener("submit", (event) => {
      event.preventDefault();

      const url = searchBarInput.value;

      if (url) viewImage(url, getImageNameFromUrl(url));
    });

    image.addEventListener("error", () =>
      viewImage(fallbackImageUrl, "Image couldn't be loaded!")
    );
  };

  //setDragAndDropEvents();
})();
