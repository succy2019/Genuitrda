<?php
include('../controller/functions.php');
if (isset($_POST['submit'])) {
    
    $user = new User($host,$username,$password,$dbname);

    $fname =$_POST['fname'];
    $uname =$_POST['uname'];
    $phone =$_POST['phone'];
    $email =$_POST['email'];
    $pass =$_POST['pass'];
$reg = $user->register($fname,$uname,$email,$phone,$pass);
if($reg){

    $to=$email;
  	$subject="Account Creation";
  	
 $headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
$headers .= "From: support@quanten-x.online\r\n";
$headers .= "Reply-To: support@quanten-x.online\r\n";

  $message = '<div style="background: #f5f7f8;width: 100%;height: 100%; font-family: sans-serif; font-weight: 100;" class="be_container"> 

<div style="background:#fff;max-width: 600px;margin: 0px auto;padding: 30px;"class="be_inner_containr"> <div class="be_header">

<div class="be_logo" style="float: left;"> <img src="https://paultechgist.pro/paragons/secure/login/logo.png"> </div>

<div class="be_user" style="float: right"> <p>Dear: '.$fname.'</p> </div> 

<div style="clear: both;"></div> 

<div class="be_bluebar" style="background: #1976d2; padding: 20px; color: #fff;margin-top: 10px;">

<h1>Your Account Has Been created </h1>

</div> </div> 

<div class="be_body" style="padding: 20px;"> <p style="line-height: 25px;"> Thank you for choosing Us  as your trading platform. Your Trading account has been successfully created. Make sure to keep your login details safe for future references.For safety and security ,never share your login details or password with anyone. <br><strong>Your Login Details Are <br>Username- '.$email.'<br> Password-  '.$upass.'<br></strong> 

You’re just a few steps away from trading with us. Happy Trading with us</p> <div style="margin-top: 25px;">

<p>In case you need any further clarification for the same, please do get in touch with our support or send us  an Email at Support@quanten-x.online</p> </div> </div> <div class="be_footer">
<div style="border-bottom: 1px solid #ccc;"></div> <p> quanten-x.online 
Copyright ©2024  </p> </div> </div> </div>';

 mail($to, $subject, $message, $headers);
    echo '<script> alert("YOUR REGISTRATION IS SUCCESSFUL");</script>';
    echo '<script> window.location="login.php";</script>';

}else{

    // $msg = "<div class='alert alert-danger'>
	// 				<span class='glyphicon glyphicon-info-sign'></span> &nbsp; sorry email already taken !
	// 			</div>";

    echo '<script> alert("SORRY EMAIL ALREADY TAKEN");</script>';
    echo '<script> window.location="login.php";</script>';
}

}



?>
<!DOCTYPE html>
<html lang="en">


<!-- Mirrored from product.quanten-x.online/tradegenius/user/register by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 28 May 2024 13:24:33 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <meta name="keywords" content="Genius,Ocean,Sea,Etc,Genius,Ocean,SeaGenius,Ocean,Sea,Etc,Genius,Ocean,SeaGenius,Ocean,Sea,Etc,Genius,Ocean,Sea">
        <meta name="author" content="GeniusOcean">
        <title>Trade Genius</title>

    <link rel="stylesheet" href="../assets/front/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../assets/front/css/animate.css" />
    <link rel="stylesheet" href="../assets/front/css/all.min.css" />
    <link rel="stylesheet" href="../assets/front/css/lightbox.min.css" />
    <link rel="stylesheet" href="../assets/front/css/odometer.css" />
    <link rel="stylesheet" href="../assets/front/css/owl.min.css" />
    <link rel="stylesheet" href="../assets/front/css/main.css" />
    <link rel="stylesheet" href="../assets/front/css/toastr.min.css">
    <link rel="stylesheet" href="../assets/front/css/styleseb96.css?color=00bfff">
            <link href="https://fonts.googleapis.com/css?family=Manrope&amp;display=swap" rel="stylesheet">
    
            <link rel="stylesheet" id="colorr" href="../assets/front/css/font9411.css?font_familly=Manrope">
    
    <link rel="shortcut icon" href="../assets/images/Yo7c3v0R1650180806.png">
    

    	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
				dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'UA-137437974-1');
	</script>
	</head>

