var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.addPopupSay(3003480, 2500, "#face4#她的力量仿佛没有尽头。", '', 0);
    cm.addPopupSay(0, 2500, "#face0#她到底来自哪里呢？怎么会有人拥有那种力量呢？", '', 0);
    cm.addPopupSay(3003480, 2500, "#face13#嗯……不知道她为什么会突然在克里蒂亚斯出现……", '', 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;