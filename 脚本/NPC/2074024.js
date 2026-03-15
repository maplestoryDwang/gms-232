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
      cm.sendNormalTalk("……我不行，对吧？", 4, 2074159, false, true);
    } else if (status === V++) {
      cm.sendNormalTalk("像我这种人哪里能谈什么爱情呢，工作都要忙死了……", 4, 2074159, false, true);
    } else {
      cm.dispose();
    }
  }
}