var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (cm.getNumberFromQuestInfo(100706, "start") == 0) {
    action0(g, w, a);
  } else {
    action1(g, w, a);
  }
}
function action0(g, w, a) {
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
    if (status === v++) {
      cm.updateInfoQuest(100706, 'point=0');
      cm.updateInfoQuest(501213, "cCount=0;date=21/08/06;bRecordName=0;todayRecord=0;bRecord=0;today=0;cName=0");
      cm.sendNormalTalk("\r\n你好，#b#h0##k，\r\n你看起来身子有些重啊。", 4, 9062451, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("\r\n在这种和平的空间下难免会放松警惕，但唯有坚持不懈地训练，提高自己的实力，才能发光发亮。", 4, 9062451, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("\r\n想要试试我为勇士们准备的用来进行战斗训练的#b<焕新水晶挑战>#k吗？\r\n在这项挑战中可以获得#b水晶点数#k，这些点数可以换成#b各种成长秘药#k哦。", 4, 9062451, true, true);
        } else {
          if (status === v++) {
            cm.askYesNo("怎么样？#b#h0##k，\r\n要试着挑战一次#b焕新水晶挑战#k吗？", 4, 9062451);
          } else if (status === v++) {
            cm.updateInfoQuest(100706, "point=0;start=1");
            cm.sendNormalTalk("好，\r\n那就再来和我说说。", 4, 9062451, false, true);
            cm.dispose();
          }
        }
      }
    }
  }
}
function action1(g, w, a) {
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
    if (status === v++) {
      cm.askMenu("#b#e<焕新水晶挑战>#n#k\r\n\r\n参加#b焕新水晶挑战#k获得的#r水晶点数#k可以换取#b成长秘药#k。\r\n#b只有集齐300个今日焕新石的勇士可以参加。#k\r\n\r\n#e今日世界内最高点数： #n#r#e0点#n#k #e/1500点#n\r\n#e今日获得的水晶点数：#n#r#e0点#n#k #e/ 1500点#n\r\n#e当前持有的水晶点数：#n#r#e0点#n\r\n#L1#我想要挑战#b<焕新水晶挑战>。#k#l\r\n#L2#给我讲讲#b<焕新水晶挑战>吧。#k#l\r\n#L3#我想要购买#b<焕新成长秘药>。#k#l", 4, 9062451);
    } else {
      var e = "action分支" + selectionLog[1];
      eval(e)(g, w, a, v);
    }
  }
}
function action分支1(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("只有集齐300个今日焕新石的勇士可以参加#b<焕新水晶挑战>#k。\r\n\r\n请#r集齐300个焕新石后再来找我#k。\r\n（今日收集到的焕新石：#r#e0#n#k个）", 4, 9062451, false, false);
  } else if (status === v++) {
    cm.dispose();
  }
}
function action分支2(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("焕新水晶挑战是我特别为来到#b<焕新城堡>#k的勇士们准备的一个战斗训练游戏，\r\n在#b限时2分钟#k内#b攻击水晶怪物#k就能测定自己的战斗能力，并可以根据获得的点数获得#b水晶点数#k，\r\n水晶点数可以用来交换#b成长秘药#k。", 4, 9062451, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("焕新水晶挑战会有#r水晶怪物#k出场，#b防御率#k和#b等级#k会经过#r共12个阶段#k增加。\r\n在#b限时2分钟#k内，可以获得的#b点数#k与对水晶怪物造成的#b伤害量#k成正比，并可以该点数为基础获得#b水晶点数#k。\r\n限时结束前达到#b1500点#k后，将自动结束水晶挑战。", 4, 9062451, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("在焕新水晶挑战中，每天可以获得的最高点数是#r每个世界1500点#k，刷新#b今日世界内最高点数#k后可额外获得#b水晶点数#k。\r\n比方说，当今日世界内最高点数为#e1100点#n时，如果通过额外挑战创下了#e1200点#n的记录，就可以额外获得#b100点水晶点数#k。", 4, 9062451, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("就是这些，如果你想要挑战，可以来找我。\r\n\r\n#b※ 活动时间\r\n  - 2021年10月19日23点59分截止#k", 4, 9062451, true, false);
        } else if (status === v++) {
          cm.dispose();
        }
      }
    }
  }
}
function action分支3(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("只有集齐300个今日焕新石的勇士可以购买#b<焕新成长秘药>#k。\r\n\r\n请#r集齐300个焕新石后再来找我#k。\r\n（今日收集到的焕新石：#r#e0#n#k个）", 4, 9062451, false, false);
  } else if (status === v++) {
    cm.dispose();
  }
}