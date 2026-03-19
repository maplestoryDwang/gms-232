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
    cm.addPopupSay(0, 2500, "#face0#拥有如此可怕力量的人，黑魔法师到底想拿她怎样呢？", '', 0);
    cm.addPopupSay(3003480, 2500, "#face13#嗯……可以肯定的是，我们必须阻止他们。", '', 0);
    cm.addPopupSay(3003480, 2500, "#face4#这边！这边有她的痕迹！", '', 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;