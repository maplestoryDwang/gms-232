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
      cm.updateInfoQuest(35757, "enter=993063031;do=ing");
      cm.setPartner(1, 3003770, 80002582, 0);
      cm.sendNormalTalk_Bottom('……', 57, 0, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#还是放不下吗？", 37, 3003770, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#这次去那边吧。快点。你不是不想再迟到吗？", 37, 3003770, true, true);
        } else if (status === V++) {
          cm.OnStartNavigation(993063031, 0, 'pt00', 0);
          cm.dispose();
        }
      }
    }
  }
}