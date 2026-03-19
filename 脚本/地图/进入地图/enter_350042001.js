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
      cm.npc_ChangeController(1540680, "oid=290509352", 912, -185, 7, 862, 962, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=290509352", 'summon', 0, 0);
      cm.npc_ChangeController(1540681, "oid=290509353", 1027, -185, 7, 977, 1077, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=290509353", "summon", 0, 0);
      cm.npc_ChangeController(1540682, "oid=290509354", 1172, -185, 8, 1122, 1222, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=290509354", "summon", 0, 0);
      cm.npc_ChangeController(1540683, "oid=290509355", 1232, -185, 9, 1182, 1282, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=290509355", "summon", 0, 0);
      cm.npc_ChangeController(1540684, "oid=290509356", 1292, -185, 9, 1242, 1342, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=290509356", "summon", 0, 0);
      cm.npc_ChangeController(1540656, "oid=290509357", 1570, -145, 20, 1520, 1620, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=290509357", 'summon', 0, 0);
      cm.npc_ChangeController(1540657, "oid=290509358", 2200, -145, 15, 2150, 2250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=290509358", "summon", 0, 0);
      cm.npc_ChangeController(1540659, "oid=290509359", 2250, -145, 15, 2200, 2300, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=290509359", "summon", 0, 0);
      cm.npc_ChangeController(1540659, "oid=290509360", 2300, -145, 15, 2250, 2350, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=290509360", "summon", 0, 0);
      cm.npc_ChangeController(1540659, "oid=290509361", 2350, -145, 15, 2300, 2400, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=290509361", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_ChangeEquipment([1004392]);
      cm.npcMove(1540680, 890, 0, 7100);
      cm.npcMove(1540681, 880, 0, 7100);
      cm.npcMove(1540682, 1500, 0, 7000);
      cm.npcMove(1540683, 1500, 0, 7000);
      cm.npcMove(1540684, 1500, 0, 7000);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 1322, -180);
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
            cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, 1887, -180);
          } else {
            if (status === V++) {
              cm.setAmbience("SoundEff.img/blackHeaven/scanner_stand", 100, 60);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.playSoundEffDirectly("SoundEff.img/blackHeaven/scanner_stand");
                cm.npc_SetSpecialAction("oid=290509357", "alert", -1, 1);
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/scanner_alert", 100);
                cm.setAmbience("SoundEff.img/blackHeaven/scanner_alert", 100, 60);
                cm.inGameDirectionEvent_AskAnswerTime(900);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=290509358", -1);
                  cm.npc_setForceFlip("oid=290509359", -1);
                  cm.npc_setForceFlip("oid=290509360", -1);
                  cm.npc_setForceFlip("oid=290509361", -1);
                  cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, 2022, -150);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=290509358"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=290509359"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=290509360"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=290509361"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#让我看看…………\r\n编号#r24601#k！到前面来！！！", 37, 1540657, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("…………", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(500, 1100, 500, 2022, -140);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=290509358"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#搞什么，难道是次品？\r\n前面的人究竟有没有好好检查啊？", 37, 1540657, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(500, 1200, 500, 2022, -130);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=290509359"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1##fs20#所以我的事情才会不断增多？！", 37, 1540657, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushScaleInfo(500, 1300, 500, 2022, -120);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["#face1#Effect/OnUserEff.img/emotion/angry", "oid=290509360"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1##fs30#可是工资却一点都没长！！！\r\n我真是无语了！", 37, 1540657, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushScaleInfo(500, 1400, 500, 2022, -110);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=290509361"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1#看来我要立刻进行报废处理了。", 37, 1540657, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/oh");
                                                        } else {
                                                          if (status === V++) {
                                                            cm.playSoundEffDirectly("SoundEff.img/blackHeaven/scanner_alert");
                                                            cm.inGameDirectionEvent_QTE(3);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_PlayFieldSound("Sound/Weapon.img/spear/Attack", 100);
                                                              cm.inGameDirectionEvent_ChangeEquipment([0]);
                                                              cm.inGameDirectionEvent_OneTimeAction(563, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(470);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushScaleInfo(500, 1500, 500, 2022, -110);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face1#！！！！敌……敌敌敌……敌人入侵啦！！！\r\n快阻止那些家伙！！！", 37, 1540657, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 2022, -100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_LeaveField("oid=290509352");
                                                                        cm.npc_LeaveField("oid=290509352");
                                                                        cm.npc_LeaveField("oid=290509353");
                                                                        cm.npc_LeaveField("oid=290509353");
                                                                        cm.npc_ChangeController(1540659, "oid=290522044", 1790, -145, 20, 1740, 1840, 0, true, 0, false);
                                                                        cm.npc_SetSpecialAction("oid=290522044", 'summon', 0, 0);
                                                                        cm.npc_ChangeController(1540659, "oid=290522045", 1920, -145, 18, 1870, 1970, 1, true, 0, false);
                                                                        cm.npc_SetSpecialAction("oid=290522045", "summon", 0, 0);
                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                          cm.effect_OnUserEff("Effect/OnUserEff.img/blackHeaven/androidPre");
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_SetSpecialAction("oid=290522044", 'swing', -1, 1);
                                                                            cm.npc_SetSpecialAction("oid=290522045", "swing", -1, 1);
                                                                            cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 1972, -100);
                                                                            cm.effect_LastingEff("Effect/OnUserEff.img/blackHeaven/androidHold", 1, 180000, 0);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_QTE(1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_MoveAction(7);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(470);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion3", 100);
                                                                                  cm.emotion(5, 99999);
                                                                                  cm.inGameDirectionEvent_OneTimeAction(563, 0);
                                                                                  cm.addPopupSay(1540657, 3000, "#face1#呃, 这家伙!", '', 0);
                                                                                  cm.npc_SetSpecialAction("oid=290522044", 'die', 0, 1);
                                                                                  cm.npc_SetSpecialAction("oid=290522045", "die", 0, 1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                  cm.effect_LastingEff(null, 0, 0, 0);
                                                                                  cm.effect_OnUserEff("Effect/OnUserEff.img/blackHeaven/androidSuccess");
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 2272, -100);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_SetSpecialAction("oid=290509358", "angry", -1, 1);
                                                                                      cm.npc_SetSpecialAction("oid=290509359", 'angry', -1, 1);
                                                                                      cm.npc_SetSpecialAction("oid=290509360", "angry", -1, 1);
                                                                                      cm.npc_SetSpecialAction("oid=290509361", "angry", -1, 1);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1650);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_LeaveField("oid=290522044");
                                                                                        cm.npc_LeaveField("oid=290522044");
                                                                                        cm.npc_LeaveField("oid=290522045");
                                                                                        cm.npc_LeaveField("oid=290522045");
                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                        } else if (status === V++) {
                                                                                          cm.dispose();
                                                                                          cm.openNpc("黑色天堂_Act4_横扫千军");
                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                          cm.npc_LeaveField("oid=290509354");
                                                                                          cm.npc_LeaveField("oid=290509354");
                                                                                          cm.npc_LeaveField("oid=290509355");
                                                                                          cm.npc_LeaveField("oid=290509355");
                                                                                          cm.npc_LeaveField("oid=290509356");
                                                                                          cm.npc_LeaveField("oid=290509356");
                                                                                          cm.npc_LeaveField("oid=290509357");
                                                                                          cm.npc_LeaveField("oid=290509357");
                                                                                          cm.npc_LeaveField("oid=290509358");
                                                                                          cm.npc_LeaveField("oid=290509358");
                                                                                          cm.npc_LeaveField("oid=290509359");
                                                                                          cm.npc_LeaveField("oid=290509359");
                                                                                          cm.npc_LeaveField("oid=290509360");
                                                                                          cm.npc_LeaveField("oid=290509360");
                                                                                          cm.npc_LeaveField("oid=290509361");
                                                                                          cm.npc_LeaveField("oid=290509361");
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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