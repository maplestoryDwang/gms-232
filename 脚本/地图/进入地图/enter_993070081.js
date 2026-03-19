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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3003914, "oid=2185406", -782, 29, 2, -832, -732, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2185406", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=2185406", "special", -1, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -617, 77);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -559, -15);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("飞鱼！飞鱼！", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#对不起……好像稍微……擦到了一点……", 37, 3003409, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("啊……", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#记住……\r\n世界在说话……说我们不想消失……", 37, 3003409, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#所以……", 37, 3003409, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/9", "oid=2185406"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/8", "oid=2185406"], [0, 0, 0, 1, -500, 1, 0, 0]);
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/soul", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                    } else {
                      if (status === V++) {
                        cm.Npc_Fadeout("oid=2185406", 0, 500);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.npc_LeaveField("oid=2185406");
                          cm.npc_LeaveField("oid=2185406");
                          cm.sendNormalTalk_Bottom("呃……", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(120);
                            } else {
                              if (status === V++) {
                                cm.effect_Text(["#r#fn黑体##fs26# 对抗者。"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                cm.effect_Voice("Voice4.img/BM3/black/7", 128);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_ForcedFlip(1);
                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                } else {
                                  if (status === V++) {
                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 10, -120);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                        cm.sendNormalTalk_Bottom("黑魔法师！！！", 57, 0, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else {
                                          if (status === V++) {
                                            cm.effect_Text(["#r#fn黑体##fs26#路已经铺好了。"], [100, 2500, 4, 0, 80, 1, 4, 0, 0, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                            cm.effect_Voice("Voice4.img/BM3/black/8", 128);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === V++) {
                                                cm.effect_Text(["#r#fn黑体##fs26#你不过是在向着已经制定好的路线尽头奔跑罢了。"], [100, 2500, 4, 0, 80, 1, 4, 0, 0, 0, 0]);
                                                cm.inGameDirectionEvent_AskAnswerTime(6000);
                                                cm.effect_Voice("Voice4.img/BM3/black/9", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("不，我要闯一条路出来给你看看。", 57, 0, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("为了冒险岛世界！", 57, 0, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else if (status === V++) {
                                                            cm.forceCompleteQuest(35812);
                                                            cm.gainExp(360899508);
                                                            cm.forceStartQuest(35813, '');
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.dispose();
                                                            cm.warp(450012500, 0, true);
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}