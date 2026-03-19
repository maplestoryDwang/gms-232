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
  } else {
    if (status === V++) {
      var O = em.getMonster(9400035);
      O.setSize(600);
      cm.getMap().spawnMonsterOnGroundBelow(O, new java.awt.Point(765, -25));
      cm.addPopupSay(9111010, 5000, "动手吧，人类！我们也不会傻傻挨打的！", '', 0);
      cm.dispose();
    }
  }
}