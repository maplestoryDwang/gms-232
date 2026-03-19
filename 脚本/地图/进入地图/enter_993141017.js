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
      cm.npc_ChangeController(3004432, "oid=778423", -170, 184, 58, -220, -120, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=778423", "summon", 0, 0);
      cm.npc_ChangeController(3004430, 'oid=778424', -120, 184, 58, -170, -70, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=778424", "summon", 0, 0);
      cm.npc_ChangeController(3004461, "oid=778425", -340, 115, 56, -390, -290, 0, false, 0, false);
      cm.npc_SetSpecialAction('oid=778425', "summon", 0, 0);
      cm.npc_ChangeController(3004461, "oid=778426", -340, 220, 57, -390, -290, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=778426", "summon", 0, 0);
      cm.Npc_Fadeout('oid=778425', 0, 10);
      cm.Npc_Fadeout("oid=778426", 0, 10);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 332, 154);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.Npc_Fadeout("oid=778424", 0, 100);
        cm.npc_SetSpecialAction("oid=778423", "special3", -1, 1);
        cm.fieldEffect_PlayBGM("SoundEff.img/ArcaneRiver/thrill", 0, 0);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 200, 187);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1500, 3000, -118, 154);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#现在只需把火点上……", 37, 3004432, false, true);
                  cm.effect_Voice("Voice5.img/CH2/Loland/16", 128);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#罗兰德！！", 37, 3004430, true, true);
                    cm.effect_Voice("Voice5.img/CH2/Seren/65", 128);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", 'oid=778423'], [0, 0, -20, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(700);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(250);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/sword1", 100);
                          cm.Npc_Fadeout("oid=778423", 0, 100);
                          cm.Npc_Fadeout("oid=778424", 255, 100);
                          cm.npc_SetSpecialAction("oid=778424", "special5", -1, 1);
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                          } else {
                            if (status === V++) {
                              cm.setAmbience("SoundEff.img/HofM/act1/sword3", 100, 60);
                              cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                              cm.sendNormalTalk_Bottom('#face5#嗬。', 37, 3004432, false, true);
                              cm.effect_Voice("Voice5.img/CH2/Loland/17", 128);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#罗兰德。求求你快清醒过来吧！", 37, 3004430, true, true);
                                cm.effect_Voice("Voice5.img/CH2/Seren/66", 128);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#你还不明白吗？现在你是唯一能使用圣剑的人！", 37, 3004430, true, true);
                                  cm.effect_Voice("Voice5.img/CH2/Seren/67", 128);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face5#塞伦。经历了那样的事情，你还迷信太阳神吗？", 37, 3004432, true, true);
                                    cm.effect_Voice("Voice5.img/CH2/Loland/18", 128);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#嗬……", 37, 3004430, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face5#你没忘记吧？\r\n电闪雷鸣的那一天，近天峰上烈火燃起，百姓们在痛苦中死去……", 37, 3004432, true, true);
                                        cm.effect_Voice("Voice5.img/CH2/Loland/19", 128);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face5#我们亲身经历的那些事，亲眼目睹的那些惨状。", 37, 3004432, true, true);
                                          cm.effect_Voice("Voice5.img/CH2/Loland/20", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayBGM("Bgm53/GraveyardOfSword", 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face5#我们的战友，直到最后一个人倒下，都没有出现什么光芒。", 37, 3004432, false, true);
                                                cm.effect_Voice("Voice5.img/CH2/Loland/21", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#够了！！", 37, 3004430, true, true);
                                                  cm.effect_Voice("Voice5.img/CH2/Seren/68", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetSpecialAction('oid=778423', "special8", -1, 1);
                                                      cm.npc_ChangeController(3004432, "oid=778939", -190, 184, 58, -240, -140, 0, true, 0, false);
                                                      cm.npc_SetSpecialAction('oid=778939', 'summon', 0, 0);
                                                      cm.npc_LeaveField("oid=778424");
                                                      cm.npc_LeaveField("oid=778424");
                                                      cm.npc_ChangeController(3004430, 'oid=778940', 4, 184, 54, -46, 54, 1, true, 0, false);
                                                      cm.npc_SetSpecialAction('oid=778940', 'summon', 0, 0);
                                                      cm.npc_SetSpecialAction('oid=778940', "special8", -1, 1);
                                                      cm.npc_SetSpecialAction("oid=778939", "special2", -1, 1);
                                                      cm.playSoundEffDirectly("SoundEff.img/HofM/act1/sword3");
                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/sword2", 100);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/sword2", 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_PushScaleInfo(6000, 0, 1500, 6000, -80, 154);
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
                                                                cm.sendNormalTalk_Bottom("#face2#求你了，罗兰德！请你收手吧！", 37, 3004430, false, true);
                                                                cm.effect_Voice("Voice5.img/CH2/Seren/69", 128);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face3#你还是没变呐，塞伦。\r\n当初听说你当上守护者的消息时，我一直很担心来着。", 37, 3004432, true, true);
                                                                  cm.effect_Voice("Voice5.img/CH2/Loland/22", 128);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face3#我担心你会变成执迷地位的庸俗之人。", 37, 3004432, true, true);
                                                                    cm.effect_Voice("Voice5.img/CH2/Loland/23", 128);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.setNpcSpecialActionReset("oid=778939");
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=778940"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face4#如今看来是我多虑了。你依然是从前那个单纯正直的塞伦。", 37, 3004432, false, true);
                                                                          cm.effect_Voice("Voice5.img/CH2/Loland/24", 128);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face4#和我不一样。", 37, 3004432, false, true);
                                                                              cm.effect_Voice("Voice5.img/CH2/Loland/25", 128);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face2#！！", 37, 3004430, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.Npc_Fadeout("oid=778425", 255, 300);
                                                                                  cm.Npc_Fadeout('oid=778426', 255, 300);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_SetSpecialAction("oid=778425", "attack1", 1, 1);
                                                                                    cm.npc_SetSpecialAction("oid=778426", 'attack1', 1, 1);
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8645112/Attack1", 100);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/sword4", 100);
                                                                                        cm.npc_SetSpecialAction('oid=778939', 'special3', -1, 1);
                                                                                        cm.npc_SetSpecialAction("oid=778940", "special4", -1, 1);
                                                                                        cm.sendNormalTalk_Bottom("#face2#嗬……", 37, 3004430, false, true);
                                                                                        cm.effect_Voice("Voice5.img/CH2/Seren/70", 128);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                                                                                  cm.sendNormalTalk_Bottom("#face03#承认吧。太阳就只是太阳而已。不是其他任何东西。", 37, 3004432, false, true);
                                                                                                  cm.effect_Voice("Voice5.img/CH2/Loland/26", 128);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.OverlapScreenDetail19(0, 250, 250, 1);
                                                                                                      cm.npc_ChangeController(3004453, "oid=779573", -97, 165, -1, -147, -47, 0, false, 0, false);
                                                                                                      cm.npcMove(3004453, 0, 25, 0);
                                                                                                      cm.npc_SetSpecialAction("oid=779573", "summon", 0, 0);
                                                                                                      cm.setAmbience("SoundEff.img/cernium2/bomb_loop", 100, 60);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npcMove(3004453, 300, 0, 12000);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(6500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(100, 0, 1500, 100, 100, 154);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Falldown", 100);
                                                                                                            cm.userSetFieldFloating(993141017, 3, 3, 7);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.userSetFieldFloating(993141017, 0, 0, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=778423"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=778940"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction23.img/illust2/4/0", 0, 800, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom('（熄灭它。）', 57, 0, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_QTE(2);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                              cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction23.img/illust2/4/1", 0, 800, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.playSoundEffDirectly("SoundEff.img/cernium2/bomb_loop");
                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/bomb_fail", 100);
                                                                                                                                cm.npc_LeaveField("oid=779573");
                                                                                                                                cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
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
                                                                                                                                        cm.sendNormalTalk_Bottom("#face5#……", 37, 3004432, false, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face5#动手！", 37, 3004432, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.eventSKill(0);
                                                                                                                                                cm.dispose();
                                                                                                                                                var O = cm.getEventManager("荣耀_塞尔提乌_守卫东城门");
                                                                                                                                                O.startInstance(cm.getPlayer());
                                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                cm.setStandAloneMode(false);
                                                                                                                                                cm.npc_LeaveField("oid=778423");
                                                                                                                                                cm.npc_LeaveField("oid=778423");
                                                                                                                                                cm.npc_LeaveField("oid=778425");
                                                                                                                                                cm.npc_LeaveField('oid=778425');
                                                                                                                                                cm.npc_LeaveField("oid=778426");
                                                                                                                                                cm.npc_LeaveField('oid=778426');
                                                                                                                                                cm.npc_LeaveField("oid=778939");
                                                                                                                                                cm.npc_LeaveField("oid=778939");
                                                                                                                                                cm.npc_LeaveField('oid=778940');
                                                                                                                                                cm.npc_LeaveField("oid=778940");
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}