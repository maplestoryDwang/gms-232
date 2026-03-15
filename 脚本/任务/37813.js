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
      cm.sendNormalTalk_Bottom("大家都闭上眼睛。", 56, 0, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face2#……。", 36, 2570101, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("大家闭上眼睛……（现在没用了吗。）", 56, 0, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("(向#b右边#k移动。)", 56, 0, true, true, 1);
          } else if (status === v++) {
            cm.forceStartQuest(37813, '');
            cm.dispose();
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
      cm.sendNormalTalk_Bottom("#face2#鲁碧安……碎掉了……为什么……", 36, 2570103, false, true, 1);
    } else {
      if (status === v++) {
        cm.effect_Voice("Voice6.img/Library/ryan/21-01-ryan.1.mp3", 100);
        cm.sendNormalTalk_Bottom("#face2#难……难道，从一开始……", 36, 2570103, true, true, 1);
      } else {
        if (status === v++) {
          cm.effect_Voice("Voice6.img/Library/ryan/21-02-ryan.1.mp3", 100);
          cm.sendNormalTalk_Bottom("这鲁碧安是假的。\r\n只是块毫无力量的普通宝石。", 56, 0, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face2#那誓约呢……与王子的誓约呢……？\r\n不是发誓要复活他吗……？", 36, 2570103, true, true, 1);
          } else if (status === v++) {
            cm.effect_Voice("Voice6.img/Library/ryan/21-05-ryan.mp3", 100);
            cm.dispose();
            cm.warp(308090022, 0, true);
          }
        }
      }
    }
  }
}