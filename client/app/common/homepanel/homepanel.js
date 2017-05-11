import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homepanelComponent from './homepanel.component';

let homepanelModule = angular.module('homepanel', [
  uiRouter
])

.component('homepanel', homepanelComponent)

.name;

export default homepanelModule;
