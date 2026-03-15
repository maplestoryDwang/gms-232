var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (!cm.haveItem(4034279)) {
    cm.dispose();
    cm.addPopupSay(1540451, 1500, "需要准备好炸药才能炸开障碍物. ", '', 0);
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_OneTimeAction(9, 0);
        cm.setNpcSpecialActionReset('oid=37748');
        cm.npc_SetSpecialAction("oid=37748", "setbomb", -1, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion1", 100);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else if (status === V++) {
          cm.setNpcSpecialActionReset("oid=37748");
          cm.npc_SetSpecialAction('oid=37748', 'gone', -1, 0);
          cm.setInGameDirectionMode(false, true, false);
          cm.forceCompleteQuest(33228);
          cm.gainItem(4034279, -1);
          cm.dispose();
          cm.warp(350052800, 0, true);
        }
      }
    }
  }
}