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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3003519, "oid=2005555", -1550, 100, 5, -1600, -1500, 0, false, false);
      cm.npc_SetSpecialAction("oid=2005555", "summon", 0, 0);
      cm.Npc_Fadeout("oid=2005555", 0, 10);
      cm.npc_ChangeController(3003500, "oid=2005556", -1300, 100, 8, -1350, -1250, 1, true, 300, false);
      cm.npc_SetSpecialAction("oid=2005556", 'summon', 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_SetSpecialAction("oid=2005556", 'special5', -1, 1);
      cm.npc_ChangeController(3003505, "oid=2005557", -1000, 100, 10, -1050, -950, 1, true, 1000, false);
      cm.npc_SetSpecialAction("oid=2005557", "summon", 0, 0);
      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644510/die", 100);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644510/die", 100);
        cm.inGameDirectionEvent_AskAnswerTime(800);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644510/die", 100);
          cm.onTeleport(0, 3, cm.getPlayer().getId(), -1220, 200);
          cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -1230, 190);
        } else {
          if (status === V++) {
            cm.Npc_Fadeout("oid=2005557", 0, 10);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("终于……结束了……呼……", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("再坚持一下，沃莉。我马上把你送到大本营去……！！！", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#哎呀，情况看上去不太好啊。", 37, 3003503, true, true);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayBGM("Bgm49.img/MirrorCage", 0, 0);
                      cm.inGameDirectionEvent_PushScaleInfo(300, 2000, 3000, -1360, 190);
                    } else {
                      if (status === V++) {
                        cm.Npc_Fadeout("oid=2005555", 255, 300);
                        cm.npc_SetSpecialAction("oid=2005555", "special2", 1, 1);
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/will_teleport", 200);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#狂妄的小姑娘……还好还有气。", 37, 3003503, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("威尔！！", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_同时移动镜头和人(1, 80);
                                cm.sendNormalTalk_Bottom("#face2#哎呀，看你好像很累的样子。", 37, 3003503, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#休麦，咳咳！必须把塔纳传送……呃！快逃，#h0#……", 37, 3003500, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("不！把沃莉传送走，休麦。我来保护塔纳。", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#不行……从一开始……我的任务就是保护你……", 37, 3003500, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom('什么……？！', 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#咳咳！不能跟他动手……", 37, 3003500, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("休麦！快！", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, -1300, 181, 1, 0, 1, 1, 0]);
                                              cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                              cm.npc_LeaveField("oid=2005556");
                                              cm.sendNormalTalk_Bottom("#face0#真是愚蠢。应该听那个小姑娘的话的。", 37, 3003503, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetSpecialAction("oid=2005555", "special3", 1, 1);
                                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8880303/Attack2", 100);
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                cm.userSetFieldFloating(450007430, 5, 5, 10);
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Mob/8880303.img/attack2/info/hit"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.userSetFieldFloating(450007430, 0, 0, 0);
                                                      cm.inGameDirectionEvent_MoveAction(4);
                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/koong", 100);
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("呃……！你不是不能使用力量吗？！", 57, 0, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face2#哈哈哈，你在胡说什么呢……", 37, 3003503, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2#打倒执行者，削弱塔纳力量的人，不就是你吗？", 37, 3003503, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("所以！呃……所以她才让我不要动手……", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#祝贺你。为了救那个狂妄的小姑娘，你让全世界都陷入了危险。", 37, 3003503, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#那个姑娘……好像是在必要时替你去死的#r#fs18#棋子#k#fs16#。", 37, 3003503, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("你说什么……？", 57, 0, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#能够与那位伟大的人对抗的，只有你这个对抗者。\r\n因此如果可以，当然应该让其他人来#r代替你牺牲#k，不是吗？", 37, 3003503, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("怎么会这样……", 57, 0, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#好了，现在你也差不多该现出真面目了吧？", 37, 3003503, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_PushScaleInfo(300, 2000, 300, -1040, 190);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/tel", 128);
                                                                                    cm.npc_SetSpecialAction("oid=2005557", "special", 1, 1);
                                                                                    cm.Npc_Fadeout("oid=2005557", 1000, 200);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#真是遗憾。\r\n我还想在和对抗者动手的时候，使用镜世界的力量……", 37, 3003503, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#对于这个人，看来是没这个必要了。", 37, 3003503, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#……", 37, 3003505, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_SetForceMove("oid=2005557", -1, 50, 100);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#啊～等一下。我不想和你战斗。", 37, 3003503, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_PushScaleInfo(300, 2000, 300, -1260, 190);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face2#好了～选择的时候到了。你是要救对抗者呢，还是要阻止仪式呢？", 37, 3003503, false, true);
                                                                                                    cm.effect_Voice("Voice4.img/Will/b_3-2.mp3", 128);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2005557"], [0, 0, -100, 1, 0, 1, 0, 0]);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#选择哪一个是你的自由。但是请注意。", 37, 3003503, false, true);
                                                                                                        cm.effect_Voice("Voice4.img/Will/b_4-2_1.mp3", 128);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face2#现在没时间犹豫了。", 37, 3003503, false, true);
                                                                                                              cm.effect_Voice("Voice4.img/Will/b_4-2_2.mp3", 128);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.fieldEffect_ProcessOnOffLayer('00', "Map/Effect3.img/esfera/confront/0", 0, 500, 0, -80, 12, 4, 1);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/waterdrop", 3000);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("……！", 57, 0, false, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/bubble", 100);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("喘不上气来了……", 57, 0, false, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom('……', 57, 0, false, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/waterdrop", 3000);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.forceStartQuest(34580, '');
                                                                                                                                    cm.updateInfoQuest(34560, "30=h0;50=h0;31=h1;51=h0;32=h1;52=h0;33=h0;53=h0;34=h0;54=h1;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                                                                                                                                    cm.updateInfoQuest(34580, "wave=1");
                                                                                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
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
                                                                                                                                          cm.dispose();
                                                                                                                                          cm.warp(450007170, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;