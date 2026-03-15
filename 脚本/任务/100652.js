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
  var v = "action" + cm.getNumberFromQuestInfo(100652, "start");
  eval(v)(g, w, a);
}
function action0(g, w, a) {
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.updateInfoQuest(100652, "point=0");
      cm.updateInfoQuest(501159, "cCount=0;date=21/04/10;bRecordName=0;todayRecord=0;bRecord=0;today=0;cName=0;tuto=1");
      cm.sendNormalTalk("欢迎光临！#b#h0##k！\r\n庆典好玩吗？", 4, 9062343, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("#b#e<星星气球连环爆>#k#n是我为这次庆典用心准备的游戏！在此游戏中集齐#b2,000个星星糖#k的勇士即可获得#b艾利涅成长秘药#k，请一定要参加哦！", 4, 9062343, true, true);
      } else {
        if (status === v++) {
          cm.askYesNo("怎么样？要参加#b#e星星气球连环爆#n#k吗？", 4, 9062343);
        } else if (status === v++) {
          cm.updateInfoQuest(100652, "point=0;start=1");
          cm.sendNormalTalk("真的吗？太感谢了！\r\n那你下次再来找我吧！", 4, 9062343, false, true);
          cm.dispose();
        }
      }
    }
  }
}
function action1(g, w, a) {
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askMenu("#b#e<星星气球连环爆>#n#k\r\n\r\n快去挑战#b星星气球连环爆#k，获得#r星星糖#k吧！\r\n集齐#b2,000个星星糖#k的勇士将获得#b礼物#k！\r\n#b只有集齐200个今日月亮糖的勇士才可参加！#k\r\n\r\n#e今日世界内最高点数：#n#r#e0点#n#k #e/ 1300点#n\r\n#e今日所获星星糖：#n#r#e0个#n#k #e/ 130个#n\r\n#e当前持有星星糖：#n#r#e0个\r\n#L1# #b我想挑战<星星气球连环爆>。#k#l\r\n#L2# #b给我讲讲<星星气球连环爆>吧。#k#l\r\n#L3# #b我想得到<艾利涅成长秘药>。#k#l", 4, 9062343);
    } else {
      var e = "action分支" + selectionLog[1];
      eval(e)(g, w, a, v);
    }
  }
}
function action分支1(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("你好！星星气球连环爆是我为参加#b#e<艾利涅满月派对>#n#k的勇士特地准备的游戏！\r\n在限时2分钟内攻击星星气球可以测试#b自己的战斗力#k，根据获得的点数还可收到#b星星糖#k！\r\n集齐#b2,000个星星糖#k的勇士可以选择#b4种艾利涅成长秘药中的1个#k作为礼物，欢迎踊跃参加！", 4, 9062343, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("星星气球连环爆里有#r独角兽气球#k和#r星星气球#k。\r\n根据给气球#b造成的伤害量#k按比例获得#b点数#k，根据点数发放#b星星糖#k。", 4, 9062343, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("星星气球连环爆的总共有#r11个阶段#k。戳破#r独角兽气球#k和#r星星气球#k，可以提升#b防御力#k和#b等级#k。\r\n进入星星气球连环爆后，会看到设置在森林里各处的#r独角兽气球#k和 #r星星气球#k，去努力戳破它们吧！", 4, 9062343, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("根据#b限时#k内造成的伤害，最多可获得#b1300点#k，#b每10点可获得1个月亮糖#k。\r\n限时结束前获得 #b1300分#k时，游戏自动结束！", 4, 9062343, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("通过星星气球连环爆，#r每个世界每天最多获得1300点#k，如果刷新#b今日世界内最高点数#k，可以额外获得#b星星糖#k！\r\n例，假如今日世界内最高点数为#e1100点#n，而你通过挑战获得了#e1200点#n，那么你可以额外获得#b10个月亮糖#k。", 4, 9062343, true, true);
          } else if (status === v++) {
            cm.sendNormalTalk("请踊跃参与！\r\n\r\n#e※ 活动时间\r\n  - 截至2021年5月11日 23点59分#n", 4, 9062343, true, false);
            status = -1;
          }
        }
      }
    }
  }
}
function action分支2(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("集齐#b2,000个星星糖 #k的勇士将获得奖励。\r\n可在#b4种艾利涅成长秘药中选择1种#k。\r\n（当前持有星星糖：#r#e0#n#k个）\r\n\r\n#b #i2632315:# <#t2632315:#> 8个#k\r\n#b #i2632316:# <#t2632316:#> 4个#k\r\n#b #i2632317:# <#t2632317:#> 2个#k\r\n#b #i2632318:# <#t2632318:#> 1个#k\r\n", 4, 9062343, false, false);
    status = -1;
  }
}
function action分支3(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("只有集齐200个今日月亮糖的勇士才能参加#b<星星气球连环爆>#k。#r请集齐200个月亮糖后再来找我吧。#k.\r\n\r\n(今天收集的月亮糖：#r#e0#n#k个)", 4, 9062343, false, false);
    status = -1;
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