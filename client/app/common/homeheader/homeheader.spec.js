import HomeheaderModule from './homeheader';
import HomeheaderController from './homeheader.controller';
import HomeheaderComponent from './homeheader.component';
import HomeheaderTemplate from './homeheader.html';

describe('Homeheader', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HomeheaderModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HomeheaderController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(HomeheaderTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = HomeheaderComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(HomeheaderTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(HomeheaderController);
    });
  });
});
