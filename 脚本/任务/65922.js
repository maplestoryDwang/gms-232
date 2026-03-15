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
      cm.forceStartQuest(65922, '');
      cm.sendNormalTalk_Bottom("#face0#玄儿……", 36, 9401282, true, true, 1);
    } else {
      if (status === v++) {
        cm.gainItem(2000056, 200);
        cm.gainItem(2000057, 200);
        cm.gainItem(512014336, 51200);
        cm.sendNormalTalk_Bottom("#face1##b是，掌门人！", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.effect_Voice("VoiceWz2.img/Mukhyun/K/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
          cm.sendNormalTalk_Bottom("#face0#你能平安归来就好。", 36, 9401282, true, true, 1);
        } else {
          if (status === v++) {
            cm.effect_Voice("VoiceWz2.img/Mukhyun/K/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/2', 100);
            cm.sendNormalTalk_Bottom("#face1##b……你能一直相信我，应该我向你表示感谢才对。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
          } else {
            if (status === v++) {
              cm.effect_Voice("VoiceWz2.img/Mukhyun/K/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
              cm.sendNormalTalk_Bottom("#face0#呵呵，什么时候长这么大了……\r\n别让师弟们等太久，快去吧。", 37, 9401282, true, true, 1);
            } else if (status === v++) {
              cm.dispose();
              cm.warp(875003002, 0, true);
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