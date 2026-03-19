var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
  } else {
    if (status === V++) {
      cm.setPartner(1, 2155104, 80001702, 0);
      cm.sendNormalTalk_Bottom("#face0#没错…这个地方。\r\n这是我很久前就时常经过的地方。\r\n我时常经过这里，为什么…究竟为什么呢？", 37, 2155121, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("嗯…再往里面走走吧？\r\n#b试着沿着右边的梯子往上爬吧。", 37, 2155104, true, false);
      } else if (status === V++) {
        cm.dispose();
      }
    }
  }
}