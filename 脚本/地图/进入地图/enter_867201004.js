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
      cm.onSetBackEffect("close", 1, 1, 0, 0);
      cm.onSetBackEffect("open", 1, 0, 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.forceCompleteQuest(64047);
      cm.npc_ChangeController(9400587, "oid=3710072", 700, 0, 23, 650, 750, 0, true, false);
      cm.npc_SetSpecialAction("oid=3710072", "summon", 0, 0);
      cm.npc_ChangeController(9400581, "oid=3710073", 640, 0, 22, 590, 690, 0, true, false);
      cm.npc_SetSpecialAction("oid=3710073", "summon", 0, 0);
      cm.npc_ChangeController(9400580, "oid=3710074", 570, 0, 21, 520, 620, 0, true, false);
      cm.npc_SetSpecialAction("oid=3710074", "summon", 0, 0);
      cm.npc_ChangeController(9400582, "oid=3710075", 520, 0, 21, 470, 570, 0, true, false);
      cm.npc_SetSpecialAction("oid=3710075", "summon", 0, 0);
      cm.forceStartQuest(64164, '');
      cm.npc_ChangeController(9400584, "oid=3710076", 440, -35, 5, 390, 490, 0, true, false);
      cm.npc_SetSpecialAction("oid=3710076", "summon", 0, 0);
      cm.npc_ChangeController(9400583, "oid=3710077", 380, -35, 5, 330, 430, 0, true, false);
      cm.npc_SetSpecialAction("oid=3710077", "summon", 0, 0);
      cm.npc_ChangeController(9400588, "oid=3710078", 325, -35, 3, 275, 375, 0, true, false);
      cm.npc_SetSpecialAction("oid=3710078", "summon", 0, 0);
      cm.npc_ChangeController(9400593, "oid=3710079", 400, 0, 20, 350, 450, 0, true, false);
      cm.npc_SetSpecialAction("oid=3710079", "summon", 0, 0);
      cm.npc_ChangeController(9400591, "oid=3710080", 355, 0, 20, 305, 405, 0, true, false);
      cm.npc_SetSpecialAction("oid=3710080", "summon", 0, 0);
      cm.npc_ChangeController(9400592, "oid=3710081", 300, 0, 20, 250, 350, 0, true, false);
      cm.npc_SetSpecialAction("oid=3710081", 'summon', 0, 0);
      cm.npc_ChangeController(9400589, "oid=3710082", 230, 0, 20, 180, 280, 0, true, false);
      cm.npc_SetSpecialAction("oid=3710082", 'summon', 0, 0);
      cm.npc_ChangeController(9400619, "oid=3710083", 180, 0, 19, 130, 230, 0, true, false);
      cm.npc_SetSpecialAction("oid=3710083", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=3710084", 130, 0, 19, 80, 180, 0, true, false);
      cm.npc_SetSpecialAction("oid=3710084", 'summon', 0, 0);
      cm.npc_ChangeController(9400585, "oid=3710085", 80, 0, 19, 30, 130, 0, true, false);
      cm.npc_SetSpecialAction("oid=3710085", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
      cm.gainItem(4036385, -50);
    } else {
      if (status === V++) {
        cm.sendNewEffects(1, [0, 0, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.sendNewEffects(17, [3000, 1000, 2000, 750, 30]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/open", 128);
              cm.onSetBackEffect("door", 1, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.npc_ChangeController(9400597, "oid=3710098", 858, -45, 9, 808, 908, 1, true, false);
                cm.npc_SetSpecialAction("oid=3710098", "summon", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#你们收集的速度越来越快了哦？", 37, 9400597, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face4#现在请你遵守约定吧。", 37, 9400580, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#啊，约定~？！对哦，我跟你们说好的！咳咳，稍等……场所安排得不合适……我去看看再来。你们等着！", 37, 9400597, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(250);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/close", 128);
                          cm.onSetBackEffect('door', 1, 1, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.npc_LeaveField("oid=3710098");
                            cm.npc_LeaveField("oid=3710098");
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#我真不懂了，都是一个地区的人，为什么要这样闹分裂？", 37, 9400581, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(250);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=3710072", -1);
                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#……斯巴乐缇一向是个鲜少与外界交流的地方。而且都只是些为了交易必需物品的交流。", 37, 9400587, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#每当他们放牧的家畜失踪，就经常会怀疑到我们头上……", 37, 9400587, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#我看他们根本就不想收留我们。", 37, 9400581, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#……哼……真让人忍不下这口气。", 37, 9400580, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#佩图尔，我们该怎么办？", 37, 9400587, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#嗯……我们没时间可浪费了，暴风雪就快到了。", 37, 9400589, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#只能靠武力硬闯了。", 37, 9400581, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#要是我们就此走掉，他们的村子也很快会遭殃。为了彼此着想，这个方法最妥善了。", 37, 9400581, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#我现在还巴不得他们被怪物打得哭爹喊娘。", 37, 9400587, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#你别这么想……", 37, 9400589, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#b要不再听听看他们又提出什么要求？", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#就因为我们一直有求必应，他才敢那么趾高气扬！不就一扇木头门，要砸了它早就进去了。", 37, 9400581, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#……", 37, 9400587, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.userSetFieldFloating(867201004, 2, 2, 2);
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/scream", 128);
                                                                  cm.sendNormalTalk_Bottom('啊啊！！！！！', 37, 9400599, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.onSetBackEffect("close", 1, 0, 0, 0);
                                                                    cm.onSetBackEffect('open', 1, 1, 0, 0);
                                                                    cm.npc_setForceFlip("oid=3710072", 1);
                                                                    cm.npc_ChangeController(9400597, "oid=3710293", 980, 0, 24, 930, 1030, 1, true, false);
                                                                    cm.npc_SetSpecialAction("oid=3710293", 'summon', 0, 0);
                                                                    cm.npc_ChangeController(9400598, "oid=3710294", 1010, 0, 24, 960, 1060, 1, true, false);
                                                                    cm.npc_SetSpecialAction("oid=3710294", "summon", 0, 0);
                                                                    cm.npc_ChangeController(9400599, "oid=3710295", 1040, 0, 25, 990, 1090, 1, true, false);
                                                                    cm.npc_SetSpecialAction("oid=3710295", "summon", 0, 0);
                                                                    cm.npc_ChangeController(9400599, "oid=3710296", 1070, 0, 25, 1020, 1120, 1, true, false);
                                                                    cm.npc_SetSpecialAction("oid=3710296", "summon", 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetForceMove("oid=3710293", -1, 200, 200);
                                                                      cm.npc_SetForceMove("oid=3710294", -1, 190, 200);
                                                                      cm.npc_SetForceMove("oid=3710295", -1, 180, 200);
                                                                      cm.npc_SetForceMove("oid=3710296", -1, 170, 200);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.userSetFieldFloating(867201004, 0, 0, 0);
                                                                        cm.sendNormalTalk_Bottom("#face0#呃啊啊啊啊！", 37, 9400597, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom('#b出什么事了？！', 57, 0, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#毒……毒毒毒……毒气！", 37, 9400597, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#b毒气？", 57, 0, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#莫非是我们在雪原上遇到的那只剧毒打嗝怪？", 37, 9400582, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_setForceFlip("oid=3710075", -1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#b剧毒打嗝怪？", 57, 0, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#就那只会喷毒气的粉红怪物！", 37, 9400582, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#b火箭！", 57, 0, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#对！吉莉的火箭，吉莉！吉莉！", 37, 9400582, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_SetForceMove("oid=3710077", 1, 230, 200);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#火箭准备好了！", 37, 9400583, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.npc_setForceFlip("oid=3710075", 1);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_SetForceMove("oid=3710075", 1, 500, 200);
                                                                                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 500);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else if (status === V++) {
                                                                                                    cm.forceStartQuest(64048, '');
                                                                                                    cm.updateInfoQuest(64048, "chk=0");
                                                                                                    cm.warp(867201020, 0);
                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                    cm.npc_LeaveField("oid=3710072");
                                                                                                    cm.npc_LeaveField("oid=3710072");
                                                                                                    cm.npc_LeaveField("oid=3710073");
                                                                                                    cm.npc_LeaveField("oid=3710073");
                                                                                                    cm.npc_LeaveField("oid=3710074");
                                                                                                    cm.npc_LeaveField("oid=3710074");
                                                                                                    cm.npc_LeaveField("oid=3710075");
                                                                                                    cm.npc_LeaveField("oid=3710075");
                                                                                                    cm.npc_LeaveField("oid=3710076");
                                                                                                    cm.npc_LeaveField("oid=3710076");
                                                                                                    cm.npc_LeaveField("oid=3710077");
                                                                                                    cm.npc_LeaveField("oid=3710077");
                                                                                                    cm.npc_LeaveField("oid=3710078");
                                                                                                    cm.npc_LeaveField("oid=3710078");
                                                                                                    cm.npc_LeaveField("oid=3710079");
                                                                                                    cm.npc_LeaveField("oid=3710079");
                                                                                                    cm.npc_LeaveField("oid=3710080");
                                                                                                    cm.npc_LeaveField("oid=3710080");
                                                                                                    cm.npc_LeaveField("oid=3710081");
                                                                                                    cm.npc_LeaveField("oid=3710081");
                                                                                                    cm.npc_LeaveField("oid=3710082");
                                                                                                    cm.npc_LeaveField("oid=3710082");
                                                                                                    cm.npc_LeaveField("oid=3710083");
                                                                                                    cm.npc_LeaveField("oid=3710083");
                                                                                                    cm.npc_LeaveField("oid=3710084");
                                                                                                    cm.npc_LeaveField("oid=3710084");
                                                                                                    cm.npc_LeaveField("oid=3710085");
                                                                                                    cm.npc_LeaveField("oid=3710085");
                                                                                                    cm.npc_LeaveField("oid=3710293");
                                                                                                    cm.npc_LeaveField("oid=3710293");
                                                                                                    cm.npc_LeaveField("oid=3710294");
                                                                                                    cm.npc_LeaveField("oid=3710294");
                                                                                                    cm.npc_LeaveField("oid=3710295");
                                                                                                    cm.npc_LeaveField("oid=3710295");
                                                                                                    cm.npc_LeaveField("oid=3710296");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;