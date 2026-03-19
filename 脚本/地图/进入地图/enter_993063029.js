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
      cm.updateInfoQuest(35757, "enter=993063029;do=ing");
      cm.setPartner(1, 3003770, 80002582, 0);
      cm.sendNormalTalk_Bottom("#face0#你没事吧？", 37, 3003770, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("啊……嗯……我……", 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(头好晕……胸闷……)", 57, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#你不能现在就累了啊。", 37, 3003770, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#这次去那边吧。", 37, 3003770, true, true);
              } else if (status === V++) {
                cm.OnStartNavigation(993063029, 0, "pt00", 0);
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}