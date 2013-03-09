// Array of 10 image names.
var NAMES = ["source/tech_support_cheat_sheet.png", "source/mein_kampfy_chair.png", 
			 "source/wishesdemotivator.png", "source/avatar_aang.png", 
			 "source/spoons.png", "source/advent_calendar.png", 
			 "source/portal_hammock.png", "source/stairs.png", 
			 "source/consistencydemotivator.png", "source/icon.png"];

// Dimensions of the thumbnail carousel and images, respectively			 
var TDIMS   = "width:500px; height:100px;";
var TIMDIMS  = "width:100px; height:50px;";

// Dimensions of the preview panel and its images, respectively
var PDIMS    = "width:500px; height:450px;";
var PIMDIMS  = PDIMS;

// To avoid magic values
var EMPTYSTRING = "";

enyo.kind({
name: "App",
kind:"Control",
components:[
	{kind: "FittableRows",
	fit: true,
	components:[
		{kind: "onyx.Toolbar", content: "Image Viewer"},
		{kind: "enyo.Scroller", fit: true, components: [
			{name: "main", classes: "nice-padding", allowHtml: true}
		]},
	
	// This initializes the image carousel	
	{kind:"Panels",
	name:"thumbnails",
	arrangerKind:"CarouselArranger",
	draggable: false,
	style: TDIMS,
	wrap: true,
	components:[
		{kind: "ImageView", src: NAMES[0], scale: "auto",
			style: TIMDIMS, ontap:"tap1"},
			
		{kind: "ImageView", src: NAMES[1], scale: "auto",
			style: TIMDIMS, ontap:"tap2"},
			
		{kind: "ImageView", src: NAMES[2], scale: "auto",
			style: TIMDIMS, ontap:"tap3"},
			
		{kind: "ImageView", src: NAMES[3], scale: "auto",
			style: TIMDIMS, ontap:"tap4"},
			
		{kind: "ImageView", src: NAMES[4], scale: "auto",
			style: TIMDIMS, ontap:"tap5"},
			
		{kind: "ImageView", src: NAMES[5], scale: "auto",
			style: TIMDIMS, ontap:"tap6"},
			
		{kind: "ImageView", src: NAMES[6], scale: "auto",
			style: TIMDIMS, ontap:"tap7"},
			
		{kind: "ImageView", src: NAMES[7], scale: "auto",
			style: TIMDIMS, ontap:"tap8"},
			
		{kind: "ImageView", src: NAMES[8], scale: "auto",
			style: TIMDIMS, ontap:"tap9"},
			
		{kind: "ImageView", src: NAMES[9], scale: "auto",
			style: TIMDIMS, ontap:"tap10"}      
	]},
	
	// A hack to make the preview panel work. It is another carousel
	// where no image is there initially. Clicking on an image in
	// the actual carousel shifts the index of this carousel to the
	// appropriate, enlarged image.
	{kind:"Panels",
	name:"preview",
	arrangerKind:"CarouselArranger",
	draggable: false,
	animate: false,
	style: PDIMS,
	wrap: true,
	components:[
		{kind: "ImageView", src: EMPTYSTRING, scale: "auto",
			style: PIMDIMS},
			
		{kind: "ImageView", src: NAMES[0], scale: "auto",
			style: PIMDIMS},
			
		{kind: "ImageView", src: NAMES[1], scale: "auto",
			style: PIMDIMS},
			
		{kind: "ImageView", src: NAMES[2], scale: "auto",
			style: PIMDIMS},
			
		{kind: "ImageView", src: NAMES[3], scale: "auto",
			style: PIMDIMS},
			
		{kind: "ImageView", src: NAMES[4], scale: "auto",
			style: PIMDIMS},
			
		{kind: "ImageView", src: NAMES[5], scale: "auto",
			style: PIMDIMS},
			
		{kind: "ImageView", src: NAMES[6], scale: "auto",
			style: PIMDIMS},
			
		{kind: "ImageView", src: NAMES[7], scale: "auto",
			style: PIMDIMS},
			
		{kind: "ImageView", src: NAMES[8], scale: "auto",
			style: PIMDIMS},
			
		{kind: "ImageView", src: NAMES[9], scale: "auto",
			style: PIMDIMS}  
	]},
		
		{kind: "onyx.Toolbar", components: [
			{kind: "onyx.Button", content: "Left", ontap: "leftTap"},
			{kind: "onyx.Button", content: "Right", ontap: "rightTap"}
		]}
	]}
],

	rightTap: function(inSender, inEvent) {
		this.$.thumbnails.next();
	},
	
	leftTap: function(inSender, inEvent) {
		this.$.thumbnails.previous();
	},
	
	tap1: function(inSender, inEvent) {
		this.$.preview.setIndex(1);
	},
	
	tap2: function(inSender, inEvent) {
		this.$.preview.setIndex(2);
	},

	tap3: function(inSender, inEvent) {
		this.$.preview.setIndex(3);
	},
	
	tap4: function(inSender, inEvent) {
		this.$.preview.setIndex(4);
	},
	
	tap5: function(inSender, inEvent) {
		this.$.preview.setIndex(5);
	},
	
	tap6: function(inSender, inEvent) {
		this.$.preview.setIndex(6);
	},
	
	tap7: function(inSender, inEvent) {
		this.$.preview.setIndex(7);
	},
	
	tap8: function(inSender, inEvent) {
		this.$.preview.setIndex(8);
	},
	
	tap9: function(inSender, inEvent) {
		this.$.preview.setIndex(9);
	},
	
	tap10: function(inSender, inEvent) {
		this.$.preview.setIndex(10);
	}
})