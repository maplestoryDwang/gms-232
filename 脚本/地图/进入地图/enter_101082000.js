var status = -1;
function action(f, E, e) {
  status++;
  if (cm.isQuestFinished(37163)) {
    cm.removeAll(4036501);
  }
  if (cm.isQuestFinished(37164)) {
    cm.removeAll(4036502);
    cm.removeAll(2630159);
  }
  if (cm.getStringFromQuestInfo(37162, "light") !== 'on') {
    cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 100, 0);
  }
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;