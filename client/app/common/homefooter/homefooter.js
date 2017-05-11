import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homefooterComponent from './homefooter.component';

let homefooterModule = angular.module('homefooter', [
  uiRouter
])

.component('homefooter', homefooterComponent)

.name;

export default homefooterModule;
