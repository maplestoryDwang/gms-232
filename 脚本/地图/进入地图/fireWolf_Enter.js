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
      if (cm.getMap().countMonsterById(9101078) == 0) {
        var O = em.getMonster(9101078);
        cm.getMap().spawnMonsterOnGroundBelow(O, new java.awt.Point(202, 303));
      }
      cm.updateInfoQuest(993000501, '0');
      cm.getMap().startSimpleMapEffect("要消灭火焰狼的勇士增多了呢，赶紧攻击那个家伙！能够停留的时间就只有30秒！", 5120159);
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;