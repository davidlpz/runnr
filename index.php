<?php
$url = 'http://www.thebanggang.es/runnr/';
require('lang.php');
$lang = filter_input(INPUT_GET, 'lang', FILTER_DEFAULT);
if (is_null($lang)) $lang = 'es';
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>runnr | <?php echo $texto[$lang]['home_title']; ?></title>
<meta name="description" content="<?php echo strip_tags($texto[$lang]['description']); ?>" />
<link rel="canonical" href="<?php echo $url; ?>" />
<link href='http://fonts.googleapis.com/css?family=Lato:300,700,900' rel='stylesheet'>
<link rel="stylesheet" href="<?php echo $url; ?>style.css" />
<link rel="shortcut icon" href="<?php echo $url; ?>img/favicon.ico" />
<link rel="chrome-webstore-item" href="https://chrome.google.com/webstore/detail/ilkdnhplbaiedaaclckpbkkllcmdgkco">
<!-- Google Authorship and Publisher Markup -->
<link rel="author" href="https://plus.google.com/u/0/b/107868292914484976004/107868292914484976004"/>
<!-- Schema.org markup for Google+ -->
<meta itemprop="name" content="runnr | <?php echo $texto[$lang]['home_title']; ?>">
<meta itemprop="description" content="<?php echo strip_tags($texto[$lang]['description']); ?>">
<meta itemprop="image" content="<?php echo $url; ?>img/runnr.png">
<!-- Twitter Card data -->
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@thebgang">
<meta name="twitter:title" content="runnr | <?php echo $texto[$lang]['home_title']; ?>">
<meta name="twitter:description" content="<?php echo strip_tags($texto[$lang]['description']); ?>">
<meta name="twitter:creator" content="@thebgang">
<meta name="twitter:image" content="<?php echo $url; ?>img/runnr.png">
<!-- Open Graph data -->
<meta property="og:title" content="runnr | <?php echo $texto[$lang]['home_title']; ?>" />
<meta property="og:type" content="website" />
<meta property="og:url" content="<?php echo $url; ?>"/>
<meta property="og:image" content="<?php echo $url; ?>img/runnr.png" />
<meta property="og:description" content="<?php echo strip_tags($texto[$lang]['description']); ?>" />
<meta property="og:site_name" content="<?php echo $url; ?>" />
<!--[if lt IE 9]>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
<![endif]-->
</head>
<body>
<section id="home">
	<nav class="menu">
		<a href="<?php echo $url; ?>" <?php if ($lang == 'es') echo 'class="active"'; ?>>ES</a> /
		<a href="<?php echo $url; ?>en/" <?php if ($lang == 'en') echo 'class="active"'; ?>>EN</a>
	</nav>
	<div class="row">
		<h1 class="title"><img src="<?php echo $url; ?>img/runnr_logo_<?php echo $lang; ?>.png" alt="Logo runnr" /></h1>
		<img class="img01" src="<?php echo $url; ?>img/img_01.png" alt="Image 1" />
		<p><?php echo $texto[$lang]['home_one']; ?></p>
		<p><?php echo $texto[$lang]['description']; ?></p>
	</div>
</section>
<section id="about">
	<div class="row">
		<h2><?php echo $texto[$lang]['about_title']; ?></h2>
		<p><?php echo $texto[$lang]['about_one']; ?></p>
		<button id="install-button" onclick="chrome.webstore.install()"><?php echo $texto[$lang]['about_button']; ?></button>
		<p><?php echo $texto[$lang]['about_two']; ?></p>
		<img src="<?php echo $url; ?>img/achievements.png" alt="Achievements" />
	</div>
</section>
<section id="contact">
	<div class="row">
		<h2><?php echo $texto[$lang]['contact_title']; ?></h2>
		<img src="<?php echo $url; ?>img/img_02.png" alt="Image 2" />
		<p><?php echo $texto[$lang]['contact_one']; ?></p>
		<p><?php echo $texto[$lang]['contact_two']; ?></p>
	</div>
</section>
<footer>
	<a href="http://thebanggang.es/" target="_blank" title="The Bang Gang"><img src="<?php echo $url; ?>img/tbg_logo.png" alt="The Bang Gang" /></a>
</footer>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-47173416-1', 'thebanggang.es');
  ga('send', 'pageview');
</script>
</body>
</html>