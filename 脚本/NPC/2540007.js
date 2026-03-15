var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  status++;
  var V = em == null ? null : em.getProperty("stage30");
  if (V == null || V === "start") {
    var w = em.getMapFactoryMap(cm.getMapId());
    var N = em.getMonster(9309200);
    w.spawnMonsterOnGroundBelow(N, new java.awt.Point(155, 155));
    cm.getMap().getWeatherEffectNotice("胆小的狮子从黑暗中现身了。请你去追踪逃跑的狮子！", 147, 60000, 1);
    em.setProperty("stage30", 'fighting');
  }
  cm.dispose();
}