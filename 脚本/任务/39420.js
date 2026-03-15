var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face2#唔！这迷雾扰得我什么都看不到。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
      cm.effect_Voice("Voice6.img/kain/17/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face3#该隐……", 36, 3004914, true, true, 1);
        cm.effect_Voice("Voice6.img/kain/17/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/2', 100);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face3#求你了！求你救救罗伊斯……", 36, 3004914, true, true, 1);
          cm.effect_Voice("Voice6.img/kain/17/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/3', 100);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face4#切，在这里等着啊。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
              cm.effect_Voice("Voice6.img/kain/17/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
            } else {
              if (status === v++) {
                cm.askAcceptDecline_Bottom("#face0#（追击头目。）\r\n\r\n#b（※接受后前往战斗地区。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, 1);
              } else if (status === v++) {
                cm.forceJoinEvent("炼狱黑客_清怪1");
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}