var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(o, e, h) {
  if (status == 0 && o == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = h;
  var x = -1;
  if (status <= x++) {
    cm.dispose();
  } else if (status === x++) {
    cm.组队任务_更新任务(1, "PuzzleMaster_0", "PuzzleMaster_", 0);
    cm.addPopupSay(9062572, 5000, "#b#e创作者们的\r\n拼图挑战！#n#k\r\n#r现在即刻开始！#k", '', 0);
    cm.dispose();
  }
}