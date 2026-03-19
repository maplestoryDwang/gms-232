var status = -1;
var selectionLog = [];
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
      cm.npc_ChangeController(2480007, "oid=28040", 362, -276, 20, 312, 412, 1, false, 0, false);
      cm.npc_ChangeController(2410006, "oid=28041", 725, -189, 23, 675, 730, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("越来越觉得奇怪，不是吗？这里是影子神殿却连一个影子怪物都看不到…… 到底是怎么回事？", 41, 2480009, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#b(#face11#是成为纳因之前的我……吗。原来我以前就来过这里啊。但是为什么没能觉醒呢？)", 41, 2400005, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("额…… 到处都是灰尘和蜘蛛网…… 还是出去吧。我们进入这里已经算是违纪了。", 41, 2480009, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(2);
              cm.inGameDirectionEvent_AskAnswerTime(4000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(1);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("……？！那个是…… 什么呢？那个女孩…… 怎么在闪着奇怪的光？", 41, 2480009, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#b(#face1#那是 #p2400006#……！不，虽然她的名字还不是#p2400006#…… 但不管怎么说，那就是你自己。快去让她觉醒！)", 41, 2400005, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("我感受到了奇怪的力量…… 那就是制造出影子怪物的原因吗……？嗯。说不定除掉她会更好呢。", 41, 2480009, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("#b(#face1#竟然说除掉她，你在说什么胡话啊！快去叫醒她！)", 41, 2400005, true, true);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(2480010, "oid=2734401", 358, -10, 138, 308, 408, 0, false, 0, false);
                              cm.npc_SetSpecialAction("oid=2734401", 'summon', 0, 0);
                              cm.sendNormalTalk("赛芬……！你怎么自己跑到这里，这样很危险。", 41, 2480010, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("卫生队长？卫生队长你怎么会来到这里…… 有怪物的话，那可怎么办。这里很危险。快回去吧。", 41, 2480009, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("明知危险却进来的赛芬你怎么样呢…… 哈啊。别让我担心。", 41, 2480010, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("#face10#啊…… 很抱歉。我只是太好奇了……", 41, 2480009, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("居然由于好奇都忘了危险。赛芬确实还太年轻……", 41, 2480010, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("那个…… 从以前开始我就有种奇怪的感觉。就好像有人在影子神殿呼唤我似的。所以……", 41, 2480009, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("你说呼唤你。怎么会有人在这满是灰尘的神殿喊赛芬你呢？", 41, 2480010, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("但是……那边那个女孩……给人一种莫名的亲近感。队长，那个孩子是谁啊？为什么会被关在影子神殿里呢？那个孩子和影子怪物有什么关系吗？", 41, 2480009, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("这个么。她是在这影子神殿中制作出影子怪物的人吗？", 41, 2480010, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("也许会是那样…… 但我感觉她不是敌人。", 41, 2480009, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("该死…… 本能是没办法的吗。虽然现在渐渐觉得#r这次的记忆也该结束了#k……", 41, 2480010, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk('嗯？', 41, 2480009, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("#b#face1#(就这么傻傻地看着怎么行！威尔打算清除你的记忆啊！快逃走！让你逃走啊！)", 41, 2400005, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("没什么。好了，那就回去吧，赛芬。没必要关心#r不洁者#k。", 41, 2480010, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("#face5#嗯。那我回去了。", 41, 2480009, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_MoveAction(1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_MoveAction(0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk("#b(#face1#不能走……！不能！)", 41, 2400005, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk("#b(#face11#……空间在闭合。是记忆结束了吗？……该死。这是我忘记的记忆吗？)", 41, 2400005, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk("#b(#face1##p2400006#是不洁者…… 结论是这个！)", 41, 2400005, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.forceStartQuest(40714, '1');
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else if (status === V++) {
                                                                      cm.dispose();
                                                                      cm.warp(328000000, 5, false);
                                                                      cm.setInGameDirectionMode(false, true, false);
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
            }
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;