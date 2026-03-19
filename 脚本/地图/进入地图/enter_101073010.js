var status = -1;
function action(f, E, e) {
  var V = cm.getEventManager("副本_妖精学院_解救1");
  var O = V.getMapFactoryMap(cm.getMapId());
  for (var b = 0; b < 20; b++) {
    var w = V.getMonster(3501006);
    V.registerMonster(w);
    O.spawnMonsterOnGroundBelow(w, new java.awt.Point(cm.rand(-800, 400), 180));
  }
  cm.sendOk("救命啊……那些怪物吓得我一动都不敢动！\r\n\r\n#b（消灭所有怪物后，再进行对话吧。）", 1500017);
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;