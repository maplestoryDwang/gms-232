var status = -1;
var pass = ["希望你继续进步，变得更强。你做得真是太好了。", "你很强啊……虽然还是有点不足，但已经很不错了。"];
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
    if (w === 'clear') {
      if (V == 16) {
        cm.sendOk("你今天的学习已经圆满结束了。可以放学了。");
      } else {
        cm.sendOk("你已经通过这里的考核了。去下一间教室吧。");
      }
      cm.dispose();
    } else {
      cm.sendOk(pass[cm.rand(0, pass.length - 1)]);
    }
  } else {
    if (status == 1) {
      var N = Math.min(15, em.getNumberProperty("state"));
      if (V == 16) {
        cm.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/clearF");
      } else {
        cm.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/clear");
      }
      if (V == 1 || V == 2 || V == 10) {
        cm.playerMessage(5, "友情在战斗中磨炼。四大天王对你的好感提升了！");
        cm.gainItem(3800452, parseInt(N * cm.getPlayer().getLevel() / 10));
      }
      cm.gainExp(1000 * N * cm.getPlayer().getLevel());
      cm.gainItem(4310105, parseInt(N * cm.getPlayer().getLevel() / 10));
      em.setProperty("map_" + V, 'clear');
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;