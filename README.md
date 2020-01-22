<head>
    <title>DS Portfolio</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700,900&display=swap">

    <style>

body{
    font-family: 'Montserrat', sans-serif;
    background-image: url(images/bbrick.png);
    
}

.tred{
    color: black;
}

.title{
    color: red;
}

.centruoti{
    text-align: center;
}

.profile{
    max-height: 400px;
    max-width: 400px;
    border-radius: 50px;
}

.socialNav i{
    margin-left: 25px;
    margin-right: 15px;
    margin-top: 2px;
}

.footer p{
    font-style: oblique;
    font-size: 19px;
}

.tabl{
    border: 1px solid rgb(221, 27, 27);
}

.tblue{
    color: #007bff;
}

.row{
    background-color: whitesmoke;
    opacity: 0.92;
}

.opas{
    background-color: white;
    opacity: 0.92;
}

h1,h2,h3{
    font-weight: 900;
}

h4,h5,h6{
    font-weight: 700;
}

/*
BUTTONS
*/

.btn-outline-secondary{
    background-color: transparent !important;
    border-color: #011627;
    color: #011627 !important;
    border-radius: 0;
    position: relative;
}

.btn-outline-secondary:before{
    content: '';
    position: absolute;
    background-color: rgb(221, 27, 27);
    top: 0;
    left: 0;
    height: 100%;
    width: 0%;
    z-index: -1;
    transition: 0.5s;
}

.btn-outline-secondary:hover:before{
    width: 100%;
}

.btn-secondary{
    background: #011627 !important;
    border-radius: 0;
    border-color: #011627 !important;
}

.btn-secondary:hover{
    background-color: rgb(221, 27, 27) !important;
}

.btn-primary{
    background-color: #83F3ED !important;
    border-color: #83F3ED;
    border-radius: 0 !important;
    color: #011627 !important;
}

.btn-primary:hover{
    background-color: rgb(221, 27, 27) !important;
    color: #83F3ED !important;

}

/*
Navbar
*/

.navbar{
    background: #FFF;
    border-bottom: 1px solid #eee;
}

.nav-link,
.navbar-brand{
    color: #011627;
}

.nav-link:hover,
.navbar-brand:hover{
    color: #777;
}

.navbar-brand{
    font-size: 1.8rem;
}

/*
Call to action
*/

.call-to-action{
    background: #011627;
    color: #fafaff;
}

.heading-line{
    height: 3px;
    width: 10%;
    background: #83F3ED;
}

/*
Services
*/

.services i{
    font-size: 2rem;
    color: #83F3ED;
}

/*
Portfolio
*/

.dark{
    background-color: #011627;
    color: rgb(221, 27, 27);
    height: 300px;
}

.dark i{
    font-size: 1.3rem;
    color: #83F3ED;
}

.portfolio .img-fluid{
    height: 300px;
    object-fit: cover;
}

.portfolio .col-lg-3{
    position: relative;
}

.filter{
    position: relative;
    width: 100%;
    height: 100%;
    background: rgb(221, 27, 27);
    opacity: 0.15;
}

/*
Contact Us
*/

iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
}

/*
Footer
*/

.footer{
    background-color: rgb(83, 81, 81);
    color: #fafaff;
}

.footer a{
    color: #fafaff;
}

/*
Responsive
*/

@media(max-width: 900px){
    .navbar .nav-item{
        display: block;
        width: 100%;
        padding: 10px 0px;
        text-align: center;
    }

    .call-to-action .container{
        width: 100% !important;
    }
}
    </style>
</head>

