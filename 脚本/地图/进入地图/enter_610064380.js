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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064380");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201536, "oid=2753364", 126, 195, 10, 76, 176, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2753364", 'summon', 0, 0);
      cm.npc_ChangeController(9201535, "oid=2753365", -220, 195, 5, -270, -170, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2753365", "summon", 0, 0);
      cm.npc_ChangeController(9201579, "oid=2753366", -140, 195, 8, -190, -90, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2753366", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("呼……什么……守护者的要塞……？", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("我不觉得它会坍塌。\r\n反转界的战士把它造的很坚固。", 37, 9201535, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=2753365", -1);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#太多的战士……太多无辜的人……都死了……", 37, 9201535, false, true);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(9201548, "oid=2753505", -742, 195, 1, -792, -692, 0, true, 0, false);
                    cm.npc_SetSpecialAction("oid=2753505", 'summon', 0, 0);
                    cm.npc_ChangeController(9201578, "oid=2753506", -780, 195, 1, -830, -730, 0, true, 0, false);
                    cm.npc_SetSpecialAction("oid=2753506", "summon", 0, 0);
                    cm.npc_ChangeController(9201578, "oid=2753507", -820, 195, 2, -870, -770, 0, true, 0, false);
                    cm.npc_SetSpecialAction("oid=2753507", "summon", 0, 0);
                    cm.npc_ChangeController(9201578, "oid=2753508", -830, 195, 2, -880, -780, 0, true, 0, false);
                    cm.npc_SetSpecialAction("oid=2753508", "summon", 0, 0);
                    cm.npc_ChangeController(9201578, "oid=2753509", -850, 195, 2, -900, -800, 0, true, 0, false);
                    cm.npc_SetSpecialAction("oid=2753509", "summon", 0, 0);
                    cm.npc_SetForceMove("oid=2753505", 1, 350, 150);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=2753506", 1, 310, 130);
                      cm.npc_SetForceMove("oid=2753507", 1, 250, 100);
                      cm.npc_SetForceMove("oid=2753508", 1, 210, 100);
                      cm.npc_SetForceMove("oid=2753509", 1, 160, 100);
                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("努曼纳尔！", 37, 9201536, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("终于找到你了。\r\n我们在城墙开始晃动的时候逃离了守护者的要塞。", 37, 9201548, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("告诉我，绯红之心，幻日在哪？", 37, 9201548, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=2753365", 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=2753365", -1);
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('在这儿。', 37, 9201535, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("……纳瑞坎呢？", 37, 9201548, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("他被我封印了。", 37, 9201535, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("只是封印……而已？你是说，他还活着？", 37, 9201536, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("我把它放逐到了超越了时间和空间的虚空之中。", 37, 9201535, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#那要是他回来怎么办，就像他在英雄的时代那样？", 37, 9201536, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("绯红之心是不会犯下跟苏巴尼相同的错误的，努曼纳尔。", 37, 9201547, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_ChangeController(9201547, "oid=2753725", 541, 195, 48, 491, 591, 1, true, 0, false);
                                                        cm.npc_SetSpecialAction("oid=2753725", "summon", 0, 0);
                                                        cm.npc_SetForceMove("oid=2753725", -1, 250, 150);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_ChangeController(9201559, "oid=2753826", 320, 195, 47, 270, 370, 1, false, 0, false);
                                                            cm.npc_SetSpecialAction("oid=2753826", 'summon', 0, 0);
                                                            cm.npc_ChangeController(9201560, "oid=2753827", 370, 195, 49, 320, 420, 1, false, 0, false);
                                                            cm.npc_SetSpecialAction("oid=2753827", "summon", 0, 0);
                                                            cm.npc_ChangeController(9201562, "oid=2753828", 430, 195, 49, 380, 480, 1, false, 0, false);
                                                            cm.npc_SetSpecialAction("oid=2753828", "summon", 0, 0);
                                                            cm.npc_ChangeController(9201561, "oid=2753829", 480, 195, 46, 430, 530, 1, false, 0, false);
                                                            cm.npc_SetSpecialAction("oid=2753829", "summon", 0, 0);
                                                            cm.npc_ChangeController(9201563, "oid=2753830", 510, 195, 46, 460, 560, 1, false, 0, false);
                                                            cm.npc_SetSpecialAction("oid=2753830", "summon", 0, 0);
                                                            cm.npc_ChangeController(9201565, "oid=2753831", 540, 195, 48, 490, 590, 1, false, 0, false);
                                                            cm.npc_SetSpecialAction("oid=2753831", "summon", 0, 0);
                                                            cm.npc_ChangeController(9201564, "oid=2753832", 590, 195, 48, 540, 640, 1, false, 0, false);
                                                            cm.npc_SetSpecialAction("oid=2753832", "summon", 0, 0);
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_setForceFlip("oid=2753365", 1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_setForceFlip("oid=2753364", 1);
                                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("戴尔格兰德！你还活着！", 37, 9201536, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("绯红之心的封印会将他永远冻结在虚无之中。\r\n他不可能再回来了。", 37, 9201547, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("那样……就好。", 57, 0, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("这肯定是个艰难的决定，绯红之心。\r\n我欣赏你的坚决。", 37, 9201547, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom('……', 37, 9201535, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("对了，利瑞尼猜对了。\r\n是那个所谓的克拉奇安科学家污染了帝国的河流，将那里的居民腐化成了怪物，组建了一支军队。", 37, 9201547, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_setForceFlip("oid=2753725", 1);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_setForceFlip("oid=2753725", -1);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("我们朝北行进到了村庄，在那里发现了幸存者。\r\n恐怕逃过一劫的只有他们了。", 37, 9201547, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("你做得很好，戴尔格兰德。\r\n我们必须尽力拯救所有性命，谢谢你。", 37, 9201535, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("绯红之心！\r\n你只要平安无事就好！", 37, 9201547, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("还有卢坎、努曼纳尔和我们这位小英雄。", 37, 9201547, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("要不是有它在……我们恐怕都会死于纳瑞坎之手。\r\n真的是，太感谢你了。", 37, 9201535, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("小事一桩，我不过是做我应做的事。", 57, 0, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_setForceFlip("oid=2753365", 1);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("说起来，利瑞尼怎么不见了？", 37, 9201535, false, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("对！\r\n她跑哪去了……？", 37, 9201547, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_setForceFlip("oid=2753365", -1);
                                                                                                                      cm.npc_setForceFlip("oid=2753364", -1);
                                                                                                                      cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("……努曼纳尔？", 37, 9201535, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("利瑞尼……在战斗中阵亡了。", 37, 9201548, false, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face1#我知道了……很抱歉……\r\n我保证，她对我而言跟对你一样重要。", 37, 9201535, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("她是个勇敢的战士。\r\n我们不会忘记她的牺牲的。", 37, 9201547, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("那么，我们现在应该拿幻日怎么办，绯红之心？", 57, 0, false, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.npc_setForceFlip("oid=2753365", 1);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("对，我也想问这问题。\r\n要用它回到反转界吗？", 37, 9201536, false, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("反转界！\r\n我们终于能回家了！", 37, 9201547, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("……部分人可以。", 37, 9201535, false, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("你这是什么意思，绯红之心？", 37, 9201536, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("我已经做出了一项决定，但不适合在这里讨论。", 37, 9201535, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("告诉我，这片土地的中心在哪？", 37, 9201535, false, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("在一个叫做#b古萨福村#k的小村庄里，绯红之心。", 37, 9201547, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom('那我们就朝那儿走。', 37, 9201535, true, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("大家都跟紧点，保持警惕。\r\n这片土地上依旧有我们的敌人存在。", 37, 9201535, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.npc_setForceFlip("oid=2753365", -1);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                                                                                } else if (status === V++) {
                                                                                                                                                                  cm.eventSKill(0);
                                                                                                                                                                  cm.warp(610064390, 0, true);
                                                                                                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                  cm.npc_LeaveField("oid=2753364");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753364");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753365");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753365");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753366");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753366");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753505");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753505");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753506");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753506");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753507");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753507");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753508");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753508");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753509");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753509");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753725");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753725");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753826");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753826");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753827");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753827");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753828");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753828");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753829");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753829");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753830");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753830");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753831");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753831");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753832");
                                                                                                                                                                  cm.npc_LeaveField("oid=2753832");
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