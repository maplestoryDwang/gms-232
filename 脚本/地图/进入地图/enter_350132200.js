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
    cm.addPopupSay(1540802, 2000, "#face1#是上面！大家小心点！", '', 0);
    cm.addPopupSay(1540805, 2000, "#face4#这怎么可能……\r\n我们完全被包围了！", '', 0);
    cm.addPopupSay(1540807, 2000, "#face1#敌人在源源不断地涌过来！", '', 0);
    cm.scheduleWarpTask(60, 350132300, 0, false, true);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;