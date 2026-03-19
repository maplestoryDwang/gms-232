var status = -1;
function action(f, E, e) {
  status++;
  if (cm.isQuestActive(32187)) {
    cm.forceCompleteQuest(32187);
  }
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;