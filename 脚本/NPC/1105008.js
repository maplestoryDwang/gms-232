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
    cm.sendNormalTalk("不能当作敌人对待的话，也许当作同伴对待才是正确答案。希望这次你们不要中途掉链子。", 0, 1105008, false, false);
  } else {
    cm.dispose();
  }
}