/* grunt-remove-template */
/*
var templateOptions = {
    video : "https://stream.adspot.ch/ch.audi/201609/sitebar_video_de/publish/web/media/sitebar.mp4",
    image : "http://placehold.it/500x1000",
    url : "http://www.tamedia.ch",
    svgColor : "white",
    backgroundColor : "red"
};
*/
/* grunt-remove-template-end */


var htmlTemplate = '<div id="container" class="hidden small"> <svg id="decresaseBtn" viewBox="0 0 490 490"> <g> <polygon points="31.38,339.21 110.117,339.21 0,449.325 36.898,486.222 147.013,376.108 147.013,454.843 199.193,454.843 199.193,287.03 31.38,287.03 "></polygon> <polygon points="458.302,339.21 458.302,287.03 290.488,287.03 290.488,454.843 342.669,454.843 342.669,376.108 452.782,486.222 489.682,449.325 379.564,339.21 " ></polygon> <polygon points="458.302,150.472 379.564,150.472 489.682,40.357 452.782,3.46 342.669,113.574 342.669,34.839 290.488,34.839 290.488,202.652 458.302,202.652 " ></polygon> <polygon points="147.013,113.574 36.898,3.46 0,40.357 110.117,150.472 31.38,150.472 31.38,202.652 199.193,202.652 199.193,34.839 147.013,34.839" ></polygon> </g> </svg> %%Video%%</div>';
var videoTemplate  ='<div style="top: '+ templateOptions.videoPosition +'%" class="videoWrapper"> <video id="vid" muted src="%%Video%%" autoplay="autoplay" preload="true" loop="loop"></video> <div class="controls"> <svg id="muteBtn"> <g> <path d="m14.90822,4.89683c-0.1951,0 -0.3902,0.04645 -0.53885,0.14865l-8.82606,4.38516l-4.23651,0c-0.73396,0 -1.31927,0.58531 -1.31927,1.31927l0,9.11407c0,0.67822 0.58531,1.26352 1.31927,1.26352l4.23651,0l8.82606,4.43161c0.82686,0.43666 1.84883,-0.1951 1.84883,-1.17062l0,-18.1817c0.00929,-0.72467 -0.57602,-1.30998 -1.30998,-1.30998l0,0.00001l0,0.00001zm-1.26352,17.40129l-7.21879,-3.60475c-0.1951,-0.0929 -0.3902,-0.14865 -0.58531,-0.14865l-3.27029,0l0,-6.48484l3.27958,0c0.1951,0 0.3902,-0.04645 0.58531,-0.14865l7.20951,-3.60475l0,13.99164l0,-0.00001l-0.00001,0.00001z"/> <path d="m29.47588,18.94422l0,0l-3.61405,-3.63262l3.62333,-3.62333c0.87332,-0.82686 0.24156,-2.23903 -0.92905,-2.23903c-0.34375,0.04645 -0.67822,0.14865 -0.87332,0.3902l-3.64192,3.66049l-3.64192,-3.66049c-0.24156,-0.24156 -0.58531,-0.3902 -0.92905,-0.3902c-1.17062,0 -1.75593,1.41217 -0.92905,2.23903l3.66049,3.64192l-3.60475,3.62333c-1.31927,1.21707 0.58531,3.07519 1.80237,1.80237l3.61405,-3.61405l3.63262,3.61405c1.24494,1.25423 3.09377,-0.5946 1.83025,-1.81166l-0.00001,0l0,-0.00001l0.00001,0z"/> </g> </svg> <svg id="unmuteBtn"> <g> <path d="m14.90822,4.89683c-0.1951,0 -0.3902,0.04645 -0.53885,0.14865l-8.82606,4.38516l-4.23651,0c-0.73396,0 -1.31927,0.58531 -1.31927,1.31927l0,9.11407c0,0.67822 0.58531,1.26352 1.31927,1.26352l4.23651,0l8.82606,4.43161c0.82686,0.43666 1.84883,-0.1951 1.84883,-1.17062l0,-18.1817c0.00929,-0.72467 -0.57602,-1.30998 -1.30998,-1.30998l0,0.00001l0,0.00001zm-1.26352,17.40129l-7.21879,-3.60475c-0.1951,-0.0929 -0.3902,-0.14865 -0.58531,-0.14865l-3.27029,0l0,-6.48484l3.27958,0c0.1951,0 0.3902,-0.04645 0.58531,-0.14865l7.20951,-3.60475l0,13.99164l0,-0.00001l-0.00001,0.00001z"/> <path d="m20.57584,10.97377l0,0c-0.65949,0 -1.18541,0.63054 -1.18541,1.42122l0,4.88418c0,1.89162 2.37081,1.89162 2.37081,0l0,-4.88418c0,-0.79068 -0.52592,-1.48127 -1.18541,-1.42122l0.00001,0z" /> <path d="m24.64964,8.50166c-0.65949,0 -1.18541,0.63054 -1.14366,1.42122l0,9.8184c-0.04174,1.89162 2.37081,1.89162 2.32072,0l0,-9.8184c0.00835,-0.79068 -0.51757,-1.42122 -1.17706,-1.42122z" /> <path d="m28.73176,6.02954c-0.61774,0.05004 -1.14366,0.68058 -1.14366,1.42122l0,14.70259c-0.04174,1.89162 2.37081,1.89162 2.32072,0l0,-14.70259c0.05009,-0.79068 -0.51757,-1.42122 -1.17706,-1.42122z" /> </g> </svg> <svg id="playBtn"> <g> <path stroke-width="8"d="M6.095241302193102,22.24486673174804 L14.999999381857211,7.755133590664155 L23.90475746152137,22.24486673174804 L6.095241302193102,22.24486673174804 z" transform="rotate(90.1378402709961 14.999999046325684,15.000000000000002) "/> </g> </svg> <svg id="pauseBtn"> <g> <rect stroke-width="7" x="10.220883540809155" y="5" width="4" height="20" /> <rect stroke-width="7" x="18.253011614084244" y="5" width="4" height="20" /> </g> </svg> </div> </div>';


