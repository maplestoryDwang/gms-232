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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -361, -5);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(9062266, "oid=27805712", -540, -39, 6, -590, -490, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=27805712", "summon", 0, 0);
        cm.npc_ChangeController(9062253, "oid=27805713", -330, -39, 12, -380, -280, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=27805713", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#小鬼，你在这做什么！\r\n这里很危险，快点跑！", 37, 9062266, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#吓我一跳！啊……我逃不逃走和大叔你有什么关系！\r\n笨蛋！大叔比怪物可怕多了！", 37, 9062253, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#等等，你这话过分了哦！！", 37, 9062266, true, true, 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, -161, -5);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.userSetFieldFloating(993175412, 3, 3, 20);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.userSetFieldFloating(993175412, 0, 0, 0);
                        cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, -361, -5);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#嗬……#r怪物#k……！", 37, 9062253, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#愣着干嘛，还不快跑！！\r\n我会尽力缠住这些家伙的！", 37, 9062266, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#大叔你明明都不会打架！\r\n我也来帮你！", 37, 9062253, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#唉，这个小不点！你也帮不上什么忙！！\r\n快去村里，告诉大家，让他们抓紧时间躲起来！！！", 37, 9062266, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#大叔……！可是大叔你一个人……！", 37, 9062253, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#快去！！！！", 37, 9062266, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#……嗯！大叔，你一定要等我……\r\n我会找其他人来的！在那之前，一定要挺住……！ \r\n记住了吗？一定……要等我！！", 37, 9062253, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_LeaveField("oid=27805713");
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_LeaveField("oid=27805712");
                                            cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 0, -461, -5);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_ChangeController(9062258, "oid=27807354", -540, -39, 6, -590, -490, 0, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=27807354", "summon", 0, 0);
                                                cm.npc_SetSpecialAction("oid=27807354", 'special5', -1, 1);
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#数量……太多了……那个小鬼……现在该顺利……到村子里吧……？还有……不管怎么看……", 37, 9062266, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#我长得都比……这些怪物……和善……", 37, 9062266, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.setStandAloneMode(false);
                                                        cm.npc_LeaveField("oid=27807354");
                                                        cm.dispose();
                                                        cm.warp(993175413, 0, false);
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