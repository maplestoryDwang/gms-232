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
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -429, -20);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, -270, 0);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3003408, "oid=2005955", 46, -15, 9, -4, 96, 1, true, false);
          cm.npc_SetSpecialAction("oid=2005955", "summon", 0, 0);
          cm.npc_ChangeController(3003404, "oid=2005956", -105, -15, 9, -155, -55, 1, true, false);
          cm.npc_SetSpecialAction("oid=2005956", "summon", 0, 0);
          cm.npc_ChangeController(3003401, "oid=2005957", -268, -68, 4, -318, -218, 1, false, false);
          cm.npc_SetSpecialAction("oid=2005957", "summon", 0, 0);
          cm.npc_ChangeController(3003408, "oid=2005958", -575, -15, 11, -625, -525, 0, true, false);
          cm.npc_SetSpecialAction("oid=2005958", "summon", 0, 0);
          cm.npc_ChangeController(3003408, "oid=2005959", -655, -15, 11, -705, -605, 0, true, false);
          cm.npc_SetSpecialAction("oid=2005959", "summon", 0, 0);
          cm.npc_ChangeController(3003408, "oid=2005960", 125, -15, 12, 75, 175, 1, true, false);
          cm.npc_SetSpecialAction("oid=2005960", "summon", 0, 0);
          cm.inGameDirectionEvent_ForcedFlip(1);
          cm.npc_SetSpecialAction("oid=2005957", "special2", -1, 1);
          cm.fieldEffect_PlayBGM("SoundEff.img/morass/magic_ab", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.userSetFieldFloating(940204004, 1, 1, 1);
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#排斥反应导致35%的身体受损。", 37, 3003408, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#重生率100%。所有部位都恢复了。", 37, 3003408, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#暂时算成功了。", 37, 3003404, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#恭喜你，所长。", 37, 3003408, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("(阿卡伊勒……)", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("(那个难道是#fs18##r塔纳的记忆制造出的幻影#k#fs16#？)", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("(难道掉入沼泽#fs18##r失去自我的是真正的阿卡伊勒？#k)", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#我再帮你提高输出。", 37, 3003408, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#收手吧，再继续下去只会给实验体更大的压力。", 37, 3003404, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#嗯？啊，知道了。", 37, 3003408, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#道路已经打开了……\r\n剩下的就是找到消除#fs18##r排斥反应#k#fs16#的办法了。", 37, 3003404, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#今天就到这吧。大家辛苦了。", 37, 3003404, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.Npc_Fadeout("oid=2005956", 0, 1500);
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_LeaveField("oid=2005956");
                                        cm.sendNormalTalk_Bottom("#face0#大神官果然不同凡响。没想到研究获得这么大的进展。", 37, 3003408, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#照这个势头，说不定#r#fs18#仪式#k#fs16#真能成功。", 37, 3003408, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom('仪式？', 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#大家辛苦了。不如开个庆祝party吧。", 37, 3003408, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face7#……", 37, 3003400, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                        cm.npc_LeaveField("oid=2005957");
                                                        cm.npc_LeaveField("oid=2005955");
                                                        cm.npc_LeaveField("oid=2005958");
                                                        cm.npc_LeaveField("oid=2005959");
                                                        cm.npc_LeaveField("oid=2005960");
                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                      } else if (status === V++) {
                                                        cm.forceCompleteQuest(34259);
                                                        cm.dispose();
                                                        cm.warp(450006240, 0, true);
                                                        cm.setStandAloneMode(false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;