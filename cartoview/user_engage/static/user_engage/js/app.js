/**
 * Created by kamal on 8/11/16.
 */
angular.module('cartoview.userEngage', ['ngMaterial', 'ngResource', 'cartoview.urlsHelper', 'ngImageAppear', 'lfNgMdFileInput']);
angular.module('cartoview.userEngage').config(function ($httpProvider) {
    $httpProvider.defaults.withCredentials = true
});
