var status = -1;
var sel;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    if (status == 0) {
      cm.dispose();
      return;
    }
    status--;
  }
  if (status == 0) {
    cm.askMenu("你想去哪里钓鱼呢？\r\n#b#L0# 外层空间钓鱼场#l\r\n#L1# 梦幻王国钓鱼场\r\n#b#L2# 精灵钓鱼场#l#k");
  } else if (status == 1) {
    if (U <= 2 && U >= 0) {
      if (cm.getMapId() < 749050500 || cm.getMapId() > 749050502) {
        cm.saveLocation('FISHING');
      }
      cm.warp(749050500 + U);
    }
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;