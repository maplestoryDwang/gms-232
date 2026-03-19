var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
    if (cm.getMap().getNumMonsters() == 0) {
      cm.updateInfoQuest(7851, "eNum=2;lastDate=20/01/30");
      cm.npc_ChangeController(2144021, "oid=3042935", 320, -190, 9, 270, 370, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=3042935", "summon", 0, 0);
      cm.effect_Voice("Voice.img/akayrum/2", 100);
      cm.getMap().startSimpleMapEffect("不知勇气和愚蠢区别的家伙们，想死，就放马来吧，呵呵。", 5120056);
      cm.hideNpc(2144016);
      cm.hideNpc(2144020);
      if (!cm.isQuestFinished(31180)) {
        cm.npc_ChangeController(2144020, "oid=2144020", 11, -417, -1, 0, 450, 0, true, 0, true);
      }
    }
    cm.dispose();
  }
}