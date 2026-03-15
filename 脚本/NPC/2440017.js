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
    if (!cm.haveItem(4033832)) {
      cm.sendOk("还没拿到修炼证物吗？");
      cm.dispose();
    } else {
      cm.sendNormalTalk("噢，你们拿到修炼证物了！速度快得惊人啊！那么我就认可你们的能力！你们可以走了！", 33, 2440017, false, true);
    }
  } else {
    cm.warp(324000000, 8, false);
    cm.dispose();
  }
}