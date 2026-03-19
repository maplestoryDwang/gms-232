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
      cm.npc_ChangeController(1530150, "oid=37700749", 102, 61, 15, 52, 152, 1, true, false);
      cm.npc_SetSpecialAction("oid=37700749", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("到底是哪个家伙？让我逮到你就死定了，非得让你在操场走一百圈鸭步不可。", 37, 1530150, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("呃，怎么这么经打……看来这办法是不行了。", 57, 0, true, true);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 300, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else if (status === V++) {
            cm.gainExp(Math.pow(cm.getLevel(), 3));
            cm.forceCompleteQuest(32816);
            cm.updateInfoQuest(32720, "sms=133");
            cm.dispose();
            cm.warp(330000010, 0);
            cm.inGameDirectionEvent_SetHideEffect(0);
            cm.setInGameDirectionMode(false, true, false);
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