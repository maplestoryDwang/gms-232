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
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setAmbience("Ambience.img/blizzard_soft", 200, 60);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -1500, -200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3001509, "oid=144152718", -1838, 250, 4, -1888, -1788, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=144152718", "summon", 0, 0);
        cm.npc_ChangeController(3001512, "oid=144152719", -1960, 250, 4, -2010, -1910, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=144152719", 'summon', 0, 0);
        cm.npc_ChangeController(3001513, "oid=144152720", -1900, 250, 4, -1950, -1850, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=144152720", "summon", 0, 0);
        cm.npc_ChangeController(3001510, "oid=144152721", -1260, 250, 3, -1310, -1210, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=144152721", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
            cm.effect_Text(["#fn黑体##fs18#一段时间之后，在远离避难处的地方"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1000, 4000, -1500, 250);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(4000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, -1150, 250);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_ForcedFlip(1);
                    cm.npc_SetForceMove("oid=144152718", 1, 350, 200);
                    cm.npc_SetForceMove("oid=144152719", 1, 350, 200);
                    cm.npc_SetForceMove("oid=144152720", 1, 350, 200);
                    cm.npc_SetForceMove("oid=144152721", 1, 350, 200);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_同时移动镜头和人(2, 350);
                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#感觉风势不太对劲……我们真的走对路了吗？", 37, 3001512, 0, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ark/wind", 100);
                            cm.fieldEffect_复合图片动画(["Effect/Direction17.img/effect/ark/dust/0/ark_dust", "01_dust A", '', '01'], [0, 0, 1, 0, 0, 0, 0, 1]);
                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=144152718"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=144152720"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=144152719"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=144152721"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ark/wind", 100);
                                cm.fieldEffect_复合图片动画(["Effect/Direction17.img/effect/ark/dust/0/ark_dust", "02_dust B", '', '02'], [0, 1, 1, 0, 0, 0, 0, 1]);
                                cm.npc_SetForceMove("oid=144152718", 1, 150, 120);
                                cm.sendNormalTalk_Bottom("#face2#哈哈哈，维依，看你得瑟了半天，结果把我们带到沙暴里吗？", 37, 3001509, 0, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom('#face0#……', 37, 3001510, 1, 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1000, 2000, -850, 250);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=144152719", 1, 150, 120);
                                      cm.npc_SetForceMove("oid=144152720", 1, 150, 120);
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ark/wind", 100);
                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                      cm.sendNormalTalk_Bottom("#face0#你，你能不能严肃一点，叽勒……情况真的很严重，叽勒楞……", 37, 3001510, 0, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, -850, 300);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ark/wind", 100);
                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                          cm.sendNormalTalk_Bottom("#face2#因为沙暴……", 37, 3001510, 0, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, -850, 320);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ark/wind", 100);
                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                              cm.sendNormalTalk_Bottom("#face3#……我接收不到电波了。", 37, 3001510, 0, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_ChangeController(3001524, "oid=144156449", -750, 233, 3, -800, -700, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=144156449", "summon", 0, 0);
                                                cm.npc_ChangeController(3001524, "oid=144156450", -700, 233, 3, -750, -650, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=144156450", 'summon', 0, 0);
                                                cm.npc_ChangeController(3001524, "oid=144156451", -650, 233, 3, -700, -600, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=144156451", "summon", 0, 0);
                                                cm.npc_ChangeController(3001524, "oid=144156452", -600, 233, 3, -650, -550, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=144156452", "summon", 0, 0);
                                                cm.npc_ChangeController(3001524, "oid=144156453", -560, 233, 3, -610, -510, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=144156453", "summon", 0, 0);
                                                cm.npc_ChangeController(3001524, "oid=144156454", -500, 233, 1, -550, -450, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=144156454", "summon", 0, 0);
                                                cm.npc_ChangeController(3001524, "oid=144156455", -420, 233, 1, -470, -370, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=144156455", "summon", 0, 0);
                                                cm.npc_ChangeController(3001524, "oid=144156456", -300, 233, 1, -350, -250, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=144156456", 'summon', 0, 0);
                                                cm.npc_SetSpecialAction("oid=144156451", "attack", -1, 1);
                                                cm.npc_SetSpecialAction("oid=144156452", "attack", -1, 1);
                                                cm.npc_SetSpecialAction("oid=144156453", "attack", -1, 1);
                                                cm.npc_SetSpecialAction("oid=144156454", "attack", -1, 1);
                                                cm.npc_SetSpecialAction("oid=144156455", 'attack', -1, 1);
                                                cm.npc_SetSpecialAction("oid=144156456", "attack", -1, 1);
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ark/wind", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ark/wind", 100);
                                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 150);
                                                  cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1000, 2000, -1000, 250);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face4#糟糕。", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
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
                                                              cm.setStandAloneMode(false);
                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                              cm.warp(402000621, 0, false);
                                                              cm.eventSKill(0);
                                                              cm.setInGameDirectionMode(false, true, false);
                                                              cm.npc_LeaveField("oid=144152718");
                                                              cm.npc_LeaveField("oid=144152719");
                                                              cm.npc_LeaveField("oid=144152720");
                                                              cm.npc_LeaveField("oid=144152721");
                                                              cm.npc_LeaveField("oid=144156449");
                                                              cm.npc_LeaveField("oid=144156450");
                                                              cm.npc_LeaveField("oid=144156451");
                                                              cm.npc_LeaveField("oid=144156452");
                                                              cm.npc_LeaveField("oid=144156453");
                                                              cm.npc_LeaveField("oid=144156454");
                                                              cm.npc_LeaveField("oid=144156455");
                                                              cm.npc_LeaveField("oid=144156456");
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