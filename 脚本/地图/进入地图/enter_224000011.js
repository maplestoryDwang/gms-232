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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 50, -99);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074104, "oid=2585163", 116, -135, 24, 66, 166, 0, false, 500, false);
        cm.npc_SetSpecialAction("oid=2585163", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_Monologue("如果做了好事, 就会流芳千古. \r\n而做了坏事, 就会遗臭万年……\r\n", 0);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("这是从很久以前就流传下来的话. \r\n", 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("如果做了坏事也没有受到惩罚, \r\n", 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("那可能, \r\n已经在接受惩罚了. ", 1);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                  cm.effect_Text(["#fn黑体##fs18#深夜#fs15##fn黑体#童话村附近的山中"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0]);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("咻，能有饭粒沾到脸上已经不错了。\r\n虽然被饭勺打的时候有点疼……", 37, 2074104, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#喂，你这么活着不觉得委屈吗？", 37, 2074103, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=2585163"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=2585163", -1);
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=2585163", 1);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=2585163", -1);
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.npc_setForceFlip("oid=2585163", 1);
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.npc_ChangeController(2074103, "oid=2585317", -26, -133, 25, -76, 24, 0, false, 500, false);
                                  cm.npc_SetSpecialAction("oid=2585317", "summon", 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=2585163", -1);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2585163"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                    cm.sendNormalTalk_Bottom("你，你是？为什么在这里？", 37, 2074104, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#我来帮你报仇吧。", 37, 2074103, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("等下，这是干什……\r\n呃呃呃呃！", 37, 2074136, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#……来吧，利用#r这个力量#k，尽情宣泄你心中的怨恨吧。", 37, 2074103, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else if (status === V++) {
                                              cm.dispose();
                                              cm.warp(224000012, 19, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;