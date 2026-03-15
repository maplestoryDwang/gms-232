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
      cm.sendNormalTalk_Bottom("#face0##b（控制武神之力比以前更容易了。）", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
    } else {
      if (status === v++) {
        cm.askAcceptDecline_Bottom("#face0##b（修行似乎取得了成果，真是太好了……趁还没忘记这种感觉，回到玄山派去完成修炼吧。) \r\n#r（※接受时，移动到任务地图。）", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, 1);
      } else if (status === v++) {
        cm.dispose();
        cm.warp(875003037, 0, false);
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
      cm.effect_Voice("VoiceWz2.img/Mukhyun/F/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/13", 100);
      cm.sendNormalTalk_Bottom("#face1##b就是这种感觉……气息在全身奔腾不息！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
    } else {
      if (status === v++) {
        cm.effect_Voice("VoiceWz2.img/Mukhyun/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/14", 100);
        cm.sendNormalTalk_Bottom("#face2##b哈哈哈，原来这样，原来是这样！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.effect_Voice("VoiceWz2.img/Mukhyun/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/15", 100);
          cm.sendNormalTalk_Bottom("#face4##b（可以肯定，这还不是极限。我一定能变得更强。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
        } else {
          if (status === v++) {
            cm.effect_Voice("VoiceWz2.img/Mukhyun/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/16", 100);
            cm.sendNormalTalk_Bottom("#face4##b（还好修行的方向是对的……但是……还差得远呢。要是能成长得再快一点就好了……）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face1##b（既然到了这里，最好和素笑还有弟子们打个招呼。不知道他们过得怎么样。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
            } else if (status === v++) {
              cm.updateInfoQuest(1073, "570=201;571=201;508=10;572=201;17500=235;17510=235;17511=235;0=1");
              cm.forceCompleteQuest(65958);
              cm.changeJob(17511);
              cm.openUIWithOption(3, 164111000);
              cm.forceStartQuest(65994, '');
              cm.forceCompleteQuest(65994);
              cm.dispose();
              cm.warp(875000001, 2, false);
            }
          }
        }
      }
    }
  }
}