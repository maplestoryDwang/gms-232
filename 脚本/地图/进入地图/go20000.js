var status = -1;
function start() {
  cm.fieldEffect_ScreenMsg("maplemap/enter/20000");
  if (!cm.isQuestFinished(32200)) {
    cm.forceCompleteQuest(32200);
  }
  if (!cm.isQuestFinished(32201)) {
    cm.forceCompleteQuest(32201);
  }
  if (!cm.isQuestFinished(32202)) {
    cm.forceCompleteQuest(32202);
  }
  cm.dispose();
}