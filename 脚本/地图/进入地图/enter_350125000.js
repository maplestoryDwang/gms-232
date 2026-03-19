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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1540809, "oid=288773776", -100, -200, 1, -150, -50, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=288773776", 'summon', 0, 0);
      cm.npc_ChangeController(1540845, "oid=288773777", 160, -200, 2, 110, 210, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=288773777", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("你是在找我吗？阿卡伊勒。", 37, 1540809, false, true);
      } else {
        if (status === V++) {
          cm.setAmbience("SoundEff.img/thunder2", 200, 60);
          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -290, -300);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
            cm.effect_Text(["#fn黑体##fs18#另一方面，同一时刻    #fs15##fn黑体#阿卡伊勒祭坛"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0]);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, 80, -300);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("那位伟大的人很好奇你的事情进展得怎么样了。", 37, 1540845, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("是吗？看样子黑魔法师也真是没事可做呢。", 37, 1540809, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("不许你随便叫他的名字，你该不会忘了，你该集中注意力去做的是世界树的事情吧？", 37, 1540845, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face4#别总是卖弄黑魔法师的名字，我看是你心有不安吧。", 37, 1540809, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom('！！', 37, 1540845, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#你不就是想要知道我有没有居心不良嘛，我可没那么闲，所以你就别担心了，好好看着吧，阿卡伊勒。", 37, 1540809, true, true);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=288773776", -1, 100, 100);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("你这人说话还是这么没大没小，现在也是时候懂点礼数了吧？", 37, 1540845, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip("oid=288773776", 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission5", 100);
                                        cm.npc_ChangeController(1540850, "oid=288785923", 0, -200, 1, -50, 50, 1, false, 0, false);
                                        cm.npc_SetSpecialAction("oid=288785923", "summon", 0, 0);
                                        cm.npc_SetSpecialAction("oid=288785923", "appear", 0, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(480);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetSpecialAction("oid=288785923", "loop", -1, 1);
                                          cm.sendNormalTalk_Bottom("别忘了，我可是将你母亲的肉身停滞了数百年时间之久。", 37, 1540845, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face6#……\t", 37, 1540809, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/barrier2", 100);
                                              cm.npc_SetSpecialAction("oid=288785923", 'disappear', 0, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(480);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_LeaveField("oid=288785923");
                                                cm.npc_LeaveField("oid=288785923");
                                                cm.sendNormalTalk_Bottom("来，你的回答是？", 37, 1540845, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face6#既然生命如此的可惜，倒不如继续停滞来得好，#r阿卡伊勒。", 37, 1540809, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
                                                    cm.sendNormalTalk_Bottom("什么……！", 37, 1540845, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face6#你貌似以为自己抓住了我的弱点，可你别忘了，世界树就在我手中，事情一旦败露，你以为黑魔法师能轻饶了你吗？", 37, 1540809, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_setForceFlip("oid=288773776", -1);
                                                        cm.npc_SetForceMove("oid=288773776", -1, 500, 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 170, -200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("狂妄的家伙，我看你还有利用价值才留你一条狗命，现在居然胆敢威胁起我来了？", 37, 1540845, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("……好吧，看来狼崽子就不该养大，等世界树的事情结束之后，看样子还是得灭了他才行。", 37, 1540845, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("我真是迫不及待地想要看看那小子知道了所有真相之后的表情呢，呵呵呵……", 37, 1540845, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_ProcessOnOffLayer('mark', "Map/Effect2.img/HofM/toBeContinued", 0, 2500, 0, 0, 16, 4, 1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_ProcessOnOffLayer("mark", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else if (status === V++) {
                                                                        cm.dispose();
                                                                        cm.warp(350126000, 0, true);
                                                                        cm.inGameDirectionEvent_SetHideEffect(0);
                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                        cm.npc_LeaveField("oid=288773776");
                                                                        cm.npc_LeaveField("oid=288773776");
                                                                        cm.npc_LeaveField("oid=288773777");
                                                                        cm.npc_LeaveField("oid=288773777");
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;