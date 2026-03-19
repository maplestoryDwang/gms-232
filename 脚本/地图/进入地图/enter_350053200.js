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
    cm.updateInfoQuest(33240, "skip6=1;skip8=1;act5=350053200");
    cm.npc_ChangeController(1540709, "oid=284798173", -360, -530, 1, -410, -310, 0, true, 0, false);
    cm.npc_SetSpecialAction("oid=284798173", 'summon', 0, 0);
    cm.updateInfoQuest(33234, "start=1;done=1");
    cm.forceStartQuest(33234, '');
    cm.addPopupSay(1540490, 1500, "由于不知道是哪个家伙拿走了管道, \r\n所以就将它们全部除掉吧!", '', 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;