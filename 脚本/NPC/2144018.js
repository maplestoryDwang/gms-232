var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    if (status == 0) {
      cm.dispose();
    }
    status--;
  }
  if (status == 0) {
    cm.dispose();
    cm.openNpc(2144018, "BOSS_阿卡伊勒入场");
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;