<body>
    <!-- Overlayer -->
    <span class="toTopBtn">
        <i class="fas fa-angle-up"></i>
    </span>
    <div class="overlayer"></div>
    <!-- Overlayer -->

    <!-- Loader -->
    <div class="loader">
        <div class="loader-container">
            <div class="loader-chart">
                <div class="loader-horizontal"></div>
                <div class="loader-vertical"></div>
                <div class="loader-line1"></div>
                <div class="loader-line2"></div>
                <div class="loader-line3"></div>
                <div class="loader-line4"></div>
            </div>
        </div>
    </div>
    <!-- Loader -->

    <!-- Header -->
    <header>
        <div class="navbar-top">
    <div class="container">
        <div class="d-flex flex-wrap justify-content-evenly justify-content-md-between">
            <div class="d-flex flex-wrap align-items-center">
                <ul class="social-icons py-1 py-md-0 me-md-auto">
                                                                        <li>
                                <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
                            </li>
                                                                                                <li>
                                <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
                            </li>
                                                                                                <li>
                                <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                            </li>
                                                            </ul>
                <div class="change-language d-md-none">
                    <select name="currency" class="currency selectors nice language-bar">
                                                    <option value="https://product.quanten-x.online/tradegenius/currency/1" selected>
                                USD
                            </option>
                                                    <option value="https://product.quanten-x.online/tradegenius/currency/4" >
                                BDT
                            </option>
                                                    <option value="https://product.quanten-x.online/tradegenius/currency/6" >
                                EUR
                            </option>
                                                    <option value="https://product.quanten-x.online/tradegenius/currency/8" >
                                NGN
                            </option>
                                                    <option value="https://product.quanten-x.online/tradegenius/currency/9" >
                                INR
                            </option>
                                            </select>
                </div>
            </div>
            <ul class="contact-bar py-1 py-md-0">
                <li>
                    <a href="Tel:+0123456789">+0123456789</a>
                </li>
                <li>
                    <a href="Mailto:admin@quanten-x.online">admin@quanten-x.online</a>
                </li>
                <li>
                    <div class="change-language d-none d-md-block">
                        <select name="language" class="language selectors nice language-bar">
                                                            <option value="https://product.quanten-x.online/tradegenius/language/1" selected >
                                    EN
                                </option>
                                                    </select>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
        <div class="navbar-bottom">
    <div class="container">
        <div class="navbar-wrapper">
            <div class="logo me-auto">
                <a href="https://product.quanten-x.online/tradegenius">
                    <img src="../assets/images/Jygvrizc1656849435.png" alt="logo" />
                </a>
            </div>
            <div class="nav-toggle d-lg-none">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="nav-menu-area">
                <div class="menu-close text--danger d-lg-none">
                    <i class="fas fa-times"></i>
                </div>
                <ul class="nav-menu">
                                            <li><a href="https://product.quanten-x.online/tradegenius" target="_self">Home</a></li>
                                            <li><a href="../about/us.html" target="_self">About</a></li>
                                            <li><a href="../service.html" target="_self">Service</a></li>
                                            <li><a href="../blogs.html" target="_self">Blog</a></li>
                                            <li><a href="../faq.html" target="_self">FAQ</a></li>
                    
                                            <li>
                            <a href="../contact.html">Contact</a>
                        </li>
                    
                    <li>
                        <div class="btn__grp ms-lg-3">
                            
                                                            <a href="login.html" class="cmn--btn">Get Started</a>
                                                    </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
    </header>
    <!-- Header -->


    <!-- Hero Content -->
