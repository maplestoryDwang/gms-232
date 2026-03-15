var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
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
      cm.askMenu("我是守护奈特神的金字塔的杜阿特。\r\n\r\n#b#L0#听取金字塔的介绍。#l\r\n#e#L1#进入金字塔。#l#n\r\n#L2#寻找组队。#l\r\n#L3#用<奈特的绿宝石>交换其他物品。", 0, 2103013);
    } else {
      var w = 'action分支' + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (cm.getMapId() == 926010000) {
    if (status <= V++) {
      cm.askMenu("无惧死亡的人啊，请做出选择吧！\r\n\r\n#b#L2#困难模式#r (90级以上)#b#l", 0, 2103013);
    } else {
      if (status === V++) {
        cm.forceStartQuest(7243, "21/08/05");
        cm.forceStartQuest(7242, '0');
        cm.askYesNo("你所属组队的组队成员并非4人，无法进行挑战。要寻找组队成员的话，可使用寻求组队。", 0, 2103013);
      } else if (status === V++) {
        cm.openUIWithOption(7, 1);
        cm.playerMessage(5, "在组队窗(快捷键p)中使用“寻找组队”标签, 可以随时随地寻找自己想要加入的组队.");
        cm.dispose();
      }
    }
  } else {
    if (status <= V++) {
      cm.sendNormalTalk("不知道死亡之残忍的人啊，到我这里来。", 0, 2103013, false, true);
    } else if (status === V++) {
      cm.setNumberForQuestCustomData(7230, cm.getMapId());
      cm.dispose();
      cm.warp(926010000, 4, false);
    }
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("这里就是混沌与复仇之神奈特的金字塔。尽管很长时间以来它都隐藏在沙漠深处，但奈特神的意志已然来到了人间。如果不想对将来未知的混沌和死亡感到害怕的话，最好来金字塔挑战下奈特神的试炼。", 0, 2103013, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("当你进入金字塔的瞬间，奈特神的试炼就已经开始了。你必须阻止不断涌现的怪物到达#b#e方尖碑#n#k。从金字塔里获得的点数可以用来购买#b眼睛道具#k。", 0, 2103013, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("通过奈特的试炼的人会得到无上的荣耀，在试炼前倒下的人就只好自求多福了。我对你的提醒就到这里了。剩下的就全凭你自己的实力了。", 0, 2103013, true, true);
      } else if (status === V++) {
        cm.dispose();
      }
    }
  }
}
function action分支2(f, W, U, V) {
  if (status <= V++) {
    cm.openUIWithOption(7, 1);
    cm.playerMessage(5, "在组队窗(快捷键p)中使用“寻找组队”标签, 可以随时随地寻找自己想要加入的组队.");
    cm.dispose();
  }
}
function action分支3(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu("通过奈特神的考验，搜集到#e#b#t4001623:##k#n之后，可以交换为其他道具。你想要什么道具呢？\r\n#b\r\n#L0# #i1132013:# #t1132013# #r(需要#t4001623#40个)#b#l\r\n#L1# #i1072619:# #t1072619# #r(需要#t4001623#40个)#b#l\r\n#L2# #i1112682:# #t1112682# #r(需要#t4001623#40个)#b#l", 0, 2103013);
  } else {
    if (status === V++) {
      var w = [1132013, 1072619, 1112682];
      if (cm.getItemQuantity(4001623) >= 40) {
        cm.gainItem(4001623, -40);
        cm.gainItem(w[U], 1);
        cm.sendNormalTalk("交换达成。请收好#b#i" + w[U] + ':##t' + w[U] + "##k。", 0, 2103013, false, false);
      } else {
        cm.sendNormalTalk("奈特的绿宝石不够。想要#b#i" + w[U] + ":##t" + w[U] + "##k的话，最少需要40个。", 0, 2103013, false, false);
      }
    } else if (status === V++) {
      cm.dispose();
    }
  }
}