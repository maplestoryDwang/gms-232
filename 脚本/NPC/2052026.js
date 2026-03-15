var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (cm.isQuestFinished(3480) && !cm.isQuestFinished(3481)) {
    action1(f, W, U);
  } else if (cm.isQuestFinished(3481)) {
    action2(f, W, U);
  } else {
    action0(f, W, U);
  }
}
function action0(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.sendOk("乱用恐怕会被外星人抓走。还是小心点好。");
  } else {
    cm.dispose();
  }
}
function action1(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("#face0#好吧，这就是那个呼叫机啊。", 37, 2052000, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#嗯……好像启动这东西需要稍微花费点时间啊？", 37, 2052003, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#好吧，那在此之前，就稍微休息一下吧。", 37, 2052000, true, true);
        } else {
          if (status === V++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
                cm.inGameDirectionEvent_AskAnswerTime(800);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(3200);
                  cm.effect_Text(["#fn黑体##fs18#稍后……#fs15##fn黑体#冒险岛金刚操纵室"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#姐姐，姐姐，话说#b#ho##k，那个人到底是谁啊，怎么这么厉害？", 37, 2052004, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#听说是个#b勇士#k，怎么了？", 37, 2052003, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#嗯？没什么……我只是出于好奇。", 37, 2052004, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#还真是稀奇啊？阿琳你居然会对其他人有兴趣。\r\n天啊，难道是那个？#fs25##b青、春、期？#k", 37, 2052003, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#什么？不是的，我就只是……", 37, 2052004, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#额……谁手上还有纸巾的？", 37, 2052005, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#哎？", 37, 2052003, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#啊！我分明连的是私人线路啊？\r\n私人线路是红色按钮，阿哲哥哥是这么说的。", 37, 2052004, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3#你这记忆力可真是堪比金鱼啊……", 37, 2052003, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#是，二位说的话我都听到了~\r\n看来我们老幺迎来了#n青春期#k啊~", 37, 2052002, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#哎哟喂……肯定都被听到了啊。", 37, 2052004, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom('哈哈……', 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face3#啊，算了，先给我点纸巾……", 37, 2052005, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#阿亮，你非得跑来作战的时候上大号吗？！", 37, 2052000, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face3#你不觉得这个很美嘛，真的很美吧……", 37, 2052001, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#啊！看那边！有什么东西在靠近！", 37, 2052004, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.setPartner(0, 2052032, 0, 0);
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_ChangeController(2052016, "oid=40079914", -1980, 43, 19, -2030, -1930, 1, false, false);
                                                        cm.npc_SetSpecialAction("oid=40079914", "summon", 0, 0);
                                                        cm.npc_ChangeController(2052032, "oid=40079915", -1808, 54, 20, -1858, -1758, 1, true, false);
                                                        cm.npc_SetSpecialAction("oid=40079915", "summon", 0, 0);
                                                        cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, -1980, -20);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npcMove(2052016, 0, 250, 3500);
                                                            cm.setAmbience("SoundEff.img/blackHeaven/crusherStay", 120, 60);
                                                            cm.setAmbience("SoundEff.img/HofM/act2/ABLOOP", 120, 60);
                                                            cm.userSetFieldFloating(221030400, 5, 5, 50);
                                                            cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/omegaSector/dust", "oid=40079914"], [8000, 600, 65, 1, 0, 1, 0, 0]);
                                                            cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/omegaSector/dust2", "oid=40079914"], [8000, -600, 65, 1, 0, 1, 0, 0]);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.addPopupSay(2052004, 1500, "#face2#哇啊啊啊，超大的……", '', 0);
                                                              cm.addPopupSay(2052002, 1500, '#face2#厉害！', '', 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/omegaSector/light1", "oid=40079914"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/UFOlight.mp3", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_LeaveField("oid=40079915");
                                                                  cm.npc_LeaveField("oid=40079915");
                                                                  cm.inGameDirectionEvent_SetHideEffect(1);
                                                                  cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/omegaSector/teleport"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                  cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/omegaSector/teleport", "oid=40079915"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/UFOtel.mp3", 100);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else if (status === V++) {
                                                                    cm.userSetFieldFloating(221030400, 0, 0, 0);
                                                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                                                    cm.forceCompleteQuest(3481);
                                                                    cm.dispose();
                                                                    cm.warp(221030520, 0);
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
function action2(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2052016, "oid=40903787", -1980, 43, 19, -2030, -1930, 1, false, false);
        cm.npc_SetSpecialAction("oid=40903787", 'summon', 0, 0);
        cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, -1980, -20);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.npcMove(2052016, 0, 250, 3500);
            cm.setAmbience("SoundEff.img/blackHeaven/crusherStay", 120, 60);
            cm.setAmbience("SoundEff.img/HofM/act2/ABLOOP", 120, 60);
            cm.userSetFieldFloating(221030400, 5, 5, 50);
            cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/omegaSector/dust", "oid=40903787"], [8000, 600, 65, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/omegaSector/dust2", "oid=40903787"], [8000, -600, 65, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(4000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/omegaSector/light1", "oid=40903787"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/UFOlight.mp3", 100);
                cm.inGameDirectionEvent_AskAnswerTime(3500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_SetHideEffect(1);
                  cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/omegaSector/teleport"], [0, 0, 0, 1, 0, 0, 0, 0]);
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/UFOtel.mp3", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else if (status === V++) {
                    cm.npc_LeaveField("oid=40903787");
                    cm.npc_LeaveField("oid=40903787");
                    cm.userSetFieldFloating(221030400, 0, 0, 0);
                    cm.inGameDirectionEvent_SetHideEffect(0);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.dispose();
                    cm.warp(221030520, 0);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}