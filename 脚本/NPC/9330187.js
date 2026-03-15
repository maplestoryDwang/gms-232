var status = -1;
function action(f, W, U) {
  var V = cm.getMapId() - 744000000;
  if (V < 0 || V > 16) {
    cm.dispose();
    return;
  }
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  if (status == 0) {
    var w = em.getProperty("map_" + V);
    if (w === "clear") {
      cm.sendOk("你已经通过这里的考核了。去下一间教室吧。");
      cm.dispose();
    } else {
      cm.sendOk("误理力……不是，物理实力还不错。\r\n\r\n今天历史课就上到这里。");
    }
  } else {
    if (status == 1) {
      var N = Math.min(15, em.getNumberProperty("state"));
      cm.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/clear");
      cm.gainExp(1000 * N * cm.getPlayer().getLevel());
      cm.gainItem(4310105, parseInt(N * cm.getPlayer().getLevel() / 10));
      em.setProperty("map_" + V, "clear");
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}
function randomNum(f, W) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * f + 1, 10);
    case 2:
      return parseInt(Math.random() * (W - f + 1) + f, 10);
    default:
      return 0;
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;