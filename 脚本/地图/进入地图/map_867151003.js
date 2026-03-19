var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(9401219, "oid=256223", -1236, 86, 14, -1286, -1186, 1, false, 0, false);
      cm.npc_ChangeController(9401220, "oid=256224", -1481, 86, 20, -1531, -1431, 0, false, 0, false);
      cm.npc_ChangeController(9401221, "oid=256225", 464, 86, 26, 414, 514, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.sendNewEffects(17, [0, 2000, 2000, -1350, 100]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.sendNormalTalk_Bottom("小云！事情还顺利吗？\r\n这位就是我们的（准）王牌#h0#！", 37, 9401219, false, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("知道，我们刚刚见过面了，\r\n不过到底是不是王牌，就得等着瞧了……", 37, 9401220, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("都说了我的眼光绝对错不了！\r\n来，那就麻烦你汇报一下吧！", 37, 9401219, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("好，好，也该轮到我了。", 37, 9401220, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("那就正式介绍一下，见到你很高兴，#h0#，我叫小云。\r\n在冒险岛探险队我算是负责杂务吧。", 37, 9401220, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("我们冒险岛探险队这个组织呢……\r\n负责制定远大计划的人是多尼队长，负责那些奇思妙想的人是小风，\r\n而受苦受累让这些想法变为现实的人就是我了。", 37, 9401220, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("……这孩子，有时候就是喜欢冷嘲热讽的……\r\n不过心地还是善良的，你可别误会。", 37, 9401219, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("相信你已经听说过海市蜃楼岛了，许多年来，那地方一直都是个谜，\r\n那座岛那么大，到底是怎么做到的？", 37, 9401220, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("答案就是雾。\r\n虽说从一开始这座岛就位于大海中央的偏远之地，不过一直有重重迷雾环绕着岛屿，以至于才一直不为人所知。", 37, 9401220, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("那里不仅波涛汹涌，迷雾重重，雪上加霜的是，还满是暗礁，\r\n坦白说，很难派遣大规模船只前往或直接建立勘探基地。", 37, 9401220, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("所以一直以来，我们采用的调查方法都是派飞机送出少数调查队员……可毕竟环境恶劣，别提正式展开调查了，能保住一条性命对所有人来说已是不易。", 37, 9401220, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("所！以！呢！瞧～！\r\n我才会招募超级王牌（候选人）#h0#你加盟嘛！我就是这个意思！！！", 37, 9401219, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("这不过是我们多尼队长个人的主张，\r\n在我看来，你和那些可怜的调查队员也并没有什么两样嘛？", 37, 9401220, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("小云！太失礼了！", 37, 9401219, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("若是你在岛上遇险，并且毫无收获，光是派遣救援队的费用也会让我们损失惨重。", 37, 9401220, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("我们自己并没有能力保障你在岛上的生存……\r\n可我们也绝不会贸然派遣不够格的菜鸟前往险境。", 37, 9401220, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("所以你有必要证明自己，证明自己有足够的战斗力，不会成为我们的累赘。", 37, 9401220, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("方法很简单，总部下面的海岸有个用来训练调查队员的模拟训练场。", 37, 9401220, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#b成功完成一次模拟训练#k，熟悉生存的基础套路，我们便认可你够格被派遣。", 37, 9401220, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("……抱歉，#h0#，我本人对你的能力深信不疑，可毕竟这是我们的规矩……\r\n还希望你不要太伤心，#h0#！速战速决吧！", 37, 9401219, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("那什么，等你准备就绪我就送你去训练场，来告诉我一声就好，如果你还有其他问题也可以问我。", 37, 9401220, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.forceStartQuest(65633, '');
                                                    cm.updateInfoQuest(65665, "ldate=20/08/11;Dir65633=1;playCount=0");
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNewEffects(14, [0, 2000, 1000]);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNewEffects(19, [0]);
                                                      } else if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.dispose();
                                                        cm.warp(867151000, 1, false);
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
                }
              }
            }
          }
        }
      }
    }
  }
}