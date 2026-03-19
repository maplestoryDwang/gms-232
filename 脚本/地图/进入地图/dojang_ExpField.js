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
  } else if (status === V++) {
    cm.npc_ChangeController(2091005, "oid=302484", 443, 7, 4, 393, 482, 1, false, 0, false);
    cm.playerMessage(5, "你进入了武陵道场身心修炼馆。尽情的放松吧。");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;