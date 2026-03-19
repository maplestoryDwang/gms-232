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
    cm.npc_ChangeController(9020010, "oid=56909", 1759, 29, 10, 1709, 1809, 1, false, false);
    cm.playerMessage(5, "今天入场了1次.");
    cm.updateInfoQuest(15794, "beforelv=230");
    cm.fieldEffect_ScreenMsg("killing/first/start");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;