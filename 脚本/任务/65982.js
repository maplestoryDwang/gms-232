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
      cm.sendNormalTalk_Bottom('武神，不，墨玄。', 36, 9401293, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0##b是，师父。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("墨玄，我能和你一起去吗？\r\n我想在身旁看你如何行侠仗义，并把它记录下来。", 36, 9401293, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0##b我……和以前的武神可能有很大不同。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("武神不是一个人。\r\n拥有同一种力量出生，并不代表就是同一个人。", 36, 9401293, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("虽然之前的记录丢失了，但是可以把今后的事情记录下来，所以没关系。谢谢你。", 37, 9401293, true, true, 1);
              } else if (status === v++) {
                cm.teachSkill(170000001, 9, 10);
                cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/skillUp", 100);
                cm.getTopMsgFont("<玄山气势>技能的等级提升。", 3, 20, 20, 0, 0);
                cm.forceCompleteQuest(65982);
                cm.updateInfoQuest(65999, "f4=1;f6=1;f8=1;training=3;right=2;main=2;entrance=2;left=2;f1=7");
                cm.updateInfoQuest(65999, "f4=1;f6=1;f8=1;f9=1;training=3;right=2;main=2;entrance=2;left=2;f1=7");
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