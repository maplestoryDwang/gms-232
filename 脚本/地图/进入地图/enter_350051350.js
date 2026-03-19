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
    cm.npc_ChangeController(1540731, "oid=39702", 967, 61, 10, 917, 1017, 1, false, 0, false);
    cm.updateInfoQuest(33213, "area=D1_Z05;x=3;y=2");
    cm.updateInfoQuest(33214, "ul=8287");
    cm.openUI(254);
    cm.setPartner(1, 1540732, 80001601, 0);
    cm.setPartner(1, 1540733, 80001594, 0);
    cm.setPartner(1, 1540734, 80001595, 0);
    cm.setPartner(1, 1540735, 80001596, 0);
    cm.setPartner(1, 1540736, 80001602, 0);
    cm.setPartner(1, 1540737, 80001635, 0);
    cm.setPartner(1, 1540738, 80001615, 0);
    cm.setPartner(1, 1540739, 80001616, 0);
    cm.onSetBackEffect('bh_1350Gr1', 1, 0, 0, 0);
    cm.地图特效_开关落脚点([13], [1]);
    cm.onSetBackEffect('bh_1350Gr2', 1, 0, 0, 0);
    cm.地图特效_开关落脚点([15], [1]);
    cm.onSetBackEffect("bh_1350Gr3", 1, 0, 0, 0);
    cm.地图特效_开关落脚点([14], [1]);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;