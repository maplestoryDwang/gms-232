var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
      cm.fieldEffect_InsertCanvas11(4, 0, 0, 0, 0, 0);
      cm.fieldEffect_InsertCanvas11(5, 0, 0, 0, 0, 0);
      cm.fieldEffect_InsertCanvas11(6, 0, 0, 0, 0, 0);
      cm.updateInfoQuest(32603, "ep1=302050400;ep2=303000000;ep3=304060000");
      if (cm.getMapId() == 304070100) {
        cm.spawnMobLimit(8230045, 1, -119, 88, 100);
      } else if (cm.getMapId() == 304070000) {
        cm.forceForfeitQuest(32661);
      }
      if (cm.getMapId() == 304070200) {
        cm.fieldEffect_InsertCanvas(1, 50, 245, 245, 245, 1500, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
        cm.curNodeEventEnd(true);
      } else {
        cm.eventSKill(0);
        cm.setInGameDirectionMode(false, true, false);
        cm.dispose();
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk("哇哇，黑魔女的诅咒解开了……！！", 5, 2531001, false, true);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 200, 245, 245, 245, 4000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(4000);
        } else {
          if (status === V++) {
            cm.forceStartQuest(32669, '1');
            cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 4000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(4000);
          } else if (status === V++) {
            cm.dispose();
            cm.warp(304090300, 0, false);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(false, true, false);
            cm.forceCompleteQuest(32661);
            cm.gainExp(272663);
            cm.forceCompleteQuest(32602);
            cm.finishAchievement(1180);
          }
        }
      }
    }
  }
}