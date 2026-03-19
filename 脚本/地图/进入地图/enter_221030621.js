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
      cm.npc_ChangeController(2052014, "oid=38372563", -440, 100, 1, -490, -390, 0, true, false);
      cm.npc_SetSpecialAction("oid=38372563", "summon", 0, 0);
      cm.npc_ChangeController(2052013, "oid=38372564", -480, 100, 1, -530, -430, 0, true, false);
      cm.npc_SetSpecialAction("oid=38372564", "summon", 0, 0);
      cm.npc_ChangeController(2052043, "oid=38372565", 51, 100, 2, 1, 101, 1, true, false);
      cm.npc_SetSpecialAction("oid=38372565", "summon", 0, 0);
      cm.npc_ChangeController(2052043, "oid=38372566", 121, 100, 3, 71, 171, 1, true, false);
      cm.npc_SetSpecialAction("oid=38372566", "summon", 0, 0);
      cm.npc_ChangeController(2052043, "oid=38372567", 191, 100, 3, 141, 241, 1, true, false);
      cm.npc_SetSpecialAction("oid=38372567", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -15, 300);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetForceMove("oid=38372563", 1, 250, 150);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=38372563", "attack", 0, 1);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/elctric2", 100);
              cm.inGameDirectionEvent_AskAnswerTime(200);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=38372565", "die1", 0, 1);
                cm.inGameDirectionEvent_头顶图片(["Npc/2052014.img/attack/hit", "oid=38372565"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/elctric2", 100);
                  cm.npc_SetSpecialAction("oid=38372566", 'die1', 0, 1);
                  cm.inGameDirectionEvent_头顶图片(["Npc/2052014.img/attack/hit", "oid=38372566"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/elctric2", 100);
                    cm.npc_SetSpecialAction("oid=38372567", 'die1', 0, 1);
                    cm.inGameDirectionEvent_头顶图片(["Npc/2052014.img/attack/hit", "oid=38372567"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=38372563", 1, 500, 150);
                      cm.npc_SetForceMove("oid=38372564", 1, 350, 150);
                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("阿琳！这也太孤军奋战了吧！", 37, 2052013, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.npc_LeaveField("oid=38372563");
                              cm.npc_LeaveField("oid=38372563");
                              cm.npc_LeaveField("oid=38372564");
                              cm.npc_LeaveField("oid=38372564");
                              cm.npc_LeaveField("oid=38372565");
                              cm.npc_LeaveField("oid=38372565");
                              cm.npc_LeaveField("oid=38372566");
                              cm.npc_LeaveField("oid=38372566");
                              cm.npc_LeaveField("oid=38372567");
                              cm.npc_LeaveField("oid=38372567");
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(2052004, "oid=38375073", 20, 100, 2, -30, 70, 1, true, false);
                                cm.npc_SetSpecialAction("oid=38375073", "summon", 0, 0);
                                cm.npc_ChangeController(2052003, "oid=38375074", -100, 100, 2, -150, -50, 0, true, false);
                                cm.npc_SetSpecialAction("oid=38375074", "summon", 0, 0);
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#阿琳有这么厉害吗？", 37, 2052003, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#姐姐，你还记得我最开始申请加入的时候吗？", 37, 2052004, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#嗯？当然了，当时我可没少反对，说你很鲁莽。", 37, 2052003, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#那你为什么回心转意了呢？", 37, 2052004, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#那是因为……你跟阿敏很像，她也曾经，很鲁莽。", 37, 2052003, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face2#阿敏姐姐吗？", 37, 2052004, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#有时候也不得不鲁莽。", 37, 2052003, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#不过你为什么突然要问这个？", 37, 2052003, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face5#不只是……\r\n我有点想不起来自己为什么想成为冒险勇士了。", 37, 2052004, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#你才是最健忘的。", 37, 2052003, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#不过，#b有一点#k我可以肯定。", 37, 2052004, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face3#不管是从前还是现在，#b我是真心想要当冒险勇士的#k。", 37, 2052004, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
                                                            cm.sendNormalTalk_Bottom("#face3#等着瞧吧，我一定会狠狠毁毁阿哲哥哥的锐气的。", 37, 2052004, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2#咦？", 37, 2052003, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face2#一般……不都是说挫挫，对方的锐气吗？", 37, 2052003, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.setAmbience("Ambience.img/warning", 100, 60);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=38375073"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=38375074"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#出事了！我听宅宅说，我们的位置似乎暴露了！", 37, 2052000, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face3#那里怎么样？是我们之前找的路吗？", 37, 2052000, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#不是，和地图上不一样。", 37, 2052003, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face3#这么说来，#b走廊201#k之外就没有地方了啊。\r\n你们俩我都会传送到冒险岛金刚处。", 37, 2052000, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else if (status === V++) {
                                                                                cm.playSoundEffDirectly("Ambience.img/warning");
                                                                                cm.dispose();
                                                                                cm.warp(221030610, 1);
                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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