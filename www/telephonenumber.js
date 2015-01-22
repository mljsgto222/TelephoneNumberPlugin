var TelephoneNumber = function() {
};

var TelephoneNumberError = function(code, message) {
  this.code = code || null;
  this.message = message || '';
};

TelephoneNumber.NO_TELEPHONE_NUMBER = 0;

TelephoneNumber.prototype.get = function(success, fail) {
  cordova.exec(success, fail, 'TelephoneNumber', 'get', []);
};

//-------------------------------------------------------------------
if (!window.telephoneNumber) {
  window.telephoneNumber = new TelephoneNumber();
}

if (module.exports) {
  module.exports = TelephoneNumber;
}
