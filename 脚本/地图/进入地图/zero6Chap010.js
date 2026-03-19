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
      cm.npc_ChangeController(2470017, "oid=27574", -858, 177, 3, -908, -808, 0, false, 0, false);
      cm.npc_ChangeController(2470018, 'oid=27575', -465, 177, 6, -515, -415, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("……我们明明是往玩具城方向出发的，这里…… 怎么像时间神殿？我确定在拉比斯和拉兹丽的内心世界里见过这个地方…… 你认为呢？", 41, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("这里…… 时间的流逝被奇怪地阻碍着……", 41, 2400006, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("说是玩具城的时间停止之后，破碎的时间形成了奇异的空间，对吧。说不定这里就是那个空间……", 41, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("我们怎么样才能出去呢？", 41, 2400005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("阿尔法，前面有人。", 41, 2400006, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("人……？在时间神殿的人，那就是神官啦？", 41, 2400005, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(2);
                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(0);
                      cm.inGameDirectionEvent_PushMoveInfo(0, 200, -673, 177);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(6915);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("国王殿下认为，我们玩具城的人们要想永远幸福，就要不长大，永远做个小孩子。", 33, 2470017, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("时间女神啊…… 请不要不理会我们的恳求。", 33, 2470017, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("……时间停止的代价很大。停止的时间会生成无数的时间碎片…… 你们能承担那些碎片吗？", 33, 2470018, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("负面影响以及我们将要承受的事情。我们有思想准备。", 33, 2470017, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("那么，我就遵从你们的意愿，将玩具城的时间停止。请你们牢记，再次让时间流逝时会有比现在更大的危险。", 33, 2470018, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("我们记住了。", 33, 2470017, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("…………", 33, 2470018, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushMoveInfo(0, 500, -1545, 177);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1743);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("女神伦娜和从玩具城来的人……", 41, 2400005, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("看来是到了让玩具城时间停止的时候了。", 41, 2400006, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("是破碎的时间碎片让我们看到过去的吧。", 41, 2400005, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("……女神是…… 那样的啊……", 41, 2400006, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_MoveAction(0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial");
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("#face7#……！空间在关闭。那是破碎的时间碎片生成的空间的界线吗……？", 41, 2400005, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("空间关闭的话，我们就能到玩具城了吗？", 41, 2400006, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("好像是那样…… 不会变得危险吧？我们看看这次会到哪里吧。", 41, 2400005, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else if (status === V++) {
                                                            cm.dispose();
                                                            cm.warp(327090020, 0, false);
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