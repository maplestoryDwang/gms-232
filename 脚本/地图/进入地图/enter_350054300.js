var status = -1;
var selectionLog = [];
function action(P, q, B) {
  if (status == 0 && P == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = B;
  var U = -1;
  if (status <= U++) {
    cm.dispose();
  } else if (status === U++) {
    cm.getMap().killAllMonsters(true);
    cm.setPartner(1, 1540741, 80001601, 0);
    cm.setPartner(1, 1540736, 80001602, 0);
    cm.setPartner(1, 1540737, 80001635, 0);
    cm.setPartner(1, 1540738, 80001615, 0);
    cm.setPartner(1, 1540739, 80001616, 0);
    cm.updateInfoQuest(33213, "area=D3_Z11;x=1;y=1");
    cm.updateInfoQuest(33214, "ul=2080");
    cm.openUI(254);
    if (cm.getNumberFromQuestInfo(33242, "p43") == 3) {
      cm.npc_ChangeController(1540713, "oid=26154205", -3830, -2503, 115, -3880, -3780, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=26154205", "summon", 0, 0);
      cm.onSetBackEffect('bh_543_1', 1, 0, 0, 0);
      cm.地图特效_开关落脚点([67], [1]);
      cm.npc_ChangeController(1540713, "oid=26155064", -3830, -1501, 123, -3880, -3780, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=26155064", "summon", 0, 0);
      cm.onSetBackEffect("bh_543_2", 1, 0, 0, 0);
      cm.地图特效_开关落脚点([68], [1]);
      cm.npc_ChangeController(1540713, "oid=26156322", -3830, -502, 159, -3880, -3780, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=26156322", "summon", 0, 0);
      cm.onSetBackEffect("bh_543_3", 1, 0, 0, 0);
      cm.地图特效_开关落脚点([69], [1]);
    } else {
      cm.onSetBackEffect("bh_543_1", 1, 1, 0, 0);
      cm.地图特效_开关落脚点([67], [0]);
      cm.onSetBackEffect('bh_543_2', 1, 1, 0, 0);
      cm.地图特效_开关落脚点([68], [0]);
      cm.onSetBackEffect('bh_543_3', 1, 1, 0, 0);
      cm.地图特效_开关落脚点([69], [0]);
      cm.npc_ChangeController(1540712, "oid=26153316", -3830, -2503, 115, -3880, -3780, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=26153316", "summon", 0, 0);
      cm.npc_ChangeController(1540712, "oid=26153317", -3830, -1501, 123, -3880, -3780, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=26153317", 'summon', 0, 0);
      cm.npc_ChangeController(1540712, "oid=26153318", -3830, -502, 159, -3880, -3780, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=26153318", "summon", 0, 0);
      cm.spawnMobLimit(8240088, 1, -4350, -2503, 4);
      cm.spawnMobLimit(8240088, 1, -4300, -2503, 4);
      cm.spawnMobLimit(8240088, 1, -4250, -2503, 4);
      cm.spawnMobLimit(8240088, 1, -3650, -2503, 4);
      cm.setNumberForQuestInfo(33242, "p43", 0);
      cm.setNumberForQuestInfo(33242, "savePt", 0);
    }
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;