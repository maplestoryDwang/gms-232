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
    cm.npc_ChangeController(1540743, "oid=41019", 1441, 1917, 65, 1391, 1491, 1, false, 0, false);
    cm.setPartner(1, 1540741, 80001601, 0);
    cm.setPartner(1, 1540736, 80001602, 0);
    cm.setPartner(1, 1540737, 80001635, 0);
    cm.setPartner(1, 1540738, 80001615, 0);
    cm.setPartner(1, 1540739, 80001616, 0);
    cm.updateInfoQuest(33213, "area=D3_Z11;x=2;y=2");
    cm.updateInfoQuest(33214, "ul=6080");
    cm.openUI(254);
    cm.onSetBackEffect("bh_542_1", 1, 1, 0, 0);
    cm.地图特效_开关落脚点([72], [0]);
    cm.onSetBackEffect("bh_542_2", 1, 0, 0, 0);
    cm.地图特效_开关落脚点([73], [1]);
    cm.onSetBackEffect("bh_542_3", 1, 0, 0, 0);
    cm.地图特效_开关落脚点([74], [1]);
    cm.onSetBackEffect("bh_542_4", 1, 0, 0, 0);
    cm.地图特效_开关落脚点([75], [1]);
    cm.npc_ChangeController(1540712, "oid=26165786", -757, 2190, 119, -807, -707, 0, false, 0, false);
    cm.npc_SetSpecialAction("oid=26165786", "summon", 0, 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;