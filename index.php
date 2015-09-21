<html>
<title>plc modbus</title>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="shortcut icon" href="img/favicon.ico" />
  <link rel="stylesheet" href="css/bootstrap/dist/css/bootstrap.css">
	<link rel="stylesheet" href="css/app.css">
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/bootstrap/dist/css/bootstrap.css">

</head>
<body ng-app="plcServer">

<nav class="navbar navbar-default" role="navigation">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" ng-click="navbarCollapsed = !navbarCollapsed">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#/">
        GPS
      </a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" collapse="navbarCollapsed">
    	<ul class="nav navbar-nav">
    		<li><a href="#modbus">About modbus</a></li>
    	</ul>
    </div>
</nav>
<div ng-view></div>

<script src="src/js/angular/angular/angular.js"></script>
<script src="src/js/angular/angular-cookies/angular-cookies.js"></script>
<script src="src/js/angular/angular-resource/angular-resource.js"></script>
<script src="src/js/angular/angular-route/angular-route.js"></script>
<script src="src/js/angular/angular-bootstrap/ui-bootstrap.js"></script>
<script src="src/js/angular/angular-bootstrap/ui-bootstrap-tpls.js"></script>
<script src="src/js/angular/angular-translate/angular-translate.js"></script>
<script src="src/js/angular/angular-dragdrop/angular-dragdrop.js"></script>
<script src="src/js/jquery/jquery-1.11.3.min.js"></script>

<script src="src/js/app.js"></script>
<script src="src/js/mainCtrl.js"></script>
</body>
</html>