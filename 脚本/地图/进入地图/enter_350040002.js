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
    cm.npc_ChangeController(1540446, "oid=35882", -114, 28, 27, -164, -64, 1, false, 0, false);
    cm.updateInfoQuest(33128, "act1=350013000;act2=350024300;act3=350033100;act4=350040002");
    cm.setPartner(1, 1540765, 80001594, 0);
    cm.setPartner(1, 1540766, 80001595, 0);
    cm.setPartner(1, 1540767, 80001596, 0);
    cm.useItem(2023447);
    cm.useItem(2023448);
    cm.useItem(2023449);
    cm.addPopupSay(1540503, 2000, "#face0#那我们一起逛逛机械坟墓吧, 队长?", '', 0);
    cm.addPopupSay(1540502, 1000, "我很想边走边听听队长你这段时间的经历. ", '', 0);
    cm.npc_LeaveField('oid=35882');
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;