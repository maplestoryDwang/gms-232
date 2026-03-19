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
    cm.getWeatherEffectNotice("YO！开始！使用传送门出发YO！", 287, 5000, 1);
    cm.setNumberForQuestInfo(100240, "progress", 0);
    cm.spawnMobLimit(9500641, 1, -235, -817, 3);
    cm.spawnMobLimit(9500641, 1, -341, -1806, 3);
    cm.spawnMobLimit(9500641, 1, -431, -1033, 3);
    cm.spawnMobLimit(9500642, 1, -332, -1516, 3);
    cm.spawnMobLimit(9500642, 1, -469, -1956, 3);
    cm.spawnMobLimit(9500642, 1, -300, -1314, 3);
    cm.spawnMobLimit(9500643, 1, -382, -1323, 2);
    cm.spawnMobLimit(9500643, 1, -470, -1594, 2);
    cm.spawnMobLimit(9500637, 1, -544, 40, 8);
    cm.spawnMobLimit(9500637, 1, -834, 40, 8);
    cm.spawnMobLimit(9500637, 1, -718, -200, 8);
    cm.spawnMobLimit(9500637, 1, -718, -380, 8);
    cm.spawnMobLimit(9500637, 1, -989, -200, 8);
    cm.spawnMobLimit(9500637, 1, -992, -380, 8);
    cm.spawnMobLimit(9500637, 1, -456, -380, 8);
    cm.spawnMobLimit(9500637, 1, -449, -200, 8);
    cm.spawnMobLimit(9500638, 1, -376, -3380, 3);
    cm.spawnMobLimit(9500638, 1, -651, -3620, 3);
    cm.spawnMobLimit(9500638, 1, -376, -3620, 3);
    cm.onSetBackEffectSchedule('trick01', 1, 1, 0, 0, 8000, 4000);
    cm.onSetBackEffectSchedule("trick02", 1, 1, 0, 0, 9000, 4000);
    cm.onSetBackEffectSchedule('trick03', 1, 0, 0, 0, 8500, 5500);
    cm.onSetBackEffectSchedule('trick04', 1, 1, 0, 0, 8000, 4000);
    cm.地图特效_开关落脚点_Schedule([561, 566], [1, 1], 8000, 0);
    cm.地图特效_开关落脚点_Schedule([562], [1], 9000, 0);
    cm.地图特效_开关落脚点_Schedule([563], [0], 8500, 1500);
    cm.onSetBackEffectSchedule('trick01', 1, 0, 0, 0, 8000, 7500);
    cm.onSetBackEffectSchedule('trick02', 1, 0, 0, 0, 9000, 8500);
    cm.onSetBackEffectSchedule("trick03", 1, 1, 0, 0, 8500, 9500);
    cm.onSetBackEffectSchedule("trick04", 1, 0, 0, 0, 8000, 7500);
    cm.地图特效_开关落脚点_Schedule([561, 566], [0, 0], 8000, 3500);
    cm.地图特效_开关落脚点_Schedule([562], [0], 9000, 4500);
    cm.地图特效_开关落脚点_Schedule([563], [1], 8500, 5500);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;