const renderedAttribute = "initialized";

export class View {
  constructor(selector, template, initialModel) {
    this.template = template;
    this.elementRef = this.getElementRef(selector);
    this.render(initialModel);
    this.onViewUpdated();
  }

  onViewUpdated() {}

  getElementRef(selector) {
    return document.querySelector(`${selector}:not([${renderedAttribute}])`);
  }

  render(model) {
    this.elementRef.innerHTML = Object.entries(model).reduce(
      (template, [key, value]) => template.replaceAll(`{{${key}}}`, value),
      this.template
    );

    if (!this.elementRef.getAttribute(renderedAttribute)) {
      this.elementRef.setAttribute(renderedAttribute, true);
    }

    this.onViewUpdated();
  }

  updateModel(model) {
    this.elementRef.dispatchEvent(
      new CustomEvent("glModelUpdate", { detail: { model } })
    );
  }
}
