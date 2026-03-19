var status = -1;
var selectionLog = [];
function action(x, D, L) {
  if (status == 0 && x == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = L;
  var c = -1;
  if (status <= c++) {
    cm.dispose();
  } else {
    if (status === c++) {
      cm.npc_ChangeController(1540783, "oid=306125282", 70, 150, 2, 20, 120, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=306125282", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 0, 80);
      cm.curNodeEventEnd(true);
    } else {
      if (status === c++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === c++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === c++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === c++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/PhantomS"], [0, 0, 230, 1, 0, 1, 1, 0]);
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/PhantomS"], [0, -70, 230, 1, 0, 1, 1, 0]);
              cm.fieldEffect_PlayFieldSound("Phantom/0", 100);
              cm.npc_ChangeController(1540878, "oid=306128241", -70, 150, 2, -120, -20, 0, true, 0, false);
              cm.npc_SetSpecialAction("oid=306128241", 'summon', 0, 0);
              cm.npc_ChangeController(1540782, "oid=306128243", -10, 150, 2, -60, 40, 0, true, 0, false);
              cm.npc_SetSpecialAction("oid=306128243", "summon", 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === c++) {
                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 10, 220);
              } else {
                if (status === c++) {
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === c++) {
                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === c++) {
                      cm.sendNormalTalk_Bottom("#face1#我还很担心来着，看来配合得挺不错的嘛？\r\n龙神沉着冷静的指示也很不赖。", 37, 1540878, false, true);
                    } else {
                      if (status === c++) {
                        cm.sendNormalTalk_Bottom("#face15#嘿嘿，过奖了。", 37, 1540805, true, true);
                      } else {
                        if (status === c++) {
                          cm.sendNormalTalk_Bottom("现在还不能掉以轻心，不要太过大意。\r\n你该不会做了什么会引起人怀疑的行动吧？", 37, 1540880, true, true);
                        } else {
                          if (status === c++) {
                            cm.sendNormalTalk_Bottom("木头的毛病就是老是忧心忡忡的，\r\n虽然谨慎一点是好事，但偶尔也要有点悠闲的空间才好。", 37, 1540879, true, true);
                          } else {
                            if (status === c++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === c++) {
                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                cm.sendNormalTalk_Bottom("#fs30#喂，给我站住！！", 37, 1540852, false, true);
                              } else {
                                if (status === c++) {
                                  cm.npc_SetForceMove("oid=306128243", -1, 3, 20);
                                  cm.npc_SetForceMove("oid=306128241", -1, 3, 20);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=306128241"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=306128243"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=306125282"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === c++) {
                                    cm.sendNormalTalk_Bottom("#face2#真是愚蠢……难道身份曝光了吗！", 37, 1540880, false, true);
                                  } else {
                                    if (status === c++) {
                                      cm.sendNormalTalk_Bottom("#face9#这怎么可能……等一下，这个声音是？", 37, 1540879, true, true);
                                    } else {
                                      if (status === c++) {
                                        cm.fieldEffect_PlayBGM("Bgm40.img/TheDollMaster", 0, 0);
                                        cm.npc_ChangeController(1540852, "oid=306137493", -450, 150, 1, -500, -400, 0, true, 0, false);
                                        cm.npc_SetSpecialAction("oid=306137493", "summon", 0, 0);
                                        cm.npc_ChangeController(1540865, "oid=306137494", -450, 150, 1, -500, -400, 0, true, 0, false);
                                        cm.npc_SetSpecialAction("oid=306137494", "summon", 0, 0);
                                        cm.npc_SetForceMove("oid=306137493", 1, 240, 120);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === c++) {
                                          cm.sendNormalTalk_Bottom("咳咳……喂，你往哪儿逃！给我你的号码嘛！", 37, 1540852, false, true);
                                        } else {
                                          if (status === c++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === c++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=306125282"], [0, 0, 0, 1, 100, 1, 0, 0]);
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=306128241"], [0, 0, 0, 1, 100, 1, 0, 0]);
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=306128243"], [0, 0, 0, 1, 100, 1, 0, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === c++) {
                                                cm.sendNormalTalk_Bottom("#face0#你这么快就有跟踪狂了。", 37, 1540880, false, true);
                                              } else {
                                                if (status === c++) {
                                                  cm.sendNormalTalk_Bottom("#face2#我可什么都没做。", 37, 1540879, true, true);
                                                } else {
                                                  if (status === c++) {
                                                    cm.sendNormalTalk_Bottom("喂，混蛋！长得帅了不起啊！", 37, 1540852, true, true);
                                                  } else {
                                                    if (status === c++) {
                                                      cm.sendNormalTalk_Bottom("#face3#等一下，那个女人嗓门太大了！让她安静点！", 37, 1540878, true, true);
                                                    } else {
                                                      if (status === c++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === c++) {
                                                          cm.npc_SetSpecialAction("oid=306128241", 'special', -1, 1);
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/Mer1", 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        } else {
                                                          if (status === c++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                            cm.effect_NormalSpeechBalloon("#fn黑体##fs15##r你打算杀了她吗！", 0, 0, 0, 1500, 1, 0, 0, 0, 4, 1540782, cm.getPlayer().getId());
                                                            cm.effect_NormalSpeechBalloon("#fn黑体##fs15##r你打算杀了她吗！", 0, 0, 0, 1500, 1, 0, 0, 0, 4, 1540783, cm.getPlayer().getId());
                                                          } else {
                                                            if (status === c++) {
                                                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                              cm.sendNormalTalk_Bottom("谁在那边？那里可是管制进出区域！", 37, 1540865, false, true);
                                                            } else {
                                                              if (status === c++) {
                                                                cm.npc_SetForceMove("oid=306137494", 1, 200, 120);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status === c++) {
                                                                  cm.fieldEffect_PlayBGM("Bgm45/Showtime!", 0, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === c++) {
                                                                    cm.sendNormalTalk_Bottom("你，你们是？！手上那个武器又是什么？！", 37, 1540865, false, true);
                                                                  } else {
                                                                    if (status === c++) {
                                                                      cm.sendNormalTalk_Bottom("#face3#啊，这个是……", 37, 1540878, true, true);
                                                                    } else {
                                                                      if (status === c++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === c++) {
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else if (status === c++) {
                                                                          cm.dispose();
                                                                          cm.warp(350131200, 0, true);
                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                          cm.npc_LeaveField("oid=306125282");
                                                                          cm.npc_LeaveField("oid=306125282");
                                                                          cm.npc_LeaveField("oid=306128241");
                                                                          cm.npc_LeaveField("oid=306128241");
                                                                          cm.npc_LeaveField("oid=306128243");
                                                                          cm.npc_LeaveField("oid=306128243");
                                                                          cm.npc_LeaveField("oid=306137493");
                                                                          cm.npc_LeaveField("oid=306137493");
                                                                          cm.npc_LeaveField("oid=306137494");
                                                                          cm.npc_LeaveField("oid=306137494");
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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