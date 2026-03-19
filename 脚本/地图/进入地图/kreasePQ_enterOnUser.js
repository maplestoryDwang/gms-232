var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.dispose();
    cm.spawnMobLimit(9300957, 1, -100, -480, 4);
    cm.spawnMobLimit(9300958, 1, 0, -480, 3);
    cm.spawnMobLimit(9300957, 1, 200, -480, 4);
    cm.spawnMobLimit(9300957, 1, 25, -480, 4);
    cm.spawnMobLimit(9300958, 1, 43, -480, 3);
    cm.spawnMobLimit(9300957, 1, 700, -480, 4);
    cm.spawnMobLimit(9300958, 1, 189, -480, 3);
    cm.克里塞_更新藤蔓(3, "kreaseIvy", '0');
    cm.克里塞_允许攀爬藤蔓(3, "kreaseClimb", 0);
    cm.组队任务_更新任务(1, "kreasePQ_0", "kreasePQ_", 0);
    cm.forceStartQuest(31071, '');
    cm.updateInfoQuest(31069, "count=2;boss=0;t1=0;t2=0;pt=0;t3=0;date=" + cm.getNowTimeString(3));
  }
}