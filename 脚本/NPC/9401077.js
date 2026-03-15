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
    if (cm.isQuestFinished(64932)) {
      cm.sendNormalTalk_Bottom("#face2#我想拜托你一件事，你能帮忙转告杰斯，让他不要再道歉了吗？", 36, 9401077, 0, 0);
    } else {
      cm.sendNormalTalk_Bottom("你是不是又在做什么危险的事情？\r\n我不是……不是因为担心你才问的！我是害怕你伤害我！", 36, 9401077, 0, 1);
    }
  } else {
    cm.dispose();
  }
}