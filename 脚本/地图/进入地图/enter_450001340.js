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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.forceStartQuest(34119, '');
      cm.fieldEffect_Tremble(1, 500, 30);
      cm.spawnMobLimit(8641010, 1, 720, 177, 1);
      cm.npc_ChangeController(3003113, "oid=376112581", 0, 164, 1, -50, 50, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=376112581", "summon", 0, 0);
      cm.setNpcSpecialActionReset("oid=376112581");
      cm.npc_SetSpecialAction("oid=376112581", 'lying', -1, 1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
      cm.scheduleWarpTask(600, 450001219);
    } else if (status === V++) {
      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(false, true, false);
      cm.getTopMsgFont("卡奥受到了阿勒玛的攻击，倒下了。请打倒阿勒玛，离开这里吧。", 3, 20, 8, 0, 0);
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;