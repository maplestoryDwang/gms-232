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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1685, -25);
      cm.npc_ChangeController(1530110, "oid=40068771", 1590, 12, 46, 1540, 1640, 0, true, false);
      cm.npc_SetSpecialAction("oid=40068771", "summon", 0, 0);
      cm.npc_ChangeController(1530120, "oid=40068772", 1826, 12, 47, 1776, 1876, 0, true, false);
      cm.npc_SetSpecialAction("oid=40068772", "summon", 0, 0);
      cm.npc_ChangeController(1530100, "oid=40068773", 1530, 12, 46, 1480, 1580, 0, true, false);
      cm.npc_SetSpecialAction("oid=40068773", 'summon', 0, 0);
      cm.npc_ChangeController(1530090, "oid=40068774", 1470, 12, 46, 1420, 1520, 0, true, false);
      cm.npc_SetSpecialAction("oid=40068774", "summon", 0, 0);
      cm.npc_ChangeController(1530639, "oid=40068775", 1940, 12, 47, 1890, 1990, 1, true, false);
      cm.npc_SetSpecialAction("oid=40068775", "summon", 0, 0);
      cm.npc_ChangeController(1530640, "oid=40068776", 2360, 12, 48, 2310, 2410, 1, true, false);
      cm.npc_SetSpecialAction("oid=40068776", "summon", 0, 0);
      cm.npc_ChangeController(1530641, "oid=40068777", 2460, 12, 48, 2410, 2510, 1, false, false);
      cm.npc_SetSpecialAction("oid=40068777", "summon", 0, 0);
      cm.npc_ChangeController(1530642, "oid=40068778", 2560, 12, 48, 2510, 2610, 1, false, false);
      cm.npc_SetSpecialAction("oid=40068778", "summon", 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 2000, 2460, 20);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1181);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 100, 1940, 20);
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
                cm.inGameDirectionEvent_AskAnswerTime(5209);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("你好~你们是在招兼职生吧？", 37, 1530120, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("你们是来找活儿干的啊。\r\n但是，我们这个活儿得有点力量才行……如果是女人，有点吃力啊。", 37, 1530639, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("什么？你现在因为我是女人就小瞧我吗？", 37, 1530604, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("要是这样……我就搬一下那边的那个水泥袋给你看看吧？", 37, 1530639, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=40068775", 1);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                            cm.sendNormalTalk_Bottom("#b新来的#k啊！你来做个示范吧！", 37, 1530639, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=40068771"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=40068772"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=40068774"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=40068773"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 2060, 70);
                            } else {
                              if (status === V++) {
                                cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/oh");
                                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("总有种不祥的预感。", 37, 1530120, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayBGM("Bgm42.img/TheBeast2", 0, 0);
                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushMoveInfo(0, 2000, 1940, 20);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(127);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
                                            cm.npc_ChangeController(1530633, "oid=40074981", 2060, 12, 47, 2010, 2110, 1, false, false);
                                            cm.npc_SetSpecialAction("oid=40074981", "summon", 0, 0);
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#呼，我来搬一下这个水泥袋吧？", 37, 1530621, false, true);
                                              cm.effect_Voice("Voice2.img/Friends/CH6_04/2", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=40068771"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=40068772"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=40068774"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=40068773"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam");
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_setForceFlip("oid=40068775", -1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("像那样就行，你来试试吧。", 37, 1530639, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#我，我会搬好的，你就看着吧！", 37, 1530604, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                        cm.npc_LeaveField("oid=40068772");
                                                        cm.npc_LeaveField("oid=40068772");
                                                        cm.npc_ChangeController(1530634, "oid=40077846", 2160, 12, 47, 2110, 2210, 1, false, false);
                                                        cm.npc_SetSpecialAction("oid=40077846", "summon", 0, 0);
                                                        cm.npc_setForceFlip("oid=40068775", 1);
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 2060, 70);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                          cm.sendNormalTalk_Bottom("等下，这女孩子的力量？", 37, 1530639, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=40074981", 1);
                                                            cm.npc_SetSpecialAction("oid=40077846", "fall", -1, 1);
                                                            cm.sendNormalTalk_Bottom("哦？！哦！哦？！哦！！！", 37, 1530639, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_PushScaleInfo(1500, 2500, 1500, 2160, 70);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_QTE(1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 3000, 0, 2160, 70);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion1", 100);
                                                                    cm.npc_SetSpecialAction("oid=40077846", "fall2", -1, 1);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/spinOff/pung", "oid=40068772"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("哼！哼！快走，你们这些家伙！", 37, 1530639, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#你们就不要妨碍我了，回家吧。", 37, 1530621, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#喂，你这混蛋！你为什么总是出现在我们要兼职的地方！", 37, 1530604, true, true);
                                                                          } else if (status === V++) {
                                                                            cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                                            cm.forceStartQuest(33514, '');
                                                                            cm.forceCompleteQuest(33514);
                                                                            cm.dispose();
                                                                            cm.warp(330002613, 2);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;