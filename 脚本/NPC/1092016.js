function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (cm.isQuestActive(2166)) {
    cm.forceCompleteQuest(2166);
    cm.sendOk("You felt the power of the stone.");
  }
  cm.dispose();
}
var status = -1;