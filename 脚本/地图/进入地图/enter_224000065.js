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
      cm.npc_ChangeController(2074151, "oid=1942461", -990, -137, 115, -1040, -940, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1942461", "summon", 0, 0);
      cm.npc_ChangeController(2074100, "oid=1942462", -795, -68, 110, -845, -745, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1942462", "summon", 0, 0);
      cm.npc_ChangeController(2074105, "oid=1942463", -657, -64, 107, -707, -607, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1942463", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.sendNormalTalk_Bottom("这……我怎么知道它会以为我的话是那个意思……", 37, 2074105, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("但是，我绝对没有恶意啊。", 37, 2074105, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("你想想它多喜欢跟着我啊。", 37, 2074105, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face3#终究都是你们人类。", 37, 2074151, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face3#你们明明对尾狐都不了解，还指责尾狐是个怪物！", 37, 2074151, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#还让想要变成人类的尾狐上当受骗，并因此至死！", 37, 2074151, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("你说#g九尾狐已经死了#k？\r\n这到底是什么意思！", 37, 2074105, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face4#就算是到现在……\r\n对于尾狐为什么要那么做，又变成什么样了，你们人类根本就毫不关心。", 37, 2074151, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_ForcedFlip(1);
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#b(是村里人上来的声音吗？)", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom('现在火已经都熄灭了！', 37, 2074104, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom('嗯，这全多亏了你！', 37, 2074158, true, true);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.npc_ChangeController(2074104, "oid=1942494", -600, -33, 107, -650, -550, 1, false, 0, false);
                                  cm.npc_SetSpecialAction("oid=1942494", "summon", 0, 0);
                                  cm.npc_ChangeController(2074107, "oid=1942495", -547, -19, 105, -597, -497, 1, true, 0, false);
                                  cm.npc_SetSpecialAction("oid=1942495", 'summon', 0, 0);
                                  cm.npc_ChangeController(2074150, "oid=1942496", -499, -19, 105, -549, -449, 1, false, 0, false);
                                  cm.npc_SetSpecialAction("oid=1942496", "summon", 0, 0);
                                  cm.npc_setForceFlip("oid=1942462", 1);
                                  cm.npc_setForceFlip("oid=1942463", 1);
                                  cm.inGameDirectionEvent_ForcedFlip(1);
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("朴大爷，火已经都熄灭了！\r\n成功……哎？", 37, 2074104, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_LeaveField("oid=1942494");
                                        cm.npc_ChangeController(2074136, "oid=1942505", -600, -33, 107, -650, -550, 1, false, 0, false);
                                        cm.npc_SetSpecialAction("oid=1942505", "summon", 0, 0);
                                        cm.sendNormalTalk_Bottom("啊？你是？", 37, 2074136, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("哎哟……那不是鬼怪嘛？", 37, 2074150, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom('额啊！是鬼怪！', 37, 2074107, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=1942462", -1);
                                              cm.npc_setForceFlip("oid=1942463", -1);
                                              cm.inGameDirectionEvent_ForcedFlip(-1);
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1942505"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1942495"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1942496"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1942462"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1942463"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                              cm.npc_SetSpecialAction("oid=1942461", 'cry', -1, 1);
                                              cm.sendNormalTalk_Bottom("#face5#呜呜呜！！！", 37, 2074151, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face6#你们……没有任何人关心。", 37, 2074151, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face6#九尾狐，九尾狐是因你们而死！呜呜呜……", 37, 2074151, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("额啊！鬼怪在哭！", 37, 2074107, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("…………", 37, 2074105, true, true);
                                                      cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 2074105, cm.getPlayer().getId());
                                                    } else {
                                                      if (status === V++) {
                                                        cm.updateInfoQuest(30452, "gExpCheck=1");
                                                        cm.gainExp(198883);
                                                        cm.forceStartQuest(30452, '');
                                                        cm.forceCompleteQuest(30452);
                                                        cm.inGameDirectionEvent_AskAnswerTime(400);
                                                        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                      } else if (status === V++) {
                                                        cm.dispose();
                                                        cm.warp(224000092, 1, true);
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