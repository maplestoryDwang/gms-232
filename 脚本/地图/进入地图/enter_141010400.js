var status = -1;
function action(f, E, e) {
  var V = cm.getEventManager("副本_列娜海峡_迷路的诺拉");
  var O = V.getMapFactoryMap(cm.getMapId());
  for (var b = 0; b < 15; b++) {
    var w = V.getMonster(3502000);
    V.registerMonster(w);
    O.spawnMonsterOnGroundBelow(w, new java.awt.Point(cm.rand(-800, 400), 180));
    var w = V.getMonster(3502001);
    V.registerMonster(w);
    O.spawnMonsterOnGroundBelow(w, new java.awt.Point(cm.rand(-800, 400), 180));
  }
  cm.sendOk("请消灭我周围的怪物！\r\n#b（消灭所有怪物后，再次对话。）", 1514002);
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;