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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(300);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_OneTimeAction("好友故事_弹完吉他", 200000);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 230, 138);
        cm.inGameDirectionEvent_PushScaleInfo(10, 1500, 10, 400, 150);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(1530613, "oid=40005972", 420, 150, 11, 370, 470, 1, false, 1000, false);
          cm.npc_SetSpecialAction("oid=40005972", "summon", 0, 0);
          cm.npc_ChangeController(1530614, "oid=40005973", 520, 150, 11, 470, 570, 1, false, 1000, false);
          cm.npc_SetSpecialAction("oid=40005973", 'summon', 0, 0);
          cm.npc_ChangeController(1530611, "oid=40005974", 440, 116, 6, 390, 490, 1, false, 1000, false);
          cm.npc_SetSpecialAction("oid=40005974", "summon", 0, 0);
          cm.npc_ChangeController(1530612, "oid=40005975", 340, 153, 11, 290, 390, 1, false, 1000, false);
          cm.npc_SetSpecialAction("oid=40005975", "summon", 0, 0);
          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2500);
          cm.effect_Voice("SoundEff.img/BandNoise", 100);
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
                cm.sendNormalTalk_Bottom("咻，真是壮观的演奏啊。你看到了吗？我的吉他实力！", 37, 1530100, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("……真是壮观啊。", 37, 1530090, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0##h0#，伊卡尔特不在，你们真是太走运了。", 37, 1530120, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("呜呜……这是什么啊~", 37, 1530607, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("那我们就再试一次吧。", 37, 1530120, true, true);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                            cm.effect_Voice("SoundEff.img/BandNoise", 100);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(1530370, "oid=40010316", -200, 170, 9, -250, -150, 0, true, false);
                              cm.npc_SetSpecialAction("oid=40010316", "summon", 0, 0);
                              cm.npc_ChangeController(1530619, "oid=40010317", -275, 150, 9, -325, -225, 0, true, false);
                              cm.npc_SetSpecialAction("oid=40010317", "summon", 0, 0);
                              cm.npc_ChangeController(1530616, "oid=40010318", -325, 150, 9, -375, -275, 0, true, false);
                              cm.npc_SetSpecialAction("oid=40010318", "summon", 0, 0);
                              cm.sendNormalTalk_Bottom("什么啊！这是怎么回事！", 37, 1530370, false, true);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=40010316", 1, 250, 100);
                                cm.npc_SetForceMove("oid=40010317", 1, 250, 100);
                                cm.npc_SetForceMove("oid=40010318", 1, 250, 100);
                                cm.inGameDirectionEvent_PushScaleInfo(2500, 1750, 2500, 250, 175);
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
                                      cm.sendNormalTalk_Bottom("啊……", 37, 1530120, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("虽然我不知道这是怎么回事，不过你们小心点。啧啧。", 37, 1530370, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=40010316", -1, 550, 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=40010317", 1, 50, 100);
                                            cm.npc_SetForceMove("oid=40010318", 1, 50, 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("嗯嗯……", 37, 1530619, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#虽然如果听到不错的音乐，可能会恢复……\r\n病症似乎反而加重了。请好好再试一次吧。", 37, 1530070, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("重，重新再来！！", 37, 1530604, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_LeaveField("oid=40010316");
                                                      cm.npc_LeaveField("oid=40010316");
                                                      cm.npc_ChangeController(1530150, "oid=40014663", -45, 170, 9, -95, 5, 0, true, false);
                                                      cm.npc_SetSpecialAction("oid=40014663", "summon", 0, 0);
                                                      cm.npc_SetForceMove("oid=40014663", 1, 150, 100);
                                                      cm.inGameDirectionEvent_PushScaleInfo(2500, 2000, 2500, 200, 200);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                        cm.effect_Voice("SoundEff.img/BandNoise", 100);
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
                                                              cm.sendNormalTalk_Bottom("喂，你们这些家伙！！你们是要造反吗！还是走火入魔了？如果对学校有什么不满，那就和老师说啊！", 37, 1530150, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("我能理解，你们现在是敏感时期！\r\n但是，越是这样越要找一些正确的方法来释放压力……", 37, 1530150, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=40005972"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=40005973"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=40005974"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=40005975"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                  cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam");
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom('我们只是在练习……', 37, 1530120, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=40014663"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                      cm.sendNormalTalk_Bottom("嗯？是，是吗？哦……好吧。", 37, 1530150, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_SetForceMove("oid=40014663", -1, 550, 100);
                                                                          cm.sendNormalTalk_Bottom("造反……", 37, 1530607, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("尖叫！", 37, 1530619, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("嗯，我还以为乐器都要被毁了呢。\r\n如果继续待在这里，连我们都要被波及了。\r\n我们走吧，希纳斯大人。", 37, 1530070, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom('嘶嘶嘶。', 37, 1530619, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetForceMove("oid=40010317", -1, 550, 100);
                                                                                  cm.npc_SetForceMove("oid=40010318", -1, 550, 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#呃，不能输！再来练习！", 37, 1530604, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_LeaveField("oid=40010317");
                                                                                        cm.npc_LeaveField("oid=40010317");
                                                                                        cm.npc_LeaveField("oid=40010318");
                                                                                        cm.npc_LeaveField("oid=40010318");
                                                                                        cm.npc_LeaveField("oid=40014663");
                                                                                        cm.npc_LeaveField("oid=40014663");
                                                                                        cm.npc_ChangeController(1530160, "oid=40021188", 100, 140, 10, 50, 150, 0, true, false);
                                                                                        cm.npc_SetSpecialAction("oid=40021188", "summon", 0, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                        cm.effect_Voice("SoundEff.img/BandNoise", 100);
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
                                                                                              cm.sendNormalTalk_Bottom("#face1#你们！你们知道噪音对皮肤有多不好吗？", 37, 1530160, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face1#你们差不多就行了！因为你们我都要被气老了！", 37, 1530160, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=40005972"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=40005973"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=40005974"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=40005975"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam");
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.setNpcSpecialActionReset("oid=40021188");
                                                                                                    cm.npc_SetForceMove("oid=40021188", -1, 500, 100);
                                                                                                    cm.sendNormalTalk_Bottom("切，已经老了。", 37, 1530100, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(1500, 1750, 1500, 400, 175);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#呃啊，真是练不下去了！", 37, 1530100, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("嘤……不能去其他地方练习吗？我也想敲真正的架子鼓 ！", 37, 1530607, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("好！我们去借练习室吧！\r\n练习室里有真正的架子鼓，也不会有妨碍的人。", 37, 1530120, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom('钱怎么办？', 37, 1530090, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("我们去兼职就行了，我们大家一起，很快就能凑齐的。", 37, 1530120, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("呜呜……必须得这样做吗？", 37, 1530607, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#嗯……音乐原本就是要饿肚子的。饥饿的精神！", 37, 1530604, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("现在你有点像胡克啊。", 37, 1530090, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom('呃。', 37, 1530604, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0我怎么了！", 37, 1530100, true, true);
                                                                                                                          } else if (status === V++) {
                                                                                                                            cm.dispose();
                                                                                                                            cm.warp(330000620, 1);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;