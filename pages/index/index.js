// var util = require('components/util');
// require('components/header');
// require('components/left');
// require('components/footer');
// var pinyin = require('vendors/pinyin.js');

require('./style.scss');
require('./page.html');

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

$(document).ready(function() {
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
});