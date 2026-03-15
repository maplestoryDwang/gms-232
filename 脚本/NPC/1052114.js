var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
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
    var V = "Would you like to go into the Training Center?";
    for (var w = 0; w < 5; w++) {
      V += "\r\n#b#L" + w + "#Training Center " + w + " (" + cm.getPlayerCount(910310000 + w) + '/' + 5 + ")#l#k";
    }
    cm.askMenu(V);
  } else {
    if (status == 1) {
      if (U < 0 || U >= 5) {
        cm.dispose();
      } else if (cm.getPlayerCount(910310000 + U) >= 5) {
        cm.sendNext("This training center is full.");
        status = -1;
      } else {
        cm.warp(910310000 + U, 0);
        cm.dispose();
      }
    }
  }
}