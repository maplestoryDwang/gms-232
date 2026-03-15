var status = -1;
function action(f, W, U) {
  if (cm.isQuestActive(3421)) {
    cm.playerMessage("Quest complete.");
    cm.forceCompleteQuest(3421);
  }
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;