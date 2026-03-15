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
      cm.sendNormalTalk("哎呀，大侠……听说你要去远方修行。这段时间多亏了大侠，河津才能维持和平。", 4, 9401359, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("大侠，我代表河津人祝愿你幸福安康。不管去了哪里，都一定要平安归来哦！", 4, 9401359, true, true);
      } else {
        if (status === V++) {
          cm.askYesNo("这艘船会在出发之后30秒到达金银岛的明珠港。你想现在坐船吗？", 4, 9401359);
        } else if (status === V++) {
          cm.setSessionValue("svReturnMap", "104000000");
          cm.dispose();
          cm.warp(875001010, 0, false);
        } else {
          cm.dispose();
        }
      }
    }
  }
}