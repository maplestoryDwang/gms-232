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
      cm.sendNormalTalk_Bottom("#face2#一股强烈的憎恨压抑着我的胸腔。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
      cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/28", 100);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face2#但是……和一直以来都不一样，\r\n我反而清醒了，因为……直到现在我才领悟。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
        cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/29", 100);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face2#该将这些恶意倾泻到何处。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
          cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/30', 100);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face2#是啊……事到如今，我才好不容易找回了被夺走的愤怒。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
            cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/31', 100);
          } else {
            if (status === v++) {
              cm.askAcceptDecline_Bottom("#face2#（为了和老大决一胜负，我必须回据点。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, 1);
            } else if (status === v++) {
              cm.forceStartQuest(39422, '');
              cm.openUIWithOption(3, 63101000);
              cm.OnStartNavigation(410000416, 0, "in00", 39422);
              cm.dispose();
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