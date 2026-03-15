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
  var v = 'start' + cm.getNumberFromQuestInfo(100664, "start");
  eval(v)(g, w, a);
}
function start0(g, w, a) {
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk("\r\n你好？\r\n#b#e<满月派对>#k#n好玩吗？", 4, 9062347, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("\r\n魔法密林里的妖精们烤制了美味的曲奇！\r\n因为太好吃了，大家为了能吃到更多曲奇都打起来了，嘿嘿", 4, 9062347, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("\r\n副校长说再看到我们打架就要没收曲奇……\r\n肯定是他想独吞。哼！", 4, 9062347, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("\r\n聪明伶俐的我们设计了这个游戏，以保护曲奇！\r\n只有在游戏中获胜的人，才能获得所有曲奇！", 4, 9062347, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("\r\n每回合可放置1个曲奇。\r\n放下曲奇后，若放下的曲奇和之前的曲奇中间夹着对方的曲奇，即可翻转对手的曲奇，把它变成你的！", 4, 9062347, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("\r\n翻开对手的曲奇即可减少对方的HP，\r\n当双方都没有可以放曲奇的地方或其中一方的HP为0，则游戏结束。", 4, 9062347, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("\r\n剩余HP更多的一方获胜，胜者可以获得\r\n更多#b#e糖果#n#k！", 4, 9062347, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("\r\n使用月亮曲奇和星星曲奇的曲奇翻翻乐！\r\n要挑战星月翻翻乐吗？", 4, 9062347, true, true);
                  } else if (status === v++) {
                    cm.updateInfoQuest(100664, "start=1");
                    cm.updateInfoQuest(500219, "time=0;macro=0");
                    cm.sendNormalTalk("\r\n想玩小游戏的时候可以随时来找我哦！", 4, 9062347, true, true);
                    cm.dispose();
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function start1(g, w, a) {
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askMenu("#b#h0##k！#b#e<满月派对>#n#k怎么样？\r\n这次我们准备的特殊游戏就是～！\r\n使用香甜曲奇的#b#e星月翻翻乐#k#n！\r\n\r\n#L0#我想参加星月翻翻乐。#l", 4, 9062347);
    } else if (status == v++) {
      cm.dispose();
    }
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