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
      cm.sendNormalTalk("我来啦~~我来啦！能与阿尔在一起的时刻终于到来了，我已经等了很久了！", 5, 9390300, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("从现在起变更模式时,点击#b[下方向键]#k即可使用我的技能喵!", 5, 9390300, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("我可是又善良又帅气的猫咪，我会让你的队员们都喜欢上我的喵！", 5, 9390300, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("我的技能在其他模式下是无法使用的,所以别忘了#b把技能在按键上设定#k为#b我的模式专用#k啊!", 5, 9390300, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("最后，送上我的礼物喵！\r\n收下#i1142675:##b#t1142675:##k吧喵！", 5, 9390300, true, true);
            } else if (status === v++) {
              cm.teachSkill(110001504, 0, -1);
              cm.teachSkill(110001504, 1, 1);
              cm.forceCompleteQuest(59031);
              cm.sendNormalTalk("以后也要多多拜托你啦~~~！那么，拜拜咯！", 5, 9390300, true, true);
              cm.gainItem(1142675, 1);
              cm.gainItem(1352812, 1);
              cm.effect_OnUserEff("Effect/Direction14.img/effect/ShamanBT/modeChange/3");
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