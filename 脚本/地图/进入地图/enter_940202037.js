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
    cm.npc_ChangeController(3001310, 'oid=425210', -1060, 790, 8, -1110, -1010, 0, true, false);
    cm.npc_SetSpecialAction("oid=425210", "summon", 0, 0);
    cm.npc_ChangeController(3001311, "oid=425211", -1120, 790, 8, -1170, -1070, 0, true, false);
    cm.npc_SetSpecialAction("oid=425211", 'summon', 0, 0);
    cm.npc_ChangeController(3001307, "oid=425212", -1200, 790, 8, -1250, -1150, 0, true, false);
    cm.npc_SetSpecialAction("oid=425212", "summon", 0, 0);
    cm.npc_ChangeController(3001308, "oid=425213", -1280, 790, 8, -1330, -1230, 0, true, false);
    cm.npc_SetSpecialAction("oid=425213", "summon", 0, 0);
    cm.updateInfoQuest(34820, "kc=0");
    cm.playerMessage(-1, "消灭区域内的所有怪物后，才能前往其他地区。");
    cm.spawnMobMultipler(2400419, 1, 1, -350, 763);
    cm.spawnMobMultipler(2400419, 1, 1, -200, 763);
    cm.spawnMobMultipler(2400419, 1, 1, -50, 763);
    cm.spawnMobMultipler(2400419, 1, 1, 100, 763);
    cm.spawnMobMultipler(2400419, 1, 1, 250, 763);
    cm.dispose();
  } else {
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;