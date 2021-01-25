(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{KGMg:function(t,e,i){"use strict";i.d(e,"a",function(){return a});var n=i("fXoL"),s=i("e8h1"),o=i("sYmb");let a=(()=>{class t{constructor(t,e){this.storage=t,this.translate=e,this._verb=!0,this._iAdjective=!1,this._naAdjective=!1,this._normal=!0,this._teForm=!1,this._volitional=!1,this._taiForm=!1,this._potential=!1,this._imperative=!1,this._conditional=!1,this._tariForm=!1,this._passive=!1,this._causative=!1,this._causativePassive=!1,this._polite=!0,this._plain=!1,this._past=!0,this._nonPast=!0,this._positive=!0,this._negative=!0,this._jlptLevel="n3",this._leaveOutSuru=!0,this._reverse=!1,this._amount=10,this._showMeaning=!0}get verb(){return this._verb}set verb(t){this._verb=t}get iAdjective(){return this._iAdjective}set iAdjective(t){this._iAdjective=t,this.needsAdjectiveConjugations()}get naAdjective(){return this._naAdjective}set naAdjective(t){this._naAdjective=t,this.needsAdjectiveConjugations()}get normal(){return this._normal}set normal(t){this._normal=t,this._normal&&(this.needsPartOfSpeech(),this.needsSpeechLevel(),this.needsTense(),this.needsModality())}get teForm(){return this._teForm}set teForm(t){this._teForm=t,this._teForm&&this.needsPartOfSpeech()}get volitional(){return this._volitional}set volitional(t){this._volitional=t,this._volitional&&(this.needsVerb(),this.needsSpeechLevel())}get taiForm(){return this._taiForm}set taiForm(t){this._taiForm=t,this._taiForm&&(this.needsVerb(),this.needsSpeechLevel(),this.needsTense(),this.needsModality())}get potential(){return this._potential}set potential(t){this._potential=t,this._potential&&(this.needsVerb(),this.needsSpeechLevel(),this.needsTense(),this.needsModality())}get imperative(){return this._imperative}set imperative(t){this._imperative=t,this._imperative&&(this.needsVerb(),this.needsModality())}get conditional(){return this._conditional}set conditional(t){this._conditional=t,this._conditional&&(this.needsPartOfSpeech(),this.needsModality())}get tariForm(){return this._tariForm}set tariForm(t){this._tariForm=t,this._tariForm&&(this.needsPartOfSpeech(),this.needsModality())}get passive(){return this._passive}set passive(t){this._passive=t,this._passive&&(this.needsVerb(),this.needsSpeechLevel(),this.needsTense(),this.needsModality())}get causative(){return this._causative}set causative(t){this._causative=t,this._causative&&(this.needsVerb(),this.needsSpeechLevel(),this.needsTense(),this.needsModality())}get causativePassive(){return this._causativePassive}set causativePassive(t){this._causativePassive=t,this._causativePassive&&(this.needsVerb(),this.needsSpeechLevel(),this.needsTense(),this.needsModality())}get polite(){return this._polite}set polite(t){this._polite=t}get plain(){return this._plain}set plain(t){this._plain=t}get past(){return this._past}set past(t){this._past=t}get nonPast(){return this._nonPast}set nonPast(t){this._nonPast=t}get positive(){return this._positive}set positive(t){this._positive=t}get negative(){return this._negative}set negative(t){this._negative=t}get jlptLevel(){return this._jlptLevel}set jlptLevel(t){this._jlptLevel=t}get leaveOutSuru(){return this._leaveOutSuru}set leaveOutSuru(t){this._leaveOutSuru=t}get reverse(){return this._reverse}set reverse(t){this._reverse=t}get amount(){return this._amount}set amount(t){this._amount=t}get language(){return void 0===this._language&&(this._language=this.translate.currentLang),this._language}set language(t){this._language=t}get voice(){return this._voice}set voice(t){this._voice=t}get showMeaning(){return this._showMeaning}set showMeaning(t){this._showMeaning=t}userSettings(){return new Promise(t=>{this.storage.get("settings").then(e=>{e?Object.assign(this,JSON.parse(e)):this.store(),t(this)})})}store(){const t={};Object.keys(this).forEach(e=>{e.startsWith("_")&&(t[e.substring(1)]=this[e])}),this.storage.set("settings",JSON.stringify(t))}getQuestionTypeOptions(){const t=[];if(this.addNormal(t),this.addTeForm(t),this.volitional&&(this.plain&&t.push("volitional-plain"),this.polite&&t.push("volitional-polite")),this.potential&&this.addNormalOptionsFor("potential",t),this.imperative&&(this.positive&&t.push("imperative-positive"),this.negative&&t.push("imperative-negative")),this.addConditional(t),this.taiForm&&this.addNormalOptionsFor("tai-form-verb",t),this.tariForm){const e="tari-form";this.positive&&(this.verb&&t.push(e+"-verb-positive"),this.iAdjective&&t.push(e+"-i-adjective-positive"),this.naAdjective&&t.push(e+"-na-adjective-positive")),this.negative&&(this.verb&&t.push(e+"-verb-negative"),this.iAdjective&&t.push(e+"-i-adjective-negative"),this.naAdjective&&t.push(e+"-na-adjective-negative"))}return this.passive&&this.addPassive(t),this.causative&&this.addCausative(t),this.causativePassive&&this.addCausativePassive(t),console.log("options",t),t}addNormal(t){this.normal&&(this.verb&&this.addNormalOptionsFor("normal-verb",t),this.iAdjective&&this.addNormalOptionsFor("normal-i-adjective",t),this.naAdjective&&this.addNormalOptionsFor("normal-na-adjective",t))}addNormalOptionsFor(t,e){this.plain&&this.addSubOptionsFor(t+"-plain",e),this.polite&&this.addSubOptionsFor(t+"-polite",e)}addSubOptionsFor(t,e){this.positive&&this.addTenseOptionsFor(t+"-positive",e),this.negative&&this.addTenseOptionsFor(t+"-negative",e)}addTenseOptionsFor(t,e){this.nonPast&&e.push(t+"-present"),this.past&&e.push(t+"-past")}addTeForm(t){this.teForm&&(this.verb&&t.push("te-form-verb"),this.iAdjective&&t.push("te-form-i-adjective"),this.naAdjective&&t.push("te-form-na-adjective"))}addConditional(t){const e="conditional";this.conditional&&(this.positive&&(this.verb&&t.push(e+"-verb-positive"),this.iAdjective&&t.push(e+"-i-adjective-positive"),this.naAdjective&&t.push(e+"-na-adjective-positive")),this.negative&&(this.verb&&t.push(e+"-verb-negative"),this.iAdjective&&t.push(e+"-i-adjective-negative"),this.naAdjective&&t.push(e+"-na-adjective-negative")))}addPassive(t){this.addNormalOptionsFor("passive-verb",t)}addCausative(t){this.addNormalOptionsFor("causative-verb",t)}addCausativePassive(t){this.addNormalOptionsFor("caus-pass-verb",t)}getLanguage(){return this.language}getVoice(){return this.voice}needsVerb(){this.verb||(this.verb=!0)}needsPartOfSpeech(){this.verb||this.iAdjective||this.naAdjective||(this.verb=!0)}needsSpeechLevel(){this.polite||this.plain||(this.polite=!0)}needsTense(){this.past||this.nonPast||(this.nonPast=!0)}needsModality(){this.positive||this.negative||(this.positive=!0)}needsAdjectiveConjugations(){this.normal||this.teForm||this.conditional||(this.normal=!0)}}return t.\u0275fac=function(e){return new(e||t)(n.Qb(s.b),n.Qb(o.d))},t.\u0275prov=n.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"ct+p":function(t,e,i){"use strict";i.r(e),i.d(e,"HomePageModule",function(){return u});var n=i("ofXK"),s=i("TEn/"),o=i("3Pt+"),a=i("tyNb"),b=i("mrSG"),r=i("KGMg"),l=i("d2it"),c=i("GVUb"),h=i("fXoL"),g=i("sYmb");function d(t,e){if(1&t&&(h.Mb(0,"ion-select-option",47),h.oc(1),h.Lb()),2&t){const t=e.$implicit;h.ec("value",t.name),h.zb(1),h.qc(" ",t.name," ")}}let v=(()=>{class t{constructor(t,e,i,n,s,o){this.navCtrl=t,this.platform=e,this.analytics=i,this.translate=n,this.speech=s,this.settings=o}ngOnInit(){return Object(b.a)(this,void 0,void 0,function*(){yield this.settings.userSettings(),this.settings.language!==this.translate.currentLang&&this.setLanguage(this.settings.language),this.settings.voice&&this.speech.setVoiceByName(this.settings.voice)})}startReview(){this.settings.store(),this.navCtrl.navigateForward("/review"),this.platform.ready().then(()=>{this.analytics.trackEvent("Review","start","",1)})}setLanguage(t){this.settings.language=t,this.translate.use(this.settings.language)}setVoice(t){this.settings.voice=t,this.speech.setVoiceByName(t)}}return t.\u0275fac=function(e){return new(e||t)(h.Jb(s.B),h.Jb(s.C),h.Jb(c.a),h.Jb(g.d),h.Jb(l.a),h.Jb(r.a))},t.\u0275cmp=h.Db({type:t,selectors:[["app-home"]],decls:255,vars:163,consts:[["color","secondary"],["slot","end"],["routerLink","/information","routerDirection","forward"],["slot","end",3,"ngModel","ngModelChange"],["slot","start",1,"text-icon"],["slot","start"],["slot","end",3,"ngModel","disabled","ngModelChange"],["name","walk-outline","slot","start"],["name","heart-outline","slot","start"],["name","tari","slot","start"],["name","flag-outline","slot","start"],["name","megaphone-outline","slot","start"],["name","code-download-outline","slot","start"],["name","bonfire-outline","slot","start"],["name","log-in-outline","slot","start"],["name","hammer-outline","slot","start"],["name","chatbox-ellipses-outline","slot","start"],["name","briefcase-outline","slot","start"],["name","shirt-outline","slot","start"],["name","play-forward-outline","slot","start"],["name","play-back-outline","slot","start"],["name","happy-outline","slot","start"],["name","sad-outline","slot","start"],["interface","action-sheet","slot","end",3,"ngModel","ngModelChange"],["value","n5"],["value","n4"],["value","n3"],["value","n2"],["value","n1"],["slot","start-outline","name","trending-up"],["name","no-suru","slot","start"],["name","shuffle-outline","slot","start"],["interface","action-sheet","slot","end",3,"ngModel","selectedText","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","40"],["value","50"],["value","en"],["value","nl"],["name","language-outline","slot","start"],["value",""],[3,"value",4,"ngFor","ngForOf"],["name","volume-high-outline","slot","start"],["name","barcode-outline","slot","start"],["expand","full","size","large",1,"start-review",3,"click"],[1,"text"],[3,"value"]],template:function(t,e){1&t&&(h.Mb(0,"ion-header"),h.Mb(1,"ion-toolbar",0),h.Mb(2,"ion-title"),h.oc(3),h.Zb(4,"translate"),h.Lb(),h.Mb(5,"ion-buttons",1),h.Mb(6,"ion-button",2),h.oc(7),h.Zb(8,"translate"),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Mb(9,"ion-content"),h.Mb(10,"ion-grid"),h.Mb(11,"ion-row"),h.Mb(12,"ion-col"),h.Mb(13,"ion-list"),h.Mb(14,"ion-list-header"),h.oc(15),h.Zb(16,"translate"),h.Lb(),h.Mb(17,"ion-item"),h.Mb(18,"ion-label"),h.oc(19),h.Zb(20,"translate"),h.Lb(),h.Mb(21,"ion-checkbox",3),h.Ub("ngModelChange",function(t){return e.settings.normal=t}),h.Lb(),h.Kb(22,"span",4),h.Lb(),h.Mb(23,"ion-item"),h.Mb(24,"ion-label"),h.oc(25),h.Zb(26,"translate"),h.Lb(),h.Mb(27,"ion-checkbox",3),h.Ub("ngModelChange",function(t){return e.settings.teForm=t}),h.Lb(),h.Mb(28,"span",5),h.oc(29,"\u3066"),h.Lb(),h.Lb(),h.Mb(30,"ion-item"),h.Mb(31,"ion-label"),h.oc(32),h.Zb(33,"translate"),h.Lb(),h.Mb(34,"ion-checkbox",6),h.Ub("ngModelChange",function(t){return e.settings.volitional=t}),h.Lb(),h.Kb(35,"ion-icon",7),h.Lb(),h.Mb(36,"ion-item"),h.Mb(37,"ion-label"),h.oc(38),h.Zb(39,"translate"),h.Lb(),h.Mb(40,"ion-checkbox",6),h.Ub("ngModelChange",function(t){return e.settings.taiForm=t}),h.Lb(),h.Kb(41,"ion-icon",8),h.Lb(),h.Mb(42,"ion-item"),h.Mb(43,"ion-label"),h.oc(44),h.Zb(45,"translate"),h.Lb(),h.Mb(46,"ion-checkbox",3),h.Ub("ngModelChange",function(t){return e.settings.tariForm=t}),h.Lb(),h.Mb(47,"span",9),h.oc(48,"\u305f\u308a"),h.Lb(),h.Lb(),h.Mb(49,"ion-item"),h.Mb(50,"ion-label"),h.oc(51),h.Zb(52,"translate"),h.Lb(),h.Mb(53,"ion-checkbox",6),h.Ub("ngModelChange",function(t){return e.settings.potential=t}),h.Lb(),h.Kb(54,"ion-icon",10),h.Lb(),h.Mb(55,"ion-item"),h.Mb(56,"ion-label"),h.oc(57),h.Zb(58,"translate"),h.Lb(),h.Mb(59,"ion-checkbox",6),h.Ub("ngModelChange",function(t){return e.settings.imperative=t}),h.Lb(),h.Kb(60,"ion-icon",11),h.Lb(),h.Mb(61,"ion-item"),h.Mb(62,"ion-label"),h.oc(63),h.Zb(64,"translate"),h.Mb(65,"ion-note"),h.oc(66),h.Zb(67,"translate"),h.Lb(),h.Lb(),h.Mb(68,"ion-checkbox",3),h.Ub("ngModelChange",function(t){return e.settings.conditional=t}),h.Lb(),h.Kb(69,"ion-icon",12),h.Lb(),h.Mb(70,"ion-item"),h.Mb(71,"ion-label"),h.oc(72),h.Zb(73,"translate"),h.Lb(),h.Mb(74,"ion-checkbox",6),h.Ub("ngModelChange",function(t){return e.settings.passive=t}),h.Lb(),h.Kb(75,"ion-icon",13),h.Lb(),h.Mb(76,"ion-item"),h.Mb(77,"ion-label"),h.oc(78),h.Zb(79,"translate"),h.Lb(),h.Mb(80,"ion-checkbox",6),h.Ub("ngModelChange",function(t){return e.settings.causative=t}),h.Lb(),h.Kb(81,"ion-icon",14),h.Lb(),h.Mb(82,"ion-item"),h.Mb(83,"ion-label"),h.oc(84),h.Zb(85,"translate"),h.Lb(),h.Mb(86,"ion-checkbox",6),h.Ub("ngModelChange",function(t){return e.settings.causativePassive=t}),h.Lb(),h.Kb(87,"ion-icon",15),h.Lb(),h.Lb(),h.Mb(88,"ion-list"),h.Mb(89,"ion-list-header"),h.oc(90),h.Zb(91,"translate"),h.Lb(),h.Mb(92,"ion-item"),h.Mb(93,"ion-label"),h.oc(94),h.Zb(95,"translate"),h.Lb(),h.Mb(96,"ion-checkbox",3),h.Ub("ngModelChange",function(t){return e.settings.verb=t}),h.Lb(),h.Kb(97,"ion-icon",16),h.Lb(),h.Mb(98,"ion-item"),h.Mb(99,"ion-label"),h.oc(100),h.Zb(101,"translate"),h.Lb(),h.Mb(102,"ion-checkbox",3),h.Ub("ngModelChange",function(t){return e.settings.iAdjective=t}),h.Lb(),h.Mb(103,"span",5),h.oc(104,"\u3044"),h.Lb(),h.Lb(),h.Mb(105,"ion-item"),h.Mb(106,"ion-label"),h.oc(107),h.Zb(108,"translate"),h.Lb(),h.Mb(109,"ion-checkbox",3),h.Ub("ngModelChange",function(t){return e.settings.naAdjective=t}),h.Lb(),h.Mb(110,"span",5),h.oc(111,"\u306a"),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Mb(112,"ion-col"),h.Mb(113,"ion-list"),h.Mb(114,"ion-list-header"),h.oc(115),h.Zb(116,"translate"),h.Lb(),h.Mb(117,"ion-item"),h.Mb(118,"ion-label"),h.oc(119),h.Zb(120,"translate"),h.Mb(121,"ion-note"),h.oc(122),h.Zb(123,"translate"),h.Lb(),h.Lb(),h.Mb(124,"ion-checkbox",3),h.Ub("ngModelChange",function(t){return e.settings.polite=t}),h.Lb(),h.Kb(125,"ion-icon",17),h.Lb(),h.Mb(126,"ion-item"),h.Mb(127,"ion-label"),h.oc(128),h.Zb(129,"translate"),h.Mb(130,"ion-note"),h.oc(131),h.Zb(132,"translate"),h.Lb(),h.Lb(),h.Mb(133,"ion-checkbox",3),h.Ub("ngModelChange",function(t){return e.settings.plain=t}),h.Lb(),h.Kb(134,"ion-icon",18),h.Lb(),h.Lb(),h.Mb(135,"ion-list"),h.Mb(136,"ion-list-header"),h.oc(137),h.Zb(138,"translate"),h.Lb(),h.Mb(139,"ion-item"),h.Mb(140,"ion-label"),h.oc(141),h.Zb(142,"translate"),h.Mb(143,"ion-note"),h.oc(144),h.Zb(145,"translate"),h.Lb(),h.Lb(),h.Mb(146,"ion-checkbox",3),h.Ub("ngModelChange",function(t){return e.settings.nonPast=t}),h.Lb(),h.Kb(147,"ion-icon",19),h.Lb(),h.Mb(148,"ion-item"),h.Mb(149,"ion-label"),h.oc(150),h.Zb(151,"translate"),h.Lb(),h.Mb(152,"ion-checkbox",3),h.Ub("ngModelChange",function(t){return e.settings.past=t}),h.Lb(),h.Kb(153,"ion-icon",20),h.Lb(),h.Lb(),h.Mb(154,"ion-list"),h.Mb(155,"ion-list-header"),h.oc(156),h.Zb(157,"translate"),h.Lb(),h.Mb(158,"ion-item"),h.Mb(159,"ion-label"),h.oc(160),h.Zb(161,"translate"),h.Lb(),h.Mb(162,"ion-checkbox",3),h.Ub("ngModelChange",function(t){return e.settings.positive=t}),h.Lb(),h.Kb(163,"ion-icon",21),h.Lb(),h.Mb(164,"ion-item"),h.Mb(165,"ion-label"),h.oc(166),h.Zb(167,"translate"),h.Lb(),h.Mb(168,"ion-checkbox",3),h.Ub("ngModelChange",function(t){return e.settings.negative=t}),h.Lb(),h.Kb(169,"ion-icon",22),h.Lb(),h.Lb(),h.Lb(),h.Mb(170,"ion-col"),h.Mb(171,"ion-list"),h.Mb(172,"ion-list-header"),h.oc(173),h.Zb(174,"translate"),h.Lb(),h.Mb(175,"ion-item"),h.Mb(176,"ion-label"),h.oc(177),h.Zb(178,"translate"),h.Lb(),h.Mb(179,"ion-select",23),h.Ub("ngModelChange",function(t){return e.settings.jlptLevel=t}),h.Mb(180,"ion-select-option",24),h.oc(181,"N5"),h.Lb(),h.Mb(182,"ion-select-option",25),h.oc(183,"N4"),h.Lb(),h.Mb(184,"ion-select-option",26),h.oc(185,"N3"),h.Lb(),h.Mb(186,"ion-select-option",27),h.oc(187,"N2"),h.Lb(),h.Mb(188,"ion-select-option",28),h.oc(189,"N1"),h.Lb(),h.Lb(),h.Kb(190,"ion-icon",29),h.Lb(),h.Mb(191,"ion-item"),h.Mb(192,"ion-label"),h.oc(193),h.Zb(194,"translate"),h.Lb(),h.Mb(195,"ion-checkbox",6),h.Ub("ngModelChange",function(t){return e.settings.leaveOutSuru=t}),h.Lb(),h.Mb(196,"span",30),h.oc(197,"\u3059\u308b"),h.Lb(),h.Lb(),h.Mb(198,"ion-item"),h.Mb(199,"ion-label"),h.oc(200),h.Zb(201,"translate"),h.Mb(202,"ion-note"),h.oc(203),h.Zb(204,"translate"),h.Lb(),h.Lb(),h.Mb(205,"ion-checkbox",3),h.Ub("ngModelChange",function(t){return e.settings.reverse=t}),h.Lb(),h.Kb(206,"ion-icon",31),h.Lb(),h.Mb(207,"ion-item"),h.Mb(208,"ion-label"),h.oc(209),h.Zb(210,"translate"),h.Lb(),h.Mb(211,"ion-select",32),h.Ub("ngModelChange",function(t){return e.settings.amount=t}),h.Mb(212,"ion-select-option",33),h.oc(213,"10"),h.Lb(),h.Mb(214,"ion-select-option",34),h.oc(215,"20"),h.Lb(),h.Mb(216,"ion-select-option",35),h.oc(217,"30"),h.Lb(),h.Mb(218,"ion-select-option",36),h.oc(219,"40"),h.Lb(),h.Mb(220,"ion-select-option",37),h.oc(221,"50"),h.Lb(),h.Lb(),h.Mb(222,"span",5),h.oc(223,"#"),h.Lb(),h.Lb(),h.Mb(224,"ion-item"),h.Mb(225,"ion-label"),h.oc(226),h.Zb(227,"translate"),h.Lb(),h.Mb(228,"ion-select",23),h.Ub("ngModelChange",function(t){return e.setLanguage(t)}),h.Mb(229,"ion-select-option",38),h.oc(230,"English"),h.Lb(),h.Mb(231,"ion-select-option",39),h.oc(232,"Nederlands"),h.Lb(),h.Lb(),h.Kb(233,"ion-icon",40),h.Lb(),h.Mb(234,"ion-item"),h.Mb(235,"ion-label"),h.oc(236),h.Zb(237,"translate"),h.Lb(),h.Mb(238,"ion-select",23),h.Ub("ngModelChange",function(t){return e.setVoice(t)}),h.Mb(239,"ion-select-option",41),h.oc(240),h.Zb(241,"translate"),h.Lb(),h.nc(242,d,2,2,"ion-select-option",42),h.Lb(),h.Kb(243,"ion-icon",43),h.Lb(),h.Mb(244,"ion-item"),h.Mb(245,"ion-label"),h.oc(246),h.Zb(247,"translate"),h.Lb(),h.Mb(248,"ion-checkbox",3),h.Ub("ngModelChange",function(t){return e.settings.showMeaning=t}),h.Lb(),h.Kb(249,"ion-icon",44),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Mb(250,"ion-footer"),h.Mb(251,"ion-button",45),h.Ub("click",function(){return e.startReview()}),h.Mb(252,"span",46),h.oc(253),h.Zb(254,"translate"),h.Lb(),h.Lb(),h.Lb()),2&t&&(h.zb(3),h.qc(" ",h.ac(4,79,"setting.title")," "),h.zb(4),h.qc(" ",h.ac(8,81,"setting.info")," "),h.zb(8),h.qc(" ",h.ac(16,83,"setting.group-title.form")," "),h.zb(4),h.pc(h.ac(20,85,"setting.form.normal")),h.zb(2),h.dc("ngModel",e.settings.normal),h.zb(4),h.pc(h.ac(26,87,"setting.form.te-form")),h.zb(2),h.dc("ngModel",e.settings.teForm),h.zb(5),h.pc(h.ac(33,89,"setting.form.volitional")),h.zb(2),h.dc("ngModel",e.settings.volitional)("disabled",!1===e.settings.verb),h.zb(4),h.pc(h.ac(39,91,"setting.form.tai-form")),h.zb(2),h.dc("ngModel",e.settings.taiForm)("disabled",!1===e.settings.verb),h.zb(4),h.pc(h.ac(45,93,"setting.form.tari-form")),h.zb(2),h.dc("ngModel",e.settings.tariForm),h.zb(5),h.pc(h.ac(52,95,"setting.form.potential")),h.zb(2),h.dc("ngModel",e.settings.potential)("disabled",!1===e.settings.verb),h.zb(4),h.pc(h.ac(58,97,"setting.form.imperative")),h.zb(2),h.dc("ngModel",e.settings.imperative)("disabled",!1===e.settings.verb),h.zb(4),h.qc(" ",h.ac(64,99,"setting.form.conditional")," "),h.zb(3),h.pc(h.ac(67,101,"setting.form.conditional-note")),h.zb(2),h.dc("ngModel",e.settings.conditional),h.zb(4),h.qc(" ",h.ac(73,103,"setting.form.passive")," "),h.zb(2),h.dc("ngModel",e.settings.passive)("disabled",!1===e.settings.verb),h.zb(4),h.qc(" ",h.ac(79,105,"setting.form.causative")," "),h.zb(2),h.dc("ngModel",e.settings.causative)("disabled",!1===e.settings.verb),h.zb(4),h.qc(" ",h.ac(85,107,"setting.form.causative-passive")," "),h.zb(2),h.dc("ngModel",e.settings.causativePassive)("disabled",!1===e.settings.verb),h.zb(4),h.qc(" ",h.ac(91,109,"setting.group-title.part-of-speech")," "),h.zb(4),h.qc(" ",h.ac(95,111,"setting.part-of-speech.verb")," "),h.zb(2),h.dc("ngModel",e.settings.verb),h.zb(4),h.qc(" ",h.ac(101,113,"setting.part-of-speech.i-adjective")," "),h.zb(2),h.dc("ngModel",e.settings.iAdjective),h.zb(5),h.qc(" ",h.ac(108,115,"setting.part-of-speech.na-adjective")," "),h.zb(2),h.dc("ngModel",e.settings.naAdjective),h.zb(6),h.qc(" ",h.ac(116,117,"setting.group-title.speech-level")," "),h.zb(4),h.qc(" ",h.ac(120,119,"setting.speech-level.formal")," "),h.zb(3),h.pc(h.ac(123,121,"setting.speech-level.formal-note")),h.zb(2),h.dc("ngModel",e.settings.polite),h.zb(4),h.qc(" ",h.ac(129,123,"setting.speech-level.informal")," "),h.zb(3),h.pc(h.ac(132,125,"setting.speech-level.informal-note")),h.zb(2),h.dc("ngModel",e.settings.plain),h.zb(4),h.qc(" ",h.ac(138,127,"setting.group-title.tense")," "),h.zb(4),h.qc(" ",h.ac(142,129,"setting.tense.nonpast")," "),h.zb(3),h.pc(h.ac(145,131,"setting.tense.nonpast-note")),h.zb(2),h.dc("ngModel",e.settings.nonPast),h.zb(4),h.pc(h.ac(151,133,"setting.tense.past")),h.zb(2),h.dc("ngModel",e.settings.past),h.zb(4),h.qc(" ",h.ac(157,135,"setting.group-title.positive/negative")," "),h.zb(4),h.qc(" ",h.ac(161,137,"setting.positive/negative.positive")," "),h.zb(2),h.dc("ngModel",e.settings.positive),h.zb(4),h.qc(" ",h.ac(167,139,"setting.positive/negative.negative")," "),h.zb(2),h.dc("ngModel",e.settings.negative),h.zb(5),h.qc(" ",h.ac(174,141,"setting.group-title.special-options")," "),h.zb(4),h.qc(" ",h.ac(178,143,"setting.group-title.jlpt-level")," "),h.zb(2),h.dc("ngModel",e.settings.jlptLevel),h.zb(14),h.pc(h.ac(194,145,"setting.special.no-suru")),h.zb(2),h.dc("ngModel",e.settings.leaveOutSuru)("disabled",!1===e.settings.verb),h.zb(5),h.qc(" ",h.ac(201,147,"setting.special.reverse")," "),h.zb(3),h.pc(h.ac(204,149,"setting.special.reverse-note")),h.zb(2),h.dc("ngModel",e.settings.reverse),h.zb(4),h.qc(" ",h.ac(210,151,"setting.special.amount")," "),h.zb(2),h.dc("ngModel",e.settings.amount)("selectedText",e.settings.amount),h.zb(15),h.qc(" ",h.ac(227,153,"setting.special.language")," "),h.zb(2),h.dc("ngModel",e.settings.language),h.zb(8),h.qc(" ",h.ac(237,155,"setting.special.voice")," "),h.zb(2),h.dc("ngModel",e.settings.voice),h.zb(2),h.qc(" ",h.ac(241,157,"setting.special.none")," "),h.zb(2),h.dc("ngForOf",e.speech.getVoices()),h.zb(4),h.pc(h.ac(247,159,"setting.special.show-meaning")),h.zb(2),h.dc("ngModel",e.settings.showMeaning),h.zb(5),h.pc(h.ac(254,161,"home.start")))},directives:[s.l,s.y,s.x,s.f,s.e,s.D,a.g,s.i,s.k,s.u,s.h,s.p,s.q,s.n,s.o,s.g,s.a,o.e,o.h,s.m,s.r,s.v,s.E,s.w,n.i,s.j],pipes:[g.c],styles:[".start-review[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], ion-title[_ngcontent-%COMP%]{text-shadow:1px 1px 0 rgba(0,0,0,.2)}[slot=start][_ngcontent-%COMP%]{font-size:1.5rem;width:29px;text-align:center;white-space:nowrap}[slot=start][name=no-suru][_ngcontent-%COMP%], [slot=start][name=tari][_ngcontent-%COMP%]{min-height:1.3rem;font-size:.9rem}[slot=start][name=no-suru][_ngcontent-%COMP%]{text-decoration:line-through}ion-item[_ngcontent-%COMP%]:hover   [slot=start][_ngcontent-%COMP%]{transition:color .2s ease-in-out;color:var(--ion-color-primary);-webkit-animation:pulse2 .6s linear infinite;animation:pulse2 .6s linear infinite}ion-item[_ngcontent-%COMP%]:hover   [slot=start][name=bowtie][_ngcontent-%COMP%]{-webkit-animation:spin .6s linear infinite;animation:spin .6s linear infinite}ion-item[_ngcontent-%COMP%]:hover   [slot=start][name=heart][_ngcontent-%COMP%]{-webkit-animation:pulse1 .6s linear infinite;animation:pulse1 .6s linear infinite}.start-review[_ngcontent-%COMP%]{--background:var(--ion-color-primary-shade);margin:0}"]}),t})(),u=(()=>{class t{}return t.\u0275mod=h.Hb({type:t}),t.\u0275inj=h.Gb({factory:function(e){return new(e||t)},imports:[[n.b,o.b,s.z,a.h.forChild([{path:"",component:v}]),g.b.forChild()]]}),t})()}}]);