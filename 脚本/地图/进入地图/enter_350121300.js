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
    cm.spawnMobLimit(8240168, 1, 1890, 9, 100);
    cm.spawnMobLimit(8240169, 1, 2049, -206, 100);
    cm.spawnMobLimit(8240168, 1, 2183, -338, 100);
    cm.spawnMobLimit(8240168, 1, 1353, -256, 100);
    cm.spawnMobLimit(8240167, 1, 1766, -126, 100);
    cm.spawnMobLimit(8240162, 1, 2262, 9, 100);
    cm.spawnMobLimit(8240162, 1, 1306, 9, 100);
    cm.spawnMobLimit(8240162, 1, 2067, 9, 100);
    cm.spawnMobLimit(8240162, 1, 1439, 9, 100);
    cm.spawnMobLimit(8240162, 1, 1106, 9, 100);
    cm.spawnMobLimit(8240162, 1, 2413, 9, 100);
    cm.spawnMobLimit(8240162, 1, 1867, 9, 100);
    cm.spawnMobLimit(8240162, 1, 1545, 9, 100);
    cm.spawnMobLimit(8240163, 1, 1640, -126, 100);
    cm.spawnMobLimit(8240163, 1, 2172, 9, 100);
    cm.spawnMobLimit(8240163, 1, 2416, -100, 100);
    cm.spawnMobLimit(8240163, 1, 2308, -338, 100);
    cm.spawnMobLimit(8240163, 1, 2196, -338, 100);
    cm.spawnMobLimit(8240163, 1, 2237, 9, 100);
    cm.spawnMobLimit(8240163, 1, 2330, -100, 100);
    cm.spawnMobLimit(8240163, 1, 2466, -338, 100);
    cm.spawnMobLimit(8240163, 1, 2052, -206, 100);
    cm.spawnMobLimit(8240163, 1, 2430, -100, 100);
    cm.spawnMobLimit(8240163, 1, 1516, -126, 100);
    cm.spawnMobLimit(8240163, 1, 1604, -256, 100);
    cm.spawnMobLimit(8240163, 1, 1412, -256, 100);
    cm.spawnMobLimit(8240163, 1, 1270, -256, 100);
    cm.spawnMobLimit(8240162, 1, 1647, 9, 100);
    cm.setInGameDirectionMode(false, true, false);
    cm.setNumberForQuestCustomData(33900, 3);
    cm.showMapleHero();
    cm.mapleHeroSetList([3]);
    cm.npc_ChangeController(1540801, "oid=263547026", 793, -50, 1, 743, 843, 0, true, 0, false);
    cm.npc_SetSpecialAction("oid=263547026", "summon", 0, 0);
    cm.npc_SetSpecialAction("oid=263547026", "special6", -1, 1);
    cm.spawnMobLimit(8240171, 1, 1890, 9, 100);
    cm.spawnMobLimit(8240171, 1, 1353, -256, 100);
    cm.spawnMobLimit(8240170, 1, 1766, -126, 100);
    cm.spawnMobLimit(8240172, 1, 2049, -206, 100);
    cm.spawnMobLimit(8240171, 1, 2183, -338, 100);
    cm.addPopupSay(1540804, 1000, "看好了，龙神。战斗过程中要始终保持精力集中，尽可能避免不必要的活动……", '', 0);
    cm.addPopupSay(1540805, 1000, "#face2#双，双弩精灵！动作轻一点！", '', 0);
    cm.addPopupSay(1540801, 1000, "#face2#哎，龙神，把腿拿开啊! 妨碍到我了！", '', 0);
    cm.addPopupSay(1540804, 1000, "#face0#集中精力！", '', 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;