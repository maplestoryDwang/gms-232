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
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -405, -25);
      cm.npc_ChangeController(3003404, "oid=2010798", -130, 0, 9, -180, -80, 1, true, false);
      cm.npc_SetSpecialAction("oid=2010798", 'summon', 0, 0);
      cm.npc_ChangeController(3003406, "oid=2010799", -45, 0, 9, -95, 5, 1, true, false);
      cm.npc_SetSpecialAction("oid=2010799", "summon", 0, 0);
      cm.Hidden_background('magic_pre', 1, 1, 0, 0);
      cm.Hidden_background("magic_start", 1, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -250, 20);
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
            cm.sendNormalTalk_Bottom("#face0#有件事要切记。\r\n#r#fs18#仪式一旦开始#fs16##k，\r\n无论发生任何事都无法回头了。", 37, 3003404, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#塔纳，我不会帮你停止身体的崩溃的。", 37, 3003404, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#消灭吗？", 37, 3003400, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#如果仪式成功当然会那样。", 37, 3003404, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#一旦失败，你的身体会马上恢复……\r\n崩溃和重组会一直反复循环。", 37, 3003404, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#最终会陷入#r#fs18#无尽的痛苦#fs16##k之中。", 37, 3003404, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#好吧。", 37, 3003400, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#所以绝对不能掉以轻心。福祸往往就在旦夕之间。", 37, 3003404, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face10#不会的。一切会顺利的。", 37, 3003406, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face9#挂梯云……因为江这个大盗永远有二手准备。", 37, 3003406, true, true);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2000, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(2300);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_Monologue("阿卡伊勒的话都是真的。", 0);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_Monologue("我毕竟是个时间神官，拥有某种程度上的预知能力。", 0);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_Monologue("虽然无法展望未来本身……但是可以看到构成未来的每个零件。", 0);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_Monologue('', 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_Monologue("#fnBatang##r―――――#fn黑体#「塔纳、江、海加顿，以及阿卡伊勒。」#k", 0);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_Monologue('', 0);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_Monologue("他们想要创造的是不存在悲剧的未来。", 0);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue('', 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom('……', 57, 0, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("事实说明#b夏伊#k所预示的根本是错的。", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("可是……因为什么呢？到底错过了什么？", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.setNumberForQuestInfo(34266, "enter", 1);
                                                        cm.setNumberForQuestInfo(34266, 'book', 1);
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
                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                            } else if (status === V++) {
                                                              cm.setStandAloneMode(false);
                                                              cm.dispose();
                                                              cm.warp(450006240, 4, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;