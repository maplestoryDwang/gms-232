var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
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
      var w = "你想离开这个地方吗？想去哪里？\r\n\r\n";
      w += "#L1##b移动到#e里恩#n。（费用：0金币)\r\n#l";
      cm.askYesNo(w);
    } else {
      if (status === V++) {
        cm.sendOk("要回去里恩吗？刚好我们马上就要开船了。上来吧！");
      } else if (status === V++) {
        cm.dispose();
        cm.warp(141000200, 0);
      } else {
        cm.dispose();
      }
    }
  }
}