import HomefooterModule from './homefooter';
import HomefooterController from './homefooter.controller';
import HomefooterComponent from './homefooter.component';
import HomefooterTemplate from './homefooter.html';

describe('Homefooter', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HomefooterModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HomefooterController();
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
      expect(HomefooterTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = HomefooterComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(HomefooterTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(HomefooterController);
    });
  });
});
