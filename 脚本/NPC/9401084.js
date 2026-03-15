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
      if (cm.isQuestFinished(64932)) {
        cm.sendNormalTalk_Bottom("多亏了同伴们，我才能在词典里更明确地记载下牺牲的意义。", 36, 9401084, 0, 0);
      } else {
        switch (cm.rand(1, 2)) {
          case 1:
            cm.sendNormalTalk_Bottom("虽然你很忙，如果你能在我走向世界之前，帮我检查一下有什么不足之处的话，我会不胜感激的。", 36, 9401084, 0, 1);
            break;
          case 2:
            cm.sendNormalTalk_Bottom("#h0#，你好。我能分析一下你的状态或服装吗？", 36, 9401084, 0, 1);
            break;
        }
      }
    } else {
      cm.dispose();
    }
  }
}