var SideBar = function (options) {
    this.options = options;
    this.init();
};

SideBar.prototype = {

    init: function () {

        this.renderTemplate();


        this.clickThroughUrl = this.options.url;
        this.bgImageSrc = this.options.image;
        this.container = document.getElementById("container");
        this.video = document.getElementById("vid");

        this.animClass = "anim";
        this.hiddenClass = "hidden";
        this.smallClass = "small";
        this.closeBtn = document.getElementById("decresaseBtn");



        if(this.video){
            this.muteBtn = document.getElementById("muteBtn");
            this.unmuteBtn = document.getElementById("unmuteBtn");
            this.pauseBtn = document.getElementById("pauseBtn");
            this.playBtn = document.getElementById("playBtn");
            this.unmuteBtn.style.display = "none";
            this.playBtn.style.display = "none";
        }


        this.totmConnect = window.connector;

        this.margin = 20;

        var _this = this;
        this.preloadRessources(function () {
            _this.handleResize();
            _this.startAnimation();
            _this.bindUIEvents();
        });
    },

    renderTemplate: function (){

        var template = htmlTemplate;
        var video = this.options.video.length > 0 ? videoTemplate.replace("%%Video%%",this.options.video) : "";
        template = template.replace("%%Video%%",video);
        var template = this.domElementFromString(template);
        while(template.length > 0){
            document.body.appendChild(template[0]);
        }
        var style = '#container{background-image:url("'+this.options.image+'")} svg{fill:'+this.options.svgColor+'}';
        if(this.options.backgroundColor.length > 0){
            style += 'body{background-color:'+this.options.backgroundColor+';}';
        }
        this.appendStyleToHead(style);
    },

    appendStyleToHead : function(css){
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet){
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);
        return style;


    },

    domElementFromString: function(html){
      var div = document.createElement('div');
      div.innerHTML = html;
      return div.childNodes;
    },

    startAnimation: function () {
        var _this = this;
        _this.container.className = _this.container.className.replace(_this.hiddenClass, _this.animClass);
        window.setTimeout(function () {
            _this.container.className = _this.container.className.replace(_this.smallClass, "");
            _this.container.addEventListener("transitionend", function () {
                _this.container.className = _this.container.className.replace(_this.animClass, "");
            }, false);
        }, 100);
    },


    preloadRessources: function (cb) {
        var _this = this;
        _this.bgImage = new Image();
        _this.bgImage.src = _this.bgImageSrc;

        _this.bgImage.onload = function () {
            _this.vh = _this.bgImage.width / _this.bgImage.height;
            cb.call(_this);
        }

    },

    bindUIEvents: function () {
        var _this = this;
        this.resizeFnc = this.handleResize.bind(this);
        window.addEventListener("resize", this.resizeFnc);

        _this.closeBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            _this.handleClose();
        }, false);

        _this.container.addEventListener("click", function () {
            _this.handleElemClicked();
        }, false);


        if(this.video){
            _this.muteBtn.addEventListener("click", function (e) {
                e.stopPropagation();
                _this.setVideoMute();
            }, false);

            _this.unmuteBtn.addEventListener("click", function (e) {
                e.stopPropagation();
                _this.setVideoMute();
            }, false);

            _this.pauseBtn.addEventListener("click", function (e) {
                e.stopPropagation();
                _this.setVideoPlayPause();
            }, false);

            _this.playBtn.addEventListener("click", function (e) {
                e.stopPropagation();
                _this.setVideoPlayPause();
            }, false);
        }


    },

    handleClose: function () {
        window.removeEventListener("resize", this.resizeFnc);
        this.closeBtn.style.display = "none";
        this.margin = 0;
        if (this.totmConnect) {
            this.totmConnect.pushDataToTOTM({
                decreaseIframe: true
            });
        }
        this.handleResize();
    },

    handleElemClicked: function () {
        if(this.video){
            this.setVideoMute(true);
        }
        window.open(this.clickThroughUrl, "target=_blank");
    },

    setVideoMute: function (state) {
        if (!state) {
            state = !this.video.muted;
        }
        this.video.muted = state;

        if (state) {
            this.unmuteBtn.style.display = "none";
            this.muteBtn.style.display = "inline";
        } else {
            this.muteBtn.style.display = "none";
            this.unmuteBtn.style.display = "inline";
        }

    },

    setVideoPlayPause: function (state) {
        if (!state) {
            state = !this.video.paused;
        }

        if (state) {
            this.video.pause();
            this.pauseBtn.style.display = "none";
            this.playBtn.style.display = "inline";
        } else {
            this.video.play();
            this.playBtn.style.display = "none";
            this.pauseBtn.style.display = "inline";
        }

    },

    handleResize: function () {

        var areaHeight = window.innerHeight;
        var areaWidth = window.innerWidth;

        areaHeight = areaHeight - this.margin;
        areaWidth = areaWidth - this.margin;

        var imageWidth;
        var imageHeight;

        if (this.vh >= 1) { // landscape
            imageWidth = areaWidth;
            imageHeight = imageWidth / this.vh;
            if (imageHeight > areaHeight) {
                imageHeight = areaHeight;
                imageWidth = areaHeight * this.vh;
            }
        } else { // portrait
            imageHeight = areaHeight;
            imageWidth = imageHeight * this.vh;
            if (imageWidth > areaWidth) {
                imageWidth = areaWidth;
                imageHeight = areaWidth / this.vh;
            }
        }

        this.container.style.maxWidth = imageWidth + "px";
        this.container.style.maxHeight = imageHeight + "px";
        this.container.style.margin = this.margin / 2 + "px";
        if(this.video){
            this.video.parentNode.style.maxWidth = imageWidth + "px";
        }

    }
};

var totmConfig = {
    refresh: false,
    expandIframe: "expandReady"
};

function expandReady(status) {
    window.sidebar = new SideBar(templateOptions);
}

/*
if (window === top.window) {
    expandReady();
}
*/
expandReady();

