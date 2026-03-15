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
      cm.sendNormalTalk_Bottom("#face3##h0#，你一定会再来看我们的吧？！我们会等着你的！", 36, 9401076, 0, 1);
    } else {
      cm.sendNormalTalk_Bottom("听说只要出现在那个叫作TV的地方，很多人就能看到我？！\r\n我一定要去TV！", 36, 9401076, 0, 1);
    }
  } else {
    cm.dispose();
  }
}