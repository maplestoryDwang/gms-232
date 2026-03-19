var status = -1;
function action(f, E, e) {
  if (cm.isQuestActive(3143)) {
    cm.sendNextS("比斯特委托的对狮子王之城的调查完成了。回去向他报告吧。");
    cm.playerMessage(-1, '狮子王之城调查完成');
    cm.forceCompleteQuest(3143);
  }
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;