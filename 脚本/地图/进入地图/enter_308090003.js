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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(2500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("也罢，只要记住这个就行。", 56, 0, false, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("不管是保护国王，加害国王，还是拥立新国王，", 56, 0, true, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom(" 都不是我的职责，我不能介入。", 56, 0, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("……。", 56, 0, true, true, 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("守护圣瑞尼亚。是我的誓约。", 0);
                  cm.effect_Voice("Voice6.img/Library/kel/04-04-kel.mp3", 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("我决心只牢记这一点。", 0);
                    cm.effect_Voice("Voice6.img/Library/kel/04-05-kel.mp3", 100);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_Monologue("仅仅这一点……", 1);
                      cm.effect_Voice("Voice6.img/Library/kel/04-06-kel.mp3", 100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                        cm.effect_Text(["#fn黑体##fs22##r几天后……", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
                      } else {
                        if (status === V++) {
                          cm.setAmbience("SoundEff.img/DLep4/war2", 100, 60);
                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#我早料到会有这一天。你这混账……\r\n我就知道你虎视眈眈地觊觎着这个位置！", 36, 2570106, false, true, 1);
                            cm.effect_Voice("Voice6.img/Library/king/05-01-king.mp3", 100);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#竟敢#r#fs20#造反#k！！！你这人神共愤的混账！！", 36, 2570106, false, true, 1);
                                cm.effect_Voice("Voice6.img/Library/king/05-02-king.mp3", 100);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayBGM("Bgm55/WhiteNight", 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.playSoundEffDirectly("SoundEff.img/DLep4/war2");
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 188, 107);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_ChangeController(2570107, "oid=37891013", 120, 177, 5, 70, 170, 0, false, 0, false);
                                      cm.npc_SetSpecialAction("oid=37891013", "summon", 0, 0);
                                      cm.npc_ChangeController(2570130, "oid=37891014", 8, 179, 5, -42, 58, 0, true, 0, false);
                                      cm.npc_SetSpecialAction("oid=37891014", "summon", 0, 0);
                                      cm.npc_ChangeController(2570130, "oid=37891015", -60, 179, 5, -110, -10, 0, true, 0, false);
                                      cm.npc_SetSpecialAction("oid=37891015", "summon", 0, 0);
                                      cm.npc_ChangeController(2570120, "oid=37891016", 290, 168, 4, 240, 340, 0, false, 0, false);
                                      cm.npc_SetSpecialAction("oid=37891016", "summon", 0, 0);
                                      cm.npc_SetSpecialAction("oid=37891016", "regen", -1, 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1500, 5000, 300, 107);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(7500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#我并不想辩解。\r\n请您配合地让出王位吧。", 36, 2570107, false, true, 1);
                                            cm.effect_Voice("Voice6.img/Library/prince/05-03-prince.mp3", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#从一开始，就不该让你进宫！！\r\n我屡次三番地说过，你这家伙……你迟早要抢走一切！", 36, 2570106, true, true, 1);
                                              cm.effect_Voice("Voice6.img/Library/king/05-04-king.mp3", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#到现在还说这种……！", 36, 2570107, true, true, 1);
                                                cm.effect_Voice("Voice6.img/Library/prince/05-05-prince.mp3", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                                  cm.sendNormalTalk_Bottom("#face1#这都是您自找的。", 36, 2570107, true, true, 1);
                                                  cm.effect_Voice("Voice6.img/Library/prince/05-06-prince.mp3", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#亲卫队！亲卫队长在哪！！凯拉德！凯拉德！！", 36, 2570106, true, true, 1);
                                                    cm.effect_Voice("Voice6.img/Library/king/05-07-king.mp3", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#老师不是被您亲自撵走了吗。\r\n您本来想以叛逆罪将他处死，我好不容易才拦了下来。", 36, 2570107, true, true, 1);
                                                      cm.effect_Voice("Voice6.img/Library/prince/05-08-prince.mp3", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1#从前声望很高的他，如今却领导着一支由落选者们组成的徒有其表的骑士团。", 36, 2570107, true, true, 1);
                                                        cm.effect_Voice("Voice6.img/Library/prince/05-09-prince.mp3", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#亲卫队！！凯拉德在哪里？！\r\n立刻给我斩了这狂妄的家伙！！", 36, 2570106, true, true, 1);
                                                          cm.effect_Voice("Voice6.img/Library/king/05-10-king.mp3", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#您现在已完全丧失神志了吗……", 36, 2570107, true, true, 1);
                                                            cm.effect_Voice("Voice6.img/Library/prince/05-11-prince.mp3", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#把他拿下。还有去找出宝石。", 36, 2570107, false, true, 1);
                                                                cm.effect_Voice("Voice6.img/Library/prince/05-12-prince.2.mp3", 100);
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
                                                                        cm.sendNormalTalk_Bottom("#face1#(成功了。虽然过程很惊险，但最终……)", 36, 2570107, false, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                            cm.sendNormalTalk_Bottom("#face0#王，王子殿下……你看那个！", 36, 2570130, false, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_PlayBGM("Bgm50/SubterminalPoint", 0, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.userSetFieldFloating(308090003, 3, 3, 5);
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.onSetNpcScript("oid=37891016", 1, ["regen2", "regen3"], [1, -1]);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face1#这……！怎么……？！", 36, 2570107, false, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face1#无论是王位还是鲁碧安！我都绝对不会交出来的！", 36, 2570106, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face1#你休想从我这里抢走任何东西！！", 36, 2570106, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_ProcessOnOffLayer('04', "Effect/Direction25.img/Dlep6/ilust/1", 0, 1500, 0, -80, 1, 4, 1, -1, 0, 0, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face1#(老师……！)", 36, 2570107, false, true, 1);
                                                                                                  cm.effect_Voice("Voice6.img/Library/prince/05-15-prince.3.mp3", 100);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 3000, 0, 0, 2000000, 4, 1, 0, 1, 0, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                    } else if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                      cm.forceCompleteQuest(37802);
                                                                                                      cm.updateInfoQuest(37802, "exp=1");
                                                                                                      cm.gainExp(5872020);
                                                                                                      cm.updateInfoQuest(37800, "01=h1;02=h1;03=h1;q1=clear;04=h0;q2=clear;05=h1;06=h0;dir00=end");
                                                                                                      cm.npc_LeaveField("oid=37891013");
                                                                                                      cm.npc_LeaveField("oid=37891014");
                                                                                                      cm.npc_LeaveField("oid=37891015");
                                                                                                      cm.npc_LeaveField("oid=37891016");
                                                                                                      cm.dispose();
                                                                                                      cm.warp(308000002, 0, true);
                                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                                      cm.setStandAloneMode(false);
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}