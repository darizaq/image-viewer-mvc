export class Controller {
  constructor(configuration) {
    const { modelClass, selector, template, viewClass } = configuration;
    this.model = new modelClass();
    this.view = new viewClass(selector, template);

    console.log(this);
  }
}
