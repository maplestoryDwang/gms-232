var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.npc_ChangeController(1102106, "oid=218919", -162, -82, 8, -212, -112, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.fieldEffect_ScreenMsg("nightmare/brokenMirror");
      cm.inGameDirectionEvent_AskAnswerTime(4200);
    } else if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
      cm.setInGameDirectionMode(false, true, false);
      cm.spawnMobLimit(9300742, 1, 204, 109, 100);
      cm.fieldEffect_ScreenMsg("nightmare/wakeup");
      cm.scheduleWarpTask(40, 130000000);
      cm.addPopupSay(0, 6000, "击败邪恶的希纳斯，等待时间结束。");
      cm.dispose();
    }
  }
}