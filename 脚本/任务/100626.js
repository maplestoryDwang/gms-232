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
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk("你集中精神认真感受周围声音的流动。\r\n能感觉到气息流吗？", 4, 9062317, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("气息流……？指的是此处飘散的这个吗？", 2, 0, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("你胡说什么。那是我的毛。\r\n嗯，看来我们的修炼对你来说还是有点困难。", 4, 9062317, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("但你别担心。在我们熊猫仙人中，有#b#e三位实力最超群的仙人#n#k为帮助像你这样修炼不足的人，#b#e特别准备了宝物#n#k。", 4, 9062317, true, true);
          } else {
            if (status === v++) {
              cm.askYesNo("怎么样，你要领取#b#e仙人的宝物#n#k吗？", 4, 9062317);
            } else {
              if (status === v++) {
                cm.forceCompleteQuest(100626);
                cm.openUIWithOption(3, 80002943);
                cm.playerMessage(5, "获得了<白公的笛子>技能。");
                cm.playerMessage(5, "从现在开始，你去等级范围怪物出没的地方，就可以使用白公的笛子。");
                cm.sendNormalTalk("这把笛子是仙人中力量最强大的#b白公#k制作的。\r\n在音乐方面造诣很深的#b白公#k通过音乐进行修炼，最终达到了至高的境界。\r\n来，你来吹奏试试。", 4, 9062317, false, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("嗯……笛子没有发出声音……", 2, 0, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("我给你的这把#e#b白公的笛子#n#k不是一般人能操纵的乐器，\r\n是#r蕴含神仙气息#k的特殊笛子。\r\n只有可以操纵气息流的人才能演奏它。", 4, 9062317, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("带着#e#b白公的笛子#n#k去#r#e狩猎等级范围怪物#n#k，\r\n循着气息流一路追踪，就有一定概率可以找到#b#e#i2632107# #t2632107##n#k。", 4, 9062317, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk("给#e#b白公的笛子#n#k#r蓄满气息#k，\r\n就可以#b#e演奏#k#n笛子了！！", 4, 9062317, true, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk("收集#b#e#t2632107##n#k时，\r\n可以同时获得#e#r100点觉醒气息#k#n。\r\n是不是很棒？", 4, 9062317, true, true);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk("笛子演奏开始后，\r\n将可以找到更多#b#e#i2632107# #t2632107##n#k。\r\n还有，等你完成#e白公的秘籍<第2章>#n修炼后，#b#e白公的笛子#n#k就会恢复原本的力量，变得更强。", 4, 9062317, true, true);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk("等你学完#e白公的秘籍<第2章>#n，再来找我。\r\n到时笛子会得到强化，演奏笛子时，将可以找到更多#b#e#i2632107# #t2632107##n#k。", 4, 9062317, true, true);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk("那赶快开始修炼吧！\r\n通向成仙之路的修炼道阻且长！\r\n\r\n\r\n#r※ 等级范围怪物是以角色等级为准，等级差异在#e-20级~+20级范围#n内的怪物。", 4, 9062317, true, true);
                              } else if (status === v++) {
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