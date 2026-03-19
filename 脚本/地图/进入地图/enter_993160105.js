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
      cm.npc_ChangeController(3001679, "oid=375312", -513, -985, 2, -559, -463, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.fieldEffect_Hero9(0, 1000);
      cm.setAmbience("Ambience.img/blizzard_soft", 200, 60);
      cm.npc_ChangeController(3001663, "oid=2971735", -360, -959, 139, -410, -310, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2971735", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 750, -351);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
          cm.fieldEffect_Hero9(100, 1000);
          cm.inGameDirectionEvent_MoveAction(3);
          cm.inGameDirectionEvent_PushScaleInfo(6000, 0, 1000, 6000, 933, -1002);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3500);
                cm.effect_Text(["#fn黑体##fs18#某处峭壁"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/bird", 100);
                  cm.sendNormalTalk_Bottom("#face4#额……这杀气腾腾的声音……的确像是有怪物的地方吧？", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.npc_ChangeController(3001651, "oid=2971952", 1004, -1005, 119, 954, 1054, 1, true, 0, false);
                      cm.npc_SetSpecialAction("oid=2971952", "summon", 0, 0);
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/D_appear", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#能看到在那边呢。", 37, 3001651, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_MoveAction(0);
                            cm.npc_SetForceMove("oid=2971952", -1, 520, 180);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_同时移动镜头和人(1, 470);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -350, -900);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face7#什么情况，那个庞大又可爱的家伙！？", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#那家伙也许看上去不起眼，其实相当凶悍，特别是如果有人接近巢穴……", 37, 3001651, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetSpecialAction("oid=2971735", "special1", -1, 0);
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/bird", 100);
                                                cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1000, 2000, -26, -950);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#没，没想到你这家伙挺粗犷啊？明明长得这么可爱。", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face7#说起来，巢穴里能看到发光的东西……还有修行者，\r\n不过就只有一个人呢？其他修行者都上哪儿去了？", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#嗯……难不成这周围还有其他的藏身之处？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/bird", 100);
                                                            cm.sendNormalTalk_Bottom("#face0#虽然失去了意识，好在看起来并无大碍，\r\n……不过你所谓的珍藏的妙计到底是什么？", 37, 3001651, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face11#那个吧……嘻嘻。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/bird", 100);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face10#全部……", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face5#就在这里面！", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, -400, -960);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/HoyoungEffect/10"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                          cm.inGameDirectionEvent_OneTimeAction("虎影_释放道术", 500);
                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/bell1", 100);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/bell1", 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/bell1", 100);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/bell1", 100);
                                                                                cm.setNpcSpecialActionReset("oid=2971735");
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/appear", 100);
                                                                                cm.npc_SetSpecialAction("oid=2971735", "special2", -1, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.userSetFieldFloating(993160105, 10, 10, 10);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_LeaveField("oid=2971735");
                                                                                    cm.npc_LeaveField("oid=2971735");
                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 2);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.userSetFieldFloating(993160105, 0, 0, 0);
                                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -400, -920);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_ChangeController(3001664, "oid=2972836", -400, -1099, 191, -450, -350, 0, true, 0, false);
                                                                                          cm.npc_SetSpecialAction("oid=2972836", 'summon', 0, 0);
                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/appear", 100);
                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 2);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face7#好像……成功了呢，诶……话说那是什么？", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#力量减弱的怪物最终变回了魂魄，\r\n还愣着干什么……还不赶紧去抓？", 37, 3001651, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face7#什么！？这种事当然要早点说啊！", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.onTeleport(0, 3, cm.getPlayer().getId(), 100, -943);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_setForceFlip("oid=2972836", -1);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_SetSpecialAction("oid=2972836", "out", 1200, 0);
                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, -630, -940);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_同时移动镜头和人(1, 230);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_LeaveField("oid=2972836");
                                                                                                              cm.npc_LeaveField("oid=2972836");
                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face2#给，给我站住！", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_Hero9(0, 1500);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                    cm.playSoundEffDirectly("Ambience.img/blizzard_soft");
                                                                                                                    cm.fieldEffect_Hero9(100, 300);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -1082, -920);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.onTeleport(0, 3, cm.getPlayer().getId(), -1082, -943);
                                                                                                                        cm.inGameDirectionEvent_OneTimeAction(28, 999999);
                                                                                                                        cm.emotion(1, 15000);
                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/dong2", 100);
                                                                                                                        cm.sendNormalTalk_Bottom("#face8#这……不知为何，感觉不太妙……额！", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                                                        cm.npc_LeaveField("oid=2971952");
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.fieldEffect_PlayBGM("Bgm43/Unexpected crisis", 0, 0);
                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/dong3", 100);
                                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1750, 0, -1082, -910);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/dong3", 100);
                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -1082, -900);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/dong3", 100);
                                                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2500, 0, -1082, -890);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, -1082, -748);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.onTeleport(0, 3, cm.getPlayer().getId(), -1082, -913);
                                                                                                                                            cm.inGameDirectionEvent_OneTimeAction("虎影_疯狂翻滚", 999999);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                    } else if (status === V++) {
                                                                                                                                                      cm.npc_LeaveField("oid=2971952");
                                                                                                                                                      cm.dispose();
                                                                                                                                                      cm.warp(993160106, 0, false);
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}