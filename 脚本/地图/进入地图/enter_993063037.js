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
      cm.teachSkill(80001037, -1, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 25, 155);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.npc_ChangeController(3003771, "oid=2211343", 220, 220, 12, 170, 270, 1, true, 1000, false);
        cm.npc_SetSpecialAction("oid=2211343", "summon", 0, 0);
        cm.npc_ChangeController(3003774, "oid=2211344", 410, 220, 13, 360, 460, 1, true, 1000, false);
        cm.npc_SetSpecialAction("oid=2211344", 'summon', 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=2211343", "stand", -1, 1);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('咳……', 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#果然……你和其他的家伙不一样。", 37, 3003771, false, true);
                    cm.effect_Voice("Voice4.img/BM2/H_add/1/1_4", 128);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#直到最后都让我觉得很开心。", 37, 3003771, true, true);
                      cm.effect_Voice("Voice4.img/BM2/H_add/1/2_2", 128);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=2211343", 'summon1', 1, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(1900);
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=2211344", "regen", 1, 1);
                            cm.inGameDirectionEvent_AskAnswerTime(1800);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=2211344", "stand1", -1, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#那现在……我们再玩的开心一点吧？", 37, 3003771, false, true);
                                cm.effect_Voice("Voice4.img/BM2/H_add/1/3_1", 128);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.setNpcSpecialActionReset("oid=2211344");
                                    cm.npc_SetForceMove("oid=2211344", -1, 240, 150);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_ChangeController(3003518, "oid=2211356", -240, 180, 2, -290, -190, 0, false, 0, false);
                                      cm.npc_SetSpecialAction("oid=2211356", 'summon', 0, 0);
                                      cm.npcMove(3003518, 0, -110, 0);
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/portal_attack", 200);
                                      cm.npc_SetSpecialAction("oid=2211356", "special", 1, 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetSpecialAction("oid=2211344", "attack1", 1, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_ChangeController(3003505, "oid=2211357", -90, 220, 1, -140, -40, 0, true, 1000, false);
                                          cm.npc_SetSpecialAction("oid=2211357", "summon", 0, 0);
                                          cm.npc_SetSpecialAction("oid=2211357", 'special', 1, 1);
                                          cm.Npc_Fadeout("oid=2211357", 1000, 200);
                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_ChangeController(3003773, "oid=2211358", -90, 220, 1, -140, -40, 0, false, 1000, false);
                                            cm.npc_SetSpecialAction("oid=2211358", "summon", 0, 0);
                                            cm.npc_SetSpecialAction("oid=2211358", "stand", -1, 1);
                                            cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, -50, 220);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1200, 0);
                                                cm.npc_LeaveField("oid=2211357");
                                                cm.npc_LeaveField("oid=2211357");
                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetSpecialAction("oid=2211358", "break", 1, 1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetSpecialAction("oid=2211344", "stand1", -1, 1);
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/powerout", 100);
                                                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8950001/Attack1", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetSpecialAction("oid=2211358", "off", -1, 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#希拉！！！！！！！！！！！！", 37, 3003773, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face1#你……你要对斯乌……对斯乌做什么！", 37, 3003773, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("奥……尔卡？", 57, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#嗯？怎么回事，我说怎么看你不顺眼呢……", 37, 3003771, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#你不是那个接受了伟大之人的恩惠，却又背叛他的那个无耻小鬼吗？", 37, 3003771, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#哈……是吗？\r\n我说我怎么认不出你的气息呢……古瓦洛啊……", 37, 3003771, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#你没什么动作我也就没管你，\r\n结果你在背后做这种有趣的事。", 37, 3003771, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, 25, 155);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face1#斯乌……明明在我面前……在我面前！", 37, 3003773, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#真是烦死了。走开。我没什么要和你这种人说的。\r\n你就像以前一样在角落里安静地活着吧。", 37, 3003771, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face1#先回答我！你把斯乌怎么了！", 37, 3003773, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#……", 37, 3003771, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#唉……你就这么好奇？", 37, 3003771, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#反正也是个马上就要消失的可怜生命……我就告诉你吧。", 37, 3003771, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#你宝贵的另一半……怎么样了呢……", 37, 3003771, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#他变成了无条件听从我旨意的……", 37, 3003771, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#现在……成了我的人了呀。", 37, 3003771, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face1#你竟敢！", 37, 3003773, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#所以说自己宝贵的东西，你要自己……好好守护啊。不是吗？", 37, 3003771, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face1#我不会放过你的！", 37, 3003773, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#你有什么能做的吗？", 37, 3003771, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("(我……坚持不住了……)", 57, 0, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_OneTimeAction(25, 99999);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#我现在没什么要和你说的了，滚一边去。", 37, 3003771, false, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#念在过去的情分上我才给你个机会。你要是再敢妨碍我，我就亲手杀了你。", 37, 3003771, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_ChangeController(3003726, "oid=2211383", -325, 180, 3, -375, -275, 0, true, 1000, false);
                                                                                                                      cm.npc_SetSpecialAction("oid=2211383", "summon", 0, 0);
                                                                                                                      cm.npc_ChangeController(3003726, "oid=2211384", -460, 180, 5, -510, -410, 0, true, 1000, false);
                                                                                                                      cm.npc_SetSpecialAction("oid=2211384", "summon", 0, 0);
                                                                                                                      cm.npc_ChangeController(3003726, "oid=2211385", -160, 180, 1, -210, -110, 1, true, 1000, false);
                                                                                                                      cm.npc_SetSpecialAction("oid=2211385", 'summon', 0, 0);
                                                                                                                      cm.npc_SetSpecialAction("oid=2211383", 'regen', 1, 1);
                                                                                                                      cm.npc_SetSpecialAction("oid=2211384", 'regen', 1, 1);
                                                                                                                      cm.npc_SetSpecialAction("oid=2211385", 'regen', 1, 1);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.npc_SetSpecialAction("oid=2211383", 'stand', -1, 1);
                                                                                                                        cm.npc_SetSpecialAction("oid=2211384", 'stand', -1, 1);
                                                                                                                        cm.npc_SetSpecialAction("oid=2211385", "stand", -1, 1);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom('……', 57, 0, false, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face1#快醒醒，#h0#！", 37, 3003773, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("现在舒服了……", 57, 0, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face1##h0#！！！！！！！", 37, 3003773, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0##r现在我作为他的直接中被选择的人，拥有永恒不灭的生命！#k", 37, 3003771, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 3000, 0);
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0##h0#……", 37, 3003768, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.fieldEffect_Hero9(80, 3000);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                            } else if (status === V++) {
                                                                                                                                              cm.updateInfoQuest(35730, "dir=1");
                                                                                                                                              cm.npc_LeaveField("oid=2211343");
                                                                                                                                              cm.npc_LeaveField("oid=2211343");
                                                                                                                                              cm.npc_LeaveField("oid=2211344");
                                                                                                                                              cm.npc_LeaveField("oid=2211344");
                                                                                                                                              cm.npc_LeaveField("oid=2211356");
                                                                                                                                              cm.npc_LeaveField("oid=2211356");
                                                                                                                                              cm.npc_LeaveField("oid=2211358");
                                                                                                                                              cm.npc_LeaveField("oid=2211358");
                                                                                                                                              cm.npc_LeaveField("oid=2211383");
                                                                                                                                              cm.npc_LeaveField("oid=2211383");
                                                                                                                                              cm.npc_LeaveField("oid=2211384");
                                                                                                                                              cm.npc_LeaveField("oid=2211384");
                                                                                                                                              cm.npc_LeaveField("oid=2211385");
                                                                                                                                              cm.npc_LeaveField("oid=2211385");
                                                                                                                                              cm.dispose();
                                                                                                                                              cm.warp(993063038, 0, false);
                                                                                                                                              cm.setStandAloneMode(false);
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
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}