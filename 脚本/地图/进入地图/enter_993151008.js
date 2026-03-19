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
      cm.npc_ChangeController(3004424, "oid=377752", 475, 180, 0, 425, 525, 1, false, 0, false);
      cm.npc_ChangeController(3004424, "oid=377753", 540, 200, 0, 490, 590, 1, false, 0, false);
      cm.npc_ChangeController(3004423, "oid=377754", -495, 195, 0, -545, -445, 0, false, 0, false);
      cm.npc_ChangeController(3004423, "oid=377755", -430, 180, 0, -480, -380, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3004430, "oid=1069266", 32, 207, 1, -18, 82, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1069266", 'summon', 0, 0);
      cm.npc_ChangeController(3004441, "oid=1069267", -32, 207, 1, -82, 18, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1069267", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 2, 210);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/slap2", 100);
          cm.npc_SetSpecialAction("oid=1069266", "special11", -1, 1);
          cm.npcMove(3004430, 0, 5, 0);
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
                cm.sendNormalTalk_Bottom("#face0#和不信神者成天混在一起，都不知道天高地厚了。", 37, 3004441, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('#face9#……', 37, 3004430, true, true);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayBGM("Bgm53/GraveyardOfSword", 0, 0);
                    cm.sendNormalTalk_Bottom("#face0#距离你立誓的那一天只过去了几年，然而……", 37, 3004441, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#看来你忘记自己是如何被任命为守护者的了。", 37, 3004441, true, true);
                    } else {
                      if (status === V++) {
                        cm.npc_SetSpecialAction("oid=1069266", 'special12', -1, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#誓言在属下心中……一刻不曾忘怀。", 37, 3004430, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#但是，我相信，背叛一起出生入死的同伴，这并非太阳的意志。", 37, 3004430, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#竟敢用你那张嘴亵渎神的意志？！", 37, 3004441, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#……对不起。", 37, 3004430, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#好。那我就再给你一次机会。", 37, 3004441, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#你趁着深夜，潜入他们的营地吧。", 37, 3004441, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#去把#r天选之人#k救出来。", 37, 3004441, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#就是今晚。决不许失败。", 37, 3004441, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#是。", 37, 3004430, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=1069267", -1, 70, 70);
                                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/armorSound", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#……", 37, 3004441, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#已经打探到翼人军手中的人质是谁了。", 37, 3004441, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#是骑士团长#r奇勒摩#k。\r\n和你也是旧识。", 37, 3004441, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1069266"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face4#他……", 37, 3004430, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction23.img/illust3/2", 0, 1500, 0, 0, 20, 4, 0, -1, 0, 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face4#怎么会……他怎么会？", 37, 3004430, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else if (status === V++) {
                                                                          cm.eventSKill(0);
                                                                          cm.warp(410000770, 0, false);
                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                          cm.setStandAloneMode(false);
                                                                          cm.forceStartQuest(39910, '');
                                                                          cm.updateInfoQuest(39900, "00=h0;11=h0;04=h0;05=h0;06=h0;07=h1;25=h1;55=h0");
                                                                          cm.setStringForQuestInfo(39800, '06', 'h0');
                                                                          cm.setStringForQuestInfo(39800, '08', 'h0');
                                                                          cm.setStringForQuestInfo(39800, '18', 'h0');
                                                                          cm.npc_LeaveField("oid=1069266");
                                                                          cm.npc_LeaveField("oid=1069266");
                                                                          cm.npc_LeaveField("oid=1069267");
                                                                          cm.npc_LeaveField("oid=1069267");
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