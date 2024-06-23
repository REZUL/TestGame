(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,550,315);


(lib.hodDogIMG = function() {
	this.initialize(img.hodDogIMG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,576,434);


(lib.HotDogBackground = function() {
	this.initialize(img.HotDogBackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2000,1156);


(lib.HotDogGun = function() {
	this.initialize(img.HotDogGun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,483);


(lib.HotDogIMG = function() {
	this.initialize(img.HotDogIMG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,250);


(lib.porngames_clear = function() {
	this.initialize(img.porngames_clear);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,21);


(lib.rifleIMG = function() {
	this.initialize(img.rifleIMG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,282);


(lib.YouWin = function() {
	this.initialize(img.YouWin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,523);// helper functions:

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


(lib.Wining = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.YouWin();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,523);


(lib.Symbol82 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D7D7D7").ss(0.5,1,1).p("AjCiEIACANIAAABIAQCBIBMhzIAEgGAhkhoIBIAVIghgqAhyhsIAOAEAi5iZIhAApIA5gGADMBHIABANIAEBGIApgzACDgUIAsAoAC3ANIgHAGIgBABIhUBEIBygEADdAGIhYgc");
	this.shape.setTransform(41.575,54.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0071A8").ss(0.5,1,1).p("AjNjbIAUBVIhYAuIBTAMIAGAAIAJBtIAvhbIA+AJIAsAGIhKhFIAnhWIhKAlIg/g6AESAtIgMAKIhLguIAeBJIhTA3IBdgEIASAuIARApIAMgv");
	this.shape_1.setTransform(42.05,46.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAJiMQARgGAUgHQAagKATgJQANAHAPAHAhSAqIAQAqIg0AkIA7gEIAXA5IAOg4IA2gFIgngaIAKgsAgHAqIgdAZIgogZ");
	this.shape_2.setTransform(56.525,20.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#7B0607").ss(0.5,1,1).p("AKBGWIAAAuIhaAAIAAguIAAhCIBaAAgAKVFCIAABUIgUAAAhVnCQAJgDAKgDApjjTIAAEEQADgPAMgIQANgKAVABQAXACALATQAJAPgBAZQAAABAAABIgEAyQAKAkAfADQAKABAMgDQgFAMABAKQAAAdAlANIAyAAQAaAAAQAKQATAMAAAXQAAAUgLANQgFAGgHADQgEABgEABIF+AAAl3E+QADABAEABIgNAAIjmAAIAAjyIAAgLQACAGAEAFQAHAHANACQALABAIgFQAEgCADgDQADgDABgFQABgCAAgEQABgJgLgDQgKgDgLAEQACgLAEgBQACgBAMABQAUABADAgIgDAxQAAA7A8AAQAAAAACAAIAAAAQACAAADAAQAAADAAAEQgEA1AxAIQAFABAFAAIAyABQAfAFAAAUQAAAMAAABQgCAEgLACQAEgLgBgKQgDgLgJAAQgDAAgEABQgIACgEAIQgGAIAAALQAAAMAIAIQADACADACgAokGWIAAAzIhYAAIAAgzIgYAAIAAppAp8GWIAAhAIBYAAIAABAAInGWIxLAA");
	this.shape_3.setTransform(66.05,45.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#049EE9").s().p("AD1CzIgSguIhcAEIBSg3IgehJIBMAuIALgKIAACAIgMAvgAi4hMIgGAAIhTgMIBYguIgThVIAKAAIA/A6IBKglIgnBWIBKBFIgsgGIg+gJIgvBbg");
	this.shape_4.setTransform(42.05,46.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D7D7D7").s().p("ADDEWIgBgNIABANIhxAEIBUhFIgsgoIABgCIBZAdIhSA3IBcgFIATAvIgpAygACmDVIAAAAIAAAAIAHgGgAjKBLIAAgBIgBgNIABANIAAABIg4AGIA/gpIAHABIAJBtIAvhcIA+AKIAgArIhIgWIAFgGIgFAGIgNgEIANAEIhLB0gACVlUIATgHIBcAAIAAAtQgQgHgNgHQgTAJgaAKIglANg");
	this.shape_5.setTransform(42.5,34.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFBE9").s().p("Ag7F2IAIgDQAHgDAFgGQAKgMAAgVQAAgXgSgMQgQgKgaAAIgzAAQgkgMAAgeQgBgJAFgMQgNACgKgBQgegCgKglIAEgyIAAgCQABgYgJgPQgLgUgXgCQgVgBgNAKQgMAIgDAPIAAkEICmAAIAUBVIhYAuIBTAMIhAAnIA5gGIAQCDIBMh1IBHAWIgggqIArAFIhJhEIAnhWIhKAlIg/g6ID/AAIARAqIg1AkIA8gDIAWA4IAOg4IA3gEIgogaIAMgtIAGAAIAAi3IAlgNQAZgJATgJQANAGAQAHIAADnIAKAAIAADqIgMAKIhLguIAdBJIhYgdIgCACIAsApIhUBEIBygEIAEBGIApgzIARAqIAMgwIAACMgAB1ieIBEAAIgcAZg");
	this.shape_6.setTransform(37.175,40.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCF7C9").s().p("AkPGFIAAjzIAGAAQAGAIANABQAMABAIgFIAHgFQACgDACgEIABgGQAAgJgLgEQgJgCgLADQACgKADgBQADgBALAAQAVACACAgIgCAwQAAA7A7ABIACAAIAAAAIAFgBIAAAIQgEA0AxAJIAKABIAyABQAgAFAAAUQAAALgBACQgCADgKACQAEgLgCgJQgDgLgJAAIgHABQgIACgEAHQgGAIAAALQAAANAIAHIAAAHgAD9mEIATAAIgTAGg");
	this.shape_7.setTransform(32.125,38.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC2D2E").s().p("AKBE1IAAhCIhaAAIAABCIxLAAIAAhAIhXAAIAABAIgZAAIAAppIAxAAIAAEFQAEgPALgIQAOgKAUABQAXACALATQAJAPgBAZIAAACIgEAxQAKAkAfADQAJABANgDQgFAMABAKQAAAdAlANIAyAAQAaAAAQAKQATAMAAAXQgBAUgKANQgFAGgHADIgIACIF+AAIAAACIJzAAIAABUgApjgSIAADxIDmAAIANAAIgHgCIgGgEQgIgIAAgMQAAgLAGgIQAEgIAIgCIAHgBQAJAAACALQACAKgDALQAKgCABgEQABgBAAgMQAAgUgfgFIgygBIgKgBQgxgIADg1IABgHIgFAAIAAAAIgCAAQg8AAABg7IACgwQgDgggUgBQgLgBgDABQgEABgCALQALgEAKADQALADAAAJIgBAGQgCAFgDADIgHAFQgHAFgMgBQgNgCgHgHQgEgFgCgGgAiajqIg7AEIA0gkIgQgqIAGAAIAoAZIAdgZIALAAIgLAsIAnAaIg3AFIgNA4g");
	this.shape_8.setTransform(66.05,55.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9F1819").s().p("Ap+A7IAAgzIAAg/IBYAAIAAA/IAAAzgAIlA2IAAguIAAhCIBaAAIAABCIAAAug");
	this.shape_9.setTransform(66.275,85.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol82, new cjs.Rectangle(-1,-1,134.1,93.5), null);


(lib.Symbol78 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.HotDogIMG();
	this.instance.setTransform(0,0,0.2113,0.2113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74,52.9);


(lib.Symbol77 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.HotDogGun();
	this.instance.setTransform(-184,-111,0.46,0.46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184,-111,368,222.2);


(lib.Symbol76 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFB59A","rgba(229,140,107,0.247)"],[0,1],0,0,0,0,0,9.3).s().p("AhAA7QgcgYAAgjQAAgiAcgYQAbgZAlAAQAnAAAbAZQAbAYAAAiQAAAjgbAYQgbAZgnAAQglAAgbgZg");
	this.shape.setTransform(9.25,8.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,16.7);


(lib.Symbol75 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFB59A","rgba(229,140,107,0.247)"],[0,1],0,0,0,0,0,9.7).s().p("AhEA9QgcgZAAgkQAAgjAcgaQAdgZAnAAQAoAAAcAZQAcAaAAAjQAAAkgcAZQgcAagoAAQgnAAgdgag");
	this.shape.setTransform(9.65,8.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.3,17.4);


(lib.Symbol74 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF8787","#AF4545"],[0,1],0,0,0,0,0,1.1).s().p("AgDAFIgBgBIAAgBIgBgDIABgBIABgCIABgBIABgBIADAAIAAAAQAEAAAAADIAAACIgBABIgDADIgCABIgBABIgCgBg");
	this.shape.setTransform(3.25,1.7692);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FF8787","#AF4545"],[0,1],0,0,0,0,0,2).s().p("AgGAJIgDgDIgBgGIABgDIACgDIAEgCQADgCAEABQAHACAAAHQAAAEgCACIgBABIgBABIgDABIgGABIgEgBg");
	this.shape_1.setTransform(2.175,0.5833);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#AF4545").ss(0.5,1,1).p("AAAAbQgCgDgHgMQgEgHAAgIQAAAAAAgBQAAgGAFgHQAAAAABgBQAGgIAIAAQACAAAFAD");
	this.shape_2.setTransform(1.725,2.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#431818").ss(0.5,1,1).p("AATgNQgGgJgEgCQgDgCgGgBAATgNIAAAAQgBgBgBgBQgIgGgGAFAAGAAIAAAAQADAAADABAAAABQAEgBACAAIADgFAgVgVQABAJgBADQgBADgBAAAgOAYQAGAEABAAQAIAAAJgLAgJgBQgCADAAADQAAANAQAAQADAAACgBQAEgCAEgFQAGgHAAgGQAAgGgFgE");
	this.shape_3.setTransform(3.1,2.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AF4545").s().p("AgMAZIgJgPQgEgHAAgHIAAgBQAAgHAFgHIABAAQAGgJAJAAQADAAADADIAJADQAEACAGAJIAAAAIgCgCIgBgBQgDgCgDAAIgBAAIgBAAQgDAAgDACQADgCADAAIABAAIABAAQADAAADACIABABIACACIAAAAQAFAEAAAFQAAAHgGAHQgEAFgEABIgFACQgPAAAAgOQgBgDACgDQgCADABADQAAAOAPAAIAFgCQgJALgIAAIgHgEgAANADQgCgCgCgBIgBABIADgEIgDAEIgHACIAHgCIABgBQACABACACgAgTgIIgCAEIACgEIABgDIgBgIIABAIIgBADgAAIABg");
	this.shape_4.setTransform(2.9,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-1.3,7.2,7.8);


(lib.Symbol73 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AF4545").s().p("Ag7A6QgZgWgBgiQgBggAYgZQAZgYAkgBQAjgBAaAXQAaAXAAAhQABAhgYAYQgZAZgkABIgCAAQgiAAgZgXg");
	this.shape.setTransform(8.6265,8.0749);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.3,16.2);


(lib.Symbol72 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#692727").ss(0.5,1,1).p("AhfgKQgGAqAXAiQAYAhAnAEQAnAFAhgbQAhgbAGgrQAHgqgYgiQgYghgogEQgmgFghAbQghAcgGAqg");
	this.shape.setTransform(9.7322,10.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#833131").s().p("AgPBnQgngEgYghQgXgiAGgqQAGgqAhgcQAhgbAmAFQAoAEAYAhQAYAigHAqQgGArghAbQgcAXghAAIgLgBg");
	this.shape_1.setTransform(9.7322,10.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,21.5,22.8);


(lib.Symbol71 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AF4545").s().p("Ag9A+QgZgWAAgiQAAggAZgaQAagaAjgCQAkgDAaAWQAZAWAAAhQAAAhgZAaQgaAZgkADIgGAAQggAAgXgTg");
	this.shape.setTransform(8.725,8.1503);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.5,16.3);


(lib.Symbol70 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFB59A","rgba(229,140,107,0.247)"],[0,1],0,0,0,0,0,6.6).s().p("AgsAZQgSgKAAgPQAAgOASgKQATgLAZAAQAaAAASALQATAKAAAOQAAAPgTAKQgSALgaAAQgZAAgTgLg");
	this.shape.setTransform(15.7309,2.5132,0.6927,0.6927);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E58C6B").ss(0.5,1,1).p("ACqANQAAA5gyAkQgyAkhGgFQhFgGgygsQgygsAAg4QAAg4AygkQAygkBFAFQBGAGAyAsQAyAsAAA3g");
	this.shape_1.setTransform(16.975,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E58C6B").s().p("AAACJQhFgGgygsQgygsAAg4QAAg4AygkQAygkBFAGQBGAFAyAsQAyAsAAA3QAAA5gyAkQgsAfg6AAIgSAAg");
	this.shape_2.setTransform(16.975,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,36,29.4);


(lib.Symbol69 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFB59A","rgba(229,140,107,0.247)"],[0,1],0,0,0,0,0,6.6).s().p("AgsAZQgSgKAAgPQAAgOASgKQATgLAZAAQAaAAASALQATAKAAAOQAAAPgTAKQgSALgaAAQgZAAgTgLg");
	this.shape.setTransform(17.7824,2.7441,0.7687,0.7687);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E58C6B").ss(0.5,1,1).p("ACvAAQAABBgzAtQgzAvhJAAQhIAAgzgvQgzgtAAhBQAAhAAzguQAzguBIAAQBJAAAzAuQAzAuAABAg");
	this.shape_1.setTransform(17.5,15.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E58C6B").s().p("Ah7BvQgzgvAAhAQAAhAAzguQAzguBIAAQBJAAAzAuQAzAuAABAQAABAgzAvQgzAthJABQhIgBgzgtg");
	this.shape_2.setTransform(17.5,15.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,37,33.3);


(lib.Symbol68 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#692727").ss(0.5,1,1).p("ABhgKQACAqgaAiQgbAhgoAEQgoAFgegbQgegbgCgrQgDgqAbgiQAbghAogEQAngFAfAbQAeAcACAqg");
	this.shape.setTransform(9.7214,10.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#833131").s().p("AhABRQgegbgCgrQgDgqAbgiQAbghAogEQAngFAfAbQAeAcACAqQACAqgaAiQgbAhgoAEIgLABQghAAgagXg");
	this.shape_1.setTransform(9.7214,10.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,21.5,22.8);


(lib.Symbol67 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#585858","#121212"],[0,1],0,0,0,0,0,4.5).s().p("AAHAmQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBgBgBIADgOIABgEIABgDIAAgJIgCgDIAAgCIgCgDQgHgRgJgGQgGgFAAgCQAAgDAEgBIACAAQADAAADAEIADACQAEAEACAEIACADIABABIAEAIQABAAAAAAQAAAAABABQAAAAAAABQAAAAABABIABAEIACAEIAAADIABACIgBAMQAAAEgBABIgDAOIgCADIgCABIgCgBg");
	this.shape.setTransform(4.325,5.6219);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#585858","#121212"],[0,1],-0.1,0,0,-0.1,0,3.2).s().p("AANAVIgBgEIgCgEIgBgFQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAAAgBgBIgEgGIgBgCIgBgDQgCgDgFgFIgDgCQgDgDgDgBQADAAADACIANALQAHAGAEAHIACAHQABAFgBABIgDACIAAAAg");
	this.shape_1.setTransform(4.8125,3.7618);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#121212").ss(0.5,1,1).p("AgFAJQAGgLACgDQABgCABgBQAAABABAA");
	this.shape_2.setTransform(0.6875,0.8875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.5,1,1).p("AgahXQAnAZACADQAQAOAAAXQAAAEgHARQgIAPAAASQAAAaAXAeQgdgSgHggQAAgCAAgCQgDgXADgsIAAgCQgHAEgIAUQgIASgHAFQADgFAEgMQAEgNAAgIQAAgKgJgRQgIgOgFgD");
	this.shape_3.setTransform(3.95,8.8625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#121212").s().p("AAEAmIgBgEQgDgXADgrIAAgDQgGAFgIATQgJATgHAEQAEgEADgNQAEgNAAgHQAAgLgJgQQgIgPgFgDIAJgPIACgCIABAAIApAcQAQAOABAXQgBAFgHAQQgIAQAAARQAAAaAXAeQgdgSgGggg");
	this.shape_4.setTransform(3.95,8.8375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,9.700000000000001,19.599999999999998);


(lib.Symbol66 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#919191","#333333"],[0,1],0,0,0,0,0,8.2).s().p("AgCBNQgDAAAAgGIAAgoIABgNIAChWIABgGQABgDADABIAAAAQADAAAAAHIAABCIgBAJIgBAMIgCAYIAAAMIAAAQIgBAFQAAABgBAAQAAABAAAAQAAAAAAAAQgBABAAAAIgBgBg");
	this.shape.setTransform(2.125,9.7731);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#919191","#333333"],[0,1],-0.1,0,0,-0.1,0,7.7).s().p("AgFBIIAAgMIACgXIABgNIABgKIAAhBQAAgHgDAAIAAAAIgBgKQABgDACgBIABAAQACAAACADIABAGIAAAkIABAJIABApIgCAPIgDAPIAAALIAAAGQgBABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAIgDgBg");
	this.shape_1.setTransform(2.925,7.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#919191","#333333"],[0,1],0,0,0,0,0,8.2).s().p("AAABOQgDgCABgFIABgJIABgUIABgPIAAgqIgBgIIAAglIgBgFQgCgDgCAAIgBAAIgBgGQACgDADAAQACAAABAFIAGAxQADA/gFAfQAAADgBACQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIAAAAg");
	this.shape_2.setTransform(3.3979,7.5875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.5,1,1).p("AAOCaQgMgNgCgEQgGgIgDgHQgDgIAAgFQANgLASgEQAPgFAFACQgXgOgHglQgFgZADgxQACgygNhHAgegFQgFAUgBAXQgCAXAAAYQAAALADALQABACABADQAEAIAFAHQAPAWAXAFQABAAABAAIAAACQgBgBgBgB");
	this.shape_3.setTransform(3.9125,15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgOCDQgFgIgEgIIgCgFQgDgLAAgLQAAgYABgXQACgXAFgUQgFAUgCAXQgBAXAAAYQAAALADALIACAFQgEgCgBgDQgMgvgDgRIAAgDQgFgaAAgkQAAgtANgcIAPgjQAOgdAGABQADAAACADQAOBHgDAyQgCAxAFAZQAGAlAYAOQgFgCgPAFQgSAEgNALQAAAFACAHQADAIAGAIQADAEAMANQgYgGgOgUg");
	this.shape_4.setTransform(2.9375,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-1.2,10.8,33.2);


(lib.Symbol65 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#919191","#333333"],[0,1],0,0,0,0,0,3.4).s().p("AgEAeIgCgBIgCgEQAAgFACgQIADgNIADgNQAAgEACgCQACgCAEACIABABQAAADgCAFQgDAHgBAOQgDAKAAAEIAAAKQAAAAAAABQAAABAAAAQAAAAgBABQAAAAgBAAIgCABIAAAAg");
	this.shape.setTransform(10.6172,25.1685);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#919191","#333333"],[0,1],0,0,0,0,0,5.5).s().p("AgJAvQgCgBgBgEIgBgNIADgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAABgBIAAgJQAAgFADgKQABgOADgGQABgGgBgCIADgIIABgHQACgDACgBQAEgBABADQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABIgBAEIgBAFIgCAGIgJAZQgDAKAAAHIAAAUQABAFgBACQgCAEgCAAIgCgBg");
	this.shape_1.setTransform(11.4875,25.3161);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#919191","#333333"],[0,1],0,0,0,0,0,7.1).s().p("AgLA+IABgIIAKgkIAAgKIAAgmIACgcIABgFIABAAIABgCQAEgBACAEQABADgBAEIgCAmQgCAQAAARIAAAIIgEAQIgFASQgBAGgCABIgCABQgDAAgBgEg");
	this.shape_2.setTransform(11.8617,10.1562);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#919191","#333333"],[0,1],0,0,0,0,0,8).s().p("AgEBIIgBgHIACgYIADgQIAAgIQAAgRACgQIACgmQABgEgBgDQgCgEgDABIgBACIAAgDIAAgGQACgEADACQABABABAEIABAVQABAzgCAlIgCAcIgCAFIgCABQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_3.setTransform(12.5667,10.0613);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#121212").ss(0.5,1,1).p("AgIiyQAJAHABAEQABADACANQACANgHAwQgGAwAAADQgHAkgFAQQgJAigOAQIACAAQAAAGAKgQQAMgSACgEQAEgIADgHQAJgSAEgGQgFALgLAeQgKAcAAAUQAAAOAFARQAFASAIALQABABABACQAEAGAJAGQACACACACQAZARABAC");
	this.shape_4.setTransform(10.275,19.4125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.5,1,1).p("AAQi0QAAAFAAAFQgCAkgHAmQgIAqgPArQgQAtgPAbQgPAbgPAKQAdgPAQgOQgOApArAdQAGAGALAGQAVALAgAPQAEACAFACIACAAQgTgNgNgWQgPgZAAgVQAAgRANgcQAOgdAAgSQAAgLgCgK");
	this.shape_5.setTransform(7.75,19.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AAtCwIgIgEQgBgCgZgRIgFgEQgHgHgFgFIgDgDQgHgLgFgSQgFgRAAgOQAAgUAKgcIAQgpIgNAYIgIAPIgNAWQgKAQAAgGIgCAAQAOgQAJgiQAFgQAGgkIAIgzQAGgwgCgNIgCgRQASAQAFAvQADAbgBA6IAAABIAAAAIAAAIIACAAQACAKABALQAAASgOAdQgNAcAAARQAAAVAOAZQAOAVASAOg");
	this.shape_6.setTransform(10.8,20.1375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#121212").s().p("AATCZIgSgMQgqgdAOgpQgPANgdAPQAOgJAPgbQAPgcAQgsQAPgrAIgqQAHgmACgkIAAgKQALAHABAEIADAQQACANgHAwIgIAzQgHAkgEAQQgKAigMAQIACAAQAAAGAJgQIANgWIAFACQgKAcAAAUQAAAOAFARQAFASAHALIACADQAFAGAJAGIAFAEQAZARAAACQgggPgVgLg");
	this.shape_7.setTransform(7.225,19.4125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0.5,17.5,38.2);


(lib.Symbol64 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#585858","#121212"],[0,1],0,0,0,0,0,4.3).s().p("AgZAcQgCgBABgEIAHgGIAFgEIAGgFQAIgIAFgIIAFgGIAEgGIACgDQABgDAEgDIABAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAIABADIgBACIgCACIgBAEIgGAHIgFAGIgVAZIgEADIgFADIgCACIgCAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape.setTransform(7.6058,17.7143);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#585858","#121212"],[0,1],0,0,0,0,0,4.9).s().p("AgZAjQgDgBAAgEIAAgBIAFgDIAEgDIAVgZIAEgGIAHgHIABgEIACgCIABgCIABgCIABgFQAAAAAAgBQABgBAAAAQAAAAABgBQAAAAABAAQACgBADABQADACgBADIgBACQgHANgEAGIgcAgIgEADIgDACIgDADIAAAAIgDACIgBAAg");
	this.shape_1.setTransform(8.6361,17.6375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#585858","#121212"],[0,1],0,0,0,0,0,5.4).s().p("AgeAlQgDgBgBgCQAAgEACgBIABAAIADgBIADgBIAEgDQAIgHAYgcIAIgKIAGgMIACgDQAEgCACADQACACgBADIAAABQgBAFgDADIgBABIgBABIAAABIgCACIgUAXIAAABQgLAOgKAJIAAABQgEAEgFABIgDABIgDgBg");
	this.shape_2.setTransform(9.3034,18.2057);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#585858","#121212"],[0,1],-0.1,0,0,-0.1,0,4.6).s().p("AgcAfIABAAQAJgJAMgOIABgBIAEgEIAFgGIAKgNIACgDIAAAAIABgBIAAgBQADgDACgFIAAgBQADgBACACQACADgBADIgBADIgBADIgDAEIgHAKIgDADIgFAGIgIAJIgJAHIgMAHQgDADgDAAIgBgBg");
	this.shape_3.setTransform(10.5518,18.2479);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#121212").ss(0.5,1,1).p("AAYA8QgDgdgRgjQgKgXgHgNQgJgSgCgB");
	this.shape_4.setTransform(11.675,8.2875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.5,1,1).p("AAVh/QgDAWAAAFQAABSgrAeQgMAIgTAMQgOALAAATQAAAHAFAFAg7BRQBAAvANAAIAEAAQgLgKgHgHQgOgPAAgGQAAgIAMgHQASgIAKgFQApgUAAgpQAAgEAAgE");
	this.shape_5.setTransform(7.075,15.0875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#121212").s().p("AASCAQgNAAhAgvIgGgHQgFgFAAgHQAAgTAOgLIAfgUQArgeAAhSIADgbQACABAJASIASAkQARAkADAdIABAIQAAApgpAUIgcANQgMAHAAAIQAAAGAOAPIASARg");
	this.shape_6.setTransform(7.075,15.0875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,1.3,16.2,27.599999999999998);


(lib.Symbol63 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#121212").ss(0.5,1,1).p("AgYAUIATgDQAHgBAGABIAHAAQgCgEgSgDQAQgHAPACIABAAQgHgIgGABQAAgCgBAAQAKgIAJACQgHgGgfgDQgEAAgFADQgGACgGAAIAAABQABAAAIAAQAFAAACACQgGAGgNAAQAAABgBAAQAJAEAEABQgDAEgDACQgEADgDACQAEAEADAAIABABg");
	this.shape.setTransform(17.475,-26.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFB59A","#E58C6B"],[0,1],0,0,0,0,0,2.4).s().p("AABASQgJgBgGgLIgCgHQgBgGAEgGQAFgEAFAAQAFgBADAEIADAEIAFAFQAHAGgEAKQgFAHgIAAIgCAAg");
	this.shape_1.setTransform(14.2353,9.3266);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#121212").s().p("AA4BJQAAgGgDgNQgDgNgHA2IgWhUIAFAFQgBgCACgFQgBgDACADIAGgJIADAHQACAFACACQAAgQACgHIgFgSQAMAYALARIAAgHQAAgFgFgIQgEgKAAgFIAAgFQAAABAAAAQAAAAAAAAQABABAAAAQABAAAAAAIACABQAMALAGAQIABAFIAKAYIAAAMQgFgLgEgGIAAAKQAFAbAAAKQAAANgDAFIgGggIAAgEQgCgJgDgIIAAAAIgBgEQgCAvABARIAAAGQgBAAgIghgAAfAUIgDgBQAFAGgCgFgAhMhEIgBgBQgDABgEgEIAHgFQADgCADgEIgNgGIABgBQANAAAGgGQgCgDgFAAIgJAAIAAgBQAGABAGgDQAFgDAEAAQAgADAHAHQgJgCgKAIQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQAGgBAHAJIgBAAQgPgBgRAGQATADACAEIgHAAQgGgBgIACIgTADg");
	this.shape_2.setTransform(22.775,-18.2724);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#919191","#333333"],[0,1],0,0,0,0,0,1.6).s().p("AgJAGIgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgCAEgDIADgCIAFgBIAHABIADABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABIAAABIgCACIgEABIgEgBIgCAAIgFADIgCABIgCgBg");
	this.shape_3.setTransform(11.3346,-27.63);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#919191","#333333"],[0,1],0,0,0,0,0,1.8).s().p("AgKAHIgCgBQgBgEABgBIABgBIAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAIAEgCIADAAIAEAAIAEAAIACgDIAAgCIABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIAAADIgBAAIgEACIgGABQgEABgCACIgCACIgCAAIgCgBg");
	this.shape_4.setTransform(11.45,-26.9744);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#919191","#333333"],[0,1],0,0,0,0,0,2.4).s().p("AgMAJQgBgBAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIgBgDIACgDQABAAAAAAQABAAAAAAQABABAAgBQABAAAAAAIADgBQACgCAEgBIAFgBIAFgCIAAgBIACABQAGACgDAEIAAABQgCAAgEABIgGABQgEABgEADIgFADIgCAAg");
	this.shape_5.setTransform(11.6891,-26.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#919191","#333333"],[0,1],0,0,0,0,0,2.1).s().p("AgOAGIgBgDIABgCIACAAIAFgBQAEgDAEgCIAGAAQAFgBABgCIACABQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQgBAAAAABQAAAAgBAAIgBAAIgDABIgFABQgIACgCACIgCABIgCABIgCABQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_6.setTransform(11.875,-25.4875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#919191","#333333"],[0,1],0,-0.1,0,0,-0.1,1.6).s().p("AgIAGIgBgCIgBgCIAAgBIACgBQACgBAIgCIAFgBIADgBQACACgDADQgBABgEABIgJAEg");
	this.shape_7.setTransform(12.1814,-24.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#919191","#333333"],[0,1],0,0,0,0,0,3.6).s().p("AANAWQgDgDAAgCQgJgRgOgLQgEgDgBgCIgCgDQABgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAEgCAEADQAIAFAFAHQAJAJAHANIACAFQgBAEgCABIgBAAIgCABQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAg");
	this.shape_8.setTransform(24.3,-24.8286);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#919191","#333333"],[0,1],0,0,0,0,0,4.3).s().p("AASAbIgEgIIgBgDQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgCgEIgFgHQgCgDgDgCIgCgCIgLgKIgKgFIgBAAIAAgEQABgEAFAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAIACACIABADQABACAEADQAOALAJARQAAACADADQACADADgCIABAAIABAEQABAFgEABIgBAAIAAAAIgEgBg");
	this.shape_9.setTransform(23.66,-24.3471);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#919191","#333333"],[0,1],0,0,0,0,0,3.8).s().p("AAVAbQgCAAgCgEIgOgVQgDgFgFgEIgFgDIgIgFIgFgCIAAAAIgCgDIABgDIACgCIABAAIAAgBIALAFIAKAKIACACQADADACADIAFAGIACAEQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAABIABADIAEAIIAEABIgBAEQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_10.setTransform(23.325,-23.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#919191","#333333"],[0,1],0,0,0,0,0,3.9).s().p("AASAZIgDgHIgEgHIgGgIIgDgDIgIgJIgFgDIgNgFQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAAAIAAAAIAFACIAIAFIAFADQAEAEAEAGIAOAUQACADACABIABABQABADgDADIgCAAIAAAAIgEgBg");
	this.shape_11.setTransform(22.9018,-22.8084);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#919191","#333333"],[0,1],0,0,0,0,0,4).s().p("AATAbIgEgLQAAgDgFgFIgCgDIgQgOIgGgDIgHgGIgEgBIgBgEQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIADgBQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAIAMAFIAGADIAIAJIADAEIAGAHIADAHIADAHIAFABIAAACIABAEIgCADIgDABQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_12.setTransform(22.55,-22.1137);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#262626").s().p("ABSAtQgDgEgMgJIgRgMQAFgKACgJIADgCQAfAPAAAJIgCAKIgDAMgAgkgGQgMgKgNgEQgKgCgTgBQADgEACgOIABgDQAOAAATAEQAWAFAAAFIgFAYg");
	this.shape_13.setTransform(15.725,-1.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AA/AjQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIgBgCIABgEQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAABAAIABAAIADACIADAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgCACIgCABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBgBgAAoAWQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAgCQABAAAAAAQAAgBAAAAQABgBAAAAQAAAAABAAIABgBIACABIABABIABABIABACIgBACIgCADIgBAAIgEgBgAg0gVQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgCQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAIAAAAIAEAAIABACIABADIgBADIgDABIgBABQgBAAAAAAQAAgBgBAAQAAAAgBgBQAAAAgBgBgAhEgcIgCgCIAAgCIAAgCIABgCIACgBIABAAIACAAIACACIAAADIAAACIgCACIgBAAIgDAAg");
	this.shape_14.setTransform(18.4,-6.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#F06161","#7E0202"],[0,1],0,0,0,0,0,2.6).s().p("AgOAAQgFgDABgDQABgDADAAQAEgBACADIALAGIAMACQADABABADQAAADgDACIgGABQgKgCgOgJg");
	this.shape_15.setTransform(15.1727,5.0458);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#F06161","#7E0202"],[0,1],0,0,0,0,0,2.1).s().p("AAJALQgBAAgEgEQgDgEgDgBIgFgCQgEgCgBgCQgCgEADgCQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAIAFADIAGACIAEAEIAEAGIAAAEQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgBAAg");
	this.shape_16.setTransform(16.7183,2.355);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#FFB59A","#E58C6B"],[0,1],0,0,0,0,0,2.2).s().p("AgNALQgDgDABgFQACgDADgDQADgDAFgDQAHgGAGADQAFADAAAFQAAAEgFAEIgEACQgIAIgFAAQgFAAgCgDg");
	this.shape_17.setTransform(18.3607,-19.0029);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#FFB59A","#E58C6B"],[0,1],0,0,0,0,0,3.9).s().p("AgPAbQgCgCgBgGQgBgaAUgRQAHgFAEABQAEABACADQACAEgCAEQgBADgEADIgFAFQgDAEgDAGIgCALQAAAHgBADQgCAEgFAAIgBAAQgEAAgCgDg");
	this.shape_18.setTransform(19.4298,-7.1552);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_9},{t:this.shape_11},{t:this.shape_10},{t:this.shape_2},{t:this.shape_3},{t:this.shape_4},{t:this.shape_5},{t:this.shape_7},{t:this.shape_6},{t:this.shape_17},{t:this.shape_12},{t:this.shape_13},{t:this.shape_18},{t:this.shape_14},{t:this.shape_16},{t:this.shape_15},{t:this.shape_1},{t:this.shape}]},15).to({state:[]},1).wait(104));

	// Layer_1
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#121212").ss(0.5,1,1).p("AgZhnQACADACACQAQAZAEAZQACAjADAUQAAACABACQAHAsABAFQADARAKAb");
	this.shape_19.setTransform(25.2375,-11.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#333333").ss(0.5,1,1).p("AgUAFQAMgDAWgGQACAAAFAC");
	this.shape_20.setTransform(29.9375,-1.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#AD6247").ss(0.5,1,1).p("AACigQAMgHANgGQACgBACgBQANgGAGAAQAUAAAOAGAgUiJQgCABgCAAQgLALgJAMQAAABAAAAQgFAFgDAGQgFAHgDAIQgBAAAAAAQAAAAAAABQAAAAAAAAQgEAIgDAHQgEAMgEANQgHAdAAAjQAABAAZAwQAGANAIAKQAQAVAWAHAAXAcQABACABAEQACAEACAFQACADACACQADACADAAQADAAACAAQAMgBAFgBIABAAAAlANIAMAAQAOAJABABQAIAHADAI");
	this.shape_21.setTransform(12.825,-4.9625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(0.5,1,1).p("Ag4i6IADgIQAAAAAAAAQgBAAAAAAQAAAAABAAQAOgTAxgBQALAAAJAAAg4i6IAAAAQAAANALAMQAFAGAGACQAGADAGAAIABAAIAagEQAFgBAFgBQAAAAABAAQASgDAEAAQABAAABAAQAAAAABAAQATAAAOAKQADACADADIAAAAQADADADADQAAABABABQAPAWACAqQAEAUADAUQAAACABABQAAAEABADQAAADAAADQAEAYADASQABAHAAAFQABANAAAHIAAAAAg2jCQgCAEAAAEAg2jCQgCABgDABQgqAOgUAjQgWAmgGALQgiA+AAA7QAAAOACATQADAXACAPAhGh7QAAAAAAAAQAEgDAEgCQAIgFASgJQgIgFgLgGQgHgFAAgOIAGgOAhCh1QAHAAAKAAQAKAAAGgEQADgDALgNIgBAOIAMgIIAAACIgLAPQgDAFgJABAgygqQAGgGACgDQABgBAIAAQAIAAAGADAgnhSQAJgEAPAAQAOAAAOARQAOAOACAMQgOgTgOgJQgQgKgYAAQgFABgFAAQAHgBADgBgAhCh1QgCgCgCgEAhrhBQACgGgBgDIAKACQAMAAAHgIQAHgHAHgSIAAgCQgHAHgDACQgGAEgFABIgBAAQAAgBAGgHQAFgHABgGQgCAAgCADIgFAAQABgCACgCQADgDAFgEQAAAAABgBAgjhsQgCABgCAAQgIAAgJgEQgCgBgBgBQgFgCgCgCAh7gXQADgJAAgLQAAgFgCgKQgCgJAAgIQAMAbABARIAAABQABAAABgCQABgDACgBIABAAIAAADQgBAHgHARQgBgBgCgFQgDgEgEgEgAhrhBIACADQgBgBgBgCgAhjgyQAAgCgGgKIAEAJQABABABACgAg4gwQAAAAAAAAIAAgBQAAABAAAAQADAIADAFIgGACIAAABQAFAAAFAAIABAMIAAADQgDgCgDACQgBACgCABIAAABIgBAAIABgBIADAAQAEAAAMAFQACABACAAQgEgEAAgGQAAgHAFgGQABAAAAAAQAAgBABAAQgKgDgGgEQgDgBgDgCQgDgDgDgDgAh4AEQAFgBAGgEQABgBAAgBQACgCACgCQAFgGACgGQACgGAAgFQAAgLgEgJAiBAfQgCgFADgNQAAgCgBgDQgBgCgCgEQAAAAgBAAQgDgEgCgCAh4AEQACAEABAFAiJBSQgCAAgCAAQgGgCgDgJQgBgEAAgRQAAgrAHgPQAEgIAGAAQAHAAAHAUAh2AhQgDABgDAAQgEAAgBgDQgCAEgDAHQgDAIABAFAAKgQQACgLgGgIAACgTQgFgEgIgDQgDgCgEgBAACgTIAAABQAAAHgFAFQgDADgDABAgZgfQgCgBgBAAAgdgfQACAAACAAQAEAAADACQgBAAgCgBQgCAAgCgBAgLgTQAAADgCABQgCACgDAAQgCAAgCgCQgCgBAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACgAgfgIQAHADACABQABAAAMACQACAAACABQAKABADADQABACAAgEIABgLQgBgBAAAAQABgDAAgCAgsgnQASACANAHQAFACASAMAAJgLQgDgEgEgEAAsBIQAEADADACQAAAAAAAAQACABAAAAQABgBAFAAQAEgBABgIQAAgBAAAAQABgIgGgLQgFgQAFgNQAAgBABgBQAAAAAAAAIAAgBQAAAAABgBQAEgKAJgGAAZA4IgKAGAAXAoQgNABACAPIAHgDQADABADABIAAABQAAAAABAAQAAAAAAAAQAEADABAFAAsBIQABAAAAAAQACgBABgCQACgBAGABAAkBKQAGAAACgCAguggQAIAAAJABABVgVQAEgDAKAAQAHAAAHACABwgdQgGgBgEAAQgJAAgIAJQAAAAAAAAIgBABQAAgBABAAABnAfQAAADgCABQgCACgDAAQgCAAgCgCQgCgBAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACgABXAUQAEgBACAAQAJAAAKAEQAFABADACABXAUQAGABAHADQABABABAAQAIAFAGAEABWAUIABAAABTATQACAAABABIAAAAQABAAAAAAABEAVQAEgDAFAAQACAAAEABQADgEAEgGABRAVQABgBABgBABRAVQADgBACAAQgEAIAAAFQAAABABADQACADAAAAABRAVIgFAHQgEADAAADIANAGIARAIQAGABAEgEQADgEABgHQADADACABAiJBSQAEARAKAVQAVAvAfAaQADACADADQAWAPAZACQAKAAAIgBQAMgCANgEQA8gWAdhOQACgEABgEQADgNACgIQAAgCAAgLQAAAAAAgBQAAgDAAgEABmAwIAUAKAAljVQAgACASALQAVAMASAYQAnA0AKAwQAKAxgCBEAglBmQAIgIAOgFQAAAAABgBQABAAABAAQAQgGAHAAQAFAAAFABQADABAEABQABABABAAQAIADAFAEQAFAFADAKQADAMAAAIQAAAGgDAFAgJBnQARANAEAEQABABAJAEQAMAFgCgKQABAAAEACQABAAABABAgJBnQAJAAADABQAHABANAHQAAADAFABQAHACACACIACADIAEAFQACACAGAJAglBmIAYABQACAAACAAAglBmIgBAAQAVAeAIAIQANAMAYAAQAGAAAEgCQAJgGAEgFAiHBRQgCgBAAACAiHBRQgBABAAAAIgBAAAiCBNQgDAEgBAAQgBAAAAAAAiEACQgFAJgCAJQgCAMgBAC");
	this.shape_22.setTransform(13.8663,-7.8191);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#121212").s().p("AiaCPIgFgmQgCgTAAgOQAAg8Aig9IAcgxQAUgjAqgOIADAGIgGAOQAAAOAHAFIATALIgaAOIgIAFIAAAAIgBABIgIAHIgDAEIAFAAQAAgBABgBQAAAAABAAQAAgBABAAQAAAAABAAQgBAGgFAHIgGAIIABAAQAFgBAGgEIAKgJIAAACQgHASgHAHQgHAIgMAAIgKgCQABADgCAGIAAAAIACADIAEAJIACADQAEAHAAAMQAAAFgCAGQgCAGgFAGIgEAEIgBACQgGAFgFABQgHgVgHAAQgGAAgEAIQgHAQAAArQAAARABAEQADAJAGACQgSAOgOAHgAhkgNIACAOQAAALgDAJQAEAEADAEIADAGQAHgRABgHIAAgDIgBAAIgDAEIgCACIAAgBQgBgQgMgbQAAAIACAJgACQBuIAAgHIAAAAIgBgUIgBgMIgHgrIAAgGIgBgHIgBgDIgHgnQgCgrgPgVIAEgDQAQAZAFAaIAGA2IAAAEIAIAxQAEARAKAbIgNACg");
	this.shape_23.setTransform(11.6625,-12.3125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("ABEBfIgIgxIAAgEIgGg2QgFgagQgZIgDgFIADAFIgEADIgBgCIgGgGIAAAAIgHgFQgNgKgSAAIgBAAIgCAAIgWADIgCAAIgJACIgbAEIgBAAQgGAAgGgDQgGgDgFgFQgLgMAAgNIAAAAIADgIIgBAAIAAAAQAOgTAzgBIAUAAIAGABQAfACATALQAVAMASAYQAnA0AKAvQAKAxgCBFIgBADIgHgCIgkAJQgJgbgEgRgAAsAtIAJABIABAHQgGgCgHAAQgKAAgEADQAHgJAKAAgAg4AEQgRgJgYAAIgKABIAKgCQAJgEAPAAQAOAAAPAQQAOAOACAMQgOgTgOgJgAhygjIgDgCIgHgEIARAAQAKAAAGgEQADgDALgNIgBAOIAMgIIAAACIgLAPQgDAFgJABIgEAAIgEABQgIAAgJgEg");
	this.shape_24.setTransform(19.6913,-15.4039);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7E0202").s().p("AgQAXQgJgIgVgdIABAAQAIgIAOgFIABAAIACgBQASgGAGAAIAJABIAHADIACAAQAIAEAFADQAFAFAEAKQADALAAAIQAAAGgDAFIgIgLIgEgFIgDgDQgBgCgHgBQgFgBgBgDQgNgHgGgBIgMgBQAQANAEADIALAFQALAFgCgKIAGACIACABIAEAFIAIALQgFAFgJAGQgEACgFAAQgYAAgNgMgAgVgNIAFAAIgFAAIgYgBg");
	this.shape_25.setTransform(14.6375,3.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgKBOIgLgFQgEgEgRgNIAMABQAHABANAHQABADAFABQAGACABACIADADIgCgBIgFgCQABAHgEAAIgGgCgABEACQAGAAAEgDQAEgEABgGIAEAEIACASIAAABgAAngMQgBgDAEgDIAGgHIAFgBIgFABIABgCIAEABIAAAAQgFAIAAAFIACAEIACAEgAgZgrQgDgDgLgCIgEgBQAEgBADgDQAFgFAAgHIAAgBQAFAEADAEIAAABIAAAMQAAABAAAAQAAABgBAAQAAAAAAABQAAAAAAAAIgBgBgAhEg4QgNgFgDAAIgEABIAEgEQACgCAEACIAAgDIgBgMIAQABIAAAAQgGAGAAAHQAAAGAEAFIgDgCg");
	this.shape_26.setTransform(17.2375,-3.1438);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#512615").s().p("AA9AoIgQgIIgCgDIgBgEQAAgFAEgIIABAAIANAEIACABIAOAJQgBAHgDAEQgEADgFAAIgCAAgAA0ATQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQABAAAAAAQABAAABAAQAAgBABAAQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAABgAAuAMIABAAIgBAAgAAvAMgAg+gMIgJgEQgEgEAAgGQAAgHAFgGIABAAIAEAAIAEABIADABIAHADQAIADAGAEIAAABQAAAHgGAFQgDADgEABIgMgCgAg+gfQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQABAAAAAAQABAAABAAQAAgBABAAQAAAAABgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAABg");
	this.shape_27.setTransform(17.875,-7.011);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("ABUAoIgOgKIgCgBIgNgEIAGgBQAJAAAKAEIAIADIABAMIgFgDgAA8AoQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQABgBAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAgBgAg2gKQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQABgBAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAgBgAhOgbIgKAAIAAgBIAGgCQgDgFgDgHIAGAFIAGADQAGAEAKADIgBABIgRgBg");
	this.shape_28.setTransform(17.0625,-8.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#AD6247").s().p("AAODJQgYgCgWgPIgGgFQgfgagVgvQgKgVgEgRIABAAIABgBQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIgEAAQgGgCgDgJQgBgEAAgRQAAgqAHgPQAEgJAGAAQAHAAAHAVQAFgBAGgFIABgBIAEgFQAFgGACgGQACgGAAgFQAAgLgEgJIgGgMIgCgDQACgGgBgDIAKACQAMAAAHgIQAHgHAHgSIAAgCIgKAJQgGAEgFABIgBAAIAGgIQAFgHABgGQgBAAAAAAQgBAAAAABQgBAAAAABQgBAAAAABIgFAAIADgEIAIgHIABgBIAEAGIAHAEIADACQAJAEAIAAIAEAAQgLALgJAMIAAABIgIALIgIAPIAAAAIAAAAIgBABIgGAPQgFAMgDAMQgHAeAAAiQAABAAYAwQAHANAHAKQARAWAUAHQAJADAJAAIgNABIgGAAgAhlBDIgBAAIABAAIAEgEIgEAEgAhnApIAAgCQAAgEACgHIAFgLQABADAEAAIAGgBIgGABQgEAAgBgDIgFALQgCAHAAAEIAAACgAhqAGIgDAOIADgOQACgHAFgJQgFAJgCAHgAhgARIgBgGQAAgEACgHIgBgFIgDgFIgBgBIgFgHIAFAHIABABIADAFIABAFQgCAHAAAEIABAGgAhUAAIgDgJIADAJgAA+BAQgEAAgCgBQgDgCgCgEIgDgIIAKgHIAAAAIABAAQAEADABAFQgBgFgEgDIgBAAIAAAAIAAAAIgGgDIgHADQgCgPANgBIADABIANAAIAOAKQAIAHADAJIAAABQgBAIgEABIgGABIgCgBIAAAAIgHgEIABgBIADgDIABAAIAAAAIACAAIABAAIAAAAIABAAIADAAIgDAAIgBAAIAAAAIgBAAIgCAAIAAAAIgBAAIgDADIgBABQgCABgGAAIgCAEIgFAAgAhTgdQgDgEgEgEQADgJAAgLIgCgPQgCgJAAgIQAMAbABARIAAABIACgCIADgEIABAAIAAADQgBAHgHARIgDgGgAghiDIgEgGIAAAAIAIgFIAagOIgTgLQgHgFAAgOIAGgOIAAAAQAAANALAMQAFAGAGADQAFACAGAAIABAAIAbgEIAKgCIABAAIAWgDIACAAIABAAQATABANAJIAHAFIAAAAIAGAHIgHgGIgGgDQgNgGgUAAQgHAAgNAGIgEACIgZANIgMAIIABgOQgLANgCADQgGAEgKAAIgRAAg");
	this.shape_29.setTransform(10.575,-6.4403);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E58C6B").s().p("AgJC0QgVgHgRgVQgHgKgHgNQgYgwAAhAQAAgjAHgdQADgNAFgMIAGgOIABgBIAAAAIAAgBIAIgOIAIgMIAAAAQAJgNALgLIAEAAQAJgCADgEIALgQIAAgCIAYgNIAEgCQANgGAHAAQAUAAANAHIAGADIAHAFIABABQAPAWACAqIAHApIAAADIgJgCQgKAAgHAJIgBACIABgBIAAgBQAEgCAKAAQAHAAAGACIABAFIAGAsIgHgEQgKgEgJAAIgGABIgBAAIgDAAIAGgKIgGAKIgGgBQgFAAgEACQAEgCAFAAIAGABIgCACIgFAHQgEABAAAEIANAGIAQAIIAVAKIAAAHIAAABIAAANIgFAVIgDAHQgdBOg8AWQgNAFgMACQgIgBgJgDgAgBBuQANAMAYAAQAGAAAEgDQAJgFAEgFQADgGAAgGQAAgIgDgLQgDgLgFgEQgFgEgIgDIgCgBIgIgCIgJgCQgHAAgQAGIgDABIgBABQgNAFgJAHIAAAAQAVAfAIAIgAAqAwIARgBIAAAAIAAAAIgRABgAAaApQACADADACQACACAEAAIAFAAIACgFQAFAAADgBIAGAEIABABIACAAIAFgBQAFAAABgJIAAAAIAAgDQAAgHgFgJQgDgJAAgHQAAgGADgGIAAgCIABgBIAAAAIAAgBQAFgKAJgHQgJAHgFAKIAAABIAAAAIgBABIAAACQgDAGAAAGQAAAHADAJQAFAJAAAHIAAADQgDgJgIgHIgOgKIgNAAIgDgCQgOABADAQIADAGIADAJgAgbgoIAEACIAJAEIAMACIAEAAQALACADAEQAAAAAAAAQAAAAABAAQAAAAAAgBQAAgBAAgBIAAgMIAAAAIABgGIAAgEQAAgIgEgGQAEAGAAAIIAAAEIgXgOQgNgGgTgCIgFgDIAIgKIAJAAQAIAAAGACQgGgCgIAAIgJAAIgIAKIgGgGIAAgCIAAABIAAABQACAIAEAFIgGABIAAABIAKABIABAMIAAACQgDgBgDACIgDADIgBAAIABAAIAAAAIADgBQAEAAAMAFgAAlhJQgCgMgOgPQgPgQgNAAQgPAAgJADIgKADIAKgBQAYAAAQAKQAOAIAOAUIAAAAgAiBA0QAAgBAAAAQAAAAAAAAQAAgBABABQAAAAABAAIgBABgAAXAgIgDgGIAHgDIAFACIABAAIgKAHIAAAAgAAUAaIAAAAgABbgKIAAAAgAAKgxQgGgFgHgDIgHgCQgDgCgEAAIgDgBQgKgEgHgDQATACANAGIAXAOIgBAGQgDgFgEgDgAglhFIAAAAg");
	this.shape_30.setTransform(13.0938,-4.7875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#AD6247").ss(0.5,1,1).p("AACigQAMgHANgGQACgBACgBQANgGAGAAQAUAAAOAGAgUiJQgCABgCAAQgLALgJAMQAAABAAAAQgFAFgDAGQgFAHgDAIQgBAAAAAAIAAABQAAAAAAAAQgEAIgDAHQgEAMgEANQgHAdAAAjQAABAAZAwQAGANAIAKQAQAVAWAHAAXAcQABACABAEQACAEACAFQACADACACQADACADAAQADAAACAAQAMgBAFgBIABAAAAlANIAMAAQAOAJABABQAIAHADAI");
	this.shape_31.setTransform(12.825,-4.9625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(0.5,1,1).p("Ag4i6IADgIIAAAAQgBAAAAAAQAAAAABAAQAOgTAxgBQALAAAJAAAg4i6IAAAAQAAANALAMQAFAGAGACQAGADAGAAIABAAIAagEQAFgBAFgBQAAAAABAAQASgDAEAAQABAAABAAQAAAAABAAQATAAAOAKQADACADADIAAAAQADADADADQAAABABABQAPAWACAqQAEAUADAUQAAACABABQAAAEABADQAAADAAADQAEAYADASQABAHAAAFQABANAAAHIAAAAAg2jCQgCAEAAAEAg2jCQgCABgDABQgqAOgUAjQgWAmgGALQgiA+AAA7QAAAOACATQADAXACAPAhGh7IAAAAQAEgDAEgCQAIgFASgJQgIgFgLgGQgHgFAAgOIAGgOAhCh1QAHAAAKAAQAKAAAGgEQADgDALgNIgBAOIAMgIIAAACIgLAPQgDAFgJABAgygqQAGgGACgDQABgBAIAAQAIAAAGADAgnhSQAJgEAPAAQAOAAAOARQAOAOACAMQgOgTgOgJQgQgKgYAAQgFABgFAAQAHgBADgBgAhCh1QgCgCgCgEAhrhBQACgGgBgDIAKACQAMAAAHgIQAHgHAHgSIAAgCQgHAHgDACQgGAEgFABIgBAAQAAgBAGgHQAFgHABgGQgCAAgCADIgFAAQABgCACgCQADgDAFgEQAAAAABgBAgjhsQgCABgCAAQgIAAgJgEQgCgBgBgBQgFgCgCgCAh7gXQADgJAAgLQAAgFgCgKQgCgJAAgIQAMAbABARIAAABQABAAABgCQABgDACgBIABAAIAAADQgBAHgHARQgBgBgCgFQgDgEgEgEgAhrhBIACADQgBgBgBgCgAhjgyQAAgCgGgKIAEAJQABABABACgAg4gwQAAAAAAAAIAAgBQAAABAAAAQADAIADAFIgGACIAAABQAFAAAFAAIABAMIAAADQgDgCgDACQgBACgCABIAAABIgBAAIABgBIADAAQAEAAAMAFQACABACAAQgEgEAAgGQAAgHAFgGQABAAAAAAQAAgBABAAQgKgDgGgEQgDgBgDgCQgDgDgDgDgAh4AEQAFgBAGgEQABgBAAgBQACgCACgCQAFgGACgGQACgGAAgFQAAgLgEgJAiBAfQgCgFADgNQAAgCgBgDQgBgCgCgEQAAAAgBAAQgDgEgCgCAh4AEQACAEABAFAiJBSQgCAAgCAAQgGgCgDgJQgBgEAAgRQAAgrAHgPQAEgIAGAAQAHAAAHAUAh2AhQgDABgDAAQgEAAgBgDQgCAEgDAHQgDAIABAFAAKgQQACgLgGgIAACgTQgFgEgIgDQgDgCgEgBAACgTIAAABQAAAHgFAFQgDADgDABAgZgfQgCgBgBAAAgdgfQACAAACAAQAEAAADACQgBAAgCgBQgCAAgCgBAgLgTQAAADgCABQgCACgDAAQgCAAgCgCQgCgBAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACgAgfgIQAHADACABQABAAAMACQACAAACABQAKABADADQABACAAgEIABgLIgBgBQABgDAAgCAgsgnQASACANAHQAFACASAMAAJgLQgDgEgEgEAAsBIQAEADADACIAAAAQACABAAAAQABgBAFAAQAEgBABgIQAAgBAAAAQABgIgGgLQgFgQAFgNQAAgBABgBQAAAAAAAAIAAgBQAAAAABgBQAEgKAJgGAAZA4QAAAAABAAIAAAAQAEADABAFAAXAoQgNABACAPIAHgDQADABADABIAAABIgKAGAAsBIQABAAAAAAQACgBABgCQACgBAGABAAkBKQAGAAACgCAguggQAIAAAJABABVgVQAEgDAKAAQAHAAAHACABwgdQgGgBgEAAQgJAAgIAJQAAAAAAAAIgBABQAAgBABAAABnAfQAAADgCABQgCACgDAAQgCAAgCgCQgCgBAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACgABXAUQAEgBACAAQAJAAAKAEQAFABADACABXAUQAGABAHADQABABABAAQAIAFAGAEABWAUIABAAABTATQACAAABABIAAAAQABAAAAAAABEAVQAEgDAFAAQACAAAEABQADgEAEgGABRAVQABgBABgBABRAVQADgBACAAQgEAIAAAFQAAABABADQACADAAAAABRAVIgFAHQgEADAAADIANAGIARAIQAGABAEgEQADgEABgHQADADACABAiJBSQAEARAKAVQAVAvAfAaQADACADADQAWAPAZACQAKAAAIgBQAMgCANgEQA8gWAdhOQACgEABgEQADgNACgIQAAgCAAgLQAAAAAAgBQAAgDAAgEABmAwIAUAKAAljVQAgACASALQAVAMASAYQAnA0AKAwQAKAxgCBEAglBmQAIgIAOgFQAAAAABgBQABAAABAAQAQgGAHAAQAFAAAFABQADABAEABQABABABAAQAIADAFAEQAFAFADAKQADAMAAAIQAAAGgDAFAgJBnQARANAEAEQABABAJAEQAMAFgCgKQABAAAEACQABAAABABAgJBnQAJAAADABQAHABANAHQAAADAFABQAHACACACIACADIAEAFQACACAGAJAglBmIAYABQACAAACAAAglBmIgBAAQAVAeAIAIQANAMAYAAQAGAAAEgCQAJgGAEgFAiHBRQgCgBAAACAiHBRQgBABAAAAIgBAAAiCBNQgDAEgBAAQgBAAAAAAAiEACQgFAJgCAJQgCAMgBAC");
	this.shape_32.setTransform(13.8663,-7.8191);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E58C6B").s().p("AgJC0QgVgHgRgVQgHgKgHgNQgYgwAAhAQAAgjAHgdQADgNAFgMIAGgOIABgBIAAAAIAAgBIAIgOIAIgMIAAAAQAJgNALgLIAEAAQAJgCADgEIALgQIAAgCIAYgNIAEgCQANgGAHAAQAUAAANAHIAGADIAHAFIABABQAPAWACAqIAHApIAAADIgJgCQgKAAgHAJIgBACIABgBIAAgBQAEgCAKAAQAHAAAGACIABAFIAGAsIgHgEQgKgEgJAAIgGABIgBAAIgDAAIAGgKIgGAKIgGgBQgFAAgEACQAEgCAFAAIAGABIgCACIgFAHQgEABAAAEIANAGIAQAIIAVAKIAAAHIAAABIAAANIgFAVIgDAHQgdBOg8AWQgNAFgMACQgIgBgJgDgAgBBuQANAMAYAAQAGAAAEgDQAJgFAEgFQADgGAAgGQAAgIgDgLQgDgLgFgEQgFgEgIgDIgCgBIgIgCIgJgCQgHAAgQAGIgDABIgBABQgNAFgJAHIAAAAQAVAfAIAIgAAqAwIARgBIAAAAIAAAAIgRABIACgFQAFAAADgBIAGAEIABABIACAAIAFgBQAFAAABgJIAAAAIAAgDQAAgHgFgJQgDgJAAgHQAAgGADgGIAAgCIABgBIAAAAIAAgBQAFgKAJgHQgJAHgFAKIAAABIAAAAIgBABIAAACQgDAGAAAGQAAAHADAJQAFAJAAAHIAAADQgDgJgIgHIgOgKIgNAAIgDgCQgOABADAQIAHgDIAFACIABAAIgKAHIgDgGIADAGIADAJQACADADACQACACAEAAIAFAAgAgbgoIAEACIAJAEIAMACIAEAAQALACADAEQAAAAAAAAQAAAAABAAQAAAAAAgBQAAgBAAgBIAAgMIAAAAIABgGIAAgEQAAgIgEgGQAEAGAAAIIAAAEIgXgOQgNgGgTgCIgFgDIAIgKIAJAAQAIAAAGACQgGgCgIAAIgJAAIgIAKIgGgGIAAgCIAAABIAAABQACAIAEAFIgGABIAAABIAKABIABAMIAAACQgDgBgDACIgDADIgBAAIABAAIAAAAIADgBQAEAAAMAFgAAlhJQgCgMgOgPQgPgQgNAAQgPAAgJADIgKADIAKgBQAYAAAQAKQAOAIAOAUIAAAAgAiBA0QAAgBAAAAQAAAAAAAAQAAgBABABQAAAAABAAIgBABgABbgKIAAAAgAAKgxQgGgFgHgDIgHgCQgDgCgEAAIgDgBQgKgEgHgDQATACANAGIAXAOIgBAGQgDgFgEgDgAglhFIAAAAg");
	this.shape_33.setTransform(13.0938,-4.7875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).to({state:[{t:this.shape_24},{t:this.shape_29},{t:this.shape_23},{t:this.shape_33},{t:this.shape_28},{t:this.shape_26},{t:this.shape_27},{t:this.shape_25},{t:this.shape_32},{t:this.shape_31},{t:this.shape_19},{t:this.shape_20}]},15).to({state:[]},1).wait(104));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-30.3,38.8,45);


(lib.Symbol62 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AAEh2QgUApgUAtQgyBxAAA0QAAATAHAXQAKAdANgIQANgHAsgxQAtgxAUgmQAUgnABgYQAAgygXg3QgMgcgOgYQgJgPgLgOAAbigQgEAHgEAHQgHAOgIAOAAOjFQgHAWgCAWQgBAIAAAb");
	this.shape.setTransform(8.65,20.1569);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AD6247").s().p("AhOCvQgIgXAAgTQAAg0AzhxQAUgtATgpIAPgcIAIgOIgIAOIgPAcQAAgbABgIQACgWAHgWIAEABQALAOAJAPQAOAYAMAcQAWA3AAAyQAAAYgUAnQgUAmgtAxQgsAxgNAHQgDACgDAAQgJAAgHgXg");
	this.shape_1.setTransform(8.65,20.1569);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.6,19.3,41.6);


(lib.Symbol61 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E58C6B").ss(0.5,1,1).p("AAWgnQgBAAgBABQgNATgJANQgMAPgHAHIAAAAQABABAOAHQAMAHAIAJ");
	this.shape.setTransform(10.4625,0.8375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0769C2").ss(0.5,1,1).p("AAXhLQgOAAgCAGQAAAAgBACQgBADAAAHQgCAEgFAKQgFAIAAACQAAADAHAEQAHAEADAAIACABQgBABgBABQgFADgKAJQgIAFgHAGAgWAFIAMAAQAFAAAAAEQAAABgDAHQgBAEgDAGQgDAIgDAIQAAAFAGAEQADADAJAHQALAJAJAF");
	this.shape_1.setTransform(-0.1125,23.5498);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#AD6247").ss(0.5,1,1).p("AgDAdIADgLQAEgcAAgS");
	this.shape_2.setTransform(2.4905,54);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.5,1,1).p("AALkUQABgKAKgDQAGgCAPgFQABAAAPgGQADgBACgBQAHgHAJgOQAAgBAAAAQAJgOAIAAQAJAAANAVIAUAZQgEACgDAAQgEAAgDgBQgDgBgHgDQgBgDgCgFQgDgFAAgBABOkzQACAAABAAQAEAAAIAPQABACABACQABABABACQAAABABACQABABAGALQAGAJAAAEQAAAFgMAKQgDACgEAEQAAABABABQgDAEgIAFQgLAHgCABQgBAFgFAAIgHgBQgHAAgCADQgDABgBAAQgDABgBACIAAAAQgBgBAAgCQAAgFABgEQABgBABgBQAAgCABAAQADgFAFAAABrksQgBABgHAFQgEADAAADABrksQAAAAgBAAQgDgCgBgCQgLgHgDgIABAkwQAIgCAEgBABzkpQAAgBAAAAQgDABgFgDABJkTQAFABABACQABADADALQAGARADAFAANj3QAAgCABgCQAFAAANgBQABAAABAAQADAAADAAIASABIAEgBIAHABQAAAGABAQQAAABAAAAQAAAJAAACQAAAAgBAAAAMkEQAAgBABgBQAEgLAEAAIAIABQAIAAAMgCQACAAABAAQAJgBAHAAQADAAACAAIAKgKAASiHQAFAAARgHQALgEADgHQAGgPAEgIQADgFACgCQAPgRALgFQAFgDAAgMQAAgQgBgGAAMkEIAAgGIgBgIQAAgBAAgBAANj3QgCgIABgFAAqjeQgEgDgCgDQgBgEAAgBAAIjlQABgEAEgOAArjRQABAVAHAFAAZjOQgBABAAAAQgMAJgHAAAAZjOIgBAZIABAIQgBAfgGAHQAAAAAAAAQgFAEgIAFQAEAGgDAIQgDAJAAACQAAACACADQgEADgEABQAAAAgBAAQgKAAgXgLQgDgDgDgDQgPgRgEgGQAAgBAAgBQAAgDAFgHQAGgIADAAQACAAABAAQAUgfAOgiQANgmAJgVAAnjaQgLAJgDADAgtiYQAAABgBABIAAAEQAAAIALAOQAEAFAFADQABAAAAAAQADABAIACQABgBABAAQALgHAGgFAgGhDQgFAVADAMQABAHgFAEQgBAAgBABQgEACgQABAhIgjQABgBABgBQApgPAKgFQALgGACgEQABAAAAAAQgBgDACgDQACgEAAgBIgBgOAhqAbQAEAFAQADQAKACAJABQAQACAEAAQAKgCAIgDQABgBABAAQACgCACAAIAAADQgBAXADAPIAIA4QAFA8gLAoQAAACAAADAgXAjIALg6Ah6EoIABAWQABAIAHAEQAYALAEAAQARAAAVgUQASgSACgLAg+iEQgDAIgEAJQgEAIAAAHQgBARgKALIAAAAQARALAcAAAhUhIIgBgBQgDAHgDAPQgDASgCAGQABAAACABQAOAGABAAQAOgDAGAAAhdgaQgDAHgCAFQAAAAAAABQACADAIAIQANANAKAMAhigNQgBAHgIAdQAAACABACIgZBkQgRBpAaBAAh5EEIgBAk");
	this.shape_3.setTransform(4.8791,27.6996);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E58C6B").s().p("AgPA9IAAgKIAAgBIgBgWIgHgBIgEABIgSgCIgGABIAAAAQAGgHAMgQIAYgfIACgBIADAAQAEAAAHAPIACAEIACADIABAEIAHAKQAGAJAAAEQAAAFgMAKIgIAGIABACQgCAEgHAGIgNAIIABgBgAgGAGIADAPIAIAVIgIgVIgDgPQgBgCgFgBIAKgJIgKAJIgGAAIgPABIAPgBIAGAAQAFABABACgAglAjIgOgIIAGgBIASACIAEgBIAHABIABAWIAAABQgIgJgOgHgAgMADIAAAAgAAHgNQgHgPgEAAIgDAAIgCABIgMADQAHgHAJgPIAAAAQAIgPAIABQAJAAAMAUIAUAaQgDACgDAAIgHgBIgKgFIgEgHIgCgGIACAGIAEAHIAAAAQgDAAgFgCIgBgBIgFgDQgKgIgDgHQADAHAKAIIAFADIABABIgIAFQgEADAAADIgCgEg");
	this.shape_4.setTransform(13.5,-0.2504);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3AA2FF").s().p("AAJBOIgFACIgCABQgHgFgMgKIgNgJQgGgFAAgFIAHgPIAEgKIACgIQAAgEgEAAIgMAAIABgCIAPgLIAQgMIACgBIgBgCQgDAAgHgDQgJgEAAgEQAAgCAFgIIAIgNIACgKIABgDQACgFANAAIABAAIALADIABgBIATgMQADAGgCAIIgDALQAAABAAAAQAAABAAAAQABABAAABQAAAAABABQgEAEgFAAIgBAAQgLAAgWgLIgFgFIAFAFQAWALALAAIABAAIAAAOIgCAFQgBADAAADIAAABQgCADgLAGQgKAFgpAOQApgOAKgFQALgGACgDQgFAUACALQACAHgFAEIgDABQgEACgPABQAPgBAEgCIADgBIgMA7gAAagUIAAAAg");
	this.shape_5.setTransform(1.6043,23.0625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0769C2").s().p("AAABeIgSgCQgQgDgEgFIgCgEIAKglQABADAIAIQAOAOAIAMQgIgMgOgOQgIgIgBgDIgBgBIAFgMIAQAFIATgDIgTADIgQgFIgDgCIAFgXQADgOADgHIACABIAAAAQAQALAbAAQgbAAgQgLIAAAAQAJgLABgRQABgHADgIIAHgRQADAGAQARQgQgRgDgGIgBgCQAAgDAFgIQAGgIAEAAIADABIgBACIAAADQAAAJALAOQAEAFAFACQgOAAgCAGIgBACIgCAKIgIAOQgFAIAAACQAAADAJAEQAHAEADAAIABABIgCACIgQALIgOAMIgBABIALAAQAEAAAAAEIgCAIIgEAKIgGAQQAAAFAFAEIANAKQAMAJAIAFQgHAEgLABIgBABIgSgDg");
	this.shape_6.setTransform(-1.8875,22.0026);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AD6247").s().p("AheE5QgHgEgBgIIgBgWIABgkIgBAkQgag/ARhqIAZhkQAFAFAPAEIATACQAQACAEAAQAKgBAIgEIACgBIAEgCIAAADQgBAXADAQIAHA3QAFA9gKAnIAAAGQAAASgEAcIgEALQgCAMgSARQgVAVgRAAQgEAAgYgMgAgGiEIgBgBQgFgCgEgFQgLgOAAgJIABgEIABgBQATggANghQAOgnAJgVQABgKAKgDIAVgHIAQgGIAFgBIAMgDIgXAgIgEAAIgUACIgIgBQgEAAgEAMIgBABIAAgGIgBgIIAAgCIAAACIABAIIAAAGIAAAFIABAIIgBgIIAAgFIABgBQAEgMAEAAIAIABIAUgCIAEAAQgMAQgHAHIAAAAIAPAIQANAHAIAIIAAALIAAABQgCAEgFAAIgHgBQgHABgCACIgEABIgEADIAAABIgBgEQAAgFACgEIABgCIABgCQADgEAFgBQgFABgDAEQgEgDgCgDIgBgFIABAFQACADAEADIgBACIgBACIgPANIAPgNQgCAEAAAFIABAEIAAgBIAEgDQABAVAHAFQgHgFgBgVIAEgBQACgCAHgBIAHABQAFAAACgEIAMgIQAIgGADgEIgBgCIAHgGIABAWQAAANgFADQgLAFgPAQIgFAHIgKAXQgDAIgLAEQgRAGgFAAQAGgGABggIgBgHIABgZIgBABQgMAIgHABQAHgBAMgIIABgBIgBAZIABAHQgBAggGAGIAAABIgMAIIgTAMIgCABIgKgCgAAbj2IAFgSIgFASgAAgkIIABgDIABAAIACAAIAAAAIAQgBIABAAIgBAAIgQABIAAAAIgCAAIgBAAIgBADgAAliYIAAAAgABIkjIAAAAg");
	this.shape_7.setTransform(2.9541,29.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-7.4,29.8,70.2);


(lib.Symbol60 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,9.4).s().p("AhABCQgagbAAgnQAAglAagcQAcgbAkgBQAlABAbAbQAbAcAAAlQAAAngbAbQgbAbglABQgkgBgcgbg");
	this.shape.setTransform(36.15,117.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFB59A","rgba(229,140,107,0.247)"],[0,1],0,0,0,0,0,13.4).s().p("AggB8QgFgFACgPIAfikIALgvQADgJADgEQAFgHAHACQAIABACAJQACAGgDAKIgFASIgFASIgCARIgEAMIgFATIgTBzQgCAPgFAFQgDAFgGABIgDAAQgEAAgDgCg");
	this.shape_1.setTransform(14.7614,62.2593);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E90808").ss(0.5,1,1).p("AALiIQAEABAEAAQAnAGAeAhQAaAdAHAmQACAKABALQAAAEAAAEQAAAugYAjQgCADgCACAANCIQgHABgGAAQgyAAglgpQgkgoAAg4QAAg4AkgoQAOgPAQgK");
	this.shape_2.setTransform(32.9,118.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#AD0000").ss(0.5,1,1).p("AgWhHQAAAIgCAJQgCAJAAADQAMADAdgBQAFAAAEAAAghAcQgCAJgFALQgEAIAAAGQABAAABAAQAFABARAEQAJADAIABAAZBBQACAAACgBQAIgDAFgDQABAAABgBQAAAAABAAAgCBHQAFAAAEAAQACAAAKgD");
	this.shape_3.setTransform(11.375,87.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0769C2").ss(0.5,1,1).p("Ahwn8QgDAGgTAPQgJAGgBAJQAAABAAABQAAANAFABQADAAALgCQASAAAMAFQABABABAAIAEAAIABAAQgFABgSAEQgMABgKgBQAAAFAAAGQAAAJgCAMQAAABAAACQAAAHAHAJQAHAJANAKQABABABAAACRHMQgEAFgFAFQgfAjgsAEAgID7QADgCADgBQAXgMAcAAQAGAAAFAB");
	this.shape_4.setTransform(28.025,81.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#AD6247").ss(0.5,1,1).p("AAflAQgFgIgJgKQgJgKgFAAQgJAAgYAGQgHACgCAJQAAACAAAQQAAAhABAPQABAVAGAkQACAOAEAgQAGAYAVAAQAjAAAIgJAA6AMIhcgJIgLBHQgMBTAAA5QAAAAAAABQAABcACAhQAqAOANgJ");
	this.shape_5.setTransform(13.1375,43.8215);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.5,1,1).p("AiGloQgXgYgbhOQghhegShFIAShIIBUgcQA1BMAUBCQAEAKACAKQADAOACAOQAHAuAGBiAgSlzQAAgCAAgCIAAgDIgBgMQgFgBgMAAAiGloQAHAIAGACIAxgLQANgGAKgHQAIgFAGgGQAAgCgBgDQAAgBAAAAAgSlzQAAgEAAgDAiAlNQAJADAIAAQAFAAALgCQAGgCAJgDQAGgDAJgDQACgCADgBQAkgPAGgKAiDk+QAOABAWAHQAAABABgBQALAEANAFQAdAJAjANQAEgagBgHQgCgEgCgIQAAAAAAgBQgCgHgEgKQgGgRABgMAiAlNQARALATADIAAAAQAAAAABAAQANACAugBQADAAADABAiGloQgBADgBAEQgEAIAAADQAAABABABQACAEAHACQABABAAAAQABAAAAAAAiClOQgFAGAAADQAAABAEAGQAAACAAAEQAFAAAYAOQANAHASAKQABABACABQAPAJALAHAiGkFQAFADANADQAMADATAEQAHABAjAGQALACANACIABAIIAAAQQgCA3gTA9IgZBhQgSBIgDAeQAAACgBACQAGgCAGgCQgEAdABAXQAAABgBACQgBAAgBABAiGkFIgGAKQgRAsgEBDIgBBwQAAABAAAAQgCBbgDAfQgBAFAAAEQAFADAHADQAGACAEACQABAAABABQAIADAEAAQADAAADgBQAKAAAJgDQALgEAKgEAiEkKIgCAFAiEkKQgDgBgDAAQAAABAAACQAAABAEACAgJkLQgBAAgBAAQgLAAgMACQgEACgEAAQgGACgGAAQgFAAgGgBQgBAAgCAAQgIAAgIAAQgYgBgYgDAgTjtQADAAACABQAFgEAAgYQAAgBAAgBQAAgBAAAAAiDk4QAAANgHAgAgJkIQAAgBAAgCQACgHABgFAhXCrQgIACgFAAQgRAAgfgGQgHgBgIgBQAAAqABAKQAAAGAWACQACAAACAAQAMACAMAAQAcAAgCgSQgBgHAAgNQAAgMAAgGQADgBAGgBQgBgHgBgEAixCRQAEAJAZAFQATADATAAQAXAAAHgEAioBoQgCgBgBgBQgBAHgDAMQgDAOAAAGQAAACABACQgHAIgMALQgOAMABARQAAAPgGA1QAMgJADgBQAEgDAFAAQAGAAADADQgBgLgGgRAjJEtQAHgFAGgMQAGgOAAgNQAAgDAAgDAjXEFQAAAAAAABQAAACAEAKQAEAJAAAKIgCAKIAEAAQABgBABAAQAAACgBADQAAAFAVAGQAFAAADgCQACgCACgCQACAAACABQgEAGAAAAQAAAFATAGQAEAAADgGQABgBAAgBQAEgGADAAQAKgMAVgkQAAAAABAAAjLEuQABgBABAAQARALAKAAQABAAABAAQACgCADgCQAAgBAAAAQALgMAKgdAjLEuQAAgBAAgBQABAAABABAinEzQAAAAAAAAAg8D9IAAAAQAAgRgJggQgBgCAAgBQgGgTgCgNAhqEyQAEgFACgFQAGgOALgRQADgBADgBAhEEPQABgCABgCQAEgIACgDQAAgBAAgBQABAAABABIAAAAQABAAABAAQABAAACAAQA0AKAmAoQACADADACQAFAAAFAAIAAAAQAdAAAZAJQArAOAhAmQApAuAKA8AhMEeQAAgBABgBQAEgHADgGQAVAHALAOQAEAEAQAcQAQgHAPgDQANgDAOgBAhqEyQAPAAAHgHQAFgEADgJQAiARAHAgAg8D9IACABIACABAg8D+QAAgBAAAAAhCELIAKAAQAYAHASAMQAOAKAPASADsHzQAAAJAAALQAABOgtA6QgEAFgFAFQgVAYgZAPQgmAWguABQAAAAAAAAQg0AAgqgdABWFRIAlAiIAGAGQAlApAVAwQAZA7gEA+QAAADAAAEQgEAhgQAaQgSAdgiAWAgnFRIAzAbIAOgFIAcAbIAOAOQAiApARAwQAWA7gIA+QgCASgGAQQgTAyg2AhAAaFnIA8gWIAQgGIgygVAgmFQQgHgBgFgBQgKgCgDgDQgEAEgMAIQgJAIgBAHIAAAAQAAAAAEAZQADgFAEgFQALgMALgJQAIgHAJgGQABgBAAAAQACgBABAAQAJgGAKgFAhZFkIAKgJQALAAAMADAiEIHIAAAAQAEhBAVgkQAVglABAAAiQFCIABAAQABAAACgCQACgCABgCAinE5QADACAGACQAKAEAEABAisE4QABAAAAAAQADgCABgDQABAEgBACAiEIHQAMgVAQAAQARAAAMAXQAMAWAAAgQAAAfgMAXQgHAOgKAFAiMFAQAUgEAFgCQAFgDAEgFAhsJtQgFARAAAEQAAAMAWAQQALAIAPAIQALAGAMAGQgTgOgRgTQgHgIgHgJQgJgNgHgOQgYguAAg4");
	this.shape_6.setTransform(21.7125,68.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DEEFFF").s().p("Ag6gIIAAgCIAHgMQAVAGAMAOQAEAEAPAcIgTAKQgHgfghgRgAACgIQgQgMgZgHIgJAAIAFgLIACgBIAAAAIACAAIADABQA0AKAmAnIAFAFQgNAAgNADQgPgSgQgJg");
	this.shape_7.setTransform(19.9625,97.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E90808").s().p("AgTDnQgkgoAAg4QAAg5AkgoQAOgQAPgJIAOAOQAiApASAwQAVA7gIA+QgCASgGAQIgNABQg0AAgjgpgAClDVQAEg9gag7QgVgwglgqIABgDQAoAFAeAhQAaAdAHAlIADAWIAAAJQAAAtgYAkgAiVhoIgBAAIgRgDIgXgGIgBAAQAAgGAEgIQAFgLACgJIAYABQAcABgCgTQgBgGABgNIgBgSIAJgCQACANAGATIABADQAKAgAAAQIAAABIgBABIAAACIgOAFIgDABIgGADIgMADIgKAAgAiujaIADgMQACgJAAgIIgBgIQALAAAJgDIAVgIIALgFQgEAeABAXIgBADIgJAAIgMAAQgVAAgKgDg");
	this.shape_8.setTransform(26.1,105.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AD0000").s().p("AAqE4Qg0AAgqgdQgTgNgRgTIgOgSQAKgFAHgOQAMgWAAggQAAgfgMgXQgMgWgRAAQgQAAgMAUIAAAAQAEhBAVgkIAVgkIgDgYIAAgBQAAgHAKgHQAMgIAEgEQACACALACIAMADIgBAAQgJAGgJAIQAJgIAJgGIAzAcIAOgGIAbAbQgQAKgNAPQgkAoABA4QgBA5AkAoQAkAoA0AAIAMgBQgSAzg2AgIAAAAgAhYgqIgIAJIAIgJQAKgMALgJQgLAJgKAMgAhjg6IAJgIQAMAAALADQgLgDgMAAgAhLEQQgPgIgLgJQgWgQAAgLQAAgFAFgRQAHAOAJANIAOASQARATATANQgMgFgLgGgACyDvQAQgbADggIAFgGQAXgjAAguIAAgJIABAUQAABPguA5gAhmDpQgJgNgHgOQgYgtAAg5QAMgUAQAAQARAAAMAWQAMAXAAAfQAAAggMAWQgHAOgKAFIAAAAgADGCsIAEACIgFAGIABgIgADKCugAC9gDQgdghgogGIgHAAIgmgjIARgGIgygUQAdAAAZAIQAqAPAiAmQApAtAKA8QgIgmgagcgABxgqIAHAAIgBAFgAiphgIgJgEQABgCAAgEIAAAAIgBAAIgGAFQgLAAgQgMQAHgFAFgLQAHgOAAgOIAAgFQgCgLgFgSQAFASACALQgDgDgGAAQgFAAgEACIgPALQAGg1AAgPQgBgRANgMQANgMAGgIIgBgDQAAgHAEgNIAEgTIACACIANAGIAKAEIABAAQAIADAEAAIAGAAIABAIQAAAIgBAJIgDAMQAMADAegBIAJAAIgBABIABALIgJACIgMACQgRAAgfgFIgPgDQAAArABAKQAAAFAWADIAEAAQgDAJgFALQgDAIAAAGIABAAIAWAFIARADQgVAkgJAMQAJgMAVgkIABAAIAKABIANgEQgLARgGAOIgGAKIAGgKQAGgOALgRIAFgCIAEgBIANgGIgFAMIgDAEIgGAMIgBACQgEAJgEAEQgHAHgPAAQgEAGgFACQgFADgUADIADgEQgEABgDAFQgFAAgKgEgAixhqQALgMAKgeQgKAegLAMgAh4j7QAXAAAHgFQgHAFgXAAQgTAAgTgEQgZgEgFgKQAFAKAZAEQATAEATAAIAAAAg");
	this.shape_9.setTransform(22.75,109.5375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0769C2").s().p("ABbHUQArgEAggkIAIgKQgDAhgQAaQgTAdghAWQgmAXguAAQA1ghATgygAgGC3IgOAFIg0gbIABgBIACgBIATgLQAQgHARgDQANgDAMgBIAKAAIABAAIAyAVIgRAGIg6AWIA6gWIAmAiIgMAAQgcAAgXALIgHAEgAh3moIgfgHQgNgDgFgDIADgFIgGgBQAGggAAgNIAAgGQAPABAWAIIAAAAIAAAAIAYAIIgBAUIgfgRQgYgNgFgBQAFABAYANIAfARIAAAEQAAAHAHAIQAGAJAOALIABABIgqgHgAh2m2IAQAAIACAAIACAAIgCAAIgCAAIgQAAQgXgBgYgDQAYADAXABgAiAnlIAAAAIAAAAQgWgIgPgBIgEgGQAAgEAFgGIACABIAAAAQARALATADIABAAIAAAAIABAAQAIABAUAAIAAAAIABAAIAHAAIANAAIAEAAIAFAAIADABIADAAIABAAIgWAEQgMACgKgBIgBALIgYgIgAhgnuQgUAAgIgBIgBAAIAAAAIgBAAQgTgDgRgLQAKAEAHAAQAGAAAKgDIAPgFIgPAFQgKADgGAAQgHAAgKgEIAAAAIgCgBQgGgCgCgDIgBgDQAAgDADgIIADgGQAGAHAHADIAwgMQAOgGAJgHQgDAHgTAPQgIAGgBAJIAAACQAAANAEABIAOgDQATAAALAGIgFAAIgEAAIgNAAIgHAAIgBAAIAAAAgAilnuIAAAAg");
	this.shape_10.setTransform(25.075,85.6875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3AA2FF").s().p("ABFHkQAIg+gVg7QgRgwgjgpIgNgOIAHgEQAWgLAcAAIASAGQAlApAUAwQAaA7gEA+IgJARQggAkgrAEQAGgQACgSgAhTlrIgYgEIgBgBQgOgLgHgIIALAAIANgBIAHgCQAMgDALAAIACAAIABADQAAAYgGAEIgFgBgAiBmDQgGgJAAgHIAAgDIABgVIABgLQAKABAMgCIAWgEIgBAAIgDgBIgCAAIAAAAIgBAAQgLgGgTAAIgOADQgEgBAAgNIAAgCQABgJAIgGQATgPADgGQAIgGAGgFIAAgGIAAgBIARABIAAAMIAAAHQgFAKgkAPIgGADIgPAGIAPgGIAGgDQAkgPAFgKQAAAMAFARIAGASIAAAAIAEANQACAGgFAaIhAgWIBAAWIgDAMIgCAAQgLAAgMADIgHACIgbgRIgDgBIADABIAbARIgNABIgLAAgAiBmDIAAAAgAhpmEIAAAAgAhdm7IgDgBIABAAIAAAAIACAAIADABg");
	this.shape_11.setTransform(28.0771,80.6625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E58C6B").s().p("AgtGYIgDAAQgXgDABgFQgBgKgBgrIAPADQAfAFARAAIAMgCIABATQgBANABAGQACASgbAAIgYgBgAgxEYQgCgiAAhbIAAgCQAAg5ALhSIALhHIBcAJIAJABIABARQgDA1gTA+IgZBiQgRBIgEAeQgFADgJAAQgPAAgZgIgAgUjeIgGgvQgFgjgCgWIgBgvIABgSQABgKAHgBQAYgGAJAAQAFAAAJAKQAJAKAFAIIAFAbQAHAvAHBhIAAABIgFAAQgIAKgjAAQgUAAgHgYg");
	this.shape_12.setTransform(12.6,49.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AD6247").s().p("AgrIFIAEgGIAJAEQAKAFAEAAIgBACQgDAGgEAAQgTgGAAgFgAhMH5IABgFIACgBQARALAKAAIACAAIABAAIgEAEQgDACgFAAQgVgGAAgFgAhRH1IACgKQAAgKgEgJIgEgMIAAgBIAPgKQAEgDAFAAQAGAAADADIAAAGQAAANgGAOQgGAMgHAFIgCgBIAAACIgCABgAhLH0IAAAAgAgRE5IgBgBIgKgEIgMgGIABgIQADggAChcIAAgBIABhwQAEhCARgsIAFgKQAGADALADIAgAHIAqAHIAYAEIAAAIIgIgBIhdgJIgKBHQgMBSAAA5IAAABQAABcACAiQApAOAOgJIgBADIgVAIQgJADgKAAIgFABQgEAAgJgDgAgGihQgXgZgbhOQghhdgThFIAThIIBUgdQAzBMAVBCIAGAVQgFgIgJgKQgJgKgFAAQgKAAgYAGQgHABgCAJIAAATIABAvQABAVAGAkIAGAuQAGAZAWAAQAjAAAIgKIAEAAIABAGQgGAFgIAGQgKAGgNAGIgxAMQgGgDgGgHg");
	this.shape_13.setTransform(8.925,48.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-5.5,49.3,147.3);


(lib.Symbol59 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E58C6B").ss(0.5,1,1).p("AiWgoQgBAFAeAZQAUASATAMQAUAMATAEQAzAMA3gPQAugMAbgZQAJgIAGgK");
	this.shape.setTransform(19.224,38.0417);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#AD6247").ss(0.5,1,1).p("AgpAJIAggIQAigIARgB");
	this.shape_1.setTransform(16.45,1.3375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.5,1,1).p("AAJjWQBNADA3A8QA6A/AABYQAABRgxA8IAAAAQgEAFgFAGQgEAEgEAEQg4A3hNAAQgyAAgqgZQgBAAAAAAQgZgPgVgXQgPgQgLgRQAAgBgBgBQgfgzgBhCQAAhYAmgwQAmgwAwgM");
	this.shape_2.setTransform(19.7373,21.9125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E58C6B").s().p("AhMAXIAFgJQAUAMATAEQAzAMA4gPQAtgMAbgYIACADQg3A2hOAAQgyAAgqgZgAh7gOQgOgQgLgRIAJABQgBAFAeAZQAUASATAMIgGAJQgZgPgVgWg");
	this.shape_3.setTransform(18.1,38.6125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AD6247").s().p("AgwDLQgUgEgTgMQgUgMgTgTQgegZABgFIgKgBIgBgCQgfgzgBhCQAAhYAmgwQAmgwAwgMIAggIQAjgJAQgBQBNADA3A8QA6A/AABYQAABRgxA8IAAAAIgJALIgIAIIgCgDQAIgJAHgKQgHAKgIAJQgbAZguAMQgfAJgcAAQgYAAgXgGgAhdDEIAGgJIgFAJIgBAAg");
	this.shape_4.setTransform(19.7373,21.3042);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-0.5,41.7,44.9);


(lib.Symbol58 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E58C6B").ss(0.5,1,1).p("AiVgJQAfAfA4AOQBfAZBbhNQANgMANgN");
	this.shape.setTransform(21.275,37.8853);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#AD6247").ss(0.5,1,1).p("AhFgOIA2AEQA7AIAaAR");
	this.shape_1.setTransform(23.75,1.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.5,1,1).p("ABti4QASANARASQA8A/AABaQAABEgkA2IAAAAQAAAAAAAAQgLAQgNAOQg7A/hVAAQgaAAgZgGQAAAAAAAAQgygOgngnQgBgCgDgCQg7hAAAhYQAAhaA7g/QAxgzBBgK");
	this.shape_2.setTransform(19.9,21.7625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E58C6B").s().p("AhAAqIACgMQBfAZBbhNQANgMANgNIAEADQgKAPgOAPQg7A+hUAAQgbAAgYgGgAiZgKIAEgFQAfAeA4APIgDALQgxgNgngmg");
	this.shape_3.setTransform(21.2625,38.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AD6247").s().p("AgzDUIACgMIgCAMIAAAAgAgxDIQg3gOgggfIgEAEIgDgEQg8g/AAhaQAAhYA8hAQAwgzBAgKIA2AFQA7AIAbARQASANARASQA8BAAABYQAABFgkA2IAAAAIAAABIgEgDQgNANgNALQhFA7hHAAQgXAAgYgGg");
	this.shape_4.setTransform(19.9,21.4375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-0.7,42.8,45);


(lib.Symbol57 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFB59A","rgba(229,140,107,0.247)"],[0,1],0,0,0,0,0,6.8).s().p("AgNA1QgDgGAAgLIAAgyIgBgRIAAgPQABgKAJgDQAIgEAHAFQAEADADAGQADAIAAARIABA8QAAALgEAGQgEAJgKAAQgJAAgFgJg");
	this.shape.setTransform(21.4417,170.2658);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFB59A","rgba(229,140,107,0.247)"],[0,1],0,0,0,0,0,6.6).s().p("AgXA2QgFgGABgLIAEgSIAHgXIAJggIABgIQAEgMALgCQAFgBAFADQAGADACAFQACAFgCAOIgUBGQgBAIgEAEQgEAGgIAAQgIAAgFgFg");
	this.shape_1.setTransform(27.0118,111.8125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFB59A","rgba(229,140,107,0.247)"],[0,1],0,0,0,0,0,30.2).s().p("AAKEpQgKgEgBgVIgOiAQgLhsgDg3QgFhRAChlQABgwAEgXQAGgaAPACQAJABADALQACAHgBANQgHBlADBdQADBBANCAIAOCJQACARgEAIQgDAHgFADQgEACgEAAIgFAAg");
	this.shape_2.setTransform(20.8176,127.3822);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFB59A","rgba(229,140,107,0.247)"],[0,1],0,0,0,0,0,4.7).s().p("AgQAmQgIgIADgQQAGgOACgJIACgOQABgJAEgEQAEgEAFgCQAFgBAFADQAIAEACAKQAAAIgBAKQgDASgEANQgFAPgJADQgDACgEAAQgGAAgEgFg");
	this.shape_3.setTransform(25.3884,78.6283);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFB59A","rgba(229,140,107,0.247)"],[0,1],0,0,0,0,0,30.1).s().p("AgPCRQgWg4gLhSQgMhRAGg9QAIg8AUgDQAVgCAVA4QAXA4ALBSQALBSgHA8QgGA8gVACIgCABQgUAAgUg2g");
	this.shape_4.setTransform(23.6333,54.0023);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#D4D4D4").ss(0.5,1,1).p("AAAAMIAAgX");
	this.shape_5.setTransform(23.3,159.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#AD6247").ss(0.5,1,1).p("AAnp5QAMgQAGgJQANgRAJAAQADAAAEAFQAEAFANADQgBgGgCgGQgNgwgLgnQAAAAAAAAQAAgBAAgCQgghwgSgoABDr2QgPALhAAoQgtAcgUAmQgSAggGA3QgDAfAABLQAABYAUBnQAbCMAuAAQAEAAAGgCQABgBAAgBQAHgDAIgHIACAAQAAABgIAkQgHAdAAAGQAAAJAPAOQAQAPAKAAQAGAAANgYQABgCABgDAAyABQgCAFgFAMQgFAKgGAAQgVAAgKgKQgZAkgRBRQgOBHAAA/QAAAqAHAsQAMBFADASQABAPAXBFQAWBCAAADQAAAEgIAaQgHAagCAEQAEAFAVAAQAYgBAFAGAAgDEQABgCAAgDQAFglAIgkQAShKAWAAQAKAAAEAGQABACADAEQAAACABADABIK9QgBgBAAgBQgGgCgEAAQgbAAgRAJQgQAIgFARQgFANAABQQAAAhAJAbQAKAhAVAAQAZAAAUgcQARgYADgW");
	this.shape_6.setTransform(18.275,91.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.5,1,1).p("AAnwGIgrAKQgyAPglAeQh2BcA3DfQABACAAADQgOBgARBCIAVA6QAWA7AKAlQALAkAIAYQALAcAOAYQABACAAADQACAMAAAXQAAAFgBANQgBANgCAWAiGrpIgSBVIAAAAIAAABQgBACAAACAB0sIQAXAkARBdQAQBXAABCQAAAlgIA8QgBAMgCARQgCAOgCARABQtoIgdB9AB9nEQAEAbASA3QAGASAEAPQAFAZAAASQAAAygUA0QgLAaghA2IAQAvQAAABAAAAQABAEABADAg1jjQABACABACQAPAXASATAAQjlQgBACgBADQgHAOgFALQgCAFAAAOQAAAAAAABQAAADAAADQAAArALAZAgzipIgVAvQghBVAAA9IAEA7QAKBQAfBsQAXBPAXBYQgBADgBACQAAAAAAABQgBADAAACQgBAOgFAcQAAAGgFATQgEASAAAEQAAAIAXAQQgJAEAAAEQAAAEAHAZQAEgJAJgEQALgDALgCQALgBAQgBQAHAAAFAAQAHAAADABQAEABAGAAQAAAAAAABQABABAAACAA7hyQAIgJAGgYQACgJACgIAB1g0QAUBJgHAvQgHA3gZAzIgUDRQgEBJAIASIAMATQALAUgBAEQgCAGgKAcQgCAAgCAAIgMAAQgGAAgHAAIAAAAQgSABgVADQgIABgHABQgLADgHACABihwQggAegQBVQgGAggEAqAgOG2QABADAAADQABAAAAABQAAABAAACQAJAogDAaABiCuQgJATgMATABcJyQABgIAEgdQAAgEABgDQACgWAAgEQAAgEgIgBABUJLQADAPAFAYQACAOADAQQAIAsADAaQAAACAAABQABAKAAAHQAAAOgDANQgBAEgCAEQgDAKgFAJQgKAQgSAFQgJADgLABQgFAAgEgBQgagCgNgWQgPgZgDgXQAAgEABgDIgBAAQgLAggBAaIABASIABAKQAGAfATAVQAfAhAGAEQAAAAAAAAQARALATgMQACgCADgCQAUgOARgVQANgQAEgNQADgIAAgHQAAgCAAgCQAAgXgHggQgGghgKgSAgeM1QgGANADAUIAJA2QAJA5AAALQAAARALANQAMAQAcAHQAeAHAWgOQAWgNAFgYQAEgTAGhFIADguAAmM4QgBAagEBGABDM1QABAlAGA5AgSLpQAEiMADgG");
	this.shape_7.setTransform(17.0124,103.0917);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D4D4D4").s().p("AASC4QgGgDgfgiQgUgUgFggIgBgJIgCgTQACgZALghIAAAAIAAAHQACAXAQAZQANAWAaADIgFBfIAAAAgAghikQAAgFAJgDQAHgDAMgCIAOgDQAVgCARgBIABADIAAAZIgMAAIgbABQgLACgKAEQgLADgDAJQgHgZAAgDg");
	this.shape_8.setTransform(18.55,176.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdBYQASgGAKgPQAEgJADgKIADgJQADgMAAgOIgBgQIAAgDQAKARAGAhQAHAgAAAXIAAAEQAAAHgDAIQgEANgNAQQgQAVgUAOQgGg6gBgkgAgMiSIAAgBIgBgDIAAgBIgKgBIgKgBIAAgYIAAgEIAAAAIANAAIAMAAIAEAAQAHABAAAEIgCAZIgBAIIgEAlIgIgog");
	this.shape_9.setTransform(26.7125,176.4125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3AA2FF").s().p("AgTAvIAFhfIAJAAQAKAAAJgDQABAkAFA5IgFADQgKAHgIAAQgIAAgIgFg");
	this.shape_10.setTransform(22.3625,190.4124);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B40000").s().p("AgJBmQgcgHgOgQQgLgNAAgQQAAgMgIg3IgJg3QgEgTAGgNIABAJQAGAgAUAUQAgAiAFADIABABQAPAKATgMIAFgDQAVgOAQgVQANgQAFgNIgEAuQgGBEgEASQgFAYgVANQgPAKgSAAQgJAAgJgDg");
	this.shape_11.setTransform(21.6819,195.7042);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AD6247").s().p("ABCOfQgagCgOgWQgPgZgDgXIABgHQAFiLACgHQAEgJAKgEQALgDALgCIAbgCIAMAAIAKABIAKABIABABIAAADIgKgBQgbAAgRAIQgRAIgGARQgEANAABQQAAAhAJAbQALAhAVAAQAZAAAUgcQAQgYADgWIABARQAAAOgDANIgCAIQgEAKgFAJQgKAQgRAFQgJADgMABIgCAAIgHgBgAgDKBIADgWIAFgZQAEgcABgOIABgFIABgBIADABIAAABIABADQAGAeAAAVIgBAPIABgPQAAgVgGgeIgBgDIAAgBIgCgGQgWhYgXhPQgfhsgKhQIgEg7QAAg+AhhUIAVgvIABgSQAAgXgCgMIACgBQAOAXARATQgRgTgOgXIgDgEQgOgYgKgcQgJgYgKgkQgLglgWg7IgVg6QgRhCAOhgIABgEIAAgBIAAAAIAShVIgSBVIAAAAIgCAAQg3jfB2hcQAlgeAygPIArgKQASAoAfBwIABADIAAAAIAYBXIADAMQgOgCgEgFQgEgFgCAAQgJAAgNAQIgTAZIAdh9QgQALhBApQgrAcgVAlQgSAhgFA2QgDAgAABKQAABYAUBnQAbCNAtAAQAEAAAGgDIACgBQAHgEAIgGIACAAIgIAlQgIAcABAGQAAAJAPAPQAPAOALAAQAGAAANgYIACgFIgDARQgHAYgIAJIAEACIgHAQQgFAKgGAAQgVAAgKgKQgbAkgPBRQgOBHAAA/QAAArAHArIAOBYQABAPAXBEQAXBDgBACQABAEgJAaIgKAeQAFAFAWAAQAXgBAGAGIAAAAQgSABgVADIgPACQgMADgHACQgWgQABgIgAAbhGQABAsAMAYQgMgYgBgsIAAgGIAAgBQAAgNADgGIAMgZIACgFIgCAFIgMAZQgDAGAAANIAAABIAAAGIAAAAgAgagfIADgjIgDAjgABEC0QAEgpAGghQAQhWAggdIAQAuIAAABIACAHIgDgGQgEgGgLAAQgVAAgSBLQgIAjgFAlg");
	this.shape_12.setTransform(14.1999,92.7767);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E58C6B").s().p("AgbMlQgJgbAAghQAAhQAEgNQAGgRARgIQAPgIAcAAIAKABIAAACIAHAnIAGAeQAIAsADAaIAAADQgDAWgQAYQgUAcgZAAQgUAAgLghgAAwJKIgMAAIgNAAQgGgGgWABQgWAAgFgFIAKgeQAIgaAAgEQAAgCgWhDQgXhEgCgPIgOhYQgIgrAAgrQAAg/APhHQAQhQAbgkQAKAKAUAAQAGAAAEgKIAIgRIgEgCQAIgJAGgYIAEgRIgDAFQgNAYgGAAQgKAAgOgOQgQgPAAgJQAAgGAHgcIAJglIgCAAQgJAGgGAEIgDABQgFADgEAAQguAAgbiNQgUhnAAhYQAAhKADggQAFg2ASghQAVglAsgcQBAgpAQgLIgdB9IATgZQANgQAJAAQACAAAEAFQAEAFAOACQAXAkARBdQAQBXAABCQAAAlgIA8IgDAdIgEAfIgKghQgSg3gEgbQAEAbASA3IAKAhQAFAZAAASQAAAygUA0QgLAbghA1QggAegQBVQgHAhgDApIAFAAIAAAGIAAgGQAFglAJgjQARhKAWAAQAKAAAEAGIAEAGIABAFQAUBJgHAvQgHA3gZAzQgJATgMATQAMgTAJgTIgUDRQgEBJAIASIAMATQALAUgBAEIgMAiIgEAAgAA6DRg");
	this.shape_13.setTransform(21.025,99.5875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-1,36.5,208.2);


(lib.Symbol56 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFB59A","rgba(229,140,107,0.247)"],[0,1],0,0,0,0,0,5.8).s().p("AgDA0QgEgDgCgEQgCgFAAgJIgDgaIgBgXIABgRQACgKAGgEQAEgDADAAQAFAAADACQADACACAFQACAFgBADIgDAGIgBAGIAAAXIACAGIAAAKIACANQABAGgBAFQgCALgIACIgDAAQgCAAgDgBg");
	this.shape.setTransform(38.07,96.1781);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFB59A","rgba(229,140,107,0.247)"],[0,1],0,0,0,0,0,8.2).s().p("AAABJQgGgDgCgIQgBgEAAgLQABgagBgUIgHg3QgBgIACgDQACgIAJAAQAHAAAEAIQACAEACAJIABAGIABAMIAEBXQAAANgFAFQgEADgEAAIgEgBg");
	this.shape_1.setTransform(57.83,150.4696);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFB59A","rgba(229,140,107,0.247)"],[0,1],0,0,0,0,0,26.8).s().p("AA2ECQgJAAgEgQIgLgmQgThBgEgaIgHgsQgGgpgShNIgoi3QgFgUALgEQAIgEAHAJQAEAFACALIAwDaQAJAoAFAdIAHAzQAEAUAOAuQAMApAEAYQABALgCAFQgBADgDADQgDACgDAAIgBAAg");
	this.shape_2.setTransform(49.1025,109.617);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFB59A","rgba(229,140,107,0.247)"],[0,1],0,0,0,0,0,3.1).s().p("AgGAXQgJgFgCgQQgCgNAHgIQAEgFAIgBQAGAAAGAGQAEAFACALQACAPgEAGQgEAGgHABIgEABQgEAAgDgDg");
	this.shape_3.setTransform(40.7848,68.8225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFB59A","rgba(229,140,107,0.247)"],[0,1],-0.5,0,0,-0.5,0,19.6).s().p("AgiCEQgMg3AAhNQAAhNAMg3QAMg2ARAAQAQAAASA6QATA7gBBMQgBBNgRA0QgRAzgRABQgRAAgMg4g");
	this.shape_4.setTransform(39.5008,40.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#D4D4D4").ss(0.5,1,1).p("AgEgJQAEANAFAG");
	this.shape_5.setTransform(53.625,139.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#AD6247").ss(0.5,1,1).p("AhysuQghA7gPBiQgMBNgJBaQgTC0AKA/QALBHATAaQAPAVAdgEQAVgCAigbIAegbIAKAEIgNAWQgNAZACAPQACASAHAQQAGASAGAAQAIABAKgOQALgQABgZAgHgtQAAAQgLAHQgEADgUAIQgVAIgTARQgSAQgKAcQgIAXAAAXQAABCAjBAQAhA6A2ArQABAAAAABQABAAAAgCQgEgggDgkQgJhHAAgpQABgCAAgBQACgpAAgIQAEAaADAYIAAAAQAVB9APBAQAWBiAtCJAAEiAQAAABAAABACVJJQgKAEgIADQgaAQgGALQgFAKAAAtQAAA8AFAcQAJAoAVAKQAHADAIAAQAUAAAPgNQANgLAEgSQAAgCAAgB");
	this.shape_6.setTransform(42.7513,81.3875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.5,1,1).p("Aj8rfQgfgGgWgTQgYgVgJggQACgiASgdQA5gSBGgPQBrgXA9AHQAFABAFABQAMA/AVAuQAXAtAaAvQAaAvARA+QAQA7ACAvQACAugUBSQgQA+gLAYQgBACgBACQAKAiABAQAhRtWQgIAnABAIQAAAVgGA0QgHBEgNA/AkJtVQAPAuACAHQAAAEAAAPQAAALgDAaQAAAFgBAEQgCAUAAAKQAABHAlBSQAfBFA0BJAh9odIgGBAQgDAmAAAdQABACgBAOQAAAOADAdQADAdAGAcQAEAXASAUQAPASAUATQAQARATASAAXjfQACACAGASQAHARAAAMAAXjfQACgGABgFQAIggALgNAAAi3QAPgRAIgXAhBjWQgfCzAbBdQAQA7A7A6IATAiQAwBaANAhIARAvQAKAeAEAUQgGALgBAEQgBACgBABQgEAGAAADQAAABAEAFQgEAKgIATQgNAfAAAMQAAAAAAABQAAAOAUATQASARARAFQAAADAAADQAAACAHAIQAIAJACAFIACABQAAAAAAAAQABgCAAgDQgEgiAAgJQAAgMABgMIAAAAQACgUAFgUQAJgFANgHQAIgDAJgEQABgBABAAQABgBABAAQAHgDAJgEABejsIAAAAQAAAPgEAXQAAABAAAAIARA2QAdBiASBcQA5E6AHAYQAGAXAOAnABajFQgGAigBAHACJGRQACAFAKAVQAFALAAAIQAAAFgCAJQgDAJAAAEQAAAEACAGQABAAABAAQAPgHAZgLQABAAAAAAQAJgEAJgEQAOgGAMgEAB3HIQADADADADQAUAUACADQACgBACgBQAAAAAAAAABsHOQAFAGALAKQAHAIAGAGQAFAGAEAGQgCARgDAbQgDAZAAARABEIuQAAAAAAABQgFALAHALIAQAhQARApAFAlQAJA8AABPIAVATQABgBABAAIgBgLIgDjSIAAgBABTIWQgEAEgFAHQAAAAAAAAQgFAFgBAIQAAACAAACQAAAFAdAYQAfAbAIAJQABABAAAAQAQASAIAaQABACABADQAEAPAGAdQgEAOgBAIQAAABAAACQAAACABACQAGAWACAkQACAzACAMQAAAFgBAKQAAAIAGAGQAGAGAfAMQAgANAUgEQAUgFALgOQAHgJAFgXQADgKACgLQAEgQAFgTQACgJABgIQACgFAAgFQABgFAAgEQAAgBAAgBQABgGgBgFQAAgCAAgCQgOhBgkgYQAAgHgCgJACSH4QAEAGACAFIABABQAEgDAFgEABuG8QAEAGAFAGADvHaQACgBABAAQAEgCAEgBQgCgPgCgLQgEABgEACAB1GtQADAQgBALAAGCvQANAMAOAMQAFAEAEADAEeKUQgCgPgDgSQgIgtgCgKQgKg5gTgqAERLIQABgBABAAQAOgKAAgLQAAgFgBgHAFIMXQAFgEAFgFAERLIQATASAkA9ACdJtQAIARAEAKQACAFABAEQAAAAAAAAQABADABAJQABACAAADQACAMACAFQAAABABACQAFAGASAJQAFACAFADQABAAABAAQAQAHAMAAQACAAABAAQACAAABAAQAOAVAZAtQADAFAIAQQABAAABAAQAJAAASgRAC0K2QgBAGgDALQgCAFgBAFACpLuQAFAKAVAQQAPALArAKQADAAADABQAHACAIADQAPAFAKAAACMNRQAHgFAGgGQABAAAAgBQgBgoACgwQACgqAGgeACKNSIACABIAAgCAD5LRQANgCALgH");
	this.shape_7.setTransform(33.7284,92.4717);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D4D4D4").s().p("ABaC5IgOgGIgHgBQgrgKgPgLQgUgQgEgKIgCgEIAAgDIAFgWQgGgdgEgPIgBgFQgJgagQgRIgBgCQgIgIgfgbQgcgYAAgFIAAgEQABgHAEgGIAAAAIAJgLIAAABQAAAOAUAUQATAQAQAFIAAAGQAAACAHAIQAJAJABAEIACABIAAAAIAAAAIAMAbIADAJIAAABIADALIAAAGQACALACAFIACADQAEAGARAJIAKAFIACAAQAQAHAMAAIAEAAIACAAQAPAVAYAtIALAWQgKgBgPgEgAgHBcIgDAKIADgKIAFgRIgFARgAgcABQgBgEgJgJQgHgIAAgCIAAgGIADgqIAFgsIAGALIABABIAJgHIgJAHIgBgBIgGgLIgJgMIgMgNIgRgRIgDgGQAAgCADgHIACgDIAHgPQADAQgBALIgJgMIAJAMIAGAGIAWAXIAEgCIABAAIABAAIAngSIACAAQAEAOAFAGIABADIgBABIgDABIgRAHIgVAMQgFAUgCAUIAAAAIgBAYIAEArIgBAEIAAAAIAAAAg");
	this.shape_8.setTransform(52.1,154.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAHBeIABgBQAOgKAAgLIAAgMQAkAZANBBIABAEIAAAKIgKAKQgkg9gTgTgAg+iEQgFgGgEgOIASgIIAagKIAIgDIADAaIgHADIgDACIgSAHIgQAHg");
	this.shape_9.setTransform(60.3659,154.2125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3AA2FF").s().p("AAKAwIgKgVQgYgsgPgVQANgCAMgHQARASAlA8QgTARgJAAIgCAAg");
	this.shape_10.setTransform(62.6,168.4625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8E0000").s().p("AgJBpIgDjRIABAAQAOASAJAaIACAEQgGAfgCApQgCAvABApIgBABg");
	this.shape_11.setTransform(48.65,165.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B40000").s().p("AAWCwQgfgNgGgGQgGgGAAgIIABgPQgCgLgCgzQgCglgGgWQAFAKAVAQQAOAMArAJIAGABIAPAGQAPAEAKABIACAAQAJAAATgRIAJgKIAAACIgBAKIgBAKIgEAQIgIAjIgFAVQgGAXgHAKQgLAOgUAEIgLABQgRAAgXgJgAhUBYQAAhOgJg7QgFgmgRgoIgQgiQgHgLAFgLIABgBIgBAEQAAAFAdAZQAfAbAIAIIABACIgBAAIAAgCIAAACIAEDRIAAAKIgBABgAg9BqgAg9BgIANAAQgGAGgHAEgAhBhxg");
	this.shape_12.setTransform(53.9225,166.7277);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AD6247").s().p("AEMM4QgMAAgQgGIgCgBIgKgFQgSgJgFgGIgBgDQgCgFgCgLIgBgGIgCgLIAAgBIgDgJIgMgbIABgEIgEgsIABgYIAAAAQACgUAFgTIAWgMIARgIIACgBIACgBIAQgGQgaAPgGAMQgFAKAAAtQAAA8AGAbQAIAoAVAKQAHAEAIAAQAVAAAOgNQANgMAEgSIACAQIABAMQAAALgOAKIgCABQgLAHgNACIgDAAIgDAAgACAKgQgUgTAAgPIAAgBQAAgMANgeIAMgeIAQARIANANIAJAMIgFAsIgDAqQgRgFgSgQgACWI1IgGgGQABgLgDgPQgEgVgKgdIgRgvQgNghgwhaIgTgjIAbAZIAJAGIgJgGIgbgZQg7g5gQg8QgbhdAfiyIAjAiIgjgiQgUgUgPgRQgSgVgEgWQgGgcgDgdQgDgdAAgPIAAgPIAAgDQAAgcADgkIAGhAIgGBAQgDAkAAAcIAAADQg1hKgehEQglhTAAhHIACgdIABgJQADgbAAgLIAAgSIgRg1IARA1IAAASQAAALgDAbIgBAJQgfgGgWgTQgYgVgJggQACgiASgdQA5gTBGgPQBrgWA8AGQggA7gQBiQgLBOgKBaQgSC0AJA/QALBHATAZQAQAVAcgDQAVgDAigbIAegaIAJADIgNAWQgNAaACAOQADASAGARQAHARAFABQAIABALgOQALgQABgZQAAAOgEAYIAAAAIgHAqQAAAPgMAIQgDACgUAIQgVAIgTARQgSARgKAbQgIAYAAAWQAABDAjA/QAgA6A4AsIAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIgIhDQgIhIAAgpIAAgCIACgxIAIAxIAAABQAVB9APBAQAWBhAtCKIgoARIgCAAQgCgFAAgFIADgMQACgJAAgGQAAgIgFgLIgMgaIAMAaQAFALAAAIQAAAGgCAJIgDAMQAAAFACAFIAAABIgEABIgWgXgAAwh4IAIAVQAHARAAALQAAgLgHgRIgIgVIADgLQAIgfALgOQgLAOgIAfIgDALIAAAAgAAZhQQAPgRAIgXQgIAXgPARgAhFp2QgHBDgNBAQANhAAHhDQAGg0AAgVIAAgDQAAgKAHgiQgHAiAAAKIAAADQAAAVgGA0gAAfEWIAAAAg");
	this.shape_13.setTransform(31.2375,82.1314);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E58C6B").s().p("ACBMsQgVgKgJgoQgFgcAAg8QAAgtAFgKQAGgLAagQIASgHIADgBQASAqALA5IAKA3IAFAgIAAADQgEASgNALQgPANgUAAQgIAAgHgDgAAkFVQgPhAgVh9IAAAAIgHgyIgCAxIgBADQAAApAJBHIAHBEIgCABQg2grghg6QgjhAAAhCQAAgXAIgXQAKgcASgQQATgRAVgIQAUgIAEgDQALgHAAgQIAHgpIARA2QAdBhASBdQA5E6AGAYQAHAXAOAmIgaALIgSAIIgBAAQgtiJgWhigAgahHQgGAAgGgSQgHgQgCgSQgCgPANgZIANgWIgKgEIgeAbQgiAbgVACQgdAEgPgVQgTgagLhHQgKg/ATi0QAJhaAMhNQAPhiAhg7IALABQAMBAAWAtQAXAuAaAvQAZAvAQA+QAQA7ACAuQACAvgUBRQgPA/gKAYIgCAEQAJAiABAQIAAACIAAABQgBAZgLAQQgJANgIAAIgBAAg");
	this.shape_14.setTransform(42.7513,81.3875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1.2,69.69999999999999,187.5);


(lib.Symbol55 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFB59A","rgba(229,140,107,0.247)"],[0,1],0,0,0,0,0,3.1).s().p("AgIAbQgFgBgBgIIACgLIAFgQQADgJAEgGIADgCIACAAIAAgBQAGACACAGQADAGgDAFIgEAGQgCADgBAIIgDALQgDAIgFAAIgDgBg");
	this.shape.setTransform(11.2125,78.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFB59A","rgba(229,140,107,0.247)"],[0,1],0,0,0,0,0,3).s().p("AAAAVQgCgDgCgIIgEgKIgDgHQgDgEAAgDQABgGAEgBQAEgDAEADQACABADAFIAFAKIAFALIABAJQAAAFgDACIgFABQgDAAgEgCg");
	this.shape_1.setTransform(25.9,85.3725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFB59A","rgba(229,140,107,0.247)"],[0,1],0,0,0,0,0,6.2).s().p("AgXAqQgJgRAAgZQAAgXAJgSQAKgSANAAQAOAAAKASQAKASgBAXQABAZgKARQgKARgOAAQgNAAgKgRg");
	this.shape_2.setTransform(8.45,88.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#AD0000").ss(0.5,1,1).p("ACShOQgDABgDABQgEADgCADQgBACgBACQAbAOA2AOQA5AOAYANQApAUAZASQAVARARATAhqhWQgBgBgBgBQgDgCgCgCAhqhWQAIAKgKA7QAogcAAgLQAAgBgRgNQgNgJgIgHgAmKAtQgDAKAAAFQAAANAQAKQAPAKAQAAQAogLAcgNQAcgOA3gwQBKhoARAJ");
	this.shape_3.setTransform(7.875,24.3625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgIgFQAAAEAEADQAEAEAEABQAFADAAgFQAAgFgJgEQgHgFgBAEg");
	this.shape_4.setTransform(43.2328,18.5264);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E58C6B").ss(0.5,1,1).p("AAEASQABgWAKgLIAVgQIAKAAQAAABABADQAAAIgUATQgPAOgIAEgAguASQAAgLAJgOQAJgPAEAAIABAIQAAANgLAWQgMAXAAgag");
	this.shape_5.setTransform(3.35,103.4023);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#AD6247").ss(0.5,1,1).p("ABwndQgDAFgGAEQgLAIgNAAQgLAAgKgGQgJgGgGAAQgFAAAAAIQAAAWAIAYQAEAOAFAKACEnjQACgCACAAIACACQAEADAJAIQABABACACQAXAQAZABAgaDSQADACABABIACgFIgBgEQAAgIADgMQAEgOAEAAIAPADQAJAAAMgEQANgDAEgFQAAgBABgBIAAgBQgBABAAACQgDAHAAALQAAAKAEATAA4DYQABgIABgGQAAAAABAAQADgQACgHQAFgTAOgDQACAAAjgEQAWgCAMgIIABAAQAAACgBACQgHAVgFATQgIAZgFAXACDDsQACgDACgDQAOgXAIgMIABAAQAPgYAPAAQAIAAAGAkQADATACAcADgFbQgHAFgHAEQgXAPgNAEQgEABgDAAQgQABgWAFQgBAAgCAAQgYAFghAMQghAMgdAAQgjAAgghIQgcg/AAgwQAAgZABgGQABgMAHgRQACAAABAAQAFAAAKAKQAIAHADAEQAOANAIAHAA4GvQAKgIAOgJQAOgJATgJQABgBACAAAjfDVQAQBVAtBPQAuBRAtAc");
	this.shape_6.setTransform(3.525,56.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.5,1,1).p("AAtm2QABgQAEgkIihgRQAIA4ACAdQABALAAAMQAAALgEAPQgBAFgBAFQgFAPgDAKQAXARAKAFQABABABABQAIAFAHADQAPAJANAEQABABACAAIAAAAQACABABAAQACABACABQADAAACABQADABAEAAQACAAACAAQACAAACAAQACAAACAAIABAAQACAAAEgBQAAAAAAAAQAGgCAHgDQAOgFASgMQAAAAABgBQAMgHAOgLQARgNAWgSQACgBACgCQgIgBgGgCQAGgDAFgGQADgEAEAAQAFAAAFAEQACABACABQAEADACADQACADABADQAAACAAABQAAAHgHAGQgIAGgEADQgFADgbAUADOmIQANgDAKAAQASAAA1AgQAAAAABAAQAQAKATANQAIAFAJAFQAAABAAAAQAWAOARANQBAAwAAAYQAAAGgCAGQgEANgMALQgKAKgPAFQgFACgGABQgDABgEABQgMACgaAEQgBABAAAAQghAEgGAAQgMgBgFAAQgMAAghgKQgNgEgKgDQAAAAAAgBQgCAAgBgBAEOlsQADAAAEAAQAKACALADQABABABAAQAEACAFABQAEACAEACQAEACAFADQACABACABQADADAEACQAIAFAHAGQATAPALASAE8j+QgLgFgKgHQgBAAAAAAQgCgBgBgBQgbgSgPgVQgDgDgCgEQgCgCgBgDQAAgBAAAAQgGgKAAgJQAAgHAEgHQAIgNAXACAFmjzQgEAAgEgBQgRgCgRgIQApAiAYAcQAIAJAGAJAGEkdQABABABAAQAhAdAaAfQADADACADAGEkdQAJASgIAMQgJANgWgBQARARATAXQADAEADADQAHAJAGAIAF/kkQADAEACADADOmIQAhAMAfAQADJmGQACgBADgBACil4QAIgDAKgEQALgEAKgDACQlvQAEgCAFgDQAEgCAFgCQAaAIAZAPQALAHALAHACZl0QAZAQAZARQAXAQAXAQAAtm2QAAAJAAAHQgBAMAAAKQgBAEAAADQAAACAAABQAAAEAAADQAAADAAACQAAABAAABQAAAJACAUQACAVAAALAAtm2QACAJADAHQAFASAIAKQADAFAEAEQAOANAWAGAASklQAAAAABgBQAEgUAEghQACgSACgOQAAgBAAgBQAAgJABgHAAgmNQAAgCAAgCQAAgCAAgCQAAAAAAgBQgBgIAAgIQAAgNAAgIAgekjQgCgCgCgDQgUgagZhMAiWlIQAVAOAZAKQAIADAIACQAAABABAAQAYAIAcAFQAGACAHABQADAAAEABQABAAACAAQABAAABAAQAEABAEAAQABAAABABQAAAAAAAAQADAAAFgCQAIgBANgFQAMgFAogQAjricQACgCACgDQAHgKAIgKQAggmAkgaIAAAAQAbgSAcgNQAqgEAQgBQAEAAAEAAQAGAAAGAAAAAkXQADAAAEABQABAAABAAQAiAHAiAMQABAAAAAAQAmANAmAUQAGADAHADQAaAOAbARQAEAEAFACAB/E7QAAgCAAgCQABgIABgFQgCgPAAgTQAAgYANgeQAUg0ABgCQAHgaANgsQANgrAmjgQgCgBgBgBACECqQgEAKgJAMQgFAHgMAOQgHAJgMAVQgHAMgLAaQgGAOgKAaAhwEuQgBgBgBgBQAAgCAAgBQgFgeAAgRQAAgFAEgYQAFgWgCgMAgpEsIADAGQAAABgBAAQAAAAgCAAIAAANIAGAAQABAAABgCIAHAAQgCgGgBgEQgDgJAAgEQAAgBAAgBQAAgTAFgVIAAAAQAIgZADgNAAeHmQAHgCAIgCQAGgBAHAAQACAAACAAQAWAAAHgFQAKgGAIgGQAUgOAJgMAB6FZQADgSACgMACZIIQAAgCABgCQADgLAFggQAFgjAAgWQAAgSgDgKQgBgCgMgcQgDgGgKgQQgIgLgDgKAh2JRQAEACAEAEQACACADAAQAGAAAOgMQAKgIAOgOQAJgKAXghQAAgBABAAAh2JRQAHgEAHgFQAIgGACgBQAAgDgDgDQgCgDAAgCIAAgSIAAgHIAFAAAh4JQQAFgGAFgMQAJgYACgCAh4JQQABAAABABAkMlCQADgDAEgDQBhhiAWikIEJgKQAZB4A1BaAh8lhQgJgJgDAAQgFAAgEACQgDABgEACQgEADgHAEQAAACACADQABACAAABQAAAAAAAAQgBABAAAAQgvASgvAAQgHAAgGABQgpAEgrAeQgwAjglA7QgCADgCADQAAAAgBABQgeA1ApAKQASAEASACQAAAAABAAQAAAAABAAQAKABALAAQAoAAAmgLQAkgKAXgSQANBgAZA4QAKAWAXA+QAUAtAAArQAAASgBAEQgBAJgFAIQg0AFgkAZQgZARgsAzAh8lhQgDACgCACQAIAGAHAFAiXDPQgCADgDADAjAGAQABAcAYBCQABAEANATQANATAHAHAidJCQAIAMAIAFQAGADAFAAQAFAAAFgGAhol1QgJALgLAJ");
	this.shape_7.setTransform(12.0988,47.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5F0E0E").s().p("AgMAVQAFgGAFgLQAIgYACgBIAAARQAAACACACQADADAAAEIgKAHIgNAIIgCgBg");
	this.shape_8.setTransform(1.275,104.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AD0000").s().p("AlXBpIABgUQAngLAdgNQAcgOA3gvQBKhoARAIIgFgEIAFgFQAVAOAZAKIAQAGIABAAQAYAJAbAFIAAADQgPABgqAFQgcAMgbATIgCgEIACAEQgkAZggAmIgPAUIgEAFQgXARgkAKQgmAMgoAAIgVgBgAhiheQAIAKgKA7QAogcAAgKQAAgCgRgNIgVgQIgCgCIACACgAlZBoQgSgBgSgFQgpgKAeg0IABgCIAFADQgDAKAAAGQAAANAQAJQAPAKAQAAIgCATIgBAAIAAAAgAFeA7QgMAAghgLIgXgHIAAAAIgDgBIgJgGQgbgRgagOIgNgGQgmgTgmgNIgBgBQgigMgigGIgCAAIABgDQAIgCANgEIA0gWIALAHIgCAEQAbAPA2AOQA5ANAYANQApAUAZASQAVARARATQghAFgGAAIgRgBg");
	this.shape_9.setTransform(7.0988,25.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E90808").s().p("AlzCCIACgTIgBATIgBAAgAmQBlQgQgKAAgNQAAgFADgKIgFgDIAEgGQAlg6AxgjQAqgeAqgEIAMAAQAvAAAvgTIABAAIAAgBIgBgCIgCgFIALgHIAHgEQAFgBAEAAQAEAAAIAIIgFAFIAQALIAgAWIACABIAPAJQAPAIANAFIADABIABAAIACABIAFABIADABIAHABIAEABIAEAAIAEAAIABAAIAHgCIAAAAIANgEQAOgGASgMIABAAIAagTIAngfIAEgDIgOgDQAGgDAFgFQADgEAEAAQAFAAAGADIADACQAEADACAEIAKgGIAxAhIAuAhQAPAVAbARIADACIABABQALAGAKAFQApAhAYAcIAPASIgnAHIgBAAQgQgTgWgRQgZgSgpgVQgYgMg5gOQg2gOgbgOIACgEQACgEAEgCIAGgCIgGACQgEACgCAEIgLgHIg0AVQgNAFgIACIgIABIAAAAIgDgBIgIgBIgCAAIgDAAIgHgBIgMgCQgbgGgZgIIgBAAIgPgGQgagKgVgOIgEAFIAEAEQgRgJhKBoQg2AwgdANQgcAOgoALQgQAAgPgKgACqhsQAAAGgHAGIgMAJIggAYIAggYIAMgJQAHgGAAgGIAAgBIAAgDIgDgFIADAFIAAADIAAABgAh/AAIADADIgBABgAh9hEIAVAQQARANAAABQAAALgoAbQAKg6gIgKg");
	this.shape_10.setTransform(9.7625,22.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3AA2FF").s().p("ABcBaIgGgHQgTgYgRgRQAWABAIgNQAIgMgIgSIABACQAiAdAaAeIAFAGQgEAOgMALQgLAJgOAFIgNgQgAATAZQgPgDgNgJIgTgNIgmghIASgDIASAPIABgCQAMgBALADQAIADAKAGIAFACQAPAKAHAIQAGAKgFAFQgEADgGAAIgLgBgAgEgJQgBAEAEAEQAEADAEACQAFACAAgFQAAgEgIgFQgEgDgCAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAABAAAAgAAMgqIgEgCIgHgEQgDAAgBABQgBAAAAABQAAAAAAAAQAAABABABQAAAAAAABIAEAEIABABIAIADQADABACgCIABAAIAYAUQgNABgLgEIAAAAQgKgDgMgHQgQgKgHgKQgHgKAGgFQAGgEAPADIAJACIAGADIANAHQAHAEAMALIAkAdIAAAEIgQACgAhehDQgZgOgagJIASgHIAVgHIAFgBQAhALAfAQQgXgBgJANQgDAGAAAIIgWgPg");
	this.shape_11.setTransform(42.9125,18.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#121212").s().p("AjnCFQBihiAViiIEKgKQAZB3A1BZIgVAHIgSAHIgJAEIgJAFQgDgDgEgDIgDgCQgFgEgFAAQgEAAgEAFQgFAFgGADQgWgGgNgNIgIgJQgHgKgGgSIgEgQIAFgzIiigQQAJA2ACAdIABAXQAAALgEAQQgJAKgLAJQgJgIgEAAQgEAAgEABIgHAEIgLAGIACAGIABACIgBAAIAAABQgvASgwAAg");
	this.shape_12.setTransform(9.025,1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E58C6B").s().p("AiBHhQAAgLAJgQQAJgPAEABIABAIQAAANgMAXQgFAKgDAAQgDAAAAgNgAhDG+IAUgQIAKAAIABAEQAAAJgUATQgPAOgIAFQACgYAKgLgACbGlIgBgGIACAHQADgWAFgrQAEgsgnAmQgYAPgNAEIgGABQgRABgVAFIgEAAQgYAFggAMQghAMgdAAQgjAAgghIQgdg/AAgwQAAgZABgGQABgMAIgRIACAAQAFAAALAKIALALIAVAUIACABIAFADIABgFIAAgEQAAgIACgMQAEgOAEAAIAQADQAKAAALgEQANgDAEgFQgDAHABALQAAAKADATIADAGIgBABIgCAAIAAANIAGAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIAIAAIgDgKIADgOIAAAAIAFgXQAFgTAOgDIAkgEQAXgCAMgIIABAAIgCAEIgMAoIgNAwIACABIAEgGIAXgjIAAAAQAQgYAOAAQAIAAAGAkQADATACAcIAGgfQADAKAHALIAOAXIANAeQADAJAAASQAAAWgFAjQgFAggDAMIgBADIgCABIAAgDgAgGl/IgFgBIgGgBIgEgFIgEgJQgGgKgEgOQgIgYABgWQAAgIAEAAQAGAAAKAGQAKAGAKAAQAMAAAMgIQAFgEADgEQAEgGACgGIgBAQIgBACIgDAfQgEAhgEAVIgBABIgNAEIgBAAIgGACIgBAAIgEAAIgDAAgAAzmcIgCggIgCgdIAAgBIAAgFIAAgIIADgBIAEgCIACACIANALIADADQAXAQAZABIgnAfIgaATIgBAAg");
	this.shape_13.setTransform(11.7,57.1648);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AD6247").s().p("AhHIoIgJgGIAOgIIAKgHQAAgEgCgDQgDgDAAgCIAAgRIAAgIIAFAAIgFAAIAAAIQgCABgIAZQgFALgFAGQgFAGgFAAQgGABgFgEQgIgFgIgMQgtgcguhQQgthQgQhVQAsgzAagRQAkgZA0gFQAEgHACgJIAAgXQAAgrgUgtQgWg9gKgWQgag5gMhfIAEgFIAPgUQAfgmAlgaIAAAAQAagTAdgMQApgFAPgBIAJAAIALAAIAEABIABAAIAIABIADAAIABAAIAHACIABAAQAiAGAjAMIABABQAlANAnATIAMAHQAbAOAaARIAJAGIAEACQgmDhgNAqIgVBFIgVA2QgMAfAAAXQAAAUABAPIgBANIAAADIgGAfQgCgcgDgSQgGglgIAAQgPABgPAXIgBABIgWAiIAPgpQALgaAIgLQAMgWAHgJIARgVQAJgLAEgLQgEALgJALIgRAVQgHAJgMAWQgIALgLAaIgPApIgEAGIgDgBIAOgwIAMgoIABgEIgBAAQgMAIgWADIglADQgOAEgFASIgFAXIgBAAIgFABIAAAAIAAgCQAAgTAFgVIAAAAIALgmIgLAmIAAAAQgFAVAAATIAAACIACANIAEAKIgIAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgEAAIAAgMIACAAIAAgCIgCgGQgEgTAAgKQAAgLADgHQgEAFgNAEQgMADgJAAIgQgCQgEgBgEAOQgDAMAAAJIABADIgIABIgBgEQgFgeAAgQQAAgFAFgZQADgQAAgLIAAgGIAAAGQAAALgDAQQgFAZAAAFQAAAQAFAeIABAEIgWgUIgLgLQgKgKgFAAIgDAAQgHASgBALQgBAGAAAZQAAAwAcBAQAgBHAkAAQAdAAAggMQAhgMAYgFIADAAQAWgEAQgCIAGgBQAOgEAXgPIAOgJIgOAJQAoglgFArQgEArgEAWIgBgGIAAAFIgMgKQgLgEgEABIgRgCQggAAg8AfQgiATg/AmIgDgBQALgIAOgOQAJgLAWghIAAAAQAKgJANgJQAPgJATgJIADgBQAHgDAIgBIANgCIAEAAQAVAAAHgEIATgNQAUgNAJgMQgJAMgUANIgTANQgHAEgVAAIgEAAIgNACQgIABgHADIgDABQgTAJgPAJQgNAJgKAJIAAAAQgWAhgJALQgOAOgLAIQgNALgHAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgAhVH4QgJAQAAALQAAAZALgWQAMgXAAgNIgBgIIgBAAQgEAAgIAOgAghHwQgJALgCAYQAIgEAPgPQAUgTAAgIIgBgFIgKAAgAiAGwQABAEANASQAMATAHAHQgHgHgMgTQgNgSgBgEQgYhDgBgcQABAcAYBDgAgDDOIABgBIAAgBIgBACIAAAAgAh1CmIAFgGIgFAGgABYETIAAAAgAAGD4IAAAAgAAHlRIgEgFQgSgbgahMQAaBMASAbIAEAFIgCgBIAAAAIgDgBQgMgFgQgIIgOgIIgDgCIgggWIAHgZIADgKQAEgPAAgMIgBgWQgCgdgJg4ICiAQIgFA1IgBAQIgBAVIAAAIIAAABIAAABIAAgBIAAgBIAAgIIABgVIABgQIAEAQQAGASAHAKIAIAJQANAMAWAGIAOADIgDAEQgZgCgXgQIgDgDIgNgLIgCgCIgEACIgDABIAAAIIAAAFIAAACIACAcIACAhIADAEQgSAMgOAGIABgBQAEgUAEgiIADgfIAAgCIABgQQgBAGgEAGQgDAEgGAEQgLAIgNAAQgLAAgKgGQgJgGgFAAQgFAAAAAIQAAAXAIAXQADAOAFAKIAFAJIgGADIAAAAgABGm8IABgDIAAAAIAAgFIgBgQIgBgVIABAVIABAQIAAABIAAAEIgBgCgAhLmAIgQgLIAGgEQALgJAJgLIgDAKIgHAZIAAAAg");
	this.shape_14.setTransform(8.225,52.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AALAnQASAIARADIAIAAQARARATAYIgNAKQgYgbgqgjgABVAKIgCgCQAJASgIAMQgIANgWgBIgIAAQgRgDgSgIQgKgEgKgHIgBgBIgDgBQgagSgQgUIgEgHIgEgGIAAAAQgFgLgBgIQAAgIAEgGQAJgNAXABQgggQghgLQAOgEAJABQASAAA1AfIgBAFQgLgEgLgBIgGgBIAGABQALABALAEIACABIAHADIAIAEIAKAFIADACIAIAEIAPALQATAQALASQgLgSgTgQIAAgBIABAAIAnAcQA/AuAAAYIgGAGQgbgeghgdgAg+gZIAmAgIATAOQANAJAPADQAPADAGgEQAFgGgGgJQgHgKgPgIIgFgDQgKgGgIgCQgLgEgMABIgBACIgSgOgABTAIQgBgDgEgDQAEADABADgAAFgnIAHADIAEACIAuAmIAQgCIAAgCIgkgeQgMgKgHgFIgNgHIgHgCIgIgDQgPgDgGAFQgGAFAHAJQAHAKAQAKQALAHAKAEIABAAQALADANgBIgYgUIgBABQgCABgDAAIgIgEIgBgBIgFgEQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIADgBIACABgAALAnIAAAAgAALAMQgEgCgFgDQgDgEAAgDQABgFAHAFQAJAFAAAEQAAABgBABQAAABAAAAQAAAAgBABQAAAAgBAAIgCgBgAiWhNIAJgEQAaAIAZAPIgKANIgyggg");
	this.shape_15.setTransform(42.5375,18.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.4,-13.5,93.1,122.1);


(lib.Symbol54 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFF2E9","rgba(255,224,201,0.247)"],[0,1],0,0,0,0,0,9.9).s().p("Ag3A0QgfgCgGgQQgGgRAXgVQAXgVAmgOQAmgOAgACQAfABAGARQAGARgXAUQgXAWgnAOQggAMgdAAIgIAAg");
	this.shape.setTransform(9.4011,5.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.9,10.5);


(lib.Symbol53 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFF2E9","rgba(255,224,201,0.247)"],[0,1],0,0,0,0,0,9.8).s().p("AgyBFQgWgdAAgoQAAgnAWgcQAVgdAdAAQAeAAAVAdQAWAcAAAnQAAAogWAdQgVAcgeAAQgdAAgVgcg");
	this.shape.setTransform(7.3,9.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.6,19.4);


(lib.Symbol52 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AF4720").ss(0.5,1,1).p("AAVAOQgBgDgNgfQgMgggMgUQgMgUgSghQgSghgPgVQgQgUgRgZQgRgZgPgaQALAEAMAHQALAIAMAMQACADAEAFQAJAKARAVQANASANAVQAPAZAGAJQAMAQAIATQAVAnANAvQAFASAEAUQAAABAAAAQAJArAFAbQADAJABAHQAEANADALQALAhAMAVQAAAAABABQAhA4ANAQQABACACADIABAAQABABABACQABABABAC");
	this.shape.setTransform(15.325,28.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("AipkiIANADQAIAEAKAHQAPALASARQApAnAlA6QANATAKATQAAAAABAAQAAABAAAAQAXAsAOAsQAEAOAHAXQAAAAAAABQAIAdAKArQANA4APAgQABAAAAABQATAmAXAjQABABACACQAXAkAKAEQgMgFgYgQQgCgCgDgBQgBgBgCgBQgDgDgEgDQglgdgQghQgBgDgCgEQAAgBAAAAQgKgWgKgjQgBAAAAAAQgDgMgEgMQAAAAAAAAQgCgIgCgJQgNgrgIgYQgDgMgDgH");
	this.shape_1.setTransform(17,29.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6B33").s().p("ABoD4IgFgDIgCgCIgCgDIAAgBIgEgEQgMgQgig4IgBgBQgMgVgKghIgHgZIgEgPIgNhFIgBgCQgDgUgGgSQgMgwgVgnIAMgFQAYAsANAsIALAlIAAACIASBHQANA4AQAgIAAAAQATAmAXAkIADADQAYAjAJAFQgMgFgYgRgAhCiiIgWgiQgMgWgOgRIgZgfIAEgDQApAnAmA6QAMATAKATIgLAGQgKgSgLgQg");
	this.shape_2.setTransform(19.9875,31.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AF4720").s().p("ABXDSIgDgHIAAgBQgKgWgLgjIAAAAIgHgYIAAgBIgFgQIgUhDIgGgTIgOgiQgMgggMgUIgeg1QgSghgPgVIghgtQgRgZgPgaQALAEAMAHQALAIAMAMIAHAIIAZAfQANASANAVIAVAiQAMAQAJASQAUAnANAwQAFASAEAUIAAABIAPBGIADAQIAHAYQALAhAMAVIABABQAhA4ANAQIgCADQgmgegPggg");
	this.shape_3.setTransform(14.9125,27.8375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,36,60.3);


(lib.Symbol51 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9999").s().p("AgUAfQgLgKAAgLQAAgMATgUQASgUAIACIAIABIABACQAFADADAYQADAYgJAOQgJANgNAAQgLAAgMgKg");
	this.shape.setTransform(6.0791,4.1197);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.9,0,6.4,8.3);


(lib.Symbol50 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9999").s().p("AgkApQgWgIgGgTQgFgQAPgSQAPgRAbgFQAagHAXAJQAXAIAFASQAGARgPASQgQAQgbAGQgLADgKAAQgOAAgOgFg");
	this.shape.setTransform(6.6863,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.4,9.2);


(lib.Symbol49 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFE0C9").ss(0.5,1,1).p("AgcggIgBAAQgBABAAAEQAAAIAUAYQAKANALAPQAFgDAHgHQAIgIAAgCQAAgIgYgRQgXgTgMgBg");
	this.shape.setTransform(29.125,86);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFF2E9","#FFE0C9"],[0,1],0,0,0,0,0,25.8).s().p("AAgC2QgkhEgjhkQgkhjgNhMQgOhLARgGQAQgGAmBDQAjBEAkBkQAjBjAOBMQANBLgQAGIgDAAQgRAAgig9g");
	this.shape_1.setTransform(15.7574,48.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE0C9").s().p("AgKAFQgUgYAAgIQAAgDABgCIABAAQAMACAXASQAYARAAAHQAAADgIAIIgMAKIgVgcg");
	this.shape_2.setTransform(29.125,86);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFF2E9","#FFE0C9"],[0,1],0,0,0,0,0,22.5).s().p("AAvDUIgJgOQgWgxgVhBIglh0IgLgnQgEgPgEgeIgJhGQgBgNACgFQADgKAJgBQAIgBAFAJQACAEADAMIAIA9QAHAyAGAZIAOAsIAdBaQASA1AXAzQAFAMAAAGQAAANgKACIgEABQgFAAgFgFg");
	this.shape_3.setTransform(35.805,114.3472);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5B4033").ss(0.5,1,1).p("AhNhXQAjAXAEACQABAAACABQAFACAHACQAIABALAAQAPAAASgEQAFgCAFgBQAegKAGgQQABgCACgDAAQgmQAGAKAFATQAFASgnAMQgOAEgBACQgCAFApgDQgBABAAABQgTACgKAAIgCAAQAAAGALACQAKABAMgDQALgDgVAdQgVAdAAAB");
	this.shape_4.setTransform(52.1375,177.9375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#ECB186").ss(0.5,1,1).p("AjnocQAJgEAhgHQAngJARAAQBCAAAqBKQAPAaAWBIQARA5ATBiQAYCAAMBpQAHA5gFAeQgFAagOAFQgFADgKAAQgXAAgYgNQgVgLgTgTAjsoxIE3h7AA/DYQAIAGAEABQABABAGAAQALAAANgFQAOgFAGAAQAdAAAWBCQAJAaARBUQAPBHAJBHQAKBLAAAoQAAAYgQAHQgSAGgpAB");
	this.shape_5.setTransform(23.7,68.9375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.5,1,1).p("AA7i9QgJhnAAhdQAAhlgQh9QgJhKgUh3QAAgBAAgCQAAgCAAgCQACgcgJgpQgJgigEgUAlHsrQADAKADALQATBIAdB6QAfB4AhBTQAZA/ArB9QAHARAIARQAaA2AjAqQARAWAVAUABGhWQgGg1gFgyAAUg9QgEgQgCglQgCgagJgVAhBhLQAHAeADAfQANBkADAPQAbCPAjBFQAbA3AVBDQABADABAEADFG0QgCgGAAgFQgNhggJiFQgKiAgcheQgchegwhFABtHEQABgEAAgCQAagSAbAEQAbADABADQADgBADgBQACgBADAAQANAAAFAIQAFAHACAFQAAABAAABQAAAEABAFQAfgOAFAAQAIAAAEAVQACALAAATQAAAagEAFQgEAGgZAAQgEAAgFAAQgHgBgIgCQgCABgFADQgHAFgMAIQgFADgEADQgBABgBABQAaAUAPALQACALACAFQACAHADAHQABAFACAGQADAMAEALQACAHACAHQAEANAEAMQACAGACAGQAGATAEANQABADABACQABAFACAEQANAJAIAGQgLACgRAJQgcAPgNAAQgJAAgIAAQgYgCgSgFQgHgCgFgCQgQgHgggWABtHEQgBAIAAAIQAAAIABAJQgJgDgKgDQgPgFgLgDABvIAQAHgBAGgBQABAAABABQATAKAeAUQAEADAEACQgEACgDADQgCABgBACQgSAMgZARQgCACgCABQAAADACAEQABAFABAGQABAGACAHQACANAFAhQABADABADQAAACABADQACACAFACQADABAEACQAXAMAqAWQgGAEgHAEABuH1QgDgBgCAAQgJgDgKgCQAAAAgBAAQgKgDgKgDQAAALACAPIACAAQATAAAXgDQAAABABACQAAABAAABQACAMACAOQABADAIAiQAAADABADABuH1QAAAFABAGABwIFQABAAABgBQAcAPAfAXABwIDQABABABAAQAGgCAGgDQAEgBAFgCIAAAAQgMgDgNgEACHH8IAAAAQAAgBAAAAQAGgCAGgDIAAAAQAKgEAKgFQAKgFAJgEQAIgEAIgDACHH8QAHgCAGgBQABAAAAAAQATgFAVgGQAIgDAIgCQAAAHACAIQACAHABAGQgIgBgIgCQgmgIgHgBADLITQgFgCgGgCQgBgBgBAAQAAAAgBAAQgggNgFgBQgIgCgJgCACRHyQgNgGgXgHAB8H+QAFgBAGgBADlHiQAPgFAQgFQAFAAAAADQABACgBAFQAAAmgZAAQgDAAgEAAQgLgBgMgCAC/G2QAEAIAHAfQAOgHAMgEADVIWQAAAEABADQADARADAOQADAMACAJADdIZQgEgCgEgBQgFgBgFgCQgIAGgMAJADNHpQAMgEAMgDADpIIQgDgTgBgTABtHEQgSgCgRgGIgBgCQgHAQgBAEQgBACAAAHQgBgBgCAAQgUgGgIAAQgFAAgDASQgCANAAAKQAAAMAGAIQAHAJAMAAQAIAAANgDQACAXAEAcQAEATABAQQAGAxAAAbQAAAHgBAKQgCAKAAAGQAAAEACAEQABACADACQAGAHAJAHQABABADABIAAABQADgCAFgBQAMgFAVgHQACgBADgBQArgPAKAAQABAAABAAQAVABAcATQAGADAFAEQADACADACABBHpQgEgBgDgBQgDACAAAJQAAAKABAGIALABABVLeQgHADgCAHQgBAFAAALQgCATAAAQQAAAHAWAKAE1MCQgBgBgBAAQgEgCgHACAFDNDQABgHAAgLQAAgVgDgMQgDgIgGgFQgCgBgBAAQgPgZgMgeQgKgXgIgbQgEgLgDgMQgDgMgEgMQABAAgBAAQgIgmgGgoADDIqQALAIAOAKADXKFQgNAGgSAKQgKAFgKAFQAQAGAeAMQATAHAQAGQgKAFgNAIQAWALAaAOADKJ/QAHADAGADQAOAGAPAGACRJPQAUALAWAMQAEADAgALQAEACAGACQACABACABADKJ/QgKAEgNAHQgQAIgNAHQAFACAJAEACHJXQARAOAbAOQAJAFAKAFQACABACABADqJvQgFACgGADACHJXQgCACgDADACRJPQgFAEgFAEACMKXQAFAAAFACACAJRQADADAEADACPKiQAAADABAEQAAABAAAAQADAaAHAeAEAK4QgEACgHAEQAIADAHADAC4IyQgVAOgSAPABdNIQAHANAlAJQARADARACQAPACAOAAQAFAAAFAAQAbgCAigIQApgKAGgFQADgDACgGABdNIQgGAEgCAFQgBAFgDANQgGAQAAAQQAAAMAzARQAYAEAJABQAKABALABQAHAAAIAAQAUAAAYgDQAcgDAMgGQAigOAHgEQAIgFAAgbQAAgbgFgLABfMVIABALQAAAFgBAHQAAACgBADQgEALAAAFQAAADADAEABFITQARgEAagK");
	this.shape_6.setTransform(32.75,93.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5F482E").s().p("AhHAyIAVgeQAWgcgMADQgMADgLgBQgLgCAAgGIADAAQAKAAATgCIABgCQAagBAhgJQApgKAGgFQADgDACgGQAFALAAAbQAAAagIAFQgGAEgiAOQgNAGgbADQgXADgVAAIgOAAg");
	this.shape_7.setTransform(58,182.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8A6553").s().p("AgdDUQgmgIgGgOQgCgDgBgEQABgEADgLIABgGIABgLIgBgLIABALIgBALQgWgKAAgHQAAgQADgSQgBgMACgFQABgGAIgDQgDgFAAgEQAAgGACgJIABgRQABgbgHgwIgEgkIgIgyQASgEAagKIAEAaIAJAlIABAGIgBgGIgJglIgEgaIACgBQAcAPAeAWIgpAeIgFADIACAGIACALIACANIAIAuIABAGIABAEIABAIIAAABQAEAaAGAeIgEABIghAMIgIADIgBAAIgDgDIgQgOIgCgDIACADIAQAOIADADIABAAQAfAXARAHIAKAEQATAFAYABIAAAGQAGALAFATQAEATgnAMQgOAEgBACQgQgCgRgEgAADCEIgLgDIgDgCIgngZIAhgMIAEgBQArgQAJAAIADAAQAVABAcATIALAIQgGAQgeAJIgKADQgSAFgRAAQgKAAgIgCgAA3BCIAXgNIgigNIgugTIATgKIAfgPIAdAMIAEANIAIAZIgLAHIAPAFIAKAhIgwgZgAgNBZQgGgegEgaIAAgBIgBgIIAIAEIAHAEIBAAiIgNAHIgDAAQgJAAgrAQIAAAAgAA3BCIAAAAgAgaAOIgIguIgCgNIAFgEQARAOAaAOIATAJIAEACIgXAKIgcAQQgFgDgFABgABCgQIgLgEIALgGIgLAGIgkgOIgogXQASgPAUgPIAoAfIAFARIAEANIAEALIgEgBgAgkgtIAAAAgAAcheIATgNIAGAeIgZgRgAAJhrQgegUgTgKIAIgEIABAAIgBAAIgLACIgLACIgCgKIACAKQgYAEgUAAIgBAAIgCgbIAVAGIAAABIATAEIAFACIAZAGIAAAAIAQAEIAlAOIABABIACAAIALAEIgUAQIgHgFgAAbiGIgsgKIAngLIAPgEIADAOIADAOIgQgDgAgViXIglgNIgBgQQAAgJACgIIABgGQAagSAbAEQAaAEABADQAEAIAHAfIgQAHIgTAJIgTAJgAhMiqIgagIIABgIIAIgVIABADQARAFASACQgCAIAAAJIABAQIgSgGg");
	this.shape_8.setTransform(49.45,158.8511);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#836543").s().p("AAJDwIgggGQgzgRAAgLQAAgRAGgQIAFgRQABgGAGgEQAGAOAmAIQAQAEARACIAAAAQgBADAOAAIAAAAIAHAAIAJgBIAEAAIAAAAIABAAIACAAIAEAAIgBABQgUADgKAAIgDAAQABAGALABQALACAMgDQALgDgVAdIgWAeIgVgCgAAiCxQgOAAABgDIAAAAQAPACAOAAIALAAIgEAAIgCAAIgBAAIAAAAIgEAAIgJABIgHAAIAAAAgABsAxQgcgTgVgBIANgHIhBghIgHgEIgHgEIgBgEIgBgGQAFgBAEADIAOAFIgOgFIAdgQIAXgLIANAGIgfAQIgUAKIAvATIAiAMIgXANIAwAZIACAFIgDAFIgLgIgABfAJIALgHIAEAMIgPgFgABBgwIgNgGIgEgCIgTgJQgbgOgQgOIAKgIIgKAIIgHgHIgCgGIAFgDIApgeIADgCIAHgFIgHAFIgDACQgegWgcgPIAMgFQATAKAeAUIAHAFIAUgQIAKAEIgKgEIgLgEIgCAAIgBgBIgmgOIgPgEIANgDIABAAIgBAAIgNADIAAAAIAAAAIAMgFIAAAAIATgJIATgJIAQgHIAagMQAegOAGAAQAIAAAEAVQABAMAAATQABAagEAFQgFAGgXAAIgKgBIgPgDIgIgCIABAHIgTANIgJAFIgCACIACgCIAJgFIAZARIAEAVIgogfQgVAPgRAPIAoAXIAkAOIALAEIAEABIAHAYIgdgNgABPjTIgZAIIgPAEIgnALIAsAKIAQADIAXADIAHAAQAZAAAAgmIAAgHQAAgEgGAAIgeAKgAh4inQgGgJAAgMQgBgKADgNQADgRAFAAQAIAAAUAGIADAAIAaAIIASAGIAlANIACAFIAAAAIgMAFIAAAAIgZgGIgFgCIgTgEIAAgBIgVgGIgHgCQgDADAAAJQAAAJACAHIAKABIABAAQAUAAAYgEIAAAEIAAACQgaAKgSAEQgMADgIAAQgMAAgHgJg");
	this.shape_9.setTransform(47.75,163.2625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5B4033").s().p("AgsDXQABgCAOgEQAmgMgEgTQgFgTgFgLIAAgFIAQAAQANAAAcgPQAQgJALgCQAIgCAEACIACABIgCgBQgEgCgIACIgUgPIAUAPQgLACgQAJQgcAPgNAAIgQAAQgYgCgTgFIgLgEQgRgHgfgXIAIgCIAnAZIADABIAMADQAIACAKAAQARAAARgEIAKgDQAegKAGgQIAGAEIgDgJIgCgFIgKghIgEgLIgIgZIgEgOIgHgWIgEgLIgEgOIgFgRIgEgUIgFgfIAGgFIAPADQAGApAIAlIAAABIAHAYIAHAWQAHAbALAXQAMAeAPAZIADABQAGAEADAJQADALAAAWQAAALgCAGQgBAHgDACQgGAGgpAKQgiAIgZACIgLAAQgOAAgPgCgABPB1IAAAAgAgFiGIgDgOIgDgOIAYgHIAEAmIgWgDgAgYjVIAFgCIAGgBQANAAAFAIQAEAHACAFIAAABIABAJIgZAMQgHgfgEgIg");
	this.shape_10.setTransform(54.35,159.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE0C9").s().p("ABuH1QgjhFgbiPQgDgPgNhlQgEgfgHgeQASAWAVAUIAMAHIAHABQALAAANgFQAOgFAGAAQAdAAAWBCQAJAaARBUQAPBHAJBHQAKBLAAAoQAAAYgQAHQgSAGgpABQgVhDgcg3gAACAuQgVgLgTgTIgPghQgrh9gZg/QghhTgfh4Qgdh5gThJQAJgEAhgHQAngJARAAQBBAAArBKQAOAaAWBIQASA5ASBiQAYCAAMBrQAHA4gFAdQgFAagNAFQgGADgKAAQgWAAgZgNg");
	this.shape_11.setTransform(23.975,75.1125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#ECB186").s().p("ACLKuIgBgDIgBgHQApAAARgHQARgGAAgZQAAgogKhKQgKhIgOhGQgRhUgKgbQgVhCgdAAQgGAAgOAFQgNAFgLAAIgIAAIgLgIQgVgTgRgXQgigqgag2QATATAWAMQAYANAWAAQAJAAAGgDQAOgGAEgaQAGgdgHg4QgMhqgYiBQgThigQg4QgYhJgOgZQgqhLhCAAQgQAAgnAJQgiAIgJADIgFgUIE3h7IANA2QAJApgCAcIAAAEIAAADQAUB2AKBKQAPB+AABlQABBdAIBlQAFAzAHA1QgHg1gFgzQAxBFAcBeQAbBfAKCAQAJCGAOBfIABALIgGADQgBgDgbgEQgbgEgaASIgBAGQgRgCgSgFgABPB/QADAkADARQgDgRgDgkQgCgbgJgUQAJAUACAbg");
	this.shape_12.setTransform(26.2,69.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.5,67.5,189);


(lib.Symbol48 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFF2E9","rgba(255,224,201,0.247)"],[0,1],0,0,0,0,0,4.5).s().p("AgfAfQgGgGAGgNQAGgMANgNQAMgNANgFQAOgFAFAGQAGAFgGANQgFANgOAMQgNANgNAGQgGACgEAAQgFAAgDgDg");
	this.shape.setTransform(23.4315,7.3554);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE0C9").s().p("AAHCVQg4AAg4gXQg3gWgOgpQgNgpBlgaIBGgiQA8gfAMgKQAegWAQgqQAQgFAFAAQAfAAAMAaQAMAZgCAvQgBAwgvBLQgvBMhKAAIAAAAg");
	this.shape_1.setTransform(13.2289,14.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,0,35.3,29.8);


(lib.Symbol47 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFF2E9","rgba(255,224,201,0.247)"],[0,1],0,0,0,0,0,3.9).s().p("AgOAbQgHgLAAgQQAAgPAHgMQAGgLAIAAQAJAAAGALQAHAMAAAPQAAAQgHALQgGAMgJAAQgIAAgGgMg");
	this.shape.setTransform(14.5,8.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE0C9").s().p("AgXC1QhSgMgUg0QgVg1AWhJQAWhLAdgsQAdgsA2gJQA2gJAVAyQAVAxAXBZQAWBXguA2QgmAsg+AAQgNAAgPgCg");
	this.shape_1.setTransform(13.6567,18.3333);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.3,36.7);


(lib.Symbol46 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFF2E9","#FFE0C9"],[0,1],0,0,0,0,0,20.5).s().p("AABCTQgVg5gQhTQgQhTgBg8QAAg9APgDQAPgDAWA5QAWA4AQBUQAQBSAAA9QABA9gPADIgCAAQgOAAgWg2g");
	this.shape.setTransform(7.7522,40.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFF2E9","#FFE0C9"],[0,1],0,0,0,0,0,22.3).s().p("AgKDZQgFgDgCgGQgEgIACgNQAFhAgCghIgDgiQgDgeAAgqQgBhQAGguQAEgeAGgeQACgKAFgDQAFgFAHAEQAIAEACAHQADAJgFAVIgHAhQgIAtACBbIACAqIAEArQADAngGBOQgBATgJADIgEABQgDAAgDgCg");
	this.shape_1.setTransform(8.4986,111.9209);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFF2E9","#FFE0C9"],[0,1],0,0,0,0,0,3.4).s().p("AgPAUQgBgDAAgNQgBgGABgFIAEgHIAEgIQADgEAFgBQAGgCAFAEQAKAIgFAOIgDAHIgBAOQgEAJgIABIgCABQgJAAgEgJg");
	this.shape_2.setTransform(2.7248,12.6073);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5B4033").ss(0.5,1,1).p("AA+iMQAHgYAFgVAgjA7QAEgBADgBQAagfASgjQAUglANgqQAEgPAEgOAhHBDQAAAUgCAkQAAADAAAEAhEB8QALATAAALQgBAIAAAY");
	this.shape_3.setTransform(0.1875,162.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#ECB186").ss(0.5,1,1).p("AiSqvIAAgBIAEAAIAmgCQAjAJAnAQQAtAUAWAUQAyArANAMQAcAbAMAPQAFAIACAFAiOqtQByA7AUBkQATBjABCQQAACPgHA5QgHA7gPAiQAAAAAAAAIgBAAQgWAzgnAAQgDAAgGgEQgBgBgCgBQgFgEgGgGAhaC3QgFgkAQgQQANgMAdAAIABABQABACADACQgDAHgOAhQgCAGgDAFQAAAAAAAAQgJAOgIAEQgDABgDAAQgDAAgFgIQAIADAGAEQAaANAIATQAFANAAAwQAABWgPCEQgQCVgaAfQgCACgDACQgEADgFAAQgHAAgRgK");
	this.shape_4.setTransform(18.775,69.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.5,1,1).p("AENr4QADAMAAAGQAAAAAAAAQAABcgiCXQgiCYAAAWQAAANAEAmQAEAlAAAUQAAAhgIAlQgHAegGAlQgBAIgBAIQgEAVgDAXAgOuFIgZA+QgYBWANBfQANBkAZCCQATBmAJAhQAFARABAeQABAmABADIAFAkIACATIAFAFIAXAZIAWgJQAFADADACQARAMgEgBABRiBIAPgGIARhEIABgBAB8hfQgGAKgVAeQgIALgEAJQgFAIgBAEAAkiRQgDAVgBAQQAAAEAAADQAAABAAACQgDANgEAXQgGAhgIA0QgQBvAAAaQAAApAFBQQAEBQAAApQAAAtAAATQAAAGgBADQAAAEgDAJQgOgHgJADQgQAFgHAOQgFAJgEAMQgBAFgBAFQgDASAAAAQgBAFgBAEQgCAAgBgBQgBAAgBgBQAAADABACQACgBACgBQgBACgBADQAKANAVAgQgDAAgDABQgFAAgEABQgMABgHABQgKABgNACQgCABgDAAQgOAFACALQABABAEAAQABAAABAAQAFAAANgCQAHgBALgCQAGAJAHAMQADAFAEAGQADgIAEgJQAFgKAEgKIAAAAIABAAIgBAAAAghiQAAAEAAAEQAAAJAAAHQAAAIAAAEQAAABAAABQACARAHANAAghsQABAEgBAGAC/hQQAEAcAEArQAFAxAAAjQAABxgoB2QglBsgSBdQgEACgDABQgjgIghgCQgCAAgDAAQgEgBgFAAQAAABAAAAQgLgHgJgFAgFI7QgigMgOgCQABAAAAgBQAMgGALgFQAZgNAPgGQACgBADgBQAEgBADgBQAEgBACAAQAEAAAEADQABABABABQAFAFAAAFQAAAMgKAaQgLAbgIAAQgEAAgIgDQgGgDgJgFQgEgCgEgCQgCgBgBgBQgOgIgJgFQgGgFgFgCQgCgBgDgBIAAgBQAAABAAAAQAAAAAAAAQAFgDAEgCAAIIWQAEgCAEgBIAFAAIAHAAIABAGQAAAGgGAPQgHASgGAAQAAAAgBgBQgIgCgGgCQAHgTAGgSgAALIOQAAgBABgBQAEgMAEgMAgdIhQAWgGAPgFABtH7QACgBAFgDQAFgEAKgDQAKgCAFAFQAFAGgBABQAAABgJARQgEAHgFAKQgSAhAAAhQAAAGAPAYIABABQAOAYAAATQAAAwACAdAhSMFQACgBACgCQALgIAfg4QAKgSANgXQAGAEAiAXQAjAYACAAQAFAAAug7QAIgKAHgJAgRJaIAAAAQACgGADgGAgcJzQADgGACgGQADgGADgHQgDAHgNADAgyKjQABgCABgBQACgEACgEAg0KgQABABABACAg0KgQACAAACAAAjwM3QAEgCAEgCIAWAAQA1AOAeAGQADABADAAQASAEAKAAQARAABfgjQBmglAZgDQABAAAAAAQgBgDAAgEIAAgEAjwM3QgYAOgDAFQgDAEAAAXQAAANgBADQAWAMAYACQBEAFAtgCQAhgCAVgFQBJgSAJgXQAEADADAHQAEAFAIAAQAHAAAEgKIAMgTQACAGACAKQADAKAJAAQAwAAATgCQASgCAAgaQgBgagFgVQgFgWgKgJAhQIuQgPgCgJAAQgFAAgLgEQgGAAgDAJQgBAFgBAFIAFAAQARgGAdgHQADgBADgBQAHgCAHgCQACAAACgBQAPgDAMgDAhQIuQAGAAAGABQgDgCgDgBQgDgBgCgBQAAAAgBAAQgEgCgDgBQgUgHgQAAQggAAAAAlQAAAHAKADQAIAAALgCQAUgGAfgPQABgBACAAQgBADAAADQAAAEADAFQgIASgMATAhII3QABgBABgBQACAAACgBQABABABACAh2KeQADADADACQAIAIAHAJQAEAEACADQgUAAgYAAQgDAFgEAFQAnAGAUALQADgEADgEQAEgFAEgGQAJgNAKgTAh2KeQgCADgBAEQAEgBAFgBAh5KlIgBAAQgHAMgGAKAh0KaQgBACgBACAh0KaQgCABgCAAQABACABABAhSJ7QAIAIAHAJQABACACACQgOADgWAEQADAHACADQAFAAAFgBQAKAAAXAAAhfKhQAHAIAIALQADADACAEQAEAFACADAhkJ9QgGAMgKARAhkKXQgIACgIABAiZLSQgPAJgkAQQgiAPgEARQARAHAlAAQAmAAAZgDQAYgCANgFAjyMLQAAABAAABQgDASAFAYAiZLSQgFAGgEADQAZAFAdACQALABAOgNAiOLFQgFAIgGAFAhbK7QAIAKAGAJAhAJ4QAPgCAVgDAhAKQQAEAGAIAKAhGJGQAEAHASAZ");
	this.shape_5.setTransform(5.5625,90.6137);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5F482E").s().p("AiFApQAAgLgLgTQATADAKAAQARAABggiQBkgkAagEIAAAAIAAgGIAAgFQAKAJAFAWQAFAWABAZQAAAagTACQgSACgwAAQgJAAgDgLIgFgQIgLATQgEAKgHAAQgIAAgEgFQgDgGgEgEQgIAYhKASQgVAFghABIABgfg");
	this.shape_6.setTransform(7.788,173.5875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#836543").s().p("AghAmQgYgCgWgLQABgEAAgNQAAgVADgEQADgGAYgOIAIgEIAWAAQA0APAeAGIAGABQAKATAAAKIgBAfIgbABQglAAgwgEgABAgNIAAgHIAAAHg");
	this.shape_7.setTransform(-13.6375,176.6762);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B89469").s().p("AhWBVIAHgKIAsAAIAOATIgHAIQgTgLgngGgAgjBLIgGgHIgQgRIgFgEIACgFIAPgDIAGAKIgGgKIAkgHIgDgDIgPgSIASgCIgSACIgRACIgCAAIgFgBQgCgLANgDIAGgCIAXgCIARgDIgUgfQgEgGAAgEIACgGIgEACQgeAPgUAFQgLADgIAAQgKgEAAgGQAAgmAgAAQAQAAAUAIIAHACIABABIAEABIgFACIgYgCQgFAAgMgEQgFAAgDAJIgCAKIAFAAQARgGAdgHIAMABIgHgDIAPgDIgCAJIgDgBIgDgBIABAEIgDACIgCABIACgBIADgCIADADIAeAtIgGABIgKABIAKgBIAGgBQAMgDAEgHIgGAOIgFAKIAAAAIgkAGIANAVIAGAKIgEAIIgDAAIgMgQIAMAQIghABIgJAAIAPATIAFAHIAGAIIgIALIgOgTgAA6gZIgQgHIgIgFIgDgBIgWgOIgLgHIgEgCIAIgFIgIAFIAAAAIACgJIAEgBIAZgHIgWAMIgBAAQAOADAiALIAOAFIACAAQAGAAAHgRQAGgQAAgFIgBgHIgIAAIgFAAIgHADIgnALQAagNAQgFIAEgCIAHgCIAHgBQAEAAAEADIACACQAFAFAAAFQAAAMgKAZQgLAcgIAAQgEAAgJgEgAgEhGIAAAAg");
	this.shape_8.setTransform(0,152.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5B4033").s().p("AhLCrIgFgBIACg4IgCA4QgfgGg0gPIgWAAIgIAEQgFgXADgTIAAgBQAQAHAmAAQAmAAAZgDQAXgDANgFIAHgDIAEgCQALgJAeg3IgBgBQAUgkANgpIAIgeQAIAEAEAAQAIAAALgcQAKgZAAgMQAAgFgFgFIgCgCQgEgDgEAAIgGABIAGgXIAFAAQAhACAjAIIAGgCIAIgFQAFgDAKgDQAKgDAFAFQAFAGgBACIgJASIgJAQQgSAiAAAhQAAAFAPAZIAAAAQAPAYAAATQAAAvACAdIAAAFIAAAGQgaAEhlAkQhfAjgRAAQgKAAgTgDgABKAXQAjAYACAAQAFAAAug7IAOgTIgOATQguA7gFAAQgCAAgjgYIgqgbIgWApIAWgpIAqAbgAA3hdIAMgtIAIAAIABAHQAAAFgGAQQgHARgGAAIgCAAg");
	this.shape_9.setTransform(0.8802,157.5767);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8A6553").s().p("AiHCQQAEgRAigPQAjgQAQgJIgJAJQAZAFAdACIABAAIAAAAIABAAQAKAAALgMIAHgIIAIgLQAJgNAKgTQgKATgJANIgGgIIgFgHIgPgTIAKgBIAhAAIACADIABgDIAEgIIgGgLIgNgUIAkgFIgJATIgIARIAIgRIAJgTIAAAAIAAAAIAFgMIAGgNIAAAAIAEgMIARAIIgIAdQgNAqgUAkQgTAlgaAeIgHADQgNAFgWACQgZADgmAAQgmAAgQgHgABFBHIABAAQgfA4gLAIIgEADQAageATglgAAABnIgBAAQgdgCgZgFIAJgJIALgNQAmAGATALQgLAMgKAAIgBAAIAAAAgAgcBAIANgWIAAAAIAJgCIAPARIAGAHIgUAAIgXAAgAAGACIARgCIAQARIACAEIgkAHIgOADIAPgdgAAkg0IAVAgIgSACIgXADQAMgTAIgSgAAqhDIABgFIABAAIAFACIALAHIAXANIADACIAHAEIgEAMIAAAAQgEAHgMADIgfgtgABdgsIAAAAgABlg/IAOglIAIgDIAEAAIgMAsIgOgEgAA1hNIABgBIAXgLIgbAGIgEABIADgSIACgKQADgLAFgKQAHgNARgGQAJgDAPAHQAJAFALAHIAAgBIAJABIgGAWIgHACIgFACIAAgCIAJgYIgJAYIAAACQgQAGgZANIAmgLIgOAlQgigLgOgDg");
	this.shape_10.setTransform(-5.1125,154.1053);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ECB186").s().p("AhfK6IgFAAIgJgBIgBABQgKgHgJgFIADgNIAAgJQASAKAGAAQAFAAAFgDIAEgEQAagfARiVQAPiEAAhWQAAgwgFgNQgIgTgagNQAIgEAIgOIABAAIAFgLIARgoIgFgEIAAgBQgdAAgNAMQgQAQAFAlQgIgNgBgRIAAgCIgBgMIAAgQIABgIQABgGgBgEIAEglIAWAZIAXgJIAIAFIAAAAQAPALgCAAIAAAAIgBAAIABAAIAAAAQACAAgPgLIAAAAIgIgFIAPgGIARhDIgRBDIgPAGIgXAJIgWgZIgFgFIgDgTIAMAKIADACQAGAEACAAQAnAAAXgxIAAgBIAAAAQAQgjAGg7QAIg5gBiPQAAiQgThjQgUhkhyg7IAAgDIAlgCQAkAJAmAQQAtAUAXAUIA+A3QAcAbAMAQIAAAAQAABcghCXQgiCYAAAWQAAANAEAmQADAlAAAUQAAAggIAlIgMBDIgDAQIgHAsIAHgsIADgQIAIBHQAFAyAAAjQAABxgpB2QgjBsgTBdIgGADQgkgIgggCgAggCOIgNAUQgEAIgBAEQABgEAEgIIANgUQAVgeAGgKQgGAKgVAegAgwBEIAAAAg");
	this.shape_11.setTransform(18.6125,70.8125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE0C9").s().p("AgnKoIAAhAQAAgpgFhQQgFhQAAgpQAAgaARhvIAOhWIAHAAIAAACQACARAHAMQgFgkAPgQQANgMAdAAIABABIAEAEIgRAoIgFAKIAAABQgJAOgIADIgOgGQAFAIADAAIAGgCQAaAOAIATQAFANAAAwQAABWgPCEQgRCVgYAeIgFAFQgFADgEAAQgHAAgRgKgAAAA4IgDgCIgLgKIgFgkIgCgoQgBgegFgRQgJghgUhmQgZiCgNhkQgNhfAYhWIAZg+IAAgCIAEAAIAAADQBxA7AUBkQAUBjABCQQAACPgHA5QgIA7gQAiIAAAAIAAAAIAAAAIAAAAQgWAzgnAAQgDAAgFgEgABFAJg");
	this.shape_12.setTransform(9.9879,69.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.6,-1,57.1,182.9);


(lib.Symbol45 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFDEDE","#FF9999"],[0,1],0,0,0,0,0,1.2).s().p("AgCAGIgCgCIgBgEIABgCQADgDACAAQAFAAAAAFIgCACIgCADIgCABg");
	this.shape.setTransform(1.975,3.2969);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFDEDE","#FF9999"],[0,1],0,0,0,0,0,1.1).s().p("AABAGIgCgBIgDgCQgDgBAAgCIABgCQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAIABAAIAAAAQADgBACADIAEADIABACIgBABIgBACIgEABIgBAAg");
	this.shape_1.setTransform(1.5833,0.817);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F2525").ss(0.5,1,1).p("AAHgPQABAAAAAAQADAAACACQACACAAAGQAAAEgDACQgBABgCACIAAAAAgHgOQAAAAAAgBQAAAAABAAQADgBAEAAQAEAAACABAgCAGQgEAFgCAAQgFAAgBgFIAAgGQAAgJADgDQACgCACAAQADgIACAAQACAAAHAHAgDgHQAEABACADQgEACgBABAANAJQgBAGgHAEQgEACgFAC");
	this.shape_2.setTransform(1.5,2.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9999").s().p("AgOALIgBgEIACgBQABAFAFAAQADAAAEgFQgEAFgDAAQgFAAgBgFIAAgGQAAgJAEgDIADgCQADgIADAAQABAAAIAHIAAAAIAFACQACACAAAGQAAAEgDACIgDADIABAAIADAFQgBAGgHAEIgJAEQgJgGgCgGgAAAAAIAEgDQgCgDgEgBQAEABACADIgEADgAgFgPIgBAAIAAABIAAgBIABAAIAHgBIAHABIgHgBIgHABg");
	this.shape_3.setTransform(1.3625,2.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,5,6.7);


(lib.Symbol44 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFDEDE","#FF9999"],[0,1],0,0,0,0,0,0.9).s().p("AAAAGIgCgBIgDgEIAAgDQABgCADAAIAAgBIAGADIAAABIABABIAAACIgBAEIgDAAIgCAAg");
	this.shape.setTransform(1.7,0.845);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF9999").ss(0.5,1,1).p("AAAAEIAAgH");
	this.shape_1.setTransform(2.325,1.0875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F2525").ss(0.5,1,1).p("AAPgBIAAAGAgLAAQAGgCABACAgCANQACgCACgEQAEgGACgCAACgNQgCgDgCAAQgFAAgEAHQgDAFAAAEQAAAPAIAAQACAAACgCIAFAGAAIgJQgDgCgDgCIAGgF");
	this.shape_2.setTransform(1.525,1.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9999").s().p("AgLABQAAgEAEgFQAEgHAEAAIAFADIAFAEIABAIIgHAIIgEAGQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAQgJAAAAgPgAAAAAQgCgBgFABIAEAAIADAAg");
	this.shape_3.setTransform(1.175,1.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.2,5.1,5.8);


(lib.Symbol43 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9E5149").ss(0.5,1,1).p("AAZhIQgQAAgWAYQgbAbgBAiQgBATANAUQAOAVAQAAQAVAAAMgmQAJgcAAgYQAAg3gSAAg");
	this.shape.setTransform(4.2491,7.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE7878").s().p("AgdA0QgNgUABgTQABgiAbgbQAWgYAQAAQASABAAA2QAAAYgJAcQgMAlgVAAQgQAAgOgUg");
	this.shape_1.setTransform(4.2491,7.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,10.5,16.5);


(lib.Symbol42 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8C3C3C").ss(0.5,1,1).p("ABRgUQAHAZgTAZQgTAYgiAJQggAJgdgNQgcgMgHgaQgHgZATgZQATgYAigJQAhgJAcANQAdAMAGAag");
	this.shape.setTransform(8.2847,6.6663);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE7878").s().p("AgtA7QgcgMgHgaQgHgZATgZQATgYAigJQAhgJAcANQAdAMAGAaQAHAZgTAZQgTAYgiAJQgOAEgMAAQgSAAgRgIg");
	this.shape_1.setTransform(8.2847,6.6663);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,18.6,15.4);


(lib.Symbol41 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ECB186").ss(0.5,1,1).p("Aieg3QAEAYATAYQAeAiArASQAeANAggCQAfgCAhgRQAQgIAPgKQAlgbAbgu");
	this.shape.setTransform(17.225,39.3888);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("AhhijQgPAVgTApQg3B4AXBZQAFATAIARQAqBXBYAAQALAAAKgBQAngDAfgOQABAAAAAAQAQgIAPgLQABAAAAgBQAIgFAGgHQAggdANgoQADgJABgJQAEgSAAgUQAAgXgTg4QgVg4gDgJQgRgqgIgZQgPgtAIge");
	this.shape_1.setTransform(17.1668,23.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE0C9").s().p("AiXgRQgJgSgFgTIAGgBQAEAYATAYQAeAiArASQAeANAggCQAfgCAhgRQAQgIAOgKQAmgbAbguIAIgOIgFASQgNAogfAdIgOALIgCACQgOAKgRAIIAAAAQggAPgmADIgVABQhYAAgqhWg");
	this.shape_2.setTransform(17.3375,39.3875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ECB186").s().p("Ag9DWQgrgSgfgjQgSgYgFgYIgFABQgXhZA3h4QATgoAPgVQAKACAdgHQA6gOBggxQgIAeAPAtQAIAaARAqIAYBBQATA4AAAXQAAATgEASIgHAOQgbAugmAcQgOAKgQAIQgiARgfACIgIAAQgbAAgagLg");
	this.shape_3.setTransform(17.1668,22.4888);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-1,36.199999999999996,48.3);


(lib.Symbol40 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFE0C9").ss(0.5,1,1).p("AiMgdQASAXAXAMQAJAFAKADQAzAWA+gJQA9gIAvgl");
	this.shape.setTransform(16.0125,35.0079);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ECB186").ss(0.5,1,1).p("AAAACQAAgCAAgB");
	this.shape_1.setTransform(40.7375,8.4875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.5,1,1).p("AByjDQgPAqg1AfQgYANhSAiQhGAcgdAYQgsAjAAA0QAAAXAIAUQAEALAGAJQAOAVAXAQQABAAABABQAJAGAKAFQApAUA0AAQAOAAANgBQA8gJAvgwQAFgEAEgFQAHgIAIgKQAJgNAJgOQA1hWAJhq");
	this.shape_2.setTransform(20.3625,19.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE0C9").s().p("AhbAYIgTgKIgCgCQgXgPgOgUQgGgKgEgLIACAFIAJAMQATAXAWAMQAKAFAKAEQAyAVA/gIQA9gIAvglIAKgIIAQgRIgPATIgIAJQgwAvg9AIQgNACgNAAQg0AAgpgVg");
	this.shape_3.setTransform(16.75,34.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ECB186").s().p("Ah7CvQgLgEgJgFQgXgNgSgXIgJgMIgCgFQgIgUAAgXQAAg0AsgjQAdgYBGgcQBSghAYgOQA1gfAPgqQAjgCAWAaQAKAMAXAvIgBAEQgIBqg1BXQgJAOgJAMIgRAQIgKAJQgvAmg7AIQgSACgRAAQgrAAgkgPg");
	this.shape_4.setTransform(20.375,18.9846);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,42.8,41.3);


(lib.Symbol39 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AF4720").ss(0.5,1,1).p("ABdhYQgLg/gPhHQglivgmg0AhcHCIAAgBQgDgKAAgKQgBgDAAgUQAAgOAEgpQAEgkABgCQAHglABgIQAFgWAKgVQAGgMAYghQAJgNAMgRQAEgEADgFQABgBAAAAQAtg9APgrIAAgBQgdAfg1A2IgBABQAAgBABAAIAAgBQAhg0AMgYQAWgqAAgnQAAgRgFgRIAAAAQAAgDgBgDQgFgQgIgHQgBAAAAgBQgDgCgCgBQAEgLAEgIQAHgPAEAAQALAAAWAXQATAVAHAHQACADAAABABhg5QgCgPgCgQABPBKIABgBIAAAAQgBAAAAABgAAgB7QAIgGAFgIQAJgKABgBIAYgYQgHAPgGANQgEAIgDAHQguBsAAA6QAAAhAKAqQAIAiALAVQACAGADAC");
	this.shape.setTransform(12.6,45.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("AgGndQgKAqgKAvQgUBkAAAkQACBMAFAgQALBHAjBDQgDAGgDAHQgRAqgUAgQACgBgCADQgIALgEAGQhGBlAABRQAAAlASBAQAGAWAHASQAAABAAABQAOAjANASQgUgxgCgIQgEgNAAgsQAAgUADgUQAEgdAKgbQAHgRAeg4QAIgQAKgSQgBADgCAEQAAAAAAABQgFALgDASQgDAOgEAcQAKgvAIgXQACgFACgEQAHgPAJgOQAEgFADgEQABgCACgCQAKgMANgMQAAAAAAgBQAAABAAAAQgKAPgGAQQgQAoAAAyQAAAVABAUQAEArALAhQAAABAAAAQAKAdAPAXQABABACACQgBgBgBgCQgFgLgDgQQgDgPgCgNQAAgJAAgIQAAhPAqheQAphfAAg3QAAgVgFgfQgFgcgHgWAAXh9QAIATAAAKQAAAhgYA5AAzGFQABACABACIAAABQgBgCgBgDg");
	this.shape_1.setTransform(11.925,48.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AF4720").s().p("AADFJQAAg6AuhsIAHgPIAMgbIgWAWIgKANQgGAHgIAFIAAgBIAAABQgNAMgJANIgDADIgHAJQgKAPgHAOIgDgBIgBABIgSAiQgdA4gIARQgKAbgEAeIgCAAIAFgoIAIgtQAGgVAJgVQAGgMAYghIAVgeIAIgJIAAgBQAsg9ARgrIgBgBQgdAfg1A2IgBAAQAjg1AMgZQAUgoABgpQAAgQgFgRIAAAAIgBgFQgFgRgIgHIgBgBIgFgDIAHgSQAIgQADAAQANAAAVAXIAaAdIACADQAHAWAFAcQAFAeABAVQgBA5gpBeQgqBfAABOIABARIgHAAQgKgqAAghgABEB5IABgBIAAgBIgBACgABXgLIgEgeIAEAegAg4hHQgFgggBhMQgBgkAVhkIAThZIAEACQAnAzAlCwQAPBGALBAIgagdQgVgXgNAAQgDAAgIAQIgHASIAFADIABABIgFAEQAIATAAAJQAAAhgWA5QgkhDgMhHgAALg3IAAAAg");
	this.shape_2.setTransform(13.6,40.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6B33").s().p("AhTDsQgShAAAglQAAhRBGhkIAMgRQABgBAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQATggASgqIAGgOQAYg5AAghQAAgKgIgTIAEgDQAJAHAFAQIABAGIAAAAQAEAQAAASQAAAogVApQgNAZghA0IgCgBIABADIACgBQA1g2AcgfIABABQgQArgtA9IgBABIgHAJIgUAdQgYAhgGAMQgKAVgFAVIgIAtIgFAnQgEApAAAOIAAAXQABAKADAKIAAAAIgCABIgNgogAAoC7IAAgBQgLghgEgrQgBgUAAgVQAAgyAQgnQAGgQAKgPQAIgFAFgIIAKgMIAXgXIgMAcIgHAPQguBqAAA7QAAAhAKAqQAIAhAKAWQgPgXgKgdg");
	this.shape_3.setTransform(10.225,62.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.6,25.9,97.6);


(lib.Symbol38 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AF4720").ss(0.5,1,1).p("AADAqQgIgiguhcQgMgagPglQgDgHgLgVQgKgRAAgCIBShTQAFAIARAbQATAcAIAVQAHAVACACAADAqQAKATAGAkQAAADAAACQAGAnAAAqQAAAMgDAWQgBAJgCALQgDAUgDAVIAAAAIASg6QAFgUACgSQAAgEAAgZQAAgbgDgcQgCgdgFgeQAAAAAAgBQgHgxgKgcIAAgCQAAAAAAABQAOAbANAxQAHAbAHAiQASBdADA9QAKgjAJgzQADgQACgOQAGglAAgXQAAgagKhCQAAgBAAAAQgHgugEgUQgCgFgBgFAADApQAAABAAAAAAEAsQAAgBgBgB");
	this.shape.setTransform(2.9,17.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("AAoj+QAKAeAHAiQAAABABAAIAAAAQAIArADAzQACAdAAAfQAAADAAADQAAANgBAOQgDA0gSA1QgnBtALAjIAAABQAAAAAAgBQgLgOgHgZQgEgPgIglQgBAUgXAuQgWAsAAAZIAAABQAAAFACAVQACAUABACIAAABQgJgSgFgdQAAgCgBgDQgFgeAAgaQAAgyAVhaQAUhZAAhHQAAgCAAgBQAAgcgIgbQgBgBAAgCAgElUQAYAhARAr");
	this.shape_1.setTransform(7.125,34.4375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6B33").s().p("AhADmIgBgFQgFgfAAgaQAAgxAVhbQAUhYAAhIIAAgCQAAgcgIgbIgBgCQAKATAGAkIAAAFQAGAnAAApQAAANgDAWIgDATIgHApIABAAIASg6QAFgUABgRIAAgeQAAgagCgcQgCgdgFgeIAAgCQgHgygKgcIAAgBIAAABQANAbAOAyIAMA9QATBdACA7QALgiAJgyIAFgeQAFglAAgYQAAgZgJhEIAAAAIAHgBQAIArADAyQACAdAAAgIAAAFIgBAcQgDA1gSA0QgnBtALAjIAAAAQgLgOgHgZQgEgPgIgmQgBAVgXAuQgWArAAAaIAAAAIACAbIADAVIAAABQgJgSgFgcg");
	this.shape_2.setTransform(7.125,40.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AF4720").s().p("AAMEWIAIgpIACgUQADgWAAgMQAAgqgFgnIgBgFQgGgkgKgTQgIgiguhcQgMgbgPgkQgDgHgLgUIgKgUIBShTQAFAIARAbQATAcAIAVIAJAXQAYAgARAsIADAKIALBCIAAAAQAJBDAAAaQAAAXgFAlIgFAeQgJAzgKAiQgCg8gUhdIgNg9QgNgxgOgbIAAgBIAAACQAKAcAHAxIABACQAEAdACAdQADAcAAAaIAAAeQgCARgFAVIgSA6g");
	this.shape_3.setTransform(2.9,17.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-11.3,23.6,80.8);


(lib.Symbol37 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AAfgSQgBgDgBgFQgCACgBABQgfAZgOAbQgIAQgCAKQAAAEAAACQAAAGACAEAAThyQAEgCAFAAQAFAIAFAIQAXAmAGAZQAGAXAAAPQAAASgKAYQAAABAAAAQgIARgXATQANgOAAgdQAAgPgHgNQgHgKAAgRQAAAXgDAKQgGAUgWARQADAFAZAaQABgBAAAAQAAAAABgBQAAAAABAAQASgJAHgGQAKgJAIAAQAJAAAHAFQAIAGAAAIQAAAKgeAQQgdAPgQAAQgKAAgCgGQgHABgFAAQgFAAgFAAQgegEgagaQgegeAAglQAAg1AygpQAggaAigJQAGANAAAIQAAAUgdApQgYAggFAcQgBAHAAAHQAAALAAACQABAEAGAMAgJBcQgOgJgEgMAAgBQQgBABgCAAQABAAABAAQAAgBABAAgAALBvQgBgBAAgCQAAgLASgOQAAAAAAAA");
	this.shape.setTransform(9.75,12.0125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E57ECD").s().p("AgqAYIgBgDQAAgLASgNIABgBIAAAAIABgBIABgBQASgJAGgFQAKgJAIAAQAJAAAHAFQAIAFAAAJQAAAKgeAPQgcAPgQAAQgKAAgCgGg");
	this.shape_1.setTransform(15.125,20.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AF4720").s().p("AABByQgegEgZgZQgegeAAgmQAAg0AygqQAfgaAjgJQAFAOAAAHQAAAVgdApQgXAggFAbIgCAOIABANQAAAFAGAMQgBgFgBgFIABgGQACgLAHgPQANgcAggZIADgCIACAHQABAQAGAMQAIANgBAPQABAcgOAOIgCACIABgBIAAABIgCABIAAAAQgagagDgEQAWgSAGgTQADgLAAgXQAAAXgDALQgGATgWASQADAEAaAaIgBABQgRAOgBALIABADIgMABIgKgBgAACBfQgNgJgEgMQAEAMANAJgAA5AoQABgPgIgNQgGgMgBgQIgCgHIgDACQggAZgNAcQgHAPgCALIgBAGQABAFABAFQgGgMAAgFIgBgNIACgOQAFgbAXggQAdgpAAgVQAAgHgFgOIAIgCIAKAQQAYAnAGAYQAFAYAAAPQAAARgKAZIAAAAQgHASgYASQAOgOgBgcgAgPBKIAAAAg");
	this.shape_2.setTransform(8.5,11.7625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.7,21.5,25.5);


(lib.Symbol36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFD6C6","#FF6B33"],[0,1],0,0,0,0,0,3.1).s().p("AAMANIgdgPQgEgDgBgDQgBgEAEgBQADgBAFADQAPAKANAFQAFACABADQABAEgEACIgCAAQgDAAgDgCg");
	this.shape.setTransform(23.05,-3.4083);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFD6C6","#FF6B33"],[0,1],0,0,0,0,0,4.2).s().p("AADAmQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgBgBQABgEgCgDIgCgIIgBgGIgBgDIgBgDIgBgGIAAgBIgBgFIgBgFIABgQIAAgEIABgBIABgDQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIACADIAAAEIgBAEIgBAFIABAPIABAIIACAGIABAJIAEAKIABAGQAAAEgDABIgCABIgCgBg");
	this.shape_1.setTransform(-0.525,8.6542);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFD6C6","#FF6B33"],[0,1],0,0,0,0,0,4.3).s().p("AABAkIgBgCIgCgKIgCgJIAAgEIgBgEQgCgEAAgEIAAgGIgCgKIACgIIACgKQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABABQAAAAAAAAIAAAFIgBAQIABAFIABAFIAAABIAAAEQAAADACAEIABABQgBAEACAFIACAJIABAEQACAEgDADIgEABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_2.setTransform(-1.5136,9.0842);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFD6C6","#FF6B33"],[0,1],0,0,0,0,0,2.3).s().p("AgEAQQgBgCAAgFIAAgNIACgIQABgDACgBQAAgBAAAAQAAAAABgBQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAQABABAAAAIABAEIgBAEQgEAJACAIIAAAFQgBADgBABIgCABQgCAAgCgDg");
	this.shape_3.setTransform(-3.9125,9.9258);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFD6C6","#FF6B33"],[0,1],0,0,0,0,0,3).s().p("AgJAWIgCgGQAAgTANgQQAEgEADABQADACgBAEIgCAFQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAgBABQgBABAAADIgDAHIAAAOQAAAFACACIgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_4.setTransform(-4.1889,9.44);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFF2E9","#FFE0C9"],[0,1],0,0,0,0,0,1.9).s().p("AAAAMIgFgCQgEgCgFgHQgDgFAFgFQAFgFAHAEIACACIAFABQAFABACAEQAEAFgGAGQgDAEgGAAIgDgBg");
	this.shape_5.setTransform(13.3021,21.612);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFF2E9","#FFE0C9"],[0,1],0,0,0,0,0,1.8).s().p("AACAMIgGgEIgGgDQgDgDABgDQAAgEACgDIAEgCQAGgDAHAEQAJAGgDAIQgBADgDADIgFABIgCAAg");
	this.shape_6.setTransform(20.5923,7.3186);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFF2E9","#FFE0C9"],[0,1],0,0,0,0,0,2.7).s().p("AgSAGQgCgFADgFQADgDANgEIAJgBQAFAAADADQADADABADQABADgDADQgCADgHACIgKACIgIACIgBABQgFAAgDgHg");
	this.shape_7.setTransform(4.1279,9.6063);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFF2E9","#FFE0C9"],[0,1],0,0,0,0,0,5.2).s().p("AgBAqQgDgDAAgIIABgiIgBgEIgBgEIgEgMQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBgBAAAAIgDgFQgDgHAFgEQAGgFAGAEIAEAFIALAXIABAFIAAAsIgBAIQgDAFgGABQgGAAgBgFg");
	this.shape_8.setTransform(11.8083,2.8734);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhUAOQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAIgBgCIAAgDIAAgCIACgCIAEgBIABgBIAHABIABACIABAEIgCADQgFAAgBACIgCABIgBAAIgBAAgAg5AGIgDgBIAAgBIAAgBIgBgBIABgCIAAgBIABAAQABgBAAAAQAAAAAAgBQABAAAAABQAAAAABAAIAAAAIADABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIgBACIgBABIgCABIgBAAIgBAAgAA4gDQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIgBgDIABgBQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIAEgBIAAAAQABgBAAAAQAAAAABAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIABADIAAACIgCACIgDABIgEAAIgEgBgABUgDIgDgBIgBgBIAAgBIgBgBIABgCIABgCIABAAQAAgBAAAAQABAAAAgBQAAAAABABQAAAAAAAAIABAAIADABQAAAAAAAAQABABAAABQAAAAAAABQAAAAAAABIAAACIgCABIgBABIgCAAIAAAAg");
	this.shape_9.setTransform(12.425,3.3875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape},{t:this.shape_6},{t:this.shape_7},{t:this.shape_1},{t:this.shape_5},{t:this.shape_2},{t:this.shape_4},{t:this.shape_3}]},44).to({state:[{t:this.shape_8},{t:this.shape},{t:this.shape_9},{t:this.shape_6},{t:this.shape_7},{t:this.shape_1},{t:this.shape_5},{t:this.shape_2},{t:this.shape_4},{t:this.shape_3}]},3).wait(73));

	// Layer_1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#AECD6F").ss(0.5,1,1).p("AAAggQAHgGAKgFQAEgBAbgNQADgCADgBAg1A9QAFgkAEgYQACgGAWgPQAGgEAHgE");
	this.shape_10.setTransform(5.7125,-12.0875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#404F23").ss(0.5,1,1).p("ABmg2QgCgIgFgEQgFgFgMgFQgKgEgKgEQgGgDgGgCAh4BbQAOgJAMgHQARgJAPgGQAKgFALgDQARgGATgEQAHgBAWgDQAFgBAFgBQANgCAHgCQAIgBAXgCQANgCACgJQABgDgBgGABKAlQACgDAYAAQAEAAADAAQAGAAADgDQAHgEgDgP");
	this.shape_11.setTransform(8.3693,-10.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#ECB186").ss(0.5,1,1).p("AgOg/IABgSIgCgcQACgBAFAAIAOADQADAAAKgCIAHAAIAJgIQAEgKgMgDQgNgDgNACQgIAAgDACAA8gvQANAdAAARQAAAPgEAPQgDAKgIATQgKAVgRASQgUAUgfAQAhIgPQAVAHALgEQABAAAAAAQAMgEAAALQAAALgYAAIgMgF");
	this.shape_12.setTransform(18,10.1288);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(0.5,1,1).p("AgjjUQAEgBADAAQAHgCAIAAQAbgCAlAMQArANAWATQARAOAOArQALAeABAQQAAABABAAQABACABABQAFAHAAAFQgBABAAABQAaADAEgFQgGANgcAGQgCAAgDABQgFAAgGAAQgLABgLgDQgGAAgGgCQgTgFgXgLQgNgGgCAAQgCgBgJAAQgCAAgFABQgHABgOADQADgCAHgGQAHgFAEAAQAFAAACAAQgOgIgPgLQAcAAAWAFQAHACArARQAMAFANADQAFgJAAgBAAqi0QABAAAAABQADACAGAIQADAFAFAIQAJAQAIAfQARAEAPAHQAOAGAMAHQANAHALAIAAVh7QgHgsgBgDQgFgUgJgUAg3h3QgCgFgBgLQAAgMALgeQAFgQAEgJQACgGABgEAighGQANhIALgMQAOgOAbgRQADgBADgCQAdgRAZgHAh6hdQgDgeAMgXQAEgIAPgUQADgCAEgCAhihmQAAAAAAAAQAGgCAGgCQATgFAUgDQAUgEAXAAQAAAAAAAAQAOAAAQABQAFAAAFABIAAAAQACAAACAAQAGABAGABQABAAAAAAQADAAADABQAJACAJACAh6hdQAJgEAKgEQABAAABAAQABgBACAAAhjg/QgCgGAAgEQgCgFAAgBQAAgDACgHQACgHABgGAiJgbQABgEACgCQABgBAAgBQAIgJAPgKQAIgFAHgEQAIgEAJgEQAXgJAcgEQACAAACAAQAUgDAQgBQABAAABAAAiNhTQAAAAABAAQAIgFAKgFAiEggQAAAAAAABQgCACgDACAiEggQAEAAAVgMQAKgFAJAAQAFAAAHACQAIADACAAIADAAQgIgGgEgCQgHgEgJAAQgQAAgHAHQgJAIgJAJgAiSgiQABgBABgBQADgCADgCQAWgPARgIQALgGAKgCAAohbIAAgPAgbhUQABgCAAgDQABgDAAgEQAAgDgDgIAAshFQABABAAAAQACAAAEADQgEgCgDgCgABIjAQAcAVASAgQAKATAHAjACUgaQAAgCgBgCQgBgCAAgCAB8gkQAAADABACQAMAXAHA0QAEAgAMATQgMAJgSABQAKggAAgcQAAAAAAgBQAAgLgFgYQgDgLgDgMQAAAAAAgBQgCgIgCgIABthJQACgIAAgCQAAgHgCgIACMg4QAKACAKABQADABACAAQABAAAAAAABGg2QgJgFgKgGACUgaQAKAKAKAIQADADACALQAEAEADAJQACAIAAAOQAAADAAADACaADIAIgBQAGAAAFAEACdAXQAEgFADgBQACgBAEAAACdgiQAcAVAJAYQAAACABABQACAGAHAxQgDgGgFgFQgGgHgIgEQAAADAAACQgCATgJAMQgCAEgDADQgFgUgCgcQAAgCgBgDQAAgFgBgFQAAgCAAgCQgBgKgCgKQgCgRgEgMAB6gJQAAgBAAgCQABAAAAAAIABAAQAAACgCABQgCABgCAAQgGABgBABIgCABQAEAEAFABQgFAEgEAFQAAABgBABQgHAIgFAKQAAgBgFgCQgIgEgMgCQAEgCAEgDQAHgHAAgIQAAgCAAgDIAAABQADABADABQAIACAEAEQABABABAAQgBgBgBAAIAAAAAB6gMQgKACgNgCIADAAIAGgOQgEAHgDABQgBABgGAAQgEgBgDAAQgUgDgJAAQgPAAgKAMQAAAAABAAQADgBADAAQAJgCACAAQAEAAAFABQALABAPAFAAzAAQAAAEADADQACADAEAAQADAAADgDQADgDAAgEQAAgDgDgDQgDgCgDAAQgEAAgCACQgDADAAADgABHAUQgBgBgCAAQgGAAgQgDQgIgBgLgCQACgNAFgJABbAaQARgQgCgFQACACABACAA/BMQAEACACABIAAAAQAAAAAAAAQADACAAAAQADADABADAAyBiQAFgGAEgDQAEgEADgCAhsCOQAHAKAJALQApAyAtADQAEABAEgBQAHAAAHgBQAAAAABAAQAggGAcgaQAVgTANgTQAMgSAFgRQABgCABgDACgBfQAFAJAHAGIABABQgEgJgDgMACdAbQAGAIADAPAAogKQgCAEAAAGQAAAIAHAHQABABAAAAAgmAAQABACACARQABABAAABQACAQAAADQAAAFgEAQQAAACgBACQAAAEACACQACACAGAFAgEBMQAAgGABgCQACAAACADAg4ACQACABAEgBAhFALQAAAEgDADQgDADgDAAQgEAAgDgDQgCgDAAgEQAAgEACgDQADgCAEAAQADAAADACQADADAAAEgAhnAFQAHgEACAAQADgBAMAAIABAAQABAAABAAQALAAAJACQABADAAADQAAAJgHAHQgBABgBAAQAJgBALgCQgCgMgEgIQgJgGgPgEQgOgEgKACQgKACgDAAQgHAAgBgBQgCgBgFgHIAHAOIACAAQgMACgKgCQgBAAgBAAIgBAAQABACACABQAAgBAAgCQAAgMABgIQABgCAAgCAhZAdQACgBACAAQAGAAAPgDAiLAAIAAAAQAAACAAABQAAADABADQgBAHgBAPQAAAPAEAhQADAbAZAkAiLAAQABAAACAAQAHABABABIABABQgDAEgGABQAOAOAJAQQAAgBAEgDQgQgOADgFQACgBABgBQACgCACgBQACgBACgBQABAAAAAAQAEgCADgBAhZAdQgEgCgDgDQgHgHAAgJQAAgCAAgBAhtAiQAJgDALgCAgrB+IgBABIABAAIAhgBQAPAAARgIQAQgIAMgMAgrB+IAAABQADACAEAEQACADACAEQAKANATAAQAMAAAJgKQAEgFADgFQAFgGACgEQAHgKAGgJQADgDACgDAg2CCQAFgEACAAQACAAACAAAgkCFQAGACADAAQADABAOAAQATAAAQgDAighGQAHgFAJgGQABgBACgBQgHAOgDAFQgDAGAAAHQAAABAAAAQAAAFAAACQABACAHAHAiogQQgDADgDACQgHgLABgMQABgMAHgMQAFgGAHgGAiogQQAAAAABgBQAKgIALgJAiogQQgBAHgCAEQgCAEAAAEQAAAEADANQAAACABABAiaAFQgCACgCAEQgDAHgEANQgGAUAAANQAAALAKAXQAIAUAHALAieAAQgBAEgDAGQgDAGgEAHQgGAJgJAMQgTAbAAASQAAAUAqAUQAIADAHADQAZAJANgC");
	this.shape_13.setTransform(14.4125,2.4266);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AECD6F").s().p("Ag/BBQAEgGAHgGIARgLIACgBIgCABIgRALQANhHAMgMQAOgOAagRIAGgDQAcgRAagHIgEAKIgeAOIgTAKIgHAFIgMAIQgVAPgDAHIgJA7IgBABIgJASQgEAGABAHIAAABIgbAQQABgMAIgMg");
	this.shape_14.setTransform(3.55,-9.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5D2828").s().p("AgagDIgEgGIAJACIARABQATgBAQgCIgHAJQgJAKgNAAQgSAAgKgNg");
	this.shape_15.setTransform(13.8125,16.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#404F23").s().p("AitBPIAagPQARgKAPgGIAVgIQARgGATgEIAegEIAKgCIATgEIAfgDQANgCACgIQABgEgBgFIANACIABAAIAFAAIASAEQgIgegJgQIgIgNQgGgIgCgCIgCgBQgCgHgFgEQgFgGgMgFIgUgIIgLgFQAbgCAlAMQArANAWATQARAOAPArQAKAdABARIABABIACACQAGAHgBAFIgBACIAAAAIgGAAIgTgEIAEgKIgEAKQgOgDgMgFQgqgRgIgCIgJgKQAFgDAAgIIgCgJIACAJQAAAIgFADQgDACgGAAIgHAAIAAgPIAAAPQgYABgCACQgSABgTADIgDAAIABgFIgBAFQgdAFgXAJQgJACgMAFIgCgKIACAKQgRAIgVAPIgGAEIgDACQgHgHAAgCIgBgGIABAGQAAACAHAHIgVARIgBACIgGAEQgHgLABgMgACOAcQANAHALAJQgLgJgNgHQgMgHgOgGQAOAGAMAHgAB0AoIADgKQAAgHgDgIQADAIAAAHIgDAKgAB9gZQALATAGAiQgGgigLgTQgRgggcgVQAcAVARAggAB0APQgPgGgRgFQARAFAPAGg");
	this.shape_16.setTransform(13.6843,-8.9862);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4B5B2D").s().p("AgXABIgCAAQADgCAXgBIAHAAQAFAAAEgCIAJAJQgWgFgbABg");
	this.shape_17.setTransform(18.325,-6.5125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6A7E42").s().p("AhzBSQAAgHAEgHIAJgSIABgBIAJg6QADgIAWgPIAMgIIAHgEIATgKIAdgPIADgJIAHgCIAPgCIAMAFIAUAJQAMAFAFAFQAEAEADAHIACABQACACAGAJIAIANQAJAPAIAeIgSgEIgFgBIgBAAIgNgBIgEgBIAAAAIgKgBIgEAAIgLgBIgBAAIgKAAIgBAAIAAAAIgCAAIgCAAIAAAAQgXAAgSAEQgVADgSAFIgMAEIgBAAIABAAIAMgEQASgFAVgDQASgEAXAAIAAAAIACAAIACAAIAAAAIABAAIAKAAIABAAIALABIAEAAIAKABIAAAAIAEABQABAFgBAEQgCAIgNADIgfADIgUAEIAAgHQAAgEgCgHQACAHAAAEIAAAHIgKABIgdAFQgTAEgRAFIgBgGIACgKIACgNIgCANIgCAKIABAGIgVAIQgPAHgRAJIAAgBgAhlAxIASgJIATgIIACgBIADgBIgDABIgCABIgTAIIAAgNQAAgXAJgRQAEgIAPgTQgPATgEAIQgJARAAAXIAAANIgSAJgAgSgBIACAOIgCgOQAAgMAKgfIAIgZIAHgDIgHADIgIAZQgKAfAAAMIAAAAgAA1glIAIAvIgIgvQgFgUgLgUQALAUAFAUg");
	this.shape_18.setTransform(10.4875,-10.9125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#AF4720").s().p("ACgA6QgGgGgIgEIABgHQAAgNgDgIQgCgJgFgEQgEgEgHAAIgHABQgDgRgDgMIATASQADADACALQgCgLgDgDIgTgSIgCgEIgBgEIALAAQAcAVAJAYIABACQADAHAGAwQgDgFgFgGgAiWgxQAIgGAQAAQAJAAAHAEIALAIIgCAAIgKgDQgIgCgEgBQgJABgKAFQgVAMgEAAIARgSgAATg7IgLgBIgGABIgVAEIAKgJQAHgEAEAAIAGAAIAHAEIAUALIgQgGg");
	this.shape_19.setTransform(17.9875,2.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF6B33").s().p("AiOBsIgOgGQgrgUAAgUQAAgSATgbIAPgUIAHgNIAEgKIgEAKIgHANIgBgDIgDgRQAAgFACgEIADgKIABgCIAVgRIACgCIAGgEIAGAFIgCACIgDAGIgBAEQgBAJAAALIgBAAIgBAAQAAAAAAABQAAABAAAAQABAAAAABQABAAAAAAIAAABIAAAEIABAGIgBAUQgBAPAEAiQADAaAZAkIgGABQgMAAgUgIgAinAlQAAALAKAXQAJAUAGALQgGgLgJgUQgKgXAAgLQABgNAFgUIAHgSIAEgHIgEAHIgHASQgFAUgBANIAAAAgACxBTQgHgGgGgJQgMgTgEggQgHg0gMgXIgBgEIAEAAIAQACIABAAIAAAAIABAAIABADIACAEQADAMADATIACAUIAAADIABAJIABAGQADAbAEAUQAEAMAEAJgACUg8IgQgCIgEAAIgMgDQgTgFgXgLIgTgLIgGgDIgBAAIgdgUQAcAAAWAFQAIACAqARQAMAFANADIAUAEIAGAAIAAAAQAaADAEgFQgGANgbAGIgGABIgLABIgBAAIAAAAIgBAAg");
	this.shape_20.setTransform(14,5.1089);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgSBJIgJgCQgEgFgDgBIAhgBQAPgBARgHQAPgIANgMIgFAGIgNATIgHAKQgQACgTABIgRgBgAhxguIADgDIAEgCIAEgCIABAAIAHgEIAAAEQAAAJAHAGQADAEAEACQgLABgJAEQgRgOAEgFgABQgpQAEgCAEgEQAHgGAAgJIgBgFIABAAIAGADQAHADAFAEIABABQADAFgRAQQgIgFgMgBgAg1gmQAHgGAAgJIgBgGIAGAAQAEAIACAMIgUADIACgCgAAkgwQACgPAFgIIAGgCQgCAFAAAGQAAAJAHAGIABACIgTgDg");
	this.shape_21.setTransform(13.544,8.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#80DFFF").s().p("AhXAQQgHgHAAgJIAAgCIAJgEQADgBANAAIAAAAIACAAQALAAAJACIABAFQAAAJgHAHIgCABIgVADIgEABQgEgCgDgDgAhMgDQgCADAAADQAAAEACADQADADAEAAQADAAADgDQADgDAAgEQAAgDgDgDQgDgCgDAAQgEAAgDACgABNALIgVgDIgCgBQgHgHAAgIQAAgGACgEIALgCIAJABQAMABAOAFIAAAFQAAAIgHAHQgDADgFACIgDgBgAA/gOQgDADAAAEQAAAEADADQACACAEAAQAEAAADgCQACgDAAgEQAAgEgCgDQgDgCgEAAQgEAAgCACg");
	this.shape_22.setTransform(13.5,3.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("Ah+ADQAFgCAEgCIgCgBIgHgCIgEgBIAAgEQAKADANgDIgDAAIgGgNQAEAHADABIAHAAIANgCQAKgBAOADQAPAEAKAIIgHAAQgJgDgKAAIgDAAIAAAAQgNAAgCABIgKAEIgHACIAAABIgFACIgDACIgDADQgEAEAQAPQgEACAAABQgJgQgNgNgABlAUQAQgPgCgFIADAEIgBABQgHAJgFAJQAAgBgEgCgAhLAMQgDgCAAgEQAAgEADgCQADgDADAAQAEAAACADQADACAAAEQAAAEgDACQgCADgEAAQgDAAgDgDgAA/ABQgDgBAAgEQAAgEADgDQADgDADAAQAEAAADADQACADAAAEQAAAEgCABQgDADgEAAQgDAAgDgDgABzAAIgBAAIgBAAQgEgEgIgDIgGgDIAAAAQgOgFgMgCIgJAAIgLABIgGABIgBABQALgMAPgBQAIAAAUADIAHABIAIAAQACgBAFgHIgHANIgCAAQAMADAKgCIAAADIgDABIgIACIgBABQADADAGACIgKAJIgDgEgABzAAIAAAAg");
	this.shape_23.setTransform(13.4987,2.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#ECB186").s().p("AgFBxQARgSAJgVQAIgSADgLQAEgOAAgQQAAgRgMgdQAFgJAHgJIABgBIAJgKQgGgCgDgDIABgBIAIgCIAEgBQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIAFgBIAFAYQAFAXABAMIAAABQAAAagLAhQALghAAgaIADgCQAFAfAMAUQgMAIgTACIgBAEQgGASgMARQgNATgUATgABXgRIgBgGIgBgJQAGAHACAPQgCgPgGgHIgBgEQAFgGADgBIAGgBIgGABQgDABgFAGIgCgUIAIgBQAGAAAEADQAFAEACAJQADAJAAANIAAAGIgBAGQgCARgIANIgFAGQgFgTgCgbgAhjASIgIgHQgCgDAAgEIABgEQAUAHAMgEIABAAQALgDABALQAAALgYAAgAhNAPQAAgGACgBQACAAACACQgCgCgCAAQgCABAAAGgABVggIAAAAgAgygvIABgRIgDgcIAIgBIAPACIAMgBIAIAAIAJgJQADgKgMgCQgMgDgNABIAAgGIAHAAIAKAAIAQAGQAVALAUAFIgEANQgFAHgCABIgIAAIgGgBQgTgDgJAAQgPABgLAMIACgBQgFAJgCAPg");
	this.shape_24.setTransform(21.65,8.4875);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EEBD99").s().p("Ag4B6QAfgQAUgUIAKAJQgcAagfAGgAAbhkIACAAIAHgOIAEgMIALACIACAFIAEAQIAAABIgFACIgBAAIgBAAIgKABIgNgBg");
	this.shape_25.setTransform(21.65,11.2375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFE0C9").s().p("AAJCYQgsgDgpgyIgQgVQgZgkgDgaQgEghABgPIABgVIgBgGIAAgEIAAgBIAEABIAHACIACABQgEAEgFABQANAOAJAQQAAgBAEgCQAJgEALgCIAEgBIAVgDIAUgDQgCgMgDgIQgKgHgPgEQgOgDgKABIgNACIgHgBQgDgBgEgHIAGAOIADAAQgNACgKgCQAAgLACgJIABgEIAEgEIABgBQAEAAAVgMQAKgFAJAAQAEAAAIACIAKADIACAAIgLgIQgHgEgJAAIgEgHIAQgHQAXgJAdgFIADAAQATgDASgBIABAAIAdAUIgGgBQgFAAgHAFIgKAIIAWgEIAAAGQAMgBANACQAMADgEAKIgIAIIgIAAIgMACIgPgDIgIABIADAcIgCASIAGAAIAUADIAVADIAEABQALACAJAEQAEACAAABQANAdAAAQQAAAQgEAPQgDAKgIATQgKAVgRASQgUAUgfAQIABAFIgBAAIgOACIgBAAIgIgBgAgbA/IAAAAQADACAEAEIAFAHQAJANASAAQANAAAKgKIAGgJIAIgLIANgTIAFgGQgNAMgPAIQgRAIgRAAIggABIAAAAIgDgBQgDAAgFAEQAFgEADAAIADABgABLAZIgIAJIAIgJIAHgGIgHAGgABVAPIAAAAIAAAAIADACQAEADAAADQAAgDgEgDIgDgCIAAAAIAAAAIgFgDIAFADgAgUABQAAAEACACIAIAHIALAFQAXAAAAgMQAAgKgMADIAAAAQgMAEgTgGIgBADgAgTgCQAEgQAAgFIgDgTIAAgCIgEgTIAEATIAAACIADATQAAAFgEAQgAAph0QAEgCAJAAQgJAAgEACgAgbA/IAAAAg");
	this.shape_26.setTransform(12.7957,8.8128);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(0.5,1,1).p("AgjjUQAEgBADAAQAHgCAIAAQAbgCAlAMQArANAWATQARAOAOArQALAeABAQQAAABABAAQABACABABQAFAHAAAFQgBABAAABQAaADAEgFQgGANgcAGQgCAAgDABQgFAAgGAAQgLABgLgDQAAADABACQAMAXAHA0QAEAgAMATQgMAJgSABQAKggAAgcQAAAAAAgBQAAgLgFgYQgDgLgDgMQAAAAAAgBQgCgIgCgIAAqi0QABAAAAABQADACAGAIQADAFAFAIQAJAQAIAfQARAEAPAHQAOAGAMAHQANAHALAIAAVh7QgHgsgBgDQgFgUgJgUAg3h3QgCgFgBgLQAAgMALgeQAFgQAEgJQACgGABgEAighGQANhIALgMQAOgOAbgRQADgBADgCQAdgRAZgHAh6hdQgDgeAMgXQAEgIAPgUQADgCAEgCAhihmIAAAAQAGgCAGgCQATgFAUgDQAUgEAXAAIAAAAQAOAAAQABQAFAAAFABIAAAAQACAAACAAQAGABAGABQABAAAAAAQADAAADABQAJACAJACAhjg/QgCgGAAgEQgCgFAAgBQAAgDACgHQACgHABgGAh6hdQAJgEAKgEQABAAABAAQABgBACAAAiJgbQABgEACgCQABgBAAgBQAIgJAPgKQAIgFAHgEQAIgEAJgEQAXgJAcgEQACAAACAAQAUgDAQgBQABAAABAAQAcAAAWAFQAHACArARQAMAFANADQAFgJAAgBAiNhTQAAAAABAAQAIgFAKgFAiEggQAAAAAAABQgCACgDACAiEggQAEAAAVgMQAKgFAJAAQAFAAAHACQAIADACAAIADAAQgIgGgEgCQgHgEgJAAQgQAAgHAHQgJAIgJAJgAiSgiQABgBABgBQADgCADgCQAWgPARgIQALgGAKgCAAohbIAAgPAgbhUQABgCAAgDQABgDAAgEQAAgDgDgIAAshFQABABAAAAQACAAAEADQgEgCgDgCgABGg2QgNgGgCAAQgCgBgJAAQgCAAgFABQgHABgOADQADgCAHgGQAHgFAEAAQAFAAACAAQgOgIgPgLABIjAQAcAVASAgQAKATAHAjACUgaQAAgCgBgCQgBgCAAgCAB8gkQgGAAgGgCQgTgFgXgLQgJgFgKgGABthJQACgIAAgCQAAgHgCgIACMg4QAKACAKABQADABACAAQABAAAAAAACUgaQAKAKAKAIQADADACALQAEAEADAJQACAIAAAOQAAADAAADQAAADAAACQgCATgJAMQgCAEgDADQgFgUgCgcQAAgCgBgDQAAgFgBgFQAAgCAAgCQAEgFADgBQACgBAEAAACaADIAIgBQAGAAAFAEACdgiQAcAVAJAYQAAACABABQACAGAHAxQgDgGgFgFQgGgHgIgEABsALQAGgBAGgBQgLALgDACQABABAEAEQADAEABADQgFAAgGgDQgEgDgDgBQgBABAAABQAAgBgFgCQABgBABgBQAIgHADgFQACgBACAAQgGAIgFAIQgCgCgCgBACdAXQgBgKgCgKQgCgRgEgMABigRQABACABADQAIAUABABQAAABgBABIAAAAABmgEQgBgDgBgFQgBgDgBgCABjgMQAAgDgBgCABoAEQAAgCgBgCQAAgBgBgDQADAIgBAAgABnAAQgBgDgDgJQACAFABADABbAaQgIgEgMgCQgBgBgCAAQgGAAgQgDQgIgBgLgCQAAgBAAgBIAJgCIAFABIAIACQAOADALAAQAKAAAUgDQABgCgBgGAAyBiQAFgGAEgDQAEgEADgCAA/BMQAEACACABIAAAAQADACAAAAQADADABADAhsCOQAHAKAJALQApAyAtADQAEABAEgBQAHAAAHgBQAAAAABAAQAggGAcgaQAVgTANgTQAMgSAFgRQABgCABgDACgBfQAFAJAHAGIABABQgEgJgDgMACdAbQAGAIADAPAAbALQADgMAEgIAAgAHIAYgJAgmAAQABACACARQABABAAABQACAQAAADQAAAFgEAQQAAACgBACQAAAEACACQACACAGAFAgEBMQAAgGABgCQACAAACADAiLAVQAJAGAJAGQgCACgEALIAAABIAKgIQADAFAAAIQAOgOAPgHQAIgDAJgCQACAAACgBQAGgBAHgBQADAAAEgBQAAgBgBgCQgCgKgDgHAh5AaQAEAFAEAHQAAgBAEgDQAJgDALgCQACgBACAAQAFAAAMgCQAIgCAJgBAhBAIQAFABAKAIAgtATQgYACgNAEQgJACgPAAQgKAAgFgBQgBgBgBAAQgGgDgKgDQAAABAAABQAAAFgBAFQAAAPAEAhQADAbAZAkAiKAIQgBgCAAgDQAAgBAAgCIAAAAQAAgBAAgCQAAgMABgIQABgCAAgCAiKAIQAAABAAAAQgBAEAAAGQgDgBgDgBQADADADABAiKAIQALAIAGAKAh8ARQADgHAGgGAgrB+IgBABIABAAIAhgBQAPAAARgIQAQgIAMgMAgrB+IAAABQADACAEAEQACADACAEQAKANATAAQAMAAAJgKQAEgFADgFQAFgGACgEQAHgKAGgJQADgDACgDAg2CCQAFgEACAAQACAAACAAAgkCFQAGACADAAQADABAOAAQATAAAQgDAighGQAHgFAJgGQABgBACgBQgHAOgDAFQgDAGAAAHQAAABAAAAQAAAFAAACQABACAHAHAiogQQgDADgDACQgHgLABgMQABgMAHgMQAFgGAHgGAiogQQAAAAABgBQAKgIALgJAiogQQgBAHgCAEQgCAEAAAEQAAAEADANQAAACABABAiaAFQgCACgCAEQgDAHgEANQgGAUAAANQAAALAKAXQAIAUAHALAieAAQgBAEgDAGQgDAGgEAHQgGAJgJAMQgTAbAAASQAAAUAqAUQAIADAHADQAZAJANgC");
	this.shape_27.setTransform(14.4125,2.4266);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgeA/IgJgCQgEgFgDgCIAhgBQAPAAARgIQAPgHANgNIgFAHIgNATIgHAKQgQACgTAAIgRAAgAAYg6IAAgCIAJgCIAFABIAEAEIABACIgTgDg");
	this.shape_28.setTransform(14.7375,9.675);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhrAXIgKAHIAAgBIAGgNIgSgLIAAgDIAQAGIACABIAPABQAPAAAJgCQANgEAYgCIABAEIgHABIgRACIgRACIgEABQgLACgJAEQgEACAAABIgIgMIAIAMQAAgBAEgCQAJgEALgCIAEgBIARgCIgRAGQgPAGgOAOQAAgIgDgEgAByAOIgHgEIALgPIgLAPIgEgCQAIgIADgEIAEgBIgEABQgDAEgIAIIgCABQgIgEgMgCIgDgBIgWgCIgBgBIgEgFIAIADQAOADALAAQAJgBAVgDQABgCgBgGIAAAAIgCgIIgCgJIgCgFIACAFIAJAXIgBABIAAAAIAMgCIgOAMIAFAFQADAEABADQgFAAgGgDgABlAJIACgBIAEACIgBACQAAgBgFgCgABrAKIAAAAg");
	this.shape_29.setTransform(13.424,4.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EEBD99").s().p("Ag4B6QAfgQAUgUIAKAJQgcAagfAGgAAbhkIAAAAIADAIIgDgIgAAbhkIACAAIAHgOIAEgMIALACIACAFIAEAQIAAABIgFACIgBAAIgBAAIgKABIgNgBg");
	this.shape_30.setTransform(21.65,11.2375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#ECB186").s().p("AgFBxQARgSAJgVQAIgSADgLQAEgOAAgQQAAgRgMgdIABgCIAHAEQAGADAFABQgBgEgEgEIgEgFIAOgNIgNACIABAAIABgBIgKgXIgBgFIgFAAIgGgBQgTgDgJAAQgPABgLAMIACgBQgFAIgCAOIAAACIgGgBIABgRIgDgcIAIgBIAPACIAMgBIAIAAIAJgJQADgKgMgCQgMgDgNABIAAgGIAHAAIAKAAIAQAGQAVALAUAFIgEANIgHANIgCAAQANADAKgCIABgBIABAAIAFgBIAFAYQAFAXABAMIAAABQAAAagLAhQALghAAgaIADgCQAFAfAMAUQgMAIgTACIgBAEQgGASgMARQgNATgUATgABXgRIgBgGIgBgJQAGAHACAPQgCgPgGgHIgBgEQAFgGADgBIAGgBIgGABQgDABgFAGIgCgUIAIgBQAGAAAEADQAFAEACAJQADAJAAANIAAAGIgBAGQgCARgIANIgFAGQgFgTgCgbgAhjASIgIgHQgCgDAAgEIABgEQAUAHAMgEIABAAQALgDABALQAAALgYAAgAhNAPQAAgGACgBQACAAACACQgCgCgCAAQgCABAAAGg");
	this.shape_31.setTransform(21.65,8.4875);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFE0C9").s().p("AAJCYQgsgDgpgyIgQgVQgZgkgDgaQgEghABgPIAAgKIASAMIgGANIAAABIAKgIQADAFABAIQAOgOAOgHIASgFIADgBIANgCIAHgBIAAgDQgCgKgDgHQADAHACAKQgYACgOAEQgIACgQAAIgPgBQgGgJgLgIIgBgFIAAgEIAAgBIAAgDQAAgLACgJIABgEIAEgEIABgBQAEAAAVgMQAKgFAJAAQAEAAAIACIAKADIACAAIgLgIQgHgEgJAAIgEgHIAQgHQAXgJAdgFIADAAQATgDASgBIABAAIAdAUIgGgBQgFAAgHAFIgKAIIAWgEIAAAGQAMgBANACQAMADgEAKIgIAIIgIAAIgMACIgPgDIgIABIADAcIgCASIAGAAIAUADIAVADIAEABQALACAJAEQAEACAAABQANAdAAAQQAAAQgEAPQgDAKgIATQgKAVgRASQgUAUgfAQIABAFIgBAAIgOACIgBAAIgIgBgAgbA/IAAAAQADACAEAEIAFAHQAJANASAAQANAAAKgKIAGgJIAIgLIANgTIAFgGIAIgJIAHgGIgHAGIgIAJQgNAMgPAIQgRAIgRAAIggABIAAAAIgDgBQgDAAgFAEQAFgEADAAIADABgABVAPIAAAAIADACQAEADAAADQAAgDgEgDIgDgCIAAAAIgFgDIAFADgAgUABQAAAEACACIAIAHIALAFQAXAAAAgMQAAgKgMADIAAAAQgMAEgTgGIgBADgAgTgCQAEgQAAgFIgDgTIAAgCIgEgTIAEATIAAACIADATQAAAFgEAQgAgiguQgKgIgFgBQAFABAKAIgAhrguQADgHAFgGQgFAGgDAHgAAph0QAEgCAJAAQgJAAgEACgAgbA/IAAAAgAhqgmIgRgGIABgJIAAgBQALAIAGAJIgBgBgABCgzIgJgCIgEgBIgKACQADgNAEgIIgBAAQALgMAPAAQAIAAAUADIAHABIAEAAIACAFIgCgFIACAFIAAAAIAEAOIAAADIAAgDIgCgFIADAIIgBAAQABAGgBACQgUADgJAAQgMAAgNgDgAAwg4IAZgKgAB0hMIACAJIACAFIgEgOg");
	this.shape_32.setTransform(12.7957,8.8128);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF6B33").s().p("AiOBsIgOgGQgrgUAAgUQAAgSATgbIAPgUIAHgNIAEgKIgEAKIgHANIgBgDIgDgRQAAgFACgEIADgKIABgCIAVgRIACgCIAGgEIAGAFIgCACIgDAGIgBAEQgBAJAAALIgBAAIgBAAQAAAAAAABQAAABAAAAQABAAAAABQABAAAAAAIAAABIAAAEIABAFIAAABIgBAJIgGgCIAGAEIAAAJQgBAPAEAiQADAaAZAkIgGABQgMAAgUgIgAinAlQAAALAKAXQAJAUAGALQgGgLgJgUQgKgXAAgLQABgNAFgUIAHgSIAEgHIgEAHIgHASQgFAUgBANIAAAAgACxBTQgHgGgGgJQgMgTgEggQgHg0gMgXIgBgEIAEAAIAQACIABAAIAAAAIABAAIABADIACAEQADAMADATIACAUIAAADIABAJIABAGQADAbAEAUQAEAMAEAJgAiNgJIAGACIAAACIgGgEgACUg8IgQgCIgEAAIgMgDQgTgFgXgLIgTgLIgGgDIgBAAIgdgUQAcAAAWAFQAIACAqARQAMAFANADIAUAEIAGAAIAAAAQAaADAEgFQgGANgbAGIgGABIgLABIgBAAIAAAAIgBAAg");
	this.shape_33.setTransform(14,5.1089);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6A7E42").s().p("AhzBSQAAgHAEgHIAJgSIABgBIAJg6QADgIAWgPIAMgIIAHgEIATgKIAdgPIADgJIAHgCIAPgCIAMAFIAUAJQAMAFAFAFQAEAEADAHIACABQACACAGAJIAIANQAJAPAIAeIgSgEIgFgBIgBAAIgNgBIgEgBIAAAAIgKgBIgEAAIgLgBIgBAAIgKAAIgBAAIAAAAIgCAAIgCAAIAAAAQgXAAgSAEQgVADgSAFIgMAEIgBAAIABAAIAMgEQASgFAVgDQASgEAXAAIAAAAIACAAIACAAIAAAAIABAAIAKAAIABAAIALABIAEAAIAKABIAAAAIAEABQABAFgBAEQgCAIgNADIgfADIgUAEIAAgHQAAgEgCgHQACAHAAAEIAAAHIgKABIgdAFQgTAEgRAFIgBgGIACgKIACgNIgDABIgCABIgTAIIATgIIACgBIADgBIgCANIgCAKIABAGIgVAIQgPAHgRAJIAAgBgAhlAxIASgJIAAgNQAAgXAJgRQAEgIAPgTQgPATgEAIQgJARAAAXIAAANIgSAJgAgSgBIACAOIgCgOQAAgMAKgfIAIgZIAHgDIgHADIgIAZQgKAfAAAMIAAAAgAA1glIAIAvIgIgvQgFgUgLgUQALAUAFAUg");
	this.shape_34.setTransform(10.4875,-10.9125);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(0.5,1,1).p("AgjjUQAEgBADAAQAHgCAIAAQAbgCAlAMQArANAWATQARAOAOArQALAeABAQQAAABABAAQABACABABQAFAHAAAFQgBABAAABQAaADAEgFQgGANgcAGQgCAAgDABQgFAAgGAAQgLABgLgDQgGAAgGgCQgTgFgXgLQgNgGgCAAQgCgBgJAAQgCAAgFABQgHABgOADQADgCAHgGQAHgFAEAAQAFAAACAAQgOgIgPgLQAcAAAWAFQAHACArARQAMAFANADQAFgJAAgBAAqi0QABAAAAABQADACAGAIQADAFAFAIQAJAQAIAfQARAEAPAHQAOAGAMAHQANAHALAIAAVh7QgHgsgBgDQgFgUgJgUAg3h3QgCgFgBgLQAAgMALgeQAFgQAEgJQACgGABgEAighGQANhIALgMQAOgOAbgRQADgBADgCQAdgRAZgHAh6hdQgDgeAMgXQAEgIAPgUQADgCAEgCAhihmIAAAAQAGgCAGgCQATgFAUgDQAUgEAXAAIAAAAQAOAAAQABQAFAAAFABIAAAAQACAAACAAQAGABAGABQABAAAAAAQADAAADABQAJACAJACAh6hdQAJgEAKgEQABAAABAAQABgBACAAAhjg/QgCgGAAgEQgCgFAAgBQAAgDACgHQACgHABgGAiJgbQABgEACgCQABgBAAgBQAIgJAPgKQAIgFAHgEQAIgEAJgEQAXgJAcgEQACAAACAAQAUgDAQgBQABAAABAAAiNhTQAAAAABAAQAIgFAKgFAiEggQAAAAAAABQgCACgDACAiEggQAEAAAVgMQAKgFAJAAQAFAAAHACQAIADACAAIADAAQgIgGgEgCQgHgEgJAAQgQAAgHAHQgJAIgJAJgAiSgiQABgBABgBQADgCADgCQAWgPARgIQALgGAKgCAAohbIAAgPAgbhUQABgCAAgDQABgDAAgEQAAgDgDgIAAshFQABABAAAAQACAAAEADQgEgCgDgCgABIjAQAcAVASAgQAKATAHAjACUgaQAAgCgBgCQgBgCAAgCAB8gkQAAADABACQAMAXAHA0QAEAgAMATQgMAJgSABQAKggAAgcQAAAAAAgBQAAgLgFgYQgDgLgDgMQAAAAAAgBQgCgIgCgIABthJQACgIAAgCQAAgHgCgIACMg4QAKACAKABQADABACAAQABAAAAAAABGg2QgJgFgKgGACUgaQAKAKAKAIQADADACALQAEAEADAJQACAIAAAOQAAADAAADACaADIAIgBQAGAAAFAEACdAXQAEgFADgBQACgBAEAAACdgiQAcAVAJAYQAAACABABQACAGAHAxQgDgGgFgFQgGgHgIgEQAAADAAACQgCATgJAMQgCAEgDADQgFgUgCgcQAAgCgBgDQAAgFgBgFQAAgCAAgCQgBgKgCgKQgCgRgEgMAB6gJQAAgBAAgCQABAAAAAAIABAAQAAACgCABQgCABgCAAQgGABgBABIgCABQAEAEAFABQgFAEgEAFQAAABgBABQgHAIgFAKQAAgBgFgCQgIgEgMgCQAEgCAEgDQAHgHAAgIQAAgCAAgDIAAABQADABADABQAIACAEAEQABABABAAQgBgBgBAAIAAAAAB6gMQgKACgNgCIADAAIAGgOQgEAHgDABQgBABgGAAQgEgBgDAAQgUgDgJAAQgPAAgKAMQAAAAABAAQADgBADAAQAJgCACAAQAEAAAFABQALABAPAFAAzAAQAAAEADADQACADAEAAQADAAADgDQADgDAAgEQAAgDgDgDQgDgCgDAAQgEAAgCACQgDADAAADgABHAUQgBgBgCAAQgGAAgQgDQgIgBgLgCQACgNAFgJABbAaQARgQgCgFQACACABACAAyBiQAFgGAEgDQAEgEADgCAA/BMQAEACACABIAAAAQADACAAAAQADADABADAhsCOQAHAKAJALQApAyAtADQAEABAEgBQAHAAAHgBQAAAAABAAQAggGAcgaQAVgTANgTQAMgSAFgRQABgCABgDACgBfQAFAJAHAGIABABQgEgJgDgMACdAbQAGAIADAPAAogKQgCAEAAAGQAAAIAHAHQABABAAAAAgmAAQABACACARQABABAAABQACAQAAADQAAAFgEAQQAAACgBACQAAAEACACQACACAGAFAgEBMQAAgGABgCQACAAACADAg4ACQACABAEgBAhFALQAAAEgDADQgDADgDAAQgEAAgDgDQgCgDAAgEQAAgEACgDQADgCAEAAQADAAADACQADADAAAEgAhnAFQAHgEACAAQADgBAMAAIABAAQABAAABAAQALAAAJACQABADAAADQAAAJgHAHQgBABgBAAQAJgBALgCQgCgMgEgIQgJgGgPgEQgOgEgKACQgKACgDAAQgHAAgBgBQgCgBgFgHIAHAOIACAAQgMACgKgCQgBAAgBAAIgBAAQABACACABQAAgBAAgCQAAgMABgIQABgCAAgCAhZAdQACgBACAAQAGAAAPgDAiLAAIAAAAQAAACAAABQAAADABADQgBAHgBAPQAAAPAEAhQADAbAZAkAiLAAQABAAACAAQAHABABABIABABQgDAEgGABQAOAOAJAQQAAgBAEgDQgQgOADgFQACgBABgBQACgCACgBQACgBACgBQABAAAAAAQAEgCADgBAhZAdQgEgCgDgDQgHgHAAgJQAAgCAAgBAhtAiQAJgDALgCAgrB+IgBABIABAAIAhgBQAPAAARgIQAQgIAMgMAgrB+IAAABQADACAEAEQACADACAEQAKANATAAQAMAAAJgKQAEgFADgFQAFgGACgEQAHgKAGgJQADgDACgDAg2CCQAFgEACAAQACAAACAAAgkCFQAGACADAAQADABAOAAQATAAAQgDAighGQAHgFAJgGQABgBACgBQgHAOgDAFQgDAGAAAHQAAABAAAAQAAAFAAACQABACAHAHAiogQQgDADgDACQgHgLABgMQABgMAHgMQAFgGAHgGAiogQQAAAAABgBQAKgIALgJAiogQQgBAHgCAEQgCAEAAAEQAAAEADANQAAACABABAiaAFQgCACgCAEQgDAHgEANQgGAUAAANQAAALAKAXQAIAUAHALAieAAQgBAEgDAGQgDAGgEAHQgGAJgJAMQgTAbAAASQAAAUAqAUQAIADAHADQAZAJANgC");
	this.shape_35.setTransform(14.4125,2.4266);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFE0C9").s().p("AAJCYQgsgDgpgyIgQgVQgZgkgDgaQgEghABgPIABgVIgBgGIAAgEIAAgBIAEABIAHACIACABQgEAEgFABQANAOAJAQQAAgBAEgCQAJgEALgCIAEgBIAVgDIAUgDQgCgMgDgIQgKgHgPgEQgOgDgKABIgNACIgHgBQgDgBgEgHIAGAOIADAAQgNACgKgCQAAgLACgJIABgEIAEgEIABgBQAEAAAVgMQAKgFAJAAQAEAAAIACIAKADIACAAIgLgIQgHgEgJAAIgEgHIAQgHQAXgJAdgFIADAAQATgDASgBIABAAIAdAUIgGgBQgFAAgHAFIgKAIIAWgEIAAAGQAMgBANACQAMADgEAKIgIAIIgIAAIgMACIgPgDIgIABIADAcIgCASIAGAAIAUADIAVADIAEABQALACAJAEQAEACAAABQANAdAAAQQAAAQgEAPQgDAKgIATQgKAVgRASQgUAUgfAQIABAFIgBAAIgOACIgBAAIgIgBgAgbA/IAAAAQADACAEAEIAFAHQAJANASAAQANAAAKgKIAGgJIAIgLIANgTIAFgGIAIgJIAHgGIgHAGIgIAJQgNAMgPAIQgRAIgRAAIggABIAAAAIgDgBQgDAAgFAEQAFgEADAAIADABgABVAPIAAAAIADACQAEADAAADQAAgDgEgDIgDgCIAAAAIgFgDIAFADgAgUABQAAAEACACIAIAHIALAFQAXAAAAgMQAAgKgMADIAAAAQgMAEgTgGIgBADgAgTgCQAEgQAAgFIgDgTIAAgCIgEgTIAEATIAAACIADATQAAAFgEAQgAAph0QAEgCAJAAQgJAAgEACgAgbA/IAAAAg");
	this.shape_36.setTransform(12.7957,8.8128);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_34},{t:this.shape_16},{t:this.shape_14},{t:this.shape_33},{t:this.shape_32},{t:this.shape_19},{t:this.shape_17},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_15},{t:this.shape_11},{t:this.shape_27},{t:this.shape_10},{t:this.shape_12}]},44).to({state:[{t:this.shape_18},{t:this.shape_16},{t:this.shape_14},{t:this.shape_20},{t:this.shape_36},{t:this.shape_19},{t:this.shape_17},{t:this.shape_24},{t:this.shape_25},{t:this.shape_23},{t:this.shape_21},{t:this.shape_22},{t:this.shape_15},{t:this.shape_11},{t:this.shape_35},{t:this.shape_10},{t:this.shape_12}]},3).wait(73));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-20.2,42.9,45.3);


(lib.Symbol35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ECB186").ss(0.5,1,1).p("AgwAAQABADACADQAGAHAQgCAAWAEQABABABACQACAFACADQADAEAEABQACAAAMgFAgSgUQAAANAKAKQAHAIADAFQABABAAAAQACADAAABIAHgBQAGgCADAA");
	this.shape.setTransform(12.3,-10.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("AAZgXQADAFADADQAHAHAFAFAgGglQACgCACgBQAFgDAEAAQAEAAAIALQAEAFACAEIAdADQALAFAQAEQgBAFgCAOQgCAIgBALQgCAWACAXQgCACgDAAQgOgCgGgeQgDgMAAgOIgKAhQgBAPADAJQgSgDgDgYQgBgNAEgYAgygPQgFgCgFgBQgMgCgIgFIgBgBQAIgIANgLQAKgLAFgPQAAgCACABQAHABABAaQgBAHgCAEgAgGglQgDgGgGgFIgSAGIgFAIAgbgHQgDgBgBAAQAAAHABAIQAEAkAJAKQAJAKABgDQAAgEABgJQABgKADgZQAAgFAAgEQAAgHAAgGQAAgLgBgIQgBgFgCgDAgggZQAAAIABAJQgNgGgGgBAAtAAQAEAEAAADIAAAAIgBAFIgBAEAAXAJQgBAAgBAAQgBgBgBAAQgPgJgGgJ");
	this.shape_1.setTransform(10.25,-9.9562);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ECB186").s().p("AAbAKQgDgMAAgOIABgDIABgFQADAEAEABQACAAAMgGIAIABIgDATQgCAWACAWQgCADgDAAQgOgCgGgegAgEAOQgBgNAEgYIACABIACAEIAHgBIAJgCIAGACIgBADIgKAhQgBAPADAJQgRgDgDgYgAgoAVQgJgKgEgkIgBgQIAEACIADAFQAGAIAQgCIAAAJIgEAiIgBAMIgBABQgCAAgHgHg");
	this.shape_2.setTransform(12.525,-6.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE0C9").s().p("AAqApIgJABIgKgCIAAgBIgLgNQgKgLAAgOQAAAOAKALIALANIAAABIgCgBIgBgBQgQgKgGgJIgBgTIgCgHIACAHIABATIAAAOQgRACgFgHIgEgGIgDgBIAAgRIAAARIgSgHIALgRIgLARIgLgDQgMgBgIgFIgBgBQAIgHAOgMQAJgKAFgQQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAABAAQAGABABAbQAAAGgDAFIAGgJIARgGQAGAFAEAGIADgDQAFgDADAAQAFABAIAKIAGAIIAGAIIALANIgLgNIgGgIIAcADQALAGARAEQgCAEgBAPIgJgBQgMAGgBgBQgEAAgDgEIAAgBQAAgCgEgFIgDgDIADADIAEAIIgBAFgAgCATIAAAAgAAZAGg");
	this.shape_3.setTransform(10.25,-13.0312);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.instance = new lib.rifleIMG();
	this.instance.setTransform(158.9,-13.1,0.2268,0.2268,0,7.0337,-172.9663);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFE0C9").ss(0.5,1,1).p("AhFBWQAQgIAXgPQAigYA2gpQBghOAAgRQAAgHgJgFQgFgCgCgBAiZigQAHgCAJgCQAMgEAFgCIAFAMQAAAZgICIQgGBwgEA4");
	this.shape_4.setTransform(17.1,21.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.5,1,1).p("AhoBNQAAgRgBgTQgNiHAAgiQAAghgDgdQgKAAgOgPQgEgFgEgFQgKgNgMAXQgKAVgMA0QgBABAAABQgBADAAAEQgYBqgFB3QgEBZAcAUQAMAJARgDQAAABACAAQAGADASgBQAWgCA2gWQACgBABAAQA2gXBWg/QBYhBAfg9QAfg9AJg9QgEgBgFgBQgjgGgXAQQgUAOgsAoQgBABAAAAQgsAogMAIQgVAOg+AtQgQALgMAJQgZASgJAIgAhwCKQACgIACgJQADgUABgY");
	this.shape_5.setTransform(21.0504,17.8513);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE0C9").s().p("AirBBQAGh4AXhpIAHgCIAQgFIARgGIAFANQAAAZgICIIgKCoQgFAAgMACIgOADQgdgVAEhYgAguAoQAJgIAZgSIAagUQA/guAVgOQAMgIAsgnIABgBIAIACQAJAFAAAIQAAARhhBNQg1AqgiAXQgXAQgQAHQAEgTABgYg");
	this.shape_6.setTransform(15.3004,21.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ECB186").s().p("Ai5DaIgDgBQgQADgMgJIAOgCQAMgDAGAAIAKioQAHiIAAgZIgFgMIgRAGIgQAEIgGACIABgHIABgCQAMg0AKgVQAMgXAKANIAIAKQAOAPAKAAQADAdAAAhQAAAiANCHIABAkQgBAYgDAUQAPgIAXgPQAjgYA1gqQBghNAAgRQAAgHgJgFIgHgDQAsgoAUgOQAXgQAjAGIAJACQgJA9gfA9QgfA9hYBBQhWA/g2AXIgDABQg2AWgXACIgJAAQgKAAgEgCgAh9CKIAFgRIgFARg");
	this.shape_7.setTransform(22.3,17.8513);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.7,-33.9,176.6,84.3);


(lib.Symbol34 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CEFFBD").ss(0.5,1,1).p("AgTgFQABgFAEgEQAGgHAIAAQAJAAAFAHQAHAGAAAIQAAAJgHAGQgFAHgJAAQgIAAgGgHQgGgGAAgJQAAgBAAgC");
	this.shape.setTransform(54.35,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#252A35").ss(0.5,1,1).p("AgagOQAFAAANgFQAMgEAGAAQAIAAAJAdQgbANgUAF");
	this.shape_1.setTransform(31.95,81.3875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#303A4D").ss(0.5,1,1).p("Agug9QAGgEADgCQAFgDAAgEIgJgTAAAAHQAHgKAAgDQAAgBgEgFQgNAFgJAEQgIADgEADQgFADAAACQAAASAVAXQAGAHAJAIQAPAOANAIQABAAABABQANAHAJAAQABAAAjgWAhXgqQAEAFAAACQADAAADgCQAEgCAEgB");
	this.shape_2.setTransform(35.8125,84.6625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#ECB186").ss(0.5,1,1).p("AieljQAEANABAKQAAACAAACQAFgGALgBQADAAAdgBQAdgBAUAAQAUAAAHAgAiPi3QAEABAKAXQALAXAnBEQAmBEAZAAQAKAAAEgCQABgBAHgHQAAAEgFALQgBABAAAAQgBAEgCAGQgKAVAAAOQAAAcAgBEQARAiAUAjQADAIAcBEQAeBAARAAQAHAAASgM");
	this.shape_3.setTransform(16.1625,37.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.5,1,1).p("AkgniIAAgBQAXgJAHgCQAKgDANAAQAyAAAWAgQAPAXACAjQAAAIgBAJIAAABQABAAgBABQACACAAAEAkTkvQAEAGABAGQAAABAAAAQABACAAABQANA2ATAuQAaA9AhA/QAAAAAAABQAKATALAUQAEAPAEAPQAkB7BXCJQACACACADIADABQAMAAAKgEQAIgDAIgGQADgCAEgEQAGgFAIgJQAAAAABAAQgEgEgCgEQAAAAAAAAAhWg+QAAgGgBgGQgCgLgBgKIALAOIADAFQAnA7AVBAQAfCCAPAqQAAAAAAABQADAHACAFAiqhhIAEAcQAAACAAABQAEAVAFAWAhahfQghjlgUg3AA/EXQgCgFgBgGQgDgNAAgBQAAgHgCgHQgDgMgFAAQgDAAgCAAQgBABgBAAQgDABgBABQgBAAAAABAA/EXQgJABgRAGQAAAAgBABQgIACgGADQgNAEgHAFQgCABgCACQAAACABACQABAJADAIQAEAMABADIAAACQgEgBgCAAQgBAAAAABQgCAAgCABQgBABgCACQgFgLAAAAQgCgFAAgGIAFgDAAEFjQAEgDAFgCQAAAAAAAAQAGgDAHgCQABAAAAAAQABgBABAAQAZgJADAAQABgBABAAQAFgBAGgBQAAgBABABQAFgBAFgBIABAAQACAAADAAIAAAAQAAgBAAgBQgBgCAAgCQgIgugHAAQgDAAgFABABYFhQgBgCAAgBQgFgJAAgCABYFhQgEgCgBAAQgDAAgNAFABXFIQAEAFAJAKQAGAGAHAFQAEADAPABQAKADACALQAOADAJAMQAMAOACAWIgDACIAXgGQAAgSANgOQAIgIAKgDQgDAEgEAKQgFAOAAADQAAACABAGQAAAEABAFACiGxQgBgCgBgCQgCgEgCgEQgMgUgQgPQgCgDgDgDQgIgHgKgIQgMgJgFgDAAEFjQAAAAgBAAQgDACgGAIQgHAHgCABQgFgHgIgUQgJgTAAgDQAAgDAJgGQADgCACgCQADgDAAgDQAAAAAAAAQAAgDgFgPQgEgLgBgDIAIgBAAEFjQAKAHAAARQABAbACAGQABAEAKADQAGABAKADQAFACAHABQAFANABAPQABAJACASQABABAGAAQAEAAAGgCQAFgCAEAAQAMAEAWACIAJAOQADAAAKgJQALgLAJgFABcG3QAAAAABAAQABABABABIAAAAQAKAFAHAEQgBAEgBAEIAPAaABcG3QAAAGAAAHQgBAKgEAJIAAAGQACAAACABABHGqQAGAFAIAEQADACAEACAA4GqQAHABAIgBAAzGOQAHARANALACDFzQAHgBAGACABwHCQAOAHACACQAEgCAFgDQALAIATALIAAAAQAYANALAAQAMAAgCgGQgDgGgRgLQgPgIgGgMQgCgDgBgCQgGgBABAAQAAgBAAAAQAAgBgBgBQAAgBAAAAAEBHOQgGACgGAAQgSAAgNgNQgDgDgCgDQgEgFgCgHIggAKACoG2QgDgBgCgBACJHGQAJgHAWgJADLGxQgCgGAAgIACyGpIgQAIADxF2QACAAACAAQASAAANANQANAOAAASQAAATgNANQgEAEgFADQgCgBgCgCIgBAAQgEgEgHgEQgFgEgEgGADxF2QgGANgCAJIgBABQAAAAAAABADoF4QABAAABgBQADgBAEAAADjGyQARAZANADAELHKQgFADgFAB");
	this.shape_4.setTransform(29.05,49.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CEFFBD").s().p("AgOAPQgGgGAAgJIAAgDIABgCQABgFAEgEQAHgHAHAAQAJAAAFAHQAHAGAAAIQAAAJgHAGQgFAHgJAAQgHAAgHgHg");
	this.shape_5.setTransform(54.35,90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOAGIgEgBIgBgCIgBgCIARgHIAVgFQAAAHADAGIggAKIgDgGg");
	this.shape_6.setTransform(47.3,92.9125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#58D42E").s().p("AgeAgIgFgGQgEgFgCgHQgCgGAAgIQAAgRANgOQAIgIAKgDIgHANQgGAOABAEIABAIIABAIIgBgIIgBgIQgBgEAGgOIAHgNIACgBIAHgBQgGANgCAJIgBABIAAABIAAAEQAAAJAGAGQAGAGAIAAQAJAAAFgGQAHgGAAgJQAAgJgHgGQgFgHgJAAQgIAAgGAHQgEAEgBAFIgBACIAAgBIABgBQACgJAGgNIADAAQASAAANANQANAOAAARQAAASgNAOQgEAEgFADIgEgDIgBgBIgMgIQgEgDgDgHQADAHAEADIAMAIIgFAIQgMgEgRgYQARAYAMAEQgGACgGAAQgRAAgNgNgAARAjIAAAAgAgDgsIAAAAg");
	this.shape_7.setTransform(53.55,91.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66FF33").s().p("AADgDIAAAAIgFAHg");
	this.shape_8.setTransform(55.0375,95.6375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#465066").s().p("AgXAJIgFgQIgBgEIAGgDQAEAAANgFQANgEAFAAQAJAAAIAdQgbANgTAFIgGgPg");
	this.shape_9.setTransform(31.7,81.3875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#252A35").s().p("Ag1AUQgJgSABgCQAAgEAJgFIAEgEQAEgDAAgDQAEAGAAACQADgBAEgCIAHgCIAFAQIAGAPQATgFAbgMQgIgfgJAAIgBgFQARgGAJgBIAHgBQAIgBAHAvIABACIAAADIAAAAIgFAAIAAAAIgLACIAAAAIgMACIgCABIgbAJIgCABIgBAAIgNAFIAAAAIgJAFIAAAAQgEACgGAHIgJAIQgFgGgJgVgAgmAAQAAAFACAFIAGAKIADgCIAFgBIAAgBIABAAIABAAIAAAAIAFABIAAgCIAAACIgFgBIAAAAIgBAAIgBAAIAAABIgFABIgDACIgGgKQgCgFAAgFIAGgEIgGAEg");
	this.shape_10.setTransform(31.5,82.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#303A4D").s().p("AAUBrIgSgKIAAAAIgCgBIAAAAIgHgEQgHgEgGgFQgOgLgGgSQAGASAOALIgQAAQgGgBgFgCIgQgFQgKgDgBgEQgCgFgBgcQAAgQgLgHIAJgFIAAAAIAOgFIABAAIACgBIAbgJIACAAIAMgDIAAAAIALgBIAAAAIAFAAIAAAAIAAgDIANAPQAFAGAIAFQAEACAOACQAKADADAKQAOADAJANQAMAOACAWIgDABIgRAIIABACIABACIAAAAQAAAAAAABQAAAAAAAAQABAAABAAQABAAABAAQgWAKgJAGIgIAGIgQgJgAgsACIgMAGQgEADgBADQAAASAVAWIAPAQQAQAOAMAHIACABQANAIAJAAQACAAAigXIAFAIIABAEIgBgEIgFgIQgMgUgPgPIgGgFIgSgQIgQgMIgBgDIgEgJIAEAJIABADIgFgCQgDAAgNAGQAIgLAAgCIgDgHIgYAJgAA0AcIgGgBIgFAAIAAAAIAAAAIgBAAIgCAAIACAAIABAAIAAAAIAAAAIAFAAIAGABgAhHg4IAJgFQAFgEAAgEIgIgTIAOgOIAAgBQgDgDgCgEIgBgBIABAAIAEgCIACgBIAGgBQAFAAADANIABAOIADAOIAEAKQgJACgRAGIgBAAIgPAFg");
	this.shape_11.setTransform(38.3,84.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5C6D8E").s().p("AAjBXIgCgBQgNgIgPgOIgPgPQgUgXAAgSQAAgCAEgDIANgGIAWgJIADAGQAAADgHAKQAMgFAEAAIAEACIARAMIASAPIAGAGQAQAPALAUQgiAWgCAAQgJAAgNgHgAhSgqIAAgBQAAgDgFgPIgFgOIAHgBIAEABQAMAAAKgEQAJgDAIgGIAHgFIAIATQAAAEgFADIgIAGIAAAFIAPgFIABgBIACAGQgGAAgNAEQgNAFgFAAQAHgEAMgFQgMAFgHAEIgFADIAAAEIgHADQgDACgEAAQAAgCgEgFg");
	this.shape_12.setTransform(35.2875,84.6625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE0C9").s().p("ABbEbIgfhMQgUgjgRgiQgghEAAgcQAAgOAJgVIAEgJIAAgBQAGgMAAgEIgJAIQgDACgKAAQgZAAgnhEQgmhEgLgXQgKgXgEgBIAEgDIgEAAQgfhTALgYQAAABAAAAQAAAAgBAAQAAgBAAAAQAAAAABgBQACgNAIgYIAAADQAFgGALgBIAggBIAxgBQAUAAAHAhIAKAoIADAGIACADQASA3AhDkIADAVIACAMIgCgMIAJgGIADAEQAnA7AVBBQAgCCAOAqIABABQgSAMgHAAQgRAAgehAg");
	this.shape_13.setTransform(15.791,38.2742);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#ECB186").s().p("ACkHkQgXgCgMgEIgEgBIAAgHQAEgJABgJIAAgNIABAAIACACIAAAAIASAJIgDAIIAQAaIgQgaIADgIIAQAJIAIgGQALAJATALIAAAAIAAAAQgTgLgLgJQAJgGAWgKIADAGQAHAMAOAIQASALACAGQADAGgMAAQgMAAgYgNQgIAFgMALQgJAJgEAAgABnHgIgCgbQgCgOgFgNIAPAAQAHAFAHAEIAHAEIAAANQgBAJgEAJIAAAHIAEABIgJABQgGACgEAAQgGAAgBgBgACBHeIAAAAgAAPEQIgDgFQhXiJgjh7IgIgeQgGgWgDgVIgBgDIgDgcIADAcIABADQADAVAGAWIgWgnIAAgBQghg/gag9QgSgugOg2IAAgDIgBgBQgBgGgEgGIgCgIIAGAAIADAAIgEAEQAEABALAXQAKAXAnBEQAnBEAZAAQAKAAADgCIAJgIQAAADgFANIAAABIgFAKQgKAVAAAOQAAAbAiBDQARAjATAjIAfBMQAdBAASAAQAGAAATgMIAEAMIAAAAQACAEAEADIAAABIgPAOIgHAGQgHAGgJADQgLADgMAAgAjtkvQAEAGABAGIABABIAAADIgGgQgAjtkvIAAAAgAh3mtQgIgggTgBIgxACIghABQgKABgGAGIAAgEQAAgLgFgNIgBgDIAAAAIAfgLQAKgDANAAQAyAAAWAgQAPAXABAjIAAARIAAABIAAABIgCAAIgJgpg");
	this.shape_14.setTransform(25.2125,49.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-1,59.8,101.6);


(lib.Symbol33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#D0EBFF"],[0,1],0,0,0,0,0,1.9).s().p("AgEAJIgGgEQgDgCAAgEQAAgEAEgEQADgCAFAAIAHADIAFADIACADQACAFgDAEQgCAEgGABQgEAAgEgDg");
	this.shape.setTransform(-7.1878,78.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#D0EBFF"],[0,1],0,0,0,0,0,2.3).s().p("AgIAKIgBgKIAAgJQADgGAGAAQAHABACAGIABAIQAAAJgBACQgDAFgGAAQgFAAgDgGg");
	this.shape_1.setTransform(-18.775,86.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#D0EBFF"],[0,1],0,0,0,0,0,2.8).s().p("AgFAUQgCgDgBgIIgCgOQgBgJADgEQADgEAFAAQAFAAACAFIACAHIACAQQABAJgDAEQgCAEgFAAIgBAAQgDAAgDgDg");
	this.shape_2.setTransform(-21.1018,87.1031);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFFFF","#D0EBFF"],[0,1],0,0,0,0,0,2.5).s().p("AgGAUQgEgDAAgMIAAgPIABgGQACgDADgBQAEgCACABQAIADABAIQAAAFgCAIIAAAHQAAAFgCADQgCADgEABIgBAAQgDAAgDgCg");
	this.shape_3.setTransform(-40.145,91.1842);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFFFFF","#D0EBFF"],[0,1],0,0,0,0,0,4.2).s().p("AgKAfIgBgIIAAggIADgQIACgFQADgFAEAAIABAAQAFAAADAEQACAEgBAFIgCAKQgBAGAAANIAAAQIAAAGQgCAGgGABIgBAAQgGAAgDgFg");
	this.shape_4.setTransform(-51.6357,90.6817);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFF2E9","#FFE0C9"],[0,1],0,0,0,0,0,2.7).s().p("AgBANQgMgHgDgHQgCgFABgFQACgFAFgBQAFgBAEADQABACADAGIAIAFQAFADABADQADAFgEAEQgCAFgGAAQgDAAgGgFg");
	this.shape_5.setTransform(-27.876,106.3525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFF2E9","#FFE0C9"],[0,1],0,0,0,0,0,10.2).s().p("Ag8BGQgBgGADgIQAIgcAVgcIAMgQQAPgSAbgZIAPgMQAGgEAEgBQAGgBADAEQADAFgDAGIgHAIIgeAaQgMAKgHAIIgHAKIgUAcQgJARgGATIgDAJQgEAFgEAAIgCAAQgGAAgCgIg");
	this.shape_6.setTransform(-40.7393,68.7959);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFF2E9","#FFE0C9"],[0,1],0,0,0,0,0,4).s().p("AgMAgQgHgCgEgGQgEgGgBgHQgBgKAGgHIAEgGIABgEQAEgLAKgEQAMgFAKAHQAKAHABANQABAEgCAFIgBAGQgCAEgIAMIgFAFQgHAHgIAAQgEAAgFgCg");
	this.shape_7.setTransform(-22.5254,63.0684);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFF2E9","#FFE0C9"],[0,1],0,0,0,0,0,7.8).s().p("AgbBCQgNgFAAgXQgBgXAMgbQAMgcARgPQAQgQAMAGQANAFAAAXQABAXgMAbQgMAbgRAQQgMAMgKAAIgGgCg");
	this.shape_8.setTransform(-27.6252,74.8672);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FFF2E9","#FFE0C9"],[0,1],0,0,0,0,0,3.2).s().p("AAMAWQgDAAgHgGIgSgSIgFgGQgCgEACgFQADgEAGAAQAFAAAFAFIANAOIAIAFQAEAFAAAEQAAAEgDAEQgDACgEAAIgBAAg");
	this.shape_9.setTransform(1.2806,13.3786);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFF2E9","#FFE0C9"],[0,1],0,0,0,0,0,5.9).s().p("AgsAZQgDgEACgGIAWgTIAUgKQAXgLALgDQAFgBADAAQAHACABAHQABAGgGAEQgCABgEABQgPAEgTAJIgRAKIgOAMIgGADIgCAAQgFAAgCgFg");
	this.shape_10.setTransform(8.6753,12.5264);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#91A36D").ss(0.5,1,1).p("AglgLQAJACAXALQAFACAEACQANAGAGAAQALAAAEgE");
	this.shape_11.setTransform(-8.55,87.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#3B5669").ss(0.5,1,1).p("AgUAaQAEABADAAQADABACAAQAZAAADgMQAAgNAAgLIAAAAQAAgJABgK");
	this.shape_12.setTransform(-6.675,72.6875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#A4B9C9").ss(0.5,1,1).p("AkEBWQAEACADAAQAOgCAEAAQAFABAJgBAiGBYQAAABAAAAQAIAAAGgBQAFgBAEgCQAIgEAJgDAC/hYQAZAIAGAAQAEAAAMgEQANgEAEAAQABAEABAFQAAABAAAAQABAHADAOAA4A4QAVgHAJgCQABgBABAAQAMgEALAB");
	this.shape_13.setTransform(-27.975,86.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#556631").ss(0.5,1,1).p("AjyBFIABABQAHAAAFABQAEAAADAAQAFgBADgBAirAJQAKAVAAAVQAAALgBAUIACAAQABABAAABQAFgHAVgCQABAAACAAQADAAAEgBQAQgBAIgBQAAgCAAgCQADgWgDgWAgBAGQAKAVABAOQABAIgBASQAFgDAzgJQABgBACAAQAfgFAAgeQAAgQgGgRAC1gMIAJACQABAAACgBQAEgBAGgFQAJgJAMgTQANgYAGgO");
	this.shape_14.setTransform(-32.9625,88.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#ECB186").ss(0.5,1,1).p("AEqnZIAOgBQAMAAATASQABACACABQADAEgHgRQATAPADgKAFXnIQgBgFAAgFACznvQADACAOAKQAHAFAIAAQALAAANgEQAFgCAFgCQASgIAGgJQgNAVgPASQgXAcgMAHIgBAAQgEACgDAAQgDAAgTgOQgKgHgGgFQAAAAAAAAQgDgCgCAAQAFgCAEgEAC1mqQAEACABACQAAABADABAEbj0QATgxATgzQAbg3gFg5AEmjbQAEgJgPgQAARmlQAEgFAFgCQAOgEAHgCIAAAAQAJgDATgEQADgBAFgBQAigFAIgCQABAAAUgDQACAAACAAQACgDADABAlrEUQAJAYA0APQASAFASADAhkAkQAFgEAEgGQAQgYAXAAQAPAAAHAGQAEAEAJARQABAAAAAAQABACABACQAOgQAJgGQAKgGAOAAQAUAAANAoQAKAeAAAWQAAAGgCAOIgBABAA1CfQgBAAAAABQgLAEAAAEQAAAJAEAPQAEAPAAAIQAAABgLAKQgCACgCABQgGAGgJAIQgeAdgJADQgNADgPAFQgKACgMAEQgcAJgdgDQgdgDgegQQgfgQgQgeQAUAwAHAKQAOATAUAIQADABADABAi1AaQAYAYAVAAQAUAAAOgMAisE7QAhgMADgBAjGHCQAKAEACAAQADAAAMgDQAMgDAAAAQACAAADAAQABAAABABQADAAADABQAJADAFAAIA1gJQAWAAAGAAQAGABAJgBQAJgBAXgEQAVgEADASQADATgBgBIhJAhQgBgRgFACQgDADACgBQgEACABACAgvkIIFKAU");
	this.shape_15.setTransform(-15.6,55.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.5,1,1).p("ADIB1QBDhKA2hTQAKgPAIgOQAMgVAKgTQAKgTAOgjQAMgfAFgSQAAgCABgDQAEgSgCglQADg7ABgxQAAgEAAgDQAAgBAAAAQAAgIAAgIIgBghQAAgKgBgHQgBgLgCgCQgHgFgZgGQgGgBgGgBQgNgDgGAAQgEAAgDABQgCACgDABQABgIABgIQAAAAAAgBQAAgBAAgBQAEgcAFgiIgBAAIigASQAEAZAFASQABAGABAHQAAAFABAHQAAABAAABQAAADAAAGQgBAFgBAGQgBAFgBAGAEMmsQADgEADgEQAbgeAOggQAAgBABgCQAIgTAPgoAC8nzQACAHACAGQADAFACAGQAAABABAAQAAACABACQABAAAAABQAIAPALAPACsmyQAFACADACQAGADAFAFQAFAFAIAKAEMmsQAEgDAFgCQAagOARgGADVmSIAGADQAGgEAFgDQABAAAAAAQAUgNARgJADIB1QADAQAHAdQAFAXADARQACALACAIQgFgEgFAAIgBAAQgBABgCACQAAAAgBABADDBjQAAAAAFASADxEOQAAAIgCAGQgCAGgEAAQgDAAgDgGQgCgGAAgIQAAgIACgGQADgFADAAQAEAAACAFQACAGAAAIgAEAEuQACgGAAgJQAAgNgLgUQgBgBAAgBQgCgDgDgEQgLgSgIgGADODdQAAABAAAAQACAAgBgBQAAAAgBAAIAAABQgHAdABACQABABAAAOQAAANAJAQQAEAGAEAEQAJAJANAAQAMAAAEgOADQDcQgCAAAAABAC1DVQAIAEAFABQACABAEABQADABADAAABsEOQAGABAFABQABAAABAAQAGAAAGAAQABAAABAAQAOAAALgBQANgDAHgFQAQgKAKggACmH3QARgBARgFQAbgIAQgFQAbgJAAhGQAAgZgFgiQgEgYgFgUADgHCQhWgTAAgyQAAgMAKgHQAIgGAKAAQAHAAAVAJQAHgOAEgFQAFgJAMAAQAOAAAHAOQAFALAAAMQAAASgKAWQgLAZgDALgAA7mpQADAAACgBQAcgHAYgFIAEgBQAOgDAKgCQADgBADgBQABAAABAAQATgEASgCAA5moQABAAABgBQgCABgCABQgKAEgHAIQgDAEgEARQgBAFgBAFQgBACAAACAAdl6QAAAAAAAAQgBABAAABQgEANgPAhQgQAkgRAyQgOA5gNAjQgiBbAAA5QgUAOgnAaQgHAFgHAFQgcAUgRAPQgVATgfAhQghAigUBDQgQAXgJAVQgEAJgDAJQgDAIgCAKQgLgEgbAKQgLAEgOAHQgBAKAFAYIAMAxAk+FWQgDgCgEgCQgJgGgDAAQgIAAgGALIAAAAQgIgDgUgIAlfFXQgBACgDALQgBAFgBAIQAAAHABAKQABASABAKQAAABABABIAAAAQABAKABAJQACANADAHQABADACACQAHAIAUABIAAgHQARADAQABQABAAABAAQARABAQgCQAFAGAFAEQADADAEAHQANgHAlgMQAAgBgBgFQACABABAAQAOAEAKgDQACgEACgFQACgGADgGQAEAIAOAAQASAAAagFQADAAACgBQAAAAABAAQAXgEAOgCIgDg1IgBgUIgDglIgCgKQAMgKAOgCQAPgEAOAGIABAFQAHgBAIgBQAFgBAFgBQgHAQAAAEQAAADACAEQAGAIAWAIQACAAADABQABABAAAAQAIACAGACQASAEALAAQASAAANgEQADgCADgBQATgKAAgVQAAgVgXgQQgMgIgQgIQgHgEgJgFQgDgBgDgBQgEgCgEgCQAEgEADgEQADgEACgEQABAAAAAAQABgCACgCQADgEADgDQAHACAEAAQARAAAOgFQABAAABAAQAQgFAMgLQADgDADgCIAAgBIAAAAQADgDACgDQgEgIgNgnQgCgBgBgBAl4FvQAAAFgCADQgBAEgDAAQgCAAgCgEQgCgDAAgFQAAgFACgEQACgDACAAQADAAABADQACAEAAAFgAmIGfIAGAaQAMAGAQAFQAGACAGABAlyGnQAAAEgCACQgCADgCAAQgDAAgCgDQgCgCAAgEQAAgDACgDQABgBAAAAQACgCACAAQACAAACACQAAAAAAABQACACAAACQAAABAAABgAj8FmQABgDAAgEQABgEAGAAQAVAAAbAIQgNAKgFABQgJAEgCAEIAEAqIACAZQAKAHAMAGQAIAEAHACAjqGgQgBgBAAgBQgBgQgBgMQgCgMgBgIQgBAAgBAAQgEgBgDgBQgDgCAAgEIgdgDQgCAAgCAAQgQgCgNgCQgEgBgDAAAk8HOIAAgDQgDgKgCgjQAAgDgBgDQgCglACgRQABgCAAgCQABgEACgEAk6FfQAAgFgEgEAkWF+QAAAEgDADQgDADgDAAQgEAAgDgDQgCgDAAgEQAAgFACgDQADgDAEAAQADAAADADQADADAAAFgAkPGzQAAAFgDAEQgDADgEAAQgEAAgDgDQgDgEAAgFQAAgFADgDQADgEAEAAQAEAAADAEQADADAAAFgAjqGhQABAOABAMQABAMABAIQABAFAAAEAlZE6QgEAOgCAPAAFhFQAJAaAAAoQAAADgIAxAgLBYQAAAFgCAHIADATQAAAIgIAIQgEAEgLAGABXCfQADgEAEgDQAGgDAGgDIABAAQAPgGAIgBQAHgBAJABQAHAAAKAJABXCfQADAGAFACQAAAAACAAQADAAAGAAQAIAAALgCQAEAAAEgBQADgBADgBQAUgGAEgIABXCfQgCACgCADQABAGAAAGQACAcAAAUQAHACAFABQAAgBAAgHQAAgHAAgKQgBgNAIgGQADAGAAAIQAAACAAACQAAAFAAAGACNDcQgDgGgCgIQgCgJgBgMQAAAAAAgBQAAgBAAgBIgBAAIgDgBIgDAVACeDDQgGgKgCgDQgBgDACgIQAFgBACAAQACAAAFALQAGALACAHAhVgEIAAAAQAAAIACAPQABAEAFAhQgBABgBAAAiYFeQAAgDABgCQAEAAAFgBQAdgBAZgFQARgDAPgFQAEgBAEgCAiYFeQAAABAAABQgBAHAAAHQAAAEAAAFQABAFAAAFQAAATACAJQAAABAAAAQACAJABAPQAAABABABQAAABAAAAAiYFeQgNgIgGgDAiZF3QAAgBgBAAQgWgNgFAGIgRAOIAEAZIADAYQAIAHAMAEQAOAFALgGAivFTIgQAMQgBABAAAAQgCABgCACAhIFrQAAAFgEADQgDAEgFAAQgFAAgEgEQgDgDAAgFQAAgFADgDQAEgDAFAAQAFAAADADQAEADAAAFgAhGGiQAAAEgEADQgDADgFAAQgFAAgDgDQgDgDAAgEQAAgEADgDQADgDAFAAQAFAAADADQAEADAAAEgAgLHDQgEABgDAAQgLACgLgCIgBgPABVD3QAEACADABQAOAFAQAAQATAAAPgGQADgBACgBQAUgIATgTACUDrQAKgEAIgGQAJgHAGgFABiDjQABABABAAABeDrQASAFAIAAACCE/QAAAJgGAGQgHAGgJAAQgEAAgEgCQgEgBgDgDQgHgGAAgJQAAgIAHgGQAGgGAJAAQAJAAAHAGQAGAGAAAIgABLD+QgBgBAAAAQgBAAgCgBIgGgBQgBAAgDADQgGAGgOAbQgDAGgCAGQgDAFgCAEABLD+QgDAHgQAbQgEAJgEAHQgJATAAAFQAAACADADQADAEAHADQAGAEAFABQAEACADAAAA3GNQAAAEgDADQgDADgFAAQgFAAgEgDQgDgDAAgEQAAgEADgDQAEgDAFAAQAFAAADADQADADAAAEgAA2FfQgCACgCADQgCAEAAAGQAAAJAGANIAAAAQAFALAJANIABABQAJAPAMAOQAEAFAUAdQAGAIAGAGQABAAAAABQAPANAOAAQAFAAAFgBAAPGrIABAKQgOAKgNAEAAPGrQAPgDAQgFQANgDAKgDAgYExQAIAKAAALIACAxIADBMAAGE4IAFA8IAEA3ABKFlQgBAYARAXQAAAAAAABQAKANAUAYABOD/QgBgBgCAAAgNBkQgDANgJARACDHQQAWAYANAPAhCIjQAkgUALgEQAKgEAFgCAh1IfQAAABAAABQABAAABABQgBgCgBgBQgBgBgBgBQgMgNAAgKQgDgQADgRAhkIwQgDgDgCgCQgFgEgFgFAhyIlQAAABABABQAFAHAIACQAEABAEAAQAEAAALgGQACgBACgBQAEgDADgDQANgKAPgXAhyIlQAEADAFADAh1IhQABACACACAhNIrQAGgFAFgDAjVHyQAmAQAQAIQAHADAKAGQAHADAJAFQAEADAFADAivHVQAQAiAUAXQAAAAABABQAGAHAGAFQAGAGAGAEAj4HRQAJAAAJgCACsDRQAFACAEAC");
	this.shape_16.setTransform(-17.8911,53.5625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3B5669").s().p("AgoAnIgCgBIABgIIAFAAQAaAAADgMIAEgBIAEAOIgEgOIgDgUIAAgBIAAgCIgBAAIABgSIAGgCQATgGAEgIIACACIARAuIgEAGIgBAAIAAABIgFAFQgNALgQAFIgBAAQgNAFgSAAIgLgCgAAZgHIAHARIgHgRQgFgLgCAAIgHABIgCAIIABADIAIAMIgIgMIgBgDIACgIIAHgBQACAAAFALg");
	this.shape_17.setTransform(-3.85,72.4625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#505B3D").s().p("AjXBfQgCgEAAgFQAAgFACgDQADgEAFAAQADAAAEAEQADADAAAFQAAAFgDAEQgEADgDAAQgFAAgDgDgAkzBQQgCgCAAgEQAAgDACgDIABgBIAHAAIABABIACAEIAAACQAAAEgCACQgCADgDAAQgCAAgCgDgAgRBMQgCgDAAgEQAAgEACgDQAEgDAFAAQAFAAADADQADADgBAEQABAEgDADQgDADgFAAQgFAAgEgDgABtA3QgDgDAAgEQAAgEADgDQAEgDAEAAQAFAAAEADQADADAAAEQAAAEgDADQgEADgFAAQgEAAgEgDgAjcAoQgCgDgBgEQABgFACgDQADgDADAAQAEAAADADQACADAAAFQAAAEgCADQgDADgEAAQgDAAgDgDgAk5AaQgBgDAAgFQAAgFABgEQACgDADAAQACAAACADQACAEAAAFQAAAFgCADQgCAEgCAAQgDAAgCgEgAgTAWQgEgDAAgFQAAgFAEgDQADgDAGAAQAFAAADADQACADAAAFQAAAFgCADQgDAEgFAAQgGAAgDgEgACugKQgEgBgEgDQgGgGAAgJQAAgIAGgGQAHgGAJAAQAJAAAHAGQAGAGAAAIQAAAJgGAGQgHAGgJAAQgEAAgEgCgAEthAQgCgGAAgIQAAgIACgGQACgFAEAAQAEAAACAFQACAGAAAIQAAAIgCAGQgCAGgEAAQgEAAgCgGg");
	this.shape_18.setTransform(-25.25,88.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF7E7E").s().p("Ag2gLQAAgMAKgHQAIgGAKAAQAHAAAUAIIALgTQAFgIAMAAQAOAAAHAOQAFAKAAANQAAASgKAVQgLAZgCAKQhWgTAAgwg");
	this.shape_19.setTransform(1.4,92.9125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A4B9C9").s().p("AikCAIgKgKIASgBIACAIIgCgIIgCgVIgCgaIANgBIAKgDQAIgEAJgCIADAXQAJAHALAFQAOAEALgGIAAABIgFANIgEAJQgKACgNgDIgEgBIgOgGQgNgGgJgHIgDgaIADAaQAJAHANAGIAOAGIABAFQglAMgNAHIgHgKgAkNByIgDgGQgDgHgCgNIgCgTIAAAAIASgCQAFABAJAAQACAiADAKIAAADIAAAHQgUgBgHgHgAAhBqIgBgQIgDg1IAegJIADgBQALgEAMACIAFA3IABAKQgPAKgOAEIgDhMIADBMIgHACIgLAAIgLAAgAA+BogADnhhIAFgCQATgIATgTQgTATgTAIIgGABIgCgJQgEAAgMAFQgNADgDAAQgGAAgZgIQAZAIAGAAQADAAANgDQAMgFAEAAIACAJIABABQgPAGgTAAQgRAAgNgFIgIgDIAGgIIAAAAIADgEIAGgHIALACQARAAAPgEIABgBQAQgFAMgLIAJAEIgOAMQgJAGgKAEQAKgEAJgGIAOgMIANAGIAGABIAGABQgKAggPALQgIAEgNADIgDgWgADDhqQgIAAgTgFQATAFAIAAgADnhhIAAAAg");
	this.shape_20.setTransform(-25.325,88.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D0EBFF").s().p("AiIBVIAAgCIgDgdIgDgUIgBAAIgHgCQgEgCABgEIABgGQAAgEAGAAQAVAAAcAHQgOAKgEACQgJADgDAEIAEAqIgNABIAAAAgAh/AqQADgEAJgDQAEgCAOgKIADgDIABAAIAQgNQgBgBAAAAQAAgBABAAQAAAAABABQABAAACABIATALIAAACIAAAOIAAAJIgCgBQgVgMgGAGIgQAOIADAZQgJACgIAFIgKACgAj/BSIgDgbIAAgSIABgNIAFgNQAFgKAJAAQADAAAIAFIAHAFIgDAHIgBAEQgCARADAlIAAAHQgJAAgFgBIgSACIAAgCgAA0AgIgCgjIgDgKQANgKANgDQAPgDAQAGIAAAEIAFA7QgMgCgLAEIgDABIgCgvQAAgMgIgKQAIAKAAAMIACAvIgeAKgADog6IgMgBIgCAAIgLgCIgRgIIgGgDIgIgEIAHgIIAIADQANAFARAAQASAAAQgFIADAVQgLACgOAAIgBAAgAD/hRIgBgBIAGgBIgFACIAAAAg");
	this.shape_21.setTransform(-27.7022,86.7375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6A8293").s().p("AgkApQAAgUgCgbIgBgMIAEgFQADAGAFACIACAAIAJAAQAIAAAKgCIAIgBIgIABQgKACgIAAIgJAAIgCAAQgFgCgDgGIAHgHQAGgDAGgDIABAAQAPgGAHgBQAHgBAJABQAHAAAKAJQgEAIgUAGIgGACIgBASIABAAIAAABIAAABIADAVIgEABIAAgMIAAgMIAAAAIgDgBIgDAUIADgUIADABIAAAAIAAAMIAAAMQgDAMgZAAIgFAAIAAgRIAAgCQAAgMAHgFQADAGAAAIIAAAEIAAALIAAgLIAAgEQAAgIgDgGQgHAFAAAMIAAACIAAARIgHgCIAHACIAAAIIgMgDgAgYAkIAAAAgAAJAAg");
	this.shape_22.setTransform(-5.5875,71.8662);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#556631").s().p("AC9CAIgBgBIgMgNIgYgiQgMgPgKgPIAAAAQgJgOgFgKIAAAAQgHgOAAgJQAAgFADgEIADgFIAFACIACAAIANAEQASAFAMAAQASAAAMgFIgCgGQgFADgKAAQgHAAgNgGIgJgEQgYgLgIgCIgEgDQAJgJAMgTQAOgYAFgOIARAIIALACIACAAIAMABIABAAQAOAAALgCQANgCAIgFQAPgKAKggIABAAQgIAeABABQABABAAAOQABAOAJAQQADAFAEAEQAJAKANAAQANAAADgOQAFAUAEAYQAGAhAAAZQAABGgcAIIgrAOQgRAFgQABIgjgoIAjAoIgLAAQgOAAgOgNgADRAAQgKAHAAAMQAAAxBXATQACgKALgZQAKgWAAgSQAAgMgFgKQgHgOgOAAQgLAAgGAIIgLASQgUgHgIAAQgJAAgJAFgACXApIABABIAeAmIgegmIgBgBQgQgVAAgXIAAgCIAAACQAAAXAQAVgADdgmQgBAVgSAJIgHADIAHgDQASgJABgVIAAgBQgBgUgXgQQgLgJgQgIQAQAIALAJQAXAQABAUIAAABgACag5QgGAGAAAJQAAAIAGAGQAEADADACQAEABAFAAQAJAAAGgGQAHgGAAgIQAAgJgHgGQgGgGgJAAQgJAAgHAGgAjcBnIgCAAQgQgBgRgDIAAgDQgDgJgCgjIAAgHQgCgkABgRQALAVgBAUIAAAfIABABIABACQAGgHAUgCIAEgBIgBAEQgEAAgDADQgDAEAAAFQAAAFADADQADAEAEAAQAEAAADgEQADgDAAgFQAAgFgDgEIAAgHIAYgDIABgDQADgWgEgWIACgGIAHACIABAAIADAVIADAcIAAACIAAAAIACAaIACAVIgSACIgSAAIgPAAgAkoBZQgQgFgNgFIgGgbIANABIgBABQgCADAAAEQAAADACADQACADACAAQADAAACgDQACgDAAgDIAAgCIgCgFIgBgBIAHgBIAFAAIAHgBIAAACIgBAAIAAAAIAAAAIAAAAIgGgBIAGABIAAAAIAAAAIAAAAIABAAIAAAAIACATQACANADAHIgLgDgAhVBOIAAAAIgBgCQgBgPgCgKIAAAAQgBgKgBgSIAAgLIAAgJIAAgNQAMATABAOQABAJgCARQAFgCA0gKIACAAQAegGAAgdIAFgBIABAVIADA0IgkAHIgBAAIgFABQgaAEgSAAQgNAAgFgIgAgdAwQgDADAAAEQAAAEADADQAEADAFAAQAFAAADgDQADgDAAgEQAAgEgDgDQgDgDgFAAQgFAAgEADgABIAJIgFg7IAQgCIAKgCQgIAQAAAEQAAAEADADQAGAJAVAHIgDAFQgDAEAAAFQAAAJAHAOIAAAAQAFAKAJAOIAAAAIgWAHIgfAHgABhAbQgDADAAAEQAAAEADADQADADAFAAQAFAAADgDQAEgDAAgEQAAgEgEgDQgDgDgFAAQgFAAgDADgAkkA1gAB6gJIgCAAIgFgCQgVgHgGgJIAEgCIAIABIAEAAQADADAGAEIALAFIAIACIADAJIgNgEgABzgLIAAAAgAk9gdIgEgNQAbgKAKAEQgDAOgCAPIgcgKg");
	this.shape_23.setTransform(-24.025,89.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#91A36D").s().p("AjsBoIgBgBIAAgeQABgVgKgVIAAgFIAIACIAcADIAEABIAeADQgBADAEACIgCAGQAEAWgDAWIgBADIgYADIgGABIgEAAQgUACgGAHIgBgCgAjaAzQgDADAAAEQAAAFADADQADADADAAQAEAAACgDQADgDAAgFQAAgEgDgDQgCgDgEAAQgDAAgDADgAjOBkIABgDIAGgBIAAAHQgDgDgEAAgAjNBhIAAAAgAktBbQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABIgNgCIAAgBIgLgwQgGgYACgKIAZgKIAEALIAcAKIAAAAIgEAOIgCAMIAAASIADAbIgHABIgFAAIgHACQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAgAk3AjQgBAEAAAFQAAAEABAEQACADADAAQACAAACgDQACgEAAgEQAAgFgCgEQgCgEgCAAQgDAAgCAEgAhAA/QgBgPgMgUIABgBIAAgGIAJAAQAegBAZgFQAQgDAPgFQAFASAAAQQAAAdgeAGIgCAAQg0AKgFADQACgSgBgIgAgRAfQgEAEAAAFQAAAFAEADQADAEAFAAQAFAAAEgEQACgDAAgFQAAgFgCgEQgEgDgFAAQgFAAgDADgAAYApQAAgQgFgSIAIgDIACAlIgFAAIAAAAgACVAhIgDgJIgIgCIgLgFQgGgEgDgDQAEgBAFgFIAEADQAIACAYALIAJAFQAOAFAGAAQAKABAFgEIACAHQgMAEgSAAQgMAAgSgFgABjAEQAAgDAIgPIAEgKIAGgLQANgbAHgHIADgCIAHABIACABIACAAIgTAjIgIAPQgKATAAAEQAAADAEADIgEAAIgIgBIgEACQgDgDAAgEgAB2AKQgEgDAAgDQAAgEAKgTIAIgPIATgjIAKAFIAGADQgFAOgOAYQgLATgKAIQgFAFgEABIAAAAgAATAHIAAAAgAElgQQgEgDgDgGQgJgQAAgOQgBgNgBgCQgBgBAIgeQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBIAAAAIADgDIACAAQAEAAAFAEQAJAGALARIAEAIIABABQALAVAAANQAAAJgBAGQgEAOgNAAQgNAAgJgKgAEvhCQgCAGAAAIQAAAIACAGQACAFAEAAQADAAACgFQADgGAAgIQAAgIgDgGQgCgFgDAAQgEAAgCAFgACXhFIAAAAg");
	this.shape_24.setTransform(-25.4411,85.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFE0C9").s().p("AhpILIgIgCIgFgFIgKgJIgCgCIgCgCQgMgOAAgKIgBgPQAAgJABgJQgBAJAAAJIABAPQAAAKAMAOIACACIAAABIgJgFIgMgNIgBgBQgUgWgQgiQAJAEADAAIAPgDIAMgDIAFAAIACABIAGABQAJADAFAAIA1gJIAcAAIAPAAIAfgFQAWgEADASIACASIhJAhQgBgRgFACIgBACQgEACABACQgPAWgNALIgLAHQgLAHgEAAIAAAAgAkBE1IABgEQgSgEgSgFQg0gPgJgYIAHgRQAJgVAQgXQAUhEAhghQAfghAVgTQARgQAcgUQAXAYAWAAQAUAAAOgMIACgCQAFgEAEgGQAQgXAXAAQAPAAAHAGQAEAEAJAQIABAAIACAEQANgPAKgGQAKgGANAAQAVAAANAnQAKAeAAAWQAAAGgDAOIAAABIgCAPIgHAGIgEAFIABAMIgIADIgCABQgKAEAAAEQAAAJAEAPQADAPAAAIIgLALIgDADIgPAOQgeAdgKADIgbAHIgWAHQgdAJgcgDQgdgDgegQQgfgQgQgeQATAwAIAKQAOATAUAIIAGACIABAIIgJAAIgBAGIgTgMQgCgBgBAAQgBAAAAAAQgBAAAAAAQAAAAABABIgQANIgBABIgEACQgbgHgVAAgAgfBgQgEAFgLAGQALgGAEgFQAIgHAAgJIgDgSIACgLIAAgCIAAACIgCALIADASQAAAJgIAHgAgmBcQAJgSADgMQgDAMgJASgAglkaQARgzARgkQAOghAEgMIABgCQADgMAFgIIADgEQAEgFAFgCIAUgGIABAAIAbgHIAIgCIArgHIAVgDIADAAIAIADQAGADAFAFIANAQIAEAEIADACIACgBIAGACIALgHIABAAIAlgWIAJgFQAagOARgGIAPgBQAMAAATASQAFA5gbA3IgnBkgAC6nMIgQgLIgBgBIgEgCQAFgCAEgEIACgLIACgLIAAgJIAAgCIAGgBIAEAAIARAMQAIAFAHAAQAMAAANgEIAKgEQARgIAGgJQgNAVgPASQgWAcgNAHIgBAAIgGACQgDAAgTgOgAC5oBIABAEIABABQAIAQALAOQgLgOgIgQIgBgBIgBgEIgBgBIABABg");
	this.shape_25.setTransform(-16.5922,57.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#ECB186").s().p("Ag/IKQAAgDADgCIACgBQAEgCABARIBJgiIgCgRQgDgSgVADIgfAGIgQAAIgbAAIg2AIQgEAAgKgCIgFgBIgDgBIgEgBIgNAEIgPACQgCAAgJgDQAQAiATAWIABABIgEAEIgRgJIg1gYIgDgDIgSgFQgegIgYgBQgbgBgRgFQgRgGgFAAQgGAAABgOIABgDIALADIADAGQAHAHAUABIAAgHQARADAQABIACAAQARABAQgCIAKAKIAHAKQANgHAlgMIgBgFIAEABQANADAKgCIAEgJIAFgNQAFAIANAAQASAAAagEIAGgBIAAAAIAlgHIABAQQALABALgBIAHgCQAOgEAPgKIgBgKIAegIIAWgGQAKAPAMAPIAYAhIAMAOIABABQgDAIgVgIQgVgHhLAeIgLAAIAAADIgPAGQgLAEgkAUQAMgKAPgWgAjEHBQgLgFgJgHIgDgXIgDgZIAQgPQAGgFAVAMIACABIAAAKQABATABAJIAAABQACAKABAOIABACQgGADgHAAQgGAAgGgBgAkyFqIgEAAIgcgEQgBgFgEgDIgHgFQgIgGgDAAQgJAAgFALIAAAAQACgPAEgOIAFgSQAIAYA0APQATAFARADIgBAEQgGAAAAAFIgBAGgAinFYIgGgCIAkgNIgkANQgUgJgPgSQgHgKgUgxQAQAfAfAQQAfAQAcACQAdADAdgIIAWgHIAbgIQAJgDAegcIAPgOIAEgDIALgLQAAgIgEgPQgEgPAAgJQAAgEALgFIABAAIAIgDQADAdAAATIALAEIACAAIgGAHIgDAEIAAAAIgGAIIgGAIIgDgBIgCgBIgCgBIgHgBIgDADQgHAGgNAbIgGAMIgEAJIgJACIgQACIAAgEQgQgHgPAEQgNACgNALIADAKIgIACQgPAFgRADQgaAFgdACgAC1DkIgFgBIgHgBIgMgGIgJgEIAFgFIAAgBIAAAAIAFgGIgRgvIgCgCQgLgIgHgBQgIgBgIACQgHAAgQAGIAAAAQgHADgFADIACgOIAAgBQACgOAAgGQAAgXgKgdQgNgogUgBQgOAAgKAHQgJAGgOAQIgCgEIAIg1QAAgmgIgaQAIAaAAAmIgIA1IAAAAQgJgRgFgEQgGgGgPAAQgYAAgQAYQgEAGgEAEIgGglQgDgPAAgJIAAAAIAAAAQAAAJADAPIAGAlIgCACQgOAMgUgBQgWABgXgYIAOgKIA6gpQAAg4AihaQAOgkAOg5IFJAUIAmhlQAbg2gFg5IADADIAAAAIAAAAIAAAAIABAAIAAAAIAAAAIAAABIAAAAIAAAAQABgBgEgJIAAAAIgBgBIAAgBIgBgCIABABIAAAAIABAAIAAABIAAAAIABAAIABABIAAAAQAHAFAFAAIABABIAAAAQADgBABgCIABgCIgBACQgBACgDABIAAAAIgBgBQgFAAgHgFIAAAAIgBgBIgBAAIAAAAIAAgBIgBAAIAAAAIgBgBIABAKQgTgSgMAAIgOABQgSAGgaAOIgJAFIAHgIQAageAOggIABgCIAYg8IAAAAIgIA+IAAACIAAABIgCAQIAFgCQADgCADAAQAGAAAOADIALACQAaAGAGAGQADABABALIAAASIABAgIAAAQIAAABIAAAHQAAAygDA6QABAlgEASIgBAFQgEASgNAfQgOAjgKATIgVAoIgTAdQg2BThDBLIAKAsIAJAoIADATQgFgEgEABIgCAAIgDACQAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAAAAAIAAABIgBgBgACvB9IgEgTIAEATgAEkjAIABgFQAAgIgMgMQAMAMAAAIIgBAFgAAElzIAAgCIADgKIAFgHQgFAHgDAMIAAAAgAAFl9IACgCIgDAKIABgIgAAHl/IAAAAgAC9mKIgCABIgDgCIgFgFIgNgPQgFgFgFgDIgIgEIADgBIABAAIAAAAIAAAAIABAAIAFACIABAAIAPAMQATAOADAAIAHgCIABAAQANgHAWgcQAPgSANgVQgGAJgSAIIgKADQgNAFgLAAQgIAAgHgFIgRgMIgFAAIgEgLIgEgNQgFgRgEgaICggSIgYA8IgBACQgOAggaAeIgHAIIglAWIAAAAIgLAHgAAemgIABgCIACABIABgBIAGgBIAfgHIAUgFIAEgBIAZgFIADgBIADAAIACgBIAkgGIgCALQgDAEgGACIgBAAIAAAAIAAAAIgBAAIgDABIgEABIgVADIgqAHIgIACIgcAHIAAAAIgUAGQgGABgEAGQgLgCAagUgAAemgIAEgCIgBABIABgBIgEACgAAimiIAGgBIgGABgAFZmpIAAAAIAAgBIAAAAIAAAAIgBAAIAAAAIAAAAIAAAAIgDgDIgBgKIABACIAAABIABABIAAAAQAEAJgBABIAAAAIAAAAgAFUm3IAAAAgAFUm3IAAAAgAE7opIAAAAg");
	this.shape_26.setTransform(-15.4271,52.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.8,-3.5,83.8,114.2);


(lib.Symbol32copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACTBmIAAg6IACAAQANAAAGgGQAGgFABgOQABgVADgKQABgEAEgGIAAB5QgMADgSAAgAgBBQQgWgWAAghQAAgeAWgXQAWgWAfAAQAkAAAUAVQAVAVAAAjIAABHIg3AAIAAhEQAAgLgGgHQgFgHgKAAQgJAAgGAGQgGAHAAAIQAAAJAGAGQAFAGAJAAQAHAAAGgEIAAA5IgMABQghAAgVgVgAiKBiIAAiNIgtAAIAAg6ICWAAIAAA6IgtAAIAACNg");
	this.shape.setTransform(12.725,31.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#7B0607").ss(0.5,1,1).p("AColCQgLAGgLAGQgBgBgCgBQgXgRgYgKQgCgBgBAAQgFgCgFgCAgflYQgFACgFADQgSALgQASQgsAxg0AXIgBAAAiNlYQgPAOgQANAA/EmQAVgFAcgLQAVgIARgIQAKAFANAGABRFZQAMgEANgFQAZgKATgIQAKAFANAF");
	this.shape_1.setTransform(17.25,34.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D7D7D7").s().p("AgtAOIAZgJIArgSIAWALIAAAQg");
	this.shape_2.setTransform(29.95,67.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFBE9").s().p("AgPgNIAeAAQgPAOgPANg");
	this.shape_3.setTransform(1.55,1.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCF7C9").s().p("AA+FZIAAg0QAWgFAcgKIAmgQIAWALIAAA3IgWgLIgsATIgZAJgAisk9QAQgNAPgOIBuAAIgJAFQgTALgQASQgsAxg0AXIgBAAgACPk4QgXgRgYgKIgEgBIgKgEIBWAAIAAAWIgWAMIgDgCg");
	this.shape_4.setTransform(17.25,34.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC2D2E").s().p("AA+BgIjqAAIAAk0IABAAQA0gXAsgxQAQgSATgLIAJgFIBxAAIAKAEIAEABQAYAKAXARIADACIAWgMIAAGIIAEAAIAADLIgWgLIgmAPQgcALgWAFg");
	this.shape_5.setTransform(17.25,31.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol32copy2, new cjs.Rectangle(-5.7,-1,41.2,71), null);


(lib.Symbol32copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAuCEIAAgwQALAEAIABQAbAAAIgfQgPAJgNAAQgVAAgNgPQgNgQAAgXIAAhbIA3AAIAABOQAAANAKAAQALAAAAgNIAAhOIA3AAIAACCQAAAlgVAVQgYAbgjAAQgPAAgPgFgAiwArQgegfAAgrQAAgsAfgfQAfgfAtABQAsAAAdAeQAVAUAHAlIg+AFQgLgigeAAQgTABgMANQgNANAAAUQAAAUAMALQANANASAAQATABALgMQALgKADgVIA9ACQgFAugcAbQgbAbgsgBQgtAAgegdgAC6BCIAAhRQAAgcATgTIACgCIAACCg");
	this.shape.setTransform(13.625,34.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#7B0607").ss(0.5,1,1).p("AColCQgLAGgLAGQgBgBgCgBQgXgRgYgKQgCgBgBAAQgFgCgFgCAgflYQgFACgFADQgSALgQASQgsAxg0AXIgBAAAiNlYQgPAOgQANAA/EmQAVgFAcgLQAVgIARgIQAKAFANAGABRFZQAMgEANgFQAZgKATgIQAKAFANAF");
	this.shape_1.setTransform(17.25,34.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D7D7D7").s().p("AgtAOIAZgJIArgSIAWALIAAAQg");
	this.shape_2.setTransform(29.95,67.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFBE9").s().p("AgPgNIAeAAQgPAOgPANg");
	this.shape_3.setTransform(1.55,1.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCF7C9").s().p("AA+FZIAAg0QAWgFAcgKIAmgQIAWALIAAA3IgWgLIgsATIgZAJgAisk9QAQgNAPgOIBuAAIgJAFQgTALgQASQgsAxg0AXIgBAAgACPk4QgXgRgYgKIgEgBIgKgEIBWAAIAAAWIgWAMIgDgCg");
	this.shape_4.setTransform(17.25,34.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC2D2E").s().p("AA+BgIjqAAIAAk0IABAAQA0gXAsgxQAQgSATgLIAJgFIBxAAIAKAEIAEABQAYAKAXARIADACIAWgMIAAGIIAEAAIAADLIgWgLIgmAPQgcALgWAFg");
	this.shape_5.setTransform(17.25,31.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol32copy, new cjs.Rectangle(-7,-1,42.5,71), null);


(lib.Symbol32 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7B0607").ss(0.5,1,1).p("AColCQgLAGgLAGQgBgBgCgBQgXgRgYgKQgCgBgBAAQgFgCgFgCAgflYQgFACgFADQgSALgQASQgsAxg0AXIgBAAAiNlYQgPAOgQANAA/EmQAVgFAcgLQAVgIARgIQAKAFANAGABRFZQAMgEANgFQAZgKATgIQAKAFANAF");
	this.shape.setTransform(17.25,34.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D7D7D7").s().p("AgtAOIAZgJIArgSIAWALIAAAQg");
	this.shape_1.setTransform(29.95,67.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AADBlIgLgFQgKgGgHgJQgPgRAAggIAAhMIA2AAIAABSQAAAMAKAAQALAAAAgMIAAhSIA2AAIAABQQAAAZgOARIgEAHQgFAEgFAEIgFADIgMAFgAiUBlIgCAAIAAg6QAFACADAAQAMAAAAgTIAAh+IA7AAIAACGQAAAfgRATQgGAHgHAFIgLAFgACHBQIgIgJIgBgCQgNgTAAgYQAAgYANgRIAJgMQAHgHAJgFIAACDQgIgFgIgHg");
	this.shape_2.setTransform(18.95,31.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFBE9").s().p("AgPgNIAeAAQgPAOgPANg");
	this.shape_3.setTransform(1.55,1.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCF7C9").s().p("AA+FZIAAg0QAWgFAcgKIAmgQIAWALIAAA3IgWgLIgsATIgZAJgAisk9QAQgNAPgOIBuAAIgJAFQgTALgQASQgsAxg0AXIgBAAgACPk4QgXgRgYgKIgEgBIgKgEIBWAAIAAAWIgWAMIgDgCg");
	this.shape_4.setTransform(17.25,34.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC2D2E").s().p("AA+BgIgBAAIAMgFIAFgDQAFgEAFgFIAEgGQAOgRAAgZIAAhQIg2AAIAABRQAAANgLAAQgKAAAAgNIAAhRIg2AAIAABMQAAAfAPASQAHAJAJAGIAMAFIhzAAIALgFQAHgFAGgHQARgUAAgeIAAiGIg7AAIAAB+QAAATgMAAQgDAAgFgCIAAA5IACABIgpAAIAAk0IABAAQA0gXAsgxQAQgSATgLIAJgFIBxAAIAKAEIAEABQAYAKAXARIADACIAWgMIAAD8QgJAFgHAHIgJAMQgNASAAAXQAAAYANASIABADIAIAJQAIAHAIAFIAAAJIAEAAIAADLIgWgLIgmAPQgcALgWAFg");
	this.shape_5.setTransform(17.25,31.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(-1,-1,36.5,71), null);


(lib.Symbol31 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7B0607").ss(0.5,1,1).p("ACqi0QgdAXggAOIg0APQgiABgWgLIAEANQAAAYgVAlQgjA5gIATQgPAkAKAZQAOAmAFATIgVAtQgGAPgCANQAAACAAADACqhkIgrAMQgcABgTgJIAEAKQAAAVgSAfQgeAvgHAQQgMAdAIAWQAMAgAEAQIgSAlQgHAWABAQQAAACAAADAh4jPIAAGfAipDQIAAmf");
	this.shape.setTransform(16.975,20.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC2D2E").s().p("AARDPIAAgEQgBgQAHgWIASgmQgEgPgMggQgIgWAMgdQAHgQAegvQASgfAAgVIgEgKQATAJAcgBIArgMIAAEzgAipDPIAAmeIAxAAIAAGeg");
	this.shape_1.setTransform(16.975,20.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFBE9").s().p("AiQDPIAAmeIEhAAIAAAcQgdAWggAOIgzAPQgiABgWgLIAEANQABAYgXAlQgjA5gIATQgPAkAKAZQAOAlAFATIgVAtQgFAQgCANIgBAEg");
	this.shape_2.setTransform(19.425,20.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCF7C9").s().p("Ah6DCIABgFQACgNAGgPIAUgtQgEgTgPglQgKgaAQgiQAHgUAjg6QAXgkAAgYIgFgOQAXAMAhgCIAzgOQAhgOAcgXIAABPIgqANQgdABgSgJIAEAKQAAAUgSAgQgdAvgHAQQgMAcAHAWQANAgAEAQIgSAmQgHAVAAAQIABAFg");
	this.shape_3.setTransform(21.7,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(-1,-1,36,43.5), null);


(lib.Symbol30 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0071A8").ss(0.5,1,1).p("AB4A+IghAXIARgyIgngfIAsABIATgyIAHAdIAQhPQgxgQgwgIQgtgHgsAAQAAAAgBAAQgqgBgpAGQgPACgQADAgjg6IAOAzIAyABIglAZIAVA1IgrggIguAgIASgyIgngdIArAAgAiWAFIAQABIgQALABsB/IAMhBIAPhO");
	this.shape.setTransform(15.075,23.4229);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#7B0607").ss(0.5,1,1).p("AAxjgIgUByAB+hWIAciKAg9h1IADhrAiijgIATBwAiuCJQAGABAHABQAQABAQACQBwAKBlgPQAvgIAsgMAiuC3QAHAAAHABQAEABAFAAQALABALACQAaACAZAAQAUAAARAAQAwAAAtgFQA6gGA0gPAh8DhQgDgBgCAAQgRgGgQgDQgCAAgCAAQgEgBgEAAACvCrQgGgEgHgDACvChQgGACgHAB");
	this.shape_1.setTransform(17.5,22.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCF7C9").s().p("Ah8AfIgFgCQgQgGgRgCIgEgBIgIAAIAAgfIAOACIAJABIAWACIAzADIAlAAQAwAAAtgFQA6gHA0gPIANAIIAAAmIjWAAIAAAPg");
	this.shape_2.setTransform(17.5,41.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#049EE9").s().p("AhpCAIgggDIgNgCIAAhvIAQgLIgQAAIAAh6IAfgFQApgFAqAAIABAAQAsAAAtAIQAwAIAxAQIgQBPIgHgeIgTAyIgsAAIAnAeIgRAyIAhgXIgMBCQg+AJhBAAQgqAAgsgEgAANBEIgVg2IAlgZIgygBIgOgzIgTAzIgrAAIAnAeIgSAyIAuggg");
	this.shape_3.setTransform(15.075,23.8821);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC2D2E").s().p("AiuDhIAAgLIAIAAIAEABQARADAQAFIAFACgAhOC+IgzgDIgWgCIgJgBIgOgBIAAguIANACIAgADQBwAJBkgOQAwgIAsgMIAAAsIgNADQg0AOg6AHQgtAGgwAAIglgBgAiujgIANAAIASBwIgfAFgAg7h1IgCAAIADhrIBrAAIgUByQgrgHgtAAg");
	this.shape_4.setTransform(17.5,22.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABbBuIgngfIArABIATgzIAIAdIgQBPIghAWgAgrBzIguAgIASgyIgogfIAsAAIATgzIANAzIAzABIgmAaIAWA2gAijBQIAQABIgQALgAAogsIAUhzIBoAAIgbCLQgxgQgwgIgAiXifIBoAAIgDBsQgpgBgpAFg");
	this.shape_5.setTransform(16.425,15.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFBE9").s().p("AAhC/IANgDIAAAKIgNgHgAghBiIAQhOIAPhOIAaiLIAWAAIAAFVQgtAMguAIg");
	this.shape_6.setTransform(30.425,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-1,-1,37,47), null);


(lib.Symbol29 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAdgzIgGAPIA1AkIg8gDIgVA3IgPg3Ig3gFIApgaIgFgR");
	this.shape.setTransform(10.55,5.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#D7D7D7").ss(0.5,1,1).p("AAehAIhHgrIAvBGAAsATIAIgBAApALIADAIAgDgbIgpAfIgqAeICCgPIASBZIAZhG");
	this.shape_1.setTransform(24.525,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0071A8").ss(0.5,1,1).p("AAWi1IA/AgIAiggACZi1IgNA7IBXAuIhZAMIgJBtIgYguIgWgtIhpAPIAkgjIAKgKIAagYIgBgEIgkhNAjiC2IAKgoIBVgHIg+goIAXhaIg4Ax");
	this.shape_2.setTransform(22.7,18.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#7B0607").ss(0.5,1,1).p("Ak4D7IEtAAIALAAQgGgDgFgGQgKgMAAgVQAAgWASgMQAPgLAaAAIAzAAQAwgQgQgvQAMACAKAAQAegDALglIgEgxQgBgaAJgPQALgUAXgBQAVgCANAKQAIAGAEAJIAAjiAEMD7IjjAAIgFAAQADgCACgCQAIgHAAgMQAAgMgFgIQgFgHgIgDQgDAAgEAAQgJAAgDAKQgCAKAFALQgLgBgCgFQgBgBAAgLQAAgUAhgFIAxgBQBAgEgJhBIAAgBQAEAAADABQA8gBAAg6IgDgxQADgfAUgCQAMAAACAAQAEACACAKQgLgEgKADQgLAEABAIQAAADABADQACAIAJAEQAIAFALgBQANgBAHgIQABgCACgCIAAAEgAE5j7IAAH3");
	this.shape_3.setTransform(31.325,25.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAOIApgfIglAig");
	this.shape_4.setTransform(22.075,13.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D7D7D7").s().p("AAsATIAIgBIgIABIgDgJIADAJIiCAPIAqgeIADADIBpgOIAXAsIgZBGgAAsATgAgphrIBHArIACADIgaAYg");
	this.shape_5.setTransform(24.525,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#049EE9").s().p("AjiA2IA4gxIgXBaIA+AnIhVAIIgKAngABpgBIgWgtIhqAPIAlgjIAKgKIAagYIgCgEIgjhNIAIAAIBAAgIAiggIAiAAIgOA6IBYAvIhZAMIgJBsg");
	this.shape_6.setTransform(22.7,18.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCF7C9").s().p("AhdCKIAAgDQAIgHAAgNQAAgLgFgIQgFgHgIgDIgGgBQgJAAgDALQgCAKAEALQgKgCgCgEQgBgBAAgMQAAgUAggFIAygBQA+gEgIhBIAGAAQA8AAAAg6IgDgxQADggAVgBQALgBACABQAEABACALQgLgEgJADQgLADAAAJIACAHQACAIAIAEQAIAFAMgBQAMgBAHgIIADAAIAADug");
	this.shape_7.setTransform(44.775,36.4167);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC2D2E").s().p("Ak4D8IAAgCIEtAAIALAAQgGgDgFgFQgKgMAAgVQAAgWASgMQAPgLAaAAIAzAAQAwgRgQguQAMADAKgBQAegDALglIgEgyQgBgYAJgRQALgSAXgCQAVgBANAJQAIAGAEAJIAAjiIAtAAIAAH3gAAfDHQAIACAFAHQAFAIAAAMQAAAMgIAHIgFADIAFAAIDjAAIAAjvIAAgEIgDAEQgHAIgNABQgLABgIgFQgJgEgCgIIgBgGQgBgIALgEQAKgDALAEQgCgKgEgBQgCgBgMAAQgUABgDAfIADAyQAAA6g8AAIgHAAIAAAAQAJBChAADIgxABQghAFAAAVQAAALABABQACAFALABQgFgLACgJQADgMAJAAIAHACgAjjjKIg3gGIAogaIgEgRIBFAAIgHAPIA1AkIg8gDIgWA4g");
	this.shape_8.setTransform(31.325,25.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFBE9").s().p("AkiD7IAAiLIAKgoIBWgHIg+goIAWhZIg4AxIAAjrIBCAAIAFARIgpAaIA3AFIAPA4IAWg4IA7ADIg0gkIAGgPIBqAAIAjBMIhIgqIAwBGIgKAKIgqAfIgpAfICCgPIASBYIAZhGIAYAvIAJhuIBYgMIhXguIANg6IDKAAIAADhQgEgIgIgGQgNgKgVABQgYACgKATQgJAQABAZIADAyQgKAkgeADQgKABgMgDQAQAvgwARIgzAAQgaAAgQAKQgSAMgBAXQAAAUALANIAAAIgAgpj6IBgAAIghAfg");
	this.shape_9.setTransform(29.05,25.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-1,-1,64.7,52.4), null);


(lib.Symbol28 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0071A8").ss(0.5,1,1).p("AhIAUIgCgFIALAFAAhAUIArgnIgJAn");
	this.shape.setTransform(32.3,53);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("ADIiGQAEgHAIgIQAvgtABAAQARgVgKgnADIg+QgEgDgCgHQgDgLgBgWQgBgKAGgMAkOAXQAJAEAJAEQAzAUAiADQA7AFAOgDQArgNBGhCQBEhCA/AHQAUACARAKAjCD/IgKgoIArAlIAxgdIgNAg");
	this.shape_1.setTransform(27.0602,29.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#7B0607").ss(0.5,1,1).p("Ak9gPQALAEAMAEQA0AUAhADQA8AFANgDQArgMBHhEQBDhBA/AIQAUACARAJIADACQABgEADgDQgDgLgBgSQgBgWAYgWQAvguAAAAQABgBAAAAQAMgQgDgZAk9hHQAHADAIADQAqARAcACQAyAEAMgDQAjgJA8g6QA5g2AzAGQARACAOAIIALAHQgGgHgCgdQgBgSATgTQAogmAAAAQAHgIACgMAE+kSIAAIlAERETIAAol");
	this.shape_2.setTransform(31.825,27.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#049EE9").s().p("AAhAUIArgnIgJAngAhIAUIgCgFIAKAFg");
	this.shape_3.setTransform(32.3,53);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMAAIAZAAIgNAAIgMAAg");
	this.shape_4.setTransform(20.75,0.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC2D2E").s().p("AERETIAAolIAtAAIAAIlgAjxETIgLgoIAsAmIAwgeIgMAggAjoguQgcgCgqgRIgPgGIAAjLIDCAAIANABIANgBIDnAAQgCAMgHAIIgoAmQgTATABASQACAdAGAHIgLgHQgOgIgRgCQgzgFg5A2Qg8A5gjAJQgFACgLAAQgQAAgegDg");
	this.shape_5.setTransform(31.825,27.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D7D7D7").s().p("AinCZQgigEgzgUIgSgHIAAg8IAYAJQAzAUAhADQA8AGANgEQAsgMBGhEQBEhAA/AHQAUACARAKIACABQgGAMABAKQABAVADALIgHACQgRgKgUgCQg/gHhEBBQhGBEgrAMQgGACgNAAQgTAAgjgDgADEhAQgCgVAYgXIAwguIABgBQAKAngRAVIgwAtQgIAIgEAHQgDgLgBgSg");
	this.shape_6.setTransform(27.0602,19.6721);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFBE9").s().p("ABeETIAJgoIgqAoIhhAAIgLgFIADAFIhqAAIANggIgxAeIgrgmIAKAoIhMAAIAAjnIASAHQAzAUAiADQA7AGAOgEQArgMBHhDQBEhBA+AHQAVACAQAJIAIgCQACAIADADQgDgDgCgIQgEgKgBgWQgBgKAHgMIAKAHQgEgDgCgLQAEgIAJgHIAvgtQARgVgKgnQAMgQgDgZIAtAAIAAIlg");
	this.shape_7.setTransform(29.55,27.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCF7C9").s().p("AilCQQghgDgzgVIgYgJIAAg3IAPAGQArARAcACQAyAEALgDQAkgJA8g6QA4g1A0AGQARACANAIIALAHQgGgHgBgdQgCgSAUgTIAogmQAHgIABgMIBfAAQADAZgMAQIgBABIgwAuQgYAWACAWQABARADALQgDADgCAEIgCgCQgRgJgUgCQg/gIhEBBQhGBEgsAMQgFACgOAAQgTAAgjgDgADAAVQACgEADgDQACAKADADg");
	this.shape_8.setTransform(27.355,14.7092);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(-1,-1,65.7,57), null);


(lib.Symbol27 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D7D7D7").ss(0.5,1,1).p("AhVhgIAFAGIA6A8AgUgdIAAABIgfAvIglA9ICAg1IAIgEAAgAQIAIALIAxBFIgEhFAAPhFIhdgY");
	this.shape.setTransform(11.775,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0071A8").ss(0.5,1,1).p("AAhiCIgxBXIhhgXIABABIA5BBIABAAIghArIgjAuIBhgnIAmAuIAeAjIgJhkIBZglIhRgVg");
	this.shape_1.setTransform(18.95,13.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#7B0607").ss(0.5,1,1).p("ADVjbIAAG3AjUB/QAWgGAVgHIAOAKQAKAKAAALQgMAPg3ALAioDcQgEgDgDgEQgJgKgJgIQgJgIgKgGACoDcIAAm3");
	this.shape_2.setTransform(21.325,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCF7C9").s().p("AgVAUIAAgmQAKAGAKAHIARARIAGAIg");
	this.shape_3.setTransform(2.2,42.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAYIAegwIAFAEIgiAtg");
	this.shape_4.setTransform(8.4,19.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D7D7D7").s().p("AAoAaIAIgEIgIAEIgIgMIAIAMIiAA0IAlg8IABABIBggmIAnAtIAEBFgAAoAagAgUgeIAAAAIgCgCIg6g7IACgDIBdAYIABABIgfArg");
	this.shape_5.setTransform(11.775,20.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFBE9").s().p("AiRDcIgHgHIgSgSQgJgIgLgGIAAgKQA4gLALgPQABgLgKgKIgOgKQgVAHgXAGIAAlVIB4AAIAAgFIBmAAIgxBXIhhgWIABAAIA5BCIhfgZIgCADIgFgGIAFAGIA6A7IADACIAAAAIggAxIglA8ICCg1IAvBFIgEhFIAeAkIgIhjIBYgnIhRgVIgJhnICeAAIAAG3g");
	this.shape_6.setTransform(19.05,22);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#049EE9").s().p("AANBgIgmguIhhAnIAjguIAhgrIgBAAIg5hBIgBgBIBhAXIAxhXIAJBnIBRAVIhYAlIAIBkg");
	this.shape_7.setTransform(18.95,13.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC2D2E").s().p("ACoDcIAAm3IAtAAIAAG3gAjUB/QAWgGAVgHIAOAKQAKAKAAALQgMAPg3ALg");
	this.shape_8.setTransform(21.325,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(-1,-1,44.7,46), null);


(lib.Symbol26copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABBBQQgWgWAAghQAAgeAWgXQAWgWAgABQAjgBAVAWQAUAUABAjIAABHIg3AAIAAhDQAAgMgGgGQgGgIgJABQgJAAgGAGQgGAGAAAIQgBAKAHAGQAFAFAJABQAHgBAGgEIAAA5IgMACQghgBgWgVgAjDgVIAHgIQAQgQAdAAIARAAIAAA5QgMAAgFAEQgDAFgCAMQgDArgdASQgHADgIACgAgjBiIAAhMQAAgKgCgEQgCgCgFAAQgKAAABANIAABPIg3AAIAAjHIA3AAIAAA+QANgKAOAAQAVAAAMAPQAMAPAAAZIAABcg");
	this.shape.setTransform(16.65,32.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#7B0607").ss(0.5,1,1).p("ADnDXQgCgNgGgRQAAAAAAgBIgVgtQAEgTAPgmQAJgagPgjQgIgUgig4QgXglAAgZIAEgMQgWALgigBIg0gPQgpgSgjggQgQgOgPgQACIDXQACgNgFgRQgCgFgCgGIgSgmQAFgQAMgfQAIgWgNgdQgHgRgcguQgTggAAgUIADgKQgSAJgdgBIgqgNQg0gXgsgxQgKgMgLgIQgpgfg3AHQgkAFgoATQgHADgHAEAETDXIAAmtAFBjWIAAGt");
	this.shape_1.setTransform(32.075,21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC2D2E").s().p("AETDXIAAmtIAuAAIAAGtgAlADXIAAmHIAOgIQAogTAkgFQA3gHApAfQALAJAKALQAsAxA0AXIAqANQAdABASgJIgDAKQAAAVATAeQAcAvAHARQANAdgIAVQgMAggFAQIASAmIAEALQAFARgCANg");
	this.shape_2.setTransform(32.075,21.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFBE9").s().p("AB8DXQgBgNgHgRIAAgBIgVgtQAFgUAOglQAJgagOgjQgIgUgjg4QgXglAAgZIAFgMQgXAMgggCIg0gPQgqgSgkggQgPgOgPgQIFPAAIAAGtg");
	this.shape_3.setTransform(42.75,21.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCF7C9").s().p("AC1DXQACgNgFgRIgEgLIgSgmQAFgQAMggQAIgVgNgdQgHgRgcgvQgTgeAAgVIADgKQgSAJgdgBIgrgNQgzgXgsgxQgKgLgLgJQgpgfg3AHQgkAFgoATIgOAIIAAgmIEDAAQAPAQAPAOQAkAgApASIA0APQAiACAWgMIgEAMQAAAZAXAlQAiA4AIAUQAPAjgJAaQgPAlgEAUIAVAtIAAABQAGARACANg");
	this.shape_4.setTransform(27.575,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol26copy2, new cjs.Rectangle(-2.9,-1,68.10000000000001,45), null);


(lib.Symbol26copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcBVQgXgWAAggQAAgfAWgVQAXgXAdAAIAPABIAAA7QgHgFgHAAQgIAAgGAGQgGAHAAAIQAAAJAGAGQAGAGAJAAQAVAAAAgeIAAh2IA3AAIAAB5QAAAhgSAVQgKAMgPAIQgQAHgQAAQggAAgWgWgACCBoIAAiRIA3AAIAACRgAiBBoIAAhSQAAgNgLAAQgKAAAAANIAABSIgiAAIAAiDQATgRAZAAQAgAAATAXQAOASAAAeIAABNgACKg9QgIgIAAgLQAAgKAIgJQAIgHALAAQALAAAJAHQAIAJAAAKQAAALgIAIQgIAHgMAAQgMAAgHgHg");
	this.shape.setTransform(18.725,32.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#7B0607").ss(0.5,1,1).p("ADnDXQgCgNgGgRQAAAAAAgBIgVgtQAEgTAPgmQAJgagPgjQgIgUgig4QgXglAAgZIAEgMQgWALgigBIg0gPQgpgSgjggQgQgOgPgQACIDXQACgNgFgRQgCgFgCgGIgSgmQAFgQAMgfQAIgWgNgdQgHgRgcguQgTggAAgUIADgKQgSAJgdgBIgqgNQg0gXgsgxQgKgMgLgIQgpgfg3AHQgkAFgoATQgHADgHAEAFBjWIAAGtAETDXIAAmt");
	this.shape_1.setTransform(32.075,21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC2D2E").s().p("AETDXIAAmtIAuAAIAAGtgAlADXIAAmHIAOgIQAogTAkgFQA3gHApAfQALAJAKALQAsAxA0AXIAqANQAdABASgJIgDAKQAAAVATAeQAcAvAHARQANAdgIAVQgMAggFAQIASAmIAEALQAFARgCANg");
	this.shape_2.setTransform(32.075,21.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFBE9").s().p("AB8DXQgBgNgHgRIAAgBIgVgtQAFgUAOglQAJgagOgjQgIgUgjg4QgXglAAgZIAFgMQgXAMgggCIg0gPQgqgSgkggQgPgOgPgQIFPAAIAAGtg");
	this.shape_3.setTransform(42.75,21.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCF7C9").s().p("AC1DXQACgNgFgRIgEgLIgSgmQAFgQAMggQAIgVgNgdQgHgRgcgvQgTgeAAgVIADgKQgSAJgdgBIgrgNQgzgXgsgxQgKgLgLgJQgpgfg3AHQgkAFgoATIgOAIIAAgmIEDAAQAPAQAPAOQAkAgApASIA0APQAiACAWgMIgEAMQAAAZAXAlQAiA4AIAUQAPAjgJAaQgPAlgEAUIAVAtIAAABQAGARACANg");
	this.shape_4.setTransform(27.575,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol26copy, new cjs.Rectangle(-1,-1,66.2,45), null);


(lib.Symbol26 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7B0607").ss(0.5,1,1).p("ADnDXQgCgNgGgRQAAAAAAgBIgVgtQAEgTAPgmQAJgagPgjQgIgUgig4QgXglAAgZIAEgMQgWALgigBIg0gPQgpgSgjggQgQgOgPgQACIDXQACgNgFgRQgCgFgCgGIgSgmQAFgQAMgfQAIgWgNgdQgHgRgcguQgTggAAgUIADgKQgSAJgdgBIgqgNQg0gXgsgxQgKgMgLgIQgpgfg3AHQgkAFgoATQgHADgHAEAFBjWIAAGtAETDXIAAmt");
	this.shape.setTransform(32.075,21.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA4BlQgZgDgRgSIgIgJQgNgTAAgaQAAgfAVgWQAWgWAhgBQAgAAAVAXQAWAVAAAfIgBAKIhTAAQgCgGABgFQAAgIACgHIAcAAQgDgQgQAAQgJABgHAHQgGAJAAAOQAAAOAGAIQAGAKAKgBQAIABAIgJIAfAmQgQANgTADgAh1BlQgOgCgMgHIAAiCQARgLAVAAIAOABIAAA7QgHgFgGAAQgJAAgGAGQgGAHAAAIQAAAJAGAGQAGAGAKAAQAUAAAAgeIAAh2IA3AAIAAB5QAAAegOAUIgEAEQgJANgQAHQgKAEgKACg");
	this.shape_1.setTransform(14.4,32.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC2D2E").s().p("AETDXIAAmtIAuAAIAAGtgAheDXQATgDAQgNIgfgmQgHAJgJgBQgKABgGgKQgGgIAAgOQAAgOAGgJQAHgIAKgBQAPAAADARIgcAAQgCAHAAAIQAAAFACAGIBTAAIAAgKQAAgggVgVQgWgXggAAQggABgWAWQgXAWAAAgQAAAaAOATIAIAJQASASAYADIiTAAQAKgCAJgEQAQgHAKgNIADgEQAOgUAAgeIAAh6Ig2AAIAAB3QAAAegVAAQgJAAgHgGQgGgGAAgJQAAgIAGgHQAGgGAJAAQAHAAAGAFIAAg8IgOgBQgVAAgRALIAAj7IAOgIQAogTAkgFQA3gHApAfQALAJAKALQAsAxA0AXIAqANQAdABASgJIgDAKQAAAVATAeQAcAvAHARQANAdgIAVQgMAggFAQIASAmIAEALQAFARgCANgAlADXIAAgJQAMAHAPACg");
	this.shape_2.setTransform(32.075,21.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFBE9").s().p("AB8DXQgBgNgHgRIAAgBIgVgtQAFgUAOglQAJgagOgjQgIgUgjg4QgXglAAgZIAFgMQgXAMgggCIg0gPQgqgSgkggQgPgOgPgQIFPAAIAAGtg");
	this.shape_3.setTransform(42.75,21.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCF7C9").s().p("AC1DXQACgNgFgRIgEgLIgSgmQAFgQAMggQAIgVgNgdQgHgRgcgvQgTgeAAgVIADgKQgSAJgdgBIgrgNQgzgXgsgxQgKgLgLgJQgpgfg3AHQgkAFgoATIgOAIIAAgmIEDAAQAPAQAPAOQAkAgApASIA0APQAiACAWgMIgEAMQAAAZAXAlQAiA4AIAUQAPAjgJAaQgPAlgEAUIAVAtIAAABQAGARACANg");
	this.shape_4.setTransform(27.575,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(-1,-1,66.2,45), null);


(lib.Symbol25 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0071A8").ss(0.5,1,1).p("AAHAGIgNgLIADAL");
	this.shape.setTransform(21.9,51.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AifgxQARgJAUgDQA/gGBDBAQBHBEAsAMQANADA7gFQAVgDAbgHAjqj2QgSAxAUAXQABABAvAuQAOANAFAOQAAAAgBABIACgBQADAIgBAIQgCAWgCALQgDAIgCACACdD3IgJgFIADAFADtD3IADgNIgOAN");
	this.shape_1.setTransform(33.1237,27.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#7B0607").ss(0.5,1,1).p("AhjkDQABALAGAHQABABAoAmQATATgBASQgCAegGAGIALgIQANgHARgCQA0gGA5A2QA7A6AlAJQALADAxgEQAKgBAMgCAjAkDQgBAPADALQADAIAFAGQABABAvAuQAXAWgBAVQgDAigGAIIABAAIALgIQARgJAUgCQA/gHBDBBQBHBDArAMQAOADA7gFQATgBAXgHAkeEEIAAoHAjtkDIAAIH");
	this.shape_2.setTransform(28.725,26);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#049EE9").s().p("AgDAHIgDgNIANANg");
	this.shape_3.setTransform(21.9,51.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFBE9").s().p("AEBEEIADgNIgPANIhEAAIgJgFIACAFIj/AAIgOgNIADANIimAAIAAoHIAuAAQgCAPAEALQgSAyAUAWIAvAvQAPANAFAOIgBABIABAAQADAHAAAIQgCAWgDALQgCAHgDADQADgDACgHIAIACQARgKAUgCQA+gGBEA/QBHBFArAMQANADA8gGQAUgBAcgIIAAC2g");
	this.shape_4.setTransform(31.175,26);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D7D7D7").s().p("AB7ChQgsgMhHhFQhDhAg/AHQgUACgRAJIgHgCQACgLACgVQABgHgDgIIALgIQARgJAUgCQA/gHBDA/QBHBFArAMQAOADA7gFQATgCAXgHIAAA5QgbAIgVACQgmAEgTAAIgPgCgAi4grIgwguQgUgXASgyQADAIAFAHIAwAuQAXAWgBAWQgDAhgGAIQgFgNgOgOg");
	this.shape_5.setTransform(33.1237,18.8529);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCF7C9").s().p("AB9CRQgrgMhHhEQhDhBg/AHQgUACgRAJIgLAIIgCABIABgBIABAAIgBAAQAGgJADggQABgVgXgWIgwgvQgFgGgDgIQgDgLABgPIBdAAQABALAGAHIApAnQATATgBASQgCAegGAGIALgIQANgHARgCQA0gGA5A1QA7A5AlAKQALADAxgEIAWgEIAAA6QgXAHgTABQglADgTAAQgMAAgFgBg");
	this.shape_6.setTransform(33.4275,14.6313);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC2D2E").s().p("AEOEEIAOgNIgDANgADDEEIgDgFIAJAFgAkeEEIAAoHIAxAAIAAIHgADNgfQglgJg7g6Qg5g1g0AFQgRACgNAHIgLAIQAGgGACgeQABgRgTgUIgpgmQgGgIgBgLIGCAAIAADfIgWAEQgcADgPAAQgMAAgFgCg");
	this.shape_7.setTransform(28.725,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(-1,-1,59.5,54), null);


(lib.Symbol24 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D7D7D7").ss(0.5,1,1).p("AgmgYIgDAJIgjBNAhUgtIArAeAgPgyIhFgLAARAOIAIAFIANgIAAZATIA4AlQABAAABAAABVA4IgSg0AgkA5IA9gm");
	this.shape.setTransform(8.45,25.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0071A8").ss(0.5,1,1).p("AAEhhIAQA8IBWADIhAAqIAkBaIgkgbIgkgbIgBAAIhLA1IAehSIAAgBIhBgzIBIABIAXg9");
	this.shape_1.setTransform(10.925,18.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#7B0607").ss(0.5,1,1).p("Ah9iTIhjAAAjgBPQAEgBADAAQAUgDAUgCQAigDAiAAQACAAADAAQAWAAAXACAg4BIQAAAAABAAQApAEAoAIAjgCnIANBJAhsDwIAEiqABoDwIAZiAQgzgSg0gKIgaCcADhiTIlPAAAjgjvIHBAA");
	this.shape_2.setTransform(22.475,24.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0082CB").ss(0.5,1,1).p("AgHAMIAJgXIAGAX");
	this.shape_3.setTransform(10.6,7.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAQgPIgHgbIAHAGAAQArIgfgDIAfgU");
	this.shape_4.setTransform(43.325,31.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAwBnIAaibQA0AJAzASIgZCAgAijBnIgNhKIAAhXIAHgBIAogFQAigDAiAAIAFAAIgFAAQgiAAgiADIA/gmIA3AlQgXgCgWAAIgECqg");
	this.shape_5.setTransform(17.675,37.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D7D7D7").s().p("AgpgPIADgJIgDAJIgrgeIAAgQIBFALIgfBQIBMg0IABABIAkAZIASA0IgCAAIgDAAIg3glIANgIIgNAIIgIgFIAIAFIg+AmIgnAFgAAZATg");
	this.shape_6.setTransform(8.45,25.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#049EE9").s().p("AAqBTIgkgbIgBAAIhLA1IAehRIAAgCIhBgzIBIACIAXg+IAJgYIAFAYIAQA8IBWADIhAAqIAkBag");
	this.shape_7.setTransform(10.925,17.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFBE9").s().p("ABeDCIAZiAQgzgSg0gKQgogIgpgEIgSgzIAlAaIglhYIBBgsIhXgDIgPg7IFPAAIAAC6IgHgGIAHAaIAAAkIghAUIAhADIAAB1IAUAAIAAAFgAjqhLIAqAeIgjBNIgHABgAjqhbIAAhmIBjAAIgXA9IhJgCIBBA0IAAACg");
	this.shape_8.setTransform(23.475,28.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EC2D2E").s().p("AhsDwIAEiqQAWAAAXACIADAAIABAAQApAEAoAIIgaCcgAjgDwIAAhJIANBJgADABzIAhgUIAAAXgADaAgIAHAGIAAAVgAhuiTIgGgZIgJAZIhjAAIAAhcIHBAAIAABcg");
	this.shape_9.setTransform(22.475,24.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-1,-1,48,50.1), null);


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D7D7D7").ss(0.5,1,1).p("AgwhXIhPAUIBsAMAgZAZIgUA/IBVhaIAJgIAAhgDIAHABIBYANIgqgv");
	this.shape.setTransform(20.925,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0082CB").ss(0.5,1,1).p("AA4gVIgtgSIhCBP");
	this.shape_1.setTransform(23.925,23.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#7B0607").ss(0.5,1,1).p("ACtjqIAcCbACoCuQgRgEgRgEIgogMQgFgPAKgPQADgGAGgFIAwANQApAJAsAIQAAAAABAAQAPACAPACACoCuQAzALA1AIAEQDgQgjgDgdAOACoCuQgZAOgWAYQgLAMgMALAjejqIAAHVAkPDrIAAnV");
	this.shape_2.setTransform(27.225,23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0071A8").ss(0.5,1,1).p("ADdg6QgkAGgkAMIAPBMIAIgYIANAyIAkABADdBLIgWAPIAVA1IgrggIAMBHACkAkIANBLAiMBRIgBAAIAHhRIACgSIgfgNIg5gZIBQgVIAJhoIAyBYIBggXIg6BDIBDBYIgzgU");
	this.shape_3.setTransform(32.35,19.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D7D7D7").s().p("AgZAZIBChQIAtATIAqAwIhYgOIAJgIIgJAIIgHgBIAHABIhVBZgAh/hDIBPgTIAeAMIgBATg");
	this.shape_4.setTransform(20.925,25.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCF7C9").s().p("AhWAeIAXgXQAWgXAZgOQAyAMA1AHIAAAeQgjgCgeANg");
	this.shape_5.setTransform(45.75,43.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOAiIgOhKIAJgZIANAzIAjABIAAALIgXAOIAWA2g");
	this.shape_6.setTransform(51.575,27.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFBE9").s().p("AjnDrIAAnVIGLAAIAcCbIAOBNIANBLIANBGQgrgIgqgJIgwgNQgGAEgDAHQgJAOAEAQIAoAMIAiAIQgZANgWAYIgWAYgAh1BoIBWhaIBYAPIgrgwIA0ATIhChXIA5hEIhgAYIgxhYIgJBoIhQAUIA5AaIhPATIBsAMIgHBQIABAAg");
	this.shape_7.setTransform(28.1,23.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#049EE9").s().p("AC+CzIgBAAIgMhGIArAgIgVg1IAWgQIAABvIgfgEgAiGgBIACgTIgegNIg6gZIBQgVIAJhnIAyBXIBggXIg6BDIBDBXIgzgTIgtgSIhEBQIgBAAgAC6A8IgOgzIgJAZIgNhNQAjgLAkgHIAAB6g");
	this.shape_8.setTransform(32.35,19.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EC2D2E").s().p("ADQDrQAdgOAjADIAAALgAkPDrIAAnVIAxAAIAAHVgACoCuIgigIIgogMQgFgQAKgOQADgHAGgEIAwANQApAJAsAIIABAAIAeAEIAAAuQg1gIgzgLgACtjqIBjAAIAACJQgkAHgjALg");
	this.shape_9.setTransform(27.225,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-1,-1,56.5,49), null);


(lib.Symbol22 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("Ag6gLIAIgGIgIgeAg6hEIAkAgIAwgeIgTAvIA0AjIg7gEIgVA5IgPg4IgWgC");
	this.shape.setTransform(5.925,34.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#7B0607").ss(0.5,1,1).p("AB2DuIAAhCIAAgBQAAAAAAABQgGATgQAGQgQAHgTgHQgWgGgGgWQgFgRAHgZIAPgwQgBgmgcgIQgJgEgMAAQAGgKACgJQAFgXgVgSQgEgEgGgEIgwgMQgJgCgIgDQgNgGgJgJQgPgQAFgWQAFgUAOgKQAGgEAHgCIgNAAIhDAAAB2iRIAAEZIAAANIAAADQAAgCgBgBQgFgJgMgEQgLgEgJADQgJACgEAHQgCADgBAEQgDAIAKAGQAIAEAMAAQgFAJgDABQgDAAgKgDQgUgGAFggIAOgvQABgFABgFQAHgwg0gNQgDgBgFgBQACgDABgDQAPgxgsgUQgEgCgGgCIgwgNQgKgEgHgFQgLgJADgNQADgLACgCQABgBACgBQADAAAGAAQgHAKAAAJQAAALAJADQAEAAADAAQAIAAAHgGQAHgGADgLQACgMgFgJQgGgJgOgFIAUAAgAijjtIFHAAIAAHb");
	this.shape_1.setTransform(16.35,23.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAIAGQgFgHgLgFIARAAIAAAMg");
	this.shape_2.setTransform(27.225,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC2D2E").s().p("AB2DuIAAhCIAAgBIgBABQgFATgQAGQgPAHgUgHQgWgGgGgWQgFgRAHgZIAQgwQgBgmgcgIQgKgEgMAAQAGgKACgJQAFgXgVgSIgKgIIgwgMIgQgFQgOgGgJgJQgPgQAFgWQAGgUANgKQAGgEAHgCIgNAAIhDAAIAAhcIFGAAIAAHbgAhSh4QgBAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBACgEALQgDANAMAJQAGAFALAEIAvANIAKAEQAsAUgPAxIgDAGIAIACQA0ANgHAwIgCAKIgOAvQgFAgAUAGQALADACAAQADgBAFgJQgMAAgIgEQgKgGADgIQABgEACgDQAEgHAIgCQAKgDAKAEQANAEAFAJIABADIAAgDIAAgNIAAkZIihAAIgUAAQAOAFAGAJQAFAJgCAMQgDALgHAGQgGAGgJAAIgHAAQgJgDAAgLQAAgJAIgKIgGAAIgDAAgAiMB6IgXgBIAAgYIAJgFIgJgfIAAgVIAlAgIAwgeIgTAwIA1AjIg7gDIgXA5g");
	this.shape_3.setTransform(16.35,23.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFBE9").s().p("AiMDAIAAh1IAXABIAOA5IAWg5IA8ADIg1gjIATgvIgwAdIglgfIAAi6IBDAAIAAAGQgOAKgFAUQgFAWAPAQQAJAJANAGIARAFIAvAMIAKAIQAWASgFAYQgCAJgHAKQANAAAJAEQAcAIABAlIgPAwQgIAZAFARQAHAWAWAGQATAHAQgHQAQgGAFgTIABAAIAABCgAiMAPIAIAfIgIAFg");
	this.shape_4.setTransform(14.075,28.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCF7C9").s().p("AA5CfQgUgGAGggIANgvIACgKQAHgwgzgMIgIgCIACgGQAPgygrgTIgKgEIgwgNQgLgEgGgFQgMgKADgNQAEgLABgBQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAJAAQgHAJAAAJQAAAMAIACIAHABQAJAAAGgHQAHgGADgKQADgNgGgJIAAgNIChAAIAAEYIgSAAQgLgDgJACQgJADgEAHQgCACgBAEQgDAIAKAGQAIAFANgBQgFAKgEAAIAAAAIgNgDg");
	this.shape_5.setTransform(17.619,25.4281);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-1,-1,34.7,49.6), null);


(lib.Symbol21 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgxhHIArAmIAvgeIgSAvIA0AjIg8gEIgVA5IgOg4Ig3gFIAogZg");
	this.shape.setTransform(32.2,34.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#7B0607").ss(0.5,1,1).p("AECBbQAHgCAHAAAECBbIAEAaAECBbQg1AJg0ASIAUBwAEHB4IAJA5AEQiJIjXAAIgQAAQAJADAHAIQALAMAAAUQAAAXgTAMQgQALgaAAIgxAAQgxAQAQAuQgMgDgKABQgeADgKAkIADAyQABAagJAQQgLATgXACQgUABgOgKQgJgGgDgJIAAAPIAABLAjeiJIDiAAIAKAAQgGACgEADQgHAIAAAMQAAAMAFAHQAEAIAIACQADABAEAAQAJAAADgLQACgJgEgLQAKABACAEQABABAAAMQAAAUggAFIgxABQg/AEAIBBQgEAAgDAAQg7AAAAA6IACAxQgCAggVABQgMABgCgBQgDgBgCgLQALAEAJgDQALgDAAgJQgBgDAAgDQgDgJgIgEQgIgEgMABQgNABgHAHQgCADgBADIAAgGgAkPDmIAAnLIIfAA");
	this.shape_1.setTransform(27.225,23.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#D7D7D7").ss(0.5,1,1).p("AAOgFIgbgEIAbAT");
	this.shape_2.setTransform(53.025,20.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCF7C9").s().p("AhnCLQgEgBgCgLQALAEAKgDQALgDAAgJIgCgGQgCgJgJgEQgHgEgNABQgMABgHAHIgEAAIAAjwIDjAAIAAAFQgIAIAAAMQAAAMAFAHQAFAIAIACIAHABQAJAAADgLQABgJgDgLQAKABACAEQAAABAAAMQAAAUgfAFIgyABQg+AEAIBBIgHAAQg8AAABA6IACAxQgDAggUABIgHAAIgHAAg");
	this.shape_3.setTransform(18.25,23.1333);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCgMIAAgDIgEgaIANgCIAABXg");
	this.shape_4.setTransform(53.75,36.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC2D2E").s().p("ACtDmIgUhwQA0gSA1gJIAEAaIABADIAJA5IAAA1gAkPDmIAAnLIIfAAIAABcIjXAAIgQAAQAJADAHAIQALAMAAAUQAAAXgTAMQgQALgaAAIgxAAQgxAQAQAuQgMgDgKABQgeADgKAkIADAyQABAagJAQQgLATgXACQgUABgOgKQgJgGgDgJIAAAPIAABLgAjBCMQACABAMgBQAVgBACggIgCgxQAAg6A7AAIAHAAQgIhBA/gEIAxgBQAggFAAgUQAAgMgBgBQgCgEgKgBQAEALgCAJQgDALgJAAIgHgBQgIgCgEgIQgFgHAAgMQAAgMAHgIQAEgDAGgCIgKAAIjiAAIAADwIAAAGIADgGQAHgHANgBQAMgBAIAEQAIAEADAJIABAGQAAAJgLADQgJADgLgEQACALADABgAAdCCIg2gFIAngaIgOg5IArAmIAwgeIgTAvIA1AkIg8gEIgWA5g");
	this.shape_5.setTransform(27.225,23.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D7D7D7").s().p("AgNgJIAbAEIAAAPg");
	this.shape_6.setTransform(53.025,20.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFBE9").s().p("Aj3C4IAAhLIAMAAQAOAKAVgBQAXgCAKgTQAKgQgCgaIgDgyQAKgjAegDQAKgBANADQgQgvAwgQIAyAAQAaAAAQgLQASgMAAgXQAAgUgKgMIAAgLIDXAAIAABmIgdgEIAdAUIAABsIgOACQg2AJg0ASIAVBwgAgJA1IgoAaIA2AFIAOA4IAWg5IA8AEIg1gkIATgvIgxAeIgqglg");
	this.shape_7.setTransform(29.675,27.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-1,-1,56.5,48.1), null);


(lib.Symbol20 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C6C647").ss(0.5,1,1).p("AgYAJQAKAAAJgKQACgDAHgOQgCANgBAGQgCALgGAHQAPgDARgV");
	this.shape.setTransform(8.7125,1.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("AgeAQQABgFAFgEQAFgEAGAAIAUACQAPAAAMgIQATgNAEgcAAFgeQgCABgCABQgSADgJABQgKACgHAGQgDADgDAEQgHAJAAAOIACAfQABgKAIgPQAKgUACgFIABAAQAAAOACAHQABABAAABIAAABQgBgBAAgCIAAAA");
	this.shape_1.setTransform(5.725,5.4125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF99").s().p("Ag4AVQAAgNAHgKIAGgGQAHgGAKgCIAbgFIAEgCQAKAAAJgLIAKgRIgDATQgDALgGAHQAQgDARgVIACABQgEAcgTAMQgMAKgPgBIgUgBQgGAAgFADQgFAEgBAFQgCgHAAgPIgBAAIgMAaQgIAPgBALg");
	this.shape_2.setTransform(5.725,4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-1,-1.5,13.5,12.5), null);


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E0AE71").ss(0.5,1,1).p("AAJAAQAAANgDAJQgCAKgEAAQgCAAgDgKQgDgJAAgNQAAgMADgKQADgJACAAQAEAAACAJQADAKAAAMg");
	this.shape.setTransform(0.9,3.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0AE71").s().p("AgFAWQgDgJAAgNQAAgMADgKQADgJACAAQADAAADAJQADAKAAAMQAAANgDAJQgDAJgDAAQgCAAgDgJg");
	this.shape_1.setTransform(0.9,3.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,3.8,8.3);


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFF7E9","rgba(255,224,166,0.247)"],[0,1],0,0,0,0,0,3.8).s().p("AgTAaQgJgLAAgPQAAgPAJgKQAIgLALAAQAMAAAIALQAJAKgBAPQABAPgJALQgIALgMAAQgLAAgIgLg");
	this.shape.setTransform(2.85,3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.7,7.4);


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFF7E9","#FFE0A6"],[0,1],0,0,0,0,0,4.7).s().p("AAJAeIgHgKIgKgVIgEgGIgIgIQgGgHACgGQABgFAEgBQAGgBACACIAFAGQADAEAHAIQADAEAEAKQACAGAGAIIAEAFQADAGgBAEQgCAHgFAAIgBAAQgEAAgEgFg");
	this.shape.setTransform(26.8286,38.9628);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFF7E9","#FFE0A6"],[0,1],0,0,0,0,0,12).s().p("AAlBqQgGAAgFgMIgnhpQgRgkgMgmQgDgGAAgFQABgHAFgBQAGgCAEAGIAFAKIAFASQAHARARAoQAPAjAIAWQAIAdAFAJQAFALAAAEQAAAEgDAEQgCADgDAAIgBAAg");
	this.shape_1.setTransform(19.8,23.4371);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E0AE71").ss(0.5,1,1).p("AhBjTIgbAAQgeAMAAAfQAAAbArBSQAWAqAaAtQALAYAjBCQAOAcAEAMQADAIAJAGQAGAEAMAHAA/C4QALAHAMAMQALAKADAAQACAAAHgDQAGgDAIgC");
	this.shape_2.setTransform(21.0875,26.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.5,1,1).p("AhmkDQArAIAMASQAJALAHANQAHANAFAOQAEAMADAMQAMAnAIAgQALAoAfA8QACADAOAeQABABACACQAiAZASANQAUAPgBANQgCANABAWQAAAVgDgFIAAAAQgEgKgDgHQgDgGgBgFQgRgWgPgFAimj7QgDAHgCAGQgBACAAADQgEALAAAJQAAASAWAlQAFAJAHAKQAGAJAGAKQAdAqAgAsQACADAUAfQAUAeAQAjQAPAkAJAPQABAIACAJQABAGACAHQACANACAMQACAIABAHQAAACABACIACAVQAHAHAKACQAJACAGABQAGACARABIgDgCIAAAAIgBAAQgCgBgJgEQgJgFgNgYQAEADAGABQACAAACABQAEAFADACQAEAFAKAEQABABAJAGQABAAAAAAQADACADACQAOAJACAAQADAAAEgCQAFgDAHAAIABAAAAvC+IgHgHABhC6QACACgCgBQAAAAgBgBQANAMAIAIQAJAJAGAIQABABABABABODDQAcAQAVALQACABACABQACABABAAIABABQATAQAOANQANANgGgVQgFgWgNgRQgEgGgEgHQgHgQgGgN");
	this.shape_3.setTransform(17.6917,26.0234);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE0A6").s().p("ABWDKQgMgLgLgHQABABAAAAQAAAAAAAAQAAgBAAAAQAAAAgBgBIgSgLQgJgGgDgJQgEgMgOgbQgjhCgLgYQgagtgWgqQgrhTAAgaQAAgfAegMIAbgBQAHANAFAOIAHAYIAVBHQALApAeA7IAQAiIADACIA0AmQAUAPgBANQgCANABAWQAAAVgDgEIAAgBIgHgRIgEgLQgRgWgPgEQAPAEARAWIAEALIAHARIAAABIANAcIAIANIgOAFIgJACQgDAAgLgKg");
	this.shape_4.setTransform(21.0875,26.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0AE71").s().p("ACoEBQgOgNgTgQIgBgBIgCgCIgBABIgEgDIgxgaIAxAaIgFAIQgEACgDAAQgCAAgOgJIgGgEIgBgBIgKgGQgKgEgEgFIgHgHIgEgBQgGgBgEgDQANAYAJAFIALAFIABAAIAAAAIADACIgXgDIgPgDQgKgCgHgHIgCgVIgBgEIgDgQIAGgCQgHgagEgJIgFgRQgJgPgPgkQgQgjgUgfIgWghQgggsgdgqIgMgTIgMgTQgWglAAgSQAAgJAEgLIABgFIAFgNIAQgJQAHgDAIAAIASADQANACACgBQArAIAMASQAJALAHANIgbABQgeALAAAfQAAAbArBTQAWAqAZAsQALAZAkBBQAOAcAEAMQADAIAJAHIASALQABAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAIgBgBIAVAUQAJAJAGAIQgGgIgJgJIgVgUIABABQALAHAMALQALAKADAAIAJgDIAOgEQANARAFAWQAEANgEAAQgCAAgFgFgAAvDAIgHgHgAB/DfIAAAAgABbDfIACgDIgBADg");
	this.shape_5.setTransform(17.6917,25.8484);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,37.4,54.1);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFF7E9","#FFE0A6"],[0,1],0,0,0,0,0,2.6).s().p("AgBAOQgIgBgFgFQgHgHADgGQABgFAGgDQACgBAEAAIAJACIAKAEQAGAEAAAGQgBAIgGADQgDACgFAAIgGgBg");
	this.shape.setTransform(25.0153,3.7614);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFF7E9","#FFE0A6"],[0,1],0,0,0,0,0,3.9).s().p("AgTAcQgIgMAAgQQAAgPAIgLQAIgMALAAQAMAAAIAMQAIALAAAPQAAAQgIAMQgIALgMAAQgLAAgIgLg");
	this.shape_1.setTransform(7.55,5.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#660505").ss(0.5,1,1).p("AiRBFQAagmAWgeQAAgBABAAQAagkAVgaQAmgwAVgVIBmArQAdAjAEArQABAHAAAHQAAACAAACQAAAGgBAHACQAVIgVgGIg5hWIgsBdIhDANIgsAIIBeBEIgPAVQgHgBgIgB");
	this.shape_2.setTransform(18.725,16.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#7B0707").ss(0.5,1,1).p("AA8AeQgXgEgYgIQgugRgZgdQAAgBgBAA");
	this.shape_3.setTransform(10.15,26.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AhhA8IBHgRIA6hmIA+BhIAFAB");
	this.shape_4.setTransform(22.05,13.2875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#D9D3D3").ss(0.5,1,1).p("AApAwIAGgIIhdhMIAqgLQAJAGAJAD");
	this.shape_5.setTransform(12.6875,24.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFE0A6").ss(0.5,1,1).p("AhJASQAMgNAZgJQAwgVA+AM");
	this.shape_6.setTransform(10.15,1.4068);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#B41212").ss(0.5,1,1).p("AgPgMQAPAPAQAK");
	this.shape_7.setTransform(10.575,18.0625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#E0AE71").ss(0.5,1,1).p("AgeBQQABAAABABQAcAJAvAAQAdAAAUgEQAWgEAZgJQACgBACAAAiPhZQgDALAAAJQAAAiAOAXQALASAlAlQABACABAB");
	this.shape_8.setTransform(17.2,12.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.5,1,1).p("AAIiVQAsABAiASQAqAWAFAlACmAmQgBAAAAABQgBALgDAKQgJAbgUAWQgkAng7ACQgLAAgMgBQgCAAgCAAAClAnIgBgBAh8BWQgegYgIgvQgFgOAFg5QAAgDABgDQAAgBAAgBQAAgBAAAAQAAgBAAgBQADgHACgIQAHgZAKgR");
	this.shape_9.setTransform(16.6662,15.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhoA4IBGgRIA7hnIA+BhIAEABIAOAEIAAANIgCAAIgUgGIg6hWIgrBdIhDANQgKgEgJgFg");
	this.shape_10.setTransform(22.75,13.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D9D3D3").s().p("AAZAzIAHgIIAGgIIhdhMIAqgLQAJAFAJAEIgrAIIBeBDIgQAVIgPgCg");
	this.shape_11.setTransform(13.6,24.6125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B41212").s().p("AAHA0QgvgRgZgeIAAgBIAwhDQAQAPAPAKIgpALIBdBLIgGAIIgGAIQgXgDgYgJg");
	this.shape_12.setTransform(10.7625,23.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F52F2F").s().p("Ah5A2IABgBQAaglAVgZQAmgwAWgVIBlArQAdAjAEAqIABAPIAAADIgOgDIgFgBIg+hhIg6BnIhHARQgRgKgQgPg");
	this.shape_13.setTransform(21.125,11.4375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E0AE71").s().p("AAOCGIgEgBIAPgVIhehEIAtgIIABABQAbAJAwAAQAdAAAUgEQAWgDAZgKIAEgBIADgBIAJgEIABAAQgBAMgDAKQgIAbgVAVQgkAog7ACIgXgBgAiiAAQgFgOAFg5IABgHIAAgCIAAACIgBAHIABgJIAAgBIAAABIACAKIAAgMIACgHQABgKAHgSIAIgRIADACQgCAKAAAJQAAAiANAXQALATAlAlIADACIgwBFQgegYgIgvg");
	this.shape_14.setTransform(16.6537,16.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE0A6").s().p("AgiBjIgCgBIBDgMIAsheIA5BWIAVAHIgKAEIgDABIgDABQgZAKgXADQgUAEgcAAQgwAAgbgJgAhbA9QgkglgLgTQgOgWAAgiQAAgJADgKQAMgNAYgLQAxgVA+AMQAqABAjASQApAWAFAmIhmgrQgVAVgmAvQgUAagbAlIgBAAIgDgDg");
	this.shape_15.setTransform(17.8125,10.3568);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-1.4,35.199999999999996,32.5);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C6C647").ss(0.5,1,1).p("AAUhWQgCACgBACQgTAXgNAQQgcAlAAAYQAAABAAAGQABAEAAAGQABgEADgGQABgDABgDQAKgRACgCQAAADgCAIQgDAIAAAFQAAAMAFALQAIARAUAOQADACADACIAAABQgEgBgCgEQgCgCgBgEQgCgIAAgIQAAgSACgIQADAQAIARQADAJAEAGQAHAJAHAAQAEAAAHgDAgqAjQABADAAAD");
	this.shape.setTransform(6.9,9.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("AAXhaQgCABgBABQgOARgmAnQgeAfAAAgQAAASAHAIQAMALALALQACACACACIAAABQgDgCgBgDQgBgDgBgHQAAgEAAgHQAAgDAAgFQgBAAAAACQAAADABADQADALAOAKQAPAMAQAAQABAAABAAQAKAAAOgFQAAAAABgBQAFgCAEgDQAFgDADgDQgBAAgDAAQgIAAgFgGQgFgGAAgGIAAgPQADAKAMAHAA6BKQACgBABgCIACgBQgCAEgCAAg");
	this.shape_1.setTransform(6.3,9.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF99").s().p("AAHBOQgEgGgDgJQgHgRgDgQQgDAIAAASQAAAIACAIIADAGQgUgOgIgRQgFgLAAgMQAAgFACgIIACgLIgLATIgDAGIgDAKIgBgKIgBgHQAAgYAdglIAfgnIAEgEIABAAQgIAsAPAOQAPAPAKABQAKACADAJQADAJAAAEQAAALgOALQgPALAAAGIACAGIACAFQgMgHgCgKIgBAPQAAAGAFAGQAFAGAIAAIAEAAIgIAGQgHADgEAAQgHAAgGgJg");
	this.shape_2.setTransform(8.175,9.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C6C647").s().p("AAVBaQgRgBgPgLQgOgKgCgLIAAgIQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABIABAGIAAALQABAGABAEIgXgWQgIgIAAgTQAAggAegfQAmgmAPgRIACACIgfAmQgdAlABAYIAAAIIABAKIADgLIADgFIAMgTIgCALQgDAIAAAFQAAAMAFALQAIARATAOQADAEAEABIAAgBIgHgEIgCgHQgDgHAAgIQAAgSADgIQADAQAHAQQAEAKAEAGQAHAJAGAAQAFAAAHgDIgJAFIgCABQgNAFgKAAIgCAAgAgcAkIgBgGIABAGg");
	this.shape_3.setTransform(5.65,9.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-1,-0.4,14.9,20.299999999999997), null);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF99").ss(0.5,1,1).p("AgcglQACgFAFgEQAFgFADAAQAeAAAMBn");
	this.shape.setTransform(3,0.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("Agah9QAdAjAAA3QAAAdgQAgQgRAhAAAWQAAABAAABQAAABAAAAQABAMAIAJQAGAHAPAOQgKgMgEgGQgIgMAAgNQAAgRAaghQAbghAAgk");
	this.shape_1.setTransform(2.775,8.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF99").s().p("AgVBwQgIgJgBgMIAAgBIAAgCQAAgWARghQAQghAAgcQAAg3gdgjQACgFAFgFQAGgEADAAQAdAAAMBnQAAAkgbAhQgaAhAAARQAAANAIAMQAEAGAKAMIgVgVg");
	this.shape_2.setTransform(2.775,8.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-1.3,-6.1,8.200000000000001,28.700000000000003), null);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF99").ss(0.5,1,1).p("AgTgMIAOgBQALAAAIAJQAGAGAAAM");
	this.shape.setTransform(2.2133,1.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("AAGhPQAAABAAAAQgDAOgDAKQgBAGAAALQAAAbAPAQQAKALAEALQAHAJAAAIQAAAJgHANQgJAQgNAJQgGAHgJAIAgihqIAEAAQAIABAFAMQAFAKAAAIQAAAIgCALQgCAIAAAJQgBAEAAADQAAAbAaAQQAMAIAHAJQABAGAAAFQAAAbgXAa");
	this.shape_1.setTransform(3.65,10.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF99").s().p("AAdAvQAAgGgCgFQAIAJAAAJQAAAIgIANQgIAQgNAIQAXgZAAgbgAAJATQgagRAAgaIABgHQAAgJACgHQACgLAAgJQAAgIgFgKQgFgMgIgBIgEAAIAPAAQALAAAIAIQAGAIAAALIAAABQgDAOgDAKQgBAHAAALQAAAaAPAQQAKALADALQgGgJgMgIg");
	this.shape_2.setTransform(3.65,9.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-0.8,-1.1,8.9,23.400000000000002), null);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFC4C4","#FF5858"],[0,1],0,0,0,0,0,2).s().p("AAAAEIgIgDIgGgDIgBgBIABgCIABAAIADACQAFADAHABIAEABIAIgCQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIgDABIgJACIgEgCg");
	this.shape.setTransform(12.3292,31.5625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFC4C4","#FF5858"],[0,1],0,0,0,0,0,1.5).s().p("AgCAEIgJgFIgBgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQABAAAAAAIAGAEIACABQACAAAEgBQAEgBACAAIABACIgBABIgIADIgDAAIgDgBg");
	this.shape_1.setTransform(12.7167,30.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(120));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.5,1,1).p("AAeg5QAHgEAGgCQAIgDAEAAQADAAAFABQAJACAPAEIAIgEABWgvIABAEAhVhRQACADADACAhEhRQADgBAEAAQAFAAAJAFQADACADACQAGADABAAAhehFIAGgBQABABACABQACABABABQAEADADACQACACABABQADACACABAgiBNIAHAAQAMAAAQAG");
	this.shape_2.setTransform(13.725,25.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFF7E9","#FFE0A6"],[0,1],0,0,0,0,0,2.9).s().p("AgEAUIgCgCIgIgQIgBgBIgBgBQgCgCAAgCQgBgFACgEIAAgBIADgEQADgEAEAAIABAAQAEgBADABIAGAEQAEAEACAFIABABIAEAIIAAABIAAAAQACAFgBAGIAAABIgBADQgBAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAIgFAEIgGABQgEAAgEgEg");
	this.shape_3.setTransform(20.1967,12.4217);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABvBPQgCgMgEgGQgDACAAALIAAARIAAABQgDgDAAgKQgBgLgEgPIgGgaQAGABADALIADAHIADAKIABgKIgCgTQAEAFAHASIABABIAFgIIACgIIgBgEIAJAVQADAJgBATIAAALQgLgcAAgFIABAQQAAARgIAHIgCgTgAgSBdIABgBIgCgBIgBgCIACgDIACgBIACAAIABAAIABAAIABAAIABACQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAIAAABIgBABIgDABgAAABaIAAAAIgBgBIAAAAIAAgCIABAAIAAgBIABAAIABAAIAAAAIABACIAAABIgBAAIAAABgAhuBOIgBAAIgBAAIAAgBIAAAAIAAgBIAAAAIAAgCIABAAIACAAIABAAIACAAIAAABIAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAAAIgBABIgBABQAAgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAgAiABNIgBAAIgBgBIgBAAIAAgBIAAgDIAAgBIABAAIAAgBIACAAIAAgBIADABIACABIAAABIABADIgBAAIgBACIgBAAIgBAAgAASgrQAUAUACAIIgUgSQgLgKgNACQAEgFAJAAIABAAIAEgCIgDgGIgBgBIAAAAQgHgKgOgHQgQgKgJAEQACgDAJAAQAEAAAQAHIATAJQgEgIgRgHIgXgIQACgCAFAAQAMAAAkAJQACgIgOgHIgCgBQAQABAQALQASAKAPATQgFgEgOgHQgRgIgFABIgBgBIABABIAAAAIAEACIABAAQAIAFAJAKQANAOAEAKQgPgMgcgNIAZAZIAHAIQAGAJADAIQgNgLgpgYgAAPgtIADACIgDgDg");
	this.shape_4.setTransform(19.9,10.9375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFF7E9","#FFE0A6"],[0,1],0,0,0,0,0,2).s().p("AABAMIgGgEIgEgEQgFgFAEgGQAFgGAFADIAEACIAEADIACACQAFAEgEAGQgDAFgFAAIgCAAg");
	this.shape_5.setTransform(7.6824,23.6282);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFF7E9","#FFE0A6"],[0,1],0,0,0,0,0,3.1).s().p("AgQATQgDgBgCgDQgCgEACgFIAAAAIABgCIABgBIAHgEIACgBQAEgBADgEIAJgJQADgCADgBQAGAAADAFQADADgCAGIgDAEIgCABIgPANIgLAGIgDABIgEgBg");
	this.shape_6.setTransform(20.8699,24.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFF7E9","#FFE0A6"],[0,1],0,0,0,0,0,1).s().p("AgBAGIgDgCIgBgBIgBgBIAAgBIAAgDQACgDADAAIAAAAIAFABIABABIABACQABAAAAABQAAAAAAAAQAAAAAAABQAAABAAAAIAAABIgDACIgBABIgCAAIgCAAg");
	this.shape_7.setTransform(12.2117,24.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFF7E9","#FFE0A6"],[0,1],0,0,0,0,0,3.5).s().p("AAAAeQgDAAgBgEIAAgEIAAgJIABAAIABgFIgBgBIAAgFQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIAAgFIgCgMIAAAAIAAgFIAAAAIAAgFQABgDADgBQACAAACACQACADAAAEIADARIAAAEIABACIAAAIIgBAHIgBABIAAAIIgBABIAAABQgBABAAAAQAAABgBAAQAAAAgBAAQgBABAAAAIgBgBg");
	this.shape_8.setTransform(12.9375,20.5611);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.5,1,1).p("ABag1IABAEAhahLIAGgBQABABABABQADABABABQAEACADADQACACABABQADACACABAgeBHIAHgBQAMAAAQAH");
	this.shape_9.setTransform(13.325,25.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABABPQgCgMgEgGQgEACABALIAAARIgBABQgDgDAAgKQAAgLgEgPIgGgaQAGABADALIADAHIADAKIABgKIgDgTQAFAFAHASIABABIAEgIIACgIIAAgEIAJAVQACAJAAATIAAALQgLgcgBgFIABAQQAAARgHAHIgCgTgAgdgrIgCgDIAAABIACACQAUAUADAIIgVgSQgLgKgNACQAEgFAJAAIABAAIAFgCIgEgGIAAgBIgBAAQgGgKgPgHQgRgKgIAEQACgDAIAAQAFAAAQAHIAUAJQgFgIgRgHIgXgIQACgCAFAAQALAAAmAJQACgIgOgHIgDgBQAQABARALQARAKAPATQgFgEgPgHQgPgIgFABIAEACIABAAQAHAFAJAKQANAOADAKQgOgMgbgNIAYAZIAGAIQAHAJADAIQgNgLgpgYgAgLhKIAAAAIgBgBg");
	this.shape_10.setTransform(24.625,10.9375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABvBPQgCgMgEgGQgDACAAALIAAARIAAABQgDgDAAgKQgBgLgEgPIgGgaQAGABADALIADAHIADAKIABgKIgCgTQAEAFAHASIABABIAFgIIACgIIgBgEIAJAVQADAJgBATIAAALQgLgcAAgFIABAQQAAARgIAHIgCgTgAgSBdIABgBIgCgBIgBgCIACgDIACgBIACAAIABAAIABAAIABAAIABACQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAIAAABIgBABIgDABgAAABaIAAAAIgBgBIAAAAIAAgCIABAAIAAgBIABAAIABAAIAAAAIABACIAAABIgBAAIAAABgAhuBOIgBAAIgBAAIAAgBIAAAAIAAgBIAAAAIAAgCIABAAIACAAIABAAIACAAIAAABIAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAAAIgBABIgBABQAAgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAgAiABNIgBAAIgBgBIgBAAIAAgBIAAgDIAAgBIABAAIAAgBIACAAIAAgBIADABIACABIAAABIABADIgBAAIgBACIgBAAIgBAAgAASgrIgDgDIAAABIADACQAUAUACAIIgUgSQgLgKgNACQAEgFAJAAIABAAIAEgCIgDgGIgBgBIAAAAQgHgKgOgHQgQgKgJAEQACgDAJAAQAEAAAQAHIATAJQgEgIgRgHIgXgIQACgCAFAAQAMAAAkAJQACgIgOgHIgCgBQAQABAQALQASAKAPATQgFgEgOgHQgRgIgFABIAEACIABAAQAIAFAJAKQANAOAEAKQgPgMgcgNIAZAZIAHAIQAGAJADAIQgNgLgpgYgAAjhKIAAAAIgBgBg");
	this.shape_11.setTransform(19.9,10.9375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_10},{t:this.shape_3},{t:this.shape_6},{t:this.shape_5},{t:this.shape_8},{t:this.shape_7},{t:this.shape_9}]},14).to({state:[{t:this.shape_11},{t:this.shape_3},{t:this.shape_6},{t:this.shape_5},{t:this.shape_8},{t:this.shape_7},{t:this.shape_2}]},3).wait(103));

	// Layer_1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#D0D05D").ss(0.5,1,1).p("AAPgdQgEgCgCAAQgJAAgWAQQgJAGgGAGQAAAAAAAAQgGAEgDAEIAAABQACgEALgEQAFgCAHgCIABAAQgMAKgDAIQADgCAMgGQAEgDADgBQAFgCACAAIABAAQgKAGgKAaQAFgCANgNQADAEADAEQABABABABQABAAAAAAQACABADAAQAGAAAEgCQACgCAFgEIABgBQgBABgBADQgCACAAABQAAADAFADQAEACADAAQAEAAAKgE");
	this.shape_12.setTransform(13.8125,3.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#E0AE71").ss(0.5,1,1).p("Ag4iLQACABADABQAIADAEAAQACAAADgFQAEgFAFAAQABAAAGADQAFADAEAAQAHAAACgDQAFAIABAAQACAAAFgCIAiAKQADABAMACQALADAEAGQAIALAMASQABABABACQAGATACAYAA5gmQAGADADAGAhAiNQAEAAAEACQgVAZgGAfAhPg3QABAAAAAAAhPg3QAOADABAAAhXhEQAHAJABAEAhdgVQgQAOADAZQADAbABAJQAAAAAAAAQADATAIATQAAAAABABQAAAAAAAAQAAABADAHQADAGAJARQAJARAIAEAARgkQAEgDAFgBQACAAADAAQAEAAAHAAAgJAmQgKAJgDABQgCABgGAAQgFAAgGgDQgCgCgCgBQgCgHgFgBIAGgCQACAAAGADQAFACADAAQABAAAEAAAA9A+QABAAABAAQAHAAAAAHQgFAQgLAW");
	this.shape_13.setTransform(15.6939,21.9875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.5,1,1).p("AAOi3QA0ABAqAgQAZAUAJAbQAIAUAGAOQAJAXACAkABZgxQgOgpghgOQgBAAgCgBQgBAAgBAAQgQAAgLgCIAAgBQABgDAIgLIAAgBIgBAAIgTAMIAAgEIABgDQgGADgFABQgCAAgCAAQgCAAgFgBQgFgCAAgBQAAgEABgCQgJACgKAFQgHACgGAAQgBAAgBAAQgIAAgDgGQAAgBAAgGIgHAJQgBAAgEgHQgNAXgHAOQABgCAAgCQAFgPAAgVIAAgBIAAgDQAAgMAJgLQAFgFAGgFQADgCAEgDQAYgQAXAAQABAAABAAQAHABAYAEQACAAACgBABFgTQgQgLgSAAQgHAAgKAEQgLAEgHABQACADABACQABACADAAQABAAAEgCQAAAAABAAQADgBAGgCQALgEAKgBQACAAABAAQACAAACAAQAJABAKAEgAAAALQAEAEALAGQALAGAEAAQAJAAAKgGQALgHABAAQABAAAFAFAA2AHQADABACAAQACAAAEgCIABAAQgBACgCABIgDABQAAABABABQgHgEgHgDQgCAAgBgBQAAAAAAAAQgDgBgCAAAAyADQADAAADgCQACgBACgBAApABQAEABAFABIAAAAQABABABABAAxAGQACAAABgBQADAAgBACAAxAGQADABACAAAASABQAAAAABAAQACgBAFAAIAAAAQABAAABAAIABABIABAAQADAAAFABQAAAAABABIAAAAQACADAAADQAAAFgEADQgEAEgFAAQgFAAgEgEQgDgDAAgFQAAgEACgEQAAAAgBAAQAAAAgBAAQgCABgCAAIgBABQgCABgEACQgCACgDADQAAAAAAAAQgBABgDgBQAEgGAGgJAAvAFQABAAABABAApABQAGgBADADAAzBdQAKgFAOgPQAKgLAFgJQAAAAAAAAAh/BPQABAGACAOQADAPAEAHQAEAHAGAMQAGAMAEAFQACADADACQACADADADQAGAFAFAEQACABABABQABAAABABQABAAAAABQAJAEALACQAFABAGAAQAWABAhgYQANgJAKgJQADgDADgDQAKgKAFgJQAFgIAEgJQAFgLAFgMQAIgVADgHQAAgBAAAAQACgFABgGQAEgPABgXQAAgDgBgDQAAgCAAgDAgJixQANgEAGgBQACgBABAAQAAAAABAAAhhiCQAAAAgBAAQggANgUAyQgKAbgEAYQAAAEgBADQAAAAAAABQgBALAAALQAAAWADALAhwhGQAGgLADgIAhugpQACgCABgBQAEgDABgBQABAAAHAAIAAAAQAJAAAFACQAGABAIAGQAFAEALAHQAFAEAAABQAAACgDABQgCABgCAAQgDAAgFgDQgBAAAAgBQgFgDgGgGQgMgLgLgCIgBAAQAAAAgBAAQAAAAgBAAQgBAAgBAAQgEAAgGAEgAhpgTQgCgBgBgCIgBAAQAEAHABABQgEADgEADQAAAAAAAAIgBAAQAAABAAAAIgBAAQgBABgBABQABAAABgBQAAAAABAAIAAAAQAEgBAFgDQAEgBAFgBQABgBAAAAQABgBAAAAQgIgCgEgDQABAAAPgEAhwgCIADgBQABADACACQACACADACQABABAAAAQAHAFAJAAIARgCQADAAAGACQAAgBAAgCQgBgCAAgBQgDgFgDgDAhEgEQgBAFgEADQgEAEgGAAQgGAAgEgEQgEgDAAgFQAAgEADgEQACAAACAAQACAAACAAQgEgBgDgBAhfgMQABAAAAAAAhTgLQACAAADABQADACAEACQAAAAABABQABAAABABQABABACABQgCgBgBgCQAAAAgBAAQAAAAgBgBQgFgEgIgBQgBgBgBAAIgBAAIAAAAAhPgDQAAACgBABQgBAAgBAAQgCAAgBAAQgBgBAAgCQAAgBABgBQABgBACAAQABAAABABQABABAAABgAhGgGIAAABAiGgIQgBAAAAgBQgFgFgDAAQgCAAgBACQgBACAAADIABAHIACAOQgCAOAAAGQAAAEAAABQAAAEAAADQAAAFABADAiGgIQAAAAAAAAQACgCACgDQACAFAAABQAAABAAAAQAAACAAAAQgBACAAACQAAACgBADQgBALAAAEQAAABAAAAQAAAHAAAFQABAGABAGIAAAAQAAACAAABQACAHAEAOIAAAAQABAAAAABQAAABABABQAAABAAAAQAAABAAAAQABAAgBAAQABABAAABQACAFAGAFAh0gFIAAABIgBAAQAAAAABgBgAiCgNQACgDACgEQAGgLAEgMQABgEABgEQACgJAAgKAiDAUQgBgCgCgDQgFAPAAAEIAEAPAiGAPQgDgGgJgJAhqACQgHADgBACAiBAAQgBgEgEgEAh5gRIAJAJAhFgFQAFgBABADQAAAAAAAAIABABQABACABABQACAFAAADAgyA1QACgBATAGAg5A6QAEgEADgBQAFgNAAgPQAAgIgCgJQAAgBAAgBQgBgFgCgFAAgAIQAAACgBABQgBABgCAAQgBAAgBgBQgBgBAAgCQAAgBABgBQABgBABAAQACAAABABQABABAAABgAAMACQACgBACgBQAEAAADAAQAGAAAMABAAAALQALgGAFgEAh4g5QAFgHADgGAACBvQAEABABACAgjBGQADAAAHAAQAAAAAAAAQADgCADACAgEB5QgJAFgHAHQgHAJgOgBQgOAAgGgHQgFgGgFgGQgEgFgIgFQANAAAJgFQADgBAGAAQACAAAFACQAFACACAAQADAAADgCQADgBACAAQAEAAAFAEQADACALAIQAEgBADgCAhIB0IAGgBQAFAAAJAGQAIAGAHAAQADAAAQgGAhUBrIgGABAiQA4QAAACABACQAEAIAMAIQgCgPAAgQ");
	this.shape_14.setTransform(16.725,18.826);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF5858").s().p("AACASQgNgBgGgGIgKgLQgEgGgIgEQANgBAJgEQADgCAGAAIAHACIAGACQADAAADgBIAFgCQAEAAAFAEIAPALQgKAEgHAHQgHAIgNAAIgBAAgAgIgBQAIAEAGAAQADAAAQgFQgQAFgDAAQgGAAgIgEQgJgGgFAAIgGABIAGgBQAFAAAJAGg");
	this.shape_15.setTransform(12.3125,31.1761);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6D6D41").s().p("AAYAQIgDgGQAHgBALgEQAKgEAHAAQASAAAQALQgKgEgJAAIgEAAIgDAAQgKAAgLAEIgJAEIgBAAIgFABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAgnAJIgBAAIgLgJQgMgKgLgCIgBAAIgBgBIgBAAIgCAAQgEAAgGAFIADgEIAFgEIAIAAIAAAAQAJAAAFACQAGACAIAFIAQAKQAFAEAAACQAAAAAAAAQAAABAAAAQgBAAAAABQgBAAgBAAIgEABQgDABgFgEg");
	this.shape_16.setTransform(14.625,15.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C6C647").s().p("AhbBYIABgHQAEgYAKgbQATgxAhgNIABABIAAgBIAAgDQAAgMAJgKQAFgGAGgEIAGgGQAYgQAXAAIACAAIACAFQgKAAgWAPIgPANIAAAAIgIAJIAAABQABgFALgEIAMgFIABAAQgMALgDAIIAPgIIAHgEIAHgDIABAAQgKAIgKAZQAFgBANgOIAGAJIADABIABABIAFAAQAGAAAEgCIAHgFIABgBIgCADIgCADQAAAEAFACQAEACADAAQAEAAAKgEIgUAMIAAgEIABgDQgGADgFABIgEAAIgHgBQgFgCAAgBIABgGQgJACgKAFQgHACgGAAIgCAAQgJAAgCgGIAAgHIgGAJQgBAAgEgHQgNAXgHANIABgEQAFgMAAgTIAAgEIAAAEQAAATgFAMIgBAEIgJATIgIANIAIgNQAAAKgCAJIgCAIQgEAMgGALIgEAHIgEAFIAAAAIgBgBQgFgFgDAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgBABAAAAIgBAFg");
	this.shape_17.setTransform(9.3375,9.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D0D05D").s().p("AgFAbIgBgCQgEgLAAgVIACgXIAAgBIARACIAAAHIACAPIgCATIAAAFIAAAHIACAIQgJgCgHgDg");
	this.shape_18.setTransform(1.1,21.0375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFF99").s().p("ABCBdQgJgEgFAAIgBgFQgCgYgGgTQgNgpghgNIgCgBIgDAAQgQAAgKgCIAAgBQAAgDAIgLIAAgBIgBAAQgJAEgEAAQgEAAgEgCQgEgCAAgEIABgDIACgDIgBABIgGAFQgEACgHAAIgFAAIAAAAIgDgCIgHgJQgNAOgFABQAKgZAKgIIgBAAIgGADIgIAEIgOAIQACgIAMgLIgBAAIgMAFQgLAEgCAFIAAgBIAKgJIAAAAIAPgNQAVgPAKAAQADAAADACQgDgCgDAAIgBgFIAfAFIgTAFIATgFIAEgBQAzABArAgQAYAUAKAbIANAhQAJAXADAkIgCACQgVAPgRAAQgHAAgJgEg");
	this.shape_19.setTransform(21.275,9.7125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#52C67C").s().p("AAwANQgEgDAAgFQAAgEADgDIAAAAIAHgBIABAAIABAAIACABIAAAAIAIABIACABIAAAAQABACAAADQAAAFgEADQgDAEgFAAQgFAAgEgEgAA2ACIgBACIABADIADABIACgBIABgDIgBgCIgCgBIgDABgAhAAAQgEgCAAgGQAAgEADgEIAEAAIADAAIABAAIAAAAIADABIAEABIAHAEIACABIABABQAAAGgEACQgEAEgGAAQgGAAgEgEgAg4gJIgBACIABADIACABIADgBIABgDIgBgCIgDgBIgCABg");
	this.shape_20.setTransform(13.875,19.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AApAOQgLgGgEgEIAAAAIARgJIAAAAIABAAQgCAEAAADQAAAFADADQAFAEAEAAQAFAAAEgEQAEgDAAgFQAAgCgCgDIAAAAIAFABIAAAAIADABQAHACAIAFIgBABIgLAHQgLAGgJAAQgEAAgLgGgAgpADIgRACQgJAAgGgEIgCgBIgFgEIgDgGIgDABIgBgEIAJgEIAJgCIACAAQgEAEAAAEQAAAGAFADQADADAHAAQAGAAAEgDQADgDABgGIADACQADAEADAFIACACIgBADIgJgCg");
	this.shape_21.setTransform(14.1,19.5125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AA1AIIgBgCIABgCIADgCIACACIABACIgBACIgCABIgDgBgAg5gCIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg");
	this.shape_22.setTransform(13.975,19.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFE0A6").s().p("AgdCXIgLgBQgLgCgJgFIgBAAIAIAAQAEABgJgEIAAAAQgIgFgJgQIgMgYIgEgHIAAgBIAAgBQgJgTgCgSIAAgBIgEgjQgDgZAQgPIACgDIABABQAHAEAJAAIARgCIAJACIAAgDIgCgHIgCgFIgBAAIAAAAIAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgBAAIAAAAIgCAAIAAAAIgBgBQgFgEgIgCIgCAAIgBAAIAAAAIgHgCQgIgDgEgCIAQgFIAAAAIAOADIgOgDQgBgEgIgJIAAgIIABAAIABAAIABAAQALACAMALIALAJIABABQAFADADAAIAEgBQABAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgCgFgDIgQgLQgIgGgGgCQgFgCgJAAIAAAAIABgDQAGgfAVgZIAFACQAHADAEAAQACAAAEgFQAEgFAEAAIAHADQAGADADAAQAHAAADgDQAEAIABAAIAHgCIAjAKIAOADQAMADAEAGIAUAdIACAEQAGASACAYIAAAFIABAGQgBAYgEAOIgDALIAAAAQgFAJgKALQgOAPgKAFIACAAQAGAAAAAHQgEARgMAVIgEAIQgKAJgNAKQghAXgVAAIgBAAgAgzBGQgJAEgNABQAIAEAEAGIAKAMQAGAHAOAAQAOAAAHgIQAHgHAIgFIAIgDIgIADIgNgLQgFgEgEAAIgFACQgDABgDAAIgHgCIgHgCQgGAAgDACgAARBNQgBgCgEgCQAEACABACgAhQBGIAGgBgAg0AeQAEAAADAIIAEACQAFADAFAAIAJgBIANgKQgDgBgDABIAAAAIgKAAIgFAAQgDAAgGgCQgFgDgDAAgAgTAUIgCAAIgFgCIgDAAIgBgBIgBAAIgEgBIAAAAIgCAAIgCAAIAAAAIAAAAIgBAAIAAAAQAFgOAAgOIgCgRIAAgBIgDgLIADALIAAABIACARQAAAOgFAOIAAAAIABAAIAAAAIAAAAIACAAIACAAIAAAAIAEABIABAAIABABIADAAIAFACIACAAgAgvAUQAEgDADgBQgDABgEADgAAZgPQALAFAEAAQAJAAAKgGIAMgGQABAAAFAFQgFgFgBAAIAAgCIgBgDIADgBIADgDIgBAAIgGACIgFAAQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAIgCgCQADAAADgCIAEgEIgEAEQgDgGgGgDQAGADADAGQgDACgDAAQgCgCgDAAIgBAAIAAAAIgBAAIgCAAQgMgDgGAAIgHACIgEACIgBAAIgGAEIgFAEIAAABIgCAAIgDAAIALgRIAJgDIAGgBIALAAIgLAAIgGABIgJADIgLARIADAAIACAAQAEAEALAGgAAchAQgLAFgHAAIADAGQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAIAFgBIABAAIAJgDQALgEAKgBIADAAIAEAAQAJABAKAEQgQgMgSAAQgHAAgKAEgAgoAQIAAAAgAgxgfQgDgFgDgDIgDgDIgBAAIAAAAIACAAIAAAAIABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABIAAAAIAAAAIABAAIACAFIACAHIgBgDgAA5gfIgDgBIAAAAIgFgCIgBAAIgIgCIgBAAIgBAAIgCAAIAAAAIgHAAIgBAAIgBABIgBAAIgEABIAEgCIAHgCQAGAAAMADIACAAIABAAIAAAAIABAAQADAAACACIACACIgDAAIgCAAgAA8ghIAAAAIAAAAIgJgCIAJACgAA+gfIAAAAgABCgjIAAAAgAhPg9IAAAAg");
	this.shape_23.setTransform(15.7314,22.551);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E0AE71").s().p("AgiCbIgIgBIgCgBIgDgCIgLgJIgFgFIgFgFQgEgFgGgNIgKgTQgEgGgDgPIgDgUIAAgDQgCgQAAgPQAAAPACAQQgMgIgEgJIgBgEIgBgBIgBgIIAAgIIAAgEIACgTIgCgPQAJAKADAGQgFAOAAADIAEAQIgEgQQAAgDAFgOQgDgGgJgKIgBgHIABgGQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAQADAAAFAFIABABIAFAHIgBAHIgBAPIgDgFIADAFIAAABIAAALIACALIAAABIAAgBIgCgLIAAgLIAAgBIABgPIABgHIABgDIAAgCIAAgBQAAgCgCgEIAEgIQAGgLAEgLIACgIQACgKAAgKIAJgTQAHgNANgXQAEAHABAAIAHgKIAAAIQACAFAJABIACAAQAGAAAHgDQAKgEAIgCIgBAFQAAACAFABIAHACIAEgBQAFgBAGgCIgBADIAAADIAUgLIABgBIAAABQgIALgBAEIAAAAQAKACARABIACAAIADABQAhANAOApIgCgDIgUgdQgEgGgMgDIgOgDIgjgKIgHACQgBAAgFgIQgDADgHAAQgDAAgFgDIgHgDQgEAAgEAFQgEAFgCAAQgEAAgHgDIgFgCIgIgCIAIACQgVAZgGAfIgBADIgIABIgFAEIgDADQAGgEAEAAIACAAIAAAIQAIAJABAEIAAAAIgQAFIgDgDIgBgBIAFAJIgIAFIgJgIIAJAIIAAAAIgBABIAAAAIgBAAIgCADIgBAAIABAAIAAAAIACgBIABAAIAAAAIABADIADAAIADAFIAFAFIgCADQgQAOADAZIAEAkQgGgFgCgEIgBgCIAAAAIAAgBIAAAAIAAgBIgBgDIgBgBIAAAAIgGgUIAAgDIAAADIAGAUIAAAAIABABIABADIAAABIAAAAIAAABIAAAAIABACQACAEAGAFIAAAAQACATAJATIAAABIAAAAIAEAIIAMAXQAJARAIAEIAAABIAGADIgBAAgAhVgSQABgBAHgEQgHAEgBABgABIBxQAMgWAEgQQAAgHgGAAIgCAAQAKgFAOgPQAKgLAFgJIAAgBIAAABIgLAdIgKAXIgJAQQgFAJgKAKIgGAGIAEgIgAgWA0IgEgDQgDgHgEgBIAFgCQADAAAFADQAGACADAAIAFAAIAJAAIAAAAQADgBADABIgMAKIgJABQgFAAgFgDgAhmgEIAAAAgAh1gZIAAAAg");
	this.shape_24.setTransform(13.8375,21.385);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#D0D05D").ss(0.5,1,1).p("AAPgdQgEgCgCAAQgJAAgWAQQgJAGgGAGIAAAAQgGAEgDAEIAAABQACgEALgEQAFgCAHgCIABAAQgMAKgDAIQADgCAMgGQAEgDADgBQAFgCACAAIABAAQgKAGgKAaQAFgCANgNQADAEADAEQABABABABQABAAAAAAQACABADAAQAGAAAEgCQACgCAFgEIABgBQgBABgBADQgCACAAABQAAADAFADQAEACADAAQAEAAAKgE");
	this.shape_25.setTransform(13.8125,3.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#E0AE71").ss(0.5,1,1).p("Ag4iLQACABADABQAIADAEAAQACAAADgFQAEgFAFAAQABAAAGADQAFADAEAAQAHAAACgDQAFAIABAAQACAAAFgCIAiAKQADABAMACQALADAEAGQAIALAMASQABABABACQAGATACAYAA5gmQAGADADAGAhAiNQAEAAAEACQgVAZgGAfAhPg3QAOADABAAAhPg3IABAAAhXhEQAHAJABAEAhdgVQgQAOADAZQADAbABAJIAAAAQACANAFANQACAGACAGQAAAAABABQAAAAAAAAQAAABADAHQADAGAJARQAJARAIAEAARgkQAEgDAFgBQACAAADAAQAEAAAHAAAgJAmQgKAJgDABQgCABgGAAQgFAAgGgDQgCgCgCgBQgCgHgFgBIAGgCQACAAAGADQAFACADAAQABAAAEAAAA9A+QABAAABAAQAHAAAAAHQgFAQgLAW");
	this.shape_26.setTransform(15.6939,21.9875);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(0.5,1,1).p("AAOi3QA0ABAqAgQAZAUAJAbQAIAUAGAOQAJAXACAkABZgxQgOgpghgOQgBAAgCgBQgBAAgBAAQgQAAgLgCIAAgBQABgDAIgLIAAgBIgBAAIgTAMIAAgEIABgDQgGADgFABQgCAAgCAAQgCAAgFgBQgFgCAAgBQAAgEABgCQgJACgKAFQgHACgGAAQgBAAgBAAQgIAAgDgGQAAgBAAgGIgHAJQgBAAgEgHQgNAXgHAOQABgCAAgCQAFgPAAgVIAAgBIAAgDQAAgMAJgLQAFgFAGgFQADgCAEgDQAYgQAXAAQABAAABAAQAHABAYAEQACAAACgBABFgTQgQgLgSAAQgHAAgKAEQgLAEgHABQACADABACQABACADAAQABAAAEgCIABAAQADgBAGgCQALgEAKgBQACAAABAAQABAAABAAQABAAABAAQAJABAKAEgAAAALQAEAEALAGQALAGAEAAQAJAAAKgGQALgHABAAQABAAAFAFAA9ALQADAAABgEQgBABgBABIgDABQAAABABAAQAAABAAAAQAAAAgBgBQgHgEgGgCQABAAABABAA4ABQgDACgDAAQABABABABQADAAgBACQADABACAAQACAAAEgCIABAAQgBABAAAAAA8ALQAAAAABAAAAzBdQAKgFAOgPQAKgLAFgJQAAAAAAAAAh/BPQABAGACAOQADAPAEAHQAEAHAGAMQAGAMAEAFQACADADACQACADADADQAGAFAFAEQACABABABQABAAABABQABAAAAABQAJAEALACQAFABAGAAQAWABAhgYQANgJAKgJQADgDADgDQAKgKAFgJQAFgIAEgJQAFgLAFgMQAIgVADgHQAAgBAAAAQACgFABgGQAEgPABgXQAAgDgBgDQAAgCAAgDAgJixQANgEAGgBQACgBABAAQAAAAABAAAhhiCQAAAAgBAAQggANgUAyQgKAbgEAYQAAAEgBADQAAAAAAABQgBALAAALQAAAWADALAhwhGQAGgLADgIAhugpQACgCABgBQAEgDABgBQABAAAHAAIAAAAQAJAAAFACQAGABAIAGQAFAEALAHQAFAEAAABQAAACgDABQgCABgCAAQgDAAgFgDQgBAAAAgBQgFgDgGgGQgMgLgLgCIgBAAQAAAAgBAAQAAAAgBAAQgBAAgBAAQgEAAgGAEgAhwgCIADgBQABADACACQgHADgBACAhugKQADACAEADQAJAGAGACQAEABAMACQAJABAFADQAAAAAAgBQgBgCAAgBQgDgFgDgDQgCgBgBgCQAAAAgBAAQAAAAgBgBIAAABQABAAABABQABABACABAiGgIQgBAAAAgBQgFgFgDAAQgCAAgBACQgBACAAADIABAHIACAOQgCAOAAAGQAAAEAAABQAAAEAAADQAAAFABADAiGgIIAAAAQACgCACgDQACAFAAABQAAABAAAAQAAACAAAAQgBACAAACQAAACgBADQgBALAAAEQAAABAAAAQAAAHAAAFQABAGABAGIAAAAQAAACAAABQACAHAEAOIAAAAQABAAAAABQAAABABABQAAABAAAAQAAABAAAAIAAAAQABABAAABQACAFAGAFAiCgNQACgDACgEQAGgLAEgMQABgEABgEQACgJAAgKAiDAUQgBgCgCgDQgFAPAAAEIAEAPAiGAPQgDgGgJgJAhqACQACACADACQABABAAAAQAHAFAJAAIARgCQADAAAGACQAAgBAAgBAiBAAQgBgEgEgEAhFgFQAFgBABADQAAAAAAAAIABABQABACABABQACAFAAADAgyA1QAFgNAAgPQAAgIgCgJQAAgBAAgBQgBgFgCgFAg5A6QAEgEADgBQACgBATAGAAMACIgBABQgCABgEACQgCACgDADIAAAAQgBABgDgBQAEgGAGgJAADAJQANAMAOAAQAPAAAPgKAh4g5QAFgHADgGAACBvQADABABABAgjBGQADAAAHAAIAAAAQADgCADACAhKB2QgEgDgFgDQANAAAJgFQADgBAGAAQACAAAFACQAFACACAAQADAAADgCQADgBACAAQAEAAAFAEQADACALAIAhKB2IAIgDQAFAAAJAGQAIAGAHAAQADAAAQgGAhKB2QACACABACQAFAGAFAGQAGAHAOAAQAOABAHgJQAHgHAJgFQAEgBADgCAhUBrIgGABAiQA4QAAACABACQAEAIAMAIQgCgPAAgQ");
	this.shape_27.setTransform(16.725,18.826);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF5858").s().p("AACASQgNgBgGgGIgKgLIgDgEIAIgDQAFAAAJAGQAIAEAGAAQADAAAQgFQgQAFgDAAQgGAAgIgEQgJgGgFAAIgIADIgJgGQANgBAJgEQADgCAGAAIAHACIAGACQADAAADgBIAFgCQAEAAAFAEIAPALQgKAEgHAHQgHAIgNAAIgBAAg");
	this.shape_28.setTransform(12.3125,31.1761);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AArANQgLgGgEgEIAAAAIADgCQANAMAOAAQAPAAAPgKIABADIgMAHQgKAGgJAAQgEAAgLgGgAgnACIgRACQgJAAgGgEIgCAAIgFgFIgDgGIgDABIgBgEIAAAAIgBAAIgCABIACgCIABAAIAAgBIABAAIAAAAIACgCIAHAFQAJAHAGACIAQADQAJABAFACIAAACIgJgCg");
	this.shape_29.setTransform(13.925,19.625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6D6D41").s().p("AAYAQIgDgGQAHgBALgEQAKgEAHAAQASAAAQALQgKgEgJAAIgCAAIgCAAIgDAAQgKAAgLAEIgJAEIgBAAIgFABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAgnAJIgBAAIgLgJQgMgKgLgCIgBAAIgBgBIgBAAIgCAAQgEAAgGAFIADgEIAFgEIAIAAIAAAAQAJAAAFACQAGACAIAFIAQAKQAFAEAAACQAAAAAAAAQAAABAAAAQgBAAAAABQgBAAgBAAIgEABQgDABgFgEg");
	this.shape_30.setTransform(14.625,15.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFE0A6").s().p("AgdCXIgLgBQgLgCgJgFIgBAAIAIAAQAEABgJgEIAAAAQgIgFgJgQIgMgYIgEgHIAAgBIAAgBIgFgLQgEgNgCgNIAAgBIgEgjQgDgZAQgPIACgDIABABQAHAEAJAAIARgCIAJACIAAgBQgFgDgJgCIgQgDQgGgCgJgGIgHgFIAGgEIgFgJIABABIADADIAQgFIAAAAIAOADIgOgDQgBgEgIgJIAAgIIABAAIABAAIABAAQALACAMALIALAJIABABQAFADADAAIAEgBQABAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgCgFgDIgQgLQgIgGgGgCQgFgCgJAAIAAAAIABgDQAGgfAVgZIAFACQAHADAEAAQACAAAEgFQAEgFAEAAIAHADQAGADADAAQAHAAADgDQAEAIABAAIAHgCIAjAKIAOADQAMADAEAGIAUAdIACAEQAGASACAYIAAAFIABAGQgBAYgEAOIgDALIAAAAQgFAJgKALQgOAPgKAFIACAAQAGAAAAAHQgEARgMAVIgEAIQgKAJgNAKQghAXgVAAIgBAAgAgzBGQgJAEgNABIAJAGIADAEIAKAMQAGAHAOAAQAOAAAHgIQAHgHAIgFIgNgLQgFgEgEAAIgFACQgDABgDAAIgHgCIgHgCQgGAAgDACgAAFBUIAIgDIgIADgAAQBMQgBgBgDgCQADACABABgAhQBGIAGgBgAg0AeQAEAAADAIIAEACQAFADAFAAIAJgBIANgKQgDgBgDABIAAAAIgKAAIgFAAQgDAAgGgCQgFgDgDAAgAgTAUIgCAAIgFgCIgDAAIgBgBIgBAAIgEgBIAAAAIgCAAIgCAAIAAAAIAAAAIgBAAIAAAAQgDABgEADQAEgDADgBIAAAAIABAAIAAAAIAAAAIACAAIACAAIAAAAIAEABIABAAIABABIADAAIAFACIACAAgAgoAQQAFgOAAgOIgCgRIAAgBIgDgLIADALIAAABIACARQAAAOgFAOgAAWgiIgBAAIgGAEIgFAEIAAABQAEAEALAGQALAFAEAAQAJAAAKgGIAMgGQABAAAFAFQgFgFgBAAIgBgDIABABIAAgBQADgBABgDIABgCIgBAAIgGACIgFAAQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAIgCgCQADAAADgCQgDgGgGgDQAGADADAGQgDACgDAAIACACIgDAAIgCAAIANAGQgPAJgPABQgOAAgNgMIANgIIgEABgAAKgZIgCAAIgDAAIALgRIAJgDIAGgBIALAAIgLAAIgGABIgJADIgLARIADAAIACAAgAgwgaIAAgCIgCgHIgCgFIgBAAIAAAAIAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgBAAIAAAAIgCAAIAAAAIgBgBIAAAAIACABIADADQADADADAFIABADIAAACgAAchAQgLAFgHAAIADAGQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAIAFgBIABAAIAJgDQALgEAKgBIADAAIACAAIACAAQAJABAKAEQgQgMgSAAQgHAAgKAEgABGgbIADgBIACgBQgBADgDABIgBgCgAgwgcIAAAAgAgxgfQgDgFgDgDIgDgDIgBAAIAAAAIACAAIAAAAIABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABIAAAAIAAAAIABAAIACAFIACAHIgBgDgABLgdIAAAAgAA+gfIAAAAgABCgjIAAAAg");
	this.shape_31.setTransform(15.7314,22.551);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E0AE71").s().p("AgiCbIgIgBIgCgBIgDgCIgLgJIgFgFIgFgFQgEgFgGgNIgKgTQgEgGgDgPIgDgUIAAgDQgCgQAAgPQAAAPACAQQgMgIgEgJIgBgEIgBgBIgBgIIAAgIIAAgEIACgTIgCgPQAJAKADAGQgFAOAAADIAEAQIgEgQQAAgDAFgOQgDgGgJgKIgBgHIABgGQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAQADAAAFAFIABABIAFAHIgBAHIgBAPIgDgFIADAFIAAABIAAALIACALIAAABIAAgBIgCgLIAAgLIAAgBIABgPIABgHIABgDIAAgCIAAgBQAAgCgCgEIAEgIQAGgLAEgLIACgIQACgKAAgKIAJgTQAHgNANgXQAEAHABAAIAHgKIAAAIQACAFAJABIACAAQAGAAAHgDQAKgEAIgCIgBAFQAAACAFABIAHACIAEgBQAFgBAGgCIgBADIAAADIAUgLIABgBIAAABQgIALgBAEIAAAAQAKACARABIACAAIADABQAhANAOApIgCgDIgUgdQgEgGgMgDIgOgDIgjgKIgHACQgBAAgFgIQgDADgHAAQgDAAgFgDIgHgDQgEAAgEAFQgEAFgCAAQgEAAgHgDIgFgCIgIgCIAIACQgVAZgGAfIgBADIgIABIgFAEIgDADQAGgEAEAAIACAAIAAAIQAIAJABAEIAAAAIgQAFIgDgDIgBgBIAFAJIgGAEIgCABIAAAAIgBABIAAAAIgBAAIgCADIACgBIABAAIAAAAIABADIADAAIADAFIAFAFIgCADQgQAOADAZIAEAkQgGgFgCgEIgBgCIAAgBIAAAAIAAgBIgBgDIgBgBIAAAAIgGgUIAAgDIAAADIAGAUIAAAAIABABIABADIAAABIAAAAIAAABIABACQACAEAGAFIAAAAQACANAEANIAFAMIAAABIAAAAIAEAIIAMAXQAJARAIAEIAAABIAGADIgBAAgAhVgSQABgBAHgEQgHAEgBABgAhYgeIABAAIAAAAIgBAAgABIBxQAMgWAEgQQAAgHgGAAIgCAAQAKgFAOgPQAKgLAFgJIAAgBIAAABIgLAdIgKAXIgJAQQgFAJgKAKIgGAGIAEgIgAgWA0IgEgDQgDgHgEgBIAFgCQADAAAFADQAGACADAAIAFAAIAJAAIAAAAQADgBADABIgMAKIgJABQgFAAgFgDgAhmgEIAAAAgAh1gZIAAAAg");
	this.shape_32.setTransform(13.8375,21.385);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#E0AE71").ss(0.5,1,1).p("Ag4iLQACABADABQAIADAEAAQACAAADgFQAEgFAFAAQABAAAGADQAFADAEAAQAHAAACgDQAFAIABAAQACAAAFgCIAiAKQADABAMACQALADAEAGQAIALAMASQABABABACQAGATACAYAA5gmQAGADADAGAhAiNQAEAAAEACQgVAZgGAfAhPg3IABAAAhPg3QAOADABAAAhXhEQAHAJABAEAhdgVQgQAOADAZQADAbABAJIAAAAQADATAIATQAAAAABABQAAAAAAAAQAAABADAHQADAGAJARQAJARAIAEAARgkQAEgDAFgBQACAAADAAQAEAAAHAAAgJAmQgKAJgDABQgCABgGAAQgFAAgGgDQgCgCgCgBQgCgHgFgBIAGgCQACAAAGADQAFACADAAQABAAAEAAAA9A+QABAAABAAQAHAAAAAHQgFAQgLAW");
	this.shape_33.setTransform(15.6939,21.9875);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(0.5,1,1).p("AAOi3QA0ABAqAgQAZAUAJAbQAIAUAGAOQAJAXACAkABZgxQgOgpghgOQgBAAgCgBQgBAAgBAAQgQAAgLgCIAAgBQABgDAIgLIAAgBIgBAAIgTAMIAAgEIABgDQgGADgFABQgCAAgCAAQgCAAgFgBQgFgCAAgBQAAgEABgCQgJACgKAFQgHACgGAAQgBAAgBAAQgIAAgDgGQAAgBAAgGIgHAJQgBAAgEgHQgNAXgHAOQABgCAAgCQAFgPAAgVIAAgBIAAgDQAAgMAJgLQAFgFAGgFQADgCAEgDQAYgQAXAAQABAAABAAQAHABAYAEQACAAACgBABFgTQgQgLgSAAQgHAAgKAEQgLAEgHABQACADABACQABACADAAQABAAAEgCIABAAQADgBAGgCQALgEAKgBQACAAABAAQACAAACAAQAJABAKAEgAAAALQAEAEALAGQALAGAEAAQAJAAAKgGQALgHABAAQABAAAFAFAA2AHQADABACAAQACAAAEgCIABAAQgBACgCABIgDABQAAABABABQgHgEgHgDQgCAAgBgBQAAAAAAAAQgDgBgCAAAAyADQADAAADgCQACgBACgBAApABQAEABAFABIAAAAQABABABABAAxAGQACAAABgBQADAAgBACAAxAGQADABACAAAASABIABAAQACgBAFAAIAAAAQABAAABAAIABABIABAAQADAAAFABQAAAAABABIAAAAQACADAAADQAAAFgEADQgEAEgFAAQgFAAgEgEQgDgDAAgFQAAgEACgEQAAAAgBAAQAAAAgBAAQgCABgCAAIgBABQgCABgEACQgCACgDADIAAAAQgBABgDgBQAEgGAGgJAAvAFQABAAABABAApABQAGgBADADAAzBdQAKgFAOgPQAKgLAFgJQAAAAAAAAAh/BPQABAGACAOQADAPAEAHQAEAHAGAMQAGAMAEAFQACADADACQACADADADQAGAFAFAEQACABABABQABAAABABQABAAAAABQAJAEALACQAFABAGAAQAWABAhgYQANgJAKgJQADgDADgDQAKgKAFgJQAFgIAEgJQAFgLAFgMQAIgVADgHQAAgBAAAAQACgFABgGQAEgPABgXQAAgDgBgDQAAgCAAgDAgJixQANgEAGgBQACgBABAAQAAAAABAAAhhiCQAAAAgBAAQggANgUAyQgKAbgEAYQAAAEgBADQAAAAAAABQgBALAAALQAAAWADALAhwhGQAGgLADgIAhugpQACgCABgBQAEgDABgBQABAAAHAAIAAAAQAJAAAFACQAGABAIAGQAFAEALAHQAFAEAAABQAAACgDABQgCABgCAAQgDAAgFgDQgBAAAAgBQgFgDgGgGQgMgLgLgCIgBAAQAAAAgBAAQAAAAgBAAQgBAAgBAAQgEAAgGAEgAhpgTQgCgBgBgCIgBAAQAEAHABABQgEADgEADQAAAAAAAAIgBAAQAAABAAAAIgBAAQgBABgBABQABAAABgBQAAAAABAAIAAAAQAEgBAFgDQAEgBAFgBQABgBAAAAQABgBAAAAQgIgCgEgDQABAAAPgEAhwgCIADgBQABADACACQACACADACQABABAAAAQAHAFAJAAIARgCQADAAAGACQAAgBAAgCQgBgCAAgBQgDgFgDgDAhEgEQgBAFgEADQgEAEgGAAQgGAAgEgEQgEgDAAgFQAAgEADgEQACAAACAAQACAAACAAQgEgBgDgBAhfgMQABAAAAAAAhTgLQACAAADABQADACAEACQAAAAABABQABAAABABQABABACABQgCgBgBgCQAAAAgBAAQAAAAgBgBQgFgEgIgBQgBgBgBAAIgBAAIAAAAAhPgDQAAACgBABQgBAAgBAAQgCAAgBAAQgBgBAAgCQAAgBABgBQABgBACAAQABAAABABQABABAAABgAhGgGIAAABAiGgIQgBAAAAgBQgFgFgDAAQgCAAgBACQgBACAAADIABAHIACAOQgCAOAAAGQAAAEAAABQAAAEAAADQAAAFABADAiGgIIAAAAQACgCACgDQACAFAAABQAAABAAAAQAAACAAAAQgBACAAACQAAACgBADQgBALAAAEQAAABAAAAQAAAHAAAFQABAGABAGIAAAAQAAACAAABQACAHAEAOIAAAAQABAAAAABQAAABABABQAAABAAAAQAAABAAAAIAAAAQABABAAABQACAFAGAFAh0gFIAAABIgBAAQAAAAABgBgAiCgNQACgDACgEQAGgLAEgMQABgEABgEQACgJAAgKAiDAUQgBgCgCgDQgFAPAAAEIAEAPAiGAPQgDgGgJgJAhqACQgHADgBACAiBAAQgBgEgEgEAh5gRIAJAJAhFgFQAFgBABADQAAAAAAAAIABABQABACABABQACAFAAADAgyA1QACgBATAGAg5A6QAEgEADgBQAFgNAAgPQAAgIgCgJQAAgBAAgBQgBgFgCgFAAgAIQAAACgBABQgBABgCAAQgBAAgBgBQgBgBAAgCQAAgBABgBQABgBABAAQACAAABABQABABAAABgAAMACQACgBACgBQAEAAADAAQAGAAAMABAAAALQALgGAFgEAh4g5QAFgHADgGAACBvQAEABABACAgjBGQADAAAHAAIAAAAQADgCADACAgEB5QgJAFgHAHQgHAJgOgBQgOAAgGgHQgFgGgFgGQgEgFgIgFQANAAAJgFQADgBAGAAQACAAAFACQAFACACAAQADAAADgCQADgBACAAQAEAAAFAEQADACALAIQAEgBADgCAhIB0IAGgBQAFAAAJAGQAIAGAHAAQADAAAQgGAhUBrIgGABAiQA4QAAACABACQAEAIAMAIQgCgPAAgQ");
	this.shape_34.setTransform(16.725,18.826);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E0AE71").s().p("AgiCbIgIgBIgCgBIgDgCIgLgJIgFgFIgFgFQgEgFgGgNIgKgTQgEgGgDgPIgDgUIAAgDQgCgQAAgPQAAAPACAQQgMgIgEgJIgBgEIgBgBIgBgIIAAgIIAAgEIACgTIgCgPQAJAKADAGQgFAOAAADIAEAQIgEgQQAAgDAFgOQgDgGgJgKIgBgHIABgGQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAQADAAAFAFIABABIAFAHIgBAHIgBAPIgDgFIADAFIAAABIAAALIACALIAAABIAAgBIgCgLIAAgLIAAgBIABgPIABgHIABgDIAAgCIAAgBQAAgCgCgEIAEgIQAGgLAEgLIACgIQACgKAAgKIAJgTQAHgNANgXQAEAHABAAIAHgKIAAAIQACAFAJABIACAAQAGAAAHgDQAKgEAIgCIgBAFQAAACAFABIAHACIAEgBQAFgBAGgCIgBADIAAADIAUgLIABgBIAAABQgIALgBAEIAAAAQAKACARABIACAAIADABQAhANAOApIgCgDIgUgdQgEgGgMgDIgOgDIgjgKIgHACQgBAAgFgIQgDADgHAAQgDAAgFgDIgHgDQgEAAgEAFQgEAFgCAAQgEAAgHgDIgFgCIgIgCIAIACQgVAZgGAfIgBADIgIABIgFAEIgDADQAGgEAEAAIACAAIAAAIQAIAJABAEIAAAAIgQAFIgDgDIgBgBIAFAJIgIAFIgJgIIAJAIIAAAAIgBABIAAAAIgBAAIgCADIgBAAIABAAIAAAAIACgBIABAAIAAAAIABADIADAAIADAFIAFAFIgCADQgQAOADAZIAEAkQgGgFgCgEIgBgCIAAgBIAAAAIAAgBIgBgDIgBgBIAAAAIgGgUIAAgDIAAADIAGAUIAAAAIABABIABADIAAABIAAAAIAAABIABACQACAEAGAFIAAAAQACATAJATIAAABIAAAAIAEAIIAMAXQAJARAIAEIAAABIAGADIgBAAgAhVgSQABgBAHgEQgHAEgBABgABIBxQAMgWAEgQQAAgHgGAAIgCAAQAKgFAOgPQAKgLAFgJIAAgBIAAABIgLAdIgKAXIgJAQQgFAJgKAKIgGAGIAEgIgAgWA0IgEgDQgDgHgEgBIAFgCQADAAAFADQAGACADAAIAFAAIAJAAIAAAAQADgBADABIgMAKIgJABQgFAAgFgDgAhmgEIAAAAgAh1gZIAAAAg");
	this.shape_35.setTransform(13.8375,21.385);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_19},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_17},{t:this.shape_29},{t:this.shape_18},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},14).to({state:[{t:this.shape_19},{t:this.shape_35},{t:this.shape_23},{t:this.shape_16},{t:this.shape_21},{t:this.shape_20},{t:this.shape_17},{t:this.shape_22},{t:this.shape_18},{t:this.shape_15},{t:this.shape_34},{t:this.shape_33},{t:this.shape_25}]},3).wait(103));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,35.5,39.7);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663232").ss(0.5,1,1).p("AgPgLQAEgJAHAAQADAAADACAgHAAQAFAAABAAQgBABAAACQgBABgBABAgEgJQgKACAAAHQAAADAEAFQAEAEAEAAQADAAADgEQAEgEAAgEQAAgEgDgCAAAAVQgFABgFgHAAPAGQABgEAAAAQAAgBAAgCAADABQgEAAAAgB");
	this.shape.setTransform(1.675,2.9768);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#F77171","rgba(255,224,166,0)"],[0.62,1],0,0,0,0,0,5).s().p("AgeAhQgMgOAAgTQAAgTAMgNQANgOARgBQASABAMAOQANANAAATQAAATgNAOQgMAPgSAAQgRAAgNgPg");
	this.shape_1.setTransform(2.1,2.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-1.8,8.600000000000001,9.5);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E0AE71").ss(0.5,1,1).p("ACnjAQgJgFgWgFQgagHgMgBQgZgCgSAWQAAABAKBJQAJA+ARAlAimDDIBrAQ");
	this.shape.setTransform(14.475,21.5167);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("ACni7QgPgJgPgGQgbgLgZgCQgDAAgDAAQgRAAgTARQgZAWgaA0QgwBbgFAJQgEAIgUAlQgUAngEAIQgBABgCAFQgIAOgWAoQgNAXgGASQgDAIgCAIABagMQANgRAPgUAg7DYQA7hVAdg2QAKgRAQgXQAGgIAGgJ");
	this.shape_1.setTransform(14.525,21.0125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE0A6").s().p("AgtgBIgKhKQASgWAZACQALABAaAHQAWAFAJAEIAAADQgDAkgXA0QgLAbgMAUIgaAlQgSglgIg9g");
	this.shape_2.setTransform(25.6237,10.0917);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0AE71").s().p("AiYDIIABgPIAFgQQAHgSANgXIAdg2IADgGIAYgvIAZgtIAzhkQAbg0AZgWQATgRARAAIAGAAQAZACAcALIgCAFQgbgHgLgBQgZgCgSAWIAKBKQAIA+ASAlIgYAgIgLARQgRAXgJARQgeA2g7BVg");
	this.shape_3.setTransform(13,21.0125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,-1.6,35.400000000000006,45.2);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#930B0B").ss(0.5,1,1).p("AAaBdQABACAAACQACAIABAJQADgLALgKQAKgLAHgKQAGgLAAABQAQAKAHADQAaAIAJAAQgEgGgEgFQgegnhHguQhLgzgVgxQgIAGgLADQgMADgNAAQAIAlAcAcQANAOAlAbQAzApANAvIAfgyIA8Ad");
	this.shape.setTransform(12.7,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F52F2F").s().p("AgjAQQgkgcgNgNQgcgdgHglQAMAAALgDQAMgDAIgFQAVAwBLAzQBHAvAeAmIg8gdIgfAyQgNgvg0gog");
	this.shape_1.setTransform(12.3,9.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5187FF").s().p("AgvASIgBgDIAegyIA7AeIAIAKQgIgBgagGQgIgDgOgLIgHALQgGAJgLALQgKAKgDAKIgDgRg");
	this.shape_2.setTransform(20.2375,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-1.5,26.9,24.7);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C6C647").ss(0.5,1,1).p("AgchhQAkAkAKBDQAGAkAFA4");
	this.shape.setTransform(15.2625,9.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("AAEAGQAAACAAABQAAAFAAAEQABAUAIAKAAdisQgUAbgIAwQgKA5gHAQQgEAIgEAIQgNAXgSASQgkAmAAATQAAAKAJALIAEAFQgEgLAAgMIAAgBQAAgPAfgfQAegegBgWIACAPQAAADAAADQgBALgIARQgFANgIAPQgXAoAAAQQAAACAAACQAAACABAAQAAABAAAAQADAMAOALQATAQAXAAQAmAAAhgfQATgTAEgPQADgKAAghQAAgMAAgEQgBgNgBgKQAAgCAAgBAgcCMQgGgHgBgHQgBgBAAgJQAAgXAUgsQAGgOAJgRQACgFACgFQAAgBABgBQAJgUAEgQQADgRABgBIAAgBQgIAIgDAHQgGAOAAAaAhACFQgJgCgFgOIAAgBQAEAFAJAKQABABABABIAAABQgBAAAAgBg");
	this.shape_1.setTransform(9.175,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C6C647").s().p("AgvCdQgOgLgDgMIABAAIAAgBIgCgCIAAgEQAAgPAXgpQAIgPAFgNQAIgRABgLIAAgFIgCgQQABAWgeAeQgfAfAAAPIAAAAQAAANAEAMIgEgGQgJgMAAgJQAAgSAkgnQASgSANgWIAIgRQAHgQAKg5QAIgwAUgbIADAAQAlAkAKBEQAGAjAFA3IAAAEIACAXIAAAQQAAAigDAJQgEAPgTASQghAggmAAQgXAAgTgQgAgkB1IABAKQABAGAGAHQgGgHgBgGIgBgKQAAgYAUgsIAPgfIAFAAIAAgJIAAgDQAJgUAEgQIAEgSIAAgBQgIAIgDAHQgGAOAAAaIgBACIgEAKIgPAfQgUAsAAAYIAAAAgAANAwQgIgKgBgUQABAUAIAKg");
	this.shape_2.setTransform(9.175,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-1,-1,20.4,36.6), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0D3691").ss(0.5,1,1).p("AgZBsQAAgBAAgBQADgfAQgWQAMgPAmgdQAJgHAQgPQAOgPAJgMQAJgMADgLQADgMAAgGQABgGAAgBQgdACgSgYQgRA/gvAkQgWAQgjAdQgBABgBABQgJAJgLAJQgGAGgHAHAgZBsQAAABAAACIghgmIgxAIQABgBABgBQAFgGAFgGIAtgRg");
	this.shape.setTransform(10.25,12.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F52F2F").s().p("AAHgHIgvAHIACgBIAKgLIAsgRIAZA4IAAADg");
	this.shape_1.setTransform(3.6,20.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5187FF").s().p("Ag3A0IguARIANgNIAUgSIADgDIA4gsQAwglAQg+QASAYAdgDIgBAIQAAAGgDALQgDAMgJAMQgJAMgOAPQgQAOgJAHQgmAegLAPQgRAVgCAfIAAACg");
	this.shape_2.setTransform(10.8375,12.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,0.2,23.5,24.2);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFF7E9","#FFE0A6"],[0,1],0,0,0,0,0,4.6).s().p("AgRAqQgKgFgCgQQgDgOAIgRQAHgRANgKQAMgIAKAEQAKAEACAQQACAPgIARQgHARgMAJQgIAGgIAAIgGgBg");
	this.shape.setTransform(20.9063,5.8087);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0D3691").ss(0.5,1,1).p("AhBhHIg5BWIgDABIgTAGQgBgJAAgJQAAAAAAAAQAAgFABgFQAAgDAAgDQAFgqAcgiIBmgrQAVAVAmAwQATAZAZAiQAJALAJANQAQAWASAaQgBAAAAABQgZAfgvAQQgaAJgYAEQgGABgGABIgBAAIgOgVIBehEIgKgCIhngWIgqhZ");
	this.shape_1.setTransform(10.275,17.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#D9D3D3").ss(0.5,1,1).p("AAdgrIATAGIheBHIAGAK");
	this.shape_2.setTransform(16.275,25.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("Ah0AfIAQgEIBAhaIA2BhIBjAe");
	this.shape_3.setTransform(7.4375,14.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1B49AF").ss(0.5,1,1).p("AgLAIQAMgHALgI");
	this.shape_4.setTransform(20.3375,20.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFE0A6").ss(0.5,1,1).p("AhKgNQAVgDAdADQA5AFAqAY");
	this.shape_5.setTransform(19,1.9375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E0AE71").ss(0.5,1,1).p("ACQhcQAAgCAAgCABeA9QA0grgDhsAiPA4QAEATAjALQAwAOAvgEQARgBATgEQASgDAQgH");
	this.shape_6.setTransform(12.1,13.2044);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.5,1,1).p("AB9BWQAigcAGg6QAFgxgUgyQgDgIgGgIAhWg2IAAAAIAAAAAgIiVQgrABgjASQgpAWgFAlAilAnQAEAfARAZQABAAAAAAQAFAHAGAHQAGAGAHAGQAAAAABABQAhAbAxABQANAAAOgB");
	this.shape_7.setTransform(12.398,15.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D9D3D3").s().p("AgoAwIgPgVIBehDIgLgCIAKgFIASAGIheBHIAHAKIAEAGIgNACg");
	this.shape_8.setTransform(15.4125,25.6125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAFAtIgphaIAAgBIgBABIg5BVIgDABIgSAGIgBgRIAAgBIAQgEIBAhaIA2BhIBjAeIgJAEg");
	this.shape_9.setTransform(7.4375,14.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1B49AF").s().p("Ag7AwIgHgKIBehHIgSgGQANgGAKgJIAiAxIgBABQgZAdguARQgaAJgYAEg");
	this.shape_10.setTransform(18.1875,24.7875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5187FF").s().p("AAGA2Ig1hhIhBBaIgQAEIABgLIAAgFQAEgpAcgiIBmgrQAWAVAlAwQAUAYAZAiIASAZQgLAIgMAHg");
	this.shape_11.setTransform(8.6,12.4375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE0A6").s().p("AhoBmQgjgLgEgTIACgBIA6hWIAAAAIAqBaIBmAVQgQAHgTAEQgSAEgRABIgSABQgmAAgngLgABMA0QgZgigUgYQgkgwgWgVIhnArQAFglAqgWQAigSAsgBQAUgDAdADQA6AFAqAZIAAAEIAAAEIgBgCQADBsg0ArIgSgZg");
	this.shape_12.setTransform(12.104,11.6419);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E0AE71").s().p("Ah2BoIgBgBIgNgNIgLgNIgBgBQgRgZgEgeIATgGQAEATAkAKQAvAOAvgDQARgBATgEQASgEAQgHIALADIheBDIAPAVIABABIgbABQgxgCghgagABbAUQA0gqgDhtIABACIAJAMQAUAxgFAxQgGA7giAcIgigwg");
	this.shape_13.setTransform(12.398,17.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-0.6,35.3,32.2);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFF7E9","#FFE0A6"],[0,1],0,0,0,0,0,21.2).s().p("AA9DAQgEgEgDgGQgjhRgThZIgMg9IgMgnIgMgoIgJgXQgHgNgJgHIgKgIQgFgHAEgFQAFgGALAHQAJAFAIAKQAKAMALAhIAMAjQAGAXAXBjQASBMATAtIANAdQAFAMgGAEQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgDAAgDgDg");
	this.shape.setTransform(17.5945,69.7949);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFF7E9","#FFE0A6"],[0,1],0,0,0,0,0,5.8).s().p("AASAmIgEgWQgDgQgLgNIgEgEQgHgFgLgBIgHgCQgEgBgBgFQAAgEADgDQAEgEAJABQAJABAJAEIAFAEIAFAEIANASIADAGIAGAQIACASQABADgBAEQgBAGgGAAQgHAAgCgFg");
	this.shape_1.setTransform(8.1214,5.49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E0AE71").ss(0.5,1,1).p("AhXiUQAAgBAAgBQACgLAAgOQAAgWAAgCQABggACgPQAIhWAAgKQAAgXgFgRQgDgIgPgdQgBgCAAgBAhghLQgCAIAAAOQAAAVAQA1QAPAvAHAOQAJASATAsQARAnAMAYQAFAKAIAVQAIAUAFAJQAEAIANAVQABADABACQAAAAABAAQAGANACAGQAFAWACAHQAFAQAIANIAMAYQABADABALQACAJAMgD");
	this.shape_2.setTransform(15.65,54.5093);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.5,1,1).p("AiRoOQAPABATgDQASgDALABQAvAGAPA3QANArgKAyQgIAqgFA3QgEA2ACAuQADBTAWA4QAAAAAAAAQAHAUAKAQQAJAPAHAdQAFASATBNQASBNAKAZQAGAQALAiQAKAfAFARQADAHAFAOQAGAOAJAVQASAoABgBQABAAgDAKQgDAKgBAFQgBAEgCAJQgBAHgBADQgCADgCADQgCACgCADQgDABgGAEQgGAEgJAQQgIAPgBACQgFgMAAAAQgCgEABgFQAAgEAAgDQABgJAEgHQgSAEgKAKAiUkOQAYgfAPgrQAPgvALgaAhShGQANAFARAPQADADAEADQADACAMAFQACACACABAg0gyQgRgcgDhAAiXkOIAAAAQAAAxAGAnQAGAeAQA2QADAMAEAYQAEAeAGAlQAFAnAKAXQALAXAWAhQAWAgAXAsQAGAMAFAKQANAcAJATQAQAlANAkQABALACAIQAGAUARARQAIAKADAMQAAABAAADIAAAAQABAGABAKQABAGAGAQQADAGAFAKQgIAAgIADQgGABgGgBQgOgFgFgCQgCgIgBgBQgBgBABgDQAAgDACAAQADABAFACQAFACAEABQAJABADgBQAGgCAFAAAAzE1QgDASABAOABqHdIAIgtQAAgCAAgDQAAgLgEgQQgFgVADgTABpHeIABAAIAAgBABnHdQAAAAAAABIACAAQAAgBABAAQABgCACgBQALgLgBgZABjHnQABgBAAgBQACgEADgDAA4HZIgIgBQgBAHAGAIQAEAHAOAHQgKAJgEANIAlgN");
	this.shape_3.setTransform(14.1643,53.9875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE0A6").s().p("ABcIHQgCgEABgFIAAgHQABgJAEgHIABgCIAFgHIABAAIAAgBIADgDQALgLgBgZIgFgLQAAgLgEgQQgDgNAAgMIABgPIgBAPQAAAMADANQAEAQAAALQgMAEgDgJQAAgMgCgDIgLgYQgIgMgFgQIgHgdQgCgHgHgMIAAgBIgDgEIgRgeIgMgcQgJgVgFgLQgLgXgSgoIgcg+QgHgOgOgvQgQg0AAgVQAAgPABgIQANAFARAPQgRgcgDhAIAAgDQACgLAAgNIAAgYIACgwQAJhVAAgKQAAgXgGgSQgDgIgOgdQgGgUgUggIglg8QAPABATgDQASgDALABQAvAGAPA3QANArgKAyQgIAqgFA3QgEA2ACAuQADBTAWA4IAAAAQAIAUAJAQQAJAPAHAdIAYBfQASBNAKAZQAGAQALAiIAPAwIAIAVIAPAjQASAoABgBQABAAgDAKIgEAPIgDANIgCAKIgEAGIgEAFIgJAFQgHAEgIAQIgJARIgFgMgAgwgsIAPAHIAEADIgEgDIgPgHIgHgGIAHAGgABvGrIAAAAg");
	this.shape_4.setTransform(14.4893,53.9875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0AE71").s().p("ABXHAQgNgHgFgHQgGgIABgHIAJABIATAHIACABIACAAIAAAAIADAAIAEgBIAAAAQAJgDAHAAIgHgQIAHAQQgHAAgJADIAAAAIgEABIgDAAIAAAAIgCAAIgCgBIgTgHIgEgJIAAgEQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAIAHADIAKADIALAAQAHgCAFAAQgHgQgBgGIgBgQIAAAAIgBgEQgCgMgJgKQgQgRgGgUQgDgIAAgLIgBgHQAAgLADgOQgDAOAAALIABAHQgNgkgRglIgXgvIgLgWQgVgsgWggQgXghgKgXQgKgWgFgnIgLhEQgDgYgEgMQgQg2gFgeQgHgnAAgwIAAAAIADgBQAYgfAQgrQAOguALgaIABACQAPAdADAIQAFASAAAXQAAAKgIBVIgDAwIAAAYQAAANgCALIAAADQAEBBAQAbQgQgPgNgFQgCAIAAAPQAAAVAQA1QAPAuAHAOIAcA+QAQAoAMAXQAGALAIAVIANAcIARAeIACAEIABABQAHAMABAHIAHAdQAFAQAIAMIAMAYQABADABAMQACAJAMgEIAGALQABAZgMALIgDADIAIgtIAAgFIAAAFIgIAtIAAABIgCAAIgBgBIABABIACAAIgFAHIgBACQgSAEgLAKQALgKASgEQgEAHgBAJIAAAHIglANQAEgNAJgJg");
	this.shape_5.setTransform(12.529,59.2625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-0.1,32.4,108.19999999999999);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFF7E9","#FFE0A6"],[0,1],0,0,0,0,0,18.6).s().p("AAgCwQgHgDgCgPIgNhbQgIg9gFgcQgPhAgag5QgGgMAAgGQAAgFADgFQADgEAFgBQALgCAHATIAgBWQAJAdAGAfQAFAYAGA2QAHAzAFAbQADAQgCAHQgCAGgFADQgEACgDAAIgEgBg");
	this.shape.setTransform(40.5568,83.3268);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFF7E9","#FFE0A6"],[0,1],0,0,0,0,0,4.9).s().p("AgPAjQgEgFAAgIIABgWIADgUQABgIACgDQADgHAIgCQAHgCAGAEQAJAGgBAQQgBAIgDAPIAAAPQgBAJgEAFQgFAGgIAAQgJgBgEgGg");
	this.shape_1.setTransform(30.68,50.8942);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFF7E9","#FFE0A6"],[0,1],-0.2,0,0,-0.2,0,19.7).s().p("AgLCHQgSg1gKhNQgJhNAEg4QADg3AQgCQAPgCAVAuQAWAuAJBQQAIBPgHA8QgHA8gPADIgBAAQgPAAgQg0g");
	this.shape_2.setTransform(31.5168,24.9996);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#D2D2D2").ss(0.5,1,1).p("AAEidQgNAKggAIQgLACgGAFQAeAHAIAAQAEAAAYgHQgOAOgnAAQgKAAgCAAQgDgBgFgBQgCAOgFAXQgDANAAASQAAAeAUAfQAdAtAFANQAMAeAGAmQAJAXArAAQAGAAAVgDAAVB+QgCgTAJgCQAGgBAQABAg6iEQgGAEgBAHQAAAAAAABQgCgBgDgBAhBiFQAEAAADAB");
	this.shape_3.setTransform(46.4125,120.7375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E0AE71").ss(0.5,1,1).p("AiaoKQgBACgCACQgdAzAAA1QAABzBICjQAXAzAdBNQAdA9A9AyQALgSADgUQABgHAAgiQAAgVgCgLAA/CoQgNAZgNAIQgGAFgBAPQAAABAAACQAAAoAOAzQANAuASAjQAOAZARA5QATAtAsAAIARgEIABgB");
	this.shape_4.setTransform(28.2125,51.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.5,1,1).p("AgerVQARARAUAcQApA3AQA0QAqCOgKB/QgCAZgJBaQgEAvACAMQAEAXAAAMIAAABQAAACAAACQAAAHABATQAAABAAACIAsBZQAcBGAOBkQAUCMAFAwQAAACABACAiTqLQgeASgeAYQg9AwgBAgQgCAqAUBJQAUBIAeAwQAeAxAeAnQAeAoASAWQAAABABAAQACADAGAHIAAAAQAHAJANAPQAYAdADALABKAgQgBgDgEgSQgEgSAAgCQAAgMADglQABgCAAgDIAAAAQAAgBAAgBQACgbAAgCQAAgEgFgNQgCgEgCgGQgGgNgDgHAgIgfQAJAXARAOQAJAJAWAUAhciPIAAARQADA0ANAdIAZAoQAFAHAEAGQAHAKAFAIQALARAGAHQARAWATAPAgqAIIgFAbQgGA8AOAoQAIAQAlBCQAhA5ANAVQARAcAPAhQANAdADAKQgCABgBABQgBABgEACQgFADALAZQALAaAAAMQAAANgLAYQgKAYAAAUQAAABAAABQABALAOAXQACADACADQAJAOAFASQAEARAAAUQAAAPAAADQgBAGABAeIAegBQAJAGATADQAcAGAeAAQAeAAgBgMIAAAAQAAgCAAgCQgCgJgGgGQgEgJgGgOQgDgIgCgGQgDgKAAgGQAAgKACgcQADgcAAgMQAAgSgKgbQgMgggCgJQgEgOgCgIQgDgNACgKQABgFAAgFQADgjgMAAQgEAAgGACQAAAAAAAAABoGQQAGACAQAEQAPAEAHAAIAVgBQAFAAAMgFQAFgDAHgDQABgBABAAQAAgDAAgEAEGK3QgDgEgFgDQgEgDgEgCQgJgEgMAAQgBAAgJACABzJBQALAQAFAYQACAIABAIQADAUAEAjQABACAAABQAEANAJAGQAAAAAAABABzJBQALANAHAMQARAaAFAgQAGAoAWAIQAKAEASADQATADAQAAQAMAAAMgEIAAAAABYIlQAQAPALAN");
	this.shape_5.setTransform(27.0057,65.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D2D2D2").s().p("AA+ClQgeABgcgHQgSgDgJgGIAAgBQgJgGgEgNIgBgDIgHg2IgDgRQgFgYgLgPQALAMAHAMQARAaAFAhQAGAnAVAIQAKAEASADQATADAQAAQAMAAAMgDIAAAAIAAAAQABALgeAAIAAAAgABDCdQgQAAgTgDQgSgDgKgEQgVgIgGgnQgFghgRgaQgHgMgLgMQgLgOgQgOIAAgCQAAgUAKgYQALgYAAgMQgBgNgKgZQgLgaAFgCIAFgDIADgDIAEAGIAWAGQAPADAHAAIAVgBQAFAAALgFIAMgGQgOAKgfAIQgLACgGAFQAeAGAIAAQAEABAYgIQgPAPgmAAIgMAAIgIgCIAAgBIAAAAQABgHAGgEIgHgCIAHACQgGAEgBAHIAAAAIAAABIgFgDIAFADIgHAlQgDANAAARQAAAfAUAeQAdAtAFAOQALAeAGAmQAKAWArABIAbgDIAAAEIAAAAQgMADgMAAIAAAAgABbCagAg1B0IAAgSQAAgVgEgRQgFgRgJgPIgEgGQgOgWgBgLQAQAOALAOQALAPAFAYIADARIAHA2IABADQAEANAJAGIAAABIgeABIAAgjgABLB/IgIgEQgJgFgMAAIgKACQgCgSAJgCQAGgBAQABIADgCIAFANIAKAXIgIgHgAhagLIAAAAgAgyh9IAAAAgAgyh9IAAAAgAgyh9IAAAAg");
	this.shape_6.setTransform(44.915,121.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDCMQgGgmgMgeQgFgNgdgtQgUgfAAgeQAAgSADgNIAHglIAIACIAMAAQAnAAAOgOQgYAHgEAAQgIAAgegHQAGgEALgDQAggIANgJIACgCIAAgGIAAAAQAGgDAEAAQAMAAgDAkIgBAJQgCAKADAOIAGAVQACAJAMAhQAKAaAAARQAAANgDAbIgCAnQAAAGADAKIgDACQgQgBgGABQgJACACATIAKgDQAMAAAJAFIAIAEIAIAHQAGAHACAJIgbADQgrAAgJgXg");
	this.shape_7.setTransform(46.4125,120.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE0A6").s().p("ABqIBQgRg5gOgZQgSgigNgvQgOgzAAgoIAAgDQABgPAGgEQANgJANgYIgBgFIgFgVIgEgUIADgxIABgFIAAAAIAAgCIACgdQAAgEgFgNIgEgKIgJgUQACAMAAAWQAAAhgBAIQgDAUgLASQg9gzgdg9QgdhMgXgzQhIijAAhzQAAg2AdgyQAggdAhgSQAigRAQgMQARASAVAbQAoA4AQA0QAqCOgKB+IgLB0QgEAtACAMQAEAYAAAMIAAABIAAAEIABAaIAAADIAsBZQAcBGAOBlQAUCMAFAwIgBAAIgRAEQgsABgTgug");
	this.shape_8.setTransform(28.2125,48.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E0AE71").s().p("AChIRIgWgGIgEgFQgDgLgNgdQgPghgRgcIguhNQgmhCgHgQQgOgpAGg7IAFgbIALARIARAZQASAVATAPQgTgPgSgVIgRgZIgLgRIgJgOIgZgoQgNgegDgyIAIgHIAAAAIAUAWQAYAeADALQgDgLgYgeIgUgWIAAAAIgIgKIgBgBIgwg+QgegogegwQgegwgUhJQgUhIACgrQABggA9gwQAegYAegRIACABIADgFIgDAFQgdAyAAA2QAABzBICiQAXA0AdBNQAcA8A+AyQALgRADgUQABgIAAgiQAAgUgCgMIAJATIAEAKQAFANAAAEIgCAcIAAADIAAAAIgBAFIgDAxIAEAUIAFAVIABAEQgNAZgNAJQgGAEgBAPIAAADQAAAoAOAzQANAvASAiQAOAZARA5QATAtAsAAIARgEIABAAIABAEIAAAGIgCACIgMAFQgMAFgFAAIgVACQgHAAgPgEgAA1CBIAfAdIgfgdQgRgQgKgXQAKAXARAQg");
	this.shape_9.setTransform(23.5157,52.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-8.4,56.1,147.20000000000002);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFF7E9","#FFE0A6"],[0,1],0,0,0,0,0,4.2).s().p("AgPAeIgBgHIABgLIABgDIACgIIAKgaQABgDACgDQAFgEAFACQAGACgBAGIgBAFIgDAHQAAAAAAAAQgBABAAAAQAAABAAAAQAAABgBABIgBAEIgCAEIgBACIgCAIQgDAGAAAFIgBAJQgBAGgFAAQgGAAgDgFg");
	this.shape.setTransform(35.6567,16.9192);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFF7E9","#FFE0A6"],[0,1],0,0,0,0,0,5.2).s().p("AAAArQgCgDAAgIIAAgGIgHglIgEgUIgBgHQABgFAEgCQAEgCAEACQAEADACAKIAJA0IABAOIAAAHQgCAEgDABIgEABQgEAAgCgEg");
	this.shape_1.setTransform(50.2417,30.1988);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFF7E9","#FFE0A6"],[0,1],0,0,0,0,0,6.2).s().p("AgOA6QgLgCgDgTQgDgTAGgXQAGgZAMgPQALgPALADQALADACATQAEATgGAXQgHAYgMAPQgIANgJAAIgEgBg");
	this.shape_2.setTransform(31.1532,32.0821);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#1148C2").ss(0.5,1,1).p("Ah9AhIAIAwIARACIAKgDQAKgIAMgNQAVgXAHgHQATgUA5ggQAFgDAFgDQAAAAAAAAQAqgXAlgOQAAgEABgFQAAgDAAgEQgCACgCABIgBAAQgHAEgHAEQggARghASQAAAAAAAAQhbAvg8AAQgEAAgFAA");
	this.shape_3.setTransform(39.625,46.1875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#790D0D").ss(0.5,1,1).p("ABVB8IgBgFIgoAvQgEgCgPgBQgHAAgGAAQgFgOgFgQQgVhegBgEQgGgWgGgUQgMgogOgkQgPgmgRghQgBgBAAgBQADgBAEAAQAAgEABgEQANAeAUAxIAAAAQARAqARAgQAaA1AUAXQAaAfAeAGQADAAADAB");
	this.shape_4.setTransform(18.5125,37.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5187FF").ss(0.5,1,1).p("AgDALQABAAAAgBQADgLADgJ");
	this.shape_5.setTransform(27.3625,48.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#381A1A").ss(0.5,1,1).p("AADgbQACADABACAgIgYQAAADALAEQACgDABgCQADgEABgBAgBgEQACgCACgBQABAAABABQACAAABABQAHAEABgBQABgDAAgCQAAgDgDgFQgEgDgEgEAgCAOQgGACgBAAAgKAEQABAAABgBQACgDAFgEAgQAGQAEAAACgCQADADAGABAgOgHQABAHADAEQAAAAAAAAAAOAEQgCACgBAAQAAACAAABQADADABABAAQgCQAAADgCADQAAAAAAAAAAEAQIACAMAgIgPQADAHAEAEAAIgFQADAHADAC");
	this.shape_6.setTransform(25.55,55.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E0AE71").ss(0.5,1,1).p("AgknmQgqAEgHAUQgHAUgFAZQgPAwgCAKQgBAKgCAGQAAABAAABQAAACAAACAhqkVQAAAAABABIGMAUIAEABAB/BIQAAAAAAgBQAMggAOgiQAPghAUgcQAAAIAAAPQAAAOAAALQABAEADAEAhaCtQAGAjAeAdQAmAjAogHQAogIAUgXQASgVAIgcIgCAHQAAAQAUAMQASAKAUAAQATgBAQgDQAKgCAIgGAhcB5QADgMAEgNQAAgCABgDQAGgRANgbQADgGAEgHQAUgmAMgQQALgNAPgMQAKgGAMgKQADgCADgDQAHgGAGgHQAUgVAYggQALBOA5ALAhJAqQgNAWgDAYQgCANgBAUQAAAQAAAUQAAAIACAIQgGgaAEgaAATAvQgCALAAAKQAAAAAAAAQAAAKACAFQAAgBAOgLQAFgEAIgBAhhHnQg9hfguhIQgyhNgjg1QgCgDgDgE");
	this.shape_7.setTransform(29.45,15.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.5,1,1).p("ABHneQABAAAAAAQANAAAjgOQAAgOABgQAAKn1QAJAFAOAGQAaAMAMAAQABAQAAAXQAAAKAAAHQAAgBABABQATAAAbgNQABgBAAAAQAdgOAOgKQACACABABQAJAMAWAGQACABACAAQAPAEAcACQAkAFAOA6QAHAgABAWQABAXABAeQABAbgUA8QgCAGgDAHQgYBGgKAdQgBAEgBACQgDAZgaAyQgQAggHAXQgBABAAACQgCAGgBAFQgCAHAAAGQAAASASA9QARA9AAAaQAAAIgBAQQAAABgBABQAAAFgBAEACOn0QgCgRACgqIiMgHQAHAnABAaQABAZgEAOQgBAFgDAFQgKAVghANQgFACgFABQgiANgZAFQgcAHgBAoQAAAfAHAlQACALACAKAgumYIALAAQAQACAfACQATADANAJQgFgKgFgZAADnEQANAKASAKQABAAABAAQARAJATABAAsmIQAGADAEAFAh+kBQAFAdADATIABAFQABADABAEAjKB+QAGgaAPgOQAJgJAYgPQAYgPASgeQASgdAAgWQABgTgEgTQAAgCgBgDQgCgXgJgpQgIgmgEgRACOn0QAAAGABACQAFAMAPAUAB4nsQAKgDAMgFABmmSQAHgOAKgTABmmSQANgEAPgDQAxgHANgHABDl9QAOgNAVgIAB1CYQAAgBAAAAQAIgvAFgXQAAgBAAgBQAGgYALgRQAGgLAIgIADZE9QAAABAAABQAAAHADAKQACAKAAAGQAAAIgCAKQgCALgDAEQAAgBhrBAQhuBEgMAGQgOAGgKgRIAAAAQAGgEAFgHQAVgcADgDQADgCACgDAhTB6QADgRAVgjQAKgQAFgMQAAgBAAAAQAFgMAAgJQAAgIgDgGQgCgFAAgJAAfCHQgDgDgDAAQgEAAgGAIQgCADgGAFAAKB/QAFgEADAAQAHAAAGAMQADADADAIAkvEFQACgMACgIQACgJAQgRQAQgSAHgKQAVghAAgBQALgNAQgEAhKH/QACABACACQAFADAFABQABAAAAAAQAMAAAJgHAhrI3QAUgWAJgUQABgCADgMAhqHHQAJAYAJAPQAHALAHAGAgrHmQAAgBAAAAQgBgDgBgCAg8IGQAFgOAIgGQADgCABgDQAAgBAAgBQABgDgBgCAgrHrQAAgBAAAAQAAgCAAgCAhGICQAQgQAHgDQADgCABgC");
	this.shape_8.setTransform(30.4008,7.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1B49AF").s().p("AgBAeIgBgBQgTgJgNgKIAEgKQAEgNgBgZIAXALQAZALAMABQACAPAAAXIgBAQQgSgBgRgIg");
	this.shape_9.setTransform(34.175,-38.4625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6B3131").s().p("AgNAKQAPgPAHgEQAEgBABgCIgBACQgBADgDACQgHAFgEAOQgGgBgFgDg");
	this.shape_10.setTransform(24.6625,58.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B41212").s().p("AhFHdIgNgBIgKgeIgXhhIgMgrQgMgogOgkQgPgmgRgiIgBgBIAHgCIABgIIAhBQIAAAAQARApARAhQAbA2AUAXQAaAeAeAHIAGABIgHAUIAAACIgBgFIgoAvQgEgCgPgBgABgmSIAAAAIAAgQQAAgXgBgQIABAAQANAAAjgOIAWgIIABAIQAFAMAPAUQgPAKgcAOIgBABQgaANgSAAIgDgBg");
	this.shape_11.setTransform(28.025,5.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5187FF").s().p("Ah1BRIgIgwIAAgBIAHgVIAJAAQA8AABbgvIAAAAIBBgjIAPgIIAAAAIAEgDIAAAHIgBAJQglAOgqAXIAAAAIgKAGQg5AggTAUIgcAeIgWAVIgKADg");
	this.shape_12.setTransform(39.625,46.1875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE0A6").s().p("AiUHfQAFgOAIgGQADgCABgDIAAgCIABgCIgBgDIABADIgBACIAAgBIAAgEIAAgBIgCgFIACAFIAAABIAAAEIAAABQgBACgDACQgHADgQAQIgEgDQgHgGgHgLQgJgOgJgYIANAAQAPABAEACIAogvIABAFIAIAwIARACIALgDIgGAFQgDADgVAcQgFAHgGAEQgJAHgMAAIgBAAgAiCHSIgBgMgAiSHGIAHgCIgHACgAh9G/IAEAEIgEgEIABgDIACgCQgDgCgDgIQADAIADACIgCACIgBADIAAAAgAiJG+QgGgBgDgDQADADAGABgAiZG8IAHgCIgBAAQgCgEgCgIQACAIACAEIABAAIgHACgAiRG5IgBABIABgBIAIgIIAFgDIABABIADABIABABIAHACIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIgHgCIgBgBIgDgBIgBgBIgFADQgEgEgDgHQADAHAEAEIgIAIgAh6G6IAAAAIAAAAQACgDAAgEQAAAEgCADgAh4GzIABgFQAAgDgDgFQgEgDgDgEIADgFIgDAFIgEgFIAEAFIgEAFQgMgEAAgDQAAADAMAEIAEgFQADAEAEADQADAFAAADIgBAFgAiDHEIAAAAgAiSG6IAAAAgAiJGxIAAAAgAiBGfIAAAAgAiXEWQgfgcgGgjIgBgRIAAgjQACgNAEgNIABgFQAGgRANgaIAHgNQAUgoAMgQQALgNAPgLQAMgFAMgKIAGgFIAMgNQAUgWAYggQALBOA5ALIADACQgLAQgGAYIAAADIgNBFIAAABIAAgBIAbhBQAOgjAVgaIgBAWQAAAOABAKQAAAEADAFIAGAHIgCANQAAASASA9QARA9AAAaIgBAYIgKAJQgJAGgKABQgQAEgTAAQgUAAgRgKQgUgMAAgPIABgIQgIAdgRAUQgTAXgpAIIgOABQghAAgfgdgAhNBYQgDALAAAKIAAABQABAJABAFIAOgLQAGgFAIgBIgGgLQgGgLgHAAQgDAAgFADgADBjWImMgVIgCgHIgBgGIgIgwIgBgEIAAgCQADgGABgKQABgKAPgwQAFgZAHgUQAHgUAqgDIAAgDIALAAQAQADAgACQATADANAIIAKAIIANAEQAOgOAUgIQANgEAPgCQAxgHANgIIAFgQIAEABQAPAEAcADQAkAEAOA6QAHAgABAXIACA0QABAbgUA8g");
	this.shape_13.setTransform(39.2008,11.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E0AE71").s().p("AjKGQIhViCIgFgHIAFAHIgFgFIAAgCIAAgCIAFgUQACgJAQgRQAQgSAGgKIAWgiQALgNAPgEIABABQASAiAOAmQAPAkALAoIAMArIAYBhIAKAeQAJAYAJAPQAHALAGAGIgEAOQgIAUgVAVIhqimgAgaH/IAAAAQAFgEAFgHQAVgdADgCIAFgFIAVgWIAdgeQATgTA6giIAKgFIAAAAQAqgXAlgOIAAACQAAAHACAKQADAKAAAGQAAAHgCALQgDALgDAEIhrA/QhvBEgLAFQgDACgEAAQgJAAgHgMgAgOGLIgGgBQgegHgageQgUgXgcg2QgQghgSgpIAAAAIgghQQAFgaAPgOQAJgJAYgPQAZgPASgeQARgdABgWQAAgTgDgTIgCgFQgCgXgJgpIgMg3IGNAVIgBANIgiBjIgCAGQgEAZgZAxQgRAhgHAXIgBADIgDALIgFgHQgDgFgBgEQgBgLABgOIAAgWQgUAbgPAiIgaBCIAAAAIAMhGIABgCQAFgYALgRIgDgCQg5gLgMhNQgXAggUAUIgNANIgGAFQgMAKgLAGQgOAMgLANQgNAQgUAoIgGAMQgOAbgFARIgCAFQgEANgCAMQABgUACgNQADgYANgWQACgRAWgjQAJgQAFgMQgFAMgJAQQgWAjgCARQgNAWgDAYQgCANgBAUQgBAMAAALQAAAPADAOQAGAjAeAdQAmAjAngIQApgHAUgXQARgVAIgcIgBAHQAAAQAUALQASALATAAQATgBAQgDQAKgCAJgGIAKgJIAAADIgBAJIgFADIAAAAIgPAIIhAAjIgBAAQhcAwg6AAIgJAAgAggApIgBABIADAAIgCgBQAEgMAAgJQAAgIgCgFQgDgGAAgJQAAAJADAGQACAFAAAIQAAAJgEAMIAAAAgACeAmQAHgLAIgIQgIAIgHALgAhbDgQAAgLABgMIAAAkIACAQQgDgOAAgPgAATCVIAIgJQAGgIAEAAQACAAAEACIAFAMQgIABgGAEIgOALQgBgEAAgJgAATCVIAAgBQAAgKACgLQAGgDADAAQAGgBAHALQgEgCgCAAQgEAAgGAIIgIAJIAAAAgAh4kZQgGgmAAgfQAAgoAcgHQAZgFAjgNIAJgDQAggNALgUQAOAJASAJIABABQASAJASAAIABAAQATABAbgNIgQAhIAQghIACgBQAcgOAPgKIADADQAJAMAWAGIgFAQQgOAHgxAIQgPACgMAEQgWAIgNAOIgOgEIgJgIQgGgJgFgZQAFAZAGAJQgNgJgUgDQgfgCgQgCIgKAAIAAACQgrAEgGAUQgHAUgFAZQgPAwgCAKQgBAKgCAGIgBACIgEgUgABTneQgMAAgbgMIgXgLQgBgagGgnICMAHQgDAqACARIgVAIIAAgHIABgXIgBAXIAAAHQgkAOgNAAIAAAAg");
	this.shape_14.setTransform(29.2625,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-49.8,62.8,115.3);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFF7E9","#FFE0A6"],[0,1],0,0,0,0,0,17.8).s().p("AgGCsQgIgEAAgPIgDgrQAAglACgSQAAgMADgNIADgSQABgIAAgSIAAhkQAAgSgBgIQgDgLAAgGQAAgKAHgEQAFgCAFACQAFADADAFQAEAHAAAPIABCEQAAAWgCALIgEASIgCAZQgCAkADAoQABAPgDAFQgCAFgEADQgDACgCAAIgEgBg");
	this.shape.setTransform(25.425,105.7525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFF7E9","#FFE0A6"],[0,1],0,0,0,0,0,2.8).s().p("AgLAPQgDgEABgJQAAgFABgGQAEgHAFgCQADgCAEABQAEAAAEAEQACADAAAFIgBAJIgCAKQgCAHgJABIgBABQgGAAgEgGg");
	this.shape_1.setTransform(23.75,74.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFF7E9","#FFE0A6"],[0,1],0,0,0,0,0,16.6).s().p("AgYB0QgKgwAAhEQAAhDAKgwQAKgwAOAAQAOAAALAwQALAwAABDQAABEgLAwQgLAwgOAAQgOAAgKgwg");
	this.shape_2.setTransform(24.4,50.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#D2D2D2").ss(0.5,1,1).p("AgHiHQgUAHgHAGQgKAHAAANQAAAJAFALQADAFAFAJIAAABQABABAAABQgCgBgCAAQgFACgCAUQgBALAAAdIgCBAQAAAFgDANQAAAFgCAGQgFAXAAAHQAAAKBBAGQAQAAAcgF");
	this.shape_3.setTransform(23.825,142.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E0AE71").ss(0.5,1,1).p("AAbnoQABAAABgBIgig8Qgug4gTgRAAannQggATgXAjQgOAVgOAhQgHALgIAsQgIAsAAAYQAAA+AhCHQAJAmAHA2QADAKAGAHQARAUAoAAQAFAAAIgFQAHgFAHAAQgEAEgUAKQAAAAgBAAQgOAIgVALQACAJAFAPQAFAPADALQAUAFAHAAQABAAABAAQALgCAHgMQACgDABgEQAHgWAEgKAA2DsIAAAAQgOAIgBABQgCAAgEAAQgFAAgMgDQgNgEgFAAQgJAAgEAvQgCAdAAAbQAAAhAFAsQADAZAHAyQACAPACA+QAIA1AlAAQAGAAAVgIQADgBAEgB");
	this.shape_4.setTransform(18.5875,64);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.5,1,1).p("AB2hPQAAAAABAAQAKgiAAgbQAAhGAOgiQALgcAKgtQANg3AAgnQAAgog7hgQgxhRgZgWIgBgBQgBABAAAAAg6sPQgeAggdArQg7BWAAA4QAAA3AVA7QAMAgAXA4QATA3AmBqQARA1AIAQQAAACABACQABABAAABQAGAJAPAOQAAABABAAQAEAFAFAEABxhmIAFAXIAAAAQAFAdgEAbIgHAjQgIAnABAQQABAMALArQAIAxgIAzQgKA8gGBgQgDAtgBAbQAAABAAACQAAAJAAAHAgmiGQgBADgBACQgDAJgBAEQgDAPAAARQAAAkAKAtQABADAAADQgSAtgHAZQgLAoAAAqQAABJAoBsQAZBGAPBLQAAACABABQgJABgCgCQgQgCASAiIAAAAIAiAkAADg4QAFAQAMAZQAAABABAAQAJASACAPAgkADQAPA+ABAJABRAAQAGgDADgTQADgQAAgQQABgHAAgGABEgBQAFABAFABQABAAACgBABFBHIASgxQAAgGgGgQAAAIDQAAAAAAAAQADAjACASQACATAAAtQABAXgBAPQgBAPgBAJQgDARgHAaQgCAKABAGQADACAUADQAUAEAJABQAHABAbgEQAFgBAFgBQAigFADgCACBLOQABgmgBgdQAAgYgGgoQgGgvgBgLQgCgUANgsIgLAAQgKACgJACQgRAEgOACQgEABgDABQAAAAAAAAQgjAHgPAAACBLOQgBgWgVgOQgVgPgcAFAgGLxQAAAIAEADQAJAJAeAHQAEAAADABQAcAFARgEQAmgKAAgSQAAgCAAgBQAAgCAAgBQABgQABgO");
	this.shape_5.setTransform(16.975,80.2783);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D2D2D2").s().p("AgNCXIgHgCQgfgHgKgIQgDgDgBgIIAYAFIAdAFIABAAIACAAIAAAAIAFAAIAPgCIAAAAIAGgBIABAAIAAAAIAEgBIAJgBQAigGAEgCIgBAEQAAARglAKQgIADgKAAQgMAAgOgDgAgJCFIgCAAIgBAAIgdgFIgYgFQAAgGACgKQAHgaADgRQACgJABgPIAAgmQgBgsgCgTIgFg1IAAAAIAAAAQgSgjAPADQADACAJgBQAQgBAhgHIABAAIABAGQgTAHgHAFQgKAIAAANQAAAJAFAKIAIAPIAAAAIgDACIgigkIAiAkQgFACgCAUIgBAnIgCBBIgCASIgDALQgFAWAAAIQAAAJBBAHQAQAAAcgGIAEABIAAACQgEACgiAGIgJABIgEABIAAAAIgBAAIgGABIAAAAIgPACIgFAAIAAAAgABFB4IAAAAgAgYhOg");
	this.shape_6.setTransform(22.8153,143.3024);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgyCAQAAgHAFgXIADgLIACgSIAChBIABgnQACgUAFgCIADgCIABADIAAAAIgCgBIgBAAIAAAAIgBAAIABAAIAAAAIABAAIACABIAAAAIgBgDIAAAAIgIgOQgFgLAAgJQAAgNAKgHQAHgGAUgHIgBgFIAFgCIAfgGIATgEIAMAAQgNAsABAUIAIA6QAFAnABAYQABAcgCAnQgBgWgUgOQgQgLgTgBIgBAAIAAAAIgKABIgCABIACgBIAKgBIAAAAIABAAQATABAQALQAUAOABAWIgBAeIgEAAQgcAFgQAAQhBgGAAgKgAhAhdIAAAAIAAAAg");
	this.shape_7.setTransform(23.4102,141.1875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0AE71").s().p("AAwJ3QgQhLgZhGQgnhsAAhJQAAgqALgnQAHgaARgtIgBgHQgJgsAAgkQAAgSADgOIAEgOIAAgEIACADIABACQAGAKAPAOIABABIAJAJIgJgJIgBgBQgPgOgGgKIgBgCIgCgDQgGgQgRg1Ig5igQgXg4gMghQgVg7AAg3QAAg3A7hWQAdgrAeggIAEgCQASARAuA4IAjA8IgCABIgBABQghATgXAjQgOAVgNAhQgHALgIAsQgIAsAAAYQAAA+AgCHQAJAmAHA2QADAJAGAHQARAVApAAIACAEIgjASIAHAZIAIAZQAUAFAHAAIACAAQALgBAHgNIADgGIALggIgBAMQAAARgDAPQgDATgGAEIgDABIgKgCIAKACIADgBQAGAQAAAHIgSAwIABADIAAAAIgPAIIgGABQgFAAgMgEQgNgEgGAAQgJAAgEAwQgCAdAAAbQAAAhAFArIAKBLQACAQADA9QAIA1AlAAQAGAAAVgHIAHgDIAAADIAAAQIgfAHIgHABIAAAAQgjAHgQABIAAgEgAATDhIgQhIIAQBIgAA8CHIAAAAQAKAUACAPQgCgPgKgUIAAAAQgMgZgFgQQAFAQAMAZg");
	this.shape_8.setTransform(12.9875,65.2375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE0A6").s().p("AglH3QgDg9gCgQIgKhLQgFgsAAghQAAgbACgdQAEgvAJAAQAGAAANAEQAMADAFAAIAGAAIAOgJIAAAAIgBgCIASgxQAAgHgGgPQAGgEADgTQADgQAAgQIABgNIgLAgIgDAHQgHAMgLACIgCAAQgGAAgUgFIgIgaIgHgYIAkgTIAAAAQATgJAEgEQgHABgHAEQgIAEgEAAQgpAAgRgTQgGgHgDgJQgHg4gJgmQghiGAAg+QAAgZAIgrQAIgsAHgMQAOggAOgWQAXgjAhgTIABgBIAAABQAZAWAxBRQA7BgAAAoQAAAngNA3QgKAtgLAcQgOAiAABGQAAAbgKAhIgBAAIgFgWIAFAWIAAAAQAFAdgEAbIgHAkQgIAnABAQQABAMALArQAIAxgIAzQgKA8gGBgQgDAtgBAbIgHACQgVAIgGAAQgkAAgIg1g");
	this.shape_9.setTransform(22.575,70.6875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,0.8,37.400000000000006,158.89999999999998);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6C647").s().p("AgKAGQgCABAAAGIgEAAIAAAAIgCgPQgEAEgBADIAAAJIgDAAIgCgNIgCAAQgDAFgBAGIgBAPIABAfQgEgDgEgUQgFgSAAgJQAAgKACgMIADgNQAFgZAJgIIgCAKQgCALAAAIQABAJACAJQAAgJADgMQADgOACgGQgDANAJAVIAKAXIABABQgEgLAAgIIgBgVIACgRIABgIQgBAOAEASIADALQAFAOAIAHIAAgPIAAAAIgCgOQgDgLAAgLIACgRQABARAHAQQAGAOARAZIAAABQgJgFgDgDIgKgMQAKAMAJASQAKAWAAASIAAADIgMgRQgGgHgCgFQAEASAGALIgCAAQgFAAgNgXQgNgXACgGQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIAAAAQgEACAAAGQABATARAfQgcgegBgeg");
	this.shape.setTransform(9.75,13.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C6C647").ss(0.5,1,1).p("AgOiOQgzBAAABJQAAAkASAeQARAcAcAQQgRgLAAgbQABgNABgJQABgOAAgDAgRAtQABARAOAUQAEAJAFAHQANAPAPAMIABAAQgCgBgCgDQgCgEAAgDQAAgKAGgNQAGgOAIgIIABAAQgCAXADASQADAXALAK");
	this.shape_1.setTransform(9.4375,15.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.5,1,1).p("AAIidQAEAmABAQQACAaAIARQAIARAMAQQAIAMAHAIQAMALAKAAQAFAAACAAQADgBADgDIAAADQAAAFgIADQgFACgEAAQgGAAgFgCQAPARAHANQAMAUAAAbQAAApgdAUQgJAFgLAEQAJgFAGgNQACgDACgEQAHgSAAgRQAAgHgDgNQgDgMgDgHQgCABAAADQAFAPAAADQAAAOgFAJQgGAJAAAGQAAAFACAGQADAGABADIAAABQgCAAgCgBQgHgCgGgFQACADAEADIgHABQgMgCgCAAIgNABQgVAAgcgPQgWgMgOgNQgPgOgJgZQgJgXAAgVQAAhNBPhTAA0gCQAAAAAAgBIgCAAQACABAAAAgABBALQgJgEgEgJAAoB6QgBgEAAgFIgBgBQgBADACAEQABABAAACgAAwCEQgFgFgDgFQACACABACQACACADAEg");
	this.shape_2.setTransform(9.9,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF99").s().p("AAzCRIADgIQAIgSAAgQQAAgHgDgNIgHgTQAAAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAIAEATQAAANgFAKQgFAJAAAGQAAAFACAFIAEAKIAAABIgEgBQgLgKgDgWQgDgTACgXIgBAAQgIAIgGAOQgGAOAAAKQAAADACADQACAEACAAIgBAAQgPgMgLgPIgLgPQgNgVgCgRIABgQIgBAQIgCAXQAAAaARAMQgcgRgRgcQgSgeAAgkQAAhJAzhAIAcgLIAFA2QABAaAIARQAIARALAQQAJAMAHAIQAMALAKAAIAGAAQAEgBADgDIAAADQAAAFgIACQgFACgEAAQgHAAgEgCQgJgDgEgKIgBgBIgBAAIACABQAEAKAJADQAPARAHANQAMAVAAAaQAAAqgeATg");
	this.shape_3.setTransform(11.325,15.3375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C6C647").s().p("ABCCHIAGAHIgGAAIgOgCIgNACQgWAAgbgQQgWgMgOgNQgPgNgJgaQgJgXAAgVQAAhMBPhUQgzBAAABJQAAAkASAeQARAcAbARQgQgMAAgaIACgXQACARAMAUIALAQQAMAPAPAMIABAAQgCgBgCgDQgCgDAAgDQAAgLAGgNQAGgPAIgHIABAAQgCAWADATQADAXALAKQgHgCgHgGgABCCHIgEgFIgDgFQACAFAFAFgAA6B7IABACQgCgDABgFIgBgCQgBADACAFg");
	this.shape_4.setTransform(8.0125,15.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,21.8,33.6), null);


(lib.ArrBTN = function(mode,startPosition,loop,reversed) {
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
	this.frame_2 = function() {
		playSound("Heavypoppingwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.arrow();
	this.instance.setTransform(158,0,0.2873,0.2873,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.25,scaleY:0.25,x:147.5,y:6},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158,90.5);


(lib.PornGamesBTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой 1
	this.instance = new lib.porngames_clear();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1.12,scaleY:1.12,x:-7,y:-1},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-1,140,23.5);


(lib.Next = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AL6ETIADlIIg7AAIAAisQCKgtAPh0IAFgbIACgLIA3AAIAADHIBlAAIAACsIhlAAIABD7QAAA2A+AAQAcAAAngQIAACsQhMARgpAAQisAAAAiWgAl7FmQgrhCAAjkQAAitAwg/QAtg+CBAAQB/AAAwBAQAtBBAACtIgBAqIkTAAIAEBgQAHAfAugBQA3gCAAg7IABgjICVAAQAHAmAAAyQAADEjOgBQiRAAgphBgAkFAFQAAANACAVIB0AAIAAgtQAAg4g5AAQg9AAAABDgAGLGgIAAi2IA/AAIhfhaIhjBaIBBAAIAAC2Ij2AAIAAi2IAzAAICQiUIiQiLIgzAAIAAisIEYAAIAACsIhCAAIBiBVIBQhVIg8AAIAAisID1AAIAACsIgzAAIiGCLICTCUIA0AAIAAC2gAruGgIAAi2IAtAAIgBjqQAAg+gyAAQhWAAAAB1IAACzIA4AAIAAC2IkIAAIAAi2IA7AAIAAkfIg7AAIAAisIDQAAIAABOQA7hXBkAAQCGgBAACGIAAFPIA/AAIAAC2g");
	this.shape.setTransform(229.825,268.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.hodDogIMG();
	this.instance.setTransform(0,0,0.8157,0.8157);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,469.9,354);


(lib.InvisibleButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(69,69,69,0.008)").s().p("AjHDIIAAmPIGPAAIAAGPg");
	this.shape.setTransform(20,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.Cloud = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Egh5gCfMBDzAAAIAAE/MhDzAAAg");
	this.shape.setTransform(217,15.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.8)").s().p("Egh5ACgIAAk/MBDzAAAIAAE/g");
	this.shape_1.setTransform(217,15.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,436,34);


(lib.BlacSqer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhP/AtKMAAAhaTMCf/AAAMAAABaTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-289,1024,578);


(lib.Scene3BoyTXT4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKA5IAAgWIAVAAIAAAWgAgFAcIgGg5IAAgbIAXAAIAAAbIgGA5g");
	this.shape.setTransform(293.275,31.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDA3QgFgCgCgDQgCgDgBgGIAAgPIAAgjIgKAAIAAgSIAKAAIAAgQIAUgNIAAAdIAQAAIAAASIgQAAIAAAgIABAMIACADIAEABIAJgCIABARQgIADgJAAQgGAAgEgCg");
	this.shape_1.setTransform(288,31.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_2.setTransform(283.1,31.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgCA3QgGgCgCgDQgCgDgBgGIAAgPIAAgjIgLAAIAAgSIALAAIAAgQIAVgNIAAAdIAPAAIAAASIgPAAIAAAgIAAAMIACADIAEABIAJgCIACARQgJADgJAAQgGAAgDgCg");
	this.shape_3.setTransform(273.75,31.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_4.setTransform(268.85,31.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAQA5IAAgsQAAgNgBgCQgCgEgDgCQgDgCgFAAQgEAAgFADQgEADgCAEQgCAFAAALIAAApIgWAAIAAhxIAWAAIAAAqQALgNAOAAQAHAAAGADQAGADADAEQADAFACAFIABAQIAAAwg");
	this.shape_5.setTransform(261.775,31.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZAkQgKgHgDgLIAWgDQABAGAFADQAEADAHABQAIAAAFgDQACgDAAgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgCgCgFgCQgagFgHgFQgKgGAAgMQAAgKAJgIQAIgHASgBQAQABAIAFQAJAGADALIgVADQgBgEgEgDQgEgDgGABQgIgBgEADQgDABAAAEQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQADACAQAFQASAEAHAFQAHAFAAALQAAALgKAIQgKAJgSAAQgQAAgKgIg");
	this.shape_6.setTransform(247.775,33.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHAUIgEgUIAAgTIAXAAIAAATIgDAUg");
	this.shape_7.setTransform(241.6,27.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgDA3QgEgCgDgDQgCgDgBgGIAAgPIAAgjIgKAAIAAgSIAKAAIAAgQIAUgNIAAAdIAQAAIAAASIgQAAIAAAgIABAMIACADIAEABIAJgCIABARQgHADgKAAQgGAAgEgCg");
	this.shape_8.setTransform(237.05,31.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgdAdQgJgLAAgSQAAgTALgMQALgLAQgBQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNABQgVAAgKgPgAgKgUQgFAFAAAJIAgAAQAAgKgFgEQgFgGgGABQgGgBgFAGg");
	this.shape_9.setTransform(229.8261,33.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_10.setTransform(223.25,31.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgLAPQAHgCACgEQACgEABgGIgKAAIAAgWIAVAAIAAAQQAAAJgBAFQgCAGgFAEQgEAEgGADg");
	this.shape_11.setTransform(214.2,37.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgZAkQgKgHgDgLIAWgDQABAGAFADQAEADAHABQAIAAAFgDQACgDAAgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgCgCgFgCQgagFgHgFQgKgGAAgMQAAgKAJgIQAIgHASgBQAQABAIAFQAJAGADALIgVADQgBgEgEgDQgEgDgGABQgIgBgEADQgDABAAAEQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQADACAQAFQASAEAHAFQAHAFAAALQAAALgKAIQgKAJgSAAQgQAAgKgIg");
	this.shape_12.setTransform(207.475,33.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgiA5IgCgRIAJABQAIAAADgFQAEgEACgHIgghSIAYAAIATA6IATg6IAXAAIgeBPIgFAOIgFALQgDAEgCACQgEADgFABIgLABIgMgBg");
	this.shape_13.setTransform(198.675,34.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYAmQgHgDgDgHQgDgGAAgMIAAg0IAWAAIAAAnQAAAQABAEQACAEADADQADACAFAAQAFAAAEgDQAFgDABgFQACgEAAgSIAAgjIAWAAIAABTIgVAAIAAgNQgEAGgIAEQgGAFgIAAQgJAAgGgFg");
	this.shape_14.setTransform(189.425,33.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgcA0QgIgHAAgLIAAgDIAZADQAAAFADABQACADAHAAQAIAAAEgDQADgCACgDIAAgLIAAgMQgKAOgOAAQgQAAgKgOQgIgMAAgPQAAgVALgLQAJgLAPAAQAPAAAKANIAAgLIAUAAIAABJQAAAPgCAHQgDAHgEAFQgEAEgIACQgHACgLAAQgUAAgJgHgAgMgjQgFAGAAANQAAANAFAFQAFAGAHAAQAIAAAFgGQAGgGAAgMQAAgNgGgGQgEgGgJAAQgHAAgFAGg");
	this.shape_15.setTransform(179.5,34.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgLAPQAHgCACgEQACgEAAgGIgJAAIAAgWIAVAAIAAAQQAAAJgCAFQgBAGgFAEQgEAEgHADg");
	this.shape_16.setTransform(433.15,17.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgDA3QgFgCgCgDQgCgDgBgGIAAgPIAAgjIgKAAIAAgSIAKAAIAAgQIAUgNIAAAdIAPAAIAAASIgPAAIAAAgIABAMIACADIAEABIAIgCIACARQgIADgJAAQgGAAgEgCg");
	this.shape_17.setTransform(428.4,11.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAQA5IAAgsQAAgNgBgCQgCgEgDgCQgDgCgFAAQgEAAgFADQgEADgCAEQgCAFAAALIAAApIgWAAIAAhxIAWAAIAAAqQALgNAOAAQAHAAAGADQAGADADAEQADAFACAFIABAQIAAAwg");
	this.shape_18.setTransform(420.875,11.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgcA0QgIgHAAgLIAAgDIAZADQAAAFACABQAEADAFAAQAJAAAEgDQADgCABgDIABgLIAAgMQgKAOgOAAQgQAAgKgOQgIgMABgPQAAgVAKgLQAJgLAPAAQAPAAAKANIAAgLIAVAAIAABJQAAAPgDAHQgCAHgEAFQgFAEgIACQgGACgMAAQgUAAgJgHgAgMgjQgFAGAAANQAAANAFAFQAGAGAGAAQAIAAAGgGQAFgGAAgMQAAgNgFgGQgGgGgIAAQgGAAgGAGg");
	this.shape_19.setTransform(410.9,14.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_20.setTransform(404,11.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgaAqIAAhSIAVAAIAAANQAEgJAEgDQAEgDAGAAQAHABAHAEIgHATQgFgDgFgBQgFABgDACQgCADgCAGQgCAHAAAUIAAAZg");
	this.shape_21.setTransform(399.25,13.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_22.setTransform(388.85,11.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_23.setTransform(384.4,11.775);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAhA5IgKgaIgtAAIgKAaIgYAAIAshxIAXAAIAvBxgAgQAMIAfAAIgPgqg");
	this.shape_24.setTransform(376.35,11.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_25.setTransform(364.55,16.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAQAqIAAgqQAAgMgCgEQgBgEgDgDQgDgBgFAAQgFAAgEACQgFADgBAGQgCAFAAANIAAAlIgWAAIAAhSIAUAAIAAANQALgOAQgBQAHAAAGADQAGADADAEQADAEACAFIABAPIAAAyg");
	this.shape_26.setTransform(357.475,13.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgVAmQgKgFgFgKQgGgKAAgNQAAgLAGgLQAFgJAKgGQAKgFALgBQATAAAMANQAMAMAAASQAAATgMAMQgNANgSAAQgKAAgLgGgAgNgSQgGAHAAALQAAANAGAGQAFAHAIAAQAJAAAFgHQAGgGAAgNQAAgLgGgHQgFgGgJAAQgIAAgFAGg");
	this.shape_27.setTransform(347.725,13.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgZAlQgKgIgDgLIAWgEQABAHAFADQAEADAHABQAIAAAFgDQACgDAAgDQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgCgBgFgCQgagFgHgFQgKgGAAgMQAAgKAJgIQAIgHASgBQAQABAIAFQAJAGADAKIgVAFQgBgFgEgDQgEgDgGABQgIgBgEADQgDABAAAEQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQADACAQAFQASAEAHAFQAHAFAAALQAAALgKAIQgKAJgSAAQgQgBgKgGg");
	this.shape_28.setTransform(338.175,13.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgeAlQgIgIAAgKQAAgHADgFQAEgGAGgCQAGgDALgCQAPgDAGgDIAAgCQAAgGgEgDQgCgDgIABQgGgBgDADQgDACgDAGIgUgDQAEgNAIgFQAIgHAQAAQAOABAHADQAHADAEAGQADAFAAAPIgBAYIABAQQABAGADAFIgWAAIgBgGIgBgDQgGAGgHACQgFAEgHAAQgNgBgHgGgAAAAFQgJACgCACQgFADAAAFQAAAEAEAEQADADAGAAQAEAAAGgEQAEgDABgEQABgDAAgIIAAgEIgNADg");
	this.shape_29.setTransform(329.45,13.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgaAxQgJgKgBgSIAWgDQABAKACAEQAEAGAHAAQAHAAAEgEQADgEAAgOIAAhJIAXAAIAABHQAAAOgDAIQgDAKgJAGQgJAGgNAAQgRAAgJgJg");
	this.shape_30.setTransform(320.025,11.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgLAPQAHgCADgEQABgEAAgGIgJAAIAAgWIAVAAIAAAQQAAAJgCAFQgCAGgEAEQgEAEgHADg");
	this.shape_31.setTransform(309.3,17.675);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgZAlQgKgIgDgLIAWgEQABAHAFADQAEADAHABQAIAAAFgDQACgDAAgDQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgCgBgFgCQgagFgHgFQgKgGAAgMQAAgKAJgIQAIgHASgBQAQABAIAFQAJAGADAKIgVAFQgBgFgEgDQgEgDgGABQgIgBgEADQgDABAAAEQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQADACAQAFQASAEAHAFQAHAFAAALQAAALgKAIQgKAJgSAAQgQgBgKgGg");
	this.shape_32.setTransform(302.575,13.35);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgYAmQgHgDgDgHQgDgGAAgMIAAg0IAWAAIAAAmQAAARABAEQACAEADADQADACAFAAQAFAAAEgEQAFgDABgEQACgFAAgRIAAgjIAWAAIAABSIgVAAIAAgMQgEAGgIAEQgGAFgIAAQgJAAgGgFg");
	this.shape_33.setTransform(293.425,13.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAQAqIAAgqQAAgMgCgEQgBgEgDgDQgDgBgFAAQgFAAgEACQgFADgBAGQgCAFAAANIAAAlIgWAAIAAhSIAUAAIAAANQALgOAQgBQAHAAAGADQAGADADAEQADAEACAFIABAPIAAAyg");
	this.shape_34.setTransform(283.725,13.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgVAmQgKgFgFgKQgGgKAAgNQAAgLAGgLQAFgJAKgGQAKgFALgBQATAAAMANQAMAMAAASQAAATgMAMQgNANgSAAQgKAAgLgGgAgNgSQgGAHAAALQAAANAGAGQAFAHAIAAQAJAAAFgHQAGgGAAgNQAAgLgGgHQgFgGgJAAQgIAAgFAGg");
	this.shape_35.setTransform(273.975,13.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgHA3QgHgEgFgHIAAAMIgUAAIAAhxIAVAAIAAApQALgMANAAQAOAAALALQAJALABAUQgBAVgJAMQgKALgPAAQgGAAgHgDgAgMgFQgGAFAAANQAAANAFAGQAFAJAIAAQAIAAAFgGQAFgHAAgNQAAgOgFgFQgFgHgIAAQgHAAgFAGg");
	this.shape_36.setTransform(264.4,11.875);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
	this.shape_37.setTransform(250.3261,13.35);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgbAgQgLgLAAgVQAAgTALgMQALgMARAAQAPABAJAGQAJAHAEANIgWAEQgBgHgDgDQgEgDgHAAQgHAAgFAGQgFAGAAANQAAAOAFAGQAFAFAIABQAGAAAEgEQAEgDACgJIAVADQgDAPgKAIQgJAIgQAAQgRAAgLgMg");
	this.shape_38.setTransform(241.625,13.35);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_39.setTransform(234.85,11.775);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAQAqIAAgqQAAgMgCgEQgBgEgDgDQgDgBgFAAQgFAAgEACQgFADgBAGQgCAFAAANIAAAlIgWAAIAAhSIAUAAIAAANQALgOAQgBQAHAAAGADQAGADADAEQADAEACAFIABAPIAAAyg");
	this.shape_40.setTransform(227.775,13.25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgfAlQgHgIAAgKQAAgHAEgFQADgGAGgCQAGgDAMgCQAOgDAGgDIAAgCQAAgGgDgDQgDgDgIABQgGgBgEADQgDACgBAGIgUgDQADgNAIgFQAIgHAQAAQAOABAHADQAIADACAGQADAFABAPIgBAYIABAQQABAGADAFIgVAAIgDgGIgBgDQgFAGgHACQgFAEgHAAQgNgBgIgGgAAAAFQgIACgEACQgEADAAAFQAAAEADAEQAEADAFAAQAGAAAEgEQAEgDACgEQABgDAAgIIAAgEIgNADg");
	this.shape_41.setTransform(213.95,13.35);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgCA3QgFgCgDgDQgCgDgBgGIAAgPIAAgjIgKAAIAAgSIAKAAIAAgQIAUgNIAAAdIAQAAIAAASIgQAAIAAAgIABAMIACADIAEABIAJgCIABARQgHADgKAAQgGAAgDgCg");
	this.shape_42.setTransform(202.4,11.975);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
	this.shape_43.setTransform(195.1761,13.35);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgcA0QgJgHAAgLIAAgDIAZADQABAFACABQAEADAFAAQAJAAAEgDQADgCABgDIABgLIAAgMQgJAOgOAAQgRAAgKgOQgHgMAAgPQgBgVAKgLQALgLAPAAQAOAAAKANIAAgLIAVAAIAABJQgBAPgCAHQgDAHgDAFQgFAEgHACQgIACgLAAQgUAAgJgHgAgMgjQgFAGAAANQAAANAFAFQAFAGAHAAQAIAAAGgGQAFgGAAgMQAAgNgFgGQgFgGgJAAQgHAAgFAGg");
	this.shape_44.setTransform(185.75,14.925);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_45.setTransform(174.4,11.775);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_46.setTransform(169.95,11.775);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_47.setTransform(165.5,11.775);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAOApIgOg0IgNA0IgVAAIgbhSIAVAAIAQA2IAOg2IAVAAIANA2IAQg2IAWAAIgbBSg");
	this.shape_48.setTransform(157.05,13.35);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgYAmQgHgDgDgHQgDgGAAgMIAAg0IAWAAIAAAmQAAARABAEQACAEADADQADACAFAAQAFAAAEgEQAFgDABgEQACgFAAgRIAAgjIAWAAIAABSIgVAAIAAgMQgEAGgIAEQgGAFgIAAQgJAAgGgFg");
	this.shape_49.setTransform(141.475,13.45);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgVAmQgKgFgFgKQgGgKAAgNQAAgLAGgLQAFgJAKgGQAKgFALgBQATAAAMANQAMAMAAASQAAATgMAMQgNANgSAAQgKAAgLgGgAgNgSQgGAHAAALQAAANAGAGQAFAHAIAAQAJAAAFgHQAGgGAAgNQAAgLgGgHQgFgGgJAAQgIAAgFAGg");
	this.shape_50.setTransform(131.775,13.35);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgiA5IgCgRIAJABQAIAAADgFQAEgEACgHIgghSIAYAAIATA6IATg6IAXAAIgeBPIgFAOIgFALQgDAEgCACQgEADgFABIgLABIgMgBg");
	this.shape_51.setTransform(122.325,15.025);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgdAvQgLgMABgVQgBgUAKgLQALgLAPAAQANAAAKAMIAAgpIAVAAIAABxIgUAAIAAgMQgFAHgHAEQgHADgFAAQgPAAgKgLgAgMgFQgFAGAAAMQAAANAEAGQAFAJAJAAQAHAAAFgHQAFgGABgNQgBgOgFgFQgEgHgIAAQgIAAgFAGg");
	this.shape_52.setTransform(108.45,11.875);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAQAqIAAgqQAAgMgCgEQgBgEgDgDQgDgBgFAAQgFAAgEACQgFADgBAGQgCAFAAANIAAAlIgWAAIAAhSIAUAAIAAANQALgOAQgBQAHAAAGADQAGADADAEQADAEACAFIABAPIAAAyg");
	this.shape_53.setTransform(98.925,13.25);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
	this.shape_54.setTransform(89.4761,13.35);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
	this.shape_55.setTransform(76.1261,13.35);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAQA5IAAgsQAAgNgBgCQgCgEgDgCQgDgCgFAAQgEAAgFADQgEADgCAEQgCAFAAALIAAApIgWAAIAAhxIAWAAIAAAqQALgNAOAAQAHAAAGADQAGADADAEQADAFACAFIABAQIAAAwg");
	this.shape_56.setTransform(66.925,11.775);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgCA3QgGgCgBgDQgDgDgBgGIgBgPIAAgjIgKAAIAAgSIAKAAIAAgQIAWgNIAAAdIAOAAIAAASIgOAAIAAAgIAAAMIACADIADABIAJgCIADARQgJADgJAAQgGAAgDgCg");
	this.shape_57.setTransform(59.35,11.975);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgCA3QgGgCgBgDQgDgDgBgGIgBgPIAAgjIgKAAIAAgSIAKAAIAAgQIAWgNIAAAdIAPAAIAAASIgPAAIAAAgIAAAMIACADIAEABIAJgCIACARQgJADgJAAQgGAAgDgCg");
	this.shape_58.setTransform(49.55,11.975);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAgA5IgKgaIgsAAIgKAaIgZAAIAthxIAYAAIAtBxgAgPAMIAeAAIgPgqg");
	this.shape_59.setTransform(41.05,11.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// BG
	this.instance = new lib.Cloud("synched",0);
	this.instance.setTransform(0,0,1.0848,1.3401);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene3BoyTXT4, new cjs.Rectangle(-1,-1,472.8,44.8), null);


(lib.Scene3BoyTXT3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKA5IAAgWIAVAAIAAAWgAgFAcIgGg5IAAgbIAXAAIAAAbIgGA5g");
	this.shape.setTransform(419.825,31.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_1.setTransform(415,31.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAvQgLgMAAgVQAAgUAKgLQALgLAPAAQANAAAKAMIAAgpIAWAAIAABxIgVAAIAAgMQgFAHgHAEQgHADgFAAQgPAAgKgLgAgMgFQgFAGAAAMQAAANAEAGQAFAJAJAAQAHAAAFgHQAFgGABgNQgBgOgFgFQgEgHgIAAQgIAAgFAGg");
	this.shape_2.setTransform(407.7,31.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAQArIAAgrQAAgMgCgEQgBgEgDgDQgDgCgFABQgFgBgEADQgFAEgBAFQgCAFAAANIAAAmIgWAAIAAhTIAUAAIAAANQALgOAQgBQAHAAAGADQAGADADAEQADAEACAFIABAPIAAAzg");
	this.shape_3.setTransform(398.175,33.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiA5IgCgRIAJABQAIAAADgFQAEgEACgHIgghSIAYAAIATA6IATg6IAXAAIgeBPIgFAOIgFALQgDAEgCACQgEADgFABIgLABIgMgBg");
	this.shape_4.setTransform(388.725,34.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgiAsQgPgQAAgbQAAgcAPgPQAOgQAXAAQAWAAANAMQAIAIADANIgWAGQgDgJgGgFQgGgFgJAAQgMAAgIAJQgIAJAAAUQAAAVAIAJQAHAJAMAAQAKAAAGgFQAGgGAEgNIAWAHQgGATgMAJQgMAJgRAAQgXAAgOgPg");
	this.shape_5.setTransform(378.55,31.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdAvQgKgMAAgVQAAgUAKgLQAJgLAQAAQAMAAAKAMIAAgpIAXAAIAABxIgVAAIAAgMQgFAHgHAEQgHADgFAAQgPAAgKgLgAgLgFQgGAGAAAMQAAANAEAGQAFAJAIAAQAIAAAGgHQAEgGAAgNQAAgOgEgFQgGgHgIAAQgGAAgFAGg");
	this.shape_6.setTransform(363.3,31.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAQArIAAgrQAAgMgCgEQgBgEgDgDQgDgCgFABQgFgBgEADQgFAEgBAFQgCAFAAANIAAAmIgWAAIAAhTIAUAAIAAANQALgOAQgBQAHAAAGADQAGADADAEQADAEACAFIABAPIAAAzg");
	this.shape_7.setTransform(353.775,33.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeAkQgIgHAAgKQAAgHADgFQAEgGAGgCQAGgDALgCQAPgDAGgCIAAgDQAAgGgEgDQgCgCgIAAQgGAAgDACQgEACgCAGIgUgDQAEgNAIgFQAIgHAQAAQAOABAIADQAGAEAEAFQACAFABAPIgBAYIABAQQABAGADAGIgWAAIgBgHIgBgCQgGAFgHACQgFAEgHAAQgNAAgHgIgAAAAFQgJACgCACQgFADAAAFQAAAEAEAEQADADAGAAQAFAAAFgEQADgDACgEQABgDAAgIIAAgFIgNAEg");
	this.shape_8.setTransform(344.4,33.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgdAdQgJgLAAgSQAAgTALgMQALgLAQgBQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNABQgVAAgKgPgAgKgUQgFAFAAAJIAgAAQAAgKgFgEQgFgGgGABQgGgBgFAGg");
	this.shape_9.setTransform(330.9761,33.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAvQgKgMAAgVQgBgUALgLQAKgLAPAAQANAAAJAMIAAgpIAXAAIAABxIgVAAIAAgMQgFAHgHAEQgHADgFAAQgPAAgKgLgAgLgFQgGAGAAAMQAAANAEAGQAFAJAIAAQAIAAAGgHQAEgGAAgNQAAgOgEgFQgGgHgIAAQgGAAgFAGg");
	this.shape_10.setTransform(321.55,31.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgYAmQgHgDgDgHQgDgGAAgMIAAg0IAWAAIAAAnQAAAQABAEQACAEADADQADACAFAAQAFAAAEgDQAFgDABgFQACgEAAgSIAAgjIAWAAIAABTIgVAAIAAgNQgEAGgIAEQgGAFgIAAQgJAAgGgFg");
	this.shape_11.setTransform(311.975,33.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgaAxQgJgKgBgSIAWgDQABAKACAEQAEAGAHAAQAHAAAEgEQADgEAAgOIAAhJIAXAAIAABHQAAAOgDAIQgDAKgJAGQgJAGgNAAQgRAAgJgJg");
	this.shape_12.setTransform(302.125,31.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgfAkQgHgHAAgKQAAgHAEgFQADgGAGgCQAGgDALgCQAPgDAGgCIAAgDQAAgGgDgDQgDgCgIAAQgGAAgDACQgEACgCAGIgTgDQADgNAIgFQAIgHAQAAQAOABAHADQAIAEACAFQAEAFAAAPIgBAYIABAQQABAGADAGIgVAAIgCgHIgBgCQgGAFgHACQgFAEgHAAQgNAAgIgIgAAAAFQgJACgCACQgFADAAAFQAAAEADAEQAEADAFAAQAFAAAGgEQAEgDABgEQABgDAAgIIAAgFIgNAEg");
	this.shape_13.setTransform(289.3,33.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAQA5IAAgsQAAgNgBgCQgCgEgDgCQgDgCgFAAQgEAAgFADQgEADgCAEQgCAFAAALIAAApIgWAAIAAhxIAWAAIAAAqQALgNAOAAQAHAAAGADQAGADADAEQADAFACAFIABAQIAAAwg");
	this.shape_14.setTransform(280.025,31.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgZAkQgKgHgDgLIAWgDQABAGAFADQAEADAHABQAIAAAFgDQACgDAAgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgCgCgFgCQgagFgHgFQgKgGAAgMQAAgKAJgIQAIgHASgBQAQABAIAFQAJAGADALIgVADQgBgEgEgDQgEgDgGABQgIgBgEADQgDABAAAEQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQADACAQAFQASAEAHAFQAHAFAAALQAAALgKAIQgKAJgSAAQgQAAgKgIg");
	this.shape_15.setTransform(270.475,33.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgfAkQgHgHAAgKQAAgHAEgFQADgGAGgCQAGgDAMgCQAOgDAGgCIAAgDQAAgGgDgDQgDgCgIAAQgGAAgDACQgEACgBAGIgUgDQADgNAIgFQAIgHAQAAQAOABAHADQAIAEACAFQAEAFAAAPIgBAYIABAQQABAGADAGIgVAAIgCgHIgCgCQgFAFgHACQgFAEgHAAQgNAAgIgIgAAAAFQgIACgEACQgEADAAAFQAAAEADAEQAEADAFAAQAGAAAFgEQAEgDABgEQABgDAAgIIAAgFIgNAEg");
	this.shape_16.setTransform(261.75,33.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgKA5IAAheIgiAAIAAgTIBaAAIAAATIgjAAIAABeg");
	this.shape_17.setTransform(253.65,31.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape_18.setTransform(242,33.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgZAkQgKgHgDgLIAWgDQABAGAFADQAEADAHABQAIAAAFgDQACgDAAgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgCgCgFgCQgagFgHgFQgKgGAAgMQAAgKAJgIQAIgHASgBQAQABAIAFQAJAGADALIgVADQgBgEgEgDQgEgDgGABQgIgBgEADQgDABAAAEQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQADACAQAFQASAEAHAFQAHAFAAALQAAALgKAIQgKAJgSAAQgQAAgKgIg");
	this.shape_19.setTransform(229.875,33.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_20.setTransform(223.4,31.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgaArIAAhTIAUAAIAAANQAFgJAEgDQAEgDAFAAQAIABAHAEIgHATQgGgEgFAAQgEAAgDADQgDADgBAGQgCAHAAAUIAAAag");
	this.shape_21.setTransform(218.65,33.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_22.setTransform(212.7,31.675);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgcA0QgJgHABgLIAAgDIAYADQABAFADABQACADAHAAQAIAAAEgDQADgCACgDIABgLIAAgMQgLAOgNAAQgRAAgKgOQgIgMAAgPQABgVAJgLQALgLAOAAQAPAAAKANIAAgLIAUAAIAABJQABAPgDAHQgCAHgFAFQgEAEgHACQgIACgLAAQgUAAgJgHgAgMgjQgFAGAAANQAAANAFAFQAGAGAGAAQAIAAAFgGQAGgGAAgMQAAgNgGgGQgEgGgJAAQgGAAgGAGg");
	this.shape_23.setTransform(205.4,34.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_24.setTransform(194.05,31.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgeAkQgIgHAAgKQAAgHADgFQAEgGAGgCQAGgDALgCQAPgDAGgCIAAgDQAAgGgEgDQgCgCgIAAQgGAAgDACQgEACgCAGIgUgDQAEgNAIgFQAIgHAQAAQAOABAIADQAGAEAEAFQADAFAAAPIgBAYIABAQQABAGADAGIgWAAIgBgHIgBgCQgGAFgHACQgFAEgHAAQgNAAgHgIgAAAAFQgJACgCACQgFADAAAFQAAAEAEAEQADADAGAAQAFAAAFgEQADgDACgEQABgDAAgIIAAgFIgNAEg");
	this.shape_25.setTransform(187.35,33.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_26.setTransform(180.7,31.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgbAgQgLgLAAgVQAAgTALgMQALgMARAAQAPABAJAGQAJAHAEANIgWAEQgBgGgDgEQgEgDgHAAQgHAAgFAGQgFAFAAAOQAAAOAFAFQAFAHAIAAQAGgBAEgDQAEgDACgJIAVADQgDAPgKAIQgJAIgQAAQgRAAgLgMg");
	this.shape_27.setTransform(174.125,33.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgdAdQgJgLAAgSQAAgTALgMQALgLAQgBQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNABQgVAAgKgPgAgKgUQgFAFAAAJIAgAAQAAgKgFgEQgFgGgGABQgGgBgFAGg");
	this.shape_28.setTransform(165.0261,33.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgnA6IAAhxIAUAAIAAAMQAEgGAGgEQAHgEAHAAQAPAAAKALQALAMAAAUQAAAUgLALQgKAMgPAAQgFAAgGgDQgFgDgHgGIAAApgAgMghQgGAGAAAMQAAAOAGAGQAFAGAHAAQAIAAAFgGQAFgFAAgOQAAgNgFgGQgGgHgHAAQgIAAgEAHg");
	this.shape_29.setTransform(156.05,34.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgZAkQgKgHgDgLIAWgDQABAGAFADQAEADAHABQAIAAAFgDQACgDAAgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgCgCgFgCQgagFgHgFQgKgGAAgMQAAgKAJgIQAIgHASgBQAQABAIAFQAJAGADALIgVADQgBgEgEgDQgEgDgGABQgIgBgEADQgDABAAAEQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQADACAQAFQASAEAHAFQAHAFAAALQAAALgKAIQgKAJgSAAQgQAAgKgIg");
	this.shape_30.setTransform(146.275,33.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgdAdQgJgLAAgSQAAgTALgMQALgLAQgBQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNABQgVAAgKgPgAgKgUQgFAFAAAJIAgAAQAAgKgFgEQgFgGgGABQgGgBgFAGg");
	this.shape_31.setTransform(133.0261,33.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgdAdQgJgLAAgSQAAgTALgMQALgLAQgBQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNABQgVAAgKgPgAgKgUQgFAFAAAJIAgAAQAAgKgFgEQgFgGgGABQgGgBgFAGg");
	this.shape_32.setTransform(124.1261,33.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgaArIAAhTIAVAAIAAANQAFgJADgDQAEgDAGAAQAHABAHAEIgHATQgFgEgGAAQgEAAgDADQgCADgCAGQgCAHAAAUIAAAag");
	this.shape_33.setTransform(117.25,33.15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAQA5IAAgsQAAgNgBgCQgCgEgDgCQgDgCgFAAQgEAAgFADQgEADgCAEQgCAFAAALIAAApIgWAAIAAhxIAWAAIAAAqQALgNAOAAQAHAAAGADQAGADADAEQADAFACAFIABAQIAAAwg");
	this.shape_34.setTransform(108.675,31.675);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgDA3QgEgCgCgDQgDgDgBgGIgBgPIAAgjIgKAAIAAgSIAKAAIAAgQIAWgNIAAAdIAOAAIAAASIgOAAIAAAgIAAAMIACADIADABIAJgCIADARQgIADgKAAQgGAAgEgCg");
	this.shape_35.setTransform(101.1,31.875);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
	this.shape_36.setTransform(501.7261,13.35);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgdAvQgLgMAAgVQAAgUAKgLQALgLAPAAQANAAAKAMIAAgpIAWAAIAABxIgVAAIAAgMQgFAHgHAEQgHADgFAAQgPAAgKgLgAgMgFQgFAGAAAMQAAANAEAGQAFAJAJAAQAHAAAFgHQAFgGABgNQgBgOgFgFQgEgHgIAAQgIAAgFAGg");
	this.shape_37.setTransform(492.3,11.875);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_38.setTransform(485.4,11.775);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAQA5IAAgsQAAgNgBgCQgCgEgDgCQgDgCgFAAQgEAAgFADQgEADgCAEQgCAFAAALIAAApIgWAAIAAhxIAWAAIAAAqQALgNAOAAQAHAAAGADQAGADADAEQADAFACAFIABAQIAAAwg");
	this.shape_39.setTransform(478.325,11.775);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAQA5IAAgsQAAgNgBgCQgCgEgDgCQgDgCgFAAQgEAAgFADQgEADgCAEQgCAFAAALIAAApIgWAAIAAhxIAWAAIAAAqQALgNAOAAQAHAAAGADQAGADADAEQADAFACAFIABAQIAAAwg");
	this.shape_40.setTransform(464.125,11.775);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgbAgQgLgLAAgVQAAgTALgMQALgMARAAQAPABAJAGQAJAHAEANIgWAEQgBgHgDgDQgEgDgHAAQgHAAgFAGQgFAGAAANQAAAOAFAGQAFAFAIABQAGAAAEgEQAEgDACgJIAVADQgDAPgKAIQgJAIgQAAQgRAAgLgMg");
	this.shape_41.setTransform(454.875,13.35);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_42.setTransform(448.1,11.775);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAQA5IAAgsQAAgNgBgCQgCgEgDgCQgDgCgFAAQgEAAgFADQgEADgCAEQgCAFAAALIAAApIgWAAIAAhxIAWAAIAAAqQALgNAOAAQAHAAAGADQAGADADAEQADAFACAFIABAQIAAAwg");
	this.shape_43.setTransform(441.025,11.775);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAOApIgOg0IgNA0IgWAAIgahSIAWAAIAPA2IAPg2IATAAIAPA2IAPg2IAWAAIgbBSg");
	this.shape_44.setTransform(429.9,13.35);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgdAvQgKgMAAgVQAAgUAKgLQAJgLAQAAQAMAAAKAMIAAgpIAXAAIAABxIgVAAIAAgMQgFAHgHAEQgHADgFAAQgPAAgKgLgAgLgFQgGAGAAAMQAAANAEAGQAFAJAIAAQAIAAAGgHQAEgGAAgNQAAgOgEgFQgGgHgIAAQgGAAgFAGg");
	this.shape_45.setTransform(414.15,11.875);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAQAqIAAgqQAAgMgCgEQgBgEgDgDQgDgBgFAAQgFAAgEACQgFADgBAGQgCAFAAANIAAAlIgWAAIAAhSIAUAAIAAANQALgOAQgBQAHAAAGADQAGADADAEQADAEACAFIABAPIAAAyg");
	this.shape_46.setTransform(404.625,13.25);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_47.setTransform(397.5,11.775);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAQA5IAAgsQAAgNgBgCQgCgEgDgCQgDgCgFAAQgEAAgFADQgEADgCAEQgCAFAAALIAAApIgWAAIAAhxIAWAAIAAAqQALgNAOAAQAHAAAGADQAGADADAEQADAFACAFIABAQIAAAwg");
	this.shape_48.setTransform(390.425,11.775);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
	this.shape_49.setTransform(380.9761,13.35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgHA3QgHgEgFgHIAAAMIgUAAIAAhxIAVAAIAAApQALgMANAAQAOAAALALQAJALABAUQgBAVgJAMQgKALgPAAQgGAAgHgDgAgMgFQgGAFAAANQAAANAFAGQAFAJAIAAQAIAAAFgGQAFgHAAgNQAAgOgFgFQgFgHgIAAQgHAAgFAGg");
	this.shape_50.setTransform(371.95,11.875);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgZAlQgKgIgDgLIAWgEQABAHAFADQAEADAHABQAIAAAFgDQACgDAAgDQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgCgBgFgCQgagFgHgFQgKgGAAgMQAAgKAJgIQAIgHASgBQAQABAIAFQAJAGADAKIgVAFQgBgFgEgDQgEgDgGABQgIgBgEADQgDABAAAEQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQADACAQAFQASAEAHAFQAHAFAAALQAAALgKAIQgKAJgSAAQgQgBgKgGg");
	this.shape_51.setTransform(357.775,13.35);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgdAvQgKgMAAgVQAAgUAKgLQAJgLAQAAQAMAAAKAMIAAgpIAXAAIAABxIgVAAIAAgMQgFAHgHAEQgHADgFAAQgPAAgKgLgAgLgFQgGAGAAAMQAAANAEAGQAFAJAIAAQAIAAAGgHQAEgGAAgNQAAgOgEgFQgGgHgIAAQgGAAgFAGg");
	this.shape_52.setTransform(348.45,11.875);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgaAqIAAhSIAUAAIAAANQAGgJADgDQAEgDAGAAQAHABAHAEIgHATQgGgDgFgBQgEABgDACQgDADgBAGQgCAHAAAUIAAAZg");
	this.shape_53.setTransform(341.25,13.25);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgeAlQgIgIAAgKQAAgHADgFQAEgGAGgCQAGgDALgCQAPgDAGgDIAAgCQAAgGgEgDQgCgDgIABQgGgBgDADQgDACgDAGIgUgDQAEgNAIgFQAIgHAQAAQAOABAHADQAHADAEAGQADAFAAAPIgBAYIABAQQABAGADAFIgWAAIgBgGIgBgDQgGAGgHACQgFAEgHAAQgNgBgHgGgAAAAFQgJACgCACQgFADAAAFQAAAEAEAEQADADAGAAQAEAAAGgEQAEgDABgEQABgDAAgIIAAgEIgNADg");
	this.shape_54.setTransform(333.05,13.35);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgVAmQgKgFgFgKQgGgKAAgNQAAgLAGgLQAFgJAKgGQAKgFALgBQATAAAMANQAMAMAAASQAAATgMAMQgNANgSAAQgKAAgLgGgAgNgSQgGAHAAALQAAANAGAGQAFAHAIAAQAJAAAFgHQAGgGAAgNQAAgLgGgHQgFgGgJAAQgIAAgFAGg");
	this.shape_55.setTransform(323.775,13.35);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgHA3QgHgEgFgHIAAAMIgVAAIAAhxIAXAAIAAApQAJgMANAAQAPAAALALQAKALgBAUQABAVgKAMQgLALgOAAQgGAAgHgDgAgNgFQgEAFAAANQAAANAEAGQAFAJAJAAQAHAAAFgGQAFgHAAgNQAAgOgFgFQgFgHgIAAQgHAAgGAGg");
	this.shape_56.setTransform(314.2,11.875);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
	this.shape_57.setTransform(300.1261,13.35);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAQA5IAAgsQAAgNgBgCQgCgEgDgCQgDgCgFAAQgEAAgFADQgEADgCAEQgCAFAAALIAAApIgWAAIAAhxIAWAAIAAAqQALgNAOAAQAHAAAGADQAGADADAEQADAFACAFIABAQIAAAwg");
	this.shape_58.setTransform(290.925,11.775);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgDA3QgEgCgCgDQgDgDgBgGIgBgPIAAgjIgKAAIAAgSIAKAAIAAgQIAWgNIAAAdIAOAAIAAASIgOAAIAAAgIAAAMIACADIADABIAJgCIADARQgIADgKAAQgGAAgEgCg");
	this.shape_59.setTransform(283.35,11.975);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_60.setTransform(274,11.775);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_61.setTransform(269.55,11.775);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgeAlQgIgIAAgKQAAgHADgFQAEgGAGgCQAGgDALgCQAPgDAGgDIAAgCQAAgGgEgDQgCgDgIABQgGgBgDADQgDACgDAGIgUgDQAEgNAIgFQAIgHAQAAQAOABAHADQAHADAEAGQADAFAAAPIgBAYIABAQQABAGADAFIgVAAIgCgGIgBgDQgGAGgHACQgFAEgHAAQgNgBgHgGgAAAAFQgJACgCACQgFADAAAFQAAAEAEAEQADADAGAAQAEAAAGgEQAEgDABgEQABgDAAgIIAAgEIgNADg");
	this.shape_62.setTransform(262.85,13.35);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAQA5IAAgsQAAgNgBgCQgCgEgDgCQgDgCgFAAQgEAAgFADQgEADgCAEQgCAFAAALIAAApIgWAAIAAhxIAWAAIAAAqQALgNAOAAQAHAAAGADQAGADADAEQADAFACAFIABAQIAAAwg");
	this.shape_63.setTransform(249.125,11.775);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgZAlQgKgIgDgLIAWgEQABAHAFADQAEADAHABQAIAAAFgDQACgDAAgDQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgCgBgFgCQgagFgHgFQgKgGAAgMQAAgKAJgIQAIgHASgBQAQABAIAFQAJAGADAKIgVAFQgBgFgEgDQgEgDgGABQgIgBgEADQgDABAAAEQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQADACAQAFQASAEAHAFQAHAFAAALQAAALgKAIQgKAJgSAAQgQgBgKgGg");
	this.shape_64.setTransform(239.575,13.35);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgfAlQgHgIAAgKQAAgHAEgFQADgGAGgCQAGgDAMgCQAOgDAGgDIAAgCQAAgGgDgDQgEgDgHABQgGgBgEADQgCACgCAGIgVgDQAEgNAIgFQAIgHAQAAQAOABAIADQAGADAEAGQACAFAAAPIAAAYIABAQQABAGADAFIgWAAIgCgGIgBgDQgFAGgGACQgGAEgHAAQgNgBgIgGgAAAAFQgIACgEACQgEADAAAFQAAAEAEAEQADADAFAAQAFAAAFgEQAFgDABgEQABgDAAgIIAAgEIgNADg");
	this.shape_65.setTransform(230.85,13.35);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAnAqIAAguQAAgNgCgDQgEgEgFAAQgGAAgDACQgFADgBAFQgCAGAAALIAAAnIgVAAIAAgsQAAgMgBgDQgBgEgDgCQgDgCgEABQgFgBgEADQgDADgDAFQgBAFAAALIAAAoIgWAAIAAhSIAUAAIAAAMQALgOAPAAQAIABAGADQAEADAFAHQAFgHAGgDQAHgDAGgBQAKAAAGAEQAGAEADAIQADAFAAAMIAAAzg");
	this.shape_66.setTransform(219.25,13.25);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgZAlQgKgIgDgLIAWgEQABAHAFADQAEADAHABQAIAAAFgDQACgDAAgDQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgCgBgFgCQgagFgHgFQgKgGAAgMQAAgKAJgIQAIgHASgBQAQABAIAFQAJAGADAKIgVAFQgBgFgEgDQgEgDgGABQgIgBgEADQgDABAAAEQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQADACAQAFQASAEAHAFQAHAFAAALQAAALgKAIQgKAJgSAAQgQgBgKgGg");
	this.shape_67.setTransform(207.525,13.35);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgVAmQgKgFgFgKQgGgKAAgNQAAgLAGgLQAFgJAKgGQAKgFALgBQATAAAMANQAMAMAAASQAAATgMAMQgNANgSAAQgKAAgLgGgAgNgSQgGAHAAALQAAANAGAGQAFAHAIAAQAJAAAFgHQAGgGAAgNQAAgLgGgHQgFgGgJAAQgIAAgFAGg");
	this.shape_68.setTransform(193.975,13.35);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgDA3QgEgCgDgDQgCgDgBgGIgBgPIAAgjIgJAAIAAgSIAJAAIAAgQIAVgNIAAAdIAPAAIAAASIgPAAIAAAgIABAMIACADIADABIAJgCIACARQgHADgKAAQgGAAgEgCg");
	this.shape_69.setTransform(186.4,11.975);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgVALIAAgVIAqAAIAAAVg");
	this.shape_70.setTransform(176.95,13.35);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
	this.shape_71.setTransform(164.9261,13.35);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_72.setTransform(158.35,11.775);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgoA6IAAhxIAVAAIAAAMQAEgGAHgEQAGgEAHAAQAPAAAKALQAKAMAAAUQAAAUgKALQgKAMgPAAQgFAAgGgDQgGgDgFgGIAAApgAgNghQgFAGAAAMQAAAOAFAGQAGAGAHAAQAIAAAFgGQAFgFAAgOQAAgNgGgGQgEgHgIAAQgHAAgGAHg");
	this.shape_73.setTransform(151.5,14.825);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAnAqIAAguQAAgNgDgDQgCgEgHAAQgEAAgFACQgEADgBAFQgCAGAAALIAAAnIgVAAIAAgsQAAgMgBgDQgCgEgCgCQgCgCgEABQgGgBgDADQgFADgCAFQgBAFAAALIAAAoIgWAAIAAhSIAUAAIAAAMQALgOAPAAQAIABAGADQAFADADAHQAGgHAGgDQAGgDAIgBQAJAAAGAEQAGAEAEAIQACAFAAAMIAAAzg");
	this.shape_74.setTransform(139.2,13.25);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_75.setTransform(129.9,11.775);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgZAlQgKgIgDgLIAWgEQABAHAFADQAEADAHABQAIAAAFgDQACgDAAgDQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgCgBgFgCQgagFgHgFQgKgGAAgMQAAgKAJgIQAIgHASgBQAQABAIAFQAJAGADAKIgVAFQgBgFgEgDQgEgDgGABQgIgBgEADQgDABAAAEQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQADACAQAFQASAEAHAFQAHAFAAALQAAALgKAIQgKAJgSAAQgQgBgKgGg");
	this.shape_76.setTransform(123.025,13.35);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
	this.shape_77.setTransform(109.7761,13.35);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgaAqIAAhSIAUAAIAAANQAFgJAEgDQAEgDAFAAQAIABAHAEIgHATQgGgDgEgBQgFABgDACQgDADgBAGQgCAHAAAUIAAAZg");
	this.shape_78.setTransform(102.9,13.25);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgfAlQgHgIAAgKQAAgHAEgFQADgGAGgCQAGgDAMgCQAOgDAGgDIAAgCQAAgGgDgDQgDgDgIABQgGgBgEADQgDACgBAGIgUgDQADgNAIgFQAIgHAQAAQAOABAHADQAIADACAGQADAFABAPIgBAYIABAQQABAGADAFIgVAAIgDgGIgBgDQgFAGgHACQgFAEgHAAQgNgBgIgGgAAAAFQgIACgEACQgEADAAAFQAAAEADAEQAEADAFAAQAGAAAEgEQAEgDACgEQABgDAAgIIAAgEIgNADg");
	this.shape_79.setTransform(94.7,13.35);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgZAlQgKgIgDgLIAWgEQABAHAFADQAEADAHABQAIAAAFgDQACgDAAgDQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgCgBgFgCQgagFgHgFQgKgGAAgMQAAgKAJgIQAIgHASgBQAQABAIAFQAJAGADAKIgVAFQgBgFgEgDQgEgDgGABQgIgBgEADQgDABAAAEQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQADACAQAFQASAEAHAFQAHAFAAALQAAALgKAIQgKAJgSAAQgQgBgKgGg");
	this.shape_80.setTransform(81.175,13.35);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
	this.shape_81.setTransform(72.3761,13.35);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_82.setTransform(65.8,11.775);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgYAmQgHgDgDgHQgDgGAAgMIAAg0IAWAAIAAAmQAAARABAEQACAEADADQADACAFAAQAFAAAEgEQAFgDABgEQACgFAAgRIAAgjIAWAAIAABSIgVAAIAAgMQgEAGgIAEQgGAFgIAAQgJAAgGgFg");
	this.shape_83.setTransform(58.675,13.45);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgaAqIAAhSIAVAAIAAANQAEgJAEgDQAEgDAGAAQAHABAHAEIgHATQgFgDgFgBQgFABgDACQgCADgCAGQgCAHAAAUIAAAZg");
	this.shape_84.setTransform(51.3,13.25);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
	this.shape_85.setTransform(38.5761,13.35);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAQA5IAAgsQAAgNgBgCQgCgEgDgCQgDgCgFAAQgEAAgFADQgEADgCAEQgCAFAAALIAAApIgWAAIAAhxIAWAAIAAAqQALgNAOAAQAHAAAGADQAGADADAEQADAFACAFIABAQIAAAwg");
	this.shape_86.setTransform(29.375,11.775);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgLA5IAAheIgiAAIAAgTIBaAAIAAATIghAAIAABeg");
	this.shape_87.setTransform(19.6,11.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// BG
	this.instance = new lib.Cloud("synched",0);
	this.instance.setTransform(0,0,1.2004,1.34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene3BoyTXT3, new cjs.Rectangle(-1,-1,523,44.8), null);


(lib.Scene3BoyTXT1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAOQAHgCACgEQADgDAAgGIgKAAIAAgWIAVAAIAAAQQAAAIgBAGQgCAFgFAFQgEAEgGADg");
	this.shape.setTransform(279.2,28.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAOQAHgCADgEQABgDAAgGIgJAAIAAgWIAVAAIAAAQQAAAIgCAGQgCAFgEAFQgEAEgHADg");
	this.shape_1.setTransform(275.35,28.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAvQgLgMAAgVQAAgUAKgLQALgLAPAAQANAAAKAMIAAgpIAWAAIAABxIgVAAIAAgMQgFAHgHAEQgHADgFAAQgPAAgKgLgAgMgFQgFAGAAAMQAAANAEAGQAFAJAJAAQAHAAAFgHQAFgGABgNQgBgOgFgFQgEgHgIAAQgIAAgFAGg");
	this.shape_2.setTransform(268.2,31.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAQArIAAgrQAAgMgCgEQgBgEgDgDQgDgCgFABQgFgBgEADQgFAEgBAFQgCAFAAANIAAAmIgWAAIAAhTIAUAAIAAANQALgOAQgBQAHAAAGADQAGADADAEQADAEACAFIABAPIAAAzg");
	this.shape_3.setTransform(258.675,33.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_4.setTransform(251.55,31.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAQA5IAAgsQAAgNgBgCQgCgEgDgCQgDgCgFAAQgEAAgFADQgEADgCAEQgCAFAAALIAAApIgWAAIAAhxIAWAAIAAAqQALgNAOAAQAHAAAGADQAGADADAEQADAFACAFIABAQIAAAwg");
	this.shape_5.setTransform(244.475,31.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdAdQgJgLAAgSQAAgTALgMQALgLAQgBQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNABQgVAAgKgPgAgKgUQgFAFAAAJIAgAAQAAgKgFgEQgFgGgGABQgGgBgFAGg");
	this.shape_6.setTransform(235.0261,33.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgvA5IAAhxIAuAAIATABQAHABAFAEQAGADADAGQADAGABAIQgBAIgEAGQgEAHgIADQALADAGAHQAFAHAAAKQAAAIgEAHQgDAIgGAEQgHAEgJABQgGABgVAAgAgYAmIAWAAIAOgBQAGgBADgDQADgEABgGQgBgFgCgEQgCgDgFgCQgFgCgPAAIgTAAgAgYgLIAPAAIARAAQAFgBAEgDQADgEAAgFQAAgFgDgEQgDgDgGgBIgSAAIgOAAg");
	this.shape_7.setTransform(225.05,31.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZAkQgKgHgDgLIAWgDQABAGAFADQAEADAHABQAIAAAFgDQACgDAAgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgCgCgFgCQgagFgHgFQgKgGAAgMQAAgKAJgIQAIgHASgBQAQABAIAFQAJAGADALIgVADQgBgEgEgDQgEgDgGABQgIgBgEADQgDABAAAEQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQADACAQAFQASAEAHAFQAHAFAAALQAAALgKAIQgKAJgSAAQgQAAgKgIg");
	this.shape_8.setTransform(210.025,33.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGAUIgFgUIAAgTIAXAAIAAATIgEAUg");
	this.shape_9.setTransform(203.85,27.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVAmQgKgFgFgKQgGgKAAgNQAAgLAGgLQAFgJAKgGQAKgFALgBQATAAAMANQAMAMAAASQAAATgMAMQgNANgSAAQgKgBgLgFgAgNgSQgGAHAAALQAAAMAGAHQAFAGAIABQAJgBAFgGQAGgHAAgMQAAgLgGgHQgFgGgJgBQgIABgFAGg");
	this.shape_10.setTransform(197.125,33.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAQA5IAAgsQAAgNgBgCQgCgEgDgCQgDgCgFAAQgEAAgFADQgEADgCAEQgCAFAAALIAAApIgWAAIAAhxIAWAAIAAAqQALgNAOAAQAHAAAGADQAGADADAEQADAFACAFIABAQIAAAwg");
	this.shape_11.setTransform(187.375,31.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAXA5IgXhUIgWBUIgZAAIgbhxIAXAAIASBNIAVhNIAaAAIAUBPIAShPIAXAAIgcBxg");
	this.shape_12.setTransform(174.925,31.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAHAYIAAgQQgBgJACgFQACgGAFgEQAEgEAHgDIAEAJQgHACgCAEQgDAEAAAGIAKAAIAAAWgAgdAYIAAgQQAAgJACgFQABgGAFgEQAEgEAIgDIADAJQgGACgDAEQgDAEAAAGIALAAIAAAWg");
	this.shape_13.setTransform(163.4,28.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
	this.shape_14.setTransform(408.8761,13.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAnAqIAAguQAAgNgCgDQgEgEgFAAQgGAAgDACQgEADgCAFQgCAGAAALIAAAnIgVAAIAAgsQAAgMgBgDQgCgEgCgCQgDgCgDABQgFgBgFADQgEADgCAFQgBAFAAALIAAAoIgWAAIAAhSIAUAAIAAAMQALgOAPAAQAIABAGADQAEADAEAHQAGgHAGgDQAHgDAGgBQAKAAAGAEQAHAEACAIQADAFAAAMIAAAzg");
	this.shape_15.setTransform(397.35,13.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeAlQgIgIAAgKQAAgHADgFQAEgGAGgCQAGgDALgCQAPgDAGgDIAAgCQAAgGgEgDQgCgDgIABQgGgBgDADQgEACgCAGIgUgDQAEgNAIgFQAIgHAQAAQAOABAIADQAGADAEAGQACAFABAPIgBAYIABAQQABAGADAFIgWAAIgBgGIgBgDQgGAGgHACQgFAEgHAAQgNgBgHgGgAAAAFQgJACgCACQgFADAAAFQAAAEAEAEQADADAGAAQAFAAAFgEQADgDACgEQABgDAAgIIAAgEIgNADg");
	this.shape_16.setTransform(385.8,13.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgcA0QgJgHAAgLIAAgDIAZADQABAFADABQACADAHAAQAIAAAEgDQADgCACgDIABgLIAAgMQgLAOgNAAQgRAAgKgOQgHgMgBgPQAAgVAKgLQALgLAOAAQAPAAAKANIAAgLIAUAAIAABJQABAPgDAHQgDAHgEAFQgEAEgHACQgIACgLAAQgUAAgJgHgAgMgjQgFAGAAANQAAANAFAFQAGAGAGAAQAIAAAFgGQAGgGAAgMQAAgNgGgGQgEgGgJAAQgGAAgGAGg");
	this.shape_17.setTransform(376.3,14.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
	this.shape_18.setTransform(362.6261,13.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJApIghhSIAXAAIAQAqIADAOIACgHIADgHIAPgqIAXAAIghBSg");
	this.shape_19.setTransform(353.75,13.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_20.setTransform(347.15,11.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgCA3QgGgCgCgDQgCgDgBgGIAAgPIAAgjIgKAAIAAgSIAKAAIAAgQIAUgNIAAAdIAQAAIAAASIgQAAIAAAgIABAMIACADIAEABIAJgCIABARQgIADgJAAQgGAAgDgCg");
	this.shape_21.setTransform(342.25,11.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgZAlQgKgIgDgLIAWgEQABAHAFADQAEADAHABQAIAAAFgDQACgDAAgDQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgCgBgFgCQgagFgHgFQgKgGAAgMQAAgKAJgIQAIgHASgBQAQABAIAFQAJAGADAKIgVAFQgBgFgEgDQgEgDgGABQgIgBgEADQgDABAAAEQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQADACAQAFQASAEAHAFQAHAFAAALQAAALgKAIQgKAJgSAAQgQgBgKgGg");
	this.shape_22.setTransform(334.925,13.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
	this.shape_23.setTransform(326.1261,13.35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgPA6IAAhAIgMAAIAAgSIAMAAIAAgGQAAgKADgGQABgFAHgDQAFgDAIAAQAKAAAJADIgDAPIgKgBQgFAAgCACQgCACAAAGIAAAGIARAAIAAASIgRAAIAABAg");
	this.shape_24.setTransform(319.4,11.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgCA3QgGgCgCgDQgCgDgBgGIAAgPIAAgjIgLAAIAAgSIALAAIAAgQIAUgNIAAAdIAQAAIAAASIgQAAIAAAgIABAMIACADIAEABIAJgCIACARQgJADgJAAQgGAAgDgCg");
	this.shape_25.setTransform(309.3,11.975);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgZAlQgKgIgDgLIAWgEQABAHAFADQAEADAHABQAIAAAFgDQACgDAAgDQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgCgBgFgCQgagFgHgFQgKgGAAgMQAAgKAJgIQAIgHASgBQAQABAIAFQAJAGADAKIgVAFQgBgFgEgDQgEgDgGABQgIgBgEADQgDABAAAEQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQADACAQAFQASAEAHAFQAHAFAAALQAAALgKAIQgKAJgSAAQgQgBgKgGg");
	this.shape_26.setTransform(301.975,13.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgaAqIAAhSIAVAAIAAANQAEgJAEgDQAEgDAGAAQAHABAHAEIgHATQgFgDgFgBQgFABgDACQgCADgCAGQgCAHAAAUIAAAZg");
	this.shape_27.setTransform(295.2,13.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_28.setTransform(289.25,11.775);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgPA6IAAhAIgMAAIAAgSIAMAAIAAgGQAAgKADgGQABgFAHgDQAFgDAIAAQAKAAAJADIgDAPIgKgBQgFAAgCACQgCACAAAGIAAAGIARAAIAAASIgRAAIAABAg");
	this.shape_29.setTransform(284.65,11.675);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
	this.shape_30.setTransform(272.6761,13.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAQA5IAAgsQAAgNgBgCQgCgEgDgCQgDgCgFAAQgEAAgFADQgEADgCAEQgCAFAAALIAAApIgWAAIAAhxIAWAAIAAAqQALgNAOAAQAHAAAGADQAGADADAEQADAFACAFIABAQIAAAwg");
	this.shape_31.setTransform(263.475,11.775);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgDA3QgEgCgCgDQgDgDgBgGIgBgPIAAgjIgKAAIAAgSIAKAAIAAgQIAWgNIAAAdIAOAAIAAASIgOAAIAAAgIAAAMIACADIADABIAJgCIADARQgIADgKAAQgGAAgEgCg");
	this.shape_32.setTransform(255.9,11.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgVAmQgKgFgFgKQgGgKAAgNQAAgLAGgLQAFgJAKgGQAKgFALgBQATAAAMANQAMAMAAASQAAATgMAMQgNANgSAAQgKAAgLgGgAgNgSQgGAHAAALQAAANAGAGQAFAHAIAAQAJAAAFgHQAGgGAAgNQAAgLgGgHQgFgGgJAAQgIAAgFAGg");
	this.shape_33.setTransform(243.925,13.35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgDA3QgEgCgDgDQgCgDgBgGIgBgPIAAgjIgJAAIAAgSIAJAAIAAgQIAVgNIAAAdIAPAAIAAASIgPAAIAAAgIABAMIACADIADABIAJgCIACARQgHADgKAAQgGAAgEgCg");
	this.shape_34.setTransform(236.35,11.975);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
	this.shape_35.setTransform(224.6761,13.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAnAqIAAguQAAgNgCgDQgEgEgFAAQgFAAgEACQgEADgCAFQgCAGAAALIAAAnIgVAAIAAgsQAAgMgBgDQgBgEgDgCQgDgCgEABQgEgBgFADQgDADgCAFQgCAFAAALIAAAoIgWAAIAAhSIAUAAIAAAMQALgOAPAAQAIABAGADQAEADAFAHQAFgHAGgDQAGgDAIgBQAJAAAGAEQAGAEADAIQADAFAAAMIAAAzg");
	this.shape_36.setTransform(213.15,13.25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgVAmQgKgFgFgKQgGgKAAgNQAAgLAGgLQAFgJAKgGQAKgFALgBQATAAAMANQAMAMAAASQAAATgMAMQgNANgSAAQgKAAgLgGgAgNgSQgGAHAAALQAAANAGAGQAFAHAIAAQAJAAAFgHQAGgGAAgNQAAgLgGgHQgFgGgJAAQgIAAgFAGg");
	this.shape_37.setTransform(201.225,13.35);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgbAgQgLgLAAgVQAAgTALgMQALgMARAAQAPABAJAGQAJAHAEANIgWAEQgBgHgDgDQgEgDgHAAQgHAAgFAGQgFAGAAANQAAAOAFAGQAFAFAIABQAGAAAEgEQAEgDACgJIAVADQgDAPgKAIQgJAIgQAAQgRAAgLgMg");
	this.shape_38.setTransform(191.975,13.35);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_39.setTransform(185.2,11.775);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
	this.shape_40.setTransform(178.4261,13.35);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAOApIgOg0IgNA0IgVAAIgbhSIAWAAIAPA2IAOg2IAVAAIANA2IAQg2IAWAAIgbBSg");
	this.shape_41.setTransform(167.85,13.35);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgZAlQgKgIgDgLIAWgEQABAHAFADQAEADAHABQAIAAAFgDQACgDAAgDQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgCgBgFgCQgagFgHgFQgKgGAAgMQAAgKAJgIQAIgHASgBQAQABAIAFQAJAGADAKIgVAFQgBgFgEgDQgEgDgGABQgIgBgEADQgDABAAAEQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQADACAQAFQASAEAHAFQAHAFAAALQAAALgKAIQgKAJgSAAQgQgBgKgGg");
	this.shape_42.setTransform(152.525,13.35);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgCA3QgFgCgDgDQgCgDgBgGIAAgPIAAgjIgKAAIAAgSIAKAAIAAgQIAUgNIAAAdIAQAAIAAASIgQAAIAAAgIABAMIACADIAEABIAJgCIACARQgJADgJAAQgGAAgDgCg");
	this.shape_43.setTransform(145.6,11.975);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAQAqIAAgqQAAgMgCgEQgBgEgDgDQgDgBgFAAQgFAAgEACQgFADgBAGQgCAFAAANIAAAlIgWAAIAAhSIAUAAIAAANQALgOAQgBQAHAAAGADQAGADADAEQADAEACAFIABAPIAAAyg");
	this.shape_44.setTransform(138.075,13.25);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
	this.shape_45.setTransform(128.6261,13.35);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgcA0QgIgHAAgLIAAgDIAZADQAAAFADABQACADAGAAQAJAAAEgDQADgCACgDIAAgLIAAgMQgKAOgOAAQgQAAgKgOQgIgMAAgPQAAgVALgLQAJgLAPAAQAPAAAKANIAAgLIAUAAIAABJQAAAPgCAHQgDAHgEAFQgEAEgIACQgHACgLAAQgUAAgJgHgAgMgjQgFAGAAANQAAANAFAFQAFAGAHAAQAIAAAFgGQAGgGAAgMQAAgNgGgGQgEgGgJAAQgHAAgFAGg");
	this.shape_46.setTransform(119.2,14.925);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgdAvQgKgMAAgVQAAgUAKgLQAJgLAQAAQAMAAAKAMIAAgpIAXAAIAABxIgVAAIAAgMQgFAHgHAEQgHADgFAAQgPAAgKgLgAgLgFQgGAGAAAMQAAANAEAGQAFAJAIAAQAIAAAGgHQAEgGAAgNQAAgOgEgFQgGgHgIAAQgGAAgFAGg");
	this.shape_47.setTransform(105,11.875);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAQAqIAAgqQAAgMgCgEQgBgEgDgDQgDgBgFAAQgFAAgEACQgFADgBAGQgCAFAAANIAAAlIgWAAIAAhSIAUAAIAAANQALgOAQgBQAHAAAGADQAGADADAEQADAEACAFIABAPIAAAyg");
	this.shape_48.setTransform(95.475,13.25);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgeAlQgIgIAAgKQAAgHADgFQAEgGAGgCQAGgDALgCQAPgDAGgDIAAgCQAAgGgEgDQgCgDgIABQgGgBgDADQgEACgCAGIgUgDQAEgNAIgFQAIgHAQAAQAOABAIADQAGADAEAGQACAFAAAPIAAAYIABAQQABAGADAFIgWAAIgBgGIgBgDQgGAGgHACQgFAEgHAAQgNgBgHgGgAAAAFQgJACgCACQgFADAAAFQAAAEAEAEQADADAGAAQAFAAAFgEQADgDACgEQABgDAAgIIAAgEIgNADg");
	this.shape_49.setTransform(86.1,13.35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgZAlQgKgIgDgLIAWgEQABAHAFADQAEADAHABQAIAAAFgDQACgDAAgDQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgCgBgFgCQgagFgHgFQgKgGAAgMQAAgKAJgIQAIgHASgBQAQABAIAFQAJAGADAKIgVAFQgBgFgEgDQgEgDgGABQgIgBgEADQgDABAAAEQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQADACAQAFQASAEAHAFQAHAFAAALQAAALgKAIQgKAJgSAAQgQgBgKgGg");
	this.shape_50.setTransform(72.575,13.35);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAgKgVQgFAGAAAJIAgAAQAAgJgFgGQgFgEgGAAQgGAAgFAEg");
	this.shape_51.setTransform(63.7761,13.35);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_52.setTransform(57.2,11.775);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgdAvQgLgMAAgVQAAgUALgLQAJgLAPAAQANAAAKAMIAAgpIAWAAIAABxIgUAAIAAgMQgFAHgHAEQgGADgHAAQgOAAgKgLgAgLgFQgGAGAAAMQAAANADAGQAGAJAJAAQAHAAAFgHQAGgGgBgNQABgOgGgFQgEgHgIAAQgIAAgEAGg");
	this.shape_53.setTransform(49.9,11.875);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgeAlQgIgIAAgKQAAgHADgFQAEgGAGgCQAGgDALgCQAPgDAGgDIAAgCQAAgGgEgDQgDgDgHABQgGgBgEADQgCACgDAGIgUgDQAEgNAIgFQAIgHAQAAQAOABAIADQAHADADAGQACAFAAAPIAAAYIABAQQABAGADAFIgWAAIgCgGIAAgDQgGAGgGACQgGAEgHAAQgNgBgHgGgAAAAFQgIACgDACQgFADAAAFQAAAEAEAEQADADAGAAQAFAAAEgEQAEgDACgEQABgDAAgIIAAgEIgNADg");
	this.shape_54.setTransform(40.75,13.35);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgnA5IAAhxIAXAAIAABdIA4AAIAAAUg");
	this.shape_55.setTransform(31.825,11.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// BG
	this.instance = new lib.Cloud("synched",0);
	this.instance.setTransform(0,0,1.0137,1.3396);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene3BoyTXT1, new cjs.Rectangle(-1,-1,442,44.8), null);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol72("synched",0);
	this.instance.setTransform(-23.85,-10.75,1,1,0,0,0,9.5,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.3,-11.3,21.499999999999996,22.700000000000003);


(lib.Symbol79 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// arrow.png
	this.goLeft_btn = new lib.ArrBTN();
	this.goLeft_btn.name = "goLeft_btn";
	this.goLeft_btn.setTransform(-145,233.2,1,1,0,0,0,79,45.2);
	new cjs.ButtonHelper(this.goLeft_btn, 0, 1, 2, false, new lib.ArrBTN(), 3);

	this.timeline.addTween(cjs.Tween.get(this.goLeft_btn).wait(1));

	// arrow.png
	this.goRight_btn = new lib.ArrBTN();
	this.goRight_btn.name = "goRight_btn";
	this.goRight_btn.setTransform(699,233.2,1,1,0,0,180,79,45.2);
	new cjs.ButtonHelper(this.goRight_btn, 0, 1, 2, false, new lib.ArrBTN(), 3);

	this.timeline.addTween(cjs.Tween.get(this.goRight_btn).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol79, new cjs.Rectangle(-224,188,1002,90.5), null);


(lib.HotDogSplesh = function(mode,startPosition,loop,reversed) {
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
		//this.stop();
	}
	this.frame_4 = function() {
		this.dispatchEvent("destroyIcon", true);
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(1));

	// Layer_2
	this.instance = new lib.Symbol78("synched",0);
	this.instance.setTransform(-3.95,22.35,1,1,0,0,0,37,26.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:36.9,scaleX:0.5135,scaleY:0.3939,x:-4,y:-0.6},4).to({_off:true},1).wait(5));

	// clouds
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(0.5,1,1).p("AC7hNQAXgOAugbQgWBdAAARQgdgRgTgKQgigTgdgBQAXAAApgWgAggjSQgIgogNgPQBaAuAvAGIABAEQgxAQgVAIQgkARgCAZQgDgkgGgfgABAApQgEAOgGA5QgDAhgUAfIAFAAQAIAAAmgDQAlgEAaAAQAGAAAPgDQgJgPgNgOQgCgDgcgcQAAgCgDAAQALgEAbgNQAagKAQAEQgIgJAAggQAAgQABgXQhIASgkARgAAfDMQgQAAAAgVIABglQgIADgIAGQgKAHAAAEQAAAGAFASQAFASAAAIQgIAagMACIAAAFQABAAA1AFQAvAEANAIQAGgDAKgaQAGgNAIgUQgOgHgaADQgsAEgJAAgAjYhOQgMALgCACQgEgUgGgkQgGghgJgfIAAgFIBIAAIAAAMQgCAtgCAZQgTAUgKAKgAghhkQgCgBhAgiQgmgUgVgIQgDAbgKAgIgBABIgBADQgCAGgCAFQgQAsgWAeQAAACgDADQANgEAXACQAYACAMAHIABAAQAGgFAHgUQAIgVAEgEQACANABALQACANAAAKQAAATgFAeIANAJQAPgYAWgiQAmg9AEgcgAiMBHQgMAWgEAQQgDATgEANQgHACgMgIQgFgEgGgGQgVgSgGgBQALADATAjQAZAxACADQAKgHAegaQAfgbARgRQgegYgjgYg");
	this.shape.setTransform(-1.875,2.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#007DBB").ss(0.5,1,1).p("ACNgwQgOgEgTgIQgYgJgDgBQAHgKAdglQAbgkAFgPQABAXAYAdQAcAgAgABQguAfgnAJgAiyhoQgrgTgMAAQANgGAXglQAOgXAKgVQAMARAMAyQAJApAKATQgPgGghgPgAgugQQgQgOgTgLQgZgNgOABIgDAAQACgDAJgNQAJgNADgGQANALAOAYQAPAaAMALgAioB0QgpAcgVAHQAEAFAPAaQANAWAKAHQAJgOAEgdQACgQAFgkg");
	this.shape_1.setTransform(-0.375,-8.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#AA0F10").ss(0.5,1,1).p("Ag/jmQASAAAtgCQAVAAAIACQAAA1gUACQgXAEgQgZQgSgdgPgFgABnCdQgTAFgKAFQgBAEANATQAPAWADAIQADgCAnggQAqgiAVgMQgHgLgdgUQgNgJgkgXIAAAPQACAGAAAtQgJAJgLAEQgBAAAAABQgBAAgBAAgAibh/QgJgNgYgYQgUgVAAgCQAAgCAKgfQAIgbgFgPIAAgDQBRAXAagFIABABQAAABACAAQgEAEgFAOQgEANAAACQAAAFAFAPIAAACQgegOgZgSQAAA3gHAogAiyDOQgSAXgKAMIAAAHQAEgBAEAAQAPAAAbAIQANAEAZAHQgEgRgCgoQgDgsgDgPIgHgEQgKAUgfAog");
	this.shape_2.setTransform(7.125,-4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAiD+Ig2gFIAAgFQAMgCAIgaQAAgIgFgSQgFgSAAgGQAAgEAKgHQAIgGAIgDIgBAlQAAAVAQAAIA1gEQAagDAOAHIgOAhQgKAagGADQgNgIgvgEgAi+CQQgTgjgLgDQAGABAVASIALAKQAMAIAHgCQAEgNADgTQAEgQAMgWQAjAYAeAYQgRARgfAbQgeAagKAHIgbg0gAAfCwQAUgfADghQAGg5AEgOIAMgFQAkgRBIgSIgBAnQAAAgAIAJQgQgEgaAKQgbANgLAEQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAIAeAfQANAOAJAPQgPADgGAAQgaAAglAEIguADgAh4ArQAFgeAAgTIgCgXIgDgYQgEAEgIAVQgHAUgGAFIgBAAQgMgHgYgCQgXgCgNAEQADgDAAgCQAWgeAQgsIAEgLIABgDIABgBQAKggADgbQAVAIAmAUIBCAjIAFAFQgEAcgmA9IglA6gAC6gjQgigTgdgBQAXAAApgWIBFgpQgWBdAAARQgdgRgTgKgAjwh5QgGghgJgfIAAgFIBIAAIAAAMIgEBGIgdAeIgOANIgKg4gAggjSQgIgogNgPQBaAuAvAGIABAEQgxAQgVAIQgkARgCAZQgDgkgGgfg");
	this.shape_3.setTransform(-1.875,2.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#049EE9").s().p("AjTC2QgPgagEgFQAVgHApgcIgHA0QgEAdgJAOQgKgHgNgWgAhRgpQgZgNgOABIgDAAIALgQIAMgTQANALAOAYQAPAaAMALQgQgOgTgLgACNgwIghgMIgbgKIAkgvQAbgkAFgPQABAXAYAdQAcAgAgABQguAfgnAJgAiyhoQgrgTgMAAQANgGAXglQAOgXAKgVQAMARAMAyQAJApAKATIgwgVg");
	this.shape_4.setTransform(-0.375,-8.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC2D2E").s().p("AicD/QgbgIgPAAIgIABIAAgIIAcgjQAfgoAKgTIAHADQADAQADAsQACAoAEAQIgmgKgABWC+QgNgUABgDQAKgFATgFIACAAIABgBQALgEAJgJQAAgtgCgGIAAgPIAxAgQAdAUAHAKQgVANgqAhIgqAjQgDgJgPgVgAi8ikQgUgVAAgCIAKghQAIgbgFgPIAAgDQBRAYAagGIABABIACABQgEAEgFAOIgEAPQAAAFAFAPIAAACQgegOgZgSQAAA3gHAoQgJgNgYgYgAgejDQgSgegPgEIA/gDQAVAAAIADQAAA0gUACIgGABQgTAAgOgVg");
	this.shape_5.setTransform(7.125,-4.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CCCCCC").ss(0.5,1,1).p("ACRiFQgVgXgHgIQgMgNAAgJQAAgCALgKQAMgKACgFQABAAAYAbQAOAQALAHQgNAHgFAEQgHAFgKAOgAhIiyQAKADAuABQAkAGgUAgIAAADQADgLAZgVQAagVAOAAIAAgBQABgBABAAQgSgDgSgMQgTgPgHgFQgPgKgCgBQgOgFgJANQgDARgRAPQgRANgDADgADahvQANgUAAgRQAAgJgDgGQAJAAAhAFQADAFAAAGQgDAYAAAHIgWgRQgIAAgWAWgAD4geQALgtABgEQAAgEAAgPQAIAEAKAHQAKAFAUgBIAAAGQAAARgIAWQgIAWgGAAQgPAAgQgMAEqB0QAMgLAPgNQAJgJABgKIACAAQABgBAAgBQAHA1AFAOQgPgKgIgFQgQgJgNACgAEuCGQAAgBABAAIAAgCQgBABAAACQgKAiADAoQgDgLgJgHQgLgHgEgDQgRgMAOgoQAJAHAOABQAFAAAJgCgAAjDiQgBAEgCADQgHAOgIAKQgCABgRASIAAACQAKgFAHAAQAJAAARALQAMAHAFAFQAFgCAJgUQAKgVAIgFIAAgFQgEAAgZgFQgWgEgHgBABzDkQgXgNgFgCQgFgDgMgCQAPgGATgVQAVgWADgQQAOAMAQAEQAPAEAMgFQAHAHABAIIAAAPQgGAAgMgDQgLgEgIAAQgUAAgFALQgOAigCACgAAeFBIADAAQgCAAgBABQAAgBAAAAgAikkUIgDgCIABAAQAdgDAogoIAtA/QAAAJgNAWQgOAXAAAGQgDgDgngmQgfgggMgFgAixkbQAAgEAAgDAk/i6IgCAAQABAAABABgAkxhyQgUAGgHAUQgHAVgDABQAAADgCAAQAsAOAQASQADgJAKgUQAHgTgDgMQgRgCgVgVQgEgDgDgEAkVgJQgBAAgBABIABgBQABAAAAAAQAAgBAAgBQABABABAAQgBAAgBABgAh0D/QgGgCgHgCAgnDzQgVgBgPgGQgNgFgLAAQgWAFgGAAQgQAAABgWQABgjgBgBIAAgCQAOAHAtACQArACANgEQgKAUgBAEQgGATAFARgAkBASQgLAAgQgBQgPgBgCAAQgXAAgZAFQANAJAGAdQAGAbgDAUQAEgKASgCQAHgBAYAAQANAAAEgMQADgIAAgXQAAgHgDgZgAiWEgIASAAQAJAEAfAdQAOgKAEgmQAAgGgqgMQgMAQgPAMQgEADgDACQgGAFgBAAIAAgFg");
	this.shape_6.setTransform(0.5,-1.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#AA0F10").ss(0.5,1,1).p("AB7kzQgCgIgCgOIAgAAIAIACIAAASQgCADgRAVQgOAQAAAHQgBgegCgPgAEtBQQgIgDgRgSQgPgQAAgCQAAgBAZgmQADAJAOAJQAFACAQAIIAAABQABABABAAQgLAOgOAigACfDFQADAXgMAOQgOALgFAHQAGAHAFAPQAGARADAEQARgaAGgGQAPgQARAAQAJAAAOAFQAQAHAJABQAAgHgGgUQgFgUABgLQgEAAgNAFQgMADgDAAQgEAAgXgGQgXgHgDAAgAALEsQgagQgIgJQANAbgyAmIAAADQA1gDAQAXQAEgEAMgRQAHgKALgSQgNADgJgFQgFgDgFgJgAgekkQgRgegLgRQAGgGAPgHQAMgGACgEIADAAQgBAFgDAfQgCAXgEALgAkLiKQgZgdgHgMQgEgKgCgFQALABAKgHQAGgEAKgIQACAHAMAVQALAUAAAEQAAAEgOAKQgGAFgEADgAjDh6QgYgtgEgFQASAIAlgZQAFAGAFANQAFAMADAEQgJAEgSAPQgRAOgBgBgAlFBkQAAAGAEAXQADAXAAADQANgHAqgLIAAgMQgDgOgQgDQgmgGgFgCg");
	this.shape_7.setTransform(-0.875,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#006EA3").ss(0.5,1,1).p("AgLj3QgRgXgFgQQgCgJgBgJQACABAFABQAHABAQgBQAWgCAHgFIAMAAQgHAdgFAQQgJAZgYAAAB4jlQAOgFAJgLQAFgGAHgNIAAgDQABAUAZARQAEADAGAEQAKAGAOAIQgEAGgQAQQgJAKgFAGQAAABAAABQgBAAAAABQgCACAAACQgDgFAAgLQAAgMAFgPQgEgCgagGQgVgFgJgJgAEEhjQAAgEAAgYQABgMgGgKIAAgUQALgBASABQAPAAAJgFQgDAEgEAgQgDAdAAAKgADDB6QgSgFgKgFQgIgEgEgBQABgDAOgvQADAEARALQAPAKAAAHQgJAegBADgACjEYQgSARgLAIQgHAFgEAFQAGAFAOAhQAHgDAOgMQAOgMAHgBQgGgXgQgWgAjRkeQgBgMgHgHQgEgEgDgEQgCgEAAgDQAAgGAKgKQAGgFALgLQABAKAEAKQAFAMAAAIQAAAHgEAFQgFAHgDAGAkrjtQADgGA0hCQABABABACQAKAaAQBMQgcAAgYgOQgVgPgKgEgAkXAFQAPALAAAQQAAALgFAEIAAASQAIgDAWgIQAXgIAHgEQgCgBgDgMQgFgOAAgKQAAgTAFgeIAAgPQgHACgjgUQgGAagQAVQgOAQgPAIQATAGAJAFgAjdCOQgjALgSADQgJABgQAAQAFARAEAOQAIAbgCAPQAFAAALgDQALgFADAAQAFAAAJAFQAJAFAKAAQAFgPAAgPQAAAAgDgYQgCgWAAgOg");
	this.shape_8.setTransform(3.725,-1.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiEEhIgSAAIAHgGQAPgMAMgQQAqAMAAAHQgDAlgOAKQgggdgJgDgAApEcQgRgKgJAAQgHAAgJAFIAAgDIASgTQAIgKAHgNIAdAFQAYAFAFAAIAAAFQgIAEgKAVQgJAUgGACQgEgEgMgIgAhKDsQgOgFgLAAQgWAFgFAAQgRAAABgWIAAgjIAAgDQAOAHAtADQArACANgEIgLAYQgGASAFASQgUgCgPgGgABXDWQgGgDgLgCQAOgHAUgUQAUgXADgPQAOAMARAEQAPAEAMgFQAHAGAAAIIAAAQQgFAAgMgEQgMgEgHAAQgVAAgEAMQgOAhgCADIgcgPgAEaC+IgOgKQgRgLAOgoQAJAHAOAAQAFAAAJgCQgKAjADAoQgDgMgKgHgAFGB7QgQgJgNACIAbgYQAKgJABgJIABgBIACgCQAHA2AFAOIgYgQgAlKA8QgGgdgNgKQAZgFAYAAIAQACIAbABIADAfQAAAXgDAIQgEANgNAAQgYAAgHABQgRACgEAJQADgUgHgagAD/gcIgHgBIAMgyIAAgTQAHAEALAIQAKAFATgCIAAAHQAAAQgHAWQgIAXgGAAQgQAAgPgNgAlYg/QABAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAQAEgBAGgVQAIgVATgGQAVAVARADQAEAMgIASQgKAUgDAKQgQgSgsgPgADniUQAAgIgEgHQAJAAAiAFQACAFAAAHIgCAfIgWgSQgIAAgXAXQAOgVAAgRgAB1ikQgMgNAAgIQAAgDALgJQAMgLACgFIAYAcQAPAPALAHIgSALQgHAGgKANIgcgfgAAAiHQATgggjgGQgugBgKgEIAUgPQARgPADgRQAJgOAOAFIARALIAaAUQASANASACQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAABIAAABQgOgBgaAWQgZAUgDALgAh4jvQgggggMgEIgDgDIABAAQAdgCAogoIAtA+QAAAJgNAXQgOAXAAAFIgpgpg");
	this.shape_9.setTransform(0.5,-1.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EC2D2E").s().p("Ag8FWIAAgCQAyglgNgcQAIAJAaAQQAFAJAFADQAJAFANgEIgSAcQgMASgEADQgQgWg1ACgACOESQgFgPgGgHQAFgGAOgMQAMgNgDgYQADABAXAGQAXAGAEAAIAPgEQANgDAEAAQgBAKAFAUQAGAUAAAHQgJgCgQgGQgOgEgJAAQgRAAgPAPQgGAHgRAZQgDgEgGgRgAlBCBQgEgXAAgGQAFACAmAGQAQADADAOIAAAMQgqALgNAHIgDgagAEUA8QgPgRAAgBIAZgoQADAJAOAJIAVAKIAAACIACABQgLANgOAiQgIgDgRgRgAjDh5QgYgugEgFQASAIAlgZQAFAGAFANQAFANADADQgJAFgSAOQgQAOgCAAIAAAAgAkrizIgGgOQALAAAKgGIAQgMQACAGAMAWQALATAAAEQAAAEgOALIgKAHQgZgdgHgMgAB7kzIgEgWIAgAAIAIADIAAARIgTAYQgOAQAAAHQgBgdgCgQgAg6lTQAGgGAPgHQAMgGACgDIADAAIgEAjQgCAYgEALIgcgwg");
	this.shape_10.setTransform(-0.875,-0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#049EE9").s().p("AB7E7QAEgFAHgFQALgIASgRQAQAXAGAWQgHABgOAMQgOAMgHACQgOgggGgFgAjwDkQgJgGgFAAQgDAAgLAEQgLAEgFAAQACgPgIgbIgJgeQAQgBAJgBQASgCAjgMQAAAOACAWIADAZQAAAPgFAOQgKAAgJgEgACnBwQgIgEgEgBIAPgxQADADARALQAPAKAAAHIgKAiQgSgGgKgFgAkNAwQAFgFAAgKQAAgQgPgLQgJgGgTgGQAPgHAOgRQAQgVAGgZQAjATAHgCIAAAPQgFAeAAATQAAALAFANQADAMACACIgeALIgeALgAEEhjIAAgcQABgMgGgKIAAgUIAdAAQAPABAJgGQgDAFgEAfQgDAeAAAJgACvi0QAAgMAFgPQgEgCgagGQgVgFgJgJQAOgEAJgMIAMgTIAAgCQABATAZASIAKAGIAYAOQgEAHgQAPQgJAKgFAGIAAACIgBACIgCADQgDgFAAgLgAkMjaQgVgPgKgDQADgHA0hCIACADQAKAaAQBMIgCAAQgbAAgXgOgAgLj2QgRgYgFgQIgDgSIAHADQAHAAAQgBQAWgCAHgFIAMAAIgMAtQgJAagYAAgAjZkxIgHgIQgCgEAAgDQAAgFAKgKIARgRQABAKAEAKQAFAMAAAJQAAAGgEAFQgFAHgDAGIgIABQgBgLgHgIg");
	this.shape_11.setTransform(3.725,-1.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#AA0F10").ss(0.5,1,1).p("AmliLQgDgFAAgIQgBAAAAAAQgCAAAAgCQgFAFgKASQgNATgCADQAGAHAKAAQAGAAAXgVQgEgIgFgIgAlOizQgEgRgDgEQgBgCgCgCQgDANgZAxQACACADgBQAFgBABAAQAFAAAbAPQAAgDAHgOQAFgNAAgFQAAgDgIgHQgHgHgCAAgAl2A6QgRAKgOAFQgNAFgEABQAHAJAEAdQAFAhACAIQAkgYAQgJQgDgJgKgVQgJgWAAgPgAhgF5QgNAVgNAMQgKAIgCACIAAADQAIgFAZAJQAbAJAFAOQAHgCAGgZQAIgaAJgEQgGgCgcgIQgMgDgLgDgAgJmNQgBAAgZgMQgHgDgFgFQABgDALgOQANgPADAAQAHAAAWAUQAAAIgFALQgFALgDAGACMmhQAOgUABAAQAEAAALAFQAJAFAGgCQADgBAAAGQAAAHgFALQgGAOgCAKQgGgFgSgPQgLgIAAgHgAGajPQAJALAQAOQAOALAJAMQgFAFgQAFQgTAFgKAHQgFgLADgcQACgOACgRgAFXCqIAegeIABAAQABgBAAgBQADAKAGAJQAJALAMAAQgOARgFAHQgIAIgPAAQAAgHgJgKQgIgKgDgDg");
	this.shape_12.setTransform(-1.75,-0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#CCCCCC").ss(0.5,1,1).p("AhylgQgKgcgDgGQgDgEgOgOQAEgEAwgYQgWBDAAANgAmNACQgQACgTgGQgTgJgDgBQACgDALgWQALgVABgGQAMANAJAZQAHAUAEAIgAmyBVIAAgCQABAAABABQgCABAAAAgAkoE+QACAAABAAQALAAAJAFQAHAFAOAPQAJgBAHgMQAEgHAIgSQgHgGgKgGQgNgGgDgCQghAegBAAQAAABgFACQgEACgHADIgCAAQAIgEAFgBgAA8lYQgNgXgTgUQAEgFAVgKQAUgKACgCQAHAFALAYQAJAXALADQABAMgSAEQgXADgIABADVlFQAAgLgFgOQgBgHgEgMQAMAAAogKIAAAMQgHAWgGAKQgNAXgTAFQAAgCADgQgAEMkIQAWgBANgHQAIgDAMgHQAAAGACANQADAMAAAEQAAAPgFAGQgHAIgVABQgGABgLgWQgFgMgFgOgAFtgRQASgXAFgJQAPgXgFgKQAZAFAgAFIAAAZQgMAKgFASQgFATgDAKQgdgKgSgHQgOgHgEgDgAEqExIAEgFQADgHAAgEQAAgGgGgMQgFgKgEgGIAAgCQAHADAQgDQAVgFAEAAIAFgDQgGAFgBAHQgBABAAAJQAAADAEAJQAEAJAAAHIAAADQgMAAgKADQgOADgJABgADQGBQABADAIAJQAIAKAFAIQAGgFAMgRQANgNARgHQgJghgaAPQgbAZgIAFgABrGGIgEAAQAAgBgBgCQgCgCAAgDQAAgOAFgUQgIABgJAOQgIARgFAIQgHAAgEgGQgDgJgDgFQgHAVgKANQgEAGgMAMQAHAAAFgFQAFgFABAAQAFAAAQALQAOAIAFAEQAAgBANgXQAHgMAEgHQADgFACgCQgBADgDAEgAhqF+QgDgBgDgBABwF/QAAAAABAAIAAgDQgBACAAABg");
	this.shape_13.setTransform(-0.75,-0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#006EA3").ss(0.5,1,1).p("AkElxQgzAWgEADIgFgDQgCgJAFgLQAEgOAAgLQAAgBgDgOQgEgPAAgKIAAgCQARAXAIALQAQAUATALgAljkfQgXgMgNgIQgMgKgFgCQACgBAUgUQAMgLAGgIIACgBQABAAAAgCQAJAQAGAJQAKAQAAAEQAAAKgGAJQgFAGgEAFgAmBC0IgDAAQADAUAAAeQAPgCAbgZIgMgLQgIgHgWgFgAFRk0QgTAWgJAJQACADAFAJQAFAIADADQAMAAAZgeQAAgIgMgIQgIgFgEgDQgFgDgBgBAFfA3QAMgKANgUQAFAIALAHQAMAKAFgCQgGAPgBAEQgGALgHAAQgWgBgGgJgAA7GzIAGAAQAFAAAHgDQAHgEAKAAQAJAAABAAQAEABABAGQAEgDAHgNQAIgNADgDQgTgHgBAAQgHgEgIgJQgLAPgMASQgIAMgGAHg");
	this.shape_14.setTransform(5.125,1.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EC2D2E").s().p("AhlGrQgYgJgJAEIAAgCIANgKQAMgNAOgUIAVAGIAjAJQgJAFgIAaQgGAZgHACQgFgOgbgJgAFrDIQgBgHgHgKIgMgNIAegeIABAAIABgCQADAKAGAJQAKALALgBIgTAZQgIAIgOAAIgBAAgAmaB0QgFgcgHgJIARgGQAOgFARgKQAAAPAJAWQALAVACAJQgQAJgkAYIgGgqgAnIhtIANgWQAMgSAEgFQABAAAAABQAAAAAAAAQAAABAAAAQABAAAAAAIABAAQAAAHADAGIAJAQQgXAVgGAAQgKAAgFgHgAlpiNIgGABQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAYgyAEgNIAEAEQABAEAFARQACAAAHAHQAJAHgBACQAAAGgFANQgHAOAAADQgagOgGAAgAGWivIAEggQAJALAQANQAOAMAIAMQgEAGgRAEQgSAFgKAHQgFgLADgbgACWmRQgKgIAAgIQAOgTABAAQAFgBAKAFQAKAEAFgBQACgBAAAGQAAAHgEALQgGANgCAMQgGgHgTgNgAgJmNIgagMIgMgIQABgDAMgOQALgPAEAAQAGAAAXAUQAAAIgFALIgIARg");
	this.shape_15.setTransform(-1.75,-0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABBGlQgRgLgFAAQgBAAgFAFQgGAFgGAAQALgMAFgGQAJgNAIgVIAHAOQAEAGAGAAQAFgIAIgRQAIgOAJgCQgFAVAAANQAAAEACACIABADIAEAAIgLATIgNAYIgSgMgADZGNIgJgMQAHgFAdgZQAagPAHAgQgQAIgNAOQgMAQgGAFQgFgIgIgKgAkRFEQgJgHgLAAIgDABIAFgDIAigeIARAIQAKAGAGAGIgMAZQgIAMgHABQgPgPgHgEgAEtErQAEgGAAgEQAAgGgGgMIgJgQIAAgCQAHADAQgDIAYgGIAGgCQgHAFAAAGIgBAKQAAAEAEAJQAEAJAAAHIAAADQgMAAgLACQgNAEgJABgAF+gHIgRgJIAXghQAOgXgEgJIA5AKIAAAZQgMAJgGASQgEATgDAKQgegJgSgIgAmxgDIgVgJIAOgZQAKgVABgGQALANAKAaIALAbIgIAAQgMAAgQgFgAEXjuIgMgaQAXgBANgGIATgLIADATIADAPQAAAQgGAGQgGAIgVACIAAAAQgGAAgKgWgADUlFQAAgLgDgNIgHgUQANAAAogKIAAAMQgIAXgFAKQgNAWgTAGIACgTgAA8lYQgOgXgSgTQAEgGAUgKQAVgKACgCQAHAFALAYQAJAXAKADQACAMgTAEIgeAEgAiAmCQgCgEgOgOQAFgFAvgWQgWBCAAAOQgKgdgEgGg");
	this.shape_16.setTransform(-0.75,-0.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#049EE9").s().p("ABoGsIgKgBQgKAAgHAFQgHADgFAAIgGAAQAGgHAIgMIAXgiQAIAKAHAEIAUAGQgDAEgIANQgHANgEADQgBgGgEgBgAmEC0IADAAQAWAEAIAIIAMAKQgbAZgPADQAAgegDgUgAGFBNQgWAAgGgJIgKgNQAMgKANgUQAFAIALAHQAMAKAFgCIgHASQgGAMgHAAIAAgBgAE8kJIgHgLQAJgKATgWIAMAIQAMAJAAAHQgZAegMAAIgIgLgAmHk0IgRgLIAWgUQAMgMAGgIIACAAIABgDIAPAZQAKARAAACQAAALgGAJIgIALQgYgMgNgJgAlAlbQgCgJAFgLQAEgNAAgMIgDgQQgEgOAAgJIAAgDIAZAiQAQAUATALIg3AZg");
	this.shape_17.setTransform(5.125,1.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#AA0F10").ss(0.5,1,1).p("AnsA8QgEgRgCgDQgCgCgCgDQgCALgPAfIAAADIAsAAQABgCAAgBQAAgDgIgHQgIgHgCAAgAm9j8QgDgFAAgHQAAAAgBAAQgBgBAAgBQgFAFgMASQgEAHgDAFIAhAAQADgCACgCQgDgIgGgJgAj3HyQgLAJgCABIAAADQAIgFAZAJQAbAJAFAOQAHgCAGgZQAFgPAFgIIhBgCQgFAHgFAFgAogEaQABAJABAHIAbAAIAAgrIgjAAQADAKADARgAEknGQABgCACgDIAsAAQgBAHgEAJQgGANgBALQgGgGgTgOQgKgIAAgHgAgon7QgBgBgZgMQgGgDgFgEQAAgDAGgHIAzAAQgBAHgEAJQgGALgDAGAICi2QAJALAQANQAHAGAGAGIAAASQgBABgCAAIAAgFIgoAAQAAgIABgLQACgOACgRgAHnCeIAKgKIAiAAQAIAIAKgBQgOASgFAGQgIAJgPAAQAAgIgJgJQgIgKgDgDg");
	this.shape_18.setTransform(-2.15,-3.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#CCCCCC").ss(0.5,1,1).p("AiemvIgFAAQAAgBgBgBIgWAAIAAgIQgDAEgCAEQgGABgEgHQgEgIgDgGQgHAVgKANQgEAHgMALQAHAAAFgFQAFgFACAAQAEAAARALQANAIAFAEQABgBAMgXQAHgMAFgHQAAgBACAAAmRjkIAEgGQADgGAAgEQAAgGgGgMQgBgCAAgCIAlAAQABAEADAIQAEAJAAAHIAAACQgMAAgKAEQgOADgJABgAnGHDQgEAFgEADIABAAIAAAmQAFAFAHAHQAIgBAIgMQAEgHAIgSQgHgFgKgGQgNgHgDgCgAgBnhQADgEAwgXQgGASgEAOIglAAQgDgCgBgDgABfnSQAEgFAVgKQAUgKACgCQAHAFALAYQABADABADQACACABADIg7AAQgFgHgGgGgAF/FaQAJgMAFgIIBCAAQgFAHgDAKQgEAUgDAKQgegJgSgIQgNgIgEgCgAE9G+QALgVAAgGQALAMAJAXIgjAAQABgDADgFgADDG7QACADAHAKQAJAKAFAHQAEgDAHgJIgEAAIAAgqQgXAUgHAEg");
	this.shape_19.setTransform(0.475,-6.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#006EA3").ss(0.5,1,1).p("AlUm1QgBAAAAAAIAAg6QADAEACAEQAKAQAAADQAAALgGAJQgFAGgDAFgAnnibQAOgGAVgTIgMgLQgJgHgWgFIgCAAQACAUAAAeQAEAAAEgCAHrmeQgTAWgJAJQACADAFAJQAFAIADADQAIAAAMgMIAAglQgEgDgDgCQgFgDAAgBAHPhBQAMgKANgUQACADADAEIAAAtQgPgBgFgHgAAQHXQgyAXgEACIgFgCQgCgKAFgLQACgIACgGIAjAAQAIAHAJAFgACqGLQAHgNAEgDQgUgHgBAAQgHgEgHgJQgLAPgMASQgDAEgCADIAyAAQABgCABgCg");
	this.shape_20.setTransform(0.175,4.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EC2D2E").s().p("AjiIDQgagJgIAFIAAgDIAMgKIALgMIBBACQgFAIgEAPQgIAZgGACQgFgOgagJgAodEqIgDgQQgDgRgDgKIAjAAIAAArgAH6C8QAAgIgIgJIgMgNIAKgKIAjAAQAIAIAKgBIgTAYQgIAJgOAAIgCAAgAoHBQIAAgDQAPgfACgLIAEAFQACADAEARQACAAAIAHQAIAHAAADIgBADgAIliEIgoAAIABgTIAEgfQAJALAQANIAMAMIAAASIgCABgAnajnIAHgMQAMgSAFgFQAAAAAAAAQAAABAAAAQAAAAAAAAQABABAAAAIABAAQAAAHADAFQAFAJAEAIIgFAEgAEum3QgLgIAAgHIAEgFIAsAAQgBAHgEAJQgGANgCALQgGgGgSgOgAgon7IgagNIgMgHQABgDAGgHIAzAAQgBAHgEAJIgJARg");
	this.shape_21.setTransform(-2.15,-3.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AnNHxIAAgmIgBAAIAIgIIAQAJQAKAGAHAFIgMAZQgIANgIAAIgMgMgADMHHIgJgMIAegYIAAAqIAEAAIgLAMQgFgHgJgLgAE5HGIAEgIQALgVAAgGQALAMAJAXgAGQFjIgRgJIAOgUIBCAAQgFAIgDAJQgEAUgDAKQgegJgSgJgAmNjpQADgHAAgEQAAgGgGgMIgBgEIAlAAIAEAMQAEAJAAAHIAAADQgMAAgKADQgOADgJABgAjJmQQgRgLgEAAQgCAAgFAGQgFAEgHAAQAMgLAEgHQAKgNAHgVIAHAOQAEAGAGAAIAFgIIAAAIIAWAAIABADIAFAAIgMASIgNAYIgSgMgABqnFIgLgNQAEgEAVgLQAUgJACgDQAHAFALAYIACAGIADAFgAADnbIgEgGQADgEAwgXIgKAhg");
	this.shape_22.setTransform(0.475,-6.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#049EE9").s().p("AgrHuQgCgKAFgLIAEgOIAjAAQAIAHAJAFIg2AZgAB2GPIAFgHIAXghQAHAJAHAEIAVAHQgEADgHANIgCAEgAHZgzIgKgOQAMgKANgUIAFAHIAAAtQgPgBgFgHgAnxjLIACAAQAWAFAJAHIAMALQgVATgOAGIAAAAIAAAAIgIACQAAgegCgUgAHWlzIgHgMIAcgfIAHAFIAAAlQgMAMgIAAIgIgLgAlVm1IAAg6IAFAIQAKAQAAADQAAALgGAJIgIALIgBAAg");
	this.shape_23.setTransform(0.175,4.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#006EA3").ss(0.5,1,1).p("ApkEKQgPAGgCABIgFgCQgCgKAFgLQACgHACgHAgwo6QgIAJgGAGQACACAFAJQAFAIADADQAIAAAMgLAJ8FGQgPgCgFgGIgJgMAIJIbQgDgDgEgFQgLAPgMATQgDADgCAD");
	this.shape_24.setTransform(-5.4687,-9.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#CCCCCC").ss(0.5,1,1).p("Aoui6QgDAAgEABQgFACgFABQgHABgGABIAEgGQAEgGAAgEQAAgGgGgNQgBgBgBgBAISDaQgGgFgFgHIgBAAQAAgBABAAQAFgFATgJQAVgKACgDQAHAFAKAZQABACACADQABADACAC");
	this.shape_25.setTransform(0.875,-24.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#AA0F10").ss(0.5,1,1).p("AjPpxQgGgDgSgIQgGgEgFgEQAAgCAGgIAoVjFQABgCAAgBQAAgDgIgHQgIgHgCAAAo5jZQgEAIgEAJAl1HRQgIAKgHAHQgLAJgCACIAAACQAJgEAZAIQANAFAIAGAJCl2QgHgGgPgMQgKgIAAgHQACgCABgDAEaqnQgBACgBABQgEAHgDAFAEyqYQACgCADgCQgDgFgDgGAHBIhQAIAIAKgBQgOASgFAGQgIAJgQAAQAAgIgIgJQgJgKgDgDIAKgKABqJ9QAEAKADARQABAJABAH");
	this.shape_26.setTransform(-11.175,2.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgXAUIgLgMIAAAAIAAgBQAFgFAUgJQATgKACgCQAHAFALAXIACAGIADAFg");
	this.shape_27.setTransform(56.225,-4.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#049EE9").s().p("AHmI7IAFgGIAXgiIAHAIIAAAggAJoE9IgJgLIAdAAIAAAUQgPgBgFgIgAp6EPQgCgKAFgLIAEgOIAPAAIAAAeIgRAHgAg3ofIgHgMIAOgPIAVAAIAAAaQgMAMgIAAIgIgLg");
	this.shape_28.setTransform(-5.4687,-9.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EC2D2E").s().p("ABzKoIgCgQQgDgRgEgKIAkAAIAAArgAGoJJQAAgIgIgJIgMgNIAKgKIAjAAQAIAIAKgBIgTAYQgIAJgOAAIgCAAgAlvHzQgZgIgJAEIAAgCIANgLQAHgHAIgKIAAAIIAbAAIAAAlQgIgGgNgFgApBjFIAAgDIAIgRIATAAQACAAAIAHQAIAHAAADIgBADgAIsmIQgKgIAAgHIADgFIAdAAIAAAmIgWgSgAjnp8IgLgIQAAgCAGgIIAdAAIAAAdIgYgLgAERqYIAHgMIACgDIAXAAIAGALIgFAEg");
	this.shape_29.setTransform(-11.175,2.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-67.2,130.8,139.2);


(lib.hotdoggunfire = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		playSound("metallicheskiy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(8));

	// gun
	this.instance = new lib.Symbol77("synched",0);
	this.instance.setTransform(173.8,134.05,1,1,0,0,0,173.8,104.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:147.05},0).to({y:129.05},3).to({y:134.05},3).wait(1));

	// clouds
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#EEEEEE","#FFFFFF"],[0,1],-5,24,0,-5,24,66).s().p("AjxEQQgRgagMgYQghgUgagVQhahLAAhXQAAgyAYgpQAfgzA3ACIAAABIAKAAIgKgBQAAgPgKgSQgKgTAAgMQAAhSA8g1QA4gwBKAAQAyAAALACQAkAJANAlQA3gcAegSQAHgCA+AAQBBAAApASQA7AbAAA/QAAAIgEAQQgHAWgJAOQA4gaAzBEQArA6AAAtQAABOhBA4Qg1AvhGAEQASAQAAAXQAABWigBAQg3AXg+APQg0AMgUAAQhNAAhBhhg");
	this.shape.setTransform(5,-53.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#EEEEEE","#FFFFFF"],[0,1],-2.5,-32.5,0,-2.5,-32.5,95.8).s().p("ABMJWQgogPgwg2QgTANgSAKQhLAqgyAAQhhAAg2hDQgggogLg8QhkgGhPg2QhrhKAAhtQAAg/AbgjQASgXBHg+QgbgTgLgaQgIgTAAhIQAAhaA4hGQA9hLBfAKQALhBBNhOQBjhkBqAAQAvAAAbAXQAOALAiAiQARgOAVgKQAugYAwAAQBfAABVBCQBRA/AJBZIgKACIAKAAQBMAFBBBUQA7BOAABCQAAAMgKAxQgKAzgJAdIABACQAIAPAHATQAXA7AAAcQAABagoBHQgsBPhHAAQgPAAgQgDQgggHgWgUIgKAKQgiD6jTAAQhBAAgTgGgAheg3QAKAbAAANQAAAggoBRIgQAgIAQgKQAzgaBOAAQAaAABiAHIA7AEQAiATAmAAQAQAAAOgGIAGgDQgngFhFgFQgsgZgmg4Qg6hRgChGQhoBIgkAAgAAuh/IADgCIgEgGIABAIg");
	this.shape_1.setTransform(2.5,-62.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#E9E9E9","#FFFFFF"],[0,1],-10.5,-37,0,-10.5,-37,93.8).s().p("AiGHgQhGhQAAhMQAAgXACgPQADgMAEgPQgTgYgOgfQgag6AAg5QAAhFAagzQAQggAZgYIgVgyQgag/AAgUQAAhFBHhZQBMhiBXgCIAMgVQAmg7AyAAQAtAAApAyQAnAwAAAvQAAAsg9A1Qg/A2gugIQASAHAVAwQAVAsAAAVQAAA6gZASIgCABQAIAKAKANQAxBFAAA8QAAAagUAjQgRAcgSARIgFAEIAKAAQBlAQAXAVQAaAXAABVQAABDgKAcQgXBGhNAAQgMAAgFgCIgIgHIgCACIgZAWQg5AtgfAAQhEAAhHhPg");
	this.shape_2.setTransform(-50.5,-56.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#E9E9E9","#FFFFFF"],[0,1],9.5,-22.9,0,9.5,-22.9,65.6).s().p("AjBFeQg9gtAAg8QAAg2BMgmQBBghA7AAIAAgUQgngPgHgPQgEgHAAgcQAAgYAWgeQAWgeAkgeQhGhPAAgGQAAgcApgyQAJgKAJgJIgJgIQAUgUAgg3QAhgtAsAAQA0AAA7AyQA7AzAAAxQAAAmggAyQghAsgFAIQAIAGAVAkQAVAlAAALQAAAogSAaQgMAQgcASQgfAUgKALQgTAWgCAkQgGA8g3BGQg/BQhLAAQg3AAg2gog");
	this.shape_3.setTransform(41.5,-40.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#E9E9E9","#FFFFFF"],[0,1],-5,-18,0,-5,-18,57.4).s().p("ABuCcQAAgLATgrQARgngGggQgaAZgPAHQgQAIgcAAQgUAAgLgPQgcgogZgYQgJAvgwAnQgyArg/AAQgfAAgngUQgdgPgMgTQgLAEgIAAQgzAAgTgyQgKgZAAgdQAAheA8ggQAkgTBPAAQABAABRgyQBSgyApAAQAxAABGAyQBAAtANAzIgIAEIAJgBIgBgDQAegQAXAAQBJAAA6BFQA7BIAABdQAABKgyA7QgzA8hFAAQiCgnAAhUg");
	this.shape_4.setTransform(17,-111.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#E9E9E9","#FFFFFF"],[0,1],-0.5,2.6,0,-0.5,2.6,38.9).s().p("AhyExQgygzAAgdQAAgfAUgnQAUgmAAggQAAgPgjgdQgjgeAAgUQAAguA9huQAXgnATgbIAKgOIgNgJQAAglAyghQAugeAwAAQA6AAAlBRQAeBCAABEQAAAdgUAlIgeAxQA5ArAJAaQAEALAABFQAABBgUBBQgcBag0AAQgVAAgSgVQgQgYgFgFQAAAKgKAAQgKAUgIAKQgSAUgcAAQgZAAgygyg");
	this.shape_5.setTransform(-68.5,-46.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#E9E9E9","#FFFFFF"],[0,1],3.5,-5.5,0,3.5,-5.5,22.4).s().p("AheB8QgUgMAAgrQAAgeArg6QAMgQALgNQAIgeAOgiQAQgVAoAAQAcAAAcAdQAdAgAAAlQAAA3goA3QgsA7g3AAQg1AAgRgKg");
	this.shape_6.setTransform(-82.5,-92.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#E9E9E9","#FFFFFF"],[0,1],2,-9,0,2,-9,41.5).s().p("AimD5IgFgYIgBgCQgQAIgLAAQgmAAgggoQgegmAAglQAAgvAxhEQAvhCA2ghQAcgSAiggIA1g0QA8g6A2AAQAkAAAYAoQAJgKASgWQATgSAYAAQAsAAAbA8QATAsAAAkQAABNgoA0QgtA8hQAAQgRAAgQgGQgNgGgJgIIgUAAQAYBDhABRQg+BQhIAAQgtAAgHgUg");
	this.shape_7.setTransform(-39,-116.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#E9E9E9","#FFFFFF"],[0,1],6.5,-12.4,0,6.5,-12.4,47.9).s().p("AhkEiQgChHgMgYQgyAKgbgRQgXgQAAgbQAAg8BPhWQA2g9AvggQgQgOgJgXQgFgOAAgJQAAgbAgggIAoglQAJhCAVgNQAKgFA0AAQA0AAAhAyQAeAuAAA7QAAA3gZAoQgbAthEAsQAQAQAHAaQAHAWAAAaQAABBg8BVQg/Bag9AAQgoAAgBgtg");
	this.shape_8.setTransform(49.5,-42.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#E9E9E9","#FFFFFF"],[0,1],0,3.5,0,0,3.5,17.3).s().p("AgmB8QgfgRAAgrIADgSQgDgKgKgVQgKgUAAgNQAAgTAUgoQAcg4ApAAQAeAAAeAyQAeAyAAAxQAAArgJAZQgUAyg4AAQgaAAgRgKg");
	this.shape_9.setTransform(71,-93.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#E9E9E9","#FFFFFF"],[0,1],-3,0.4,0,-3,0.4,15.6).s().p("AhPBUQgogOAAgZQAAgXACgDQAEgDARgGIABAFIgBgFIgDgOQAAgrA8gbQArgUAfAAQAoAAAZAeQAUAYAAAaQAAA8gyAcQgkAVg1AAQgeAAgegLg");
	this.shape_10.setTransform(-6,-154.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#E9E9E9","#FFFFFF"],[0,1],-1,-4.1,0,-1,-4.1,38.3).s().p("AAeDwQgUgkAAgiQAAgNAFgYQAFgYAAgJQgsAVg3gRQg8gSAAgzQAAgPAGgJIAOgUIgcANQgPAGgRAAQgdAAgpgeQgygkAAgwQAAg5AYgiQAagmA8gaIAKANQAGgHALgGIABgBQAegTARAAQAzAABDBaQAmAyALAMQAaAcAVAAQA7gBBEBDQBJBHAABNQAAAqgUArQgcA8g0AAQgeAAgUgUQgaAfgPAGQgGADgXAAQgbAAgXgog");
	this.shape_11.setTransform(34,-125.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#E9E9E9","#FFFFFF"],[0,1],-1,-11.2,0,-1,-11.2,28.2).s().p("AgnBwQgjguAAguIABgcQgMgLgIgPQgLgUAAgRQAAglAUgYQAZgdAyAAQARAAAbAZQAeAbAAAZQAAAlAUAWQAUAWAAA1QAAAggPAjQgTAtgfABQgpgBgmgyg");
	this.shape_12.setTransform(-83,-7.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#E9E9E9","#FFFFFF"],[0,1],2,-5.7,0,2,-5.7,23.4).s().p("AgnB6QgKAOgFAGQgIALgHAAQgZgBgKgPQgKgOAAghQAAgvAkg8QAdgzAjgaQAGgQAQgVQAdgkASAAQAbABASAsQAPAmAAAgQAABIgZA+QgjBVhDAAQgbABAAgug");
	this.shape_13.setTransform(-86,-49.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#E9E9E9","#FFFFFF"],[0,1],1.5,-2.7,0,1.5,-2.7,11.2).s().p("AgsA+QgKgKAAgUQAAgbAHgLQADgJAJgHQAEgKAGgJQASgfARAAQAQAAAOAQQAPARAAAWQAAAWgZAhQgbAigYAAQgOAAgJgKg");
	this.shape_14.setTransform(-93.5,-71.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#E9E9E9","#FFFFFF"],[0,1],2,-6.3,0,2,-6.3,18.3).s().p("AhFBXQgKgOAAgVQAAgfAXgpQALgVAOgNIAEgDQAEgOAOgPQARgVAMAAQAcAAARAZQAPAVAAAbQAAAagoA4QgpA7gcAAQgaABgOgVg");
	this.shape_15.setTransform(-83,-103.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#E9E9E9","#FFFFFF"],[0,1],6.3,-12.5,0,6.3,-12.5,34.2).s().p("AiNCRQgegVgBgnQAAg3AtgsQApgoAxgFQACgnAhgcQAkghAuAAQAjAAAbAZQAfAaAAAnQAAAsgzAjQgqAegjAAQgIAAgKgDIgUgHQgQBIgPAYQgXAigvAAQgaAAgVgPg");
	this.shape_16.setTransform(-60.25,-132.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#E9E9E9","#FFFFFF"],[0,1],3.5,-5.3,0,3.5,-5.3,17).s().p("Ag7BTQgKgNAAgNQAAgGAFgMQAFgMAAgFIABAAIgBgOQAAgiAZgjQAZgkAVABQAhAAAPAdQAKAUAAAcQAAAmgeAmQgfApgjAAQgVAAgMgPg");
	this.shape_17.setTransform(-26.5,-154.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#E9E9E9","#FFFFFF"],[0,1],1.5,-2.7,0,1.5,-2.7,14.5).s().p("AhFBYQgPgNAAgPQAAgZA5g7QAMgeAIgKQATghAhAAQAoAAAAArQAAAvgoAyQgrA3gxAAQgJgBgNgJg");
	this.shape_18.setTransform(44.5,-21.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#E9E9E9","#FFFFFF"],[0,1],0.8,-3.2,0,0.8,-3.2,17.9).s().p("AhWB1QgPgOgBgQQAAglAhg5QAMgVAOgSIgIgGQANgcAqgdQAigXAHABQAVAAARAOQATATABAdQgBASgYAfQgSAXgWAUQgQANgYA2QgSAqgdAAQgVAAgQgPg");
	this.shape_19.setTransform(61.25,-49.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#E9E9E9","#FFFFFF"],[0,1],1.8,-2.4,0,1.8,-2.4,9.3).s().p("AgkAyQgLgKAAgKQABgaAFgIQAGgIAdggIgGgHIAKgIQASAAAQAPQAPANABAMQgBATgZAeQgYAegOAAQgLAAgJgKg");
	this.shape_20.setTransform(71.25,-79.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#E9E9E9","#FFFFFF"],[0,1],1,-5,0,1,-5,11.7).s().p("AgdA3QgFgIAAgUIABgNIADgHQgHgKgFgFQgCgCAAgLQAAgPAKgNQAMgPAVAAQAfAAAKAUQAFAKAAAbQAAAcgFAOQgLAeghAAQgSAAgHgKg");
	this.shape_21.setTransform(73,-97.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#E9E9E9","#FFFFFF"],[0,1],4.3,-3.5,0,4.3,-3.5,15.6).s().p("AglBZQgOgUAAgkQgBgFAEgMQgGgHgNgXQgKgTABgLQgBgUAQgUQATgZAhAAQApAAAaAtQATAkAAAoQAAAZgTAhQgZAogeAAQgZAAgPgVg");
	this.shape_22.setTransform(64.75,-122.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#E9E9E9","#FFFFFF"],[0,1],2,-3.5,0,2,-3.5,12.1).s().p("AgsA8QgPgRAAgZQAAgKABgGIgJgHQgMgKAAgJQAAgSAUgRQAWgUAZAAQBcAAAABWQAAAhgUAUQgVAUgiAAQggAAgRgUg");
	this.shape_23.setTransform(4,-162.35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#E9E9E9","#FFFFFF"],[0,1],5.5,-8,0,5.5,-8,22.8).s().p("AAhB2QgQgSgMgZQgzAegyg2QgrgvAAgmQAAgWAUgSQAWgUAkAAIALABQAEgNAOgNQAVgUAQAAQA+AAAmAyQAjAuAABHQAAAqgPAeQgUAogoAAQgOAAgSgWg");
	this.shape_24.setTransform(35.5,-148.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[]},1).wait(3));

	// hotdog
	this.instance_1 = new lib.Symbol78("synched",0);
	this.instance_1.setTransform(-4,-102.55,1,1,0,0,0,37,26.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({regX:36.9,regY:26.2,scaleX:0.3434,scaleY:0.3434,rotation:108.8342,x:-1.95,y:-169.5},4).to({_off:true},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184,-184.4,368,338.1);


(lib.NextRoundBTN = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Next("synched",0);
	this.instance.setTransform(-0.15,-0.15,0.4,0.4,0,0,0,234.7,176.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:234.6,regY:176.6,scaleX:0.35,scaleY:0.35},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,-70.8,187.9,141.6);


(lib.Girl3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// h
	this.instance = new lib.Symbol65("synched",0);
	this.instance.setTransform(24.85,-10.45,1,1,0,0,0,9.1,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:1.6,scaleX:1.0002,skewY:1.1635,x:21.05,y:-13.3},14).to({regY:1.7,scaleX:1,skewY:0,x:24.85,y:-10.45},16).wait(1));

	// Layer_12
	this.instance_1 = new lib.Symbol66("synched",0);
	this.instance_1.setTransform(29.9,-16.7,1,1,0,0,0,2.6,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1.0855,skewX:-2.9337,x:25.3,y:-18.55},14).to({scaleY:1,skewX:0,x:29.9,y:-16.7},16).wait(1));

	// head
	this.instance_2 = new lib.Symbol63("synched",0);
	this.instance_2.setTransform(3.5,-0.2,1,1,0,0,0,4.7,6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:6.6,rotation:-7.2363,x:0.35,y:0.1},14).to({regY:6.7,rotation:0,x:3.5,y:-0.2},16).wait(1));

	// Layer_13
	this.instance_3 = new lib.Symbol67("synched",0);
	this.instance_3.setTransform(-7.1,10.9,1,1,0,0,0,3.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:1.0116,skewX:8.6723,x:-10.3,y:13.3},14).to({scaleY:1,skewX:0,x:-7.1,y:10.9},16).wait(1));

	// handup
	this.instance_4 = new lib.Symbol61("synched",0);
	this.instance_4.setTransform(-21.1,72.5,1,1,0,0,0,3.5,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-24.3,y:76.1},14).to({x:-21.1,y:72.5},16).wait(1));

	// h
	this.instance_5 = new lib.Symbol64("synched",0);
	this.instance_5.setTransform(-5.85,-10.05,1,1,0,0,0,8.2,2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:2.7,scaleY:1.1312,x:-10.25,y:-9.1},14).to({regY:2.8,scaleY:1,x:-5.85,y:-10.05},16).wait(1));

	// legup
	this.instance_6 = new lib.Symbol57("synched",0);
	this.instance_6.setTransform(-12.15,282.35,1,1,0,0,0,22,208.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:21.9,scaleY:1.0003,skewX:-1.3042,x:-12.1},14).to({regX:22,scaleY:1,skewX:0,x:-12.15},16).wait(1));

	// Layer_20
	this.instance_7 = new lib.Symbol74("synched",0);
	this.instance_7.setTransform(41.55,45.7,1.0885,0.896,0,-3.9001,-7.5072,3.4,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:3.1,scaleX:0.8,scaleY:1.0041,skewX:5.1937,skewY:0,x:38.5,y:53.65},14).to({regX:3.4,scaleX:1.0885,scaleY:0.896,skewX:-3.9001,skewY:-7.5072,x:41.55,y:45.7},16).wait(1));

	// Layer_23
	this.instance_8 = new lib.Symbol76("synched",0);
	this.instance_8.setTransform(35.4,38.4,1,1,0,0,0,9.2,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:33.75,y:43.9},14).to({x:35.4,y:38.4},16).wait(1));

	// Layer_18
	this.instance_9 = new lib.Symbol71("synched",0);
	this.instance_9.setTransform(38.65,38.8,1,1,0,0,0,8.9,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:9.2,regY:-0.1,scaleX:0.8971,scaleY:1.1036,skewX:1.8509,x:35.65,y:42.95},14).to({regX:8.9,regY:-0.2,scaleX:1,scaleY:1,skewX:0,x:38.65,y:38.8},16).wait(1));

	// Layer_24
	this.instance_10 = new lib.Symbol68("synched",0);
	this.instance_10.setTransform(38.6,38.8,1,1,0,0,0,10,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:10.1,scaleX:0.9053,scaleY:1.0353,skewX:3.3739,x:35.55,y:42.95},14).to({regX:10,scaleX:1,scaleY:1,skewX:0,x:38.6,y:38.8},16).wait(1));

	// Layer_21
	this.instance_11 = new lib.Symbol74("synched",0);
	this.instance_11.setTransform(-10.35,46.65,1.012,0.8704,0,4.4512,-171.1808,2.8,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:2.6,scaleX:0.9123,scaleY:1.0825,skewX:-5.4454,skewY:-189.7919,x:-11.7,y:55.65},14).to({regX:2.8,scaleX:1.012,scaleY:0.8704,skewX:4.4512,skewY:-171.1808,x:-10.35,y:46.65},16).wait(1));

	// Layer_22
	this.instance_12 = new lib.Symbol75("synched",0);
	this.instance_12.setTransform(-3.65,38.8,1,1,0,0,0,9.7,8.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:-9.7,y:44.3},14).to({x:-3.65,y:38.8},16).wait(1));

	// Layer_19
	this.instance_13 = new lib.Symbol73("synched",0);
	this.instance_13.setTransform(-8,38.8,1,1,0,0,0,9.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regX:8.8,regY:-0.1,scaleX:0.9747,scaleY:1.0729,x:-10.35,y:44.65},14).to({regX:9.1,regY:-0.2,scaleX:1,scaleY:1,x:-8,y:38.8},16).wait(1));

	// nip
	this.instance_14 = new lib.Tween1("synched",0);
	this.instance_14.setTransform(-8.6,38.95,1,1,0,0,0,-23.4,-10.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regX:-23.1,scaleX:0.936,scaleY:1.0044,skewX:-5.374,x:-10.7,y:44.75},14).to({regX:-23.4,scaleX:1,scaleY:1,skewX:0,x:-8.6,y:38.95},16).wait(1));

	// Layer_16
	this.instance_15 = new lib.Symbol69("synched",0);
	this.instance_15.setTransform(-1.25,28.1,1,1,0,0,0,18.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({regY:0.2,scaleY:1.1272,x:-4.45,y:28.7},14).to({regY:0.1,scaleY:1,x:-1.25,y:28.1},16).wait(1));

	// titup
	this.instance_16 = new lib.Symbol58("synched",0);
	this.instance_16.setTransform(-1.8,27,1,1,0,0,0,20.4,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({regY:-0.2,scaleX:0.9474,scaleY:1.0727,skewX:-1.5692,x:-5.5,y:27.1},14).to({regY:-0.3,scaleX:1,scaleY:1,skewX:0,x:-1.8,y:27},16).wait(1));

	// Layer_17
	this.instance_17 = new lib.Symbol70("synched",0);
	this.instance_17.setTransform(31.85,28.65,1,1,0,0,0,17.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({regY:0.3,scaleX:0.942,scaleY:1.193,skewX:1.946,x:28.75,y:29.1},14).to({regY:0.1,scaleX:1,scaleY:1,skewX:0,x:31.85,y:28.65},16).wait(1));

	// titlow
	this.instance_18 = new lib.Symbol59("synched",0);
	this.instance_18.setTransform(30.95,27.45,1,1,0,0,0,19.9,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({regX:20,scaleX:0.9233,scaleY:1.05,skewX:1.6363,x:27.9,y:27.65},14).to({regX:19.9,scaleX:1,scaleY:1,skewX:0,x:30.95,y:27.45},16).wait(1));

	// torso
	this.instance_19 = new lib.Symbol55("synched",0);
	this.instance_19.setTransform(15.1,-10.5,1,1,0,0,0,15.1,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({scaleY:1.0003,skewX:1.2858,x:11.95},14).to({scaleY:1,skewX:0,x:15.1},16).wait(1));

	// sh
	this.instance_20 = new lib.Symbol62("synched",0);
	this.instance_20.setTransform(-8.05,30.7,1,1,0,0,0,17.9,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({x:-11.25},14).to({x:-8.05},16).wait(1));

	// legback
	this.instance_21 = new lib.Symbol56("synched",0);
	this.instance_21.setTransform(60.75,281.8,1,1,0,0,0,66.2,185.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({scaleY:1.0005,skewX:-1.7908,x:60.9},14).to({scaleY:1,skewX:0,x:60.75},16).wait(1));

	// hand
	this.instance_22 = new lib.Symbol60("synched",0);
	this.instance_22.setTransform(36.85,23.75,1,1,-2.4714,0,0,4.9,-4.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({rotation:1.2363,x:33.65},14).to({rotation:-2.4714,x:36.85},16).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.4,-38.1,123.1,321);


(lib.Girl2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_21
	this.instance = new lib.Symbol53("synched",0);
	this.instance.setTransform(10.05,37,1.1849,1,0,0,0,7.4,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:7.3,scaleX:1,x:15.15,y:43.95},16).to({regX:7.4,scaleX:1.1849,x:10.05,y:37},15).wait(1));

	// head
	this.instance_1 = new lib.Symbol36();
	this.instance_1.setTransform(16.7,-0.05,1,1,0,0,0,24.2,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:5.9876,x:20.8,y:1.05},16).to({rotation:0,x:16.7,y:-0.05},15).wait(1));

	// nip
	this.instance_2 = new lib.Symbol45("synched",0);
	this.instance_2.setTransform(13,45.6,1.4,0.8039,0,0,0,1.8,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:-0.5,scaleX:1,scaleY:1,x:16.35,y:54.85},16).to({regY:-0.4,scaleX:1.4,scaleY:0.8039,x:13,y:45.6},15).wait(1));

	// Layer_19
	this.instance_3 = new lib.Symbol50("synched",0);
	this.instance_3.setTransform(11.4,44.4,0.9152,0.747,0,0,-5.4281,6.9,4.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:6.7,regY:4.6,scaleX:0.9615,scaleY:1.1956,skewY:0,x:15.1,y:52.1},16).to({regX:6.9,regY:4.8,scaleX:0.9152,scaleY:0.747,skewY:-5.4281,x:11.4,y:44.4},15).wait(1));

	// nip
	this.instance_4 = new lib.Symbol42("synched",0);
	this.instance_4.setTransform(11.9,40.75,1.0881,1,0,0,-3.5358,9.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:9.1,regY:0.5,scaleX:0.9447,scaleY:1.2527,skewX:1.6745,skewY:0,x:15.7,y:46.9},16).to({regX:9.2,regY:0.2,scaleX:1.0881,scaleY:1,skewX:0,skewY:-3.5358,x:11.9,y:40.75},15).wait(1));

	// Layer_17
	this.instance_5 = new lib.Symbol47("synched",0);
	this.instance_5.setTransform(6.5,14.65,1.0366,0.9417,0,0,-2.0448,13.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:13.2,regY:1.1,scaleX:1.0333,scaleY:1.1461,skewY:0,x:11.5,y:14.5},16).to({regX:13.3,regY:1.3,scaleX:1.0366,scaleY:0.9417,skewY:-2.0448,x:6.5,y:14.65},15).wait(1));

	// titup
	this.instance_6 = new lib.Symbol41("synched",0);
	this.instance_6.setTransform(7.9,15.5,1.0203,0.9751,0,0,0,17.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:0.1,scaleX:1,scaleY:1.0618,x:12.35,y:15.35},16).to({regY:0.2,scaleX:1.0203,scaleY:0.9751,x:7.9,y:15.5},15).wait(1));

	// nip
	this.instance_7 = new lib.Symbol44("synched",0);
	this.instance_7.setTransform(-47.4,36.15,1,1,0,0,0,2.6,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:2.3,regY:-1.1,scaleX:0.7085,scaleY:0.9694,skewX:-22.6221,skewY:-21.712,x:-43.55,y:47.8},16).to({regX:2.6,regY:-1.2,scaleX:1,scaleY:1,skewX:0,skewY:0,x:-47.4,y:36.15},15).wait(1));

	// Layer_22
	this.instance_8 = new lib.Symbol54("synched",0);
	this.instance_8.setTransform(-35,33.6,1,1,0,0,0,9.4,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:9.3,rotation:-8.001,x:-32.05,y:39},16).to({regX:9.4,rotation:0,x:-35,y:33.6},15).wait(1));

	// Layer_20
	this.instance_9 = new lib.Symbol51("synched",0);
	this.instance_9.setTransform(-46.1,36.45,1,1,0,0,0,4.5,4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:4.4,scaleX:0.7742,scaleY:0.8557,skewX:-9.7275,x:-41.05,y:43.05},16).to({regX:4.5,scaleX:1,scaleY:1,skewX:0,x:-46.1,y:36.45},15).wait(1));

	// nip
	this.instance_10 = new lib.Symbol43("synched",0);
	this.instance_10.setTransform(-40.75,32.1,1,1,0,0,0,8.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:8.3,regY:0.1,scaleX:0.9595,scaleY:1.1221,skewX:-10.4456,skewY:-4.2928,x:-37.25,y:39.3},16).to({regX:8.5,regY:0,scaleX:1,scaleY:1,skewX:0,skewY:0,x:-40.75,y:32.1},15).wait(1));

	// Layer_18
	this.instance_11 = new lib.Symbol48("synched",0);
	this.instance_11.setTransform(-6,14.8,1.0012,0.9915,0,0,2.7911,31.5,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:31.4,regY:0.4,scaleX:1.0104,scaleY:1.1436,skewX:4.5013,skewY:-4.8824,x:-1.2,y:14.95},16).to({regX:31.5,regY:0.2,scaleX:1.0012,scaleY:0.9915,skewX:0,skewY:2.7911,x:-6,y:14.8},15).wait(1));

	// titup
	this.instance_12 = new lib.Symbol40("synched",0);
	this.instance_12.setTransform(-7.1,15.85,1.0007,1,0,0,2.1558,39.9,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleX:1.0044,scaleY:1.0536,skewY:-5.3758,x:-2.1,y:15.8},16).to({scaleX:1.0007,scaleY:1,skewY:2.1558,x:-7.1,y:15.85},15).wait(1));

	// handup
	this.instance_13 = new lib.Symbol34("synched",0);
	this.instance_13.setTransform(17.65,4.5,1,1,0,0,0,-0.1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regX:0,rotation:8.4409,x:22.3},16).to({regX:-0.1,rotation:0,x:17.65},15).wait(1));

	// torso
	this.instance_14 = new lib.Symbol33("synched",0);
	this.instance_14.setTransform(0.1,-1,1,1,0,0,0,0.1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({scaleY:1.0003,skewX:-1.2937,x:4.65},16).to({scaleY:1,skewX:0,x:0.1},15).wait(1));

	// handup
	this.instance_15 = new lib.Symbol35("synched",0);
	this.instance_15.setTransform(-11.4,8,1,1,0,0,0,43.1,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({x:-6.9},16).to({x:-11.4},15).wait(1));

	// h
	this.instance_16 = new lib.Symbol37("synched",0);
	this.instance_16.setTransform(22.05,-13.35,1,1,0,0,0,9.8,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({x:27.05,y:-11.85},16).to({x:22.05,y:-13.35},15).wait(1));

	// h
	this.instance_17 = new lib.Symbol52("synched",0);
	this.instance_17.setTransform(35.9,6.95,0.9899,1.014,0,11.302,6.3497,6.7,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({regX:7.1,regY:1,scaleX:0.9591,scaleY:1.1044,skewX:5.8716,skewY:3.7255,x:36.7,y:7.5},16).to({regX:6.7,regY:0.8,scaleX:0.9899,scaleY:1.014,skewX:11.302,skewY:6.3497,x:35.9,y:6.95},15).wait(1));

	// h
	this.instance_18 = new lib.Symbol38("synched",0);
	this.instance_18.setTransform(37.4,15.65,1,1.004,0,5.1122,0,3.1,-9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({regX:3.5,regY:-9.5,scaleX:0.9743,scaleY:0.9859,skewX:-1.2052,skewY:-3.0343,x:36.55,y:17.9},16).to({regX:3.1,regY:-9.8,scaleX:1,scaleY:1.004,skewX:5.1122,skewY:0,x:37.4,y:15.65},15).wait(1));

	// h
	this.instance_19 = new lib.Symbol39("synched",0);
	this.instance_19.setTransform(27.6,19.75,1,1.0031,0,4.5375,0,12.9,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({regX:13.1,regY:1.7,scaleX:0.9885,scaleY:0.9788,skewX:0.8968,skewY:8.7975,x:29.7,y:22.6},16).to({regX:12.9,regY:1.4,scaleX:1,scaleY:1.0031,skewX:4.5375,skewY:0,x:27.6,y:19.75},15).wait(1));

	// legup
	this.instance_20 = new lib.Symbol49("synched",0);
	this.instance_20.setTransform(32.45,281.7,1,1,0,0,0,58.2,188.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({scaleY:1.0007,skewX:2.1357,x:32.55},16).to({scaleY:1,skewX:0,x:32.45},15).wait(1));

	// legback
	this.instance_21 = new lib.Symbol46("synched",0);
	this.instance_21.setTransform(-50.6,273.95,1,1,0,0,0,6.1,182.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({regX:6,regY:182.3,scaleY:1.0001,skewX:2.0111,skewY:1.2258,y:274.05},16).to({regX:6.1,regY:182.2,scaleY:1,skewX:0,skewY:0,y:273.95},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.3,-41.5,188.2,323.5);


(lib.Girl1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// handup
	this.instance = new lib.Symbol17("synched",0);
	this.instance.setTransform(7.7,-25.7,1,1,0,0,0,7.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.5,rotation:-1.7042,x:12.85,y:-23.6},14).to({regY:0.6,rotation:0,x:7.7,y:-25.7},15).wait(1));

	// legup
	this.instance_1 = new lib.Symbol2("synched",0);
	this.instance_1.setTransform(18,159.9,1,1,0,0,0,18,159.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:17.9,scaleY:1.0007,skewX:2.1549,x:17.95},14).to({regX:18,scaleY:1,skewX:0,x:18},15).wait(1));

	// legup
	this.instance_2 = new lib.Symbol4("synched",0);
	this.instance_2.setTransform(89.6,159.25,1,1,0,0,0,53.2,138);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:53.3,scaleY:1.0008,skewX:2.2649,x:89.75},14).to({regX:53.2,scaleY:1,skewX:0,x:89.6},15).wait(1));

	// strip
	this.instance_3 = new lib.Symbol7("synched",0);
	this.instance_3.setTransform(46,-63.75,1,1,0,0,0,20.5,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:20.6,regY:2.5,scaleX:0.9762,scaleY:1.1265,skewX:1.0687,x:48.9,y:-63.8},14).to({regX:20.5,regY:2.6,scaleX:1,scaleY:1,skewX:0,x:46,y:-63.75},15).wait(1));

	// stripup
	this.instance_4 = new lib.Symbol9("synched",0);
	this.instance_4.setTransform(46.85,-64.55,1,1,0,0,0,0,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:0.3,scaleX:0.9461,scaleY:1.1042,skewX:-4.2921,x:49.35,y:-64.6},14).to({regX:0,scaleX:1,scaleY:1,skewX:0,x:46.85,y:-64.55},15).wait(1));

	// Layer_3
	this.instance_5 = new lib.Symbol18("synched",0);
	this.instance_5.setTransform(72.5,-34.6,1,1,0,0,0,2.9,3.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:75.85,y:-29.5},14).to({x:72.5,y:-34.6},15).wait(1));

	// nip
	this.instance_6 = new lib.Symbol11("synched",0);
	this.instance_6.setTransform(72.5,-34.45,1.0809,1,0,0,174.0263,1.8,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:1.7,scaleX:0.8587,scaleY:1.0732,skewX:4.4868,skewY:180,x:76.2,y:-29.45},14).to({regX:1.8,scaleX:1.0809,scaleY:1,skewX:0,skewY:174.0263,x:72.5,y:-34.45},15).wait(1));

	// Layer_4
	this.instance_7 = new lib.Symbol19("synched",0);
	this.instance_7.setTransform(47.2,-43.6,1,1,0,0,0,1.3,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:0.2,scaleX:1.7,scaleY:1.4706,x:51.2,y:-43.55},14).to({regY:0.4,scaleX:1,scaleY:1,x:47.2,y:-43.6},15).wait(1));

	// tit
	this.instance_8 = new lib.Symbol16("synched",0);
	this.instance_8.setTransform(52,-51.8,1,1,0,0,0,5.8,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1.0016,scaleY:1.0864,skewY:3.2209,x:55.2,y:-51.85},14).to({scaleX:1,scaleY:1,skewY:0,x:52,y:-51.8},15).wait(1));

	// Layer_2
	this.instance_9 = new lib.Symbol18("synched",0);
	this.instance_9.setTransform(23.1,-34.6,1,1,0,0,0,2.9,3.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:25.5,y:-30.5},14).to({x:23.1,y:-34.6},15).wait(1));

	// nip
	this.instance_10 = new lib.Symbol11("synched",0);
	this.instance_10.setTransform(23.65,-34.55,1.0865,1,0,0,5.8698,2.8,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:2.9,scaleX:0.875,scaleY:1.0877,skewX:-5.6477,skewY:0,x:25.8,y:-30.1},14).to({regX:2.8,scaleX:1.0865,scaleY:1,skewX:0,skewY:5.8698,x:23.65,y:-34.55},15).wait(1));

	// handup
	this.instance_11 = new lib.Symbol5("synched",0);
	this.instance_11.setTransform(63.7,-62.75,1,1,3.4371,0,0,-0.6,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:-0.5,rotation:-0.7126,x:65.7,y:-62.9},14).to({regX:-0.6,rotation:3.4371,x:63.7,y:-62.75},15).wait(1));

	// titup
	this.instance_12 = new lib.Symbol6("synched",0);
	this.instance_12.setTransform(40.2,-51.4,1,1,0,0,0,20.4,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleX:1.0015,scaleY:1.0702,skewY:-3.1294,x:43.4,y:-51.15},14).to({scaleX:1,scaleY:1,skewY:0,x:40.2,y:-51.4},15).wait(1));

	// h
	this.instance_13 = new lib.Symbol20();
	this.instance_13.setTransform(37,-67.15,1,1,0,0,0,11.7,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regX:11.8,scaleY:1.01,skewX:-8.0544,x:40,y:-66.65},14).to({regX:11.7,scaleY:1,skewX:0,x:37,y:-67.15},15).wait(1));

	// handup
	this.instance_14 = new lib.Symbol10("synched",0);
	this.instance_14.setTransform(34.5,-62.05,1,1,0,0,0,31.5,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regX:31.6,scaleY:0.9786,rotation:-3.1957,x:38.2,y:-62},14).to({regX:31.5,scaleY:1,rotation:0,x:34.5,y:-62.05},15).wait(1));

	// h
	this.instance_15 = new lib.Symbol13();
	this.instance_15.setTransform(56.5,-99.8,1,1,0,0,0,1.7,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({regX:1.9,scaleY:0.9225,skewX:-2.6442,x:57.25,y:-100.5},14).to({regX:1.7,scaleY:1,skewX:0,x:56.5,y:-99.8},15).wait(1));

	// h
	this.instance_16 = new lib.Symbol14();
	this.instance_16.setTransform(60.35,-98.7,1,1,0,0,0,3,-6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({scaleY:1.0008,skewX:-2.2614,y:-99.7},14).to({scaleY:1,skewX:0,y:-98.7},15).wait(1));

	// h
	this.instance_17 = new lib.Symbol15();
	this.instance_17.setTransform(58.95,-79.05,1,1,0,0,0,7.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({regX:7.4,scaleY:1.0032,skewX:-4.5862,x:60.25,y:-79.55},14).to({regX:7.3,scaleY:1,skewX:0,x:58.95,y:-79.05},15).wait(1));

	// head
	this.instance_18 = new lib.Symbol12();
	this.instance_18.setTransform(51.15,-71.35,1,1,0,0,0,17.4,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({regY:34.4,rotation:-5.4366,x:53.8,y:-71.95},14).to({regY:34.5,rotation:0,x:51.15,y:-71.35},15).wait(1));

	// torso
	this.instance_19 = new lib.Symbol3("synched",0);
	this.instance_19.setTransform(39.2,-74.25,1,1,0,0,0,29.8,-46.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({regX:29.9,scaleY:1.0008,skewX:-2.2588,x:41.3},14).to({regX:29.8,scaleY:1,skewX:0,x:39.2},15).wait(1));

	// h
	this.instance_20 = new lib.Symbol8();
	this.instance_20.setTransform(33.6,-90.7,1,1.0008,0,-2.2736,0,10.1,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({scaleY:1.0044,skewX:-5.3766,x:34.4,y:-88.9},14).to({scaleY:1.0008,skewX:-2.2736,x:33.6,y:-90.7},15).wait(1));

	// h
	this.instance_21 = new lib.Symbol1();
	this.instance_21.setTransform(66.3,-89.15,1,1,0,0,0,9.9,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({regY:0.4,scaleX:1.0255,skewY:-12.8046,x:67.4,y:-90.45},14).to({regY:0.5,scaleX:1,skewY:0,x:66.3,y:-89.15},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-108,99.5,268.2);


(lib.CardTasha = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// piece6
	this.a9_btn = new lib.Symbol26copy2();
	this.a9_btn.name = "a9_btn";
	this.a9_btn.setTransform(97.55,106.55,1,1,0,0,0,32,21.5);

	this.timeline.addTween(cjs.Tween.get(this.a9_btn).wait(1));

	// piece13
	this.a12_btn = new lib.Symbol82();
	this.a12_btn.name = "a12_btn";
	this.a12_btn.setTransform(63.6,201.25,1,1,0,0,0,66,45.7);

	this.timeline.addTween(cjs.Tween.get(this.a12_btn).wait(1));

	// piece12
	this.a8_btn = new lib.Symbol32copy2();
	this.a8_btn.name = "a8_btn";
	this.a8_btn.setTransform(48.75,121.05,1,1,0,0,0,17.2,34.5);

	this.timeline.addTween(cjs.Tween.get(this.a8_btn).wait(1));

	// piece11
	this.a7_btn = new lib.Symbol31();
	this.a7_btn.name = "a7_btn";
	this.a7_btn.setTransform(14.5,107.35,1,1,0,0,0,16.9,20.8);

	this.timeline.addTween(cjs.Tween.get(this.a7_btn).wait(1));

	// piece10
	this.a5_btn = new lib.Symbol30();
	this.a5_btn.name = "a5_btn";
	this.a5_btn.setTransform(69.55,64.05,1,1,0,0,0,17.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.a5_btn).wait(1));

	// piece9
	this.a13_btn = new lib.Symbol29();
	this.a13_btn.name = "a13_btn";
	this.a13_btn.setTransform(98.35,208.25,1,1,0,0,0,31.3,25.2);

	this.timeline.addTween(cjs.Tween.get(this.a13_btn).wait(1));

	// piece8
	this.a11_btn = new lib.Symbol28();
	this.a11_btn.name = "a11_btn";
	this.a11_btn.setTransform(97.85,155.55,1,1,0,0,0,31.8,27.5);

	this.timeline.addTween(cjs.Tween.get(this.a11_btn).wait(1));

	// piece7
	this.a6_btn = new lib.Symbol27();
	this.a6_btn.name = "a6_btn";
	this.a6_btn.setTransform(108.35,63.05,1,1,0,0,0,21.3,22);

	this.timeline.addTween(cjs.Tween.get(this.a6_btn).wait(1));

	// piece5
	this.a10_btn = new lib.Symbol25();
	this.a10_btn.name = "a10_btn";
	this.a10_btn.setTransform(26.3,154.05,1,1,0,0,0,28.7,26);

	this.timeline.addTween(cjs.Tween.get(this.a10_btn).wait(1));

	// piece4
	this.a2_btn = new lib.Symbol24();
	this.a2_btn.name = "a2_btn";
	this.a2_btn.setTransform(75.45,17.5,1,1,0,0,0,23.4,24);

	this.timeline.addTween(cjs.Tween.get(this.a2_btn).wait(1));

	// piece3
	this.a4_btn = new lib.Symbol23();
	this.a4_btn.name = "a4_btn";
	this.a4_btn.setTransform(24.8,63.05,1,1,0,0,0,27.2,23.5);

	this.timeline.addTween(cjs.Tween.get(this.a4_btn).wait(1));

	// piece2
	this.a3_btn = new lib.Symbol22();
	this.a3_btn.name = "a3_btn";
	this.a3_btn.setTransform(113.4,17.3,1,1,0,0,0,16.4,23.8);

	this.timeline.addTween(cjs.Tween.get(this.a3_btn).wait(1));

	// piece1
	this.a1_btn = new lib.Symbol21();
	this.a1_btn.name = "a1_btn";
	this.a1_btn.setTransform(24.8,16.5,1,1,0,0,0,27.2,23);

	this.timeline.addTween(cjs.Tween.get(this.a1_btn).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CardTasha, new cjs.Rectangle(-2.6,-6.7,132.6,254), null);


(lib.CardJude = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// piece13
	this.p12_btn = new lib.Symbol82();
	this.p12_btn.name = "p12_btn";
	this.p12_btn.setTransform(63.6,201.25,1,1,0,0,0,66,45.7);

	this.timeline.addTween(cjs.Tween.get(this.p12_btn).wait(1));

	// piece12
	this.p8_btn = new lib.Symbol32();
	this.p8_btn.name = "p8_btn";
	this.p8_btn.setTransform(48.75,121.05,1,1,0,0,0,17.2,34.5);

	this.timeline.addTween(cjs.Tween.get(this.p8_btn).wait(1));

	// piece11
	this.p7_btn = new lib.Symbol31();
	this.p7_btn.name = "p7_btn";
	this.p7_btn.setTransform(14.5,107.35,1,1,0,0,0,16.9,20.8);

	this.timeline.addTween(cjs.Tween.get(this.p7_btn).wait(1));

	// piece10
	this.p5_btn = new lib.Symbol30();
	this.p5_btn.name = "p5_btn";
	this.p5_btn.setTransform(69.55,64.05,1,1,0,0,0,17.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.p5_btn).wait(1));

	// piece9
	this.p13_btn = new lib.Symbol29();
	this.p13_btn.name = "p13_btn";
	this.p13_btn.setTransform(98.35,208.25,1,1,0,0,0,31.3,25.2);

	this.timeline.addTween(cjs.Tween.get(this.p13_btn).wait(1));

	// piece8
	this.p11_btn = new lib.Symbol28();
	this.p11_btn.name = "p11_btn";
	this.p11_btn.setTransform(97.85,155.55,1,1,0,0,0,31.8,27.5);

	this.timeline.addTween(cjs.Tween.get(this.p11_btn).wait(1));

	// piece7
	this.p6_btn = new lib.Symbol27();
	this.p6_btn.name = "p6_btn";
	this.p6_btn.setTransform(108.35,63.05,1,1,0,0,0,21.3,22);

	this.timeline.addTween(cjs.Tween.get(this.p6_btn).wait(1));

	// piece6
	this.p9_btn = new lib.Symbol26();
	this.p9_btn.name = "p9_btn";
	this.p9_btn.setTransform(97.55,106.55,1,1,0,0,0,32,21.5);

	this.timeline.addTween(cjs.Tween.get(this.p9_btn).wait(1));

	// piece5
	this.p10_btn = new lib.Symbol25();
	this.p10_btn.name = "p10_btn";
	this.p10_btn.setTransform(26.3,154.05,1,1,0,0,0,28.7,26);

	this.timeline.addTween(cjs.Tween.get(this.p10_btn).wait(1));

	// piece4
	this.p2_btn = new lib.Symbol24();
	this.p2_btn.name = "p2_btn";
	this.p2_btn.setTransform(75.45,17.5,1,1,0,0,0,23.4,24);

	this.timeline.addTween(cjs.Tween.get(this.p2_btn).wait(1));

	// piece3
	this.p4_btn = new lib.Symbol23();
	this.p4_btn.name = "p4_btn";
	this.p4_btn.setTransform(24.8,63.05,1,1,0,0,0,27.2,23.5);

	this.timeline.addTween(cjs.Tween.get(this.p4_btn).wait(1));

	// piece2
	this.p3_btn = new lib.Symbol22();
	this.p3_btn.name = "p3_btn";
	this.p3_btn.setTransform(113.4,17.3,1,1,0,0,0,16.4,23.8);

	this.timeline.addTween(cjs.Tween.get(this.p3_btn).wait(1));

	// piece1
	this.p1_btn = new lib.Symbol21();
	this.p1_btn.name = "p1_btn";
	this.p1_btn.setTransform(24.8,16.5,1,1,0,0,0,27.2,23);

	this.timeline.addTween(cjs.Tween.get(this.p1_btn).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CardJude, new cjs.Rectangle(-2.6,-6.7,132.6,254), null);


(lib.CardCyndi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// piece13
	this.c12_btn = new lib.Symbol82();
	this.c12_btn.name = "c12_btn";
	this.c12_btn.setTransform(63.6,201.25,1,1,0,0,0,66,45.7);

	this.timeline.addTween(cjs.Tween.get(this.c12_btn).wait(1));

	// piece12
	this.c8_btn = new lib.Symbol32copy();
	this.c8_btn.name = "c8_btn";
	this.c8_btn.setTransform(48.75,121.05,1,1,0,0,0,17.2,34.5);

	this.timeline.addTween(cjs.Tween.get(this.c8_btn).wait(1));

	// piece11
	this.c7_btn = new lib.Symbol31();
	this.c7_btn.name = "c7_btn";
	this.c7_btn.setTransform(14.5,107.35,1,1,0,0,0,16.9,20.8);

	this.timeline.addTween(cjs.Tween.get(this.c7_btn).wait(1));

	// piece10
	this.c5_btn = new lib.Symbol30();
	this.c5_btn.name = "c5_btn";
	this.c5_btn.setTransform(69.55,64.05,1,1,0,0,0,17.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.c5_btn).wait(1));

	// piece9
	this.c13_btn = new lib.Symbol29();
	this.c13_btn.name = "c13_btn";
	this.c13_btn.setTransform(98.35,208.25,1,1,0,0,0,31.3,25.2);

	this.timeline.addTween(cjs.Tween.get(this.c13_btn).wait(1));

	// piece8
	this.c11_btn = new lib.Symbol28();
	this.c11_btn.name = "c11_btn";
	this.c11_btn.setTransform(97.85,155.55,1,1,0,0,0,31.8,27.5);

	this.timeline.addTween(cjs.Tween.get(this.c11_btn).wait(1));

	// piece7
	this.c6_btn = new lib.Symbol27();
	this.c6_btn.name = "c6_btn";
	this.c6_btn.setTransform(108.35,63.05,1,1,0,0,0,21.3,22);

	this.timeline.addTween(cjs.Tween.get(this.c6_btn).wait(1));

	// piece6
	this.c9_btn = new lib.Symbol26copy();
	this.c9_btn.name = "c9_btn";
	this.c9_btn.setTransform(97.55,106.55,1,1,0,0,0,32,21.5);

	this.timeline.addTween(cjs.Tween.get(this.c9_btn).wait(1));

	// piece5
	this.c10_btn = new lib.Symbol25();
	this.c10_btn.name = "c10_btn";
	this.c10_btn.setTransform(26.3,154.05,1,1,0,0,0,28.7,26);

	this.timeline.addTween(cjs.Tween.get(this.c10_btn).wait(1));

	// piece4
	this.c2_btn = new lib.Symbol24();
	this.c2_btn.name = "c2_btn";
	this.c2_btn.setTransform(75.45,17.5,1,1,0,0,0,23.4,24);

	this.timeline.addTween(cjs.Tween.get(this.c2_btn).wait(1));

	// piece3
	this.c4_btn = new lib.Symbol23();
	this.c4_btn.name = "c4_btn";
	this.c4_btn.setTransform(24.8,63.05,1,1,0,0,0,27.2,23.5);

	this.timeline.addTween(cjs.Tween.get(this.c4_btn).wait(1));

	// piece2
	this.c3_btn = new lib.Symbol22();
	this.c3_btn.name = "c3_btn";
	this.c3_btn.setTransform(113.4,17.3,1,1,0,0,0,16.4,23.8);

	this.timeline.addTween(cjs.Tween.get(this.c3_btn).wait(1));

	// piece1
	this.c1_btn = new lib.Symbol21();
	this.c1_btn.name = "c1_btn";
	this.c1_btn.setTransform(24.8,16.5,1,1,0,0,0,27.2,23);

	this.timeline.addTween(cjs.Tween.get(this.c1_btn).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CardCyndi, new cjs.Rectangle(-2.6,-6.7,132.6,254), null);


(lib.Blacker = function(mode,startPosition,loop,reversed) {
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
	this.frame_31 = function() {
		this.stop();
		this.parent.subtitles_mc.play();
	}
	this.frame_70 = function() {
		this.stop();
		if(window.parent.Finish == 1) window.open("EndGalery.html","_self");
		else window.open("SexPussyFuck.html","_self");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(31).call(this.frame_31).wait(39).call(this.frame_70).wait(1));

	// Слой 1
	this.instance = new lib.BlacSqer("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},30).to({_off:true},1).wait(9).to({_off:false},0).to({alpha:1},30).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-289,1024,578);


(lib.WitPopUp = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		playSound("wonhotdog");
	}
	this.frame_3 = function() {
		playSound("aplodismentywon");
		playSound("youwin");
	}
	this.frame_9 = function() {
		this.stop();
		this.nr_btn.addEventListener("click", GetRound.bind(this));
		function GetRound() {
			this.parent.adittions_mc.blacker_mc.play();
			this.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(6).call(this.frame_9).wait(1));

	// sound3
	this.nr_btn = new lib.NextRoundBTN();
	this.nr_btn.name = "nr_btn";
	this.nr_btn.setTransform(-10.95,123.05);
	this.nr_btn._off = true;
	new cjs.ButtonHelper(this.nr_btn, 0, 1, 2, false, new lib.NextRoundBTN(), 3);

	this.timeline.addTween(cjs.Tween.get(this.nr_btn).wait(9).to({_off:false},0).wait(1));

	// Layer_1
	this.instance = new lib.Wining("synched",0);
	this.instance.setTransform(-5,-70.5,0.2202,0.2202,0,0,0,300,261.4);
	this.instance.alpha = 0.0508;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regY:261.5,scaleX:0.73,scaleY:0.73,x:13.05,y:-36.5,alpha:1},8,cjs.Ease.quadOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205.9,-227.4,438,421.3);


(lib.Subtitles = function(mode,startPosition,loop,reversed) {
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
		this.stop();
		this.skip_btn.addEventListener("click", Skip.bind(this));
		function Skip()
		{
			this.gotoAndStop(355);
		}
	}
	this.frame_1 = function() {
		playSound("VoiceHotDogGame");
	}
	this.frame_355 = function() {
		this.stop();
		this.parent.parent.hotDog_mc.x = 510;
		this.parent.parent.arrows_mc.visible = true;
	}
	this.frame_356 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(354).call(this.frame_355).wait(1).call(this.frame_356).wait(1));

	// Subtitles
	this.skip_btn = new lib.InvisibleButton();
	this.skip_btn.name = "skip_btn";
	this.skip_btn.setTransform(-86,-20,4.3,1);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.InvisibleButton(), 3);

	this.instance = new lib.Scene3BoyTXT1();
	this.instance.setTransform(0,0,1,1,0,0,0,220,21.4);

	this.instance_1 = new lib.Scene3BoyTXT3();
	this.instance_1.setTransform(0,0,1,1,0,0,0,260.5,21.4);

	this.instance_2 = new lib.Scene3BoyTXT4();
	this.instance_2.setTransform(0,0,1,1,0,0,0,235.4,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.skip_btn}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},88).to({state:[{t:this.instance_2}]},164).to({state:[]},102).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-261.1,-22,522.2,44.1);


(lib.Additions = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.pg_btn.addEventListener("click", fl_pgMouseClickHandler.bind(this));
		function fl_pgMouseClickHandler()
		{
			window.open("http://www.porngames.com", "_blank");
		}
		this.inv_btn.addEventListener("click", MakeAction.bind(this));
		function MakeAction()
		{
			this.blacker_mc.gotoAndPlay(32);
		}
		if(window.parent.subtitles == 0 || window.parent.subtitles == 1)	this.subtitles_mc.visible = window.parent.subtitles;
		else this.subtitles_mc.visible = 1;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.pg_btn = new lib.PornGamesBTN();
	this.pg_btn.name = "pg_btn";
	this.pg_btn.setTransform(952.5,17.5,1,1,0,0,0,62.5,10.5);
	new cjs.ButtonHelper(this.pg_btn, 0, 1, 2, false, new lib.PornGamesBTN(), 3);

	this.timeline.addTween(cjs.Tween.get(this.pg_btn).wait(1));

	// Layer_3
	this.inv_btn = new lib.InvisibleButton();
	this.inv_btn.name = "inv_btn";
	this.inv_btn.setTransform(0,535);
	new cjs.ButtonHelper(this.inv_btn, 0, 1, 2, false, new lib.InvisibleButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.inv_btn).wait(1));

	// Layer_4
	this.subtitles_mc = new lib.Subtitles();
	this.subtitles_mc.name = "subtitles_mc";
	this.subtitles_mc.setTransform(512,538.9);

	this.timeline.addTween(cjs.Tween.get(this.subtitles_mc).wait(1));

	// Layer_2
	this.blacker_mc = new lib.Blacker();
	this.blacker_mc.name = "blacker_mc";
	this.blacker_mc.setTransform(512,289);

	this.timeline.addTween(cjs.Tween.get(this.blacker_mc).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Additions, new cjs.Rectangle(0,0,1024,578), null);


// stage content:
(lib.GameHotDog = function(mode,startPosition,loop,reversed) {
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
		createjs.Touch.enable(stage);
		_this = this;
		
		_this.arrows_mc.visible = false;
		
		var hotDogGunX = [305, 510, 720];
		var transName;
		var hitCounter = 0;
		
		_this.bulet_mc.stop();
		_this.card1_mc.on("click", function (evt) {
			if (_this.hotDog_mc.x == 305) {
				transName = evt.target.parent.name;
				_this.hotDog_mc.play();
				var reposition = stage.globalToLocal(evt.stageX, evt.stageY);
				_this.bulet_mc.x = reposition.x;
				_this.bulet_mc.y = reposition.y;
				_this.bulet_mc.play();
			}
		});
		_this.card2_mc.on("click", function (evt) {
			if (_this.hotDog_mc.x == 510) {
				transName = evt.target.parent.name;
				_this.hotDog_mc.play();
				var reposition = stage.globalToLocal(evt.stageX, evt.stageY);
				_this.bulet_mc.x = reposition.x;
				_this.bulet_mc.y = reposition.y;
				_this.bulet_mc.play();
			}
		});
		_this.card3_mc.on("click", function (evt) {
			if (_this.hotDog_mc.x == 720) {
				transName = evt.target.parent.name;
				_this.hotDog_mc.play();
				var reposition = stage.globalToLocal(evt.stageX, evt.stageY);
				_this.bulet_mc.x = reposition.x;
				_this.bulet_mc.y = reposition.y;
				_this.bulet_mc.play();
			}
		});
		
		_this.on("destroyIcon", function () {
			hitCounter++;
			if (_this.hotDog_mc.x == 305) _this.card1_mc[transName].visible = 0;
			if (_this.hotDog_mc.x == 510) _this.card2_mc[transName].visible = 0;
			if (_this.hotDog_mc.x == 720) _this.card3_mc[transName].visible = 0;
			if(hitCounter == 39) _this.win_mc.play();
		});
		
		_this.arrows_mc.goRight_btn.on("click", function (evt) {
			if (_this.hotDog_mc.x == 305) _this.hotDog_mc.x = hotDogGunX[1];
			else _this.hotDog_mc.x = hotDogGunX[2];
		});
		_this.arrows_mc.goLeft_btn.on("click", function (evt) {
			if (_this.hotDog_mc.x == 720) _this.hotDog_mc.x = hotDogGunX[1];
			else _this.hotDog_mc.x = hotDogGunX[0];
		});
		playSound("MainHotDogGame",-1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Blacker
	this.adittions_mc = new lib.Additions();
	this.adittions_mc.name = "adittions_mc";
	this.adittions_mc.setTransform(511.9,297.8,1,1,0,0,0,511.9,298.8);

	this.timeline.addTween(cjs.Tween.get(this.adittions_mc).wait(1));

	// Win
	this.win_mc = new lib.WitPopUp();
	this.win_mc.name = "win_mc";
	this.win_mc.setTransform(523,267.95);

	this.timeline.addTween(cjs.Tween.get(this.win_mc).wait(1));

	// Bulet
	this.bulet_mc = new lib.HotDogSplesh();
	this.bulet_mc.name = "bulet_mc";
	this.bulet_mc.setTransform(-66.85,549.6,1,1,0,0,0,-4,22.4);

	this.timeline.addTween(cjs.Tween.get(this.bulet_mc).wait(1));

	// arrow
	this.arrows_mc = new lib.Symbol79();
	this.arrows_mc.name = "arrows_mc";
	this.arrows_mc.setTransform(511,255.5,1,1,0,0,0,275,157.5);

	this.timeline.addTween(cjs.Tween.get(this.arrows_mc).wait(1));

	// hotdog gun
	this.hotDog_mc = new lib.hotdoggunfire();
	this.hotDog_mc.name = "hotDog_mc";
	this.hotDog_mc.setTransform(511,466.5);

	this.timeline.addTween(cjs.Tween.get(this.hotDog_mc).wait(1));

	// sheld1
	this.card1_mc = new lib.CardTasha();
	this.card1_mc.name = "card1_mc";
	this.card1_mc.setTransform(309.6,417.9,1.1124,1.1124,0,0,0,65,248.7);

	this.timeline.addTween(cjs.Tween.get(this.card1_mc).wait(1));

	// girl3
	this.instance = new lib.Girl3();
	this.instance.setTransform(304.3,416.85,1.1278,1.048,0,0,0,16,279.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// sheld2
	this.card3_mc = new lib.CardCyndi();
	this.card3_mc.name = "card3_mc";
	this.card3_mc.setTransform(723.75,416.75,1.0948,1.0948,0,0,0,65,248.6);

	this.timeline.addTween(cjs.Tween.get(this.card3_mc).wait(1));

	// girl2
	this.instance_1 = new lib.Girl2();
	this.instance_1.setTransform(718.35,145,1,1,0,0,0,0.6,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// sheld1
	this.card2_mc = new lib.CardJude();
	this.card2_mc.name = "card2_mc";
	this.card2_mc.setTransform(508.55,248.55,1,1,0,0,0,58.6,110.5);

	this.timeline.addTween(cjs.Tween.get(this.card2_mc).wait(1));

	// girl1
	this.instance_2 = new lib.Girl1();
	this.instance_2.setTransform(522.05,236.2,1.13,1.13,0,0,0,46.5,26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.HotDogBackground();
	this.instance_3.setTransform(-8,-16,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(408.2,272,623.7,335.20000000000005);
// library properties:
lib.properties = {
	id: '4065574C538CDB42BD06D3B66D7BA9F3',
	width: 1024,
	height: 576,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/arrow.png?1719163635250", id:"arrow"},
		{src:"images/hodDogIMG.png?1719163635250", id:"hodDogIMG"},
		{src:"images/HotDogBackground.png?1719163635250", id:"HotDogBackground"},
		{src:"images/HotDogGun.png?1719163635250", id:"HotDogGun"},
		{src:"images/HotDogIMG.png?1719163635250", id:"HotDogIMG"},
		{src:"images/porngames_clear.png?1719163635250", id:"porngames_clear"},
		{src:"images/rifleIMG.png?1719163635250", id:"rifleIMG"},
		{src:"images/YouWin.png?1719163635250", id:"YouWin"},
		{src:"sounds/aplodismentywon.mp3?1719163635250", id:"aplodismentywon"},
		{src:"sounds/Heavypoppingwav.mp3?1719163635250", id:"Heavypoppingwav"},
		{src:"sounds/MainHotDogGame.mp3?1719163635250", id:"MainHotDogGame"},
		{src:"sounds/metallicheskiy.mp3?1719163635250", id:"metallicheskiy"},
		{src:"sounds/VoiceHotDogGame.mp3?1719163635250", id:"VoiceHotDogGame"},
		{src:"sounds/wonhotdog.mp3?1719163635250", id:"wonhotdog"},
		{src:"sounds/youwin.mp3?1719163635250", id:"youwin"}
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
an.compositions['4065574C538CDB42BD06D3B66D7BA9F3'] = {
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