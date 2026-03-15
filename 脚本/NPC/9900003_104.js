var a = 0;
var randomNumber = Array();
var n1;
var n2;
var n3;
var itemData = Array(3010226, 2022000, 1003154, 1003155, 1102275, 1402113, 1452107, 1452131, 1362020, 1332152, 1492103, 1522019, 1532039, 1472143, 1382126, 1462120, 1332126, 1322136, 1372102, 1302149, 1442113, 1432084, 1312095, 1322139, 1402131, 1432119, 1242015, 1212016, 1222016, 1302128, 1042187, 1042174, 1042149, 1702371, 1702382, 1702388, 1072437, 1072348, 1003268, 1003237, 1003038, 1102488, 1102549, 1102450);
var pass = true;
var correct = 0;
var NumberPosition = Array();
function start() {
  a = -1;
  action(1, 0, 0);
}
function action(Z, n, B) {
  if (Z == -1) {
    cm.dispose();
  } else {
    if (Z == 1) {
      a++;
    } else {
      cm.dispose();
    }
    if (a == -1) {
      cm.dispose();
    } else {
      if (a == 0) {
        for (var A = 1; A < 5; A++) {
          if (cm.getSpace(A) < 5) {
            pass = false;
          }
        }
        if (cm.getPlayerLog("数字猜猜猜") >= 5) {
          cm.sendOk("对不起，数字猜猜猜活动一天只能进行五次。");
          cm.dispose();
        } else {
          cm.askMenu("万众期待的HOTTIME时间又到了！亲爱的冒险家，请问你要做什么呢？\r\n#b#L0# 我要玩数字猜猜猜活动！\r\n#L1# 介绍一下此活动。");
        }
      } else {
        if (a == 1) {
          if (B == 0) {
            if (pass) {
              cm.sendNextS("系统将随机产生10个数字，请您做好准备记录下这10个数字。\r\n#r -- 点击下一步开始产生。\r\n #r-- 如果切断对话，参加活动所需的物品不归还。");
            } else {
              cm.sendOk("请让你的所有背包栏空出5个格子。");
              cm.dispose();
            }
          } else if (B == 1) {
            a = -1;
            cm.sendNext("#e数字猜猜猜活动游戏规则：#n#d\r\n\r\n1）系统会随机给出10个数字，并且公示。\r\n2）这10个数字将被打乱，且隐藏。\r\n3）玩家会被随机提问第N个数字是什么\r\n如果回答正确即可得到奖励！\r\n4）玩家一共有3次提问的机会。#e\r\n\r\n5）奖池中有随机5个道具 \r\n - 回答正确1次，随机从里面得到1个道具。\r\n - 回答正确2次，随机从里面得到3个道具。\r\n - 回答正确3次，奖池内所有道具都带走！#n\r\n\r\n 参加活动的时候切记您的所有背包空格都有5格以上的空间。");
          }
        } else {
          if (a == 2) {
            var K;
            var A = 0;
            while (A < 10) {
              K = Math.floor(Math.random() * 40);
              if (checkid(K)) {
                randomNumber.push(K);
                A++;
              }
            }
            var q = "这10个随机数字依次为：\r\n #r- 请拿起您的笔记下这随机的数字！\r\n\r\n#d";
            for (var A = 0; A < randomNumber.length; A++) {
              q += '第' + (A + 1) + "个数字为： - " + randomNumber[A] + "\r\n";
            }
            cm.sendNextS(q);
          } else {
            if (a == 3) {
              cm.sendNextS("正在打乱这10个数字，请点击下一步……。");
            } else {
              if (a == 4) {
                randomNumber.sort(function () {
                  return 0.5 - Math.random();
                });
                var K = Math.floor(Math.random() * 10) + 1;
                var A = 0;
                while (A < 3) {
                  K = Math.floor(Math.random() * 10) + 1;
                  if (checkNumberPosition(K)) {
                    NumberPosition.push(K);
                    A++;
                  }
                }
                cm.askNumber("现在请您输入第" + NumberPosition[0] + "个数字：\r\n #r-- 如果切断对话，参加活动所需的物品不归还。\r\n", 0, 0, 999);
              } else {
                if (a == 5) {
                  n1 = B;
                  cm.askNumber("现在请您输入第" + NumberPosition[1] + "个数字：\r\n #r-- 如果切断对话，参加活动所需的物品不归还。\r\n", 0, 0, 999);
                } else {
                  if (a == 6) {
                    n2 = B;
                    cm.askNumber('现在请您输入第' + NumberPosition[2] + "个数字：\r\n #r-- 如果切断对话，参加活动所需的物品不归还。\r\n", 0, 0, 999);
                  } else {
                    if (a == 7) {
                      n3 = B;
                      cm.sendNextS("你所输入的数字为：\r\n\r\n 第" + NumberPosition[0] + "个数字 -- " + n1 + "\r\n 第" + NumberPosition[1] + "个数字 -- " + n2 + "\r\n 第" + NumberPosition[2] + "个数字 -- " + n3 + '.');
                    } else {
                      if (a == 8) {
                        var q = "现在我来公布结果：\r\n 经过打乱后的10个数字为：\r\n\r\n#b";
                        for (var A = 0; A < randomNumber.length; A++) {
                          if (A == NumberPosition[0] - 1) {
                            q += '第' + (A + 1) + "个数字为： - " + randomNumber[A] + " #r( 您的答案为：" + n1 + ")#b\r\n";
                          } else {
                            if (A == NumberPosition[1] - 1) {
                              q += '第' + (A + 1) + "个数字为： - " + randomNumber[A] + " #r( 您的答案为：" + n2 + ")#b\r\n";
                            } else if (A == NumberPosition[2] - 1) {
                              q += '第' + (A + 1) + "个数字为： - " + randomNumber[A] + " #r( 您的答案为：" + n3 + ")#b\r\n";
                            } else {
                              q += '第' + (A + 1) + "个数字为： - " + randomNumber[A] + "\r\n";
                            }
                          }
                        }
                        cm.sendNextS(q);
                      } else {
                        if (a == 9) {
                          if (randomNumber[NumberPosition[0] - 1] == n1) {
                            correct += 1;
                          }
                          if (randomNumber[NumberPosition[1] - 1] == n2) {
                            correct += 1;
                          }
                          if (randomNumber[NumberPosition[2] - 1] == n3) {
                            correct += 1;
                          }
                          var q = "系统判断您一共答对了" + correct + "次。\r\n\r\n现在奖池里面有下列的道具(随机5个)：\r\n\r\n#b";
                          itemData.sort(function () {
                            return 0.5 - Math.random();
                          });
                          for (var A = 0; A < 5; A++) {
                            q += '#i' + itemData[A] + "#   #z" + itemData[A] + "#\r\n\r\n";
                          }
                          cm.sendNextS(q + "#d\r\n\r\n - 回答正确1次，随机从里面得到1个道具。\r\n - 回答正确2次，随机从里面得到3个道具。\r\n - 回答正确3次，奖池内所有道具都带走！");
                        } else {
                          if (a == 10) {
                            if (correct == 0) {
                              cm.sendOk("对不起，你没有回答正确。\r\n领取物品的必要条件是必须至少回答一个正确。");
                              cm.dispose();
                            } else {
                              if (correct == 3) {
                                var q = "恭喜你！回答3个全部正确！你将获取奖池内的所有物品！\r\n\r\n#b";
                                for (var A = 0; A < 5; A++) {
                                  q += '#i' + itemData[A] + "#   #z" + itemData[A] + "#\r\n\r\n";
                                }
                                cm.sendNextS(q + "#d\r\n\r\n请妥善保管哦！");
                              } else {
                                if (correct == 1) {
                                  cm.gainItem(itemData[0], 1);
                                  cm.sendOk("赠送成功！喜欢奖池里面的道具吗？");
                                  cm.dispose();
                                } else {
                                  if (correct == 2) {
                                    var q = "恭喜你！回答正确" + correct + "次，按照规则，你将获取奖池内的：\r\n\r\n#b";
                                    for (var A = 0; A < 3; A++) {
                                      q += '#i' + itemData[A] + "#   #z" + itemData[A] + "#\r\n\r\n";
                                    }
                                    a = 11;
                                    cm.sendNextS(q + "#d\r\n\r\n请妥善保管哦！");
                                  } else {
                                    cm.sendOk("错误！请和管理员联系。\r\n错误代码：" + correct);
                                  }
                                }
                              }
                            }
                            cm.addPlayerLog("数字猜猜猜");
                          } else {
                            if (a == 11) {
                              for (var A = 0; A < 5; A++) {
                                cm.gainItem(itemData[A], 1);
                              }
                              cm.sendOk("赠送成功！喜欢奖池里面的道具吗？");
                              cm.dispose();
                            } else {
                              if (a == 12) {
                                for (var A = 0; A < 3; A++) {
                                  cm.gainItem(itemData[A], 1);
                                }
                                cm.sendOk("赠送成功！喜欢奖池里面的道具吗？");
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
  }
}
function checkid(Z) {
  var n = 0;
  while (randomNumber.length >= n) {
    if (randomNumber[n] == Z) {
      return false;
    }
    n++;
  }
  return true;
}
function checkNumberPosition(Z) {
  var n = 0;
  while (NumberPosition.length >= n) {
    if (NumberPosition[n] == Z) {
      return false;
    }
    n++;
  }
  return true;
}
var status = -1;