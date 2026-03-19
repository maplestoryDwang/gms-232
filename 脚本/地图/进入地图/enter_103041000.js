var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestFinished(34400) && cm.getQuestStatus(34401) == 0) {
    action1(f, E, e);
  } else {
    if (cm.isQuestActive(34439)) {
      action2(f, E, e);
    } else if (cm.isQuestActive(34418) && "s1=1" === cm.getInfoQuest(34436)) {
      action3(f, E, e);
    } else {
      cm.dispose();
    }
  }
}
function action1(f, E, e) {
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
      cm.updateInfoQuest(34436, "s1=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 186, 317);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(300);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#b（这里好像是废都塔的大厅。）#k", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(1);
              cm.inGameDirectionEvent_AskAnswerTime(4000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(0);
                cm.sendNormalTalk_Bottom("#b（阿赫的办公室好像是在地下10楼，坐电梯往下走吧。）#k", 57, 0, false, true);
              } else if (status === V++) {
                cm.setInGameDirectionMode(false, true, false);
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}
function action2(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, false, true);
    cm.dispose();
    cm.warp(910310502, 0);
  }
}
function action3(f, E, e) {
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
      cm.updateInfoQuest(34436, "find1=1;s1=1");
      cm.sendNormalTalk("#b（好像不在这里啊，去地下1楼电子卖场看看吧。）#k", 2, 0, false, false);
    } else if (status === V++) {
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;