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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -346, -514);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayBGM("Bgm50/TheWorld’sEnd", 0, 0);
        cm.inGameDirectionEvent_SetHideEffect(1);
        cm.monadForceMove("light_993070066", 0, 0);
        cm.npc_ChangeController(3003672, "oid=2273752", -580, -670, 12, -630, -530, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2273752", 'summon', 0, 0);
        cm.npc_ChangeController(3003751, "oid=2273753", -680, -670, 12, -730, -630, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2273753", "summon", 0, 0);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -205, -600);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3003660, "oid=2273754", -700, -440, 1, -750, -650, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2273754", "summon", 0, 0);
          cm.npc_ChangeController(3003660, "oid=2273755", -630, -440, 1, -680, -580, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2273755", 'summon', 0, 0);
          cm.npc_ChangeController(3003660, "oid=2273756", -570, -440, 1, -620, -520, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2273756", "summon", 0, 0);
          cm.npc_ChangeController(3003660, "oid=2273757", -510, -440, 1, -560, -460, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2273757", "summon", 0, 0);
          cm.npc_ChangeController(3003660, "oid=2273758", -450, -440, 3, -500, -400, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2273758", "summon", 0, 0);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#过了几分钟了？", 37, 3003751, false, true);
              cm.effect_Voice("Voice4.img/BM3/nine/74", 128);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#有10分钟了。在巨人沉默之后。", 37, 3003672, true, true);
                cm.effect_Voice("Voice4.img/BM3/zig/0", 128);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#避开心脏部位，小心翼翼地尝试炮击，你觉得怎么样？", 37, 3003751, true, true);
                  cm.effect_Voice("Voice4.img/BM3/nine/78", 128);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#那个建议刚才不是被你否决了吗？", 37, 3003672, true, true);
                    cm.effect_Voice("Voice4.img/BM3/zig/3", 128);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#但是……", 37, 3003751, true, true);
                      cm.effect_Voice("Voice4.img/BM3/nine/83", 128);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#南哈特，如果你不能保持冷静的话，士兵们就会出现动摇。", 37, 3003672, true, true);
                        cm.effect_Voice("Voice4.img/BM3/zig/8", 128);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#……你说的对。", 37, 3003751, true, true);
                          cm.effect_Voice("Voice4.img/BM3/nine/88", 128);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#希望大家能安然无恙……", 37, 3003672, false, true);
                              cm.effect_Voice("Voice4.img/BM3/zig/9", 128);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#看那边！", 37, 3003759, true, true);
                                cm.effect_Voice("Voice4.img/BM3/sol/6", 128);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/2"], [0, -216, -803, 1, 0, 1, 1, 0]);
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/portal_attack", 200);
                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#！！", 37, 3003751, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#前方！有几艘船从巨人心脏中逃出，正在向我们靠近！！！", 37, 3003759, true, true);
                                        cm.effect_Voice("Voice4.img/BM3/sol/13", 128);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#快用炮击支援！！", 37, 3003751, true, true);
                                          cm.effect_Voice("Voice4.img/BM3/nine/60", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#战舰发射！！", 37, 3003672, true, true);
                                            cm.effect_Voice("Voice4.img/BM3/zig/26", 128);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/cannon", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/cannon", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/cannon", 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#女皇陛下……", 37, 3003751, false, true);
                                                    cm.effect_Voice("Voice4.img/BM3/nine/98", 128);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#冷静点。他们不会有事的。", 37, 3003672, true, true);
                                                      cm.effect_Voice("Voice4.img/BM3/zig/13", 128);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#联系上了！", 37, 3003759, true, true);
                                                        cm.effect_Voice("Voice4.img/BM3/sol/8", 128);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                          cm.sendNormalTalk_Bottom("#face5#…… ", 37, 3003750, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#女皇陛下！！！", 37, 3003751, true, true);
                                                            cm.effect_Voice("Voice4.img/BM3/nine/67", 128);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face5#我们成功地打破了创世之卵。", 37, 3003750, false, true);
                                                                cm.effect_Voice("Voice4.img/BM3/sig/48", 128);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetSpecialAction("oid=2273754", "cheer", -1, 1);
                                                                    cm.npc_SetSpecialAction("oid=2273755", "cheer", -1, 1);
                                                                    cm.npc_SetSpecialAction("oid=2273756", "cheer", -1, 1);
                                                                    cm.npc_SetSpecialAction("oid=2273757", "cheer", -1, 1);
                                                                    cm.npc_SetSpecialAction("oid=2273758", 'cheer', -1, 1);
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/victoryshout", 100);
                                                                    cm.sendNormalTalk_Bottom("#face0#听到了吗？！成功了！！", 37, 3003759, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#万岁！！！", 37, 3003759, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face5#……", 37, 3003750, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face5#但是" + (cm.getPlayer().getGender() == 0 ? '他' : '她') + "…… ", 37, 3003750, true, true);
                                                                            cm.effect_Voice("Voice4.img/BM3/sol/49", 128);
                                                                          } else if (status === V++) {
                                                                            cm.npc_LeaveField("oid=2273752");
                                                                            cm.npc_LeaveField("oid=2273752");
                                                                            cm.npc_LeaveField("oid=2273753");
                                                                            cm.npc_LeaveField("oid=2273753");
                                                                            cm.npc_LeaveField("oid=2273754");
                                                                            cm.npc_LeaveField("oid=2273754");
                                                                            cm.npc_LeaveField("oid=2273755");
                                                                            cm.npc_LeaveField("oid=2273755");
                                                                            cm.npc_LeaveField("oid=2273756");
                                                                            cm.npc_LeaveField("oid=2273756");
                                                                            cm.npc_LeaveField("oid=2273757");
                                                                            cm.npc_LeaveField("oid=2273757");
                                                                            cm.npc_LeaveField("oid=2273758");
                                                                            cm.npc_LeaveField("oid=2273758");
                                                                            cm.dispose();
                                                                            cm.warp(993070086, 0, false);
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