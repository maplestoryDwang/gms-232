var status = -1;
var winTimes = 0;
var FpictureArr = Array("#fUI/UIWindow.img/RpsGame/Frock#", "#fUI/UIWindow.img/RpsGame/Fscissor#", "#fUI/UIWindow.img/RpsGame/Fpaper#");
var pictureArr = Array("#fUI/UIWindow.img/RpsGame/rock#", "#fUI/UIWindow.img/RpsGame/scissor#", "#fUI/UIWindow.img/RpsGame/paper#");
var step = -1;
function start() {
  action(1, 0, 0);
}
function action(X, x, W) {
  if (X == 1) {
    status++;
  } else {
    if (status >= 0) {
      cm.dispose();
      return;
    }
    status--;
  }
  if (status == 0) {
    var S = "嘿嘿，想挑战一下我的猜拳技术吗？";
    S += "\r\n#b#L1#玩法说明(每天100次)#l\r\n";
    if (cm.getPlayerLog('猜拳') <= 100) {
      S += "#b#L2#开始游戏#l\r\n";
    }
    cm.askMenu(S);
  } else {
    if (status == 1) {
      if (step > 0) {
        W = step;
      }
      if (W == 1) {
        var S = "#d#e游戏说明：#n#k\r\n";
        S += "\t1. 目前猜拳游戏每天可以进行100次。\r\n";
        S += "\t2. 每一轮至多可以进行10次，输了则结束该轮游戏。\r\n";
        S += "\t3. 获得连胜的奖励是倍增的。\r\n";
        S += "\t4. 中途退出游戏将无法获得奖励。\r\n";
        S += "\t5. 如果第一把就输了，也可以获得安慰奖励。";
        status = -1;
        cm.askMenu(S);
      } else {
        if (W == 2) {
          var F = "每日100次,超过次数将不显示\r\n";
          F += "出招吧！少年！\r\n";
          F += "#L0##fUI/UIWindow.img/RpsGame/Frock##l";
          F += "#L1##fUI/UIWindow.img/RpsGame/Fscissor##l";
          F += "#L2##fUI/UIWindow.img/RpsGame/Fpaper##l";
          cm.askMenu(F);
        }
      }
    } else {
      if (status == 2) {
        var P = W;
        var j = Math.floor(Math.random() * 3);
        var Q = P - j;
        if (Q == -1 || Q == 2) {
          winTimes += 1;
          if (winTimes >= 10) {
            cm.askMenu("#fUI/UIWindow.img/RpsGame/charWin#\r\n你已经连胜了10局，我无地自容，领取你的奖励去吧！\r\n#b#L999#领取奖励#l");
          } else {
            status = 0;
            step = 2;
            cm.askMenu("#fUI/UIWindow.img/RpsGame/charWin#\r\n有点意思，你已经连胜" + winTimes + "把了，战斗到底！\r\n" + FpictureArr[P] + " " + pictureArr[j]);
          }
        } else if (Q == 0) {
          status = 0;
          step = 2;
          cm.askMenu("差点就被你赢了，来吧，放马过来！\r\n" + FpictureArr[P] + " " + pictureArr[j]);
        } else {
          cm.askMenu("#fUI/UIWindow.img/RpsGame/charLose#\r\n呵呵呵，你还是太年轻了。\r\n" + FpictureArr[P] + " " + pictureArr[j] + "\r\n#b#L999#领取奖励，退出游戏#l");
        }
      } else {
        if (status == 3) {
          if (winTimes >= 3) {
            cm.worldMessage("『猜拳能手』 : 玩家 " + cm.getPlayer().getName() + " 在猜拳游戏中连胜" + winTimes + "把，获得了丰厚的奖励。");
          }
          var V = 10000 * Math.pow(2, winTimes);
          cm.addPlayerLog('猜拳');
          cm.gainMeso(V);
          cm.gainItem(4310057, winTimes * 2);
          cm.sendOk('获得了' + V + "游戏币和" + winTimes * 2 + "个#v4310057##t4310057#");
          cm.dispose();
        }
      }
    }
  }
}
function isWin(X) {}