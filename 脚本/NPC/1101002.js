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
      cm.sendNormalTalk("看样子你已经决定了自己要走的道路。很好。现在你只要做出选择就可以了。", 0, 1101002, false, true);
    } else if (status === V++) {
      cm.sendNormalTalk("骑士团长们正在左边等着你。仔细听他们的话，并选择你喜欢的道路。无论如何，那都是你将要踏上的道路……", 0, 1101002, true, false);
      cm.dispose();
    }
  }
}