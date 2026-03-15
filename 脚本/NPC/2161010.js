var status = -1;
var itemid = [4009237, 4009238];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askYesNo("你想离开阿尼的监狱吗？");
    } else if (status === V++) {
      cm.warp(211061000, 6);
      cm.dispose();
    }
  }
}