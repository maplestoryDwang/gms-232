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
    cm.npc_ChangeController(9400570, "oid=204341", 2383, 275, 33, 2333, 2433, 1, false, false);
    cm.npc_ChangeController(9400580, "oid=204342", 1603, 275, 20, 1553, 1653, 4, true, false);
    cm.npc_ChangeController(9400595, 'oid=204343', 1695, 275, 17, 1645, 1745, 4, true, false);
    cm.dispelBuff(80011554);
    cm.dispelBuff(80011705);
    cm.onActionBarResult(6, 1009);
    cm.dispose();
  } else {
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;