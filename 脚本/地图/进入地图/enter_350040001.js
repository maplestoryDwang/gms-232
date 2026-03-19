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
      cm.setAmbience("Ambience.img/gravity", 100, 60);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 805, -100);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
                cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/oh");
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("什么人？", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_ForcedFlip(-1);
                      cm.inGameDirectionEvent_PushScaleInfo(8000, 2000, 8000, 350, 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("出来。\r\n我知道你一直跟在我后面。", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("……如果你不出来，那我就走了。", 57, 0, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.playSoundEffDirectly("Ambience.img/gravity");
                                  cm.fieldEffect_PlayBGM("Bgm18.img/DrillHall", 0, 0);
                                  cm.npc_ChangeController(1540502, "oid=22198233", 287, 2, 30, 237, 337, 0, true, 1000, false);
                                  cm.npc_SetSpecialAction("oid=22198233", "summon", 0, 0);
                                  cm.npc_ChangeController(1540503, "oid=22198234", 207, 2, 31, 157, 257, 0, true, 1000, false);
                                  cm.npc_SetSpecialAction("oid=22198234", "summon", 0, 0);
                                  cm.npc_ChangeController(1540504, "oid=22198235", 107, 2, 4, 57, 157, 0, true, 1000, false);
                                  cm.npc_SetSpecialAction("oid=22198235", "summon", 0, 0);
                                  cm.npc_SetSpecialAction("oid=22198233", "spin", 0, 1);
                                  cm.npc_SetSpecialAction("oid=22198234", "spin", 0, 1);
                                  cm.npc_SetSpecialAction("oid=22198235", "spin", 0, 1);
                                  cm.fieldEffect_PlayFieldSound("Sound/Weapon.img/spear/Attack", 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 800, 0);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_LeaveField("oid=22198233");
                                      cm.npc_LeaveField("oid=22198233");
                                      cm.npc_LeaveField("oid=22198234");
                                      cm.npc_LeaveField("oid=22198234");
                                      cm.npc_LeaveField("oid=22198235");
                                      cm.npc_LeaveField("oid=22198235");
                                      cm.npc_ChangeController(1540502, "oid=22198315", 460, 2, 1, 410, 510, 0, true, 0, false);
                                      cm.npc_SetSpecialAction("oid=22198315", 'summon', 0, 0);
                                      cm.npc_ChangeController(1540503, "oid=22198316", 380, 2, 23, 330, 430, 0, true, 0, false);
                                      cm.npc_SetSpecialAction("oid=22198316", "summon", 0, 0);
                                      cm.npc_ChangeController(1540504, "oid=22198317", 280, 2, 30, 230, 330, 0, true, 0, false);
                                      cm.npc_SetSpecialAction("oid=22198317", "summon", 0, 0);
                                      cm.npc_SetForceMove("oid=22198315", 1, 200, 200);
                                      cm.npc_SetForceMove("oid=22198317", 1, 200, 200);
                                      cm.npc_SetForceMove("oid=22198316", 1, 200, 200);
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#啦啦！我登场啦！！", 37, 1540503, false, true);
                                        cm.effect_Voice("Voice3.img/BlackHeaven/3_8/1", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/oh");
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("你们……怎么会在这里？", 57, 0, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#好久不见，队长！", 37, 1540504, true, true);
                                              cm.effect_Voice("Voice3.img/BlackHeaven/3_8/2", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#嘻嘻！你要丢下我们，自己去哪里啊，队长？", 37, 1540503, true, true);
                                                cm.effect_Voice("Voice3.img/BlackHeaven/3_8/3", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#队长，这是#b希纳斯#k女皇给你的信。", 37, 1540502, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetForceMove("oid=22198315", 1, 30, 200);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect2.img/blackHeaven/cygnus2", 0, 1500, 200, -40, 5, 4, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_Monologue("#fs24#\r\n\r\n\r\n\r\n\r\n我仍然相信你. \r\n\r\n请和我在一起. \r\n\r\n直到在这场战争中取得胜利!", 1);
                                                          cm.effect_Voice("Voice3.img/BlackHeaven/cyg/20", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1000, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#希纳斯女皇仍然相信队长你呢。", 37, 1540502, false, true);
                                                              cm.effect_Voice("Voice3.img/BlackHeaven/3_8/4", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#你肯定很感动吧？你可不要哭啊，队长！嘻嘻嘻！", 37, 1540503, true, true);
                                                                cm.effect_Voice("Voice3.img/BlackHeaven/3_8/5", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_Monologue("#fs34#\r\n\r\n\r\n\r\n\r\n-ACT 4-\r\n#fs28#反击之信号弹", 1);
                                                                    cm.effect_Voice("Field.img/flowervioleta/wink", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else if (status === V++) {
                                                                      cm.dispose();
                                                                      cm.warp(350040002, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;