function action(f, W, U) {
  if (cm.getQuestStatus(6410) == 1) {
    cm.forceStartQuest(6411, 'p2');
    cm.sendNext("Thank you!");
  } else {
    cm.sendNext("Please, free the monsters!");
  }
  cm.dispose();
}
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;