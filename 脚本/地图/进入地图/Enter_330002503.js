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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(1530100, "oid=38386981", 502, 275, 34, 452, 552, 0, true, false);
      cm.npc_SetSpecialAction("oid=38386981", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
      cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1600);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("怎么会这样。那个实习老师长得能有多帅啊？我要亲自去见见他！", 37, 1530100, false, true);
        cm.effect_Voice("Voice2.img/Friends/CH5_02/9", 100);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=38386981", 1, 1000, 130);
          cm.inGameDirectionEvent_PushMoveInfo(0, 300, 200, 280);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2500);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else if (status === V++) {
              cm.dispose();
              cm.warp(330002504, 0);
              cm.inGameDirectionEvent_SetHideEffect(0);
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