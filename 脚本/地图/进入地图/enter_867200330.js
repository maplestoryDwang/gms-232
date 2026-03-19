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
    cm.setNumberForQuestInfo(64015, "chk7", 1);
    cm.npc_ChangeController(9400580, "oid=2280248", 3655, -1278, 32, 3605, 3705, 1, true, false);
    cm.npc_SetSpecialAction("oid=2280248", "summon", 0, 0);
    cm.npc_ChangeController(9400593, "oid=2280249", 3604, -1275, 30, 3554, 3654, 1, true, false);
    cm.npc_SetSpecialAction("oid=2280249", "summon", 0, 0);
    cm.npc_ChangeController(9400595, "oid=2280250", 3782, -1272, 35, 3732, 3832, 1, true, false);
    cm.npc_SetSpecialAction("oid=2280250", 'summon', 0, 0);
    cm.playerMessage(-1, "救出被困在警卫岗哨顶上的人们！");
    cm.obstacleFallRepeat(5, "莫奈德_小燃烧木残骸", "莫奈德_大燃烧木残骸", 5);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;