var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
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
    cm.Hidden_background("402000000_tag", 1, cm.isQuestFinished(37101) ? 1 : 0, 0, 0);
    cm.Hidden_background("crack", 1, 0, 0, 0);
    if (cm.isQuestActive(39542)) {
      cm.addPopupSay(3001626, 1500, "出了那扇门就是万神殿~！", '', 0);
      cm.OnStartNavigation(400000001, 1, "3000001", 39542);
      cm.Hidden_background("402000000_tag", 1, 0, 0, 0);
    }
    if (cm.isQuestActive(39633)) {
      cm.addPopupSay(3001931, 1500, "出了那扇门就是万神殿~！", '', 0);
      cm.OnStartNavigation(400000001, 0, '', 39633);
    }
    if (cm.getInfoQuest(36102) == "First=1" && cm.getQuestStatus(34626) == 0) {
      cm.setPartner(true, 3001251, 80002311, 0);
    }
    cm.dispose();
  }
}