<body>
    <div class="blur"></div>
    <!--
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">DS-P</a>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
                data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"><i class="fa fa-bars"></i></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                <ul class="nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">About Us <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Team</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Gallery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn-outline-secondary" href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    -->

    <!--Home-->
    <section class="home container">
        <div class="row mt-0">
            <div class="col-lg-6 mt-5 py-5 pl-5 centruoti">
                <img class="animated zoomIn img-fluid profile" src="images/as.png" alt="Profile Picture">
            </div>
            <div class="col-lg-6 my-auto">
                <div class="row">
                    <div class="home-content offset-lg-1 col-lg-10 overflow-hidden">
                        <h1 class="animated slideInLeft delay-1s pb-3 tblue"><em>Dziugas Sablauskas</em></h1>
                        <p class="animated slideInLeft delay-2s pb-3 tred"><strong>Hi,</strong> I am an IT Management for Business student in Glasgow Caledonian University <i class="fa fa-university" aria-hidden="true"></i><br><br>
                        In studies we are introduced with IT widely, but mostly I like Web development and this is where I spend part of my free time. I've made few Web projects for companies and ofcourse had some of them built for studies or myself.</p>
                        <button class="animated zoomIn delay-3s btn btn-lg btn-outline-secondary tred" onclick="window.location.href = 'about.html';">Read More</button>
                        <button class="animated zoomIn delay-3s btn btn-lg btn-secondary tblue" onclick="window.location.href = 'contact.html';">Contact Me</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--Call to action
    <section class="call-to-action py-5">
        <div class="container text-center w-50">
            <h2 class="animated slideInDown py-3 tred">Call to action</h2>
            <div class="mx-auto heading-line"></div>
            <p class="py-3">dsf oijsdfi oidsfj odsi oifdso ids oijnawdn aw danwdo dwaoi mowadm awd wamod mowadimwad
                oaiwmd owaimdomw fsosifd nmfd</p>
            <button class="btn btn-lg btn-primary tblue">Learn more</button>
        </div>
    </section>
    //-->

    <!--Services-->
    <section class="services opas">
        <div class="text-center py-5">
            <h1 class="py-3 tred">Skills</h1>
            <div class="mx-auto heading-line"></div>
        </div>
        <div class="container">
            <div class="row">
                <div class="wow animated zoomIn col-md-4 text-center">
                    <i class="fa fa-html5" aria-hidden="true"></i>
                    <h4 class="py-3 tred">HTML 5</h4>
                    <p class="pb-5">Have advanced understand and ability to write code in HTML</p>
                </div>
                <div class="wow animated zoomIn col-md-4 text-center">
                    <i class="fa fa-css3"></i>
                    <h4 class="py-3 tred">CSS 3</h4>
                    <p class="pb-5">Cascading Style Sheet is where I feel like it's must to spend enought time as it is one of main reason why code looks great</p>
                </div>
                <div class="wow animated zoomIn col-md-4 text-center">
                    <i class="fa fa-code"></i>
                    <h4 class="py-3 tred">JavaScript</h4>
                    <p class="pb-5">Believe, that for web developer it's one of the most important things to know, so I spend most of my time to improve my JavaScript writing</p>
                </div>
                <div class="wow animated zoomIn col-md-4 text-center">
                    <i class="fa fa-bars"></i>
                    <h4 class="py-3 tred">Bootstrap</h4>
                    <p class="pb-5">Have built few websites with bootstrap, so already have perception of how i works</p>
                </div>
                <div class="wow animated zoomIn col-md-4 text-center">
                    <i class="fa fa-picture-o" aria-hidden="true"></i>
                    <h4 class="py-3 tred">Gimp</h4>
                    <p class="pb-5">Able to simply manipulate or edit images using Gimp</p>
                </div>
                <div class="wow animated zoomIn col-md-4 text-center">
                    <i class="fa fa-cog" aria-hidden="true"></i>
                    <h4 class="py-3 tred">Back End</h4>
                    <p class="pb-5">Have enough experience with Java, to write intermediate code. Also had past experience with C++</p>
                </div>
                <div class="wow animated zoomIn col-md-4 text-center">
                    <i class="fa fa-bug"></i>
                    <p>Bug Fixing</p>
                    <p class="pb-5">Able to debug, find and resolve defects  that prevent correct operation within front end or back end codes</p>
                </div>
                <div class="wow animated zoomIn col-md-4 text-center">
                    <i class="fa fa-laptop"></i>
                    <h4 class="py-3 tred">Google'ing</h4>
                    <p class="pb-5">Always believed, the key to programming is the ability to search for information</p>
                </div>
            </div>
        </div>
    </section>

    <!--Portfolio-->
    <section class="portfolio container-fluid opas">
        <div class="text-center py-5">
            <h1 class="py-3 tred">Portfolio</h1>
            <div class="mx-auto heading-line"></div>
        </div>

        <div class="row pt-5">
            <div class="col-md-5 p-0 mb-3">
                <img class="img-fluid tabl filter" src="images/wiseteam.PNG" alt="Company WiseTeam website image">
                <h3 class="pl-2 pt-3">WiseTeam</h3>
                <span class="title pl-2">Client Project</span>
            </div>

            <div class="col-md-2"></div>

            <div class="col-md-5 p-0 mb-3">
                <img class="img-fluid tabl filter" src="images/konsultacijos.PNG" alt="Company IK Consulting website image">
                <h3 class="pl-2 pt-3">IK Consulting</h3>
                <span class="title pl-2">Client Project</span>
            </div>
        </div>

        <div class="row pt-5">
            <div class="col-md-1"></div>
            <div class="col-md-4 p-0 mb-3">
                <img class="img-fluid tabl filter" src="images/softconsulting.PNG" alt="Soft Consulting website image">
                <h3 class="pl-2 pt-3">Soft Consulting</h3>
                <span class="title pl-2">Client Project</span>
            </div>

            <div class="col-md-2"></div>

            <div class="col-md-4 p-0 mb-3">
                <img class="img-fluid tabl filter" src="images/lotr.PNG" alt=" College website image">
                <h3 class="pl-2 pt-3">Review Actors</h3>
                <span class="title pl-2">College Project</span>
            </div>
            <div class="col-md-1"></div>
        </div>

        <div class="row pt-5">
            <div class="col-md-1"></div>
            <div class="col-md-4 p-0 mb-3">
                <img class="img-fluid tabl filter" src="images/firstweb.PNG" alt="Dziugas first website image">
                <h3 class="pl-2 pt-3">First Website</h3>
                <span class="title pl-2">College Project</span>
            </div>

            <div class="col-md-2"></div>

            <div class="col-md-4 p-0 mb-3">
                <img class="img-fluid tabl filter" src="images/fire-cracker-spark-in-night-time-photography-668254.jpg" alt=" Personal website image">
                <h3 class="pl-2 pt-3">Grozio Studija</h3>
                <span class="title pl-2">Personal Project</span>
            </div>
            <div class="col-md-1"></div>
        </div>
    </section>

    <!--Contact Us
    <section class="contact">
        <div class="container">
            <div class="text-center py-5">
                <h2 class="py-3 tred">Contact Us</h2>
                <div class="mx-auto heading-line"></div>
            </div>

            <div class="row tblue">
                <div class="col-lg-6">
                    <!--Google Map
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2304.7583810627384!2d25.180257315766674!3d54.713873979100306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9225778aec4b%3A0xe4bf73afe85c55d!2s%C4%AEsruties%20g.%202%2C%20Vilnius%2006244!5e0!3m2!1sen!2slt!4v1576351027121!5m2!1sen!2slt"></iframe>                    
                </div>
                <form class="col-lg-6">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input id="email" class="form-control" type="email" aria-describedby="emailHint"
                            placeholder="Enter email...">
                        <small id="emailHint" class="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                    </div>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input id="name" class="form-control" type="name" placeholder="Enter name...">
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" class="form-control" placeholder="Enter message..." rows="5"></textarea>
                    </div>
                    <button type="submit" class="btn btn-lg btn-outline-secondary">Submit</button>
                </form>
            </div>
        </div>
    </section>
    //-->


    <!--Footer-->
    <footer class="footer mt-5">
            <div class="text-center py-2">
                <h3 class="py-3">DS-Projects</h3>
                <div class="mx-auto heading-line"></div>
            </div>
            <div class="copyright text-center py-3 text-muted">
                <p><b>Always Seeking to Learn More</b></p>
                <div class="socialNav">
                    <a href="https://www.facebook.com/profile.php?id=100007791466332" target="_blank"> <i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                    <a href="https://www.instagram.com/sablauskas.cia/" target="_blank"> <i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="https://www.linkedin.com/in/dziugas-sablauskas-933417170/" target="_blank"> <i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                </div>
            </div>
    </footer>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>

</body>
