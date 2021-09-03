export const template = `
<section class="image-viewer">
  <section class="image-viewer__controls">
    <section class="drag-and-drop">
      <span class="drag-and-drop__prompt">Drag & drop your image here! or</span>
      <p class="drag-and-drop__file-upload">
        Upload your image
        <label class="file-input">
          from your device
          <input class="file-input--control" type="file" accept="image/*" />
        </label>
      </p>
    </section>
    <form class="search-bar">
      <label class="search-bar__label">Type image url</label>
      <input type="url" name="imageUrl" class="search-bar__input" />
      <button class="search-bar__button">View</button>
    </form>
  </section>
  <figure class="image-viewer__figure">
    <img src="https://i.stack.imgur.com/y9DpT.jpg" alt="" class="image-viewer__figure-image" />
  </figure>
</section>
`;
