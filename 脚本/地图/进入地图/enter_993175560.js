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
      cm.forceCompleteQuest(100458);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 310, 17);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
        cm.npc_ChangeController(9062258, "oid=32693528", -93, 14, 4, -143, -43, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=32693528", 'summon', 0, 0);
        cm.npc_ChangeController(9062259, "oid=32693529", -250, 11, 4, -300, -200, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=32693529", "summon", 0, 0);
        cm.npc_ChangeController(9062260, "oid=32693530", -400, 11, 4, -450, -350, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=32693530", "summon", 0, 0);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 67, 14);
        cm.inGameDirectionEvent_ChangeEquipment([1022013]);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(9062262, "oid=32693907", 300, 9, 2, 250, 350, 1, true, 1500, false);
            cm.npc_SetSpecialAction("oid=32693907", "summon", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=32693907", "stick", 0, 1);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#时间到了。\r\n令人着迷的舞会时间。", 37, 9062262, false, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#各位，就要到午夜了。\r\n#b假面舞会#k开始。", 37, 9062262, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#请大家踏着#b钢琴演奏#k的旋律，戴着#b假面#k开心地跳舞吧。", 37, 9062262, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#就仿佛在享受此生的#b最后的一支舞#k一样……", 37, 9062262, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=32693907", -1, 50, 70);
                          cm.npc_SetSpecialAction("oid=32693907", "special", -1, 1);
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pianoSolo", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_ForcedFlip(-1);
                            cm.sendNormalTalk_Bottom("该死……！#b舞会#k已经开始了！\r\n马上就要到午夜了……！", 57, 0, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(14000, 0, 2000, 14000, -238, 17);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayBGM("Bgm45.img/Heroes Of Maple Theme Piano", 0, 0);
                                  cm.npc_SetSpecialAction("oid=32693528", 'special2', -1, 1);
                                  cm.npc_SetSpecialAction("oid=32693529", "special2", -1, 1);
                                  cm.npc_SetSpecialAction("oid=32693530", "special2", -1, 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("哈哈！！我曾以为这是一个无法守护任何人的#b失败的人生#k！", 37, 9062258, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("但是，不是这样的！\r\n曾是村庄的麻烦精的我！#b守护了村民们#k！ ", 37, 9062258, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetSpecialAction("oid=32693528", 'special3', 1, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(2600);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetSpecialAction("oid=32693528", "special4", -1, 1);
                                          cm.sendNormalTalk_Bottom("月色真美。", 37, 9062259, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("就像以前，#b他送的戒指#k一样……", 37, 9062259, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=32693529", 'special3', 1, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(2600);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetSpecialAction("oid=32693529", "special4", -1, 1);
                                                cm.sendNormalTalk_Bottom("啊！谢谢你们实现我的愿望！我现在有 #b朋友#k了！", 37, 9062260, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("我以后不要一个人数数了！", 37, 9062260, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetSpecialAction("oid=32693530", "special3", 1, 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.setAccountQuestInfo(238, "count=4555;T=20201102220135");
                                                      cm.npc_SetSpecialAction("oid=32693530", "special4", -1, 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                        cm.setNpcSpecialActionReset("oid=32693907");
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -92, 10);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                            cm.sendNormalTalk_Bottom("#face0#怎……怎么会……！", 37, 9062262, false, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#大家都把假面摘了？！", 37, 9062262, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#摘掉#b假面#k的话，会永远消失的……！\r\n不要摘假面！", 37, 9062262, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#说什么呢！我们已经知道你这家伙打的什么#b算盘#k了！\r\n一直以来为了留住我们你也是费了不少心思。", 37, 9062266, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#那个#b小鬼头#k居然说要像我一样做看门人！\r\n我现在可以毫无牵挂地去#b母亲#k那里炫耀炫耀了！", 37, 9062266, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_SetSpecialAction("oid=32693528", "special", 1, 1);
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/memory_absorb", 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(3100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_LeaveField("oid=32693528");
                                                                          cm.sendNormalTalk_Bottom("#face0#我不会再让你等下去了。#b我的爱人#k。", 37, 9062267, false, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_SetSpecialAction("oid=32693529", 'special', 1, 1);
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/memory_absorb", 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_LeaveField("oid=32693529");
                                                                              cm.sendNormalTalk_Bottom("#face0#你们送我的#b蛋糕#k很好吃！\r\n我要走了！\r\n再见！ #b朋友#k！！", 37, 9062268, false, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetSpecialAction("oid=32693530", "special", 1, 1);
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/memory_absorb", 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_LeaveField("oid=32693530");
                                                                                  cm.sendNormalTalk_Bottom("#face0##fs28#不……不可以！！！！", 37, 9062262, false, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_Monologue("客人们摘掉假面，跳了最后一支舞。", 0);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_Monologue("所有人都明白，那支舞意味着永远告别这个世界。", 0);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_Monologue("但是，并没有人为此伤心。", 0);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_Monologue("摘去假面的他们，脸上充满了微笑。", 0);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_Monologue("不久，他们就在月光下分开了。", 0);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_Monologue("然后，永远地安息了。", 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#大家都……#b遵守了约定……#k", 37, 9062255, false, true, 1);
                                                                                                    } else if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_ChangeEquipment([0]);
                                                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                                      cm.setStandAloneMode(false);
                                                                                                      cm.npc_LeaveField("oid=32693907");
                                                                                                      cm.dispose();
                                                                                                      cm.warp(993175561, 0, false);
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}