function contactCard(){
  return {
    template: [
      '<div>',
        '<h4>Contact Card</h4>',
        '<label>Name:</label>',
        '{{ contact.name }}',
        '<label>Email:</label>',
        '{{ contact.email }}',
        '<label>Phone:</label>',
        '{{ contact.phone }}',
      '</div>'
    ].join(''),
    scope: '=contact', 
    restrict: 'E',
    replace: true
  };
}

angular
  .module('app')
  .directive('contactCard',contactCard)
