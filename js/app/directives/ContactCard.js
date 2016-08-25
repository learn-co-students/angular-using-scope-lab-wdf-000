function ContactCard () {
  return {
    templateUrl: 'contact.html',
    scope: { handle: '=' },
    restrict: 'E'
  }
}

angular
  .module('app')
  .directive('contactCard', ContactCard)