<section class="hero-section bg--overlay bg_img" data-img="https://product.quanten-x.online/tradegenius/assets/images/FGxJBqeK1656413774.png">
    <div class="container">
        <div class="hero-content">
            <h2 class="hero-title">Create Account</h2>
            <ul class="breadcrumb">
                <li>
                    <a href="https://product.quanten-x.online/tradegenius">Home</a>
                </li>

                <li>
                    Create Account                </li>
            </ul>
        </div>
    </div>
</section>
<!-- Hero Content -->

<!-- Account Section -->
<section class="accounts-section">
    <div class="accounts-inner">
        <div class="accounts-inner__wrapper bg--section">
            <div class="accounts-left">
                <div class="accounts-left-content mw-100">
                    <a href="https://product.quanten-x.online/tradegenius" class="top--icon mb-4">
                        <img src="../assets/images/Jygvrizc1656849435.png" alt="logo">
                    </a>
                    <div class="sec-title">
                        <div class="title">Sign Up to Trade Genius</div>
                        <div class="seperator">&nbsp;</div>
                        <p>
                            Make Your Trading Easier
                        </p>
                    </div>

                    <form class="row gy-3"  action="" method="POST">
                        <div class="alert alert-success alert-dismissible fade show" style="display: none;">
  <p class="m-0 text-success"></p>
</div>


<div class="alert alert-danger alert-dismissible fade show" style="display: none;" role="alert">
<?php
if(isset($msg))
{
    echo $msg;
}
?>

</div>
                                   
                        <div class="col-lg-6 col-lg-12 col-xl-6">
                            <label for="name" class="form-label">Your Name</label>
                            <input type="text" name="fname" id="name" class="form-control">
                        </div>

                        <div class="col-lg-6 col-lg-12 col-xl-6">
                            <label for="email" class="form-label">Your Email</label>
                            <input type="email" name="email" id="email" class="form-control">
                        </div>

                        <div class="col-lg-6 col-lg-12 col-xl-6">
                            <label for="username" class="form-label">User Name</label>
                            <input type="text" name="uname" id="username" class="form-control">
                        </div>

                        <div class="col-lg-6 col-lg-12 col-xl-6">
                            <label for="phone" class="form-label">Your Phone</label>
                            <div class="input-group">
                                <select class="input-group-text m-0 form-label" for="phone" name="phone_code">
                                                                            <option value="880">880</option>
                                                                            <option value="262">262</option>
                                                                            <option value="263">263</option>
                                    
                                </select>
                                <input type="text" name="phone" id="phone" class="form-control">
                            </div>
                        </div>


                        <div class="col-lg-6 col-lg-12 col-xl-6">
                            <label for="password" class="form-label">Your Password</label>
                            <input type="password" name="pass" id="password" class="form-control">
                        </div>

                        <div class="col-lg-6 col-lg-12 col-xl-6">
                            <label for="confirm-password" class="form-label">Confirm Password</label>
                            <input type="password" name="password_confirmation" id="confirm-password" class="form-control">
                        </div>

                        <div class="col-12 mt-2">
                            <div class="d-flex flex-wrap justify-content-between">
                                <div class="form-check">
                                    <input type="checkbox" name="remember" id="remember" class="form-check-input" checked>
                                    <label for="remember" class="form-check-label">I accept all <a href="#0" class="text--base">Terms & Condition</a></label>
                                </div>
                                <a href="forgot.html" class="text--base">Forget Password</a>
                            </div>
                        </div>

                        <div class="col-sm-12">
                            <button type="submit" name="submit" class="cmn--btn">Sign Up <div class="spinner-border formSpin" role="status"></div></button>
                        </div>
                        <div class="col-sm-12">
                            Already Registered ? <a href="login.html" class="text--base">Sign In</a>
                        </div>
                    </form>
                </div>
            </div>

            <div class="accounts-right bg--blue">
                <img src="../assets/images/CkzTngcE1649742892.png" alt="images">
                <div class="sec-title mb-0 mt-4 centered">
                    <div class="title mb-4">Simple Trading</div>
                    <h3>Make Your Trading Easier</h3>
                    <div class="seperator">&nbsp;</div>
                    <p>
                        <p>Change your lifestyle signing up here. Invest and easily earn money for much better life</p>                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Accounts Section -->

