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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 18, 100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3001666, "oid=3026650", 113, 119, 1, 63, 163, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=3026650", "summon", 0, 0);
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
              cm.sendNormalTalk_Bottom("#face0#这……这怎么可能……力量……力量……正在渐渐消散！？", 37, 3001666, false, true);
              cm.effect_Voice("Voice5.img/hoyoung/K-4/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#那股力量可不属于你啊，俊秀法师的脸也不属于你。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                cm.effect_Voice("Voice5.img/hoyoung/K-4/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/2', 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#我的野心……", 37, 3001666, true, true);
                  cm.effect_Voice("Voice5.img/hoyoung/K-4/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#你以为靠夺走别人的东西获得的幸福能长久下去吗？", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                      cm.effect_Voice("Voice5.img/hoyoung/K-4/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#闭嘴……你小子懂什么，我占领了这个世界，\r\n是我们老鼠王国的领袖……", 37, 3001666, true, true);
                        cm.effect_Voice("Voice5.img/hoyoung/K-4/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/5', 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2#我劝你现在就从这有点幼稚的妄想里出来怎么样？\r\n虽然拥有了强大的力量，可你的世界不还是在老鼠洞里嘛？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                          cm.effect_Voice("Voice5.img/hoyoung/K-4/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/6', 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#这座村庄……大陆……然后整个世界，好吧，权当这些都归你了，\r\n然后呢……那之后又有什么？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                            cm.effect_Voice("Voice5.img/hoyoung/K-4/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/7', 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#你不觉得这是毫无意义的吗？在你妄想的世界里，\r\n既不会有任何风景，也不会有任何表情！？那真的是野心吗？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                              cm.effect_Voice("Voice5.img/hoyoung/K-4/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/8', 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face4#这个世界还没那么蠢……\r\n以至于会被那种大草包掌控，傻小子！", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                cm.effect_Voice("Voice5.img/hoyoung/K-4/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/9', 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#我就让你再也没办法耍嘴皮子……", 37, 3001666, false, true);
                                    cm.effect_Voice("Voice5.img/hoyoung/K-4/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/10', 100);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 2);
                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom('#face0#咔咔！', 37, 3001666, false, true);
                                            cm.effect_Voice("Voice5.img/hoyoung/K-4/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/11', 100);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face2#哈！", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                              cm.effect_Voice("Voice5.img/hoyoung/K-4/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/12", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face4##fc0xFFbfbfbf#（那家伙的精气正在不断地流失，\r\n现在最虚弱的部分是……头，就要瞄准那里。）", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                cm.effect_Voice("Voice5.img/hoyoung/K-4/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/13", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#咔咔咔咔咔！！", 37, 3001666, false, true);
                                                    cm.effect_Voice("Voice5.img/hoyoung/K-4/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/14", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.onTeleport(0, 3, cm.getPlayer().getId(), -657, 100);
                                                        cm.npc_LeaveField("oid=3026650");
                                                        cm.npc_LeaveField("oid=3026650");
                                                        cm.npc_ChangeController(3001651, "oid=3027390", 0, 24, 3, -50, 50, 0, true, 0, false);
                                                        cm.npc_SetSpecialAction("oid=3027390", "summon", 0, 0);
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/mouse", 100);
                                                        cm.sendNormalTalk_Bottom("#face4##fc0xFFbfbfbf#（倒地的鼠精化为沟鼠溜走了，\r\n而跳蚤怪的魂魄便在那里露出了原形。）", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 2);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetSpecialAction("oid=3027390", 'special3', 1800, 0);
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/D_get", 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.setNpcSpecialActionReset("oid=3027390");
                                                                cm.onTeleport(0, 3, cm.getPlayer().getId(), -200, -138);
                                                                cm.sendNormalTalk_Bottom("#face10#成功了。", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                cm.effect_Voice("Voice5.img/hoyoung/K-4/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/15", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#完成回收了。", 37, 3001651, true, true);
                                                                  cm.effect_Voice("Voice5.img/hoyoung/K-4/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/16", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, 18, -40);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_ProcessOnOffLayer('09', "Effect/Direction9.img/HoyoungEffect/6", 0, 500, 430, 120, 1, 4, 0, -1, 0, 0, 0);
                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/complete", 100);
                                                                          cm.userSetFieldFloating(993160120, 10, 10, 10);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.userSetFieldFloating(993160120, 0, 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_ProcessOnOffLayer('09', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_Hero9(0, 2000);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2300);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                  cm.fieldEffect_Hero9(100, 500);
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
                                                                                          cm.npc_LeaveField("oid=3027390");
                                                                                          cm.npc_LeaveField("oid=3027390");
                                                                                          cm.dispose();
                                                                                          cm.warp(993160121, 0, false);
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}