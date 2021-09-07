class ImageHelper {
  getImageName(filename) {
    return filename.substring(0, filename.lastIndexOf("."));
  }

  getImageNameFromUrl(url) {
    return this.getImageName(
      url.substring(0, url.indexOf("?")).substring(url.lastIndexOf("/") + 1)
    );
  }

  getDataFromFile(file) {
    return {
      url: URL.createObjectURL(file),
      caption: this.getImageName(file.name)
    };
  }

  getDatatFromUrl(url) {
    return {
      url,
      caption: this.getImageNameFromUrl(url)
    };
  }
}

export const imageHelper = new ImageHelper();
