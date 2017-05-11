import angular from 'angular';
import Navbar from './navbar/navbar';
import User from './user/user';
import homeheader from './homeheader/homeheader';
import homepanel from './homepanel/homepanel';
import homefooter from './homefooter/homefooter';


let commonModule = angular.module('app.common', [
  Navbar,
  User,
  homeheader,
  homepanel,
  homefooter,
])
  
.name;

export default commonModule;
