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
    cm.spawnMobLimit(9601316, 1, -700, 305, 1);
    cm.addPopupSay(9400924, 3000, "#face0#周围的怪物回来闹事的。一定要防止装饰品损坏。", '', 0);
    cm.getClock(60);
    cm.scheduleOpenNpcTask(45, 0, "我的小屋_春节护送");
    cm.dispose();
  }
}