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
      cm.sendNormalTalk_Bottom("#face3#墨玄大侠！大事不好了！据说列娜海峡的冰川正在以异常的速度融化！照这样下去，在那里的人们就要失去生活的家园了……", 36, 9401283, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face3##b（……失去生活了一辈子的家园……我比任何人都更清楚那意味着什么。）", 36, 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.askAcceptDecline_Bottom("#face0#哎呀，真是急死人了！大侠，你能去一趟吗？\r\n\r\n#b(※ #r列娜海峡#b是特殊主题副本，提供#r59级#b以下与勇士等级对应的怪物和任务经验值。）", 36, 9401283, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face1#果然不愧是墨玄大侠！", 36, 9401283, false, true, 1);
          } else {
            if (status === v++) {
              cm.askAcceptDecline_Bottom("#face1#里恩的#b#p1201000##k会告诉你更详细的情报！我可以马上把你送到里恩。\r\n\r\n#b#e（接受时，自动移动到里恩。）#n", 37, 9401283, 1);
            } else if (status === v++) {
              cm.forceCompleteQuest(65955);
              cm.forceStartQuest(32160, '');
              cm.dispose();
              cm.warp(140000000, 1, false);
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