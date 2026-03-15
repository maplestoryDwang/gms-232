var status = 0;
var selStr;
var sel;
var selitem;
var fail = ["你是认真的吗……？", "我在画画，可以不要一直防碍我吗？", "请不要这样，你会困扰我的。"];
function start() {
  status = -1;
  action(1, 0, 0);
}
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
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    var w = em.getProperty("map_" + V);
    if (w === "clear") {
      cm.sendOk("嘻嘻，我已经答应你了。你先去下一间教室吧！");
      cm.dispose();
    } else {
      selStr = "喔？来这边有什么事吗？#b\r\n";
      selStr += "#L1#那个……你有喜欢的人吗？#l\r\n";
      selStr += "#L2#我喜欢你#l\r\n";
      selStr += "#L3#跟我交往吧！！#l\r\n";
      selStr += "#L4#这样的感觉是第一次，最近看到你都心跳加快……#l\r\n";
      cm.askMenu(selStr);
    }
  } else {
    if (status == 1) {
      if (U == randomNum(1, 4)) {
        cm.sendOk("这样啊……事实上我也……我们交往看看。");
      } else {
        cm.sendOk(fail[randomNum(0, fail.length - 1)]);
        cm.dispose();
      }
    } else {
      if (status == 2) {
        var N = Math.min(15, em.getNumberProperty('state'));
        cm.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/clear");
        cm.gainExp(1000 * N * cm.getPlayer().getLevel());
        cm.gainItem(4310105, parseInt(N * cm.getPlayer().getLevel() / 10));
        em.setProperty("map_" + V, 'clear');
        cm.dispose();
      }
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