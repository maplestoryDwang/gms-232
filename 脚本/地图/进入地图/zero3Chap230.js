var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestFinished(40307)) {
    action2(f, E, e);
  } else {
    action1(f, E, e);
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
      cm.npc_ChangeController(2440020, "oid=25961", 279, 543, 2, 229, 329, 1, false, 0, false);
      cm.onZeroInfo(2);
      cm.forceStartQuest(40317, '');
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(4000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#face1##p2440000#！#p2440002#！好像昏过去了！还好……看起来没有受伤，赶紧给他们松绑！", 41, 2400005, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk('嗯！', 41, 2400006, true, true);
          } else if (status === V++) {
            cm.setInGameDirectionMode(false, true, false);
            cm.dispose();
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
    cm.npc_ChangeController(2440020, "oid=25961", 279, 543, 2, 229, 329, 1, false, 0, false);
    cm.npc_ChangeController(2440003, "oid=2833534", 171, 535, 4, 121, 221, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=2833534", "summon", 0, 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;