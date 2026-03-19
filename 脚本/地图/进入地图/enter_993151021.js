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
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
      cm.inGameDirectionEvent_AskAnswerTime(350);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
        cm.inGameDirectionEvent_AskAnswerTime(270);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder3", 100);
          cm.inGameDirectionEvent_AskAnswerTime(420);
        } else {
          if (status === V++) {
            cm.setAmbience("SoundEff.img/HofM/act4/fire", 300, 60);
            cm.inGameDirectionEvent_SetHideEffect(1);
            cm.inGameDirectionEvent_AskAnswerTime(5000);
            cm.effect_Text(["#fn黑体##fs18#同一时间，王室图书馆"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
          } else {
            if (status === V++) {
              cm.npc_ChangeController(3004431, "oid=63572659", 26, 15, 2, -24, 76, 1, true, 0, false);
              cm.npc_SetSpecialAction("oid=63572659", "summon", 0, 0);
              cm.npc_ChangeController(3004437, "oid=63572660", -60, 15, 2, -110, -10, 0, true, 0, false);
              cm.npc_SetSpecialAction("oid=63572660", "summon", 0, 0);
              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 26, 58);
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
                    cm.sendNormalTalk_Bottom("#face0#伊黛娜大人，着火了！一道闪电劈中了王宫。", 37, 3004437, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#请您赶快前往避难场所。", 37, 3004437, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#不对啊……应该就写在这本书里……", 37, 3004431, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#二位先出去吧。我不会花很久的。", 37, 3004431, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#还有，艾伦也会来……他说让我们等他十分钟。", 37, 3004431, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#请告诉他，如果到时候我没能出来，就可以开启消防装置了。", 37, 3004431, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#什么？您是指……？", 37, 3004437, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#……我知道了。", 37, 3004437, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#找到了！在这里！", 37, 3004431, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction23.img/illust3/5", 0, 1000, -90, -80, 1, 4, 0, -1, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_Monologue("\t\t#fc0xFF000000#掌握原理后，展开试验，验证原理", 0);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue("\t\t#fc0xFF000000#这是研究者的本分。", 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_Monologue("\t\t#fc0xFF000000#受到憎恶神明的时代氛围影响", 0);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_Monologue("\t\t#fc0xFF000000#此前被视为禁忌的研究大获成功了。", 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_Monologue("\t\t#fc0xFF000000#代价是，放弃心中仅存的些许人性", 0);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_Monologue("\t\t#fc0xFF000000#各种试验轮番上演。", 0);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_Monologue("\t\t#fc0xFF000000#", 0);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_Monologue("\t\t#fc0xFF000000#如此诞生的怪异存在", 0);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_Monologue("\t\t#fc0xFF000000#也会变得永远厌恶人类。", 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_Monologue("\t\t#fc0xFF000000#但从结果而言……我们成功了。", 0);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_Monologue("\t\t#fc0xFF000000#", 0);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_Monologue("\t\t#fc0xFF000000#违背神的意志", 0);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_Monologue("\t\t#fc0xFF000000#开始挥舞蕴含他们的力量的武器。", 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_Monologue("\t\t#fc0xFF000000#一具躯体中承载着无数个灵魂的#r怪物#fc0xFF000000#……", 0);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_Monologue("\t\t#fc0xFF000000#就这样诞生了。", 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                      cm.npc_LeaveField("oid=63572660");
                                                                                      cm.npc_LeaveField("oid=63572660");
                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face4#一具躯体中承载着无数个灵魂的怪物……", 37, 3004431, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face2#我想得没错，他果然是冒牌货。", 37, 3004431, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder2", 100);
                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63572659"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#过去多久了？要赶快出去才行……", 37, 3004431, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_SetForceMove("oid=63572659", -1, 30, 100);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face4#！！！", 37, 3004431, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.playSoundEffDirectly("SoundEff.img/HofM/act4/fire");
                                                                                                      cm.fieldEffect_PlayBGM("SoundEff.img/ArcaneRiver/thrill", 0, 0);
                                                                                                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 26, -70);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_ChangeController(3004460, "oid=63579479", -250, 15, 2, -300, -200, 0, true, 700, false);
                                                                                                          cm.npc_SetSpecialAction("oid=63579479", 'summon', 0, 0);
                                                                                                          cm.npc_ChangeController(3004460, "oid=63579480", -350, 15, 1, -400, -300, 0, true, 700, false);
                                                                                                          cm.npc_SetSpecialAction("oid=63579480", "summon", 0, 0);
                                                                                                          cm.npc_ChangeController(3004460, "oid=63579481", -450, 15, 1, -500, -400, 0, true, 700, false);
                                                                                                          cm.npc_SetSpecialAction("oid=63579481", 'summon', 0, 0);
                                                                                                          cm.npc_ChangeController(3004461, "oid=63579482", 350, 15, 4, 300, 400, 1, false, 700, false);
                                                                                                          cm.npc_SetSpecialAction("oid=63579482", "summon", 0, 0);
                                                                                                          cm.npc_ChangeController(3004461, "oid=63579483", 450, 15, 4, 400, 500, 1, false, 700, false);
                                                                                                          cm.npc_SetSpecialAction("oid=63579483", "summon", 0, 0);
                                                                                                          cm.npc_ChangeController(3004461, "oid=63579484", 550, 15, 4, 500, 600, 1, false, 700, false);
                                                                                                          cm.npc_SetSpecialAction("oid=63579484", 'summon', 0, 0);
                                                                                                          cm.npc_ChangeController(3004460, "oid=63579485", -220, -250, 5, -270, -170, 0, true, 700, false);
                                                                                                          cm.npc_SetSpecialAction("oid=63579485", "summon", 0, 0);
                                                                                                          cm.npc_ChangeController(3004460, "oid=63579486", -320, -250, 8, -370, -270, 0, true, 700, false);
                                                                                                          cm.npc_SetSpecialAction("oid=63579486", "summon", 0, 0);
                                                                                                          cm.npc_ChangeController(3004460, "oid=63579487", -420, -250, 7, -470, -370, 0, true, 700, false);
                                                                                                          cm.npc_SetSpecialAction("oid=63579487", "summon", 0, 0);
                                                                                                          cm.npc_ChangeController(3004461, "oid=63579488", 320, -250, 11, 270, 370, 1, false, 700, false);
                                                                                                          cm.npc_SetSpecialAction("oid=63579488", "summon", 0, 0);
                                                                                                          cm.npc_ChangeController(3004461, "oid=63579489", 420, -250, 12, 370, 470, 1, false, 700, false);
                                                                                                          cm.npc_SetSpecialAction("oid=63579489", "summon", 0, 0);
                                                                                                          cm.npc_ChangeController(3004461, "oid=63579490", 520, -250, 9, 470, 570, 1, false, 700, false);
                                                                                                          cm.npc_SetSpecialAction("oid=63579490", 'summon', 0, 0);
                                                                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#看来……此路不通了。", 37, 3004431, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 0, 58);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.npc_SetSpecialAction("oid=63572659", 'special2', -1, 1);
                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric1", 100);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face2#事情败露了就想要灭口，是吗？", 37, 3004431, false, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                            } else if (status === V++) {
                                                                                                                              cm.eventSKill(0);
                                                                                                                              cm.forceCompleteQuest(39917);
                                                                                                                              cm.warp(410000800, 0, true);
                                                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                                                              cm.setStandAloneMode(false);
                                                                                                                              cm.updateInfoQuest(39917, "clear=1");
                                                                                                                              cm.gainExp(30 * Math.pow(cm.getLevel(), 3));
                                                                                                                              cm.npc_LeaveField("oid=63572659");
                                                                                                                              cm.npc_LeaveField("oid=63572659");
                                                                                                                              cm.npc_LeaveField("oid=63579479");
                                                                                                                              cm.npc_LeaveField("oid=63579479");
                                                                                                                              cm.npc_LeaveField("oid=63579480");
                                                                                                                              cm.npc_LeaveField("oid=63579480");
                                                                                                                              cm.npc_LeaveField("oid=63579481");
                                                                                                                              cm.npc_LeaveField("oid=63579481");
                                                                                                                              cm.npc_LeaveField("oid=63579482");
                                                                                                                              cm.npc_LeaveField("oid=63579482");
                                                                                                                              cm.npc_LeaveField("oid=63579483");
                                                                                                                              cm.npc_LeaveField("oid=63579483");
                                                                                                                              cm.npc_LeaveField("oid=63579484");
                                                                                                                              cm.npc_LeaveField("oid=63579484");
                                                                                                                              cm.npc_LeaveField("oid=63579485");
                                                                                                                              cm.npc_LeaveField("oid=63579485");
                                                                                                                              cm.npc_LeaveField("oid=63579486");
                                                                                                                              cm.npc_LeaveField("oid=63579486");
                                                                                                                              cm.npc_LeaveField("oid=63579487");
                                                                                                                              cm.npc_LeaveField("oid=63579487");
                                                                                                                              cm.npc_LeaveField("oid=63579488");
                                                                                                                              cm.npc_LeaveField("oid=63579488");
                                                                                                                              cm.npc_LeaveField("oid=63579489");
                                                                                                                              cm.npc_LeaveField("oid=63579489");
                                                                                                                              cm.npc_LeaveField("oid=63579490");
                                                                                                                              cm.npc_LeaveField("oid=63579490");
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