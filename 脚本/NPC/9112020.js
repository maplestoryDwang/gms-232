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
      cm.updateInfoQuest(58752, "count=0;aKey=1;bKey=2");
      cm.askYesNo("有什么花招尽管使出来吧……！人类！\r\n(接受时，将开始对鵺进行审判。)", 4, 9111013);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(800022500, 0, false);
    }
  }
}