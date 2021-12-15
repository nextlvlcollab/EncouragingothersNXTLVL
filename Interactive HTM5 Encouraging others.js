(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Interactive HTM5 Encouraging others_atlas_1", frames: [[0,0,700,550],[702,0,700,550],[0,552,700,550],[0,1104,700,550],[702,552,700,550],[702,1104,700,550]]},
		{name:"Interactive HTM5 Encouraging others_atlas_2", frames: [[0,0,700,550]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.BackgrounfINT = function() {
	this.initialize(ss["Interactive HTM5 Encouraging others_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Speach1INT = function() {
	this.initialize(ss["Interactive HTM5 Encouraging others_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Speach2INT = function() {
	this.initialize(ss["Interactive HTM5 Encouraging others_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Speach3INT = function() {
	this.initialize(ss["Interactive HTM5 Encouraging others_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Star1INT = function() {
	this.initialize(ss["Interactive HTM5 Encouraging others_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Star2INT = function() {
	this.initialize(ss["Interactive HTM5 Encouraging others_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Star3INT = function() {
	this.initialize(ss["Interactive HTM5 Encouraging others_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Speach3INT();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,700,550), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Speach2INT();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,700,550), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Speach1INT();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,700,550), null);


(lib.Star3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Star3INT();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,700,550);


(lib.Star2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Star2INT();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Star2, new cjs.Rectangle(0,0,700,550), null);


(lib.Star1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Star1INT();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Star1, new cjs.Rectangle(0,0,700,550), null);


(lib.Speach3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_14 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.setTransform(350,275,1,1,0,0,0,350,275);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.0714},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0.2143},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.3571},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.6429},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.7857},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:0.9286},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.9333},0).wait(1).to({alpha:0.8667},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7333},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5333},0).wait(1).to({alpha:0.4667},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2667},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1333},0).wait(1).to({alpha:0.0667},0).wait(1).to({alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,700,550);


(lib.Speach2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_14 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(350,275,1,1,0,0,0,350,275);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.0714},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0.2143},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.3571},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.6429},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.7857},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:0.9286},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.9333},0).wait(1).to({alpha:0.8667},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7333},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5333},0).wait(1).to({alpha:0.4667},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2667},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1333},0).wait(1).to({alpha:0.0667},0).wait(1).to({alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,700,550);


(lib.Speach1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_14 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(345,275,1,1,0,0,0,350,275);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.0714},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0.2143},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.3571},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.6429},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.7857},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:0.9286},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.9333},0).wait(1).to({alpha:0.8667},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7333},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5333},0).wait(1).to({alpha:0.4667},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2667},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1333},0).wait(1).to({alpha:0.0667},0).wait(1).to({alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,0,700,550);


// stage content:
(lib.InteractiveHTM5Encouragingothers = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.star1.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.speach1.play();
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.star3.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.Speach3.play();
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.Star2.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.speach2.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_12
	this.star3 = new lib.Star3();
	this.star3.name = "star3";
	this.star3.setTransform(350,277,1,1,0,0,0,350,275);
	new cjs.ButtonHelper(this.star3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.star3).wait(1));

	// Layer_11
	this.Speach3 = new lib.Speach3();
	this.Speach3.name = "Speach3";
	this.Speach3.setTransform(350,277,1,1,0,0,0,350,275);

	this.timeline.addTween(cjs.Tween.get(this.Speach3).wait(1));

	// Speach_2_INT_png
	this.speach2 = new lib.Speach2();
	this.speach2.name = "speach2";
	this.speach2.setTransform(350,277,1,1,0,0,0,350,275);

	this.timeline.addTween(cjs.Tween.get(this.speach2).wait(1));

	// Star_2_INT_png
	this.Star2 = new lib.Star2();
	this.Star2.name = "Star2";
	this.Star2.setTransform(350,271,1,1,0,0,0,350,275);
	new cjs.ButtonHelper(this.Star2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Star2).wait(1));

	// star1
	this.star1 = new lib.Star1();
	this.star1.name = "star1";
	this.star1.setTransform(350,275,1,1,0,0,0,350,275);
	new cjs.ButtonHelper(this.star1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.star1).wait(1));

	// Speach_1_INT_png
	this.speach1 = new lib.Speach1();
	this.speach1.name = "speach1";
	this.speach1.setTransform(355,277,1,1,0,0,0,350,275);

	this.timeline.addTween(cjs.Tween.get(this.speach1).wait(1));

	// Background
	this.instance = new lib.BackgrounfINT();
	this.instance.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(350,271,350,281);
// library properties:
lib.properties = {
	id: 'E2D0B436A9354E24BF273DFDCF3D33C5',
	width: 700,
	height: 550,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Interactive HTM5 Encouraging others_atlas_1.png", id:"Interactive HTM5 Encouraging others_atlas_1"},
		{src:"images/Interactive HTM5 Encouraging others_atlas_2.png", id:"Interactive HTM5 Encouraging others_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E2D0B436A9354E24BF273DFDCF3D33C5'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;