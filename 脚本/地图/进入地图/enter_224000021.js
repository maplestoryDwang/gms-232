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
      cm.npc_ChangeController(2074100, "oid=2594617", -927, -343, 72, -977, -877, 1, true, 500, false);
      cm.npc_SetSpecialAction("oid=2594617", "summon", 0, 0);
      cm.npc_ChangeController(2074110, "oid=2594618", -749, -352, 74, -799, -699, 1, true, 500, false);
      cm.npc_SetSpecialAction("oid=2594618", 'summon', 0, 0);
      cm.npc_ChangeController(2074111, "oid=2594619", -672, -340, 77, -722, -622, 1, false, 500, false);
      cm.npc_SetSpecialAction("oid=2594619", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_setForceFlip("oid=2594617", 1);
      cm.npc_setForceFlip("oid=2594618", 1);
      cm.inGameDirectionEvent_AskAnswerTime(250);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("印塘水在哪儿啊？", 37, 2074110, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom('我不能说……', 37, 2074111, true, true);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(250);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(200);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/punch", 100);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('额！啊啊！', 37, 2074111, false, true);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(600);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(700);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("你要是不开口，就打你十下。", 37, 2074110, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom('额额……', 37, 2074111, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("……#g在乌山峡谷最下面的森林之间#k，藏着一条通往印塘水的小道。", 37, 2074111, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("就算你们去了也无济于事。\r\n我们大~哥~是不会轻饶了你们的~", 37, 2074111, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("……我", 37, 2074110, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("我吧，不知道你们到底是谁，\r\n也不知道你们为什么要带走青儿。", 37, 2074110, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("如果你们是想要供米，很抱歉我没有米。\r\n只不过，我就算闭上眼睛也能把你们这些家伙全都收拾了。", 37, 2074110, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("如果现在就放了青儿，那这件事就到你为止。\r\n可如果你不放，", 37, 2074110, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("我会找出你们所有人，\r\n我会全部找到，全都收拾一遍的。", 37, 2074110, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("…………", 37, 2074111, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom('祝~你~好运！', 37, 2074111, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("就算你用中文骂我我也都听得懂！", 37, 2074110, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("哦？不是，这不是那个意思……", 37, 2074111, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/punch", 100);
                                                    cm.sendNormalTalk_Bottom("额！额！啊！啊！\r\n别……别再打我了……", 37, 2074111, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(700);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_setForceFlip("oid=2594618", -1);
                                                          cm.sendNormalTalk_Bottom("那，尼姑大人，你能带我去那个叫#b印塘水#k的地方吗？\r\n他说是#b乌山峡谷#k最下面的森林之间的小路。", 37, 2074110, false, true);
                                                        } else if (status === V++) {
                                                          cm.updateInfoQuest(30409, "gExpCheck=1");
                                                          cm.gainExp(142059);
                                                          cm.forceCompleteQuest(30409);
                                                          cm.forceStartQuest(30410, '');
                                                          cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                          cm.dispose();
                                                          cm.warp(224000120, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;