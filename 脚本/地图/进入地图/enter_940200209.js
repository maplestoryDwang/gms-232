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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -393, 10);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_同时移动镜头和人(2, 400);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(2500, 2000, 2500, -230, 100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b(没有看到树精灵，最好还是回去吧。)#k", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#b(……额，可是不知为何，总觉得浑身使不上力气……)#k", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(4);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction19.img/effect/arcana/4", 0, 900, 0, -80, 12, 4, 1);
                        cm.onTeleport(0, 3, cm.getPlayer().getId(), 715, 8);
                        cm.inGameDirectionEvent_MoveAction(4);
                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 710, 100);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(3003357, "oid=1831090", 940, 25, 22, 890, 990, 1, true, false);
                          cm.npc_SetSpecialAction("oid=1831090", "summon", 0, 0);
                          cm.npc_ChangeController(3003357, "oid=1831091", 500, 25, 13, 450, 550, 0, true, false);
                          cm.npc_SetSpecialAction("oid=1831091", "summon", 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#抓住了，果然是个异邦人。", 37, 3003309, false, true);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 100, 0, 0, 0, 0, 0);
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1400);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#那时候那个……", 37, 3003309, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#赶紧把我们的同伴给放了。", 37, 3003309, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=1831090", -1, 30, 50);
                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#你到底打算将精灵们带到哪里去？", 37, 3003309, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=1831091", 1, 30, 50);
                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#我还看见你带走了我们的朋友，小不点精灵。", 37, 3003309, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#赶紧把他还回来！要不然！", 37, 3003309, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#要不然！", 37, 3003309, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#b(额……不可以，不知为何，浑身使不上力气，就连声音也发不出来了……)#k", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#哎！", 37, 3003309, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face4#朋友们，不可以！", 37, 3003301, true, true);
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
                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1831090"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1831091"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_ChangeController(3003350, "oid=1831100", 614, -200, 2, 564, 664, 1, true, false);
                                                                cm.npc_SetSpecialAction("oid=1831100", "summon", 0, 0);
                                                                cm.npc_SetForceMove("oid=1831100", 1, 30, 50);
                                                                cm.inGameDirectionEvent_AskAnswerTime(600);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.setNpcSpecialActionReset("oid=1831100");
                                                                  cm.npc_SetSpecialAction("oid=1831100", 'boom', 2200, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face4##b#ho##k，趁着这个机会赶紧逃！", 37, 3003301, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                      } else if (status === V++) {
                                                                        cm.dispose();
                                                                        cm.warp(450005200, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;