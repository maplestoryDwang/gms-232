var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setPartner(1, 1540741, 80001601, 0);
      cm.setPartner(1, 1540736, 80001602, 0);
      cm.setPartner(1, 1540737, 80001635, 0);
      cm.setPartner(1, 1540738, 80001615, 0);
      cm.setPartner(1, 1540739, 80001616, 0);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3));
        cm.forceCompleteQuest(33271);
        cm.gainExp(Math.pow(cm.getLevel(), 3));
        cm.inGameDirectionEvent_AskAnswerTime(3000);
        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
      } else {
        if (status === V++) {
          cm.addPopupSay(1540451, 1500, "我越走越觉得这内部的空间真的很大. ", '', 0);
          cm.inGameDirectionEvent_AskAnswerTime(6000);
        } else if (status === V++) {
          cm.dispose();
          cm.warp(350052000, 0, true);
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;