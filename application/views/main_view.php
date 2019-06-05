<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Weather</title>
    <link rel="Shortcut icon" type="text/css" href="<?php echo base_url();?>assets/style/img/07-Weather.png">
    <link rel="stylesheet" href="<?php echo base_url();?>assets/style/arctic.css">
    <link href="https://fonts.googleapis.com/css?family=Lobster|Anton|Oswald|Muli|Open+Sans" rel="stylesheet">
    <link href="<?php echo base_url();?>assets/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
    <script type="text/javascript" src="//code.jquery.com/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB8B04MTIk7abJDVESr6SUF6f3Hgt1DPAY&callback=initMap"
  type="text/javascript"></script>
</head>

<body>
    <!-- TEAM 3BROS -->
    <section class="team" id="3bros">
        <div class="firstheading">
            <div class="test">
                <div class="firstline">Welcome To The ...</div>
                <div class="uppercase">It's Nice To Meet You</div>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="team-member">
                    <img class="mx-auto rounded-circle" src="<?php echo base_url();?>assets/style/team/1.jpg">
                    <h4>Bao Truong</h4>
                    <p class="text-muted">Members</p>
                    <ul class="list-inline social-buttons font">
                        <li class="list-inline-item">
                            <a href="https://www.instagram.com/baobao.55/" target="_blank">
                                <i class="fa fa-instagram"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="https://www.facebook.com/BaoTruong55" target="_blank">
                                <i class="fa fa-facebook"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-4">
                <div class="team-member">
                    <img class="mx-auto rounded-circle" src="<?php echo base_url();?>assets/style/team/2.jpg">
                    <h4>Long Vo</h4>
                    <p class="text-muted">Leader</p>
                    <ul class="list-inline social-buttons">
                        <li class="list-inline-item">
                            <a href="https://www.instagram.com/longvox/" target="_blank">
                                <i class="fa fa-instagram"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="https://www.facebook.com/LongVox" target="_blank">
                                <i class="fa fa-facebook"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-4">
                <div class="team-member">
                    <img class="mx-auto rounded-circle" src="<?php echo base_url();?>assets/style/team/3.jpg">
                    <h4>Quang Le</h4>
                    <p class="text-muted">Members</p>
                    <ul class="list-inline social-buttons">
                        <li class="list-inline-item">
                            <a href="https://www.instagram.com/q.photographer/" target="_blank">
                                <i class="fa fa-instagram"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="https://www.facebook.com/LeHongQuangg" target="_blank">
                                <i class="fa fa-facebook"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-12 text-center">
                <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                <h3 class="section-subheading text-muted">Bầu trời năm ấy không xanh mãi. Em tôi bây giờ đã phải lòng
                    ai?</h3>
            </div>
        </div>
        <div class="more">
            <a class="col" href="#seen">More</a>
        </div>
    </section>
    <!-- WEATHER -->
    <section id="seen">
        <div class="firstheading">
            <div class="test">
                <div class="firstline">Thông tin thời tiết.</div>
                <!-- <div class="uppercase">Tra cứu thông tin thời tiết</div> -->
            </div>
        </div>
        <div class="info"></div>
        <div id="info">
            <p id="info_upgrade">Mời bạn sử dụng google chrome bản mới nhất để trải nghiệm hết tính năng</p>
        </div>
        <div id="custom-search-input" class="search">
            <input id="results" type="text" class="searchTerm" name="searchTerm" placeholder="Thời tiết ở Hồ Chí Minh hôm nay như thế nào?">
            <button id="start_button" onclick="startButton(event)" style="border: 0;background-color:transparent;padding: 0;">
                <img id="start_img" src="./assets/style/img/mic.gif" alt="Start">
            </button>
            <button type="submit" class="searchButton">
                <i class="fa fa-search"></i>
            </button>

        </div>
        

        <div class="something">
            <div class="kq">
                <div class="uppercase">Kết quả tra cứu:</div>
                <div class="result"></div>
            </div>
        </div>
    </section>
    <script src="<?php echo base_url();?>assets/js/Location.js"></script>
    <script src="<?php echo base_url();?>assets/js/speechtotext.js"></script>
</body>

</html>