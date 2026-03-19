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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 230, -2500);
      cm.npc_ChangeController(3004650, "oid=123624654", 613, -2694, 15, 563, 663, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=123624654", "summon", 0, 0);
      cm.npc_ChangeController(3004651, "oid=123624655", 430, -2500, 12, 380, 480, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=123624655", 'summon', 0, 0);
      cm.Npc_Fadeout("oid=123624655", 0, 0);
      cm.npc_SetSpecialAction("oid=123624654", "special2", -1, 1);
      cm.npc_SetSpecialAction("oid=123624655", "special", -1, 1);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -1465, -2400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(4);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
              cm.inGameDirectionEvent_PushScaleInfo(8000, 0, 1500, 8000, 114, -2400);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(10000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("呃呃……我还……活着吗？", 56, 0, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("贝尔呢……", 56, 0, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(700);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(200, 0, 3000, 200, 605, -2535);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/electric", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#（唧）……（唧）……", 36, 3004672, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("机器？", 56, 0, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                  cm.inGameDirectionEvent_MoveAction(0);
                                  cm.inGameDirectionEvent_PushScaleInfo(200, 0, 1500, 200, 454, -2441);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(700);
                                  } else {
                                    if (status === V++) {
                                      cm.userSetFieldFloating(993176012, 2, 2, 10);
                                      cm.gainSkillBuff(70006);
                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction24.img/effect/3", "oid=1", '00'], [-1, 0, -30, 1, -10, 1, 0, 0, 1]);
                                      cm.setAmbience("SoundEff.img/ReverseCity/gravitygun2", 80, 60);
                                      cm.npc_SetSpecialAction("oid=123624654", "special11", -1, 1);
                                      cm.sendNormalTalk_Bottom('呃呃。', 56, 0, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("怎么又……成了这样……", 56, 0, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#好了，这次……（唧）打算……怎么办？嗯？！", 36, 3004672, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("（呃……完全……挣脱不开……）", 56, 0, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayBGM("Bgm54/T-bomb", 0, 0);
                                                  cm.sendNormalTalk_Bottom("#face0#原、原来是这么回事，T-boy。", 36, 3004651, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.Npc_Fadeout("oid=123624655", 255, 500);
                                                    cm.inGameDirectionEvent_AskAnswerTime(700);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#贝尔……", 36, 3004672, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#你想（唧）说……什么？", 36, 3004672, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#那个身体只是你无数#r无人机中的一个#k。\r\n真正的你，应该躲在安、安全的地方。", 36, 3004651, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#所以只有你不会受到反转城#r颠倒的重力#k的影响。", 36, 3004651, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#像你这样恶毒的胆小鬼，\r\n从来不会有赌上生命承、承受危险的勇气。", 36, 3004651, false, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#……", 36, 3004672, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#哈哈，那（唧）……又有……（唧）什么区别？", 36, 3004672, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#负罪感。", 36, 3004651, false, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#既然知道那个显示器后面只有基、基板和电路……", 36, 3004651, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#我就能毫不犹豫地扣动扳机了。", 36, 3004651, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/reload", 100);
                                                                              cm.sendNormalTalk_Bottom("#face0#……！", 36, 3004672, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.playSoundEffDirectly("SoundEff.img/ReverseCity/gravitygun2");
                                                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                  cm.inGameDirectionEvent_MoveAction(4);
                                                                                  cm.userSetFieldFloating(993176012, 0, 0, 0);
                                                                                  cm.npc_SetSpecialAction("oid=123624654", 'special10', -1, 1);
                                                                                  cm.inGameDirectionEvent_隐藏头顶图片('00');
                                                                                  cm.dispelBuff(70006);
                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 4000, 0, 633, -2570);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.setNpcSpecialActionReset("oid=123624655");
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/gunshot", 100);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
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
                                                                                            cm.setAmbience("SoundEff.img/blackHeaven/electric_loop", 100, 60);
                                                                                            cm.onSetNpcScript("oid=123624654", 1, ['special4', 'special10'], [3000, -1]);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.playSoundEffDirectly("SoundEff.img/blackHeaven/electric_loop");
                                                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 303, -2470);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_SetForceMove("oid=123624655", -1, 80, 100);
                                                                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0##h0#，你没事吧？", 36, 3004651, false, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_MoveAction(0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_MoveAction(0);
                                                                                                          cm.inGameDirectionEvent_ChangeEquipment([0]);
                                                                                                          cm.sendNormalTalk_Bottom("呃……好像没事。那家伙呢？", 56, 0, false, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#摧、摧毁掉了。\r\n虽然只、只不过是他#r无数的无人机之一#k。", 36, 3004651, true, true, 1);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom('嗯……', 56, 0, true, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#真身估计一开始就不在反转城。", 36, 3004651, true, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#就算整座城市都被毁灭，他也能安然无恙。", 36, 3004651, true, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("那种人居然还自称喜欢享受刺激……", 56, 0, true, true, 1);
                                                                                                                  } else if (status === V++) {
                                                                                                                    cm.warp(450014200, 1, true);
                                                                                                                    cm.updateInfoQuest(37600, "01=h0;10=h0;11=h0;02=h1;12=h0;13=h0;14=h0;15=h0;16=h0;17=h0;18=h0;09=h0");
                                                                                                                    cm.updateInfoQuest(37600, "01=h0;10=h0;11=h0;02=h1;12=h0;13=h0;14=h0;15=h0;16=h0;17=h0;18=h0;09=h0;19=h1");
                                                                                                                    cm.forceCompleteQuest(37617);
                                                                                                                    cm.gainExp(17565641);
                                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                    cm.npc_LeaveField("oid=123624654");
                                                                                                                    cm.npc_LeaveField("oid=123624655");
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
            }
          }
        }
      }
    }
  }
}