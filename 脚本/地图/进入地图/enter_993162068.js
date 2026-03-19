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
      cm.npc_ChangeController(3001908, "oid=434346", -1978, 374, 2, -2006, -1928, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -1439, 389);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#这里的能量已经耗尽，眼看就快灰飞烟灭了。", 36, 3001500, false, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#希望还能找到建筑物的细小残骸……", 36, 3001500, true, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face3##fc0xFFbfbfbf#(尽管很想拨开遮掩记忆的迷雾，但其实我心里很恐惧。\r\n万一得知比之前更过分的真相，到时我……)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face3##fc0xFFbfbfbf#(这样的我，还有资格再去守护谁吗？\r\n那个声音为什么再次将我召唤到这个世界上？)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#那边，能看见建筑物的残骸！", 36, 3001500, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
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
                          cm.sendNormalTalk_Bottom("#face0#……哎，阿黛尔？", 36, 3001500, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#虽然风刮得很猛，但一定要睁着眼睛！", 36, 3001500, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#那样才能看得清楚！", 36, 3001500, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1##fc0xFFbfbfbf#(也罢，已经发生的事情，无法挽回。\r\n即使在这前面将要揭晓的真相是我丑恶的罪过，)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(即使让我活下来是为了赎罪，\r\n……我无论如何必须面对被掩盖的过去。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/memory_in", 100);
                                        cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/7/skeleton", "new", '', '00'], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                                        cm.fieldEffect_Hero9(0, 1000);
                                        cm.inGameDirectionEvent_AskAnswerTime(1300);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                          cm.fieldEffect_Hero9(100, 500);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayBGM("Bgm53/ForEinherjar", 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction18.img/effect/adele/illust/past/6/0", 0, 1000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                                              cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/5/skeleton", 'new', '', '5'], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
                                              cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/6/skeleton", "new", '', '6'], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_ProcessOnOffLayer('99', "Effect/Direction18.img/effect/adele/illust/past/6/1", 0, 1000, 0, 0, 2, 4, 1, -1, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/lock", 100);
                                                  cm.inGameDirectionEvent_Monologue("“我们受上头的命令而来。”", 0);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue("“请你和我们一起走吧。”", 0);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/door", 100);
                                                      cm.inGameDirectionEvent_Monologue("\r\n紧闭的门开启了。", 0);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_Monologue("\r\n“艾因近卫骑士团的部分人决定起义……”", 0);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_Monologue("“要制止神王，只有这个办法。”", 0);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_Monologue("\r\n看着他们为了大义不得不做出选择的表情，", 0);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_Monologue("我心里产生了极度的幻灭感。", 0);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_Monologue("\r\n“…….”", 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_Monologue("“我们不是发誓成为主君的守护骑士吗。”", 0);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_Monologue("“直至灵魂消逝，也要护他周全。”", 0);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_Monologue("“愿意为他拼上性命。”", 0);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_Monologue("“可是……为什么？”", 0);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_Monologue("\r\n“从现在开始，你不再是我们的同僚！”", 0);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_Monologue("\r\n我击退包围的士兵，冲出监狱，", 0);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_Monologue('一路飞奔去保护主君。', 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_Monologue("神王殿已经被骑士们包围……他们连夜发动了袭击。", 0);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_Monologue("远远地，我看见了许多熟悉的面孔。", 0);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_Monologue("\r\n“居然背弃了对主君的信义。”", 0);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_Monologue("“……因为局势变化，就可以轻易打破承诺吗？”", 0);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_Monologue("“那就是你们的盟誓？”", 0);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_Monologue("\r\n“你那不是骑士精神……”", 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_ProcessOnOffLayer('99', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/memory_in", 100);
                                                                                              cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/7/skeleton", 'new', '', '00'], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                                                              cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                              cm.fieldEffect_取消复合图片动画('5', 0, 0);
                                                                                              cm.fieldEffect_取消复合图片动画('6', 0, 0);
                                                                                              cm.fieldEffect_Hero9(0, 1000);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                cm.fieldEffect_Hero9(100, 500);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_PlayBGM("Bgm48/VerdelTown", 0, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face6#即便局势如此，我还是没有背叛主君……", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face6#可是……我没能阻止悲剧的发生。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#看来你想起了什么。", 36, 3001500, true, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#风沙太猛了，我们返回安全地带吧。", 36, 3001500, true, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.forceCompleteQuest(39669);
                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
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
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                    } else if (status === V++) {
                                                                                                                      cm.warp(993162069, 0, false);
                                                                                                                      cm.setStandAloneMode(false);
                                                                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                      cm.setInGameDirectionMode(false, true, false);
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