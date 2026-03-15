var status = -1;
var selectionLog = [];
function start() {
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
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askMenu("你想进去就要买票。买票后你通过右边的#p1052007#可以进去。买什么票？\r\n#b#L1#工地B1#l\r\n#b#L2#工地B2#l\r\n#b#L3#工地B3#l", 0, 1052006);
    } else {
      if (status === V++) {
        switch (U) {
          case 1:
            cm.warp(910360000, 0, false);
            cm.dispose();
            break;
          case 2:
            cm.warp(910360100, 0, false);
            cm.dispose();
            break;
          case 3:
            cm.warp(910360200, 0, false);
            cm.dispose();
            break;
        }
      }
    }
  }
}