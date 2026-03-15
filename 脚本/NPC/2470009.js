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
      if (cm.isQuestActive(41315)) {
        cm.sendNormalTalk("(将#r#t4033866##k放入糖果机器开始启动)", 0, 2470009, false, true);
      } else {
        cm.sendNormalTalk("内有五彩斑斓美味糖果的糖果机器。", 0, 2470009, false, false);
        cm.dispose();
      }
    } else {
      if (status === V++) {
        var w = [4033868, 4033869, 4033870, 4033871];
        var N = w[cm.rand(0, w.length)];
        cm.sendNormalTalk("(从糖果机器中获得了#r#t" + N + "##k)", 0, 2470009, true, true);
        cm.gainItem(4033866, -1);
        cm.gainItem(N, 1);
        cm.dispose();
      }
    }
  }
}