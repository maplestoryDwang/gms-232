var status = -1;
function action(f, E, e) {
  if (f === 0) {
    status--;
  } else {
    status++;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true);
      cm.inGameDirectionEvent_MoveAction(4);
      cm.npc_ChangeController(1032200, 800, -40, 1);
      cm.npc_SetSpecialAction(1032200, "summon");
      cm.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon40");
      cm.effect_Direction("Effect/Direction8.img/lightningTutorial2/Scene0");
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 400, 600, 0);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove(1032200, -1, 200, 100);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.sendNextNoESC("有人倒在那里。没事吧？", 1032200);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove(1032200, -1, 600, 100);
              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
            } else {
              if (status === V++) {
                cm.effect_Direction("Effect/Direction8.img/lightningTutorial2/Scene0");
                cm.inGameDirectionEvent_AskAnswerTime(4000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(0);
                  cm.inGameDirectionEvent_OneTimeAction(4, 2000);
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/effect/mercedesInIce/merBalloon/1"], [2000, 0, -120]);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.effect_Direction("Effect/Direction8.img/lightningTutorial2/Scene2");
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.sendNextNoESC("你醒了。太好了。我叫拉尼娅，这里是妖精#b魔法密林#k附近的小森林。", 1032200);
                    } else {
                      if (status === V++) {
                        cm.sendNextSNoESC("魔法密林？没听说过啊。你知道#b埃欧雷#k吗？");
                      } else {
                        if (status === V++) {
                          cm.sendNextNoESC("埃欧雷？……以前有人路过这里唱过一首歌，歌里好像提到过……记不清了。", 1032200);
                        } else {
                          if (status === V++) {
                            cm.sendNextSNoESC("(明明记得，将黑魔法师关在封印里的时候，我也一同被关了进去。之后究竟过了多长时间？)那你知道黑魔法师吗？");
                          } else {
                            if (status === V++) {
                              cm.sendNextNoESC("啊，这个我记得。几百年前，有一个叫做黑魔法师的坏蛋，他非常厉害，据说能把整个大陆摧毁。有一天，出现了五位英雄，消灭了黑魔法师，使世界重新恢复和平。", 1032200);
                            } else {
                              if (status === V++) {
                                cm.sendNextSNoESC("这样啊……已经过了几百年了啊。所以才会感觉心里憋闷，恶心吗？");
                              } else {
                                if (status === V++) {
                                  cm.sendNextNoESC('啊？你在说什么啊？', 1032200);
                                } else {
                                  if (status === V++) {
                                    cm.sendNextSNoESC("没事。你的父母呢？自己来这里很危险的。");
                                  } else {
                                    if (status === V++) {
                                      cm.sendNextNoESC("…不知道。我只记得在这片森林遇到佩妮之后的事情。啊，佩妮是和我一起生活的小猫。", 1032200);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNextSNoESC("对不起。我太冒失了。");
                                      } else {
                                        if (status === V++) {
                                          cm.sendNextNoESC("没关系。因为有佩妮在，我从来都没有感觉到孤单哦！不过还是很想念和人说话的感觉。佩妮每天就知道唠叨，哼。", 1032200);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNextSNoESC("我嘴巴很笨的。");
                                          } else {
                                            if (status === V++) {
                                              cm.sendNextNoESC("没事。这里已经很久没人来了。我介绍佩妮给你认识。你愿意来我们家玩吗？", 1032200);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNextSNoESC("(所有的事情都结束了，过去这么久，这个世界上连一个认识的人都没有，我可以就这样安静的活下去吗？) 不麻烦的话，参观一下拉尼娅的家吧？");
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove(1032200, 1, 600, 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_MoveAction(2);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else if (status === V++) {
                                                    cm.npc_LeaveField(1032200);
                                                    cm.setInGameDirectionMode(false);
                                                    cm.warp(910141050, 0);
                                                    cm.dispose();
                                                  } else {
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