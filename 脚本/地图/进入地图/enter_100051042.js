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
      cm.updateInfoQuest(35948, '16=h1');
      cm.npc_ChangeController(1013316, "oid=946", -1140, -182, 11, -1190, -1124, 1, false, 0, false);
      cm.setPartner(1, 1013350, 80002700, 0);
      if (cm.isQuestFinished(35924) && cm.getQuestStatus(35925) == 0) {
        cm.askAcceptDecline_Bottom("#face1#这,这里也被怪物们挡住了。\r\n如果能消灭掉#b50个#k#r#o2300208##k,应该就能把路打通……", 36, 1013350, 1);
      } else {
        cm.dispose();
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#明白了。你在这里等一下。我马上就回来。", 36, 1013358, false, true, 1);
      } else if (status === V++) {
        cm.forceStartQuest(35925, '');
        cm.dispose();
      }
    }
  }
}