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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.npc_ChangeController(3001655, "oid=2978161", -1805, -24, 12, -1855, -1755, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2978161", "summon", 0, 0);
      cm.SitOnDummyPortableChair(3018396, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -2007, -815);
      cm.curNodeEventEnd(true);
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
            cm.effect_Text(["#fn黑体##fs18#片刻后，商业街"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, -2007, -480);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#我已经用我的那些分身做好了陷阱，\r\n现在只等那个无脸怪上钩了……", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -2320, 30);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=2978161", -1, 330, 220);
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=2978161", 1, 30, 180);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=2978161", -1, 70, 180);
                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#唔……手碰不到……啊，陷阱！？", 37, 3001655, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.userSetFieldFloating(993160108, 10, 10, 10);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.userSetFieldFloating(993160108, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/rock", 100);
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.SitOnDummyPortableChair(0, 0);
                                              cm.sendNormalTalk_Bottom("#face5#……就是现在！这家伙总算被我逮着了！！", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/fall2", 100);
                                                cm.sendNormalTalk_Bottom("#face0#额啊！", 37, 3001655, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_LeaveField("oid=2978161");
                                                    cm.npc_LeaveField("oid=2978161");
                                                    cm.npc_ChangeController(3001655, "oid=2978621", -2196, 19, 1, -2246, -2146, 1, true, 0, false);
                                                    cm.npc_SetSpecialAction("oid=2978621", "summon", 0, 0);
                                                    cm.npc_SetSpecialAction("oid=2978621", "special1", -1, 1);
                                                    cm.onTeleport(0, 3, cm.getPlayer().getId(), -2400, 19);
                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -2300, 30);
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
                                                          cm.inGameDirectionEvent_同时移动镜头和人(2, 30);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（无脸怪似乎避开陷阱逃走了，\r\n不过因为逃得紧急，对方落下了装有偷走之物的背包。）", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face7#那家伙到底什么来头？居然能看穿我设的陷阱……\r\n精气如此虚弱，不过就是常见的小怪啊……", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#能感受到！！", 37, 3001651, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face7#什，什么意思？还有你……难道不是因为闹脾气才不肯出来的？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.updateInfoQuest(39598, "02=h0;11=h0;03=h1;05=h1;15=h0;33=h0;34=h1;16=h1;35=h0;27=h0;09=h0;82=h0;28=h0;29=h0;84=h0;85=h0");
                                                                        cm.forceCompleteQuest(39526);
                                                                        cm.gainExp(3144);
                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                        cm.gainItem(4036580, -20);
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
                                                                              cm.setStandAloneMode(false);
                                                                              cm.warp(410000200, 6, false);
                                                                              cm.eventSKill(0);
                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                              cm.npc_LeaveField("oid=2978621");
                                                                              cm.npc_LeaveField("oid=2978621");
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