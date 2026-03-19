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
    cm.npc_ChangeController(3003401, "oid=2008733", -1218, -278, 28, -1268, -1168, 1, false, false);
    cm.npc_SetSpecialAction("oid=2008733", "summon", 0, 0);
    cm.npc_SetSpecialAction("oid=2008733", "special3", -1, 1);
    cm.addPopupSay(0, 2500, "#face0#快清醒点！", '', 0);
    cm.addPopupSay(3003405, 2500, "#face0#没辙了吧。哈哈哈！！只要暴走不停止，你的力量就会一直被我吸走！", '', 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;