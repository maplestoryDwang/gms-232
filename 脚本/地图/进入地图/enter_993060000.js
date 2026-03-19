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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -500, -670);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
        cm.setAmbience("Ambience.img/BMPre_light", 200, 60);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction20.img/effect/BMPre_light/0", 0, 2000, 0, 0, 1, 4, 1);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2500);
          cm.effect_Text(["#fn黑体##fs35##ho#……."], [50, 2000, 7, 0, -50, 0, 4, 3, 300, 300]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2500);
              cm.effect_Text(["#fn黑体##fs35##ho#……."], [50, 2000, 7, 0, -50, 0, 4, 3, 300, 300]);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3100);
                cm.effect_Text(["#fn黑体##fs35#你是想要守护这个世界的人。"], [50, 2600, 7, 0, -50, 0, 4, 3, 300, 300]);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(3300);
                  cm.effect_Text(["#fn黑体##fs35#到达艰苦之路尽头的勇士啊……"], [50, 2800, 7, 0, -50, 0, 4, 3, 300, 300]);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                    cm.effect_Text(["#fn黑体##fs35#黑色的太阳即将苏醒。"], [50, 2000, 7, 0, -50, 0, 4, 3, 300, 300]);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(4500);
                      cm.effect_Text(["#fn黑体##fs35#能够对抗邪恶的力量，只有勇士们的心愿……"], [50, 4000, 7, 0, -50, 0, 4, 3, 300, 300]);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(4500);
                        cm.effect_Text(["#fn黑体##fs35#世界需要你的力量。"], [50, 2000, 7, 0, -50, 0, 4, 3, 300, 300]);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2900);
                          cm.effect_Text(["#fn黑体##fs35##ho#……点燃心愿之火吧。"], [50, 2400, 7, 0, -50, 0, 4, 3, 300, 300]);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                            cm.effect_Text(["#fn黑体##fs35#希望你能给这个世界带来光明……"], [50, 3000, 7, 0, -50, 0, 4, 3, 300, 300]);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1500, 0, 0, 0, 0, 0);
                              cm.fieldEffect_Hero9(0, 2000);
                              cm.inGameDirectionEvent_AskAnswerTime(3300);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                cm.fieldEffect_Hero9(80, 1000);
                                cm.playSoundEffDirectly("Ambience.img/BMPre_light");
                                cm.npc_ChangeController(3003652, "oid=2199014", 350, -430, 3, 300, 400, 0, true, 0, false);
                                cm.npc_SetSpecialAction("oid=2199014", 'summon', 0, 0);
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayBGM("Bgm49/SoupOfLife", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    cm.effect_Text(["#fn黑体##fs18#埃斯佩拉，太初之海"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1000, 4000, 150, -280);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(4500);
                                      } else {
                                        if (status === V++) {
                                          cm.userSetFieldFloating(993060000, 0, 30, 1000);
                                          cm.sendNormalTalk_Bottom("#face0#下一个任务是……扫荡怪物。为回归冒险岛世界做准备。", 37, 3003652, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face3##b#ho##k，让我们先去清理一下大本营周边。", 37, 3003652, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#黑月与白太阳融合后形成的暴风地带，", 0);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#威力随着时间的流逝而不断增强，吞噬了周围的一切。", 0);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n\r\n\r\n就在不久之前，", 0);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#那猛烈的气场逼近了大本营周边。", 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#联盟的谋士南哈特·冯，卢比施坦因", 0);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#认为时候将近，决定紧急召回大部队。", 0);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n\r\n\r\n为了与黑魔法师的决战做准备，", 0);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#正在对埃斯佩拉进行调查的时间神官和联盟成员", 0);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n\r\n也在忙着结束自己手头的工作。", 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                      cm.sendNormalTalk_Bottom("#face3#哦，我收到了信号。好像是休麦和梅尔朗那边。", 37, 3003652, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face3#喂，沃莉！时间神官们拜托的事情全都搞定了！\r\n下一个任务是……扫荡怪物吗？", 37, 3003653, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#是的，没错。我们负责内部……\r\n休麦，你们负责大本营的外围。", 37, 3003652, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face2#为了把周围全部清理干净，我累得腰都快断了。\r\n哎哟……南哈特也真是的，一天都不让人休息。", 37, 3003653, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#冒险骑士团一定也很辛苦。\r\n不是吗，沃莉？", 37, 3003653, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#为了守护正义，必须不惧艰难险阻，这是执剑者的义务。\r\n我一点都不觉得辛苦。", 37, 3003652, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face1#哈，真是什么样的上司，就有什么样的部下。", 37, 3003653, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#为了回去，首先必须让电波稳定下来，这可是你说的。\r\n抱怨的话就别说了。", 37, 3003652, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face1#话是没错……但是……", 37, 3003653, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face3#哈……好，好吧！！\r\n这点小事，我一下子就能搞定！！", 37, 3003653, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face1#呼噜噜……呼呼……", 37, 3003654, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face1#……怎么好像有奇怪的声音。", 37, 3003652, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face1#咂咂……真甜。", 37, 3003654, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face3#梅尔朗……", 37, 3003653, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face1#这家伙……快起来！！", 37, 3003653, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face1#做成草莓味……咂咂……", 37, 3003654, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face1#哈，哈哈……", 37, 3003652, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#好了，我和#b#ho##k快搞定了。\r\n任务完成之后，我们在大本营见吧。", 37, 3003652, false, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face3#呃……知道了。", 37, 3003653, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#哈……一会儿见。", 37, 3003654, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BMpre/ship2", 100);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.userSetFieldFloating(993060000, 0, 0, 0);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, -1000, -770);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.forceStartQuest(35601, '');
                                                                                                                                    cm.forceCompleteQuest(35601);
                                                                                                                                    cm.gainExp(85793345);
                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                                                                                                                        } else if (status === V++) {
                                                                                                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                          cm.npc_LeaveField("oid=2199014");
                                                                                                                                          cm.npc_LeaveField("oid=2199014");
                                                                                                                                          cm.dispose();
                                                                                                                                          cm.warp(993060001, 0, false);
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