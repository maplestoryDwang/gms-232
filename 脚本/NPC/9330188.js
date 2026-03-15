var status = -1;
function action(f, W, U) {
  var V = cm.getEventManager('副本_枫之高校');
  var w = cm.getMapId() - 744000000;
  if (w < 0 || w > 16) {
    cm.dispose();
    return;
  }
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  if (status == 0) {
    var N = V.getProperty("map_" + w);
    if (N === 'clear') {
      cm.sendOk("你已经通过这里的考核了。去下一间教室吧。");
      cm.dispose();
    } else {
      cm.sendOk("我们的祖先就是这样战斗的。好好记住。\r\n\r\n今天历史课就上到这里。");
    }
  } else {
    if (status == 1) {
      var u = Math.min(15, V.getNumberProperty("state"));
      cm.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/clear");
      cm.gainExp(1000 * u * cm.getPlayer().getLevel());
      cm.gainItem(4310105, parseInt(u * cm.getPlayer().getLevel() / 10));
      V.setProperty("map_" + w, "clear");
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