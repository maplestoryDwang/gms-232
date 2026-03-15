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
      cm.effect_Voice("VoiceWz2.img/Mukhyun/F/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/9', 100);
      cm.sendNormalTalk_Bottom("#face4##b（这就是……武神之力……？！）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
    } else {
      if (status === v++) {
        cm.effect_Voice("VoiceWz2.img/Mukhyun/F/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/10", 100);
        cm.sendNormalTalk_Bottom("#face4##b（看来之前感觉到的力量，还不是完整的武神之力。我……还没有了解这种力量的全部。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.effect_Voice("VoiceWz2.img/Mukhyun/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/11', 100);
          cm.sendNormalTalk_Bottom("#face4##b（独自修炼的时候，明明连气息都运用不好……）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
        } else {
          if (status === v++) {
            cm.effect_Voice("VoiceWz2.img/Mukhyun/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/12", 100);
            cm.sendNormalTalk_Bottom("#face3##b（只有超越生死的实战，才是迅速变强的捷径吗？）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
          } else {
            if (status === v++) {
              cm.updateInfoQuest(1073, "570=201;571=201;508=10;572=201;17500=235;17510=235;0=1");
              cm.forceCompleteQuest(65945);
              cm.gainExp(8795);
              cm.playerMessage(5, "可以进行转职，学习新技能。");
              cm.getTopMsgFont("可以进行转职，学习新技能。", 3, 20, 20, 0, 0);
              cm.playerMessage(5, "使用神功宏，可以用一个按钮使用最多4个技能。");
              cm.getTopMsgFont("使用神功宏，可以用一个按钮使用最多4个技能。", 3, 20, 20, 0, 0);
              cm.changeJob(17510);
              cm.sendNormalTalk_Bottom("#face4##b（使用与力量相匹配的武功，应该就能变得更强。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
            } else if (status === v++) {
              cm.sendNormalTalk_Bottom("#face4##b（使用新技能，用身体去体会吧。）", 37, 9401276, true, true, 1);
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