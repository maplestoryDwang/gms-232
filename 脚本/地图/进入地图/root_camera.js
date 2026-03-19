var status = -1;
function action(f, E, e) {
  status++;
  if (cm.isQuestActive(30000) && cm.getNumberFromQuestInfo(30000, "ent") == 0) {
    action30000(f, E, e);
  } else {
    cm.dispose();
  }
}
function action30000(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
      cm.spawnMobLimit(4130100, 1, -282, -365, 1);
      cm.spawnMobLimit(4130100, 1, -365, -665, 1);
      cm.spawnMobLimit(4130100, 1, -250, 175, 1);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 400, 764, -1032);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(4311);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("啊，那边有通往新地区的路。", 3, 0, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else if (status === V++) {
                cm.updateInfoQuest(30000, "ent=1");
                cm.setInGameDirectionMode(false, true, false);
                cm.setStandAloneMode(false);
                cm.dispose();
              }
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