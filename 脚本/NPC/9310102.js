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
      cm.sendNormalTalk("只有勤奋修炼的人才能带过来黑龙之角……给我黑龙之角的话，嘿嘿，说不定会获得非常诱人的奖励哦……", 0, 9310102, false, true);
    } else if (status === V++) {
      cm.sendNormalTalk("你再确认下你是不是真的有黑龙之角吧。", 0, 9310102, true, false);
      cm.dispose();
    }
  }
}