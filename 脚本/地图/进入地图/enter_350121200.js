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
    cm.spawnMobLimit(8240167, 1, 540, 9, 100);
    cm.spawnMobLimit(8240169, 1, -517, -207, 100);
    cm.spawnMobLimit(8240168, 1, 164, -251, 100);
    cm.spawnMobLimit(8240168, 1, -327, 9, 100);
    cm.spawnMobLimit(8240168, 1, -954, -323, 100);
    cm.spawnMobLimit(8240167, 1, -432, -207, 100);
    cm.spawnMobLimit(8240162, 1, 384, 9, 100);
    cm.spawnMobLimit(8240162, 1, -677, 9, 100);
    cm.spawnMobLimit(8240162, 1, -379, 9, 100);
    cm.spawnMobLimit(8240162, 1, -233, 9, 100);
    cm.spawnMobLimit(8240162, 1, 217, 9, 100);
    cm.spawnMobLimit(8240162, 1, 28, 9, 100);
    cm.spawnMobLimit(8240162, 1, -795, 9, 100);
    cm.spawnMobLimit(8240162, 1, -956, 9, 100);
    cm.spawnMobLimit(8240162, 1, -131, 9, 100);
    cm.spawnMobLimit(8240163, 1, -1009, -102, 100);
    cm.spawnMobLimit(8240163, 1, -430, -207, 100);
    cm.spawnMobLimit(8240163, 1, -19, -133, 100);
    cm.spawnMobLimit(8240163, 1, 201, -251, 100);
    cm.spawnMobLimit(8240163, 1, -148, -133, 100);
    cm.spawnMobLimit(8240163, 1, 51, -251, 100);
    cm.spawnMobLimit(8240163, 1, -134, -251, 100);
    cm.spawnMobLimit(8240163, 1, -877, -102, 100);
    cm.spawnMobLimit(8240163, 1, 316, -251, 100);
    cm.spawnMobLimit(8240163, 1, -571, -207, 100);
    cm.spawnMobLimit(8240163, 1, -705, -207, 100);
    cm.spawnMobLimit(8240163, 1, -849, -207, 100);
    cm.spawnMobLimit(8240163, 1, -1057, -323, 100);
    cm.spawnMobLimit(8240163, 1, -817, -323, 100);
    cm.spawnMobLimit(8240163, 1, -733, -323, 100);
    cm.spawnMobLimit(8240163, 1, -950, -323, 100);
    cm.spawnMobLimit(8240162, 1, -579, 9, 100);
    cm.setInGameDirectionMode(false, true, false);
    cm.setNumberForQuestCustomData(33900, 2);
    cm.showMapleHero();
    cm.mapleHeroSetList([2]);
    cm.npc_ChangeController(1540801, "oid=288024756", 793, -50, 4, 743, 843, 0, true, 0, false);
    cm.npc_SetSpecialAction("oid=288024756", "summon", 0, 0);
    cm.npc_SetSpecialAction("oid=288024756", "special6", -1, 1);
    cm.spawnMobLimit(8240171, 1, 164, -251, 100);
    cm.spawnMobLimit(8240170, 1, 540, 9, 100);
    cm.spawnMobLimit(8240170, 1, -432, -207, 100);
    cm.spawnMobLimit(8240172, 1, -517, -207, 100);
    cm.spawnMobLimit(8240171, 1, -327, 9, 100);
    cm.addPopupSay(1540805, 1000, "#face2#呃啊！米乐，好痒啊！", '', 0);
    cm.addPopupSay(1540807, 1000, "#face2#啊呀呀……别拽我的角，主人！", '', 0);
    cm.addPopupSay(1540801, 1000, "#face2#都躲开，碍我的事了！", '', 0);
    cm.addPopupSay(1540803, 1000, "#face1#什么嘛，撇下我大家相处得那么好？", '', 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;