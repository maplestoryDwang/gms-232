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
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 860, 360);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074143, "oid=2607075", 806, 322, 525, 756, 856, 0, false, 500, false);
        cm.npc_SetSpecialAction("oid=2607075", "summon", 0, 0);
        cm.npc_ChangeController(2074100, "oid=2607076", 916, 313, 526, 866, 966, 1, true, 500, false);
        cm.npc_SetSpecialAction("oid=2607076", 'summon', 0, 0);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.sendNormalTalk_Bottom("你……在看着吗？", 37, 2074143, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face3#傻瓜……", 37, 2074100, true, true);
        } else if (status === V++) {
          cm.forceStartQuest(30445, '');
          cm.dispose();
          cm.warp(224000000, 27, true);
          cm.setInGameDirectionMode(false, true, false);
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