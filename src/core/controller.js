export class Controller {
  constructor(configuration) {
    const { modelClass, selector, template, viewClass } = configuration;

    this.model = new modelClass();
    this.view = new viewClass(selector, template, this.model.getModel());

    this.setModelUpdateHandler();
  }

  setModelUpdateHandler() {
    this.view.elementRef.addEventListener("glModelUpdate", (event) => {
      this.modelUpdateHandler(event.detail.model);
    });
  }

  modelUpdateHandler(model) {
    this.model.updateModel(model);
    this.view.render(model);
  }
}
