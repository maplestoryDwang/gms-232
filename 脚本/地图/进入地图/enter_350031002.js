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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(0);
      cm.npc_ChangeController(1540450, "oid=22392023", -110, 21, 2, -160, -60, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22392023", "summon", 0, 0);
      cm.npc_ChangeController(1540451, "oid=22392024", -180, 21, 2, -230, -130, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22392024", 'summon', 0, 0);
      cm.npc_ChangeController(1540453, "oid=22392025", 20, 21, 2, -30, 70, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22392025", 'summon', 0, 0);
      cm.npc_ChangeController(1540452, "oid=22392026", 80, 21, 3, 30, 130, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22392026", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 0, 100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#那我们整理一下作战计划吧。", 37, 1540450, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("我们还有其他作战计划吗？\r\n无非是从前方扰乱敌人，然后从旁边悄悄进入……", 37, 1540452, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("没错。\r\n这是标榜混战的迂回战略。", 37, 1540451, true, true);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 0, 0);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("通过对弗朗西斯的设计图进行分析，\r\n我们发现黑色天堂有#r两个致命弱点#k。", 37, 1540451, false, true);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect2.img/blackHeaven/BH_pic1", 0, 1500, 0, 0, 12, 4, 0);
                        cm.sendNormalTalk_Bottom("第一，黑色天堂太大了。", 37, 1540451, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("没错。而且我们太小了。", 37, 1540452, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("请听我说。\r\n如果过于庞大，就很难做好各个方面的防御工作。", 37, 1540451, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("如果船体太大，那能够趁虚而入的地方就更多。\r\n不是吗？", 37, 1540451, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("……！", 37, 1540452, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#……第二个弱点是什么，南哈特？", 37, 1540450, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("第二，黑色天堂的动力源集中在一个地方。", 37, 1540451, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1500, 0, 0, 0, 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect2.img/blackHeaven/BH_pic2", 0, 1500, 0, 0, 12, 4, 0);
                                        cm.sendNormalTalk_Bottom("设计图上画得黑漆漆的#r可疑的中央动力室#k……\r\n这可谓是黑色天堂的心脏。", 37, 1540451, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("究竟是通过什么动力源，让巨大的船体运作的呢？", 37, 1540453, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("这也是我的疑问。\r\n如果直接进入动力室，应该就知道了。", 37, 1540451, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 1500, 0, 0, 0, 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(900);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 0, 0);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("对那个巨人来说……我们只是些小蚂蚁而已。", 37, 1540453, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("不过，如果蚂蚁开始咬巨人的心脏，\r\n无论是多大的巨人，应该都会倒下的。\r\n我们要做的事情正是这个。", 37, 1540451, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("守护水晶花园的工作由希纳斯骑士团负责。", 37, 1540451, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("在空中扰乱敌人视线的工作就由凯琳所率领的海盗部队负责吧。", 37, 1540453, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("那负责迂回潜入的别动队就由反抗者贝尔，韩利泰，切奇，\r\n还有#b#h0##k组成吧。", 37, 1540452, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#我们必须要到达#b黑色天堂甲板上#k。\r\n只有这样，我们才有胜算……", 37, 1540450, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.userSetFieldFloating(350031002, 20, 10, 20);
                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion1", 100);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation", "oid=22392023"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation", "oid=22392024"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation", "oid=22392025"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation", "oid=22392026"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                    cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation");
                                                                  } else if (status === V++) {
                                                                    cm.userSetFieldFloating(350031002, 0, 0, 0);
                                                                    cm.dispose();
                                                                    cm.warp(350031009, 0, true);
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