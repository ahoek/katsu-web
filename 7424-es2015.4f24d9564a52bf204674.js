(self.webpackChunkkatsu=self.webpackChunkkatsu||[]).push([[7424],{7424:function(n,t,e){"use strict";e.r(t),e.d(t,{SummaryPageModule:function(){return d}});var o=e(1116),r=e(1041),s=e(9185),c=e(8809),i=e(4509),a=e(5614),u=e(2731),l=e(5856);function g(n,t){1&n&&a._UZ(0,"ion-icon",11)}function m(n,t){1&n&&a._UZ(0,"ion-icon",12)}const p=function(n,t){return{correct:n,incorrect:t}};function h(n,t){if(1&n){const n=a.EpF();a.TgZ(0,"ion-item",4),a.NdJ("click",function(){const t=a.CHM(n).index;return a.oxw().goToQuestion(t)}),a.TgZ(1,"ion-label",5),a.TgZ(2,"span",6),a._uU(3),a.qZA(),a.TgZ(4,"span",7),a._uU(5),a.qZA(),a._UZ(6,"app-answers",8),a.qZA(),a.YNc(7,g,1,0,"ion-icon",9),a.YNc(8,m,1,0,"ion-icon",10),a.qZA()}if(2&n){const n=t.$implicit,e=t.index;a.Q6J("ngClass",a.WLB(6,p,!0===n.correct,!1===n.correct)),a.xp6(3),a.Oqu(e+1),a.xp6(2),a.hij(" ",n.givenAnswer," "),a.xp6(1),a.Q6J("question",n),a.xp6(1),a.Q6J("ngIf",!0===n.correct),a.xp6(1),a.Q6J("ngIf",!1===n.correct)}}let Z=(()=>{class n{constructor(n,t,e,o){this.navCtrl=n,this.platform=t,this.questionService=e,this.translate=o,this.summaryText="",this.questions=this.questionService.questions,this.questionService.resetAnsweredStatus(),this.setSummaryText()}setSummaryText(){this.summaryText=this.translate.instant("summary.text",{correct:this.questionService.getTotalCorrect(),total:this.questions.length})}goToQuestion(n){this.questionService.index=n,this.navCtrl.navigateBack("/review")}}return n.\u0275fac=function(t){return new(t||n)(a.Y36(c.SH),a.Y36(c.t4),a.Y36(i.I),a.Y36(u.sK))},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-summary"]],decls:14,vars:8,consts:[["color","secondary"],["slot","end"],["routerLink","/home","routerDirection","root"],[3,"ngClass","click",4,"ngFor","ngForOf"],[3,"ngClass","click"],[1,"ion-text-wrap"],[1,"number"],["lang","ja",1,"given-answer"],[3,"question"],["name","checkmark-circle","color","success","slot","end",4,"ngIf"],["name","close-circle","color","danger","slot","end",4,"ngIf"],["name","checkmark-circle","color","success","slot","end"],["name","close-circle","color","danger","slot","end"]],template:function(n,t){1&n&&(a.TgZ(0,"ion-header"),a.TgZ(1,"ion-toolbar",0),a.TgZ(2,"ion-title"),a._uU(3),a.ALo(4,"translate"),a.qZA(),a.TgZ(5,"ion-buttons",1),a.TgZ(6,"ion-button",2),a._uU(7),a.ALo(8,"translate"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(9,"ion-content"),a.TgZ(10,"ion-list"),a.TgZ(11,"ion-item"),a._uU(12),a.qZA(),a.YNc(13,h,9,9,"ion-item",3),a.qZA(),a.qZA()),2&n&&(a.xp6(3),a.hij(" ",a.lcZ(4,4,"summary.title")," "),a.xp6(4),a.hij(" ",a.lcZ(8,6,"summary.close")," "),a.xp6(5),a.Oqu(t.summaryText),a.xp6(1),a.Q6J("ngForOf",t.questions))},directives:[c.Gu,c.sr,c.wd,c.Sm,c.YG,c.YI,s.rH,c.W2,c.q_,c.Ie,o.sg,o.mk,c.Q$,l.Z,o.O5,c.gu],pipes:[u.X$],styles:['ion-item[_ngcontent-%COMP%]{font-size:1.6rem}.number[_ngcontent-%COMP%]{color:#666}.number[_ngcontent-%COMP%]:after{content:"."}.summary[_ngcontent-%COMP%]{overflow-y:scroll;display:block}.correct[_ngcontent-%COMP%]   .given-answer[_ngcontent-%COMP%]{color:var(--ion-color-success)}.incorrect[_ngcontent-%COMP%]   .given-answer[_ngcontent-%COMP%]{color:var(--ion-color-danger)}answers[_ngcontent-%COMP%]   ion-list.list-ios[_ngcontent-%COMP%]{margin-bottom:0}ion-item[_ngcontent-%COMP%]:hover{cursor:pointer}']}),n})();var f=e(5530);const q=[{path:"",component:Z}];let d=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[o.ez,r.u5,c.Pc,s.Bz.forChild(q),u.aw.forChild(),f.K]]}),n})()}}]);