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
      cm.sendNormalTalk("哇～看这些人。大家好像都很厉害的样子。那边的人看上去也很强。虽然在射手村的时候不知道，但在这里一看，赫丽娜好像也很厉害的样子。", 0, 1105009, false, true);
    } else if (status === V++) {
      cm.sendNormalTalk("我可以参加这样的盛会吗？虽然有点可怕，但是没关系。", 0, 1105009, true, false);
    } else {
      cm.dispose();
    }
  }
}