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
      cm.spawnMobLimit(8240181, 1, -284, 87, 100);
      cm.spawnMobLimit(8240181, 1, -444, 55, 100);
      cm.spawnMobLimit(8240181, 1, 40, 87, 100);
      cm.spawnMobLimit(8240181, 1, -148, -97, 100);
      cm.spawnMobLimit(8240181, 1, -286, -79, 100);
      cm.spawnMobLimit(8240181, 1, -405, -63, 100);
      cm.spawnMobLimit(8240181, 1, -507, -31, 100);
      cm.spawnMobLimit(8240181, 1, 217, 42, 100);
      cm.showMapleHero();
      cm.onSetMapTagedObjectVisible(1, 'pt00', 512);
      cm.getTopMsgFont("只有将区域内的所有怪物全都消灭掉才能够前往下一地区。", 3, 20, 20, 0);
      cm.spawnMobLimit(8240181, 1, -278, -352, 100);
      cm.spawnMobLimit(8240181, 1, 255, -720, 100);
      cm.spawnMobLimit(8240181, 1, 109, -594, 100);
      cm.spawnMobLimit(8240181, 1, 77, -311, 100);
      cm.spawnMobLimit(8240181, 1, -121, -336, 100);
      cm.spawnMobLimit(8240181, 1, -121, -547, 100);
      cm.spawnMobLimit(8240181, 1, -321, -521, 100);
      cm.spawnMobLimit(8240181, 1, 57, -755, 100);
      cm.spawnMobLimit(8240181, 1, -176, -799, 100);
      cm.spawnMobLimit(8240181, 1, 29, -761, 100);
      cm.spawnMobLimit(8240181, 1, -335, -519, 100);
      cm.spawnMobLimit(8240181, 1, -52, -326, 100);
      cm.spawnMobLimit(8240184, 1, 294, -271, 100);
      cm.spawnMobLimit(8240184, 1, -554, -468, 100);
      cm.spawnMobLimit(8240184, 1, 300, -715, 100);
      var b = cm.getNumberFromQuestInfo(34021, "hero2");
      cm.addPopupSay(1540807, 1000, "#face2#到底要走到什么时候？上坡真的很累……", '', 0);
      cm.addPopupSay(1540805, 1000, "#face2#米乐，你不是在飞吗！走路可是更累呢！", '', 0);
      cm.addPopupSay(1540801 + b, 1000, "#face0#目标就是顶峰，大家加把劲！", '', 0);
      cm.spawnMobLimit(8240181, 1, -132, -929, 100);
      cm.spawnMobLimit(8240181, 1, -221, -908, 100);
      cm.spawnMobLimit(8240181, 1, -566, -859, 100);
      cm.spawnMobLimit(8240181, 1, -517, -867, 100);
      cm.spawnMobLimit(8240182, 1, -70, -1164, 100);
      cm.spawnMobLimit(8240181, 1, 81, -2163, 100);
      cm.spawnMobLimit(8240181, 1, -254, -2219, 100);
      cm.spawnMobLimit(8240181, 1, 340, -2123, 100);
      cm.spawnMobLimit(8240181, 1, -487, -2225, 100);
      cm.spawnMobLimit(8240181, 1, -370, -2238, 100);
      cm.spawnMobLimit(8240181, 1, 272, -2132, 100);
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;