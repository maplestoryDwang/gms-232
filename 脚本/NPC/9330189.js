var status = 0;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    cm.askMenu("如果你还没有接受过授课，那就快去学校吧。\r\n\r\n#L1##b前往枫之高校#l");
  } else if (status == 1) {
    cm.setQuestCustomData(9330189, cm.getMapId());
    cm.warp(744000000, 0);
    cm.dispose();
  }
}