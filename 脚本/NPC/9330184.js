var status = -1;
function action(f, W, U) {
  var V = cm.getEventManager("副本_枫之高校");
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
    if (N === "clear") {
      cm.sendOk("不打扰你学习了。你去下一间教室吧~");
      cm.dispose();
    } else if (N === 'done') {
      cm.sendOk("谢谢你帮助我。使用僵尸捕获术的话，可以收集到不少的图腾，嘿嘿嘿。\r\n\r\n僵尸都消失了，我帮你把门打开了。");
    } else {
      cm.sendOk("请帮帮我~僵尸竟然这么多……");
      cm.dispose();
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