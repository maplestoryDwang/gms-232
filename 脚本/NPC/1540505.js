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
    cm.fieldEffect_ScreenMsg("Map/Effect2.img/blackHeaven/memo");
    cm.addPopupSay(1540502, 1000, "这张纸条是什么啊?这是密码吗?", '');
    cm.addPopupSay(1540504, 4000, "说不定#e倒着画的兔子图片#k, 会是#e提示#k呢?", '');
    cm.dispose();
  }
}