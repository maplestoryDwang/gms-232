var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.spawnMobLimit(8240176, 1, 1776, -868, 100);
      cm.spawnMobLimit(8240176, 1, 1904, -868, 100);
      cm.spawnMobLimit(8240176, 1, 1589, -868, 100);
      cm.spawnMobLimit(8240176, 1, 1372, -868, 100);
      cm.spawnMobLimit(8240176, 1, 1152, -868, 100);
      cm.spawnMobLimit(8240176, 1, 913, -868, 100);
      cm.spawnMobLimit(8240176, 1, 800, -868, 100);
      cm.spawnMobLimit(8240176, 1, 293, -868, 100);
      cm.spawnMobLimit(8240175, 1, 1685, -868, 100);
      cm.spawnMobLimit(8240175, 1, 1689, -868, 100);
      cm.spawnMobLimit(8240175, 1, 1440, -868, 100);
      cm.spawnMobLimit(8240175, 1, 1233, -868, 100);
      cm.spawnMobLimit(8240175, 1, 1022, -868, 100);
      cm.spawnMobLimit(8240175, 1, 818, -868, 100);
      cm.spawnMobLimit(8240175, 1, 645, -868, 100);
      cm.spawnMobLimit(8240175, 1, 474, -868, 100);
      cm.spawnMobLimit(8240174, 1, 1999, -868, 100);
      cm.spawnMobLimit(8240174, 1, 1787, -868, 100);
      cm.spawnMobLimit(8240174, 1, 1549, -868, 100);
      cm.spawnMobLimit(8240174, 1, 1329, -868, 100);
      cm.spawnMobLimit(8240174, 1, 1109, -868, 100);
      cm.spawnMobLimit(8240174, 1, 910, -868, 100);
      cm.spawnMobLimit(8240174, 1, 728, -868, 100);
      cm.spawnMobLimit(8240174, 1, 561, -868, 100);
      cm.spawnMobLimit(8240174, 1, 405, -868, 100);
      cm.showMapleHero();
      cm.sendNewEffects(19, [0]);
    } else if (status === V++) {
      cm.addPopupSay(1540804, 2500, "既然有战神负责后方，有这个成员在，绝对可以冲出去了。", '', 0);
      cm.addPopupSay(1540807, 2500, "主人，加油！阿拉布克索斯的本体就在前面！", '', 0);
      cm.addPopupSay(1540805, 2500, "#face3#那叫阿布拉克萨斯！", '', 0);
      cm.addPopupSay(1540807, 2500, "阿布……阿布拉……反正都是差不多的音呗！", '', 0);
      cm.spawnMobLimit(8240134, 1, 1776, -868, 100);
      cm.spawnMobLimit(8240134, 1, 1904, -868, 100);
      cm.spawnMobLimit(8240134, 1, 1589, -868, 100);
      cm.spawnMobLimit(8240134, 1, 1372, -868, 100);
      cm.spawnMobLimit(8240134, 1, 1152, -868, 100);
      cm.spawnMobLimit(8240134, 1, 913, -868, 100);
      cm.spawnMobLimit(8240134, 1, 800, -868, 100);
      cm.spawnMobLimit(8240134, 1, 293, -868, 100);
      cm.spawnMobLimit(8240165, 1, 1685, -868, 100);
      cm.spawnMobLimit(8240165, 1, 1689, -868, 100);
      cm.spawnMobLimit(8240165, 1, 1440, -868, 100);
      cm.spawnMobLimit(8240165, 1, 1233, -868, 100);
      cm.spawnMobLimit(8240165, 1, 1022, -868, 100);
      cm.spawnMobLimit(8240165, 1, 818, -868, 100);
      cm.spawnMobLimit(8240165, 1, 645, -868, 100);
      cm.spawnMobLimit(8240165, 1, 474, -868, 100);
      cm.spawnMobLimit(8240164, 1, 1999, -868, 100);
      cm.spawnMobLimit(8240164, 1, 1787, -868, 100);
      cm.spawnMobLimit(8240164, 1, 1549, -868, 100);
      cm.spawnMobLimit(8240164, 1, 1329, -868, 100);
      cm.spawnMobLimit(8240164, 1, 1109, -868, 100);
      cm.spawnMobLimit(8240164, 1, 910, -868, 100);
      cm.spawnMobLimit(8240164, 1, 728, -868, 100);
      cm.spawnMobLimit(8240164, 1, 561, -868, 100);
      cm.spawnMobLimit(8240164, 1, 405, -868, 100);
      cm.spawnMobLimit(8240164, 1, 1284, -868, 100);
      cm.spawnMobLimit(8240164, 1, 1291, -868, 100);
      cm.spawnMobLimit(8240134, 1, 895, -868, 100);
      cm.spawnMobLimit(8240134, 1, 727, -868, 100);
      cm.spawnMobLimit(8240134, 1, 334, -868, 100);
      cm.spawnMobLimit(8240134, 1, 92, -868, 100);
      cm.spawnMobLimit(8240165, 1, 666, -868, 100);
      cm.spawnMobLimit(8240165, 1, 805, -868, 100);
      cm.spawnMobLimit(8240165, 1, 499, -868, 100);
      cm.spawnMobLimit(8240165, 1, 570, -868, 100);
      cm.spawnMobLimit(8240165, 1, 446, -868, 100);
      cm.spawnMobLimit(8240164, 1, 580, -868, 100);
      cm.spawnMobLimit(8240164, 1, 92, -868, 100);
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;