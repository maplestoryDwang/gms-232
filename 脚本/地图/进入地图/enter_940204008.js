var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
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
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.sendNormalTalk_Bottom("#face0#现在听懂了吗？#r#fs18#最终还是没能逃出来。", 37, 3003409, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom('！！！', 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#这反而成了最终导致克里蒂亚斯没落的导火索。", 37, 3003409, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom('那我需要做的是……', 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#如果帮助江#b成功脱逃#k，就能召唤出塔纳的意识。\r\n还有……嗯……", 37, 3003409, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("干嘛啊？", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#差不多到时间了。我也马上要被吸入#r#fs18#沼泽了。", 37, 3003409, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("什么？连你也？那就是不能继续喽？", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#如果不想一直被沼泽残蚀，就必须寻找办法。", 37, 3003409, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("等、等一下！我具体该做些什么？", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#别担心。\r\n即使事情出了差错，应该还有#b一次机会#k……", 37, 3003409, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("什么？也就是说你也不知道嘛！喂！飞鱼啊！", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.setStandAloneMode(false);
                              cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -320, 280);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(3003406, "oid=2006266", -240, 226, 80, -290, -190, 1, true, false);
                                cm.npc_SetSpecialAction("oid=2006266", "summon", 0, 0);
                                cm.effect_Text(["#fn黑体##fs18#海加顿历54年，特鲁埃博，封锁区"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(4000);
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
                                      cm.sendNormalTalk_Bottom("#face13#嗯……", 37, 3003406, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("你还在怀疑吗？", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face13#没有啊！我没怀疑什么！", 37, 3003406, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("我们还是靠近点吧？天黑了，感觉有点危险。", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face11#哼！我可是堂堂黑暗访客大盗江，你竟然告诉我天黑有危险……", 37, 3003406, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetForceMove("oid=2006266", -1, 10, 150);
                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                              } else {
                                                if (status === V++) {
                                                  cm.userSetFieldFloating(940204008, 3, 3, 10);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.userSetFieldFloating(940204008, 0, 0, 0);
                                                    cm.sendNormalTalk_Bottom("#face1#呃啊！！！", 37, 3003406, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("小心，还有我不是说过嘛。\r\n仪式一旦出现差错，整个克里蒂亚斯都会万劫不复。", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face8#嗯……你该不会对塔纳打什么主意了吧？\r\n我明明白白告诉你，夏伊。塔纳她，塔纳……", 37, 3003406, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("你脸红什么？", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face6#因为她是我未来的新娘……", 37, 3003406, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("……什么？", 57, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#要不是弄丢了结婚礼物，早就准备好了。快去找。", 37, 3003406, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#fs18#你不是在准备逃跑吗？！！", 57, 0, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("(啊，回忆录在发光呢？)", 57, 0, true, true);
                                                                  } else if (status === V++) {
                                                                    cm.gainItem(4161099, -1);
                                                                    cm.gainItem(4161100, 1);
                                                                    cm.dispose();
                                                                    cm.warp(450006300, 0);
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