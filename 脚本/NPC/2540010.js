var status = -1;
var selectionLog = [];
var mobList = [[9309020, '猿公'], [9309046, "古代蓝色水灵"], [9309047, '古代紫色水灵'], [9309050, "花蘑菇"], [9309051, "绿水灵"], [9309053, '火野猪'], [9309054, "黑鳄鱼"], [9309055, '鳄鱼'], [9309056, "青螃蟹"], [9309057, "红螃蟹"], [9309058, '乌龟'], [9309059, "蓝独角狮"], [9309060, '黄独角狮'], [9309061, "红独角狮"], [9309062, '野狼'], [9309063, '白狼'], [9309064, "沙漠蛇先生"], [9309065, '壁虎'], [9309066, '丁满'], [9309067, "秃鹫先生"], [9309068, '沙漠土拨鼠'], [9309069, "沙漠毒蝎"], [9309070, '豪猪'], [9309071, '棕熊'], [9309072, "柔道猫熊"], [9309073, "橡木甲虫"], [9309074, "金属甲虫"], [9309075, '哈维'], [9309076, "血腥哈维"], [9309077, '小蜥蜴'], [9309078, "泥人妖"], [9309082, '火独眼兽'], [9309083, '怪猫'], [9309084, "红色沙漠矮人"], [9309085, "橙色古代水灵"], [9309087, "蓝色古代水灵"], [9309088, "黄色卷毛牛"], [9309089, '紫色卷毛牛'], [9309090, "蓝色食虫水灵"], [9309091, "黄色食虫水灵"], [9309092, "古代蓝龟"], [9309093, '古代橙龟'], [9309094, "蓝色火山虫"], [9309095, "褐色火山虫"], [9309096, "巨大橙色水灵"], [9309097, "巨大紫色水灵"], [9309098, "蓝色花牛"], [9309099, '绿色花牛'], [9309104, "白刺熊"], [9309105, "褐刺熊"], [9309108, "花石头人"], [9309109, '黑花石头人'], [9309110, "古代金龟子"], [9309111, "橙色古代金龟子"], [9309114, "红色食虫花妖精"], [9309115, "蓝色食虫花妖精"], [9309118, '黄色蘑菇蝙蝠'], [9309119, "红色蘑菇蝙蝠"], [9309125, '猴子'], [9309129, "蝴蝶精"]];
var questions = [];
function start() {
  action(1, 0, 0);
}
function action(W, O, i) {
  status++;
  selectionLog[status] = i;
  var v = cm.getEventManager("副本_起源之塔");
  var s = parseInt(v.getProperty("stage49_stage"));
  var N = parseInt(v.getProperty("stage49_correct"));
  if (s == 0) {
    action0(W, O, i, v, N);
  } else if (s == 1) {
    action1(W, O, i, v, N);
  } else {
    actionEnd(W, O, i, v);
  }
}
function action0(W, O, i, v, s) {
  if (status < 0) {
    cm.dispose();
  } else {
    if (status === 0) {
      if (s == 0) {
        var N = "在起源之塔到处乱闯的孩子，原来是你啊。让我来确认一下你有没有向我挑战的资格。如果你能答对#r#e5个问题#k#n，我就给你挑战的机会。";
      } else {
        if (s == 1) {
          var N = "第二个问题！这次也要发挥出你的实力哦。";
        } else {
          if (s == 2) {
            var N = "第三个问题是什么呢？来看看吧！噔！";
          } else {
            if (s == 3) {
              var N = "第四个问题一定要深思熟虑呀。";
            } else {
              if (s == 4) {
                var N = "好了~接下去是第五个问题，也是最后一个问题！你也该打起精神来了。（小声嘟哝）要是这个问题也答对了，就麻烦了……";
              }
            }
          }
        }
      }
      cm.sendNext(N);
    } else {
      if (status === 1) {
        generateMob(v);
        cm.sendOk("我在右侧创造了一个怪物的幻影。你只要根据幻象，说出怪物的名字就行。做好回答的准备之后，就重新和我说话。");
      } else if (status === 2) {
        v.setProperty("stage49_stage", 1);
        cm.dispose();
      } else {
        cm.dispose();
      }
    }
  }
}
function action1(W, O, i, v, s) {
  var N = parseInt(v.getProperty("stage49_reset"));
  if (status < 0) {
    cm.dispose();
  } else {
    if (status === 0) {
      var Y = "怎么样？你知道右侧怪物的名字吗？\r\n\r\n";
      if (N == 0) {
        Y += "#L1##b不知道……换个问题吧。（没有剩余机会了）#l\r\n";
      } else {
        Y += "#L1##b不知道……换个问题吧。（剩余机会：" + N + "次）#l\r\n";
      }
      Y += "#L2##b嗯，我好像知道了。正确答案是……#l\r\n";
      Y += "#L3##b我再想想。#l\r\n";
      Y += "#L4##b喂！这种东西让我怎么猜啊！#l\r\n";
      cm.askMenu(Y);
    } else {
      if (status === 1) {
        if (selectionLog[1] == 1) {
          if (N == 999990) {
            cm.sendOk("没有机会了，笨蛋！好好想想吧！");
          } else {
            cm.sendOk("嗯……真是可怜，我就帮你换一个问题吧。反正你的机会也是有限的。");
            v.setProperty("stage49_stage", 0);
            v.setProperty("stage49_reset", N - 1);
            cm.killAllMobNoExp();
          }
          cm.dispose();
        } else {
          if (selectionLog[1] == 2) {
            cm.askText("哦吼……那么答案是什么呢？记住，就连中间的空格也不能够错哦。");
          } else if (selectionLog[1] == 4) {
            cm.sendOk("哦嚯嚯，连这种问题都回答不出来的人是没有挑战我的资格的！没点本事的话就早点回去吧！");
          } else {
            cm.dispose();
          }
        }
      } else {
        if (status === 2) {
          if (selectionLog[1] == 2) {
            var y = parseInt(v.getProperty("stage49_curMob"));
            var S = cm.getText();
            if (S === mobList[y][1]) {
              if (s == 0) {
                var Y = "答对了！你有本事来到这里，这种问题应该难不倒你。";
                Y += "做好回答下一个问题的准备之后，再重新找我。";
              } else {
                if (s == 1) {
                  var Y = "哇~不错嘛？你只要再答对三个问题就行。当然是在你不犯错的情况下。";
                  Y += "做好回答下一个问题的准备之后，再重新找我。";
                } else {
                  if (s == 2) {
                    var Y = "你比我想象的厉害。没想到能答对这么多问题。这次我得挑个难一点的问题。";
                    Y += "做好回答下一个问题的准备之后，再重新找我。";
                  } else {
                    if (s == 3) {
                      var Y = "哎呀……又答对了。看来我也要认真一点了。";
                      Y += "做好回答下一个问题的准备之后，再重新找我。";
                    } else {
                      var Y = "真没想到居然还有人能通过这里……哼，好吧。我知道你很聪明。希望你也具有和你知识相符的力量……";
                    }
                  }
                }
              }
              cm.sendNext(Y);
            } else {
              v.restartEventTimer(Math.max(3000, v.getTimeLeft() - 300000));
              cm.getMap().getWeatherEffectNotice("糟糕，朦胧石的保护时间被桃乐丝扣除了5分钟！下次回答前一定要想清楚啊！", 147, 60000, 1);
              cm.sendOk("答错了，你个笨蛋！不聪明的人会受到桃乐丝的惩罚！", 2540010);
              cm.dispose();
            }
          } else {
            cm.dispose();
          }
        } else {
          if (status === 3) {
            if (selectionLog[1] == 2) {
              cm.killAllMobNoExp();
              v.setProperty("stage49_correct", s + 1);
              var N = parseInt(v.getProperty("stage49_reset"));
              v.setProperty("stage49_reset", N + 1);
              if (s == 4) {
                cm.hideNpc(2540010);
                cm.getMap().getWeatherEffectNotice("哇！真是太棒了！终于见到桃乐丝了。请到下一层将桃乐丝消灭吧。", 147, 60000, 1);
                cm.fieldEffect_ScreenMsg("UI/UIWindowPL.cmg/HiddenCatch/StageImg/clear");
                v.setProperty("stage49", "clear");
                v.setProperty("stage49_stage", 2);
              } else {
                v.setProperty("stage49_stage", 0);
              }
              cm.dispose();
            } else {
              cm.dispose();
            }
          } else {
            cm.dispose();
          }
        }
      }
    }
  }
}
function actionEnd(W, O, i, v) {
  cm.sendOk("我已经有了挑战我的资格。我在楼上等你。");
  cm.dispose();
}
function generateMob(W) {
  curMob = randomNum(0, mobList.length - 1);
  W.setProperty("stage49_curMob", curMob);
  var O = W.getMonster(mobList[curMob][0]);
  O.getStats().setInvincible(true);
  cm.getMap().spawnMonsterOnGroundBelow(O, new java.awt.Point(600, 185));
}
function randomNum(W, O) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * W + 1, 10);
    case 2:
      return parseInt(Math.random() * (O - W + 1) + W, 10);
    default:
      return 0;
  }
}