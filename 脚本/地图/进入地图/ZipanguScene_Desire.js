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
      cm.forceStartQuest(58774, '');
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.sendNormalTalk_Bottom("#face0#这是第三个试炼。\r\n为了获得真知，就必须消除一切烦恼！\r\n这次试炼的内容是考验你能否消除心中的烦恼。", 37, 9111018, false, true);
      cm.curNodeEventEnd(true);
    } else if (status === V++) {
      cm.eventSKill(0);
      cm.addPopupSay(9111018, 2000, "#face0#必须消灭所有乌鸦，才能杀死烦恼乌鸦。", '', 0);
      cm.setInGameDirectionMode(false, true, false);
      cm.dispose();
    }
  }
}