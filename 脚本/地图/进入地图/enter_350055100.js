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
    cm.updateInfoQuest(33245, "count=1");
    cm.setPartner(1, 1540741, 80001601, 0);
    cm.setPartner(1, 1540736, 80001602, 0);
    cm.setPartner(1, 1540737, 80001635, 0);
    cm.setPartner(1, 1540738, 80001615, 0);
    cm.setPartner(1, 1540739, 80001616, 0);
    cm.updateInfoQuest(33213, "area=D3_Z38;x=1;y=2");
    cm.updateInfoQuest(33213, "area=D3_Z38;x=1;y=1");
    cm.updateInfoQuest(33214, "ul=80");
    cm.updateInfoQuest(33214, 'ul=8080');
    cm.openUI(254);
    cm.dispose();
    cm.dynamicObjMoveSchedule(-5354, 1990, -5354, 2100, -5354, 1990, 1, 0, 15, 'bh_542_1', 4000, 0);
    cm.dynamicObjMoveSchedule(-5354, 2100, -5354, 1990, -5354, 2100, 1, 0, -15, "bh_542_1", 4000, 2000);
    cm.dynamicObjMoveSchedule(-4070, 1854, -4410, 1854, -4070, 1854, 1, -10, 0, "bh_542_2", 7000, 0);
    cm.dynamicObjMoveSchedule(-4410, 1854, -4070, 1854, -4410, 1854, 1, 10, 0, "bh_542_2", 7000, 3500);
    cm.dynamicObjMoveSchedule(-3920, 1900, -3580, 1900, -3920, 1900, 1, 10, 0, "bh_542_3", 8000, 0);
    cm.dynamicObjMoveSchedule(-3580, 1900, -3920, 1900, -3580, 1900, 1, -10, 0, 'bh_542_3', 8000, 4000);
    cm.dynamicObjMoveSchedule(-2595, 1785, -2845, 1785, -2595, 1785, 1, -10, 0, "bh_542_4", 6000, 0);
    cm.dynamicObjMoveSchedule(-2845, 1785, -2595, 1785, -2845, 1785, 1, 10, 0, "bh_542_4", 6000, 3000);
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;