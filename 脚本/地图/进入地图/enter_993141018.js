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
      cm.npc_ChangeController(3004432, "oid=781583", -340, 184, 27, -390, -290, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=781583", "summon", 0, 0);
      cm.npc_ChangeController(3004430, "oid=781584", -60, 184, 28, -110, -10, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=781584", 'summon', 0, 0);
      cm.npc_ChangeController(3004432, "oid=781585", 355, 134, 7, 305, 405, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=781585', "summon", 0, 0);
      cm.Npc_Fadeout("oid=781585", 0, 10);
      cm.npc_SetSpecialAction('oid=781585', "special", -1, 1);
      cm.fieldEffect_PlayBGM("Bgm53/GraveyardOfSword", 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_SetSpecialAction('oid=781584', 'special4', -1, 1);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 30, 219);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -122, 164);
      cm.curNodeEventEnd(true);
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
            cm.sendNormalTalk_Bottom("#face3#哼……是弑神之人啊。你这一来，战局顿时逆转了……", 37, 3004432, false, true);
            cm.effect_Voice("Voice5.img/CH2/Loland/27", 128);
          } else {
            if (status === V++) {
              cm.setNpcSpecialActionReset("oid=781584");
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#你放弃吧！我相信这不是你的本心……你一定是被什么邪恶力量蒙蔽了心智。", 37, 3004430, false, true);
                cm.effect_Voice("Voice5.img/CH2/Seren/71", 128);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face4#放弃……你我都不喜欢这两个字吧？", 37, 3004432, true, true);
                  cm.effect_Voice("Voice5.img/CH2/Loland/28", 128);
                } else {
                  if (status === V++) {
                    cm.Npc_Fadeout('oid=781583', 0, 500);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction('oid=781583', "special4", -1, 1);
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/hug", 100);
                      cm.Npc_Fadeout("oid=781583", 255, 500);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(700);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", 'oid=781584'], [0, 0, -20, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=781584", "special7", 1, 1);
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/sworld", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#请不要轻举妄动，否则别怪我的剑不长眼！", 37, 3004430, false, true);
                              cm.effect_Voice("Voice5.img/CH2/Seren/72", 128);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#……", 37, 3004432, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#罗兰德！！", 37, 3004430, true, true);
                                  cm.effect_Voice("Voice5.img/CH2/Seren/73", 128);
                                } else {
                                  if (status === V++) {
                                    cm.onSetNpcScript("oid=781583", 1, ["special5", "special6"], [1, -1]);
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/fly", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(1150);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetSpecialAction("oid=781584", "special9", 1, 1);
                                      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8645111/Attack1", 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/sword4", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(1100);
                                      } else {
                                        if (status === V++) {
                                          cm.OverlapScreenDetail19(0, 500, 500, 1);
                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 247, 164);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_RemoveOverlapScreenDetail(300);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_setForceFlip("oid=781584", 1);
                                                cm.inGameDirectionEvent_ForcedFlip(1);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.Npc_Fadeout("oid=781583", 0, 100);
                                                  cm.Npc_Fadeout("oid=781585", 255, 100);
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/hug", 100);
                                                  cm.sendNormalTalk_Bottom("#face5#嗬。", 37, 3004432, false, true);
                                                  cm.effect_Voice("Voice5.img/CH2/Loland/17", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetSpecialAction('oid=781585', "special", -1, 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face4#你好好保重吧，塞伦。", 37, 3004432, false, true);
                                                      cm.effect_Voice("Voice5.img/CH2/Loland/30", 128);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetSpecialAction("oid=781585", "special3", -1, 1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=781584"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetForceMove("oid=781584", 1, 300, 120);
                                                              cm.sendNormalTalk_Bottom("#face2#不要啊！！", 37, 3004430, false, true);
                                                              cm.effect_Voice("Voice5.img/CH2/Seren/74", 128);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(700);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction23.img/illust2/2", 0, 500, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/bomb_fail", 100);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion5", 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                      } else if (status === V++) {
                                                                        cm.eventSKill(0);
                                                                        cm.warp(993141019, 0, false);
                                                                        cm.npc_LeaveField('oid=781583');
                                                                        cm.npc_LeaveField("oid=781583");
                                                                        cm.npc_LeaveField("oid=781584");
                                                                        cm.npc_LeaveField("oid=781584");
                                                                        cm.npc_LeaveField("oid=781585");
                                                                        cm.npc_LeaveField("oid=781585");
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