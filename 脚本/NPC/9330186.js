var status = -1;
var ans = 0;
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
      var N = new Array(4);
      for (var u = 0; u < 4; u++) {
        N[u] = randomNum(-100, 100);
      }
      ans = N[0] + N[1] * N[2] + N[3];
      var Q = N[0];
      Q += N[1] * N[2] > 0 ? " + " : " - ";
      Q += Math.abs(N[1]);
      Q += " * ";
      Q += Math.abs(N[2]);
      Q += N[3] > 0 ? " + " : " - ";
      Q += Math.abs(N[3]);
      Q += " = ?";
      cm.askText(Q);
    }
  } else {
    if (status == 1) {
      if (parseInt(cm.getText()) == ans) {
        cm.sendOk("100分！很有实力喔？");
        var m = Math.min(15, em.getNumberProperty('state'));
        cm.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/clear");
        cm.gainExp(1000 * m * cm.getPlayer().getLevel());
        cm.gainItem(4310105, parseInt(m * cm.getPlayer().getLevel() / 10));
        em.setProperty('map_' + V, 'clear');
      } else {
        cm.sendOk('答错了！再好好想想！');
      }
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