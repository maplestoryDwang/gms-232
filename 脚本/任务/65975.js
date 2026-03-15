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
      cm.sendNormalTalk_Bottom("#face1#墨玄" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，呵呵呵……你现在忙吗？", 36, 9401277, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0##b……为什么笑得那么奇怪？", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face1#呵呵……我们的弟子们终于要踏上初次修行之路了，" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '！', 36, 9401277, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face1##b已经……成长了不少嘛。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face2#是！" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，有时间的话~~记得回来给弟子们加油鼓劲！", 36, 9401277, true, true, 1);
            } else {
              if (status === v++) {
                cm.askAcceptDecline_Bottom("#face2#" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，只要你能来，弟子们就能获得莫大的动力！\r\n#r（※接受时，自动移动到任务地图。）", 36, 9401277, 1);
              } else if (status === v++) {
                cm.updateInfoQuest(65970, "rMap=260020610");
                cm.dispose();
                cm.warp(875003052, 0, false);
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