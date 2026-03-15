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
      cm.sendNormalTalk("#e在下是单眼怪！#n", 4, 9062235, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk('#e我是双眼怪。#n', 4, 9062236, true, true);
      } else {
        if (status === V++) {
          cm.askMenu("#b#e[鬼怪夜市] 鬼怪石像的祝福#n#k\r\n\r\n有什么要问的吗？\r\n#L0# #b鬼怪石像的祝福是什么？#k#l\r\n#L1# #b告诉我鬼怪石像赐福的时间。#k#l", 4, 9062235);
        } else {
          var w = "action分支" + selectionLog[3];
          eval(w)(f, W, U, V);
        }
      }
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("#b#e[鬼怪夜市] 鬼怪石像的祝福#n#k\r\n\r\n#b我是#b单眼怪#k还有这是我的好朋友#r双眼怪，#k我们是守护#e满月鬼怪夜市#n的守护神。", 4, 9062235, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("#b#e[鬼怪夜市] 鬼怪石像的祝福#n#k\r\n\r\n让到访这里的客人们能拥有更快乐的时间而赐予#b祝福#k就是我们的工作了。", 4, 9062235, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#b#e[鬼怪夜市] 鬼怪石像的祝福#n#k\r\n\r\n每天 #b上午11点到晚上10点为止#k，每时#e15分开始，10分钟内#n来夜市找我们就能#r轮流获得#k非常好用的祝福。", 4, 9062235, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#b#e[鬼怪夜市] 鬼怪石像的祝福#n#k\r\n\r\n我单眼怪的祝福是#b30分钟内追加获得15%经验！#k 这个祝福可与其他经验值效果#b叠加。#k 不错吧？", 4, 9062235, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#b#e[鬼怪夜市] 鬼怪石像的祝福#n#k\r\n\r\n我的好友双眼怪的祝福是#b30分种内强化能力值的祝福！#k\r\n\r\n#e-所有属性+15\r\n-攻击/魔力+15\r\n-最大血量/魔量 +1500\r\n-无视怪物防御率+15%\r\n-攻击BOSS伤害+15%#n\r\n\r\n这个祝福也是可以和其他效果#b叠加！#k", 4, 9062235, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#b#e[鬼怪夜市] 鬼怪石像的祝福#n#k\r\n\r\n如果失误点掉了祝福，只要在祝福期间的10分钟内访问夜市就能重新获得祝福，记得一定要来啊！\r\n那就祝你在#b满月鬼怪夜市#k度过美好的时间吧~", 4, 9062235, true, false);
            } else if (status === V++) {
              cm.dispose();
            }
          }
        }
      }
    }
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("#b#e[鬼怪夜市] 鬼怪石像的祝福#n#k\r\n\r\n就由我，双眼怪来告诉你吧。", 4, 9062236, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("#b#e[鬼怪夜市] 鬼怪石像的祝福#n#k\r\n\r\n#r#e<单眼怪的祝福>#n#k\r\n#b30分钟内追加获得15%经验#k\r\n\r\n-上午 11点 15分~25分\r\n-下午 1点 15分~25分\r\n-下午 3点 15分~25分\r\n-下午 5点 15分~25分\r\n-晚上 7点 15分~25分\r\n-晚上 9点 15分~25分\r\n", 4, 9062236, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#b#e[鬼怪夜市] 鬼怪石像的祝福#n#k\r\n\r\n#r#e<双眼怪的祝福>#n#k\r\n#b30分钟内强化以下能力值\r\n-所有属性/攻击力/魔力+15\r\n-最大血量/魔量 +1500\r\n-无视怪物防御率+15%\r\n-攻击BOSS伤害+15%#n#k\r\n\r\n-中午 12点 15分~25分\r\n-下午 2点 15分~25分\r\n-下午 4点 15分~25分\r\n-下午 6点 15分~25分\r\n-下午 8点 15分~25分\r\n-晚上 10点 15分~25分\r\n", 4, 9062236, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#b#e[鬼怪夜市] 鬼怪石像的祝福#n#k\r\n\r\n那么。好好玩吧。", 4, 9062236, true, false);
        } else if (status === V++) {
          cm.dispose();
        }
      }
    }
  }
}