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
    cm.npc_ChangeController(1102112, "oid=218924", 490, 1091, 82, 440, 540, 1, false, 0, false);
    cm.npc_ChangeController(1104300, "oid=218925", 553, 1310, 88, 503, 603, 1, false, 0, false);
    cm.dispose();
  }
}