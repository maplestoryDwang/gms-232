var status = -1;
var selectionLog = [];
var maps = [867147100, 867147200, 867147300, 867157000, 867147400, 867147500, 867147600, 867157100, 867147700, 867147800, 867147900, 867157200, 867148000, 867148100, 867148200, 867157300, 867148300, 867148400, 867148500, 867157400];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (cm.getNumberFromQuestInfo(64753, "level") == 0) {
    cm.sendNormalTalk_Bottom("喂，你是新来的？你好，你好！\r\n这地方可不能一个人进去。你先去远征队总部登记一下，听听介绍再来吧。", 36, 9401058, false, true);
    cm.dispose();
  } else {
    if (cm.isQuestActive(64764)) {
      action1(f, W, U);
    } else if (cm.isQuestFinished(64771) && cm.getNumberFromQuestInfo(64764, "talk") == 0) {
      action2(f, W, U);
    } else {
      action0(f, W, U);
    }
  }
}
function action1(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("我们的第一次冒险开始！去地下1层看看吧？", 36, 9401029, false, true);
    } else if (status === V++) {
      cm.askMenu("嘿，队长。你在哪一层下啊？\r\n\r\n#b#e<进入深渊>#k#n\r\n#L1# 地下1层：光明之帘#l", 4, 9401058);
    } else {
      cm.warp(867147010, 0, false);
      cm.dispose();
    }
  }
}
function action2(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("你是不是想到要探险，从凌晨开始就合不上眼了呢？今天又会有什么样的事情在等着我们呢，好激动呀！", 36, 9401029, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("今天也请你多多关照，队长！", 36, 9401029, true, true);
      } else {
        if (status === V++) {
          cm.askMenu(getMapText(), 4, 9401058);
        } else {
          cm.dispose();
          cm.setNumberForQuestInfo(64789, "map", maps[U]);
          var w = cm.getEventManager("深渊远征队");
          w.startInstance(cm.getPlayer());
        }
      }
    }
  }
}
function action0(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askMenu(getMapText(), 4, 9401058);
    } else {
      cm.dispose();
      cm.setNumberForQuestInfo(64789, "map", maps[U]);
      var w = cm.getEventManager("深渊远征队");
      w.startInstance(cm.getPlayer());
    }
  }
}
function getMapText() {
  var f = cm.getNumberFromQuestInfo(64753, "rank");
  var W = cm.getNumberFromQuestInfo(64753, 'level');
  var U = "嘿，队长。你在哪儿下啊？\r\n\r\n#b#e<进入深渊>#k#n";
  var V = 0;
  U += "\r\n#L" + V + "# <#m" + maps[V++] + '#>';
  if (W < 3) {
    return U;
  }
  U += "\r\n#L" + V + "# <#m" + maps[V++] + '#>';
  if (W < 5) {
    return U;
  }
  U += "\r\n#L" + V + "# <#m" + maps[V++] + '#>';
  if (W < 8) {
    return U;
  }
  U += "\r\n#L" + V + "# <#m" + maps[V++] + '#>';
  if (f < 1) {
    return U;
  }
  U += "\r\n#L" + V + "# <#m" + maps[V++] + '#>';
  if (W < 12) {
    return U;
  }
  U += "\r\n#L" + V + "# <#m" + maps[V++] + '#>';
  if (W < 14) {
    return U;
  }
  U += "\r\n#L" + V + "# <#m" + maps[V++] + '#>';
  if (W < 16) {
    return U;
  }
  U += "\r\n#L" + V + "# <#m" + maps[V++] + '#>';
  if (f < 2) {
    return U;
  }
  U += "\r\n#L" + V + "# <#m" + maps[V++] + '#>';
  U += "\r\n#L" + V + "# <#m" + maps[V++] + '#>';
  U += "\r\n#L" + V + "# <#m" + maps[V++] + '#>';
  if (W < 45) {
    return U;
  }
  U += "\r\n#L" + V + "# <#m" + maps[V++] + '#>';
  if (f < 5) {
    return U;
  }
  U += "\r\n#L" + V + "# <#m" + maps[V++] + '#>';
  U += "\r\n#L" + V + "# <#m" + maps[V++] + '#>';
  U += "\r\n#L" + V + "# <#m" + maps[V++] + '#>';
  if (W < 90) {
    return U;
  }
  U += "\r\n#L" + V + "# <#m" + maps[V++] + '#>';
  if (f < 8) {
    return U;
  }
  U += "\r\n#L" + V + "# <#m" + maps[V++] + '#>';
  U += "\r\n#L" + V + "# <#m" + maps[V++] + '#>';
  U += "\r\n#L" + V + "# <#m" + maps[V++] + '#>';
  if (W < 180) {
    return U;
  }
  U += "\r\n#L" + V + "# <#m" + maps[V++] + '#>';
  return U;
}