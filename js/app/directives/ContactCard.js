function ContactCard() {
  return {
    template: ["<h4>Contact Card</h4>",
    "<label>Name:</label>",
    "{{contact.name}}",
    "<label>Email:</label>",
    "{{contact.email}}",
    "<label>Phone:</label>",
  "{{contact.phone}}"].join(''),
    scope: {contact: '='}
  }
}

angular
  .module('app')
  .directive('contactCard', ContactCard);
