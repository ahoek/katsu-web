(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{KGMg:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("fXoL"),o=n("e8h1"),s=n("sYmb"),a=function(){function t(t,e){this.storage=t,this.translate=e,this._verb=!0,this._iAdjective=!1,this._naAdjective=!1,this._normal=!0,this._teForm=!1,this._volitional=!1,this._taiForm=!1,this._potential=!1,this._imperative=!1,this._conditional=!1,this._tariForm=!1,this._passive=!1,this._causative=!1,this._causativePassive=!1,this._polite=!0,this._plain=!1,this._past=!0,this._nonPast=!0,this._positive=!0,this._negative=!0,this._jlptLevel="n3",this._leaveOutSuru=!0,this._reverse=!1,this._amount=10,this._showMeaning=!0}return Object.defineProperty(t.prototype,"verb",{get:function(){return this._verb},set:function(t){this._verb=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"iAdjective",{get:function(){return this._iAdjective},set:function(t){this._iAdjective=t,this.needsAdjectiveConjugations()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"naAdjective",{get:function(){return this._naAdjective},set:function(t){this._naAdjective=t,this.needsAdjectiveConjugations()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"normal",{get:function(){return this._normal},set:function(t){this._normal=t,this._normal&&(this.needsPartOfSpeech(),this.needsSpeechLevel(),this.needsTense(),this.needsModality())},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"teForm",{get:function(){return this._teForm},set:function(t){this._teForm=t,this._teForm&&this.needsPartOfSpeech()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"volitional",{get:function(){return this._volitional},set:function(t){this._volitional=t,this._volitional&&(this.needsVerb(),this.needsSpeechLevel())},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"taiForm",{get:function(){return this._taiForm},set:function(t){this._taiForm=t,this._taiForm&&(this.needsVerb(),this.needsSpeechLevel(),this.needsTense(),this.needsModality())},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"potential",{get:function(){return this._potential},set:function(t){this._potential=t,this._potential&&(this.needsVerb(),this.needsSpeechLevel(),this.needsTense(),this.needsModality())},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"imperative",{get:function(){return this._imperative},set:function(t){this._imperative=t,this._imperative&&(this.needsVerb(),this.needsModality())},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"conditional",{get:function(){return this._conditional},set:function(t){this._conditional=t,this._conditional&&(this.needsPartOfSpeech(),this.needsModality())},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tariForm",{get:function(){return this._tariForm},set:function(t){this._tariForm=t,this._tariForm&&(this.needsPartOfSpeech(),this.needsModality())},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"passive",{get:function(){return this._passive},set:function(t){this._passive=t,this._passive&&(this.needsVerb(),this.needsSpeechLevel(),this.needsTense(),this.needsModality())},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"causative",{get:function(){return this._causative},set:function(t){this._causative=t,this._causative&&(this.needsVerb(),this.needsSpeechLevel(),this.needsTense(),this.needsModality())},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"causativePassive",{get:function(){return this._causativePassive},set:function(t){this._causativePassive=t,this._causativePassive&&(this.needsVerb(),this.needsSpeechLevel(),this.needsTense(),this.needsModality())},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"polite",{get:function(){return this._polite},set:function(t){this._polite=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"plain",{get:function(){return this._plain},set:function(t){this._plain=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"past",{get:function(){return this._past},set:function(t){this._past=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"nonPast",{get:function(){return this._nonPast},set:function(t){this._nonPast=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"positive",{get:function(){return this._positive},set:function(t){this._positive=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"negative",{get:function(){return this._negative},set:function(t){this._negative=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"jlptLevel",{get:function(){return this._jlptLevel},set:function(t){this._jlptLevel=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"leaveOutSuru",{get:function(){return this._leaveOutSuru},set:function(t){this._leaveOutSuru=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"reverse",{get:function(){return this._reverse},set:function(t){this._reverse=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"amount",{get:function(){return this._amount},set:function(t){this._amount=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"language",{get:function(){return void 0===this._language&&(this._language=this.translate.currentLang),this._language},set:function(t){this._language=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"voice",{get:function(){return this._voice},set:function(t){this._voice=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"showMeaning",{get:function(){return this._showMeaning},set:function(t){this._showMeaning=t},enumerable:!1,configurable:!0}),t.prototype.needsVerb=function(){this.verb||(this.verb=!0)},t.prototype.needsPartOfSpeech=function(){this.verb||this.iAdjective||this.naAdjective||(this.verb=!0)},t.prototype.needsSpeechLevel=function(){this.polite||this.plain||(this.polite=!0)},t.prototype.needsTense=function(){this.past||this.nonPast||(this.nonPast=!0)},t.prototype.needsModality=function(){this.positive||this.negative||(this.positive=!0)},t.prototype.needsAdjectiveConjugations=function(){this.normal||this.teForm||this.conditional||(this.normal=!0)},t.prototype.userSettings=function(){var t=this;return new Promise((function(e){t.storage.get("settings").then((function(n){n?Object.assign(t,JSON.parse(n)):t.store(),e(t)}))}))},t.prototype.store=function(){var t=this,e={};Object.keys(this).forEach((function(n){n.startsWith("_")&&(e[n.substring(1)]=t[n])})),this.storage.set("settings",JSON.stringify(e))},t.prototype.getQuestionTypeOptions=function(){var t=[];if(this.addNormal(t),this.addTeForm(t),this.volitional&&(this.plain&&t.push("volitional-plain"),this.polite&&t.push("volitional-polite")),this.potential&&this.addNormalOptionsFor("potential",t),this.imperative&&(this.positive&&t.push("imperative-positive"),this.negative&&t.push("imperative-negative")),this.addConditional(t),this.taiForm&&this.addNormalOptionsFor("tai-form-verb",t),this.tariForm){var e="tari-form";this.positive&&(this.verb&&t.push(e+"-verb-positive"),this.iAdjective&&t.push(e+"-i-adjective-positive"),this.naAdjective&&t.push(e+"-na-adjective-positive")),this.negative&&(this.verb&&t.push(e+"-verb-negative"),this.iAdjective&&t.push(e+"-i-adjective-negative"),this.naAdjective&&t.push(e+"-na-adjective-negative"))}return this.passive&&this.addPassive(t),this.causative&&this.addCausative(t),this.causativePassive&&this.addCausativePassive(t),console.log("options",t),t},t.prototype.addNormal=function(t){var e="normal";this.normal&&(this.verb&&this.addNormalOptionsFor(e+"-verb",t),this.iAdjective&&this.addNormalOptionsFor(e+"-i-adjective",t),this.naAdjective&&this.addNormalOptionsFor(e+"-na-adjective",t))},t.prototype.addNormalOptionsFor=function(t,e){this.plain&&this.addSubOptionsFor(t+"-plain",e),this.polite&&this.addSubOptionsFor(t+"-polite",e)},t.prototype.addSubOptionsFor=function(t,e){this.positive&&this.addTenseOptionsFor(t+"-positive",e),this.negative&&this.addTenseOptionsFor(t+"-negative",e)},t.prototype.addTenseOptionsFor=function(t,e){this.nonPast&&e.push(t+"-present"),this.past&&e.push(t+"-past")},t.prototype.addTeForm=function(t){var e="te-form";this.teForm&&(this.verb&&t.push(e+"-verb"),this.iAdjective&&t.push(e+"-i-adjective"),this.naAdjective&&t.push(e+"-na-adjective"))},t.prototype.addConditional=function(t){var e="conditional";this.conditional&&(this.positive&&(this.verb&&t.push(e+"-verb-positive"),this.iAdjective&&t.push(e+"-i-adjective-positive"),this.naAdjective&&t.push(e+"-na-adjective-positive")),this.negative&&(this.verb&&t.push(e+"-verb-negative"),this.iAdjective&&t.push(e+"-i-adjective-negative"),this.naAdjective&&t.push(e+"-na-adjective-negative")))},t.prototype.addPassive=function(t){this.addNormalOptionsFor("passive-verb",t)},t.prototype.addCausative=function(t){this.addNormalOptionsFor("causative-verb",t)},t.prototype.addCausativePassive=function(t){this.addNormalOptionsFor("caus-pass-verb",t)},t.prototype.getLanguage=function(){return this.language},t.prototype.getVoice=function(){return this.voice},t.\u0275fac=function(e){return new(e||t)(i.Ob(o.b),i.Ob(s.d))},t.\u0275prov=i.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"ct+p":function(t,e,n){"use strict";n.r(e),n.d(e,"HomePageModule",(function(){return d}));var i=n("ofXK"),o=n("TEn/"),s=n("3Pt+"),a=n("tyNb"),b=n("mrSG"),r=n("KGMg"),c=n("d2it"),l=n("GVUb"),u=n("fXoL"),p=n("sYmb");function h(t,e){if(1&t&&(u.Kb(0,"ion-select-option",48),u.nc(1),u.Jb()),2&t){var n=e.$implicit;u.cc("value",n.name),u.xb(1),u.pc(" ",n.name," ")}}var g=function(){function t(t,e,n,i,o,s){this.navCtrl=t,this.platform=e,this.analytics=n,this.translate=i,this.speech=o,this.settings=s}return t.prototype.ngOnInit=function(){return Object(b.a)(this,void 0,void 0,(function(){return Object(b.b)(this,(function(t){switch(t.label){case 0:return[4,this.settings.userSettings()];case 1:return t.sent(),this.settings.language!==this.translate.currentLang&&this.setLanguage(this.settings.language),this.settings.voice&&this.speech.setVoiceByName(this.settings.voice),[2]}}))}))},t.prototype.startReview=function(){var t=this;this.settings.store(),this.navCtrl.navigateForward("/review"),this.platform.ready().then((function(){t.analytics.trackEvent("Review","start","",1)}))},t.prototype.setLanguage=function(t){this.settings.language=t,this.translate.use(this.settings.language)},t.prototype.setVoice=function(t){this.settings.voice=t,this.speech.setVoiceByName(t)},t.\u0275fac=function(e){return new(e||t)(u.Hb(o.B),u.Hb(o.C),u.Hb(l.a),u.Hb(p.d),u.Hb(c.a),u.Hb(r.a))},t.\u0275cmp=u.Bb({type:t,selectors:[["app-home"]],decls:254,vars:160,consts:[["color","secondary"],["slot","end"],["icon-only","","routerLink","/information","routerDirection","forward"],["name","information-circle-outline"],["slot","end",3,"ngModel","ngModelChange"],["slot","start",1,"text-icon"],["slot","start"],["slot","end",3,"ngModel","disabled","ngModelChange"],["name","walk-outline","slot","start"],["name","heart-outline","slot","start"],["name","tari","slot","start"],["name","flag-outline","slot","start"],["name","megaphone-outline","slot","start"],["name","code-download-outline","slot","start"],["name","bonfire-outline","slot","start"],["name","log-in-outline","slot","start"],["name","hammer-outline","slot","start"],["name","chatbox-ellipses-outline","slot","start"],["name","briefcase-outline","slot","start"],["name","shirt-outline","slot","start"],["name","play-forward-outline","slot","start"],["name","play-back-outline","slot","start"],["name","happy-outline","slot","start"],["name","sad-outline","slot","start"],["interface","action-sheet","slot","end",3,"ngModel","ngModelChange"],["value","n5"],["value","n4"],["value","n3"],["value","n2"],["value","n1"],["slot","start-outline","name","trending-up"],["name","no-suru","slot","start"],["name","shuffle-outline","slot","start"],["interface","action-sheet","slot","end",3,"ngModel","selectedText","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","40"],["value","50"],["value","en"],["value","nl"],["name","language-outline","slot","start"],["value",""],[3,"value",4,"ngFor","ngForOf"],["name","volume-high-outline","slot","start"],["name","barcode-outline","slot","start"],["expand","full","size","large",1,"start-review",3,"click"],[1,"text"],[3,"value"]],template:function(t,e){1&t&&(u.Kb(0,"ion-header"),u.Kb(1,"ion-toolbar",0),u.Kb(2,"ion-title"),u.nc(3),u.Xb(4,"translate"),u.Jb(),u.Kb(5,"ion-buttons",1),u.Kb(6,"ion-button",2),u.Ib(7,"ion-icon",3),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Kb(8,"ion-content"),u.Kb(9,"ion-grid"),u.Kb(10,"ion-row"),u.Kb(11,"ion-col"),u.Kb(12,"ion-list"),u.Kb(13,"ion-list-header"),u.nc(14),u.Xb(15,"translate"),u.Jb(),u.Kb(16,"ion-item"),u.Kb(17,"ion-label"),u.nc(18),u.Xb(19,"translate"),u.Jb(),u.Kb(20,"ion-checkbox",4),u.Sb("ngModelChange",(function(t){return e.settings.normal=t})),u.Jb(),u.Ib(21,"span",5),u.Jb(),u.Kb(22,"ion-item"),u.Kb(23,"ion-label"),u.nc(24),u.Xb(25,"translate"),u.Jb(),u.Kb(26,"ion-checkbox",4),u.Sb("ngModelChange",(function(t){return e.settings.teForm=t})),u.Jb(),u.Kb(27,"span",6),u.nc(28,"\u3066"),u.Jb(),u.Jb(),u.Kb(29,"ion-item"),u.Kb(30,"ion-label"),u.nc(31),u.Xb(32,"translate"),u.Jb(),u.Kb(33,"ion-checkbox",7),u.Sb("ngModelChange",(function(t){return e.settings.volitional=t})),u.Jb(),u.Ib(34,"ion-icon",8),u.Jb(),u.Kb(35,"ion-item"),u.Kb(36,"ion-label"),u.nc(37),u.Xb(38,"translate"),u.Jb(),u.Kb(39,"ion-checkbox",7),u.Sb("ngModelChange",(function(t){return e.settings.taiForm=t})),u.Jb(),u.Ib(40,"ion-icon",9),u.Jb(),u.Kb(41,"ion-item"),u.Kb(42,"ion-label"),u.nc(43),u.Xb(44,"translate"),u.Jb(),u.Kb(45,"ion-checkbox",4),u.Sb("ngModelChange",(function(t){return e.settings.tariForm=t})),u.Jb(),u.Kb(46,"span",10),u.nc(47,"\u305f\u308a"),u.Jb(),u.Jb(),u.Kb(48,"ion-item"),u.Kb(49,"ion-label"),u.nc(50),u.Xb(51,"translate"),u.Jb(),u.Kb(52,"ion-checkbox",7),u.Sb("ngModelChange",(function(t){return e.settings.potential=t})),u.Jb(),u.Ib(53,"ion-icon",11),u.Jb(),u.Kb(54,"ion-item"),u.Kb(55,"ion-label"),u.nc(56),u.Xb(57,"translate"),u.Jb(),u.Kb(58,"ion-checkbox",7),u.Sb("ngModelChange",(function(t){return e.settings.imperative=t})),u.Jb(),u.Ib(59,"ion-icon",12),u.Jb(),u.Kb(60,"ion-item"),u.Kb(61,"ion-label"),u.nc(62),u.Xb(63,"translate"),u.Kb(64,"ion-note"),u.nc(65),u.Xb(66,"translate"),u.Jb(),u.Jb(),u.Kb(67,"ion-checkbox",4),u.Sb("ngModelChange",(function(t){return e.settings.conditional=t})),u.Jb(),u.Ib(68,"ion-icon",13),u.Jb(),u.Kb(69,"ion-item"),u.Kb(70,"ion-label"),u.nc(71),u.Xb(72,"translate"),u.Jb(),u.Kb(73,"ion-checkbox",7),u.Sb("ngModelChange",(function(t){return e.settings.passive=t})),u.Jb(),u.Ib(74,"ion-icon",14),u.Jb(),u.Kb(75,"ion-item"),u.Kb(76,"ion-label"),u.nc(77),u.Xb(78,"translate"),u.Jb(),u.Kb(79,"ion-checkbox",7),u.Sb("ngModelChange",(function(t){return e.settings.causative=t})),u.Jb(),u.Ib(80,"ion-icon",15),u.Jb(),u.Kb(81,"ion-item"),u.Kb(82,"ion-label"),u.nc(83),u.Xb(84,"translate"),u.Jb(),u.Kb(85,"ion-checkbox",7),u.Sb("ngModelChange",(function(t){return e.settings.causativePassive=t})),u.Jb(),u.Ib(86,"ion-icon",16),u.Jb(),u.Jb(),u.Kb(87,"ion-list"),u.Kb(88,"ion-list-header"),u.nc(89),u.Xb(90,"translate"),u.Jb(),u.Kb(91,"ion-item"),u.Kb(92,"ion-label"),u.nc(93),u.Xb(94,"translate"),u.Jb(),u.Kb(95,"ion-checkbox",4),u.Sb("ngModelChange",(function(t){return e.settings.verb=t})),u.Jb(),u.Ib(96,"ion-icon",17),u.Jb(),u.Kb(97,"ion-item"),u.Kb(98,"ion-label"),u.nc(99),u.Xb(100,"translate"),u.Jb(),u.Kb(101,"ion-checkbox",4),u.Sb("ngModelChange",(function(t){return e.settings.iAdjective=t})),u.Jb(),u.Kb(102,"span",6),u.nc(103,"\u3044"),u.Jb(),u.Jb(),u.Kb(104,"ion-item"),u.Kb(105,"ion-label"),u.nc(106),u.Xb(107,"translate"),u.Jb(),u.Kb(108,"ion-checkbox",4),u.Sb("ngModelChange",(function(t){return e.settings.naAdjective=t})),u.Jb(),u.Kb(109,"span",6),u.nc(110,"\u306a"),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Kb(111,"ion-col"),u.Kb(112,"ion-list"),u.Kb(113,"ion-list-header"),u.nc(114),u.Xb(115,"translate"),u.Jb(),u.Kb(116,"ion-item"),u.Kb(117,"ion-label"),u.nc(118),u.Xb(119,"translate"),u.Kb(120,"ion-note"),u.nc(121),u.Xb(122,"translate"),u.Jb(),u.Jb(),u.Kb(123,"ion-checkbox",4),u.Sb("ngModelChange",(function(t){return e.settings.polite=t})),u.Jb(),u.Ib(124,"ion-icon",18),u.Jb(),u.Kb(125,"ion-item"),u.Kb(126,"ion-label"),u.nc(127),u.Xb(128,"translate"),u.Kb(129,"ion-note"),u.nc(130),u.Xb(131,"translate"),u.Jb(),u.Jb(),u.Kb(132,"ion-checkbox",4),u.Sb("ngModelChange",(function(t){return e.settings.plain=t})),u.Jb(),u.Ib(133,"ion-icon",19),u.Jb(),u.Jb(),u.Kb(134,"ion-list"),u.Kb(135,"ion-list-header"),u.nc(136),u.Xb(137,"translate"),u.Jb(),u.Kb(138,"ion-item"),u.Kb(139,"ion-label"),u.nc(140),u.Xb(141,"translate"),u.Kb(142,"ion-note"),u.nc(143),u.Xb(144,"translate"),u.Jb(),u.Jb(),u.Kb(145,"ion-checkbox",4),u.Sb("ngModelChange",(function(t){return e.settings.nonPast=t})),u.Jb(),u.Ib(146,"ion-icon",20),u.Jb(),u.Kb(147,"ion-item"),u.Kb(148,"ion-label"),u.nc(149),u.Xb(150,"translate"),u.Jb(),u.Kb(151,"ion-checkbox",4),u.Sb("ngModelChange",(function(t){return e.settings.past=t})),u.Jb(),u.Ib(152,"ion-icon",21),u.Jb(),u.Jb(),u.Kb(153,"ion-list"),u.Kb(154,"ion-list-header"),u.nc(155),u.Xb(156,"translate"),u.Jb(),u.Kb(157,"ion-item"),u.Kb(158,"ion-label"),u.nc(159),u.Xb(160,"translate"),u.Jb(),u.Kb(161,"ion-checkbox",4),u.Sb("ngModelChange",(function(t){return e.settings.positive=t})),u.Jb(),u.Ib(162,"ion-icon",22),u.Jb(),u.Kb(163,"ion-item"),u.Kb(164,"ion-label"),u.nc(165),u.Xb(166,"translate"),u.Jb(),u.Kb(167,"ion-checkbox",4),u.Sb("ngModelChange",(function(t){return e.settings.negative=t})),u.Jb(),u.Ib(168,"ion-icon",23),u.Jb(),u.Jb(),u.Jb(),u.Kb(169,"ion-col"),u.Kb(170,"ion-list"),u.Kb(171,"ion-list-header"),u.nc(172),u.Xb(173,"translate"),u.Jb(),u.Kb(174,"ion-item"),u.Kb(175,"ion-label"),u.nc(176),u.Xb(177,"translate"),u.Jb(),u.Kb(178,"ion-select",24),u.Sb("ngModelChange",(function(t){return e.settings.jlptLevel=t})),u.Kb(179,"ion-select-option",25),u.nc(180,"N5"),u.Jb(),u.Kb(181,"ion-select-option",26),u.nc(182,"N4"),u.Jb(),u.Kb(183,"ion-select-option",27),u.nc(184,"N3"),u.Jb(),u.Kb(185,"ion-select-option",28),u.nc(186,"N2"),u.Jb(),u.Kb(187,"ion-select-option",29),u.nc(188,"N1"),u.Jb(),u.Jb(),u.Ib(189,"ion-icon",30),u.Jb(),u.Kb(190,"ion-item"),u.Kb(191,"ion-label"),u.nc(192),u.Xb(193,"translate"),u.Jb(),u.Kb(194,"ion-checkbox",7),u.Sb("ngModelChange",(function(t){return e.settings.leaveOutSuru=t})),u.Jb(),u.Kb(195,"span",31),u.nc(196,"\u3059\u308b"),u.Jb(),u.Jb(),u.Kb(197,"ion-item"),u.Kb(198,"ion-label"),u.nc(199),u.Xb(200,"translate"),u.Kb(201,"ion-note"),u.nc(202),u.Xb(203,"translate"),u.Jb(),u.Jb(),u.Kb(204,"ion-checkbox",4),u.Sb("ngModelChange",(function(t){return e.settings.reverse=t})),u.Jb(),u.Ib(205,"ion-icon",32),u.Jb(),u.Kb(206,"ion-item"),u.Kb(207,"ion-label"),u.nc(208),u.Xb(209,"translate"),u.Jb(),u.Kb(210,"ion-select",33),u.Sb("ngModelChange",(function(t){return e.settings.amount=t})),u.Kb(211,"ion-select-option",34),u.nc(212,"10"),u.Jb(),u.Kb(213,"ion-select-option",35),u.nc(214,"20"),u.Jb(),u.Kb(215,"ion-select-option",36),u.nc(216,"30"),u.Jb(),u.Kb(217,"ion-select-option",37),u.nc(218,"40"),u.Jb(),u.Kb(219,"ion-select-option",38),u.nc(220,"50"),u.Jb(),u.Jb(),u.Kb(221,"span",6),u.nc(222,"#"),u.Jb(),u.Jb(),u.Kb(223,"ion-item"),u.Kb(224,"ion-label"),u.nc(225),u.Xb(226,"translate"),u.Jb(),u.Kb(227,"ion-select",24),u.Sb("ngModelChange",(function(t){return e.setLanguage(t)})),u.Kb(228,"ion-select-option",39),u.nc(229,"English"),u.Jb(),u.Kb(230,"ion-select-option",40),u.nc(231,"Nederlands"),u.Jb(),u.Jb(),u.Ib(232,"ion-icon",41),u.Jb(),u.Kb(233,"ion-item"),u.Kb(234,"ion-label"),u.nc(235),u.Xb(236,"translate"),u.Jb(),u.Kb(237,"ion-select",24),u.Sb("ngModelChange",(function(t){return e.setVoice(t)})),u.Kb(238,"ion-select-option",42),u.nc(239),u.Xb(240,"translate"),u.Jb(),u.mc(241,h,2,2,"ion-select-option",43),u.Jb(),u.Ib(242,"ion-icon",44),u.Jb(),u.Kb(243,"ion-item"),u.Kb(244,"ion-label"),u.nc(245),u.Xb(246,"translate"),u.Jb(),u.Kb(247,"ion-checkbox",4),u.Sb("ngModelChange",(function(t){return e.settings.showMeaning=t})),u.Jb(),u.Ib(248,"ion-icon",45),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Kb(249,"ion-footer"),u.Kb(250,"ion-button",46),u.Sb("click",(function(){return e.startReview()})),u.Kb(251,"span",47),u.nc(252),u.Xb(253,"translate"),u.Jb(),u.Jb(),u.Jb()),2&t&&(u.xb(3),u.pc(" ",u.Yb(4,78,"setting.title")," "),u.xb(11),u.pc(" ",u.Yb(15,80,"setting.group-title.form")," "),u.xb(4),u.oc(u.Yb(19,82,"setting.form.normal")),u.xb(2),u.bc("ngModel",e.settings.normal),u.xb(4),u.oc(u.Yb(25,84,"setting.form.te-form")),u.xb(2),u.bc("ngModel",e.settings.teForm),u.xb(5),u.oc(u.Yb(32,86,"setting.form.volitional")),u.xb(2),u.bc("ngModel",e.settings.volitional)("disabled",!1===e.settings.verb),u.xb(4),u.oc(u.Yb(38,88,"setting.form.tai-form")),u.xb(2),u.bc("ngModel",e.settings.taiForm)("disabled",!1===e.settings.verb),u.xb(4),u.oc(u.Yb(44,90,"setting.form.tari-form")),u.xb(2),u.bc("ngModel",e.settings.tariForm),u.xb(5),u.oc(u.Yb(51,92,"setting.form.potential")),u.xb(2),u.bc("ngModel",e.settings.potential)("disabled",!1===e.settings.verb),u.xb(4),u.oc(u.Yb(57,94,"setting.form.imperative")),u.xb(2),u.bc("ngModel",e.settings.imperative)("disabled",!1===e.settings.verb),u.xb(4),u.pc(" ",u.Yb(63,96,"setting.form.conditional")," "),u.xb(3),u.oc(u.Yb(66,98,"setting.form.conditional-note")),u.xb(2),u.bc("ngModel",e.settings.conditional),u.xb(4),u.pc(" ",u.Yb(72,100,"setting.form.passive")," "),u.xb(2),u.bc("ngModel",e.settings.passive)("disabled",!1===e.settings.verb),u.xb(4),u.pc(" ",u.Yb(78,102,"setting.form.causative")," "),u.xb(2),u.bc("ngModel",e.settings.causative)("disabled",!1===e.settings.verb),u.xb(4),u.pc(" ",u.Yb(84,104,"setting.form.causative-passive")," "),u.xb(2),u.bc("ngModel",e.settings.causativePassive)("disabled",!1===e.settings.verb),u.xb(4),u.pc(" ",u.Yb(90,106,"setting.group-title.part-of-speech")," "),u.xb(4),u.pc(" ",u.Yb(94,108,"setting.part-of-speech.verb")," "),u.xb(2),u.bc("ngModel",e.settings.verb),u.xb(4),u.pc(" ",u.Yb(100,110,"setting.part-of-speech.i-adjective")," "),u.xb(2),u.bc("ngModel",e.settings.iAdjective),u.xb(5),u.pc(" ",u.Yb(107,112,"setting.part-of-speech.na-adjective")," "),u.xb(2),u.bc("ngModel",e.settings.naAdjective),u.xb(6),u.pc(" ",u.Yb(115,114,"setting.group-title.speech-level")," "),u.xb(4),u.pc(" ",u.Yb(119,116,"setting.speech-level.formal")," "),u.xb(3),u.oc(u.Yb(122,118,"setting.speech-level.formal-note")),u.xb(2),u.bc("ngModel",e.settings.polite),u.xb(4),u.pc(" ",u.Yb(128,120,"setting.speech-level.informal")," "),u.xb(3),u.oc(u.Yb(131,122,"setting.speech-level.informal-note")),u.xb(2),u.bc("ngModel",e.settings.plain),u.xb(4),u.pc(" ",u.Yb(137,124,"setting.group-title.tense")," "),u.xb(4),u.pc(" ",u.Yb(141,126,"setting.tense.nonpast")," "),u.xb(3),u.oc(u.Yb(144,128,"setting.tense.nonpast-note")),u.xb(2),u.bc("ngModel",e.settings.nonPast),u.xb(4),u.oc(u.Yb(150,130,"setting.tense.past")),u.xb(2),u.bc("ngModel",e.settings.past),u.xb(4),u.pc(" ",u.Yb(156,132,"setting.group-title.positive/negative")," "),u.xb(4),u.pc(" ",u.Yb(160,134,"setting.positive/negative.positive")," "),u.xb(2),u.bc("ngModel",e.settings.positive),u.xb(4),u.pc(" ",u.Yb(166,136,"setting.positive/negative.negative")," "),u.xb(2),u.bc("ngModel",e.settings.negative),u.xb(5),u.pc(" ",u.Yb(173,138,"setting.group-title.special-options")," "),u.xb(4),u.pc(" ",u.Yb(177,140,"setting.group-title.jlpt-level")," "),u.xb(2),u.bc("ngModel",e.settings.jlptLevel),u.xb(14),u.oc(u.Yb(193,142,"setting.special.no-suru")),u.xb(2),u.bc("ngModel",e.settings.leaveOutSuru)("disabled",!1===e.settings.verb),u.xb(5),u.pc(" ",u.Yb(200,144,"setting.special.reverse")," "),u.xb(3),u.oc(u.Yb(203,146,"setting.special.reverse-note")),u.xb(2),u.bc("ngModel",e.settings.reverse),u.xb(4),u.pc(" ",u.Yb(209,148,"setting.special.amount")," "),u.xb(2),u.bc("ngModel",e.settings.amount)("selectedText",e.settings.amount),u.xb(15),u.pc(" ",u.Yb(226,150,"setting.special.language")," "),u.xb(2),u.bc("ngModel",e.settings.language),u.xb(8),u.pc(" ",u.Yb(236,152,"setting.special.voice")," "),u.xb(2),u.bc("ngModel",e.settings.voice),u.xb(2),u.pc(" ",u.Yb(240,154,"setting.special.none")," "),u.xb(2),u.bc("ngForOf",e.speech.getVoices()),u.xb(4),u.oc(u.Yb(246,156,"setting.special.show-meaning")),u.xb(2),u.bc("ngModel",e.settings.showMeaning),u.xb(5),u.oc(u.Yb(253,158,"home.start")))},directives:[o.l,o.y,o.x,o.f,o.e,o.D,a.g,o.m,o.i,o.k,o.u,o.h,o.p,o.q,o.n,o.o,o.g,o.a,s.e,s.h,o.r,o.v,o.E,o.w,i.i,o.j],pipes:[p.c],styles:[".start-review[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], ion-title[_ngcontent-%COMP%]{text-shadow:1px 1px 0 rgba(0,0,0,.2)}[slot=start][_ngcontent-%COMP%]{font-size:1.5rem;width:29px;text-align:center;white-space:nowrap}[slot=start][name=no-suru][_ngcontent-%COMP%], [slot=start][name=tari][_ngcontent-%COMP%]{min-height:1.3rem;font-size:.9rem}[slot=start][name=no-suru][_ngcontent-%COMP%]{text-decoration:line-through}ion-item[_ngcontent-%COMP%]:hover   [slot=start][_ngcontent-%COMP%]{transition:color .2s ease-in-out;color:var(--ion-color-primary);-webkit-animation:pulse2 .6s linear infinite;animation:pulse2 .6s linear infinite}ion-item[_ngcontent-%COMP%]:hover   [slot=start][name=bowtie][_ngcontent-%COMP%]{-webkit-animation:spin .6s linear infinite;animation:spin .6s linear infinite}ion-item[_ngcontent-%COMP%]:hover   [slot=start][name=heart][_ngcontent-%COMP%]{-webkit-animation:pulse1 .6s linear infinite;animation:pulse1 .6s linear infinite}.start-review[_ngcontent-%COMP%]{--background:var(--ion-color-primary-shade);margin:0}"]}),t}(),d=function(){function t(){}return t.\u0275mod=u.Fb({type:t}),t.\u0275inj=u.Eb({factory:function(e){return new(e||t)},imports:[[i.b,s.b,o.z,a.h.forChild([{path:"",component:g}]),p.b.forChild()]]}),t}()}}]);