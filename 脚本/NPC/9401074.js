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
        cm.sendNormalTalk_Bottom("#face3#不管是什么模样，只要是温暖的事情就行。\r\n请你不要担心我们。", 36, 9401074, 0, 1);
      } else {
        switch (cm.rand(1, 2)) {
          case 1:
            cm.sendNormalTalk_Bottom("#b#h0##k，很开心能再次见到你！\r\n这次也发生什么大事了吗？", 36, 9401074, 0, 1);
            break;
          case 2:
            cm.sendNormalTalk_Bottom("只要能和朋友在一起，我去哪里都愿意……！", 36, 9401074, 0, 1);
            break;
        }
      }
    } else {
      cm.dispose();
    }
  }
}