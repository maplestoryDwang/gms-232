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
  } else {
    if (status === V++) {
      cm.updateInfoQuest(33240, "skip6=1;skip8=1;switch=1;skip15=1;skip17=1;act5=350053500");
      cm.npc_ChangeController(1540490, "oid=26122707", 1734, -360, 26, 1684, 1784, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26122707", "summon", 0, 0);
      cm.npc_setForceFlip("oid=26122707", -1);
      cm.setAmbience("Ambience.img/fan", 100, 60);
      cm.sendNormalTalk_Bottom("你应该能把碎片好好塞进去吧？", 37, 1540490, false, true);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(350053550, 0, true);
      cm.npc_LeaveField("oid=26122707");
      cm.npc_LeaveField("oid=26122707");
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;