const renderedAttribute = "initialized";

export class View {
  constructor(selector, template) {
    this.template = template;
    this.elementRef = this.getElementRef(selector);
    this.render();
  }

  getElementRef(selector) {
    return document.querySelector(`${selector}:not([${renderedAttribute}])`);
  }

  render() {
    this.elementRef.innerHTML = this.template;

    if (!this.elementRef.getAttribute(renderedAttribute)) {
      this.elementRef.setAttribute(renderedAttribute, true);
    }
  }
}
