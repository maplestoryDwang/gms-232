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
      cm.setPartner(1, 1540741, 80001601, 0);
      cm.setPartner(1, 1540736, 80001602, 0);
      cm.setPartner(1, 1540737, 80001635, 0);
      cm.setPartner(1, 1540738, 80001615, 0);
      cm.setPartner(1, 1540739, 80001616, 0);
      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3));
      cm.forceCompleteQuest(33275);
      cm.gainExp(Math.pow(cm.getLevel(), 3));
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
      cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 340);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(1, 1);
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else if (status === V++) {
              cm.dispose();
              cm.warp(350056000, 0, true);
              cm.setInGameDirectionMode(false, true, false);
            }
          }
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