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
  } else if (status === V++) {
    cm.spawnMobLimit(8240133, 1, 3, 308, 100);
    cm.spawnMobLimit(8240133, 1, 566, 159, 100);
    cm.spawnMobLimit(8240133, 1, 389, 159, 100);
    cm.spawnMobLimit(8240133, 1, -82, 308, 100);
    cm.spawnMobLimit(8240133, 1, 34, 131, 100);
    cm.spawnMobLimit(8240133, 1, -83, 131, 100);
    cm.spawnMobLimit(8240133, 1, 745, 399, 100);
    cm.spawnMobLimit(8240133, 1, 1011, 399, 100);
    cm.spawnMobLimit(8240133, 1, 919, 46, 100);
    cm.spawnMobLimit(8240133, 1, 760, 46, 100);
    cm.spawnMobLimit(8240133, 1, 484, 320, 100);
    cm.spawnMobLimit(8240133, 1, 475, 159, 100);
    cm.spawnMobLimit(8240133, 1, 315, 399, 100);
    cm.spawnMobLimit(8240133, 1, 157, 399, 100);
    cm.spawnMobLimit(8240133, 1, -14, 399, 100);
    cm.spawnMobLimit(8240133, 1, -196, 399, 100);
    cm.spawnMobLimit(8240133, 1, -254, 131, 100);
    cm.spawnMobLimit(8240133, 1, -210, 308, 100);
    cm.spawnMobLimit(8240133, 1, -359, 308, 100);
    cm.spawnMobLimit(8240133, 1, -479, 399, 100);
    cm.spawnMobLimit(8240133, 1, -639, 399, 100);
    cm.showMapleHero();
    cm.addPopupSay(1540807, 2500, "#face1#从前来的时候，暴风雪还没这么大……", '', 0);
    cm.addPopupSay(1540805, 2500, "#face3#这就表明这座岛上正在发生着什么非同寻常的事情。", '', 0);
    cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
    cm.fieldEffect_ScreenMsg("aswan/stageEff/number/2");
    cm.getTopMsgFont("只有将区域内的所有怪物全都消灭掉才能够前往下一地区。", 3, 20, 20, 0);
    cm.addPopupSay(1540805, 1000, "#face6#暴风雪太大了，好冷……", '', 0);
    cm.addPopupSay(1540807, 1000, "我给你吹口气吧？", '', 0);
    cm.addPopupSay(1540805, 1000, "#face2#算了！！", '', 0);
    cm.spawnMobLimit(8240133, 1, 1543, 181, 100);
    cm.spawnMobLimit(8240133, 1, 1402, 181, 100);
    cm.spawnMobLimit(8240133, 1, 1373, 92, 100);
    cm.spawnMobLimit(8240133, 1, 1405, 181, 100);
    cm.spawnMobLimit(8240133, 1, 1274, 290, 100);
    cm.spawnMobLimit(8240133, 1, 1377, 290, 100);
    cm.spawnMobLimit(8240133, 1, 1432, 290, 100);
    cm.spawnMobLimit(8240133, 1, 1689, 399, 100);
    cm.spawnMobLimit(8240133, 1, 1895, 399, 100);
    cm.spawnMobLimit(8240133, 1, 2002, 399, 100);
    cm.spawnMobLimit(8240133, 1, 1909, 399, 100);
    cm.spawnMobLimit(8240133, 1, 1535, 92, 100);
    cm.spawnMobLimit(8240133, 1, 1465, 92, 100);
    cm.spawnMobLimit(8240133, 1, 1043, 46, 100);
    cm.dispose();
    cm.snowStormRepeat();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;