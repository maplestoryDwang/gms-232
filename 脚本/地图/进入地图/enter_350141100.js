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
      cm.spawnMobLimit(8240181, 1, 730, -1155, 100);
      cm.spawnMobLimit(8240181, 1, 550, -1193, 100);
      cm.spawnMobLimit(8240181, 1, 349, -1227, 100);
      cm.spawnMobLimit(8240181, 1, 3, -1236, 100);
      cm.spawnMobLimit(8240181, 1, -217, -1262, 100);
      cm.spawnMobLimit(8240181, 1, -416, -1298, 100);
      cm.spawnMobLimit(8240181, 1, -592, -1317, 100);
      cm.spawnMobLimit(8240179, 1, 602, -449, 100);
      cm.spawnMobLimit(8240179, 1, 412, -406, 100);
      cm.spawnMobLimit(8240179, 1, 213, -380, 100);
      cm.spawnMobLimit(8240179, 1, 26, -336, 100);
      cm.spawnMobLimit(8240179, 1, -137, -301, 100);
      cm.spawnMobLimit(8240179, 1, -322, -302, 100);
      cm.spawnMobLimit(8240179, 1, -489, -276, 100);
      cm.spawnMobLimit(8240179, 1, -664, -240, 100);
      cm.spawnMobLimit(8240179, 1, -810, -198, 100);
      cm.spawnMobLimit(8240179, 1, 488, -1050, 100);
      cm.spawnMobLimit(8240179, 1, 329, -1019, 100);
      cm.spawnMobLimit(8240179, 1, 119, -991, 100);
      cm.spawnMobLimit(8240179, 1, -57, -942, 100);
      cm.spawnMobLimit(8240179, 1, -257, -926, 100);
      cm.spawnMobLimit(8240179, 1, -449, -905, 100);
      cm.spawnMobLimit(8240179, 1, -629, -874, 100);
      cm.spawnMobLimit(8240179, 1, -816, -820, 100);
      cm.spawnMobLimit(8240180, 1, 586, -572, 100);
      cm.spawnMobLimit(8240180, 1, 413, -601, 100);
      cm.spawnMobLimit(8240180, 1, 269, -621, 100);
      cm.spawnMobLimit(8240180, 1, 31, -625, 100);
      cm.spawnMobLimit(8240180, 1, -187, -643, 100);
      cm.spawnMobLimit(8240180, 1, -387, -678, 100);
      cm.spawnMobLimit(8240180, 1, -674, -237, 100);
      cm.spawnMobLimit(8240180, 1, -542, -695, 100);
      cm.showMapleHero();
      cm.getTopMsgFont("只有将区域内的所有怪物全都消灭掉才能够前往下一地区。", 3, 20, 20, 0);
      var b = cm.getNumberFromQuestInfo(34021, "hero2");
      cm.addPopupSay(1540801 + b, 1000, "龙神，我感觉到上面的气息越来越强烈。", '', 0);
      cm.addPopupSay(1540807, 1000, "#face2#主人，我好害怕……", '', 0);
      cm.addPopupSay(1540805, 1000, "不用怕，米乐，有我呢！", '', 0);
      cm.dispose();
      cm.onSetBackEffectSchedule("tag01", 1, 0, 0, 0, 8000, 0);
      cm.onSetBackEffectSchedule("tag01", 1, 1, 0, 0, 8000, 4000);
      cm.onSetBackEffectSchedule("tag02", 1, 1, 0, 0, 8000, 0);
      cm.onSetBackEffectSchedule("tag02", 1, 0, 0, 0, 8000, 4000);
      cm.onSetBackEffectSchedule("tag03", 1, 0, 0, 0, 8000, 0);
      cm.onSetBackEffectSchedule("tag03", 1, 1, 0, 0, 8000, 4000);
      cm.地图特效_开关落脚点_Schedule([105, 107, 110, 112], [0, 0, 0, 0], 9000, 0);
      cm.地图特效_开关落脚点_Schedule([105, 107, 110, 112], [1, 1, 1, 1], 9000, 6000);
      cm.地图特效_开关落脚点_Schedule([111, 114, 103, 106], [1, 1, 1, 1], 7000, 2000);
      cm.地图特效_开关落脚点_Schedule([111, 114, 103, 106], [0, 0, 0, 0], 7000, 4000);
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;