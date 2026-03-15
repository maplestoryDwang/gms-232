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
    cm.askMenu(cm.getMapId() != 960000000 ? "\r\n#L5#Go to Battle Square#l" : "\r\n#L5#Go back to town#l");
  } else if (status == 1) {
    cm.warp(cm.getMapId() != 960000000 ? 960000000 : 100000000);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;