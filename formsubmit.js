<html>
<script>

    function checkInput() {
        
    var SQLdictionary = ["1 or 1=1", "1' or '1'='1", "1'1", "1 EXEC XP_", "1 and 1=1", "1' and 1=(SELECT COUNT(*) From tablenames);--", "1 and USER_NAME() = 'dbo'", "'; DESC users; --", "1'1", "1' AND non_existant_table = '1", "' OR username IS NOT NULL OR username = '", "1 AND ASCII SELECT 1,2,3,4,5,6,name FROM sysObjects WHERE xtype = 'U' --", "1 UNI/**/ON SELECT ALL FROM WHERE", "admin;);"];
    var v = document.getElementById("nameBox").value;
	var y = document.getElementById("passBox").value;
    for (var i=0; i < SQLdictionary.length; i++){
        if (SQLdictionary[i] == v){
	        alert("Stop trying to hack the site using the SQLinjection " + SQLdictionary[i] + ". The administrator has been contacted for further pwnage.");
			return false;}
		else if (SQLdictionary[i] == y){
			alert("Stop trying to hack the site using the SQLinjection " + SQLdictionary[i] + ". The administrator has been contacted for further pwnage.");
			return false;
		}
    }
        
    }

</script>
<head lang="en">
	<meta charset="utf-8">
	<title>SQLi Real-Time Detection</title>
	<script type="text/JavaScript" src="formsubmit.js"></script>
</head>
<body>
<div id="container">	
	<header id="header">
		<h1>SQLi Real-Time Detection</h1>
		<hr/>		
	</header>
	<form method="get" action="" id="mainform" onsubmit="">
		<fieldset>
			<legend>Login</legend>
			<p>
				<label>Username:</label>
				<input type="text" id="nameBox" onkeypress="checkInput();" />
			</p>
			<p>
				<label>Password:</label>
				<input type="password" id="passBox" onkeypress="checkInput();" />
			</p>
			<p>
				<input type="submit" id="submit" name="submit" />
			</p>
		</fieldset>
	</form>
	<footer>
		<hr>
		<p><em>Brennan McPherson, Edun Krief, Nick Bedard, and Lianna Raquel</p>
	</footer>
</div>
</body>
<html>
<body>
