var status = -1;
function action(f, E, e) {
  status++;
  if (cm.getQuestStatus(24008) == 1) {
    action1(f, E, e);
  } else {
    cm.dispose();
    if (cm.isQuestActive(24071)) {
      cm.forceCompleteQuest(24071);
    }
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.getPlayer().getLevel() > 20) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.sendNormalTalk('长老们？', 17, 0, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(2);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(0);
            cm.sendNormalTalk("孩子们也…………", 17, 0, false, true);
          } else {
            if (status === V++) {
              cm.npc_LeaveField("oid=1333");
              cm.npc_LeaveField("oid=1334");
              cm.npc_LeaveField("oid=1335");
              cm.inGameDirectionEvent_MoveAction(1);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(0);
                cm.sendNormalTalk("大家仍然被冰封着…………", 17, 0, false, true);
              } else if (status === V++) {
                cm.setInGameDirectionMode(false, true, false);
                cm.forceStartQuest(24009, '1');
                cm.forceStartQuest(24008, '2');
                cm.forceCompleteQuest(24008);
                cm.dispose();
              } else {
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
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {} else if (status === V++) {
        cm.warp(992000000, 0);
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(false, true);
        cm.setStandAloneMode(false);
        cm.dispose();
        cm.npc_LeaveField(2540000);
      } else {
        cm.dispose();
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;