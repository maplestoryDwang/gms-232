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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(2074155, "oid=1943158", 833, 43, 23, 783, 883, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1943158", "summon", 0, 0);
      cm.npc_ChangeController(2074100, "oid=1943159", 653, -11, 22, 603, 703, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1943159", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 713, 50);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("求你了……求你别这样。", 37, 2074155, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("我来帮你，求你了。", 37, 2074155, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("不可以，不可以，不可以！", 37, 2074155, true, true);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 300, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else if (status === V++) {
              cm.dispose();
              cm.warp(224000077, 0, true);
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