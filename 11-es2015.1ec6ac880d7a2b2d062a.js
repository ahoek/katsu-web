(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{KGMg:function(t,e,i){"use strict";i.d(e,"a",function(){return a});var n=i("fXoL"),s=i("e8h1"),o=i("sYmb");let a=(()=>{class t{constructor(t,e){this.storage=t,this.translate=e,this._verb=!0,this._iAdjective=!1,this._naAdjective=!1,this._normal=!0,this._teForm=!1,this._volitional=!1,this._taiForm=!1,this._potential=!1,this._imperative=!1,this._conditional=!1,this._tariForm=!1,this._passive=!1,this._causative=!1,this._causativePassive=!1,this._polite=!0,this._plain=!1,this._past=!0,this._nonPast=!0,this._positive=!0,this._negative=!0,this._jlptLevel="n3",this._leaveOutSuru=!0,this._reverse=!1,this._amount=10,this._showMeaning=!0}get verb(){return this._verb}set verb(t){this._verb=t}get iAdjective(){return this._iAdjective}set iAdjective(t){this._iAdjective=t,this.needsAdjectiveConjugations()}get naAdjective(){return this._naAdjective}set naAdjective(t){this._naAdjective=t,this.needsAdjectiveConjugations()}get normal(){return this._normal}set normal(t){this._normal=t,this._normal&&(this.needsPartOfSpeech(),this.needsSpeechLevel(),this.needsTense(),this.needsModality())}get teForm(){return this._teForm}set teForm(t){this._teForm=t,this._teForm&&this.needsPartOfSpeech()}get volitional(){return this._volitional}set volitional(t){this._volitional=t,this._volitional&&(this.needsVerb(),this.needsSpeechLevel())}get taiForm(){return this._taiForm}set taiForm(t){this._taiForm=t,this._taiForm&&(this.needsVerb(),this.needsSpeechLevel(),this.needsTense(),this.needsModality())}get potential(){return this._potential}set potential(t){this._potential=t,this._potential&&(this.needsVerb(),this.needsSpeechLevel(),this.needsTense(),this.needsModality())}get imperative(){return this._imperative}set imperative(t){this._imperative=t,this._imperative&&(this.needsVerb(),this.needsModality())}get conditional(){return this._conditional}set conditional(t){this._conditional=t,this._conditional&&(this.needsPartOfSpeech(),this.needsModality())}get tariForm(){return this._tariForm}set tariForm(t){this._tariForm=t,this._tariForm&&(this.needsPartOfSpeech(),this.needsModality())}get passive(){return this._passive}set passive(t){this._passive=t,this._passive&&(this.needsVerb(),this.needsSpeechLevel(),this.needsTense(),this.needsModality())}get causative(){return this._causative}set causative(t){this._causative=t,this._causative&&(this.needsVerb(),this.needsSpeechLevel(),this.needsTense(),this.needsModality())}get causativePassive(){return this._causativePassive}set causativePassive(t){this._causativePassive=t,this._causativePassive&&(this.needsVerb(),this.needsSpeechLevel(),this.needsTense(),this.needsModality())}get polite(){return this._polite}set polite(t){this._polite=t}get plain(){return this._plain}set plain(t){this._plain=t}get past(){return this._past}set past(t){this._past=t}get nonPast(){return this._nonPast}set nonPast(t){this._nonPast=t}get positive(){return this._positive}set positive(t){this._positive=t}get negative(){return this._negative}set negative(t){this._negative=t}get jlptLevel(){return this._jlptLevel}set jlptLevel(t){this._jlptLevel=t}get leaveOutSuru(){return this._leaveOutSuru}set leaveOutSuru(t){this._leaveOutSuru=t}get reverse(){return this._reverse}set reverse(t){this._reverse=t}get amount(){return this._amount}set amount(t){this._amount=t}get language(){return void 0===this._language&&(this._language=this.translate.currentLang),this._language}set language(t){this._language=t}get voice(){return this._voice}set voice(t){this._voice=t}get showMeaning(){return this._showMeaning}set showMeaning(t){this._showMeaning=t}needsVerb(){this.verb||(this.verb=!0)}needsPartOfSpeech(){this.verb||this.iAdjective||this.naAdjective||(this.verb=!0)}needsSpeechLevel(){this.polite||this.plain||(this.polite=!0)}needsTense(){this.past||this.nonPast||(this.nonPast=!0)}needsModality(){this.positive||this.negative||(this.positive=!0)}needsAdjectiveConjugations(){this.normal||this.teForm||this.conditional||(this.normal=!0)}userSettings(){return new Promise(t=>{this.storage.get("settings").then(e=>{e?Object.assign(this,JSON.parse(e)):this.store(),t(this)})})}store(){const t={};Object.keys(this).forEach(e=>{e.startsWith("_")&&(t[e.substring(1)]=this[e])}),this.storage.set("settings",JSON.stringify(t))}getQuestionTypeOptions(){const t=[];if(this.addNormal(t),this.addTeForm(t),this.volitional&&(this.plain&&t.push("volitional-plain"),this.polite&&t.push("volitional-polite")),this.potential&&this.addNormalOptionsFor("potential",t),this.imperative&&(this.positive&&t.push("imperative-positive"),this.negative&&t.push("imperative-negative")),this.addConditional(t),this.taiForm&&this.addNormalOptionsFor("tai-form-verb",t),this.tariForm){const e="tari-form";this.positive&&(this.verb&&t.push(e+"-verb-positive"),this.iAdjective&&t.push(e+"-i-adjective-positive"),this.naAdjective&&t.push(e+"-na-adjective-positive")),this.negative&&(this.verb&&t.push(e+"-verb-negative"),this.iAdjective&&t.push(e+"-i-adjective-negative"),this.naAdjective&&t.push(e+"-na-adjective-negative"))}return this.passive&&this.addPassive(t),this.causative&&this.addCausative(t),this.causativePassive&&this.addCausativePassive(t),console.log("options",t),t}addNormal(t){this.normal&&(this.verb&&this.addNormalOptionsFor("normal-verb",t),this.iAdjective&&this.addNormalOptionsFor("normal-i-adjective",t),this.naAdjective&&this.addNormalOptionsFor("normal-na-adjective",t))}addNormalOptionsFor(t,e){this.plain&&this.addSubOptionsFor(t+"-plain",e),this.polite&&this.addSubOptionsFor(t+"-polite",e)}addSubOptionsFor(t,e){this.positive&&this.addTenseOptionsFor(t+"-positive",e),this.negative&&this.addTenseOptionsFor(t+"-negative",e)}addTenseOptionsFor(t,e){this.nonPast&&e.push(t+"-present"),this.past&&e.push(t+"-past")}addTeForm(t){this.teForm&&(this.verb&&t.push("te-form-verb"),this.iAdjective&&t.push("te-form-i-adjective"),this.naAdjective&&t.push("te-form-na-adjective"))}addConditional(t){const e="conditional";this.conditional&&(this.positive&&(this.verb&&t.push(e+"-verb-positive"),this.iAdjective&&t.push(e+"-i-adjective-positive"),this.naAdjective&&t.push(e+"-na-adjective-positive")),this.negative&&(this.verb&&t.push(e+"-verb-negative"),this.iAdjective&&t.push(e+"-i-adjective-negative"),this.naAdjective&&t.push(e+"-na-adjective-negative")))}addPassive(t){this.addNormalOptionsFor("passive-verb",t)}addCausative(t){this.addNormalOptionsFor("causative-verb",t)}addCausativePassive(t){this.addNormalOptionsFor("caus-pass-verb",t)}getLanguage(){return this.language}getVoice(){return this.voice}}return t.\u0275fac=function(e){return new(e||t)(n.Qb(s.b),n.Qb(o.d))},t.\u0275prov=n.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"ct+p":function(t,e,i){"use strict";i.r(e),i.d(e,"HomePageModule",function(){return u});var n=i("ofXK"),s=i("TEn/"),o=i("3Pt+"),a=i("tyNb"),b=i("mrSG"),r=i("KGMg"),l=i("d2it"),c=i("GVUb"),h=i("fXoL"),g=i("sYmb");function d(t,e){if(1&t&&(h.Mb(0,"ion-select-option",48),h.oc(1),h.Lb()),2&t){const t=e.$implicit;h.ec("value",t.name),h.zb(1),h.qc(" ",t.name," ")}}let v=(()=>{class t{constructor(t,e,i,n,s,o){this.navCtrl=t,this.platform=e,this.analytics=i,this.translate=n,this.speech=s,this.settings=o}ngOnInit(){return Object(b.a)(this,void 0,void 0,function*(){yield this.settings.userSettings(),this.settings.language!==this.translate.currentLang&&this.setLanguage(this.settings.language),this.settings.voice&&this.speech.setVoiceByName(this.settings.voice)})}startReview(){this.settings.store(),this.navCtrl.navigateForward("/review"),this.platform.ready().then(()=>{this.analytics.trackEvent("Review","start","",1)})}setLanguage(t){this.settings.language=t,this.translate.use(this.settings.language)}setVoice(t){this.settings.voice=t,this.speech.setVoiceByName(t)}}return t.\u0275fac=function(e){return new(e||t)(h.Jb(s.B),h.Jb(s.C),h.Jb(c.a),h.Jb(g.d),h.Jb(l.a),h.Jb(r.a))},t.\u0275cmp=h.Db({type:t,selectors:[["app-home"]],decls:254,vars:160,consts:[["color","secondary"],["slot","end"],["icon-only","","routerLink","/information","routerDirection","forward"],["name","information-circle-outline"],["slot","end",3,"ngModel","ngModelChange"],["slot","start",1,"text-icon"],["slot","start"],["slot","end",3,"ngModel","disabled","ngModelChange"],["name","walk-outline","slot","start"],["name","heart-outline","slot","start"],["name","tari","slot","start"],["name","flag-outline","slot","start"],["name","megaphone-outline","slot","start"],["name","code-download-outline","slot","start"],["name","bonfire-outline","slot","start"],["name","log-in-outline","slot","start"],["name","hammer-outline","slot","start"],["name","chatbox-ellipses-outline","slot","start"],["name","briefcase-outline","slot","start"],["name","shirt-outline","slot","start"],["name","play-forward-outline","slot","start"],["name","play-back-outline","slot","start"],["name","happy-outline","slot","start"],["name","sad-outline","slot","start"],["interface","action-sheet","slot","end",3,"ngModel","ngModelChange"],["value","n5"],["value","n4"],["value","n3"],["value","n2"],["value","n1"],["slot","start-outline","name","trending-up"],["name","no-suru","slot","start"],["name","shuffle-outline","slot","start"],["interface","action-sheet","slot","end",3,"ngModel","selectedText","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","40"],["value","50"],["value","en"],["value","nl"],["name","language-outline","slot","start"],["value",""],[3,"value",4,"ngFor","ngForOf"],["name","volume-high-outline","slot","start"],["name","barcode-outline","slot","start"],["expand","full","size","large",1,"start-review",3,"click"],[1,"text"],[3,"value"]],template:function(t,e){1&t&&(h.Mb(0,"ion-header"),h.Mb(1,"ion-toolbar",0),h.Mb(2,"ion-title"),h.oc(3),h.Zb(4,"translate"),h.Lb(),h.Mb(5,"ion-buttons",1),h.Mb(6,"ion-button",2),h.Kb(7,"ion-icon",3),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Mb(8,"ion-content"),h.Mb(9,"ion-grid"),h.Mb(10,"ion-row"),h.Mb(11,"ion-col"),h.Mb(12,"ion-list"),h.Mb(13,"ion-list-header"),h.oc(14),h.Zb(15,"translate"),h.Lb(),h.Mb(16,"ion-item"),h.Mb(17,"ion-label"),h.oc(18),h.Zb(19,"translate"),h.Lb(),h.Mb(20,"ion-checkbox",4),h.Ub("ngModelChange",function(t){return e.settings.normal=t}),h.Lb(),h.Kb(21,"span",5),h.Lb(),h.Mb(22,"ion-item"),h.Mb(23,"ion-label"),h.oc(24),h.Zb(25,"translate"),h.Lb(),h.Mb(26,"ion-checkbox",4),h.Ub("ngModelChange",function(t){return e.settings.teForm=t}),h.Lb(),h.Mb(27,"span",6),h.oc(28,"\u3066"),h.Lb(),h.Lb(),h.Mb(29,"ion-item"),h.Mb(30,"ion-label"),h.oc(31),h.Zb(32,"translate"),h.Lb(),h.Mb(33,"ion-checkbox",7),h.Ub("ngModelChange",function(t){return e.settings.volitional=t}),h.Lb(),h.Kb(34,"ion-icon",8),h.Lb(),h.Mb(35,"ion-item"),h.Mb(36,"ion-label"),h.oc(37),h.Zb(38,"translate"),h.Lb(),h.Mb(39,"ion-checkbox",7),h.Ub("ngModelChange",function(t){return e.settings.taiForm=t}),h.Lb(),h.Kb(40,"ion-icon",9),h.Lb(),h.Mb(41,"ion-item"),h.Mb(42,"ion-label"),h.oc(43),h.Zb(44,"translate"),h.Lb(),h.Mb(45,"ion-checkbox",4),h.Ub("ngModelChange",function(t){return e.settings.tariForm=t}),h.Lb(),h.Mb(46,"span",10),h.oc(47,"\u305f\u308a"),h.Lb(),h.Lb(),h.Mb(48,"ion-item"),h.Mb(49,"ion-label"),h.oc(50),h.Zb(51,"translate"),h.Lb(),h.Mb(52,"ion-checkbox",7),h.Ub("ngModelChange",function(t){return e.settings.potential=t}),h.Lb(),h.Kb(53,"ion-icon",11),h.Lb(),h.Mb(54,"ion-item"),h.Mb(55,"ion-label"),h.oc(56),h.Zb(57,"translate"),h.Lb(),h.Mb(58,"ion-checkbox",7),h.Ub("ngModelChange",function(t){return e.settings.imperative=t}),h.Lb(),h.Kb(59,"ion-icon",12),h.Lb(),h.Mb(60,"ion-item"),h.Mb(61,"ion-label"),h.oc(62),h.Zb(63,"translate"),h.Mb(64,"ion-note"),h.oc(65),h.Zb(66,"translate"),h.Lb(),h.Lb(),h.Mb(67,"ion-checkbox",4),h.Ub("ngModelChange",function(t){return e.settings.conditional=t}),h.Lb(),h.Kb(68,"ion-icon",13),h.Lb(),h.Mb(69,"ion-item"),h.Mb(70,"ion-label"),h.oc(71),h.Zb(72,"translate"),h.Lb(),h.Mb(73,"ion-checkbox",7),h.Ub("ngModelChange",function(t){return e.settings.passive=t}),h.Lb(),h.Kb(74,"ion-icon",14),h.Lb(),h.Mb(75,"ion-item"),h.Mb(76,"ion-label"),h.oc(77),h.Zb(78,"translate"),h.Lb(),h.Mb(79,"ion-checkbox",7),h.Ub("ngModelChange",function(t){return e.settings.causative=t}),h.Lb(),h.Kb(80,"ion-icon",15),h.Lb(),h.Mb(81,"ion-item"),h.Mb(82,"ion-label"),h.oc(83),h.Zb(84,"translate"),h.Lb(),h.Mb(85,"ion-checkbox",7),h.Ub("ngModelChange",function(t){return e.settings.causativePassive=t}),h.Lb(),h.Kb(86,"ion-icon",16),h.Lb(),h.Lb(),h.Mb(87,"ion-list"),h.Mb(88,"ion-list-header"),h.oc(89),h.Zb(90,"translate"),h.Lb(),h.Mb(91,"ion-item"),h.Mb(92,"ion-label"),h.oc(93),h.Zb(94,"translate"),h.Lb(),h.Mb(95,"ion-checkbox",4),h.Ub("ngModelChange",function(t){return e.settings.verb=t}),h.Lb(),h.Kb(96,"ion-icon",17),h.Lb(),h.Mb(97,"ion-item"),h.Mb(98,"ion-label"),h.oc(99),h.Zb(100,"translate"),h.Lb(),h.Mb(101,"ion-checkbox",4),h.Ub("ngModelChange",function(t){return e.settings.iAdjective=t}),h.Lb(),h.Mb(102,"span",6),h.oc(103,"\u3044"),h.Lb(),h.Lb(),h.Mb(104,"ion-item"),h.Mb(105,"ion-label"),h.oc(106),h.Zb(107,"translate"),h.Lb(),h.Mb(108,"ion-checkbox",4),h.Ub("ngModelChange",function(t){return e.settings.naAdjective=t}),h.Lb(),h.Mb(109,"span",6),h.oc(110,"\u306a"),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Mb(111,"ion-col"),h.Mb(112,"ion-list"),h.Mb(113,"ion-list-header"),h.oc(114),h.Zb(115,"translate"),h.Lb(),h.Mb(116,"ion-item"),h.Mb(117,"ion-label"),h.oc(118),h.Zb(119,"translate"),h.Mb(120,"ion-note"),h.oc(121),h.Zb(122,"translate"),h.Lb(),h.Lb(),h.Mb(123,"ion-checkbox",4),h.Ub("ngModelChange",function(t){return e.settings.polite=t}),h.Lb(),h.Kb(124,"ion-icon",18),h.Lb(),h.Mb(125,"ion-item"),h.Mb(126,"ion-label"),h.oc(127),h.Zb(128,"translate"),h.Mb(129,"ion-note"),h.oc(130),h.Zb(131,"translate"),h.Lb(),h.Lb(),h.Mb(132,"ion-checkbox",4),h.Ub("ngModelChange",function(t){return e.settings.plain=t}),h.Lb(),h.Kb(133,"ion-icon",19),h.Lb(),h.Lb(),h.Mb(134,"ion-list"),h.Mb(135,"ion-list-header"),h.oc(136),h.Zb(137,"translate"),h.Lb(),h.Mb(138,"ion-item"),h.Mb(139,"ion-label"),h.oc(140),h.Zb(141,"translate"),h.Mb(142,"ion-note"),h.oc(143),h.Zb(144,"translate"),h.Lb(),h.Lb(),h.Mb(145,"ion-checkbox",4),h.Ub("ngModelChange",function(t){return e.settings.nonPast=t}),h.Lb(),h.Kb(146,"ion-icon",20),h.Lb(),h.Mb(147,"ion-item"),h.Mb(148,"ion-label"),h.oc(149),h.Zb(150,"translate"),h.Lb(),h.Mb(151,"ion-checkbox",4),h.Ub("ngModelChange",function(t){return e.settings.past=t}),h.Lb(),h.Kb(152,"ion-icon",21),h.Lb(),h.Lb(),h.Mb(153,"ion-list"),h.Mb(154,"ion-list-header"),h.oc(155),h.Zb(156,"translate"),h.Lb(),h.Mb(157,"ion-item"),h.Mb(158,"ion-label"),h.oc(159),h.Zb(160,"translate"),h.Lb(),h.Mb(161,"ion-checkbox",4),h.Ub("ngModelChange",function(t){return e.settings.positive=t}),h.Lb(),h.Kb(162,"ion-icon",22),h.Lb(),h.Mb(163,"ion-item"),h.Mb(164,"ion-label"),h.oc(165),h.Zb(166,"translate"),h.Lb(),h.Mb(167,"ion-checkbox",4),h.Ub("ngModelChange",function(t){return e.settings.negative=t}),h.Lb(),h.Kb(168,"ion-icon",23),h.Lb(),h.Lb(),h.Lb(),h.Mb(169,"ion-col"),h.Mb(170,"ion-list"),h.Mb(171,"ion-list-header"),h.oc(172),h.Zb(173,"translate"),h.Lb(),h.Mb(174,"ion-item"),h.Mb(175,"ion-label"),h.oc(176),h.Zb(177,"translate"),h.Lb(),h.Mb(178,"ion-select",24),h.Ub("ngModelChange",function(t){return e.settings.jlptLevel=t}),h.Mb(179,"ion-select-option",25),h.oc(180,"N5"),h.Lb(),h.Mb(181,"ion-select-option",26),h.oc(182,"N4"),h.Lb(),h.Mb(183,"ion-select-option",27),h.oc(184,"N3"),h.Lb(),h.Mb(185,"ion-select-option",28),h.oc(186,"N2"),h.Lb(),h.Mb(187,"ion-select-option",29),h.oc(188,"N1"),h.Lb(),h.Lb(),h.Kb(189,"ion-icon",30),h.Lb(),h.Mb(190,"ion-item"),h.Mb(191,"ion-label"),h.oc(192),h.Zb(193,"translate"),h.Lb(),h.Mb(194,"ion-checkbox",7),h.Ub("ngModelChange",function(t){return e.settings.leaveOutSuru=t}),h.Lb(),h.Mb(195,"span",31),h.oc(196,"\u3059\u308b"),h.Lb(),h.Lb(),h.Mb(197,"ion-item"),h.Mb(198,"ion-label"),h.oc(199),h.Zb(200,"translate"),h.Mb(201,"ion-note"),h.oc(202),h.Zb(203,"translate"),h.Lb(),h.Lb(),h.Mb(204,"ion-checkbox",4),h.Ub("ngModelChange",function(t){return e.settings.reverse=t}),h.Lb(),h.Kb(205,"ion-icon",32),h.Lb(),h.Mb(206,"ion-item"),h.Mb(207,"ion-label"),h.oc(208),h.Zb(209,"translate"),h.Lb(),h.Mb(210,"ion-select",33),h.Ub("ngModelChange",function(t){return e.settings.amount=t}),h.Mb(211,"ion-select-option",34),h.oc(212,"10"),h.Lb(),h.Mb(213,"ion-select-option",35),h.oc(214,"20"),h.Lb(),h.Mb(215,"ion-select-option",36),h.oc(216,"30"),h.Lb(),h.Mb(217,"ion-select-option",37),h.oc(218,"40"),h.Lb(),h.Mb(219,"ion-select-option",38),h.oc(220,"50"),h.Lb(),h.Lb(),h.Mb(221,"span",6),h.oc(222,"#"),h.Lb(),h.Lb(),h.Mb(223,"ion-item"),h.Mb(224,"ion-label"),h.oc(225),h.Zb(226,"translate"),h.Lb(),h.Mb(227,"ion-select",24),h.Ub("ngModelChange",function(t){return e.setLanguage(t)}),h.Mb(228,"ion-select-option",39),h.oc(229,"English"),h.Lb(),h.Mb(230,"ion-select-option",40),h.oc(231,"Nederlands"),h.Lb(),h.Lb(),h.Kb(232,"ion-icon",41),h.Lb(),h.Mb(233,"ion-item"),h.Mb(234,"ion-label"),h.oc(235),h.Zb(236,"translate"),h.Lb(),h.Mb(237,"ion-select",24),h.Ub("ngModelChange",function(t){return e.setVoice(t)}),h.Mb(238,"ion-select-option",42),h.oc(239),h.Zb(240,"translate"),h.Lb(),h.nc(241,d,2,2,"ion-select-option",43),h.Lb(),h.Kb(242,"ion-icon",44),h.Lb(),h.Mb(243,"ion-item"),h.Mb(244,"ion-label"),h.oc(245),h.Zb(246,"translate"),h.Lb(),h.Mb(247,"ion-checkbox",4),h.Ub("ngModelChange",function(t){return e.settings.showMeaning=t}),h.Lb(),h.Kb(248,"ion-icon",45),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Mb(249,"ion-footer"),h.Mb(250,"ion-button",46),h.Ub("click",function(){return e.startReview()}),h.Mb(251,"span",47),h.oc(252),h.Zb(253,"translate"),h.Lb(),h.Lb(),h.Lb()),2&t&&(h.zb(3),h.qc(" ",h.ac(4,78,"setting.title")," "),h.zb(11),h.qc(" ",h.ac(15,80,"setting.group-title.form")," "),h.zb(4),h.pc(h.ac(19,82,"setting.form.normal")),h.zb(2),h.dc("ngModel",e.settings.normal),h.zb(4),h.pc(h.ac(25,84,"setting.form.te-form")),h.zb(2),h.dc("ngModel",e.settings.teForm),h.zb(5),h.pc(h.ac(32,86,"setting.form.volitional")),h.zb(2),h.dc("ngModel",e.settings.volitional)("disabled",!1===e.settings.verb),h.zb(4),h.pc(h.ac(38,88,"setting.form.tai-form")),h.zb(2),h.dc("ngModel",e.settings.taiForm)("disabled",!1===e.settings.verb),h.zb(4),h.pc(h.ac(44,90,"setting.form.tari-form")),h.zb(2),h.dc("ngModel",e.settings.tariForm),h.zb(5),h.pc(h.ac(51,92,"setting.form.potential")),h.zb(2),h.dc("ngModel",e.settings.potential)("disabled",!1===e.settings.verb),h.zb(4),h.pc(h.ac(57,94,"setting.form.imperative")),h.zb(2),h.dc("ngModel",e.settings.imperative)("disabled",!1===e.settings.verb),h.zb(4),h.qc(" ",h.ac(63,96,"setting.form.conditional")," "),h.zb(3),h.pc(h.ac(66,98,"setting.form.conditional-note")),h.zb(2),h.dc("ngModel",e.settings.conditional),h.zb(4),h.qc(" ",h.ac(72,100,"setting.form.passive")," "),h.zb(2),h.dc("ngModel",e.settings.passive)("disabled",!1===e.settings.verb),h.zb(4),h.qc(" ",h.ac(78,102,"setting.form.causative")," "),h.zb(2),h.dc("ngModel",e.settings.causative)("disabled",!1===e.settings.verb),h.zb(4),h.qc(" ",h.ac(84,104,"setting.form.causative-passive")," "),h.zb(2),h.dc("ngModel",e.settings.causativePassive)("disabled",!1===e.settings.verb),h.zb(4),h.qc(" ",h.ac(90,106,"setting.group-title.part-of-speech")," "),h.zb(4),h.qc(" ",h.ac(94,108,"setting.part-of-speech.verb")," "),h.zb(2),h.dc("ngModel",e.settings.verb),h.zb(4),h.qc(" ",h.ac(100,110,"setting.part-of-speech.i-adjective")," "),h.zb(2),h.dc("ngModel",e.settings.iAdjective),h.zb(5),h.qc(" ",h.ac(107,112,"setting.part-of-speech.na-adjective")," "),h.zb(2),h.dc("ngModel",e.settings.naAdjective),h.zb(6),h.qc(" ",h.ac(115,114,"setting.group-title.speech-level")," "),h.zb(4),h.qc(" ",h.ac(119,116,"setting.speech-level.formal")," "),h.zb(3),h.pc(h.ac(122,118,"setting.speech-level.formal-note")),h.zb(2),h.dc("ngModel",e.settings.polite),h.zb(4),h.qc(" ",h.ac(128,120,"setting.speech-level.informal")," "),h.zb(3),h.pc(h.ac(131,122,"setting.speech-level.informal-note")),h.zb(2),h.dc("ngModel",e.settings.plain),h.zb(4),h.qc(" ",h.ac(137,124,"setting.group-title.tense")," "),h.zb(4),h.qc(" ",h.ac(141,126,"setting.tense.nonpast")," "),h.zb(3),h.pc(h.ac(144,128,"setting.tense.nonpast-note")),h.zb(2),h.dc("ngModel",e.settings.nonPast),h.zb(4),h.pc(h.ac(150,130,"setting.tense.past")),h.zb(2),h.dc("ngModel",e.settings.past),h.zb(4),h.qc(" ",h.ac(156,132,"setting.group-title.positive/negative")," "),h.zb(4),h.qc(" ",h.ac(160,134,"setting.positive/negative.positive")," "),h.zb(2),h.dc("ngModel",e.settings.positive),h.zb(4),h.qc(" ",h.ac(166,136,"setting.positive/negative.negative")," "),h.zb(2),h.dc("ngModel",e.settings.negative),h.zb(5),h.qc(" ",h.ac(173,138,"setting.group-title.special-options")," "),h.zb(4),h.qc(" ",h.ac(177,140,"setting.group-title.jlpt-level")," "),h.zb(2),h.dc("ngModel",e.settings.jlptLevel),h.zb(14),h.pc(h.ac(193,142,"setting.special.no-suru")),h.zb(2),h.dc("ngModel",e.settings.leaveOutSuru)("disabled",!1===e.settings.verb),h.zb(5),h.qc(" ",h.ac(200,144,"setting.special.reverse")," "),h.zb(3),h.pc(h.ac(203,146,"setting.special.reverse-note")),h.zb(2),h.dc("ngModel",e.settings.reverse),h.zb(4),h.qc(" ",h.ac(209,148,"setting.special.amount")," "),h.zb(2),h.dc("ngModel",e.settings.amount)("selectedText",e.settings.amount),h.zb(15),h.qc(" ",h.ac(226,150,"setting.special.language")," "),h.zb(2),h.dc("ngModel",e.settings.language),h.zb(8),h.qc(" ",h.ac(236,152,"setting.special.voice")," "),h.zb(2),h.dc("ngModel",e.settings.voice),h.zb(2),h.qc(" ",h.ac(240,154,"setting.special.none")," "),h.zb(2),h.dc("ngForOf",e.speech.getVoices()),h.zb(4),h.pc(h.ac(246,156,"setting.special.show-meaning")),h.zb(2),h.dc("ngModel",e.settings.showMeaning),h.zb(5),h.pc(h.ac(253,158,"home.start")))},directives:[s.l,s.y,s.x,s.f,s.e,s.D,a.g,s.m,s.i,s.k,s.u,s.h,s.p,s.q,s.n,s.o,s.g,s.a,o.e,o.h,s.r,s.v,s.E,s.w,n.i,s.j],pipes:[g.c],styles:[".start-review[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], ion-title[_ngcontent-%COMP%]{text-shadow:1px 1px 0 rgba(0,0,0,.2)}[slot=start][_ngcontent-%COMP%]{font-size:1.5rem;width:29px;text-align:center;white-space:nowrap}[slot=start][name=no-suru][_ngcontent-%COMP%], [slot=start][name=tari][_ngcontent-%COMP%]{min-height:1.3rem;font-size:.9rem}[slot=start][name=no-suru][_ngcontent-%COMP%]{text-decoration:line-through}ion-item[_ngcontent-%COMP%]:hover   [slot=start][_ngcontent-%COMP%]{transition:color .2s ease-in-out;color:var(--ion-color-primary);-webkit-animation:pulse2 .6s linear infinite;animation:pulse2 .6s linear infinite}ion-item[_ngcontent-%COMP%]:hover   [slot=start][name=bowtie][_ngcontent-%COMP%]{-webkit-animation:spin .6s linear infinite;animation:spin .6s linear infinite}ion-item[_ngcontent-%COMP%]:hover   [slot=start][name=heart][_ngcontent-%COMP%]{-webkit-animation:pulse1 .6s linear infinite;animation:pulse1 .6s linear infinite}.start-review[_ngcontent-%COMP%]{--background:var(--ion-color-primary-shade);margin:0}"]}),t})(),u=(()=>{class t{}return t.\u0275mod=h.Hb({type:t}),t.\u0275inj=h.Gb({factory:function(e){return new(e||t)},imports:[[n.b,o.b,s.z,a.h.forChild([{path:"",component:v}]),g.b.forChild()]]}),t})()}}]);