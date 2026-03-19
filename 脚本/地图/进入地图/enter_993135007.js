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
      cm.npc_ChangeController(3003562, 'oid=368246', 676, 281, 1, 626, 726, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(3003503, "oid=2804089", 130, 250, 1, 80, 180, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2804089", "summon", 0, 0);
      cm.npc_ChangeController(3004322, "oid=2804090", -530, 250, 2, -580, -480, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2804090", "summon", 0, 0);
      cm.npc_ChangeController(3004323, "oid=2804091", -580, 250, 2, -630, -530, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2804091", "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -65, 250);
      cm.Hidden_background("cernium_tana", 1, 1, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 56, -893);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(300);
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
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n\r\n\r\n正如世间法则那样，黑魔法师#r操纵了命运#k。", 1);
                cm.effect_Voice("Voice5.img/CH1/Heinze/18", 128);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n\r\n\r\n尽管因果环节错综复杂的交织创造出了无数的未来，\r\n但至少到目前阶段为止，#r黑魔法师所设想的未来#k还是变成了现实。", 1);
                  cm.effect_Voice("Voice5.img/CH1/Heinze/19", 128);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n\r\n\r\n还有，对抗者理应在此地#r除掉塔纳#k。", 1);
                    cm.effect_Voice("Voice5.img/CH1/Heinze/20", 128);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 30, 261);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                          cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_RemoveOverlapScreenDetail(1500);
                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face10#帮帮我……", 37, 3003508, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face11#江……。", 37, 3003508, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("果然……不可以这样……。", 57, 0, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face4#你……你说什么？", 37, 3003503, false, true);
                                        cm.effect_Voice("Voice5.img/CH1/Will/17", 128);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face3#这之后有什么在等待着，你知道吗……？", 37, 3003503, true, true);
                                          cm.effect_Voice("Voice5.img/CH1/Will/18", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("没错。拥有两个世界超越者之力的黑魔法师。", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_LeaveField("oid=2804089");
                                                  cm.npc_LeaveField("oid=2804089");
                                                  cm.onTeleport(0, 3, cm.getPlayer().getId(), -430, 200);
                                                  cm.Hidden_background("cernium_tana", 1, 0, 0, 0);
                                                  cm.npc_ChangeController(3004326, "oid=2806318", 0, 250, 2, -50, 50, 0, true, 0, false);
                                                  cm.npc_SetSpecialAction("oid=2806318", "summon", 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#对抗者拒绝了命运的安排。", 37, 3003923, false, true);
                                                      cm.effect_Voice("Voice5.img/CH1/Heinze/21", 128);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1#他拥有的封印石之力，混沌之力，抗拒控制之力，神之力……\r\n这种种力量使他的选择成为了可能。", 37, 3003923, true, true);
                                                        cm.effect_Voice("Voice5.img/CH1/Heinze/22", 128);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#然而，选择终究只属于对抗者个人。", 37, 3003923, true, true);
                                                          cm.effect_Voice("Voice5.img/CH1/Heinze/23", 128);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face3#哇……#fc0xFF8f8f8f#你当初#k到底在想什么啊？", 37, 3004322, false, true);
                                                              cm.effect_Voice("Voice5.img/CH1/Elwyn/7", 128);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.askMenu_Bottom("那时…… #b\r\n#L0#管不了那么多，我可能疯了吧。#l\r\n#L1#终归难免一战。#l\r\n#L2#塔纳太可怜了……#l", 57, 0);
                                                              } else {
                                                                if (status === V++) {
                                                                  if (e == 0) {
                                                                    cm.sendNormalTalk_Bottom("管不了那么多，我可能疯了吧。", 57, 0, false, true);
                                                                  } else if (e == 1) {
                                                                    cm.sendNormalTalk_Bottom("终归难免一战。", 57, 0, false, true);
                                                                  } else {
                                                                    cm.sendNormalTalk_Bottom("塔纳太可怜了……", 57, 0, false, true);
                                                                  }
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face1#……我失败了，但同时也成功了。", 37, 3003923, false, true);
                                                                      cm.effect_Voice("Voice5.img/CH1/Heinze/24", 128);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#他证明了神的力量，与智慧生物体的意志#fc0xFF8f8f8f#可以对抗#k。", 37, 3003923, true, true);
                                                                        cm.effect_Voice("Voice5.img/CH1/Heinze/25", 128);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#等他铲除冒险岛世界里最后一个超越者，\r\n世界就会恢复本来的面貌。", 37, 3003923, true, true);
                                                                          cm.effect_Voice("Voice5.img/CH1/Heinze/26", 128);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2806318"], [0, 0, -50, 1, 0, 1, 0, 0]);
                                                                            cm.sendNormalTalk_Bottom("#face1#……！！", 37, 3003923, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#本来的……面貌……？", 37, 3003923, false, true);
                                                                                cm.effect_Voice("Voice5.img/CH1/Heinze/27", 128);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.onSetNpcScript("oid=2806318", 1, ['teleport', 'special'], [1, -1]);
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/borderless/heinzTeleport", 100);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.userSetFieldFloating(993135007, 3, 3, 3);
                                                                                      cm.npc_LeaveField("oid=2806318");
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.userSetFieldFloating(993135007, 0, 0, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2000, 500, -400, 261);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face2#世界恢复本来的面貌吗。唔……", 37, 3004323, false, true);
                                                                                              cm.effect_Voice("Voice5.img/CH1/Lily/17", 128);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face2#我们来这里的目的，不是为了让老师清醒过来，把他带回去吗？", 37, 3004322, true, true);
                                                                                                cm.effect_Voice("Voice5.img/CH1/Elwyn/8", 128);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face2#啊？噢，对。是这样没错……\r\n嗯……可越往下摸索，就发现越多惊人的信息啊。嘿嘿……", 37, 3004323, true, true);
                                                                                                  cm.effect_Voice("Voice5.img/CH1/Lily/18", 128);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face2#……", 37, 3004322, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else if (status === V++) {
                                                                                                      cm.eventSKill(0);
                                                                                                      cm.warp(993133500, 0, false);
                                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                                      cm.setStandAloneMode(false);
                                                                                                      cm.forceCompleteQuest(39719);
                                                                                                      cm.gainExp(20 * Math.pow(cm.getLevel(), 3));
                                                                                                      cm.npc_LeaveField("oid=2804090");
                                                                                                      cm.npc_LeaveField("oid=2804090");
                                                                                                      cm.npc_LeaveField("oid=2804091");
                                                                                                      cm.npc_LeaveField("oid=2804091");
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