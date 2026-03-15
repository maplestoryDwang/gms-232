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
      cm.askMenu("#b#e[鬼怪夜市]鬼怪烟花#n#k\r\n#i2630975:#\r\n#r鬼怪夜市的名品！#k #b鬼怪烟花#k火热出售中！\r\n#L0##b购买鬼怪烟花#l\r\n#L1#鬼怪烟花是什么？#l\r\n#L2#确认鬼怪烟花记录#l\r\n#L3#什么都不做。#k#l", 4, 9062228);
    } else {
      var w = "action分支" + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    if (cm.haveItem(4310275, 50)) {
      cm.askYesNo("确认将#i4310275:# #b#t4310275##k #r#e50个#n#k放入自动贩卖机购买烟花吗？\r\n\r\n（持有的鬼怪铜币: #r" + cm.getItemQuantity(4310275) + "个#k）", 2, 9062228);
    } else {
      cm.sendNormalTalk("#i4310275:# #b#t4310275##k不足，我看上去不聪明，但也是会算数的。", 0, 9062228, false, true);
    }
  } else {
    if (status === V++) {
      if (cm.haveItem(4310275, 50)) {
        cm.sendNormalTalk("放入#i4310275:# #b#t4310275##k 50个后，将出现一个\r\n#i2630975:# #b#t2630975##k。", 0, 9062228, false, false);
        cm.gainItem(2630975, 1);
        cm.gainItem(4310275, -50);
      } else {
        cm.sendNormalTalk('(厉害……)', 2, 9062228, true, false);
      }
    } else if (status === V++) {
      cm.dispose();
    }
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk('砰！！！', 4, 9062228, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("吓我一跳，这是什么？", 2, 9062228, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("鬼怪夜市，不是有点冷清嘛？\r\n你不想试试一点能够砰砰爆破的东西吗？", 4, 9062228, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("不是，也不用特地爆破什么……", 2, 9062228, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("所以我准备好了！\r\n由鬼怪们制作的多彩#i2630975:# #b#t2630975##k！！！", 4, 9062228, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("交给我#i4310275:#  #b#t4310275##k #e#r50个#k#n，就可以购买\r\n#i2630975:# #b#t2630975##k！\r\n#b在这个夜市中使用后，#k 天空就会绽放鬼怪烟花，\r\n#e砰！！！砰！！！#n", 4, 9062228, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("(耳朵疼……)", 2, 9062228, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("你问我这就是全部吗？\r\n如果是普通的烟花，怎么能称作鬼怪烟花呢！！\r\n事实是，根据烟花的种类可以获得不同的奖励！！", 4, 9062228, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("烟花有以下种类！！！\r\n\r\n\r\n#e第1名#n :#k #b #t4310275# 1000个 #r#e(0。2%)#n \r\n#k#e第2名#n :#k #b #n#t4310275# 500个 #r#e(0。8%)#n#k\r\n#e第3名#n :#k#b #n #t4310275# 100个 #r#e(9%)#n\r\n#k#e第4名#n :#k #b #t4310275# 50个 #r#e(30%)#n\r\n#k#e第5名#n :  #k#b#i2023879:# 满月神圣气息#k#r#e (60%)#n", 4, 9062228, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("如果你没能在#b#t2630975##k获得#b#t4310275##k，也不要错过我。\r\n取而代之，我会帮你获取#i2023879:# #b满月神圣气息#k。", 4, 9062228, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("作为参考，烟花每天的使用次数#b无限制#k，但是\r\n#b一天后#k 将会随着鬼怪的力量一同消失，请注意！！！", 4, 9062228, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("那就请你用烟花充满夜市的天空吧！！！\r\n砰！！！砰！！！", 4, 9062228, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("啊，大声喊真是太累了。", 4, 9062228, true, true);
                          } else if (status === V++) {
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
      }
    }
  }
}
function action分支2(f, W, U, V) {
  var w = cm.getNumberFromQuestInfo(500839, "total");
  if (status <= V++) {
    var N = cm.getNumberFromQuestInfo(500839, '1');
    var u = cm.getNumberFromQuestInfo(500839, '2');
    var Q = cm.getNumberFromQuestInfo(500839, '3');
    var m = cm.getNumberFromQuestInfo(500839, '4');
    var c = cm.getNumberFromQuestInfo(500839, '5');
    if (w == 0) {
      cm.sendNormalTalk("原来你一次都没使用过#b#t2630975##k。", 4, 9062228, false, true);
    } else {
      cm.sendNormalTalk("#e[鬼怪烟花中奖纪录]#n\r\n\r\n#e第1名:#k#r " + N + "次#k\r\n第2名: #r" + u + "次#k\r\n第3名: #r" + Q + "次#k\r\n第4名: #r" + m + "次#k\r\n第5名: #r" + c + "次#k\r\n\r\n累计次数: #e#r" + w + '次#k#n', 4, 9062228, false, true);
    }
  } else {
    if (status === V++) {
      if (w == 0) {
        cm.sendNormalTalk("我记得从我这里购买过烟花的所有面孔。", 4, 9062228, true, false);
        cm.dispose();
      } else {
        cm.sendNormalTalk("即使没有收获期待的结果，也请你不要失望。\r\n\r\n人生中这并不是全部。", 4, 9062228, true, true);
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk("(一个自动贩卖机知道些什么……)", 2, 9062228, true, true);
      } else if (status === V++) {
        cm.dispose();
      }
    }
  }
}
function action分支3(f, W, U, V) {
  if (status <= V++) {
    cm.dispose();
  }
}