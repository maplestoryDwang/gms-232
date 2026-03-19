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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(2570120, "oid=38082508", 279, 165, 104, 229, 329, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=38082508", "summon", 0, 0);
      cm.npc_ChangeController(2570100, "oid=38082509", 392, 112, 102, 342, 442, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=38082509", "summon", 0, 0);
      cm.npc_ChangeController(2570121, "oid=38082510", 190, 126, 102, 140, 240, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=38082510", "summon", 0, 0);
      cm.npc_ChangeController(2570122, "oid=38082511", 68, 177, 105, 18, 118, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=38082511", "summon", 0, 0);
      cm.npc_ChangeController(2570123, "oid=38082512", 544, 110, 102, 494, 594, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=38082512", 'summon', 0, 0);
      cm.npc_ChangeController(2570124, "oid=38082513", 621, 167, 108, 571, 671, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=38082513", 'summon', 0, 0);
      cm.npc_ChangeController(2570125, "oid=38082514", -45, 171, 105, -95, 5, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=38082514", 'summon', 0, 0);
      cm.npc_ChangeController(2570110, "oid=38082515", 392, 112, 102, 342, 442, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=38082515", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=38082508", "die4", -1, 1);
      cm.npc_SetSpecialAction("oid=38082515", 'hide', -1, 1);
      cm.npc_ChangeController(2570111, "oid=38082516", 190, 126, 102, 140, 240, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=38082516", 'summon', 0, 0);
      cm.npc_ChangeController(2570112, "oid=38082517", 68, 177, 105, 18, 118, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=38082517", 'summon', 0, 0);
      cm.npc_ChangeController(2570113, "oid=38082518", 544, 110, 102, 494, 594, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=38082518", "summon", 0, 0);
      cm.npc_ChangeController(2570114, "oid=38082519", 621, 167, 108, 571, 671, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=38082519", 'summon', 0, 0);
      cm.npc_ChangeController(2570115, "oid=38082520", -45, 171, 105, -95, 5, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=38082520", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=38082516", "hide", -1, 1);
      cm.npc_SetSpecialAction("oid=38082517", "hide", -1, 1);
      cm.npc_SetSpecialAction("oid=38082518", 'hide', -1, 1);
      cm.npc_SetSpecialAction("oid=38082519", "hide", -1, 1);
      cm.npc_SetSpecialAction("oid=38082520", "hide", -1, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 323, 122);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#事情就是这样。", 36, 2570100, false, true, 1);
            cm.effect_Voice("Voice6.img/Library/kel/25-01-kel.mp3", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#这故事……真是太惊人了。", 36, 2570122, true, true, 1);
              cm.effect_Voice("Voice6.img/Library/kel/25-02-kel.mp3", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#我刚逃出幻象的世界……\r\n就遇到了在外头等待的可怕恶魔……#r艾里葛斯·都纳米斯……#k", 36, 2570100, true, true, 1);
                cm.effect_Voice("Voice6.img/Library/kel/25-03-kel.mp3", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#结果轻而易举就将他打倒了。", 36, 2570100, true, true, 1);
                  cm.effect_Voice("Voice6.img/Library/kel/25-04-kel.mp3", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#那团员们呢……？你成功复活他们了吗？", 36, 2570123, true, true, 1);
                    cm.effect_Voice("Voice6.img/Library/kel/25-05-kel.mp3", 100);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=38082509", "special5", -1, 1);
                      cm.sendNormalTalk_Bottom("#face0#还没有。我是说……暂时还没有。", 36, 2570100, true, true, 1);
                      cm.effect_Voice("Voice6.img/Library/kel/25-07-kel.mp3", 100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayBGM("Bgm50/SubterminalPoint", 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#等等……有点不对劲……", 36, 2570125, false, true, 1);
                            cm.effect_Voice("Voice6.img/Library/kel/25-08-kel.mp3", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#……！？", 36, 2570124, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#给，请你们按约定收下#r鲁碧安#k吧。", 36, 2570100, true, true, 1);
                                cm.effect_Voice("Voice6.img/Library/kel/25-09-kel.mp3", 100);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM_Weapon/memory", 100);
                                  cm.sendNormalTalk_Bottom("#face0#你们期盼的鲁碧安……是永生。", 36, 2570100, true, true, 1);
                                  cm.effect_Voice("Voice6.img/Library/kel/25-10-kel.mp3", 100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=38082510"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=38082511"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=38082512"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=38082513"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=38082514"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.userSetFieldFloating(308090024, 10, 10, 200);
                                      cm.onSetNpcScript("oid=38082516", 1, ["regen", "regen2"], [1, -1]);
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.onSetNpcScript("oid=38082517", 1, ['regen', "regen2"], [1, -1]);
                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                      } else {
                                        if (status === V++) {
                                          cm.onSetNpcScript("oid=38082518", 1, ["regen", "regen2"], [1, -1]);
                                          cm.onSetNpcScript("oid=38082519", 1, ['regen', "regen2"], [1, -1]);
                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                        } else {
                                          if (status === V++) {
                                            cm.onSetNpcScript("oid=38082520", 1, ['regen', "regen2"], [1, -1]);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                            } else {
                                              if (status === V++) {
                                                cm.effect_NormalSpeechBalloon('呃啊啊！！', 0, 0, 0, 2000, 1, 0, 0, 0, 4, 2570121, null, cm.getPlayer().getId());
                                                cm.effect_NormalSpeechBalloon("呃啊啊！！", 0, 0, 0, 2000, 1, 0, 0, 0, 4, 2570122, null, cm.getPlayer().getId());
                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                              } else {
                                                if (status === V++) {
                                                  cm.effect_NormalSpeechBalloon('呃啊啊！！', 0, 0, 0, 2000, 1, 0, 0, 0, 4, 2570123, null, cm.getPlayer().getId());
                                                  cm.effect_NormalSpeechBalloon("呃啊啊！！", 0, 0, 0, 2000, 1, 0, 0, 0, 4, 2570124, null, cm.getPlayer().getId());
                                                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.effect_NormalSpeechBalloon("呃啊啊！！", 0, 0, 0, 2000, 1, 0, 0, 0, 4, 2570125, null, cm.getPlayer().getId());
                                                    cm.npc_LeaveField("oid=38082510");
                                                    cm.onSetNpcScript("oid=38082516", 1, ["regen2", "regen3"], [1, 1]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#为伟大的主君而战！", 36, 2570111, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_LeaveField("oid=38082511");
                                                          cm.onSetNpcScript("oid=38082517", 1, ["regen2", "regen3"], [1, 1]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#这帮低贱的家伙很嚣张啊！", 36, 2570112, false, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_LeaveField("oid=38082512");
                                                                cm.onSetNpcScript("oid=38082518", 1, ["regen2", 'regen3'], [1, 1]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#猎物出现了。", 36, 2570113, false, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_LeaveField("oid=38082513");
                                                                      cm.onSetNpcScript("oid=38082519", 1, ["regen2", 'regen3'], [1, 1]);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#发现目标，执行清除行动。", 36, 2570114, false, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_LeaveField("oid=38082514");
                                                                            cm.onSetNpcScript("oid=38082520", 1, ["regen2", "regen3"], [1, 1]);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#来比试比试吧？", 36, 2570115, false, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#莫卡丁、卡里亚恩、朱莉娅、cq57、弗雷德……", 36, 2570100, false, true, 1);
                                                                                  cm.effect_Voice("Voice6.img/Library/kel/25-11-kel.mp3", 100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#还有……", 36, 2570100, true, true, 1);
                                                                                    cm.effect_Voice("Voice6.img/Library/kel/25-12-kel.mp3", 100);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.onSetNpcScript("oid=38082508", 1, ["die5", "die4"], [1, -1]);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.Npc_Fadeout("oid=38082508", 0, 500);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_SetSpecialAction("oid=38082515", "regen", 1, 1);
                                                                                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8645009/Regen", 100);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_LeaveField("oid=38082509");
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0##r#fs22#敦凯尔……", 36, 3003913, false, true, 1);
                                                                                              cm.effect_Voice("Voice6.img/Library/kel/25-13-kel.mp3", 100);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.userSetFieldFloating(308090024, 0, 0, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_ChangeController(2570107, "oid=38086618", 279, 165, 104, 229, 329, 0, false, 1000, false);
                                                                                                  cm.npc_SetSpecialAction("oid=38086618", 'summon', 0, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#我发誓永远效忠伟大的主君。", 36, 3003913, false, true, 1);
                                                                                                    cm.effect_Voice("Voice6.img/Library/kel/25-14-kel.1.mp3", 100);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.Npc_Fadeout("oid=38086618", 0, 3000);
                                                                                                      cm.npc_ChangeController(3003900, "oid=38087238", 279, 165, 104, 229, 329, 0, false, 3000, false);
                                                                                                      cm.npc_SetSpecialAction("oid=38087238", "summon", 0, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face4#呵呵……。", 36, 3003900, false, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                          } else if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                            cm.npc_LeaveField("oid=38082508");
                                                                                                            cm.npc_LeaveField("oid=38082515");
                                                                                                            cm.npc_LeaveField("oid=38082516");
                                                                                                            cm.npc_LeaveField("oid=38082517");
                                                                                                            cm.npc_LeaveField("oid=38082518");
                                                                                                            cm.npc_LeaveField("oid=38082519");
                                                                                                            cm.npc_LeaveField("oid=38082520");
                                                                                                            cm.npc_LeaveField("oid=38086618");
                                                                                                            cm.npc_LeaveField("oid=38087238");
                                                                                                            cm.dispose();
                                                                                                            cm.warp(308090025, 0, true);
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
    }
  }
}