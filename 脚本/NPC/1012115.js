function start() {
  var f = cm.getQuestStatus(20706);
  if (f == 0) {
    cm.sendNext("It looks like there's nothing suspecious in the area.");
  } else {
    if (f == 1) {
      cm.forceCompleteQuest(20706);
      cm.sendNext("You have spotted the shadow！Better report to #p1103001#.");
    } else if (f == 2) {
      cm.sendNext("The shadow has already been spotted. Better report to #p1103001#.");
    }
  }
  cm.dispose();
}
function action(f, W, U) {
  cm.dispose();
}