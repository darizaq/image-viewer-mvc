export class Model {
  constructor(baseModel) {
    this.baseModel = baseModel;
  }

  updateModel(model) {
    const modelKeys = Object.keys(this.baseModel);

    Object.entries(model).forEach(([key, value]) => {
      if (modelKeys.includes(key)) this.baseModel[key] = value;
    });
  }

  getModel() {
    return Object.assign({}, this.baseModel);
  }
}
