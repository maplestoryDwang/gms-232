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
    cm.npc_ChangeController(9130091, "oid=1", -424, -15, 15, -474, -374, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=1", "summon", 0, 0);
    cm.addNumberForQuestInfo(57472, 'bNum', 1);
    cm.addNumberForQuestInfo(57472, "eNum", 1);
    cm.dispose();
  }
}