var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    if (status <= 1) {
      cm.dispose();
      return;
    }
    status--;
  }
  if (status == 0) {
    var V = "你想传送到美洲豹栖息地么?";
    for (var w = 0; w < 1; w++) {
      V += "\r\n#b#L" + w + "#传送到美洲豹栖息地 #l#k";
    }
    cm.askMenu(V);
  } else if (status == 1) {
    if (U < 0 || U >= 1) {
      cm.dispose();
    } else {
      cm.warp(931000500 + U, 0);
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;