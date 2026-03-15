function action(f, W, U) {
  cm.sendNext("This is Rex, sealed up.");
  if (cm.isQuestActive(3122)) {
    cm.forceStartQuest(3122, '1');
  }
  cm.dispose();
}
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;