<!DOCTYPE html>
<html data-ng-app="enterprise">
<head>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<title>Client Side Error Logging | AngularJS</title>
<spring:url value="/js/jquery-1.8.0.min.js" var="jQueryUrl"
	htmlEscape="true" />
<spring:url value="/js/angular.min.js" var="angularUrl"
	htmlEscape="true" />
<spring:url value="/js/stacktrace.min.js" var="stackTraceUrl"
	htmlEscape="true" />
<spring:url value="/js/exception-handler.js" var="exceptionHandlerUrl"
	htmlEscape="true" />
<spring:url value="/js/app.js" var="appJsUrl" htmlEscape="true" />

<script src="${jQueryUrl}"></script>
<script src="${angularUrl}"></script>
<script src="${stackTraceUrl}"></script>
<script src="${exceptionHandlerUrl}"></script>
<script src="${appJsUrl}"></script>
</head>
<body>
	<div><data-hello/></div>
	<div data-ng-controller="ErrorController">
		<div>Name:</div>
		<input type="text" data-ng-model="newName" />
		<div>
			<button data-ng-click="add()">Add</button>
		</div>
	</div>
</body>
</html>
