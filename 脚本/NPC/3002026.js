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
  } else if (status === V++) {
    cm.askYesNo("\r\n[狐狸谷]你想现在移动到#b#m400000000##k吗？\r\n使用万神殿的#r叶片飞机#k，可以移动到狐狸谷。\r\n\r\n#r（接受时自动移动。）", 4, 3002027);
  } else {
    cm.warp(400000000, 0);
    cm.dispose();
  }
}