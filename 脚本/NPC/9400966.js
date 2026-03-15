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
      cm.askMenu("欢呼与叹息交错的鸿运转盘箱！\r\n\r\n#b#L1#旋转吧！鸿运转盘箱！#k#l\r\n\r\n#L0##e<旋转吧！鸿运转盘箱！>#n 听取说明#l\r\n#L2#结束对话#l", 4, 9400966);
    } else {
      if (selectionLog[1] == 1) {
        action0(f, W, U, V);
      } else {
        if (selectionLog[1] == 0) {
          action1(f, W, U, V);
        } else if (selectionLog[1] == 2) {
          action2(f, W, U, V);
        }
      }
    }
  }
}
function action0(f, W, U, V) {
  if (status <= V++) {
    var w = cm.getNumberFromQuestInfo(500831, "roulette");
    var N = cm.getNumberFromQuestInfo(500831, "rouletteWin") + 1;
    var u = cm.getNumberFromQuestInfo(500831, "rouletteNext");
    var Q = u - new Date().getTime();
    if (Q <= 0) {
      cm.askYesNo("你目前获得的日冕积分为#b" + w + "分#k！\r\n如果再次转动转盘箱，赢了就可以获得#b" + N * 20 + "分#k，如果输了……就要变成#b0分#k了哦？\r\n\r\n怎么样，要挑战转盘箱吗？", 4, 9400966);
    } else {
      var m = Math.round(Q / 60000);
      cm.sendOk("你目前获得的日冕积分为#b" + w + "分#k！\r\n如果想要再次转动转盘箱，还需要等待 #b" + m + "#k 分钟！", 9400966);
      cm.dispose();
    }
  } else {
    if (status === V++) {
      cm.openUIWithOption(122, 4001899);
    } else {
      if (status === V++) {
        cm.closeUI(122);
        cm.addNumberForQuestInfo(13481, 'roll', 1);
        cm.addNumberForQuestInfo(13378, "RollPerDay", 1);
        cm.setNumberForQuestInfo(500831, "rouletteNext", new Date().getTime() + 1800000);
        var c = cm.getNumberFromQuestInfo(13481, "rand") % 360;
        if (c >= 32 && c <= 64 || c >= 138 && c <= 234 || c >= 261 && c <= 320) {
          cm.setNumberForQuestInfo(500831, "roulette", 0);
          cm.setNumberForQuestInfo(500831, "rouletteWin", 0);
          cm.sendNormalTalk("出现了#b白#k呢，虽然很可惜，但是这是我的胜利！\r\n你今天能够获得的#b日冕积分#k还是#r0分#k！请下次继续加油吧！哈哈哈哈！", 4, 9400966, false, true);
        } else {
          cm.addNumberForQuestInfo(500831, "rouletteWin", 1);
          var N = cm.getNumberFromQuestInfo(500831, "rouletteWin");
          cm.addNumberForQuestInfo(500831, 'roulette', N * 20);
          var w = cm.getNumberFromQuestInfo(500831, "roulette");
          cm.sendNormalTalk("出现了#b黑#k呢，这一轮是你赢了！\r\n你今天能够获得的#b日冕积分#k是#r" + w + "分#k！", 4, 9400966, false, true);
        }
      } else {
        if (status === V++) {
          var c = cm.getNumberFromQuestInfo(13481, "rand") % 360;
          if (c >= 32 && c <= 64 || c >= 138 && c <= 234 || c >= 261 && c <= 320) {
            cm.sendNormalTalk("今天还不能满足于此？那就在#b30分钟后#k 重新转动转盘吧！说不定下次你就能赢呢？", 4, 9400966, true, false);
          } else {
            cm.sendNormalTalk("是见好就收，还是再来一轮？#b30分钟后#k 可以重新转动转盘，好好考虑一下吧！", 4, 9400966, true, false);
          }
        } else {
          cm.dispose();
        }
      }
    }
  }
}
function action1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("#b每30分钟才能转动一次#k转盘，如果出现#b黑#k就是你赢。", 4, 9400966, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("你每次获胜的时候，能够领取的#b日冕积分#k就会增加到两倍！\r\n  #b1胜：20 日冕积分#k\r\n  #b2连胜：40 日冕积分#k\r\n  #b3连胜：80 日冕积分#k\r\n#b ……#k", 4, 9400966, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("日冕积分#b每天能够领取一次#k ，如果你输了，那么#b能够领取的日冕积分将初始化为0#k，所以好好判断在何时领取积分就很重要了吧？", 4, 9400966, true, true);
      } else if (status === V++) {
        cm.sendNormalTalk("如果做好了心理准备，那就转动#b转盘#k吧！", 4, 9400966, true, false);
      } else {
        cm.dispose();
      }
    }
  }
}
function action2(f, W, U, V) {
  if (status <= V++) {
    cm.dispose();
  }
}