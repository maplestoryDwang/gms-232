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
  } else {
    if (status === V++) {
      if (cm.getQuestStatus(35800) == 0 || cm.getQuestStatus(35802) > 0) {
        cm.dispose();
        return;
      }
      cm.updateInfoQuest(35831, "52=h1;53=h0");
      cm.sendNormalTalk_Bottom("古瓦洛！！！", 57, 0, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#这个声音……是对抗者啊。", 37, 3003903, true, true);
      } else if (status === V++) {
        cm.npc_ChangeController(3003953, "oid=2176181", 577, 67, 4, 527, 627, 1, false, 1000, false);
        cm.npc_SetSpecialAction("oid=2176181", "summon", 0, 0);
        cm.updateInfoQuest(35832, "dir000=end;dir010=end");
        cm.forceCompleteQuest(35801);
        cm.gainExp(360899508);
        cm.dispose();
      }
    }
  }
}