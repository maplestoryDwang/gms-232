var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (cm.getMapId() == 303000000) {
    action1(f, W, U);
  } else {
    action2(f, W, U);
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
      if (cm.isQuestFinished(32624)) {} else {}
      var w = "准备好了的话，就将你的目的地告诉我！ \r\n";
      w += "#L0#前往米纳尔森林。#l\r\n";
      w += "#L1#前往水下世界。#l\r\n";
      w += "#L2#前往武陵。#l\r\n";
      if (cm.isQuestFinished(32623)) {
        w += "#L3#前往废矿。#l\r\n";
      }
      if (cm.isQuestFinished(32624)) {
        w += "#L4#前往战场。#l\r\n";
      }
      w += "\r\n#b#L5#哪里都不去。#l\r\n";
      cm.askMenu(w, 5, 2520005);
    } else {
      var N = "action分支" + selectionLog[1];
      eval(N)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("好，就去米纳尔森林。", 4, 2520005, false, true);
  } else if (status === V++) {
    cm.warp(303000110, 0);
    cm.dispose();
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("好，就去水下世界。", 4, 2520005, false, true);
  } else if (status === V++) {
    cm.warp(303000120, 0);
    cm.dispose();
  }
}
function action分支2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("好，就去武陵。", 4, 2520005, false, true);
  } else if (status === V++) {
    cm.warp(303000130, 0);
    cm.dispose();
  }
}
function action分支3(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu("好，就去废矿。\r\n#b#L0# 快点出发吧。#l\r\n#L1#我等会儿再来。#l", 5, 2520005);
  } else {
    if (status === V++) {
      if (U == 1) {
        cm.dispose();
        return;
      }
      cm.sendNormalTalk('小心掉落的冰菱~！！', 4, 2520005, false, true);
    } else if (status === V++) {
      cm.playerMessage(5, "必须躲过障碍物，获得意志之花，然后进入顶端的传送口，才能离开这里。");
      cm.dispose();
      cm.warp(303040000, 0, false);
    }
  }
}
function action分支4(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("黑色之翼必须为进攻圣地付出代价，出击！", 4, 2520005, false, true);
  } else if (status === V++) {
    cm.dispose();
    cm.openNpc("次元图书馆_Ep2_成为女皇_战场");
  }
}
function action分支5(f, W, U, V) {
  if (status <= V++) {
    cm.dispose();
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
  } else if (status === V++) {
    cm.askYesNo("要去圣地吗？", 4, 2520005);
  } else {
    cm.warp(303000100, 0);
    cm.dispose();
  }
}