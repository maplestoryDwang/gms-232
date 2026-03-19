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
    cm.setNumberForQuestCustomData(33900, 1);
    cm.mapleHeroBecomeNpc(4, 0);
    cm.onActionBarResult(6, -1);
    cm.onActionBarResult(5, 27);
    cm.npc_ChangeController(1540823, "oid=287920708", 100, 313, 4, 50, 150, 1, true, 0, false);
    cm.npc_SetSpecialAction("oid=287920708", "summon", 0, 0);
    cm.setPartner(1, 1540784, 80001903, 0);
    cm.npcMove(1540823, 0, -182, 0);
    cm.addPopupSay(1540802, 1000, "#face0#小孩待在后面就好~会受伤的！", '', 0);
    cm.spawnMobLimit(8240134, 1, -940, 351, 100);
    cm.spawnMobLimit(8240134, 1, -880, 351, 100);
    cm.spawnMobLimit(8240134, 1, -820, 351, 100);
    cm.spawnMobLimit(8240134, 1, -760, 351, 100);
    cm.spawnMobLimit(8240134, 1, -700, 351, 100);
    cm.spawnMobLimit(8240134, 1, -600, 351, 100);
    cm.spawnMobLimit(8240134, 1, -560, 351, 100);
    cm.spawnMobLimit(8240134, 1, -500, 351, 100);
    cm.spawnMobLimit(8240134, 1, -400, 351, 100);
    cm.spawnMobLimit(8240134, 1, -400, 351, 100);
    cm.spawnMobLimit(8240134, 1, -300, 351, 100);
    cm.spawnMobLimit(8240134, 1, -300, 351, 100);
    cm.spawnMobLimit(8240134, 1, -200, 351, 100);
    cm.spawnMobLimit(8240134, 1, -200, 351, 100);
    cm.spawnMobLimit(8240134, 1, -100, 351, 100);
    cm.spawnMobLimit(8240134, 1, 0, 351, 100);
    cm.spawnMobLimit(8240134, 1, 0, 351, 100);
    cm.spawnMobLimit(8240134, 1, 0, 351, 100);
    cm.spawnMobLimit(8240134, 1, 100, 351, 100);
    cm.spawnMobLimit(8240134, 1, 100, 351, 100);
    cm.spawnMobLimit(8240134, 1, 200, 351, 100);
    cm.spawnMobLimit(8240134, 1, 200, 351, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;