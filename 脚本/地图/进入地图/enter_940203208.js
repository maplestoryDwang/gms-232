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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(3004017, "oid=7135441", -520, 0, 70, -570, -470, 0, true, false);
      cm.npc_SetSpecialAction("oid=7135441", "summon", 0, 0);
      cm.npc_ChangeController(3004020, "oid=7135442", -300, 0, 68, -350, -250, 0, true, false);
      cm.npc_SetSpecialAction("oid=7135442", 'summon', 0, 0);
      cm.npc_ChangeController(3004021, "oid=7135443", -160, 0, 68, -210, -110, 0, true, false);
      cm.npc_SetSpecialAction("oid=7135443", "summon", 0, 0);
      cm.npc_ChangeController(3004021, "oid=7135444", -80, 0, 69, -130, -30, 0, true, false);
      cm.npc_SetSpecialAction("oid=7135444", "summon", 0, 0);
      cm.npc_ChangeController(3004022, "oid=7135445", 320, 0, 74, 270, 370, 0, true, false);
      cm.npc_SetSpecialAction("oid=7135445", 'summon', 0, 0);
      cm.npc_ChangeController(3004022, "oid=7135446", 500, 0, 75, 450, 550, 1, true, false);
      cm.npc_SetSpecialAction("oid=7135446", "summon", 0, 0);
      cm.npc_ChangeController(3004017, "oid=7135447", 680, 0, 75, 630, 730, 0, true, false);
      cm.npc_SetSpecialAction("oid=7135447", 'summon', 0, 0);
      cm.npc_ChangeController(3004017, "oid=7135448", 760, 0, 76, 710, 810, 0, true, false);
      cm.npc_SetSpecialAction("oid=7135448", 'summon', 0, 0);
      cm.npc_ChangeController(3004021, "oid=7135449", 1300, 0, 77, 1250, 1350, 1, true, false);
      cm.npc_SetSpecialAction("oid=7135449", "summon", 0, 0);
      cm.npc_ChangeController(3004021, "oid=7135450", 1400, 0, 78, 1350, 1450, 1, true, false);
      cm.npc_SetSpecialAction("oid=7135450", "summon", 0, 0);
      cm.npc_ChangeController(3004017, "oid=7135451", -170, -100, 1, -220, -120, 0, true, false);
      cm.npc_SetSpecialAction("oid=7135451", "summon", 0, 0);
      cm.npc_ChangeController(3004017, "oid=7135452", -260, -100, 1, -310, -210, 0, true, false);
      cm.npc_SetSpecialAction("oid=7135452", "summon", 0, 0);
      cm.npc_ChangeController(3004021, "oid=7135453", -340, -100, 68, -390, -290, 0, true, false);
      cm.npc_SetSpecialAction("oid=7135453", "summon", 0, 0);
      cm.npc_ChangeController(3004020, "oid=7135454", 170, -100, 3, 120, 220, 1, true, false);
      cm.npc_SetSpecialAction("oid=7135454", "summon", 0, 0);
      cm.npc_ChangeController(3004022, "oid=7135455", 250, -100, 4, 200, 300, 1, true, false);
      cm.npc_SetSpecialAction("oid=7135455", 'summon', 0, 0);
      cm.npc_ChangeController(3004022, "oid=7135456", 350, -100, 5, 300, 400, 1, true, false);
      cm.npc_SetSpecialAction("oid=7135456", "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -2, -170);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, -38, -118);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3004006, "oid=7135458", 995, -400, 55, 945, 1045, 1, false, false);
        cm.npc_SetSpecialAction("oid=7135458", "summon", 0, 0);
        cm.npc_ChangeController(3004015, "oid=7135459", 1080, -150, 64, 1030, 1130, 1, false, false);
        cm.npc_SetSpecialAction("oid=7135459", 'summon', 0, 0);
        cm.npc_ChangeController(3004015, "oid=7135460", 1140, -150, 62, 1090, 1190, 1, false, false);
        cm.npc_SetSpecialAction("oid=7135460", "summon", 0, 0);
        cm.npc_ChangeController(3004015, "oid=7135461", 1200, -150, 61, 1150, 1250, 1, false, false);
        cm.npc_SetSpecialAction("oid=7135461", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=7135451", "attack1", -1, 1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#你能坚持到什么时候？！昂？！", 37, 3004017, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#好了，准备好了！\r\n这爆竹没有杀伤力，别怕！", 37, 3004000, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('好了，稍微快点……！', 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.setNpcSpecialActionReset("oid=7135451");
                  cm.inGameDirectionEvent_MoveAction(4);
                  cm.userSetFieldFloating(940203208, 10, 10, 3);
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1"], [0, -310, -90, 1, 0, 1, 1, 0]);
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(150);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1"], [0, -260, -150, 1, 0, 1, 1, 0]);
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(150);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=7135454", 1, 1300, 200);
                      cm.npc_SetForceMove("oid=7135443", -1, 400, 200);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung2"], [0, -157, -130, 1, 0, 1, 1, 0]);
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(150);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1"], [0, -20, -90, 1, 0, 1, 1, 0]);
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(150);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=7135451", -1, 700, 200);
                          cm.npc_SetForceMove("oid=7135453", -1, 800, 200);
                          cm.npc_SetSpecialAction("oid=7135452", "die1", 0, 1);
                          cm.npc_SetSpecialAction("oid=7135455", 'die1', 0, 1);
                          cm.npc_SetSpecialAction("oid=7135456", "die1", 0, 1);
                          cm.npc_SetSpecialAction("oid=7135444", 'die1', 0, 1);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1"], [0, 142, -110, 1, 0, 1, 1, 0]);
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(150);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1"], [0, 250, -170, 1, 0, 1, 1, 0]);
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(150);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung2"], [0, 320, -120, 1, 0, 1, 1, 0]);
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.userSetFieldFloating(940203208, 0, 0, 0);
                                cm.sendNormalTalk_Bottom("#face0#呃啊啊！", 37, 3004020, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("你说没杀伤力？", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_MoveAction(0);
                                    cm.npc_LeaveField("oid=7135452");
                                    cm.npc_LeaveField("oid=7135452");
                                    cm.npc_LeaveField("oid=7135455");
                                    cm.npc_LeaveField("oid=7135455");
                                    cm.npc_LeaveField("oid=7135456");
                                    cm.npc_LeaveField("oid=7135456");
                                    cm.npc_LeaveField("oid=7135443");
                                    cm.npc_LeaveField("oid=7135443");
                                    cm.npc_LeaveField("oid=7135444");
                                    cm.npc_LeaveField("oid=7135444");
                                    cm.sendNormalTalk_Bottom("#face0#不可能呀……", 37, 3004000, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#佩隆？！", 37, 3004000, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(150);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_LeaveField("oid=7135451");
                                          cm.npc_LeaveField("oid=7135451");
                                          cm.npc_LeaveField("oid=7135453");
                                          cm.npc_LeaveField("oid=7135453");
                                          cm.npc_LeaveField("oid=7135454");
                                          cm.npc_LeaveField("oid=7135454");
                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetSpecialAction("oid=7135447", "attack1", -1, 1);
                                            cm.inGameDirectionEvent_AskAnswerTime(50);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=7135448", "attack1", -1, 1);
                                              cm.inGameDirectionEvent_PushScaleInfo(300, 1500, 300, 984, -80);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayBGM("Bgm47/MrHazard", 0, 0);
                                                  cm.sendNormalTalk_Bottom("那个拉宝拉托利安呢？！！", 57, 0, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetSpecialAction("oid=7135459", 'special', 0, 1);
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/savageT/fire", 250);
                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetSpecialAction("oid=7135460", "special", 0, 1);
                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/savageT/fire", 250);
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetSpecialAction("oid=7135461", "special", 0, 1);
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/savageT/fire", 250);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#佩隆，这家伙！！他疯了吗？", 37, 3004017, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#我是不会放过你的。", 37, 3004017, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#公司的物品都给我清走。那点东西被抢走了，没什么好可惜的。", 37, 3004006, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#但是，如果在这里再被看不起，生意就得关门了！", 37, 3004006, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1"], [0, 575, 0, 1, 0, 1, 1, 0]);
                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(150);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung2"], [0, 625, -10, 1, 0, 1, 1, 0]);
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(150);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetSpecialAction("oid=7135447", "die1", 0, 1);
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1"], [0, 700, -80, 1, 0, 1, 1, 0]);
                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                      cm.npc_SetSpecialAction("oid=7135448", "die1", 0, 1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(150);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung2"], [0, 1250, -50, 1, 0, 1, 1, 0]);
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                        cm.npc_SetSpecialAction("oid=7135449", "die1", 0, 1);
                                                                        cm.npc_SetSpecialAction("oid=7135450", "die1", 0, 1);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(150);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung2"], [0, 1350, 0, 1, 0, 1, 1, 0]);
                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                          cm.npc_LeaveField("oid=7135447");
                                                                          cm.npc_LeaveField("oid=7135447");
                                                                          cm.npc_LeaveField("oid=7135448");
                                                                          cm.npc_LeaveField("oid=7135448");
                                                                          cm.npc_LeaveField("oid=7135449");
                                                                          cm.npc_LeaveField("oid=7135449");
                                                                          cm.npc_LeaveField("oid=7135450");
                                                                          cm.npc_LeaveField("oid=7135450");
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#那，那个疯子！！", 37, 3004016, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_PlayBGM("Bgm47/MrHazard", 0, 0);
                                                                              cm.sendNormalTalk_Bottom("#face0#过来，给你们瞧瞧特制新型武器长什么样的！", 37, 3004006, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.setAmbience("SoundEff.img/savageT/gun", 200, 60);
                                                                                  cm.npc_SetSpecialAction("oid=7135458", 'special', -1, 1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#呜哇哇！！", 37, 3004020, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#别跑！让你们把那家伙给我抓住！", 37, 3004016, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_SetForceMove("oid=7135441", -1, 2000, 200);
                                                                                        cm.npc_SetForceMove("oid=7135442", -1, 2000, 200);
                                                                                        cm.npc_SetForceMove("oid=7135445", -1, 2000, 200);
                                                                                        cm.npc_SetForceMove("oid=7135446", -1, 2000, 200);
                                                                                        cm.sendNormalTalk_Bottom("哎，现在还不是放松的时候，装置……！", 56, 0, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_ChangeController(3004000, "oid=7136316", -583, -68, 27, -633, -533, 1, true, false);
                                                                                          cm.npc_SetSpecialAction("oid=7136316", "summon", 0, 0);
                                                                                          cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 500, -615, -34);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("黑鸦！", 57, 0, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/savageT/teleport", 250);
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction21.img/SavageT/effect/2"], [0, -634, -40, 1, 0, 1, 1, 0]);
                                                                                                cm.Hidden_background("402000301_tag", 1, 0, 0, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#华生！！这边！！", 37, 3004000, false, true);
                                                                                                  cm.npc_LeaveField("oid=7135441");
                                                                                                  cm.npc_LeaveField("oid=7135442");
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else if (status === V++) {
                                                                                                    cm.dispose();
                                                                                                    cm.warp(402000300, 0);
                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                    cm.setStandAloneMode(false);
                                                                                                    cm.forceStartQuest(37116, '');
                                                                                                    cm.updateInfoQuest(37100, "40=h1;31=h0;41=h0;50=h1;32=h0;42=h1;51=h1;33=h1;43=h1;52=h1;dir=off;44=h1;53=h1;35=h1;36=h1;37=h1;47=h1;38=h1;39=h1");
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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