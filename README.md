# angular-custom-module

###Usage:

```
var myApp = angular.module('enterprise', [ 'exceptionModule' ]);

$.ajax({
        type : "POST",
        url : "./log/logClientErrors",
        contentType : "application/json",
        data : {
              errorUrl : $window.location.href,
              errorMessage : errorMessage,
              cause : (cause || ""),
              browserInfo : window.navigator.userAgent,
              stackTrace : stackTrace
              }
  });
```
