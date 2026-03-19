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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(3004322, "oid=2809695", -298, 255, 2, -348, -248, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2809695", "summon", 0, 0);
      cm.npc_ChangeController(3004323, "oid=2809696", -354, 255, 2, -404, -304, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2809696", 'summon', 0, 0);
      cm.npc_ChangeController(3004331, "oid=2809697", -113, 250, 2, -163, -63, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2809697", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(4000);
      cm.curNodeEventEnd(true);
      cm.effect_Text(["#fn黑体##fs18#几分钟后……"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 6000, -54, 256);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=2809697", 1, 80, 50);
          cm.inGameDirectionEvent_AskAnswerTime(200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
            cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1600);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face5#你站住！！小鬼！！", 37, 3004322, false, true);
              cm.effect_Voice("Voice5.img/CH1/Elwyn/10", 128);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#小鬼？", 37, 3003501, false, true);
                  cm.effect_Voice("Voice5.img/CH1/Melange/1", 128);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=2809697", -1);
                      cm.sendNormalTalk_Bottom("#face0#啊……", 37, 3003501, false, true);
                      cm.effect_Voice("Voice5.img/CH1/Melange/2", 128);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1300);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                          cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                          cm.sendNormalTalk_Bottom("#face0#这是#fc0xFF8f8f8f#记忆#k沼泽啊。嗯，有点麻烦了。", 37, 3003501, false, true);
                          cm.effect_Voice("Voice5.img/CH1/Melange/3", 128);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#（他察觉了吗？！）", 37, 3004323, true, true);
                            cm.effect_Voice("Voice5.img/CH1/Lily/19", 128);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face5#不想挨揍的话，就把书交出来！", 37, 3004322, true, true);
                              cm.effect_Voice("Voice5.img/CH1/Elwyn/11", 128);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom('#face0#……', 37, 3003501, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#埃尔文，莉莉和对抗者。你们三人随老师走吧。", 37, 3003501, true, true);
                                    cm.effect_Voice("Voice5.img/CH1/Melange/4", 128);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/borderless/malangStart", 100);
                                      cm.npc_SetSpecialAction("oid=2809697", "magic", 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/borderless/createPortal", 100);
                                        cm.npc_ChangeController(3004335, "oid=2811282", 209, 275, 1, 159, 259, 0, false, 0, false);
                                        cm.npc_SetSpecialAction("oid=2811282", 'summon', 0, 0);
                                        cm.npc_SetSpecialAction("oid=2811282", "special", 1, 1);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction23.img/effect/4", "oid=2809695"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction23.img/effect/4", "oid=2809696"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction23.img/effect/4"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2809695"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2809696"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.inGameDirectionEvent_同时移动镜头和人(2, 400);
                                          cm.npc_SetForceMove("oid=2809696", 1, 500, 120);
                                          cm.sendNormalTalk_Bottom("啊，身体……不由自主地……", 56, 0, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                            cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_SetHideEffect(1);
                                              cm.sendNormalTalk_Bottom("#face4#你……到底什么来历？", 37, 3004323, false, true);
                                              cm.effect_Voice("Voice5.img/CH1/Lily/20", 128);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport", "oid=2809696"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                              } else {
                                                if (status === V++) {
                                                  cm.Npc_Fadeout("oid=2809696", 0, 100);
                                                  cm.npc_SetForceMove("oid=2809695", 1, 170, 60);
                                                  cm.sendNormalTalk_Bottom("#face3#你居然会使用这么诡异的魔法……？\r\n切，我们走着瞧，小鬼！", 37, 3004322, false, true);
                                                  cm.effect_Voice("Voice5.img/CH1/Elwyn/12", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2809695"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                    cm.sendNormalTalk_Bottom("#face2#埃尔文停一下。", 37, 3003501, true, true);
                                                    cm.effect_Voice("Voice5.img/CH1/Melange/5", 128);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/borderless/melangAttack", 100);
                                                        cm.npc_SetSpecialAction("oid=2809697", 'attack', 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(800);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/slap1", 100);
                                                          cm.npc_SetSpecialAction("oid=2809695", "hit", 3000, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face4#啊呀呀！！", 37, 3004322, false, true);
                                                            cm.effect_Voice("Voice5.img/CH1/Elwyn/13", 128);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#现在走吧。", 37, 3003501, true, true);
                                                              cm.effect_Voice("Voice5.img/CH1/Melange/6", 128);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face4#啊呀呀！！！嗬咳……", 37, 3004322, true, true);
                                                                cm.effect_Voice("Voice5.img/CH1/Elwyn/14", 128);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetForceMove("oid=2809695", 1, 150, 70);
                                                                  cm.sendNormalTalk_Bottom("#face4#你给我等着瞧！！！！", 37, 3004322, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2809695"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                    cm.sendNormalTalk_Bottom("#face2#埃尔文再停一下。", 37, 3003501, true, true);
                                                                    cm.effect_Voice("Voice5.img/CH1/Melange/7", 128);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face3#咦！", 37, 3004322, true, true);
                                                                      cm.effect_Voice("Voice5.img/CH1/Elwyn/16", 128);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else if (status === V++) {
                                                                        cm.warp(993134000, 0, false);
                                                                        cm.eventSKill(0);
                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                        cm.setStandAloneMode(false);
                                                                        cm.forceStartQuest(39720, '');
                                                                        cm.npc_LeaveField("oid=2809695");
                                                                        cm.npc_LeaveField("oid=2809695");
                                                                        cm.npc_LeaveField("oid=2809696");
                                                                        cm.npc_LeaveField("oid=2809696");
                                                                        cm.npc_LeaveField("oid=2809697");
                                                                        cm.npc_LeaveField("oid=2809697");
                                                                        cm.npc_LeaveField("oid=2811282");
                                                                        cm.npc_LeaveField("oid=2811282");
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