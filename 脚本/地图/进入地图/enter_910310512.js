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
      cm.npc_ChangeController(1052236, "oid=218955", -1, 147, 1, -51, 49, 1, false, false);
      cm.npc_ChangeController(1052237, "oid=218956", -88, 147, 1, -138, -38, 1, false, false);
      cm.npc_ChangeController(1052238, "oid=218957", 84, 147, 1, 34, 134, 0, false, false);
      cm.npc_ChangeController(1052239, "oid=218958", -178, 147, 1, -178, -128, 1, false, false);
      cm.npc_ChangeController(1052240, "oid=218959", 178, 147, 1, 128, 178, 0, false, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.sendNormalTalk_Bottom("#face0#在提前短信投票中，以绝对性的优势夺得第一，占据了梦幻舞台！", 37, 1052217, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#大火经纪公司的新人组合！现在就有请她们上台吧！", 37, 1052217, true, true);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/heart", 300);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
            cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -520, -180);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(1500, 2000, 1500, -500, -160);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
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
                          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 0, -90);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, 0, 50);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                            } else {
                              if (status === V++) {
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
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 0, 180);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/shout", 500);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/shout", 400);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/shout", 300);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#来，队长迪亚，麻烦说两句出道的感想吧。", 37, 1052217, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face3#能够站在梦寐以求的舞台上，我很开心，实在是难以言表。", 37, 1052230, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face3#……能够在酷炫的舞台上华丽出道，完美收官，不过现在才是我们真正的开始。", 37, 1052230, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face3#……请大家拭目以待，我们以后会带来更多的梦幻舞台！", 37, 1052230, true, true);
                                                  } else {
                                                    if (status === V++) {
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
                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 0, 0);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_PlayBGM("Bgm21.img/LoversIntheAfternoon", 0, 0);
                                                                  cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction5.img/effect/Kerning/group/0", 0, 0, 0, -80, 12, 4, 0);
                                                                    cm.sendNormalTalk_Bottom("#face3#来，开始！大家尽情享受这一刻吧！", 37, 1052230, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face2#嘻嘻，开心地玩起来吧！", 37, 1052231, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#哈哈，大家都辛苦了，比之前练习的效果更惊人呢。", 37, 1052229, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face1#歌……我的歌正在响彻全世界。", 37, 1052229, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0);
                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_Monologue("直播之后。", 0);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_Monologue("大火娱乐新人组合在出道同时便霸占了所有音乐节目的第一名。", 0);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_Monologue("……出道专辑真的是大火了。", 0);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_Monologue("之后发行的歌曲不断霸占音乐榜单。", 0);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_Monologue("就这样阿赫和大火娱乐的五个少女一同重新书写了音乐界的历史。", 0);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_Monologue("而面对自己为什么会成功的问题，他们也总是这样回答。", 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face3#这全都要多亏了星探#b#ho##k，嘿嘿！", 37, 1052230, false, true);
                                                                                            } else if (status === V++) {
                                                                                              cm.dispose();
                                                                                              cm.warp(103041004, 1);
                                                                                              cm.inGameDirectionEvent_SetHideEffect(0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;