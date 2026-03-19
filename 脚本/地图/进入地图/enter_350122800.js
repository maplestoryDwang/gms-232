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
    cm.showMapleHero();
    cm.mapleHeroSandRising(0, 150, 298);
    cm.mapleHeroSandRising(1, 150, 298);
    cm.addPopupSay(1540805, 2500, "#face3#中间好像有些不太稳定的踏板，小心点！", '', 0);
    cm.onSetMapTagedObjectVisibleSchedule(1, '0', 64, 9000, 0);
    cm.onSetMapTagedObjectVisibleSchedule(1, '0', 0, 9000, 4500);
    cm.onSetMapTagedObjectVisibleSchedule(1, '1', 0, 8000, 2000);
    cm.onSetMapTagedObjectVisibleSchedule(1, '1', 64, 8000, 6000);
    cm.地图特效_开关落脚点_Schedule([34], [1], 8000, 0);
    cm.地图特效_开关落脚点_Schedule([34], [0], 8000, 4000);
    cm.地图特效_开关落脚点_Schedule([11, 12, 15, 18, 22, 29, 38], [1, 1, 1, 1, 1, 1, 1], 8500, 2000);
    cm.地图特效_开关落脚点_Schedule([11, 12, 15, 18, 22, 29, 38], [0, 0, 0, 0, 0, 0, 0], 8500, 4500);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;