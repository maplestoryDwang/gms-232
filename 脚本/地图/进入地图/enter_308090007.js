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
      cm.fieldEffect_PlayBGM("Bgm55/WhiteNight", 0, 0);
      cm.npc_ChangeController(2570101, "oid=37988879", 1820, 50, 40, 1770, 1870, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=37988879", 'summon', 0, 0);
      cm.npc_ChangeController(2570102, "oid=37988880", 2035, 50, 36, 1985, 2085, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=37988880", "summon", 0, 0);
      cm.npc_ChangeController(2570103, "oid=37988881", 2210, -60, 19, 2160, 2260, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=37988881", "summon", 0, 0);
      cm.npc_ChangeController(2570104, "oid=37988882", 2360, 0, 37, 2310, 2410, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=37988882", "summon", 0, 0);
      cm.npc_ChangeController(2570105, "oid=37988883", 1883, 0, 32, 1833, 1933, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=37988883", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=37988879", "attack", -1, 1);
      cm.npc_SetSpecialAction("oid=37988883", "attack", -1, 1);
      cm.npc_SetSpecialAction("oid=37988880", "attack", -1, 1);
      cm.npc_SetSpecialAction("oid=37988881", "attack", -1, 1);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 2100, -50);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 2103, -11);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8230076/Die", 200);
          cm.inGameDirectionEvent_AskAnswerTime(100);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8230076/Die", 200);
            cm.inGameDirectionEvent_AskAnswerTime(200);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8230076/Die", 200);
              cm.inGameDirectionEvent_AskAnswerTime(100);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3#因为对手是恶魔，我起初还有点害怕，结果他也没什么了不起嘛？", 36, 2570103, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.setNpcSpecialActionReset("oid=37988881");
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#托你的福，我才死里逃生，我该向你行礼才对。", 36, 2570105, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#嗯……要重复已经历过一次的战斗，总归会轻松一点……", 36, 2570101, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#只要行动顺利，这就不是诅咒，而近似于是种祝福。", 36, 2570105, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#或许也可以救活王子。", 36, 2570103, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face5#等等，那我们也会像从前的团长一样，成为#b王室近卫队#k吗？！", 36, 2570103, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#嗯……还是有可能的……", 36, 2570101, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3#王室近卫队……呵呵……\r\n这以后可不用担心没人气了哦？", 36, 2570105, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face4#哈啊……这帮肌肉发达的白痴……", 36, 2570102, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#对手可是#r恶魔#k。\r\n不能想得那么简单。", 36, 2570102, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#可，可是我们也变强了……", 36, 2570103, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#非得等到再有人战死，你才会清醒吗？", 36, 2570102, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#……。", 36, 2570103, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#……。", 36, 2570101, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2#……。", 36, 2570105, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("(对方是恶魔……)", 56, 0, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(6500);
                                                                cm.effect_Text(["#r#fn黑体##fs26#遵循你们的誓约，永远守护王国吧。", ''], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                                                cm.effect_Voice("Voice6.img/Library/elegoth/08-01-elegoth.mp3", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_Monologue("#fc0xFF000000#我摇摇头甩开了脑海中的思绪。", 0);
                                                                  cm.effect_Voice("Voice6.img/Library/kel/07-02-kel.mp3", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_Monologue("#fc0xFF000000#永远守护王国？", 1);
                                                                    cm.effect_Voice("Voice6.img/Library/kel/07-03-kel.mp3", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_Monologue("#fc0xFF000000#呵，那正合我意。", 0);
                                                                        cm.effect_Voice("Voice6.img/Library/kel/07-04-kel.mp3", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_Monologue("#fc0xFF000000#我会守护王国的，永远。", 1);
                                                                            cm.effect_Voice("Voice6.img/Library/kel/07-05-kel.mp3", 100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                            } else if (status === V++) {
                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                              cm.updateInfoQuest(37800, "01=h1;02=h1;03=h1;q1=clear;04=h1;q2=clear;05=h1;06=h0;q4=clear;q6=clear;dir00=end;dir02=end");
                                                                              cm.npc_LeaveField("oid=37988879");
                                                                              cm.npc_LeaveField("oid=37988880");
                                                                              cm.npc_LeaveField("oid=37988881");
                                                                              cm.npc_LeaveField("oid=37988882");
                                                                              cm.npc_LeaveField("oid=37988883");
                                                                              cm.dispose();
                                                                              cm.warp(308000008, 0, false);
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