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
    cm.spawnMobLimit(2400560, 1, 740, 38, 100);
    cm.spawnMobLimit(2400560, 1, 634, 38, 100);
    cm.spawnMobLimit(2400560, 1, 252, 38, 100);
    cm.spawnMobLimit(2400560, 1, 138, 38, 100);
    cm.spawnMobLimit(2400560, 1, -380, 38, 100);
    cm.spawnMobLimit(2400560, 1, -489, 38, 100);
    cm.spawnMobLimit(2400560, 1, -600, 38, 100);
    cm.spawnMobLimit(2400560, 1, -729, 38, 100);
    cm.spawnMobLimit(2400560, 1, 922, -369, 100);
    cm.spawnMobLimit(2400560, 1, 811, -369, 100);
    cm.spawnMobLimit(2400560, 1, 699, -369, 100);
    cm.spawnMobLimit(2400560, 1, 582, -369, 100);
    cm.spawnMobLimit(2400560, 1, 554, -144, 100);
    cm.spawnMobLimit(2400560, 1, 434, -144, 100);
    cm.spawnMobLimit(2400560, 1, 323, -144, 100);
    cm.spawnMobLimit(2400560, 1, 202, -144, 100);
    cm.spawnMobLimit(2400560, 1, 157, -370, 100);
    cm.spawnMobLimit(2400560, 1, 50, -370, 100);
    cm.spawnMobLimit(2400560, 1, -66, -370, 100);
    cm.spawnMobLimit(2400560, 1, -187, -370, 100);
    cm.spawnMobLimit(2400560, 1, -94, -168, 100);
    cm.spawnMobLimit(2400560, 1, -206, -168, 100);
    cm.addPopupSay(3001651, 1500, "#face0##fc0xFF339999#那帮家伙貌似和鼠精一起变强了。", '', 0);
    cm.addPopupSay(3001674 + cm.getPlayer().getGender(), 1500, "#face10#不过绝对不是猛兽的对手。", '', 0);
    cm.addPopupSay(3001674 + cm.getPlayer().getGender(), 1500, "#face5#觉悟吧，这帮家伙，我必将你们统统铲除。", '', 0);
    cm.dispose();
  }
}