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
      cm.sendNormalTalk_Bottom("#face0#警卫机器人交给我处理，你还是去开门吧。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
    } else {
      if (status === v++) {
        cm.askAcceptDecline_Bottom("#face0#（我要为孩子们解除安保争取时间，去对付#b警卫机器人#k吧。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, 1);
      } else if (status === v++) {
        cm.forceStartQuest(39413, '');
        cm.dispose();
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
      cm.sendNormalTalk_Bottom("#face0#罗米娜，罗米娜。", 36, 3004915, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#成功了，门打开了。", 36, 3004914, true, true, 1);
      } else if (status === v++) {
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/door_open", 100);
        cm.Hidden_background("kain_dooron", 1, 1, 0, 0);
        cm.Hidden_background("kain_dooroff", 1, 0, 0, 0);
        cm.forceCompleteQuest(39413);
        cm.getPlayer().levelUp();
        cm.dispose();
      }
    }
  }
}