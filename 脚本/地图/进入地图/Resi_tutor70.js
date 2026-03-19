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
  } else if (status === V++) {
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, true, false);
    cm.npc_ChangeController(2159008, "oid=248476", -362, 28, 10, -412, -312, 0, false, 0, false);
    cm.npc_ChangeController(2159009, 'oid=248477', 131, 28, 6, 81, 181, 1, false, 0, false);
    cm.npc_ChangeController(2159007, 'oid=248478', 222, 28, 7, 172, 272, 1, false, 0, false);
    cm.effect_Direction("Effect/Direction4.img/Resistance/TalkJ", 0, 0, 0);
    cm.dispose();
  }
}