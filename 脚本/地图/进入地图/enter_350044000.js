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
    cm.npc_ChangeController(1540446, "oid=36589", -437, 60, 5, -487, -387, 0, false, 0, false);
    cm.useItem(2210135, true);
    cm.effect_Text(["#fn黑体##fs20#埃德尔斯坦,  秘密基地"], [100, 3000, 4, 0, 0, 1, 4, 0, 0, 0]);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;