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
      cm.sendNormalTalk("#b(叮咚叮咚叮咚叮咚-！！！！)#k\r\n\r\n呃啊！还真是不适应啊……没有震动模式吗？啊，有啊！哎！", 2, 3001006, false, true);
    } else {
      if (status === v++) {
        cm.fieldEffect_Tremble(0, 500, 30);
        cm.sendNormalTalk("震动的很有劲嘛。喂？", 2, 3001006, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("啊，你好啊~ 请问是爆莉萌天使吗~", 0, 3001006, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("是我。你是。(语气很奇怪嘛……这是新单元吗？)", 2, 3001006, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("是这样的~最近#p3001004#和#p3001005#两个人关系好像亲近了些~ 想问问你是否好奇两个人的关系~", 0, 3001006, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("哦。很好奇啊。请告诉我吧。", 2, 3001006, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("我叫#p3001006#~正如爆莉萌天使所知道的，我是商团的成员~当然，你应该已经清楚我们影子商团的交易方式了吧~", 0, 3001006, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("当然。绝不做没有收益的事嘛~！ (哇，口气越来越像啦！)", 2, 3001006, true, true);
                  } else {
                    if (status === v++) {
                      cm.askAcceptDecline("正确~我想用我的情报和你之前得到的#t4033367#做交换~ 怎么样~？\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 68,044", 0, 3001006);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk("合作愉快哦~那么我就把知道的情报告诉你~", 0, 3001006, false, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk("以前他们的关系是很好的……但是不知从哪天起， #b两人的业绩出现了些许差距后#k两人的关系就渐渐疏远了~ ", 0, 3001006, true, true);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk("… 刚开始差距就像黏在卡卡隆脚趾的灰那样小得不能再小了~但就是这么小的差距，#p3001005#也完全无法容忍，为了缩小这种差距，他开始采取各种各样的阴谋手段……", 0, 3001006, true, true);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk("… 刚开始他采取的手段都很有成效，#p3001005#逐渐开始领先。但是这些手段最终导致他的信用被消耗殆尽，现在两人之间的差距已经是天地之别了~", 0, 3001006, true, true);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk("就这样，他们两人终于形同陌路……怎么样，是不是一个很伤感的故事呢~？", 0, 3001006, true, true);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk("(听完以后，怎么觉得很像是#r狂龙战士和贝德罗斯的故事#k……) 难道他们两个完全不可能和解吗？", 2, 3001006, true, true);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk("你也知道，我们商团绝不会做没有收益的事情，没有人试图改善过他们二人的关系，因此这个问题没有答案，吧……", 0, 3001006, true, true);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk("如果我去争取让他们和好呢？！", 2, 3001006, true, true);
                                    } else if (status === v++) {
                                      cm.sendNormalTalk("！！？真的吗~？你要不求回报，帮助他们两人重归于好吗~？这真是，太感动了~等一下~我得擦擦眼泪~下次再联系吧~", 0, 3001006, true, true);
                                      cm.forceCompleteQuest(31634);
                                      cm.gainExp(68044);
                                      cm.gainItem(4033389, -1);
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