<!-- CTAs Section -->
<!-- CTAs Section -->
    <section class="ctas-section">
        <div class="container">
            <div class="ctas-wrapper">
                <div class="cta-left">
                    <h5 class="title mt-0 mb-2 text--dark"><i class="fas fa-user-circle"></i> Follow Us</h5>
                    <ul class="social-icons my-0 justify-content-start">
                                                                                    <li>
                                    <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
                                </li>
                                                                                                                <li>
                                    <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
                                </li>
                                                                                                                <li>
                                    <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                                </li>
                                                                        </ul>
                </div>
                <div class="video-button">
                    <a href="https://www.youtube.com/watch?v=-_X6PhkjpzU" class="video--btn" data-lightbox>
                        <i class="fas fa-play"></i>
                    </a>
                </div>

                <div class="cta-right">
                    <div class="cta-right-wrap">
                        <div class="text">
                            <h3 class="title text--white">Still You Need Our Support ?</h3>
                            <p class="text--light">
                                <p>Don’t wait make a smart &amp; logical quote here. Its pretty easy.</p>                            </p>
                        </div>
                        <a href="Tel:12345674895" class="phone text--white">
                            <span class="icon text--base">
                                <i class="fas fa-phone"></i>
                            </span>
                            (406) 555-0120
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- CTAs Section -->
<!-- CTAs Section -->


    <!-- Footer -->
    <!-- Footer Section -->
        <footer>
            <div class="footer-shapes">&nbsp;</div>
            <div class="footer-top position-relative">
                <div class="container">
                    <div class="footer-wrapper">
                        <div class="footer-logo">
                            <a href="https://product.quanten-x.online/tradegenius">
                                <img src="../assets/images/Jygvrizc1656849435.png" alt="logo" />
                            </a>
                        </div>
                        <div class="footer-links">
                            <h5 class="title">About</h5>
                            <ul>
                                                                    <li>
                                        <a href="../support.html">Support</a>
                                    </li>
                                                                    <li>
                                        <a href="../privacy.html">Privacy &amp; Policy</a>
                                    </li>
                                                            </ul>
                        </div>
                        <div class="footer-links mobile-second-item">
                            <h5 class="title">Contact</h5>
                            <ul>
                                <li>
                                    <a href="#0">134 Fifth Ave, New York, NY 12004, United States</a>
                                </li>
                                <li>
                                    <a href="Mailto:demo@example.com">demo@example.com</a>
                                </li>
                                <li>
                                    <a href="Tel:+0123456789">+0123456789</a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer-comunity">
                            <h5 class="title">Community</h5>
                            <p>
                                Stay Excited, Subscriber to our Newsletter
                            </p>
                            <form class="input-group mt-3 footer-input-group" action="https://product.quanten-x.online/tradegenius/subscriber" method="POST">
                                <input type="hidden" name="_token" value="fSgMnI8O7TJzEZ4cqYltzQqR7CXY3yauLdcGlz1K">                                <input type="email" name="email" class="form-control" placeholder="Your email address...">

                                <button class="input-group-text bg--white border-0 text--base">
                                    <i class="fas fa-paper-plane"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom position-relative pb-5">
                <div class="container text-center">
                    <p>
                        COPYRIGHT © 2022. All Rights Reserved By <a href="http://quanten-x.online/">GeniusOcean.com</a>                    </p>
                    <div class="row justify-content-center">
                        <div class="col-xxl-8 col-xl-9">
                            GeniusTrade is a complete solution for an online trading Platform. Anyone can register for trading and can win the trade. This is simple but very robust script.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    <!-- Footer Section -->
    <!-- Footer -->

    <div class="cookie-bar-wrap show js-cookie-consent cookie-consent">
    <div class="container d-flex justify-content-center">
        <div class="col-xl-10 col-lg-12">
            <div class="row justify-content-center">
                <div class="cookie-bar">
                    <div class="cookie-bar-text cookie-consent__message">
                        Your experience on this site will be improved by allowing cookies.
                    </div> 
                    <div class="cookie-bar-action js-cookie-consent-agree cookie-consent__agree">
                        <button class="btn btn-accept cmn--btn text-white">
                            Allow cookies
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    <script>

        window.laravelCookieConsent = (function () {

            const COOKIE_VALUE = 1;
            const COOKIE_DOMAIN = 'product.quanten-x.online';

            function consentWithCookies() {
                setCookie('laravel_cookie_consent', COOKIE_VALUE, 7300);
                hideCookieDialog();
            }

            function cookieExists(name) {
                return (document.cookie.split('; ').indexOf(name + '=' + COOKIE_VALUE) !== -1);
            }

            function hideCookieDialog() {
                const dialogs = document.getElementsByClassName('js-cookie-consent');

                for (let i = 0; i < dialogs.length; ++i) {
                    dialogs[i].style.display = 'none';
                }
            }

            function setCookie(name, value, expirationInDays) {
                const date = new Date();
                date.setTime(date.getTime() + (expirationInDays * 24 * 60 * 60 * 1000));
                document.cookie = name + '=' + value
                    + ';expires=' + date.toUTCString()
                    + ';domain=' + COOKIE_DOMAIN
                    + ';path=/'
                    + '';
            }

            if (cookieExists('laravel_cookie_consent')) {
                hideCookieDialog();
            }

            const buttons = document.getElementsByClassName('js-cookie-consent-agree');

            for (let i = 0; i < buttons.length; ++i) {
                buttons[i].addEventListener('click', consentWithCookies);
            }

            return {
                consentWithCookies: consentWithCookies,
                hideCookieDialog: hideCookieDialog
            };
        })();
    </script>


    <script src="../assets/front/js/jquery-3.6.0.min.js"></script>
    <script src="../assets/front/js/bootstrap.min.js"></script>
    <script src="../assets/front/js/viewport.jquery.js"></script>
    <script src="../assets/front/js/odometer.min.js"></script>
    <script src="../assets/front/js/lightbox.min.js"></script>
    <script src="../assets/front/js/owl.min.js"></script>
    <script src="../assets/front/js/toastr.min.js"></script>
    <script src="../assets/front/js/notify.js"></script>
    <script src="../assets/front/js/main.js"></script>
    <script src="../assets/front/js/custom.js"></script>

    <!-- Chart -->
    <script src="../assets/front/js/sfx-widget.js"></script>
    <script>
        "use strict";
        sfx('marketOverview', {
            containerId: 'sfx-chart',
            height: "450px",
            language: 'auto',
            theme: "light",
            symbols: ["BTCUSD","NINTENDO.JP","AAPL.US","VOLV.SE","GOOG.US","LHA.DE","XAUEUR","BAY.DE","TOYOTA.JP","AUDCAD","USDSEK"],
            customElements: ["header","chartGridLines"],
            categoriesOrder: ["Crypto","Equities JP","Equities US","Equities SE","Equities DE","Precious Metals","Forex"],
        });
    </script>

    <script>
        'use strict';
		let mainurl = 'https://product.quanten-x.online/tradegenius';
        let tawkto = '0';
	</script>


        <script type="text/javascript">
            if(tawkto == 1){
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                    s1.async=true;
                    s1.src='https://embed.tawk.to/5bc2019c61d0b77092512d03/default';
                    s1.charset='UTF-8';
                    s1.setAttribute('crossorigin','*');
                    s0.parentNode.insertBefore(s1,s0);
                })();
            }
        </script>


    <script>
        'use strict';

        
        
        
            </script>

    
</body>


<!-- Mirrored from product.quanten-x.online/tradegenius/user/register by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 28 May 2024 13:24:33 GMT -->
</html>