var exceptionModule = angular.module("exceptionModule", []);

// The "stacktrace" library that we included in the Scripts
// is now in the Global scope; but, we don't want to reference
// global objects inside the AngularJS components - that's
// not how AngularJS rolls; as such, we want to wrap the
// stacktrace feature in a proper AngularJS service that
// formally exposes the print method.
exceptionModule.factory("stacktraceService", function() {
	// "printStackTrace" is a global object.
	return ({
		print : printStackTrace
	});
});
// By default, AngularJS will catch errors and log them to
// the Console. We want to keep that behaviour; however, we
// want to intercept it so that we can also log the errors
// to the server for later analysis.
exceptionModule.provider("$exceptionHandler", {
	$get : function(errorLogService) {
		return (errorLogService);
	}
});

// The error log service is our wrapper around the core error
// handling ability of AngularJS. Notice that we pass off to
// the native "$log" method and then handle our additional
// server-side logging.
exceptionModule.factory("errorLogService", function($log, $window,
		stacktraceService) {
	// I log the given error to the remote server.
	function log(exception, cause) {

		// Pass off the error to the default error handler
		// on the AngualrJS logger. This will output the
		// error to the console (and let the application
		// keep running normally for the user).
		$log.error.apply($log, arguments);
		try {
			var errorMessage = exception.toString();
			var stackTrace = stacktraceService.print({
				e : exception
			});
			// Log the JavaScript error to the server.

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

		} catch (loggingError) {
			// For Developers - log the log-failure.
			$log.warn("Error logging failed");
			$log.log(loggingError);
		}
	}
	// Return the logging function.
	return (log);
});