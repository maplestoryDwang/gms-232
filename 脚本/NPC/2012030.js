var status = -1;
function action(f, W, U) {
  if (cm.isQuestActive(3114)) {
    cm.forceCompleteQuest(3114);
    cm.playerMessage(5, "The song was played. +20 Fame");
    if (cm.getPlayer().getFame() + 20 <= 30000) {
      cm.getPlayer().addFame(20);
      cm.getPlayer().updateFame();
    }
  }
  cm.fieldEffect_PlayFieldSound('orbis/pa');
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;