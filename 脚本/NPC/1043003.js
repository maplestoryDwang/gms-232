function start() {
  if (cm.getQuestStatus(2358) == 1) {
    cm.forceCompleteQuest(2358);
  }
  cm.dispose();
}
var status = -1;