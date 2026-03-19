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
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1284, 290);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 1284, 329);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(3000);
        cm.effect_Text(["#fn黑体##fs18#第二天#fs15##fn黑体#童话村"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#b(背包太重了，先放下来吧。)", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.npc_ChangeController(2074101, "oid=2585331", 1243, 314, 583, 1193, 1293, 1, false, 0, false);
              cm.npc_SetSpecialAction("oid=2585331", "summon", 0, 0);
              cm.fieldEffect_PlayFieldSound("Aran/down", 100);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b(背包里传来了碰撞声)", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#啊！", 37, 2074100, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_ForcedFlip(-1);
                    cm.sendNormalTalk_Bottom('？！', 57, 0, true, true);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/what");
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(2074100, "oid=2585334", 1188, 314, 549, 1138, 1238, 0, true, 500, false);
                        cm.npc_SetSpecialAction("oid=2585334", "summon", 0, 0);
                        cm.npc_LeaveField("oid=2585331");
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1400);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#啊呀！啊……我的尾骨……", 37, 2074100, false, true);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=2585334", "ang", -1, 1);
                              cm.sendNormalTalk_Bottom("#face5#呃……如果尾骨受了伤，一辈子都好不了的！\r\n勇士连这个都不知道吗？", 37, 2074100, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam");
                              } else {
                                if (status === V++) {
                                  cm.setNpcSpecialActionReset("oid=2585334");
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#那那个……我是……嗯。", 37, 2074100, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#锵锵！吓了一跳吧？\r\n威兹大叔的惊喜礼物！", 37, 2074100, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1##b#fs25#小#fs20#~可爱~ #fs25#小#fs20#~可爱~ #g#fs25#小↗ ~可↑ ~爱~~！#k", 37, 2074100, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 120, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_ScreenMsg("Map/Effect2.img/flowervioleta/bird2");
                                            cm.sendNormalTalk_Bottom("#face1#……", 37, 2074100, false, true);
                                            cm.effect_PlayMusic("Field.img/flowervioleta/bird");
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("…………", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                  cm.sendNormalTalk_Bottom("#face3#嘤~拜托了，请不要把我送回去，嗯？\r\n反正如果回去拿书要花很长时间的，对吧？", 37, 2074100, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face3#有关这里的事情我全都知道，我们去看看吧？\r\n嗯，兴夫和乐夫，兴夫的脸上被饭勺……", 37, 2074100, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("呜呜呜……", 37, 2074134, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("……？", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face2#什么声音？\r\n#g好像是从右边传来的？#k", 37, 2074100, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.forceStartQuest(30910, '1');
                                                            cm.updateInfoQuest(30401, "gExpCheck=1;skip=1");
                                                            cm.gainExp(142059);
                                                            cm.forceStartQuest(30401, '');
                                                            cm.forceCompleteQuest(30401);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                          } else if (status === V++) {
                                                            cm.dispose();
                                                            cm.warp(224000000, 19, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;