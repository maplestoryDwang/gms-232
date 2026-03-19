var status = -1;
function action(f, E, e) {
  cm.onActionBarResult(6, 100);
  if (cm.isQuestFinished(64630) && !cm.isQuestFinished(64633)) {
    cm.setPartner(1, 9400944, 80011836, 0);
    cm.setPartner(1, 9400945, 80011837, 0);
  }
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;