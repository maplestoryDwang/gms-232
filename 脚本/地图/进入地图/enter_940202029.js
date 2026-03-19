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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3001372, "oid=639977", 800, -1, 17, 750, 850, 0, true, false);
      cm.npc_SetSpecialAction("oid=639977", 'summon', 0, 0);
      cm.npc_ChangeController(3001372, "oid=639978", 700, -1, 14, 650, 750, 0, true, false);
      cm.npc_SetSpecialAction("oid=639978", "summon", 0, 0);
      cm.npc_ChangeController(3001372, "oid=639979", 600, -1, 15, 550, 650, 0, true, false);
      cm.npc_SetSpecialAction("oid=639979", "summon", 0, 0);
      cm.npc_ChangeController(3001372, "oid=639980", 500, -1, 12, 450, 550, 0, true, false);
      cm.npc_SetSpecialAction('oid=639980', "summon", 0, 0);
      cm.npc_ChangeController(3001309, "oid=639981", 900, 30, 16, 850, 950, 0, true, false);
      cm.npc_SetSpecialAction("oid=639981", "summon", 0, 0);
      cm.npc_ChangeController(3001301, "oid=639982", 1130, -40, 36, 1080, 1180, 1, true, false);
      cm.npc_SetSpecialAction("oid=639982", 'summon', 0, 0);
      cm.npc_ChangeController(3001302, "oid=639983", 1370, -40, 36, 1320, 1420, 1, true, false);
      cm.npc_SetSpecialAction('oid=639983', "summon", 0, 0);
      cm.npc_ChangeController(3001303, "oid=639984", 1260, -40, 36, 1210, 1310, 1, true, false);
      cm.npc_SetSpecialAction("oid=639984", 'summon', 0, 0);
      cm.npc_ChangeController(3001304, "oid=639985", 1220, 65, 27, 1170, 1270, 1, true, false);
      cm.npc_SetSpecialAction("oid=639985", 'summon', 0, 0);
      cm.npc_ChangeController(3001305, "oid=639986", 1310, 65, 28, 1260, 1360, 1, true, false);
      cm.npc_SetSpecialAction("oid=639986", 'summon', 0, 0);
      cm.npc_ChangeController(3001316, "oid=639987", 1650, 34, 35, 1600, 1700, 1, true, false);
      cm.npc_SetSpecialAction("oid=639987", "summon", 0, 0);
      cm.npc_ChangeController(3001315, "oid=639988", 1600, 50, 34, 1550, 1650, 1, true, false);
      cm.npc_SetSpecialAction("oid=639988", "summon", 0, 0);
      cm.npc_ChangeController(3001317, "oid=639989", 1710, 50, 34, 1660, 1760, 1, true, false);
      cm.npc_SetSpecialAction("oid=639989", "summon", 0, 0);
      cm.npc_ChangeController(3001318, "oid=639990", 1670, 65, 31, 1620, 1720, 1, true, false);
      cm.npc_SetSpecialAction("oid=639990", "summon", 0, 0);
      cm.npc_ChangeController(3001319, "oid=639991", 1750, 65, 21, 1700, 1800, 1, true, false);
      cm.npc_SetSpecialAction("oid=639991", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 1500, 65);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.sendNormalTalk_Bottom("#face0#到底什么事？", 37, 3001351, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#为什么大家……", 37, 3001351, true, true);
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
                cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 500, 1000, 65);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3#戴尔斯，你结果还是！", 37, 3001301, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#这都是你自找的，阿加特。\r\n如果当初你乖乖交出古代水晶，事情也不至于走到这一步。", 37, 3001309, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#阿加特，村庄已经毁了。卡尔丽也……", 37, 3001302, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#怎么会这样……", 37, 3001301, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#没什么可惋惜的。你们很快也会是这个下场。", 37, 3001309, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 500, 1820, 65);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.npc_ChangeController(3001372, "oid=640405", 1900, -1, 32, 1850, 1950, 1, true, false);
                                  cm.npc_SetSpecialAction('oid=640405', "summon", 0, 0);
                                  cm.npc_ChangeController(3001372, "oid=640406", 2000, -1, 23, 1950, 2050, 1, true, false);
                                  cm.npc_SetSpecialAction('oid=640406', "summon", 0, 0);
                                  cm.npc_ChangeController(3001372, "oid=640407", 2100, -1, 33, 2050, 2150, 1, true, false);
                                  cm.npc_SetSpecialAction('oid=640407', 'summon', 0, 0);
                                  cm.npc_ChangeController(3001372, "oid=640408", 2200, -1, 9, 2150, 2250, 1, true, false);
                                  cm.npc_SetSpecialAction("oid=640408", "summon", 0, 0);
                                  cm.npc_setForceFlip("oid=639987", 1);
                                  cm.npc_setForceFlip("oid=639988", 1);
                                  cm.npc_setForceFlip("oid=639989", 1);
                                  cm.npc_setForceFlip("oid=639990", 1);
                                  cm.npc_setForceFlip('oid=639991', 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(30);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=639987"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=639988"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", 'oid=639989'], [0, 0, -20, 1, 0, 1, 0, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=639990"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", 'oid=639991'], [0, 0, -20, 1, 0, 1, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("我们被包围了！！", 37, 3001318, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face3#学生赶快躲到水晶学院里去。这里有我们撑着！", 37, 3001301, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face9#啊，阿加特大人！我也要帮忙！！", 37, 3001351, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face3#伊利温，记得保护你的朋友们。", 37, 3001301, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#别担心，我稍后就到。", 37, 3001301, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#嗯……知道了！", 37, 3001351, true, true);
                                              } else if (status === V++) {
                                                cm.setStandAloneMode(false);
                                                cm.dispose();
                                                cm.warp(940202034, 0);
                                                cm.setInGameDirectionMode(false, true, false);
                                              } else {
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;