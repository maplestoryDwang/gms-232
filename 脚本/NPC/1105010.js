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
      cm.sendNormalTalk("噢噢噢噢，太帅了！太帅了！太帅了！这是历史性的时刻！真让人感动！好的！作为世界上唯一的玛瑙龙，我要好好表现一下！", 0, 1105010, false, true);
    } else if (status === V++) {
      cm.sendNormalTalk("主人～！我们去拍张纪念照吧，怎么样？！", 0, 1105010, true, false);
    } else {
      cm.dispose();
    }
  }
}