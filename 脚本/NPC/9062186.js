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
      cm.askMenu_Bottom("飞得更高！！更远！！#b#e新复古飞越天际！#n#k\r\n\r\n#L1#  查看#e#b飞行等级#k#n#l\r\n#L2#  聆听#e#b介绍#k#n#l", 132, 9062175, 3);
    } else {
      var w = 'action分支' + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    var w = cm.getNumberFromQuestInfo(100272, 'lv');
    if (w == 15) {
      cm.sendNormalTalk_Bottom("#e- 当前飞行等级\r\n：#bLv.15#k#n  #r( 70,000 / 70,000 )#k\r\n\r\n#e- 下一升级效果\r\n：#n #b#eMAX#k#n", 133, 9062175, false, true, 3);
    } else {
      var N = Math.floor(cm.getNumberFromQuestInfo(500743, 'check') / 100);
      cm.sendNormalTalk_Bottom("#e- 当前飞行等级\r\n：#bLv." + w + "#k#n  #r( " + cm.formatNumberWithComma(N) + " / " + cm.formatNumberWithComma(exps[w - 1]) + " )#k\r\n\r\n#e- 下一升级效果\r\n：#n #b#e" + upgrades[w - 1] + "#k#n\r\n  " + icons[w - 1], 133, 9062175, false, true, 3);
    }
  } else {
    if (status === V++) {
      var w = cm.getNumberFromQuestInfo(100272, 'lv');
      var u = w >= 12 ? 250 : w >= 6 ? 200 : w >= 3 ? 150 : 0;
      var Q = w >= 10 ? 2 : w >= 2 ? 1 : 0;
      var m = w >= 14 ? 20 : w >= 7 ? 10 : 0;
      var c = w >= 13 ? 150 : w >= 9 ? 100 : w >= 5 ? 50 : 0;
      var B = w >= 15 ? 400 : w >= 11 ? 300 : w >= 8 ? 200 : w >= 4 ? 100 : 0;
      cm.sendNormalTalk_Bottom("#e< 当前应用的效果 >#n\r\n\r\n#e  - 气球下降速度 #b减少" + u + "#k#b#k#n\r\n#e  - 宝石新复古能量 #b+" + Q + "#k,宝石堆新复古能量 #b+" + m + "#k#n\r\n#e  - 祥云、黄金祥云效果 #b+" + c + "#k#n\r\n#e  - 大型风扇效果 #b+" + B + "#k#n", 133, 9062175, true, true, 3);
    } else if (status === V++) {
      cm.dispose();
    }
  }
}
var exps = [500, 1000, 2000, 4000, 8000, 12000, 16000, 20000, 25000, 30000, 40000, 50000, 60000, 70000];
var upgrades = ["宝石新复古能量获得量 3 → 4", "气球下降速度 600 → 450", "大型风扇上升效果 +100", "祥云、黄金祥云效果 +50", "气球下降速度 450 → 400，可使用推进器", "宝石堆新复古能量获得量 30 → 40", "大型风扇上升效果 +100", "祥云、黄金祥云效果 +50", "宝石新复古能量获得量 4 → 5", "大型风扇上升效果 +100", "气球下降速度 400 → 350", "祥云、黄金祥云效果 +50", "宝石堆新复古能量获得量 40 → 50", "大型风扇上升效果 +100"];
var icons = ["#i2630547#", '', '', "#i2630549##i2630550#", '', "#i2630548#", '', "#i2630549##i2630550#", "#i2630547#", '', '', "#i2630549##i2630550#", "#i2630548#", ''];
function action分支2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("\r\n#r#e新复古飞越天际#n#k是在新复古王国上空进行的#e#b勇士修行#n#kYO！", 36, 9062175, false, true, 3);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("\r\n输入#r#e冲锋（→→）#n#k命令，在跑道上快速助跑，然后按#r#e跳跃键#n#k高高跳起，接着利用#r#e空格键#n#k打开#e气球#n，尽可能飞得远远的！", 36, 9062175, true, true, 3);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("\r\n飞行途中撞到空中漂浮的#e#b宝石#k#n时，可以获得#e#b新复古能量#n#kYO！", 36, 9062175, true, true, 3);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("\r\n#b#e天空点数#k#n达到一定水平时，#b#e飞行等级#n#k就会上升，并自动#b#e升级#k#n新复古气球，敬请期待YO~！", 36, 9062175, true, true, 3);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("\r\n现在明白新复古飞越天际怎么玩了吗~？\r\n那么，下面就去开展#b#e勇士修行#n#k吧！希望你能飞得更高！！更远！！", 36, 9062175, true, false, 3);
          } else if (status === V++) {
            cm.dispose();
          }
        }
      }
    }
  }
}