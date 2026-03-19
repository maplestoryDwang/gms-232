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
      cm.useItem(2210191, false);
      cm.npc_ChangeController(2074040, "oid=1943019", 694, -11, 8, 644, 744, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1943019", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face2#搞什么……这是……", 37, 2074100, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face2#这难道是梦吗，还是说真的是地狱？……", 37, 2074100, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else if (status === V++) {
            cm.setInGameDirectionMode(false, true, false);
            cm.dispose();
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