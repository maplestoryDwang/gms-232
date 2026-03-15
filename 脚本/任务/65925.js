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
      cm.sendNormalTalk_Bottom("#face1##b（素笑真的非常努力。）", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1##b（明天……我要跟着一起下山去。）", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face1##b（首先我也要修炼一下！不能把在修炼路上领悟到的东西给忘了。）", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face1##b（这里有很多小师弟，到顶峰空地去吧。）", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
          } else if (status === v++) {
            cm.forceStartQuest(65925, '');
            cm.OnStartNavigation(875000010, 0, "goUp", 0);
            cm.playerMessage(5, " [秘技：御风]施展轻功奋力跃上高空后，横贯天空滑降而下。");
            cm.getPlayer().getTopMsgByItem(3801597, " [秘技：御风]施展轻功奋力跃上高空后，横贯天空滑降而下。");
            cm.playerMessage(5, " [秘技：跳跃]使劲向上跳，跃到高空中。");
            cm.getPlayer().getTopMsgByItem(3801598, " [秘技：跳跃]使劲向上跳，跃到高空中。");
            cm.addPopupSay(cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, 3000, "#face0#使用[秘技：御风]和[秘技：跳跃]快速移动吧。", '', 0);
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
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}