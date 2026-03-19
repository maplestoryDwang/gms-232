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
      cm.npc_ChangeController(2210013, 'oid=294951', 284, 95, 1, 234, 334, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.sendNormalTalk("挺厉害的嘛？击退了所有的黄蜂。", 1, 2210004, false, true);
      cm.curNodeEventEnd(true);
    } else if (status === V++) {
      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
      cm.warp(240092000, 0, false);
      cm.setInGameDirectionMode(false, true, false);
      cm.forceStartQuest(31342, '');
      cm.forceStartQuest(31357, 'on');
      cm.dispose();
    }
  }
}