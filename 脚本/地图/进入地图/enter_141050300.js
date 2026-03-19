var status = -1;
function action(f, E, e) {
  var V = cm.getEventManager("副本_列娜海峡_Boss");
  var O = V.getMapFactoryMap(cm.getMapId());
  var b = V.getMonster(3502008);
  V.registerMonster(b);
  O.spawnMonsterOnGroundBelow(b, new java.awt.Point(353, 125));
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;