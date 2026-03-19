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
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -1200, 70);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3003350, "oid=1878557", -662, 25, 6, -712, -612, 0, true, false);
        cm.npc_SetSpecialAction("oid=1878557", 'summon', 0, 0);
        cm.inGameDirectionEvent_MoveAction(2);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_MoveAction(1);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_ForcedFlip(-1);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_ForcedFlip(1);
                    cm.sendNormalTalk_Bottom("哎哟，那团光在这里断开了呢……那道光究竟是怎么回事呢……", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.setNpcSpecialActionReset("oid=1878557");
                      cm.npc_SetSpecialAction("oid=1878557", "cry", -1, 0);
                      cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, -660, 70);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(2);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_MoveAction(0);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face4#嘤嘤，嘤嘤……", 37, 3003301, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#b(有个小小的闪着光的东西在哭泣……好像在自言自语着什么，出什么事了？走过去看一看吧。)#k", 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_MoveAction(2);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_MoveAction(0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction19.img/effect/arcana/0", 0, 900, 0, -80, 12, 4, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(900);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face4#精灵之树……树在哭泣……", 37, 3003301, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face5#呜呜，精灵之树，不要再病着了，早日恢复你原来的样子吧……", 37, 3003301, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 300, 0, 0, 0, 0, 0);
                                              cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction19.img/effect/arcana_cry/0", 0, 900, 0, -80, 12, 4, 1);
                                              cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction19.img/effect/arcana_cry/1", 0, 900, 0, -80, 12, 4, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(600);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face4#这片森林原本是那么的美丽……呜呜，怎么会发生这种事呢？", 37, 3003301, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face4#那些变得残暴的精灵，逐渐枯萎的森林……呜呜，实在是太可怕了……", 37, 3003301, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 300, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 300, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(600);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#b(精灵之树？残暴的精灵？他到底在说什么呢？走过去试着搭讪一下……)#k", 57, 0, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_MoveAction(2);
                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_MoveAction(0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1878557"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                cm.npc_setForceFlip("oid=1878557", -1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face4#打嗝，呜呜……", 37, 3003301, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_MoveAction(2);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_MoveAction(0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("你，你不用害怕，我不会伤害你的，我不过是因为那个光之漩涡……", 57, 0, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face4#不是这样的，你，你看看你后面！", 37, 3003301, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_ChangeController(3003370, "oid=1878561", -1400, 25, 8, -1450, -1350, 0, true, false);
                                                                            cm.npc_SetSpecialAction("oid=1878561", 'summon', 0, 0);
                                                                            cm.npc_ChangeController(3003370, "oid=1878562", -1310, 25, 8, -1360, -1260, 0, true, false);
                                                                            cm.npc_SetSpecialAction("oid=1878562", "summon", 0, 0);
                                                                            cm.npc_ChangeController(3003370, "oid=1878563", -1220, 25, 7, -1270, -1170, 0, true, false);
                                                                            cm.npc_SetSpecialAction("oid=1878563", 'summon', 0, 0);
                                                                            cm.npc_ChangeController(3003370, "oid=1878564", -1130, 25, 7, -1180, -1080, 0, true, false);
                                                                            cm.npc_SetSpecialAction("oid=1878564", "summon", 0, 0);
                                                                            cm.npc_ChangeController(3003370, "oid=1878565", -1040, 25, 7, -1090, -990, 0, true, false);
                                                                            cm.npc_SetSpecialAction("oid=1878565", "summon", 0, 0);
                                                                            cm.npc_ChangeController(3003370, "oid=1878566", -950, 25, 6, -1000, -900, 0, true, false);
                                                                            cm.npc_SetSpecialAction("oid=1878566", 'summon', 0, 0);
                                                                            cm.npc_SetSpecialAction("oid=1878561", "stand2", -1, 0);
                                                                            cm.npc_SetSpecialAction("oid=1878562", 'stand2', -1, 0);
                                                                            cm.npc_SetSpecialAction("oid=1878563", "stand2", -1, 0);
                                                                            cm.npc_SetSpecialAction("oid=1878564", 'stand2', -1, 0);
                                                                            cm.npc_SetSpecialAction("oid=1878565", 'stand2', -1, 0);
                                                                            cm.npc_SetSpecialAction("oid=1878566", 'stand2', -1, 0);
                                                                            cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -1000, 70);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                              cm.inGameDirectionEvent_MoveAction(1);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_MoveAction(0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_PushScaleInfo(500, 1000, 500, -900, -80);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.setNpcSpecialActionReset("oid=1878561");
                                                                                      cm.setNpcSpecialActionReset("oid=1878562");
                                                                                      cm.setNpcSpecialActionReset("oid=1878563");
                                                                                      cm.setNpcSpecialActionReset("oid=1878564");
                                                                                      cm.setNpcSpecialActionReset("oid=1878565");
                                                                                      cm.setNpcSpecialActionReset("oid=1878566");
                                                                                      cm.npc_SetSpecialAction("oid=1878561", "regen", 1350, 0);
                                                                                      cm.npc_SetSpecialAction("oid=1878562", "regen", 1350, 0);
                                                                                      cm.npc_SetSpecialAction("oid=1878563", "regen", 1350, 0);
                                                                                      cm.npc_SetSpecialAction("oid=1878564", 'regen', 1350, 0);
                                                                                      cm.npc_SetSpecialAction("oid=1878565", "regen", 1350, 0);
                                                                                      cm.npc_SetSpecialAction("oid=1878566", "regen", 1350, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.setNpcSpecialActionReset("oid=1878561");
                                                                                        cm.setNpcSpecialActionReset("oid=1878562");
                                                                                        cm.setNpcSpecialActionReset("oid=1878563");
                                                                                        cm.setNpcSpecialActionReset("oid=1878564");
                                                                                        cm.setNpcSpecialActionReset("oid=1878565");
                                                                                        cm.setNpcSpecialActionReset("oid=1878566");
                                                                                        cm.npc_SetSpecialAction("oid=1878561", 'stand', -1, 0);
                                                                                        cm.npc_SetSpecialAction("oid=1878562", "stand", -1, 0);
                                                                                        cm.npc_SetSpecialAction("oid=1878563", "stand", -1, 0);
                                                                                        cm.npc_SetSpecialAction("oid=1878564", "stand", -1, 0);
                                                                                        cm.npc_SetSpecialAction("oid=1878565", "stand", -1, 0);
                                                                                        cm.npc_SetSpecialAction("oid=1878566", 'stand', -1, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#b(残暴的精灵出现，并试图威胁小不点精灵，得赶紧去教训一下才好。)#k", 57, 0, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.playerMessage(5, "消灭突然出现的残暴的精灵，拯救小不点精灵。");
                                                                                            cm.dispose();
                                                                                            var O = cm.getEventManager("阿尔卡那_剧情_战斗1");
                                                                                            O.startInstance(cm.getPlayer(), cm.getMap());
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