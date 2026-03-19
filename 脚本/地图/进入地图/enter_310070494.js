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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(2155114, "oid=42503649", 1200, 50, 12, 1150, 1250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=42503649", "summon", 0, 0);
      cm.npc_ChangeController(2155113, "oid=42503650", 2395, -242, 28, 2345, 2445, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=42503650", "summon", 0, 0);
      cm.npc_ChangeController(2155115, "oid=42503651", 2250, 50, 8, 2200, 2300, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=42503651", "summon", 0, 0);
      cm.npc_ChangeController(2155115, "oid=42503652", 2200, 50, 8, 2150, 2250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=42503652", "summon", 0, 0);
      cm.npc_ChangeController(2155115, "oid=42503653", 2150, 50, 8, 2100, 2200, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=42503653", 'summon', 0, 0);
      cm.npc_ChangeController(2155115, "oid=42503654", 2100, 50, 9, 2050, 2150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=42503654", "summon", 0, 0);
      cm.npc_ChangeController(2155115, "oid=42503655", 2050, 50, 9, 2000, 2100, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=42503655", "summon", 0, 0);
      cm.npc_ChangeController(2155115, "oid=42503656", 2000, 50, 9, 1950, 2050, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=42503656", 'summon', 0, 0);
      cm.npc_ChangeController(2155115, "oid=42503657", 1950, 50, 9, 1900, 2000, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=42503657", "summon", 0, 0);
      cm.npc_ChangeController(2155115, "oid=42503658", 1900, 50, 9, 1850, 1950, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=42503658", "summon", 0, 0);
      cm.npc_ChangeController(2155115, "oid=42503659", 1850, 50, 9, 1800, 1900, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=42503659", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1200, 0, 2400, -28);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("嗬，嗬，嗬。", 37, 2155114, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1200, 2500, 2100, -28);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=42503649", 1, 520, 250);
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
              cm.inGameDirectionEvent_AskAnswerTime(2500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('该死…', 37, 2155114, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("现在进来的智能机器人，请说说你迟到的原因。", 37, 2155113, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=42503649"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.sendNormalTalk_Bottom("啊…我有些事情。", 37, 2155114, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("你知道你所走的路是#b#fs18#前往集合场所最远的路#k#fs16#吗？", 37, 2155113, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("…嗯。没错。", 37, 2155114, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom('请说说你有什么事情。', 37, 2155113, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                            cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 2155114, null, cm.getPlayer().getId());
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=42503649"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.sendNormalTalk_Bottom("…站岗！我站完岗后才来的。", 37, 2155114, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("为什么东西站岗？", 37, 2155113, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("非常…非常重要的东西。", 37, 2155114, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("是与主机相关的东西吗？", 37, 2155113, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("嗯？嗯，没错。", 37, 2155114, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("请在今天之内登记相关记录。\r\n那，从现在开始进行工作登记。", 37, 2155113, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=42503649"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.sendNormalTalk_Bottom("(呼…)", 37, 2155114, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                              cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                              cm.inGameDirectionEvent_Monologue("不过, 登记的事情并没有成功. ", 1);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_ProcessOnOffLayer("back", "Map/Effect2.img/FieldgraveStory/illust3", 0, 500, 0, 0, 12, 4, 1, -1, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_Monologue("因为那天, 正是黑色天堂坠落的日子. ", 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_ProcessOnOffLayer("back", '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else if (status === V++) {
                                                    cm.warp(310070495, 0, false);
                                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                                    cm.npc_LeaveField("oid=42503649");
                                                    cm.npc_LeaveField("oid=42503649");
                                                    cm.npc_LeaveField("oid=42503650");
                                                    cm.npc_LeaveField("oid=42503650");
                                                    cm.npc_LeaveField("oid=42503651");
                                                    cm.npc_LeaveField("oid=42503651");
                                                    cm.npc_LeaveField("oid=42503652");
                                                    cm.npc_LeaveField("oid=42503652");
                                                    cm.npc_LeaveField("oid=42503653");
                                                    cm.npc_LeaveField("oid=42503653");
                                                    cm.npc_LeaveField("oid=42503654");
                                                    cm.npc_LeaveField("oid=42503654");
                                                    cm.npc_LeaveField("oid=42503655");
                                                    cm.npc_LeaveField("oid=42503655");
                                                    cm.npc_LeaveField("oid=42503656");
                                                    cm.npc_LeaveField("oid=42503656");
                                                    cm.npc_LeaveField("oid=42503657");
                                                    cm.npc_LeaveField("oid=42503657");
                                                    cm.npc_LeaveField("oid=42503658");
                                                    cm.npc_LeaveField("oid=42503658");
                                                    cm.npc_LeaveField("oid=42503659");
                                                    cm.npc_LeaveField("oid=42503659");
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
  }
}