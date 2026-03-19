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
    cm.npc_ChangeController(1540711, "oid=47364", 2908, 687, 30, 2858, 2958, 1, false, 0, false);
    cm.setPartner(1, 1540741, 80001601, 0);
    cm.setPartner(1, 1540736, 80001602, 0);
    cm.setPartner(1, 1540737, 80001635, 0);
    cm.setPartner(1, 1540738, 80001615, 0);
    cm.setPartner(1, 1540739, 80001616, 0);
    cm.onSetBackEffect('bh_554_fin', 1, 0, 0, 0);
    cm.地图特效_开关落脚点([39, 40, 41], [1, 1, 1]);
    cm.updateInfoQuest(33213, "area=D3_Z38;x=3;y=1");
    cm.updateInfoQuest(33213, "area=D3_Z38;x=3;y=2");
    cm.openUI(254);
    cm.setNumberForQuestInfo(33242, 'savePt', 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;