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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_ProcessOnOffLayer('map3', "Effect/Direction23.img/map/3", 0, 0, 0, -90, -4, 4, 0, 0, 0, 1, 0);
      cm.fieldEffect_ProcessOnOffLayer("map4", "Effect/Direction23.img/map/4", 0, 0, 0, -90, -5, 4, 0, 0, 0, 1, 0);
      cm.npc_ChangeController(3004322, "oid=2832671", -70, 280, 25, -120, -20, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2832671", 'summon', 0, 0);
      cm.npc_ChangeController(3004323, "oid=2832672", -230, 280, 39, -280, -180, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2832672", "summon", 0, 0);
      cm.npc_ChangeController(3003930, "oid=2832673", 340, 280, 21, 290, 390, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2832673", "summon", 0, 0);
      cm.npc_ChangeController(3003931, "oid=2832674", -660, 280, 36, -710, -610, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2832674", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -162, 164);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face3#呃啊啊！！", 37, 3004322, false, true);
        cm.effect_Voice("Voice5.img/CH1/Elwyn/21", 128);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayBGM("Bgm50/ThroneOfDarkness", 0, 0);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2832671"], [0, 0, -20, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2832672"], [0, 0, -20, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.npc_SetSpecialAction("oid=2832673", 'attack', 1, 1);
                  cm.npc_SetSpecialAction("oid=2832674", "attack", 1, 1);
                  cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8880500/Attack2", 100);
                  cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8880501/Attack2", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.npcMove(3003930, -300, 0, 300);
                    cm.npcMove(3003931, 300, 0, 300);
                    cm.Npc_Fadeout("oid=2832673", 0, 300);
                    cm.Npc_Fadeout("oid=2832674", 0, 300);
                    cm.fieldEffect_ProcessOnOffLayer("map3", 'lt', 3, 3000, 1500, 0, 0, 0, 0, 0, 0, 0, 0);
                    cm.fieldEffect_ProcessOnOffLayer('map3', 'rt', 3, 1500, 750, 0, 0, 0, 0, 0, 0, 0, 0);
                    cm.fieldEffect_ProcessOnOffLayer("map3", 'lb', 3, 1500, 750, 0, 0, 0, 0, 0, 0, 0, 0);
                    cm.fieldEffect_ProcessOnOffLayer("map3", 'rb', 3, 750, 370, 0, 0, 0, 0, 0, 0, 0, 0);
                    cm.fieldEffect_ProcessOnOffLayer("eff", "Effect/Direction23.img/effect/0", 0, 0, 0, 0, -20, 4, 0, -1, 0, -1, 1);
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/borderless/transitions_fast", 100);
                    cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=2832672", 1);
                      cm.inGameDirectionEvent_AskAnswerTime(5000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(7000);
                        cm.effect_Voice("Voice5.img/CH1/Black/1", 128);
                        cm.effect_Text(["#r#fn黑体##fs26#答案就在那里。"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0, 0]);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 136, 194);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(3004332, "oid=2834671", -200, 216, 107, -250, -150, 1, false, 0, false);
                            cm.npc_SetSpecialAction("oid=2834671", "summon", 0, 0);
                            cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1400);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(7000);
                                  cm.effect_Voice("Voice5.img/CH1/Black/2", 128);
                                  cm.effect_Text(["#r#fn黑体##fs26#若是滞步不前的话，什么都不会改变。"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0, 0]);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#r#fn黑体##fs26#黑魔法师……！！！", 57, 0, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_ProcessOnOffLayer("map4", 'lt', 3, 1500, 750, 0, 0, 0, 0, 0, 0, 0, 0);
                                      cm.fieldEffect_ProcessOnOffLayer('map4', 'rt', 3, 750, 375, 0, 0, 0, 0, 0, 0, 0, 0);
                                      cm.fieldEffect_ProcessOnOffLayer('map4', 'lb', 3, 750, 375, 0, 0, 0, 0, 0, 0, 0, 0);
                                      cm.fieldEffect_ProcessOnOffLayer("map4", 'rb', 3, 375, 182, 0, 0, 0, 0, 0, 0, 0, 0);
                                      cm.fieldEffect_ProcessOnOffLayer("eff", "Effect/Direction23.img/effect/0", 0, 0, 0, 0, -20, 4, 0, -1, 0, -1, 1);
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/borderless/transitions_fast", 100);
                                      cm.Npc_Fadeout("oid=2834671", 0, 300);
                                      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -6, 246);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                            cm.fieldEffect_ProcessOnOffLayer('map3', '', 2, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("map4", '', 2, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                            cm.sendNormalTalk_Bottom("……诶？！", 57, 0, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#呜……啊……他还活着吗？", 37, 3004322, true, true);
                                              cm.effect_Voice("Voice5.img/CH1/Elwyn/22", 128);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_ChangeController(3004325, "oid=2835890", 130, 268, 15, 80, 180, 1, true, 1000, false);
                                                cm.npc_SetSpecialAction("oid=2835890", "summon", 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face3#老师！！", 37, 3004323, false, true);
                                                  cm.effect_Voice("Voice5.img/CH1/Lily/27", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#啊！快抓住老师，不要让他跑了！！", 37, 3004322, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetForceMove("oid=2832671", 1, 50, 150);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetSpecialAction("oid=2835890", "attack", 1, 1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/slap1", 100);
                                                          cm.npc_SetSpecialAction("oid=2832671", "hit", 2000, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face4#啊呀呀呀！！", 37, 3004322, false, true);
                                                            cm.effect_Voice("Voice5.img/CH1/Elwyn/24", 128);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#徒弟。你装得太夸张了。", 37, 3003923, true, true);
                                                              cm.effect_Voice("Voice5.img/CH1/Heinze/28", 128);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face5#老师！您清醒过来了！", 37, 3004323, true, true);
                                                                cm.effect_Voice("Voice5.img/CH1/Lily/28", 128);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom('这到底是哪里？', 57, 0, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#这里是世界的尽头。", 37, 3003923, true, true);
                                                                      cm.effect_Voice("Voice5.img/CH1/Heinze/29", 128);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#那么，这里难道是天堂？我们为了追老师，把小命都追没了……？", 37, 3004322, true, true);
                                                                        cm.effect_Voice("Voice5.img/CH1/Elwyn/25", 128);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_SetSpecialAction("oid=2835890", "attack", 1, 1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/slap1", 100);
                                                                            cm.npc_SetSpecialAction("oid=2832671", "hit", 1500, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#我说的是冒险岛世界的尽头。", 37, 3003923, false, true);
                                                                              cm.effect_Voice("Voice5.img/CH1/Heinze/30", 128);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face4#说明白点嘛……", 37, 3004322, true, true);
                                                                                cm.effect_Voice("Voice5.img/CH1/Elwyn/26", 128);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#老师。您刚才说找到了答案……", 37, 3004323, false, true);
                                                                                    cm.effect_Voice("Voice5.img/CH1/Lily/29", 128);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#对。我是这么说了。", 37, 3003923, true, true);
                                                                                      cm.effect_Voice("Voice5.img/CH1/Heinze/31", 128);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("超越者的作用，世界本来的面貌。\r\n究竟是什么呢？", 57, 0, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#有很多线索能说明问题。我早该意识到的。", 37, 3003923, true, true);
                                                                                          cm.effect_Voice("Voice5.img/CH1/Heinze/32", 128);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#所谓超越者，终究是人为创造的存在。", 37, 3003923, true, true);
                                                                                            cm.effect_Voice("Voice5.img/CH1/Heinze/33", 128);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#他们的消失，即意味着世界将回到未经改动的#b原本形态#k。", 37, 3003923, true, true);
                                                                                              cm.effect_Voice("Voice5.img/CH1/Heinze/34", 128);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("被创造？那么如您所言，世界的最初形态是什么模样？", 57, 0, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#你们回想一下，当初时间超越者伦娜和生命超越者阿丽莎消失后，\r\n冒险岛世界发生了什么事情。", 37, 3003923, true, true);
                                                                                                  cm.effect_Voice("Voice5.img/CH1/Heinze/35", 128);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#我记得……因为超越者的缺席，而变得不稳定的三个世界合并为一，接着诞生了神秘河……", 37, 3004323, true, true);
                                                                                                    cm.effect_Voice("Voice5.img/CH1/Lily/30", 128);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face2#等等，假如那不是不稳定，\r\n超越者的缺席反而是自然状态的话……？", 37, 3004323, false, true);
                                                                                                        cm.effect_Voice("Voice5.img/CH1/Lily/31", 128);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face2#如果说世界合并为一，才是它原本的面貌……", 37, 3004323, true, true);
                                                                                                          cm.effect_Voice("Voice5.img/CH1/Lily/32", 128);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2832671"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2832672"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face1#世界原本……", 37, 3004322, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#fs17#原本是同一个？！", 57, 0, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#这里……是冒险岛世界和格兰蒂斯分界的封印。", 37, 3003923, false, true);
                                                                                                                    cm.effect_Voice("Voice5.img/CH1/Heinze/36", 128);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#封印是靠超越者的力量来维系的，再过不久就会崩坏。", 37, 3003923, true, true);
                                                                                                                      cm.effect_Voice("Voice5.img/CH1/Heinze/37", 128);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face2#老师？", 37, 3004323, true, true);
                                                                                                                        cm.effect_Voice("Voice5.img/CH1/Lily/33", 128);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom('您打算做什么……', 57, 0, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.playVideoByScript("Cpt1_Borderless.avi");
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                } else if (status === V++) {
                                                                                                                                  cm.warp(993135000, 0, false);
                                                                                                                                  cm.eventSKill(0);
                                                                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                                                                  cm.setStandAloneMode(false);
                                                                                                                                  cm.npc_LeaveField("oid=2832673");
                                                                                                                                  cm.npc_LeaveField("oid=2832673");
                                                                                                                                  cm.npc_LeaveField("oid=2832674");
                                                                                                                                  cm.npc_LeaveField("oid=2832674");
                                                                                                                                  cm.npc_LeaveField("oid=2832671");
                                                                                                                                  cm.npc_LeaveField("oid=2832671");
                                                                                                                                  cm.npc_LeaveField("oid=2832672");
                                                                                                                                  cm.npc_LeaveField("oid=2832672");
                                                                                                                                  cm.npc_LeaveField("oid=2834671");
                                                                                                                                  cm.npc_LeaveField("oid=2834671");
                                                                                                                                  cm.npc_LeaveField("oid=2835890");
                                                                                                                                  cm.npc_LeaveField("oid=2835890");
                                                                                                                                  cm.forceStartQuest(39722, '');
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