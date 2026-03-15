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
    cm.sendNormalTalk_Bottom("我可是帅过都敏俊的#b木敏俊#k！金木水火土的木，#b木敏俊#k！呵呵，远超过你的脚步呢。", 36, 1540855, false, false);
  } else {
    cm.dispose();
  }
}