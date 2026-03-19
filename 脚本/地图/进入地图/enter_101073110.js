var status = -1;
function action(f, E, e) {
  var V = cm.getEventManager("副本_妖精学院_解救2");
  var O = V.getMapFactoryMap(cm.getMapId());
  for (var b = 0; b < 20; b++) {
    var w = V.getMonster(3501007);
    V.registerMonster(w);
    O.spawnMonsterOnGroundBelow(w, new java.awt.Point(cm.rand(-800, 400), 180));
  }
  cm.sendOk("呜呜呜……请想办法对付这些怪物吧！", 1500019);
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;