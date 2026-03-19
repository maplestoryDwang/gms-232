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
      cm.updateInfoQuest(35718, "order=gabdcehf");
      cm.updateInfoQuest(35757, "do=ing");
      cm.updateInfoQuest(35718, "order=gabdcehf;enter=1");
      cm.updateInfoQuest(35757, "enter=993063010;do=ing");
      cm.setPartner(1, 3003770, 80002582, 0);
      cm.sendNormalTalk_Bottom("#face0#哎呀……分成两条路了。", 37, 3003770, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#一般人都会凭借本能选择右边的路……", 37, 3003770, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0##h0#要选哪条路？", 37, 3003770, true, true);
        } else if (status === V++) {
          cm.updateInfoQuest(35755, "10=1");
          cm.dispose();
        }
      }
    }
  }
}