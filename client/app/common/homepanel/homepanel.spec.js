import HomepanelModule from './homepanel';
import HomepanelController from './homepanel.controller';
import HomepanelComponent from './homepanel.component';
import HomepanelTemplate from './homepanel.html';

describe('Homepanel', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HomepanelModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HomepanelController();
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
      expect(HomepanelTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = HomepanelComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(HomepanelTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(HomepanelController);
    });
  });
});
