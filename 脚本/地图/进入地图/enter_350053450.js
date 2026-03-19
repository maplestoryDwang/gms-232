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
  } else {
    if (status === V++) {
      cm.updateInfoQuest(33240, "skip6=1;skip8=1;switch=1;skip15=1;skip17=1;act5=350053450");
      cm.npc_ChangeController(1540709, "oid=26121183", -360, -530, 1, -410, -310, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26121183", "summon", 0, 0);
      cm.sendNormalTalk_Bottom("小偷又藏在了其他智能机器人之间。", 37, 1540490, false, true);
    } else if (status === V++) {
      cm.updateInfoQuest(33237, "start=1");
      cm.forceStartQuest(33237, '');
      cm.addPopupSay(1540490, 1500, "抓紧时间. 这次必须要找到4个管道碎片!", '', 0);
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;