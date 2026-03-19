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
      if (cm.isQuestFinished(34579)) {
        cm.dispose();
        return;
      }
      cm.npc_ChangeController(3003554, 'oid=49816', -999, 215, 10, -1049, -949, 1, false, false);
      cm.npc_ChangeController(3003551, "oid=49817", -1357, 215, 7, -1407, -1307, 0, false, false);
      cm.Hidden_background("450007170_tana", 1, 0, 0, 0);
      cm.npc_ChangeController(3003504, "oid=2005316", -1600, 130, 5, -1650, -1550, 0, false, false);
      cm.npc_SetSpecialAction("oid=2005316", 'summon', 0, 0);
      cm.npc_ChangeController(3003504, "oid=2005317", -650, 130, 14, -700, -600, 1, false, false);
      cm.npc_SetSpecialAction("oid=2005317", "summon", 0, 0);
      cm.npc_ChangeController(3003504, "oid=2005318", -850, 130, 13, -900, -800, 1, false, false);
      cm.npc_SetSpecialAction("oid=2005318", 'summon', 0, 0);
      cm.sendNormalTalk_Bottom("#face0#保护她。", 36, 3003504, false, true);
    } else if (status === V++) {
      cm.sendNormalTalk_Bottom("#face0#蜘蛛是敌人。", 36, 3003504, true, true);
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;