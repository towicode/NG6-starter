import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeheaderComponent from './homeheader.component';

let homeheaderModule = angular.module('homeheader', [
  uiRouter
])

.component('homeheader', homeheaderComponent)

.name;

export default homeheaderModule;
