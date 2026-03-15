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
      cm.askMenu("#b#e<冒险岛拳击王>#n#k\r\n\r\n你来啦！是否现在立即参与？\r\n\r\n#e今天世界内的最高分数：#n#r#e0分#n#k #e/ 1200分#n\r\n#e今天领取的17周年纪念币：#n#r#e0个#n#k #e/ 120个#n\r\n#L1# #b进入冒险岛拳击王。#k#l\r\n#L2# #b回到屋顶宴会场。#k#l", 4, 9062291);
    } else {
      var w = "action分支" + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.dispose();
    cm.warp(993177300, 0, false);
  }
}
function action分支2(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu("#b#e<冒险岛拳击王>#n#k\r\n游戏结束啦，辛苦你了。\r\n\r\n#e获得分数：#n#b#e784分#n#k    #r#e(今日最高纪录更新！)#n#k\r\n#e今天世界内的最高分数：#n#r#e0分#n#k #e/ 1200分#n\r\n\r\n领取#b#L0#奖励。#k #e(17周年纪念币 78个)#n#l\r\n#L1# #b重新挑战。#k#l\r\n#L2# #b回到屋顶宴会场。#k#l", 4, 9062291);
  } else {
    if (status === V++) {
      cm.askYesNo("不愧是能够来到我们#b#e<冒险岛大酒店>#n#k的勇士。\r\n\r\n#b#e784分#n#k将被记录为今天#r#e世界内的最高分数#n#k，\r\n是否领取#b#e17周年纪念币 78个#n#k？\r\n\r\n#e今天领取的17周年纪念币：#n#r#e0个#n#k #e/ 120个#n\r\n\r\n#r#e※说明※#n#k\r\n该分数被纪录为#r今天世界内的最高分数#k。\r\n#r更新分数#k后，#b最多可额外获得1200分#k作为奖励。", 4, 9062291);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("好了，给您#b17周年纪念币#k，我会将您送往#b屋顶宴会场#k。", 4, 9062291, false, true);
      } else if (status === V++) {
        cm.updateInfoQuest(100592, "point=84;sum=8400;date=20210726;today=0;total=0");
        cm.updateInfoQuest(100594, "point=0;start=1");
        cm.updateInfoQuest(501047, "coinCount=78;date=21/07/26;todayRecord=784;record=784");
        cm.playerMessage(5, "已获得17周年纪念币 78个。");
        cm.dispose();
        cm.warp(993177200, 2, false);
      }
    }
  }
}