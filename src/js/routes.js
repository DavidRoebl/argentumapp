angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('scan', {
    url: '/scan',
    templateUrl: 'templates/scan.html',
    controller: 'scanCtrl'
  })

  .state('pin', {
    url: '/pin',
    templateUrl: 'templates/pin.html',
    controller: 'pinCtrl'
  })

  .state('event', {
    url: '/event',
    templateUrl: 'templates/event.html',
    controller: 'eventCtrl'
  })

  .state('receipts', {
    url: '/receiptsall',
    templateUrl: 'templates/receipts.html',
    controller: 'receiptsCtrl'
  })

  .state('receipts2', {
    url: '/receiptsdebits',
    templateUrl: 'templates/receipts2.html',
    controller: 'receipts2Ctrl'
  })

  .state('receipts3', {
    url: '/receiptscredits',
    templateUrl: 'templates/receipts3.html',
    controller: 'receipts3Ctrl'
  })

  .state('pastEvents', {
    url: '/past',
    templateUrl: 'templates/pastEvents.html',
    controller: 'pastEventsCtrl'
  })

  .state('futureEvents', {
    url: '/future',
    templateUrl: 'templates/futureEvents.html',
    controller: 'futureEventsCtrl'
  })

  .state('receiptNr1523', {
    url: '/receiptdetail',
    templateUrl: 'templates/receiptNr1523.html',
    controller: 'receiptNr1523Ctrl'
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

$urlRouterProvider.otherwise('/scan')


});