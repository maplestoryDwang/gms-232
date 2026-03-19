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
      cm.npc_ChangeController(3005125, "oid=638302", 1696, 9, 15, 1646, 1746, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=638302', "summon", 0, 0);
      cm.Npc_Fadeout("oid=638302", 0, 10);
      cm.npc_ChangeController(3005126, "oid=638303", 1596, 9, 13, 1546, 1646, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=638303", "summon", 0, 0);
      cm.Npc_Fadeout("oid=638303", 0, 10);
      cm.npc_ChangeController(3005104, "oid=638304", 1911, 10, 11, 1861, 1961, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=638304", "summon", 0, 0);
      cm.Npc_Fadeout("oid=638304", 0, 10);
      cm.npc_ChangeController(3005104, "oid=638305", 2247, -315, 24, 2197, 2297, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=638305", "summon", 0, 0);
      cm.npc_ChangeController(3005117, "oid=638306", 2209, -380, 25, 2159, 2259, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=638306", "summon", 0, 0);
      cm.npcMove(3005117, 0, -50, 2000);
      cm.npc_ChangeController(3005118, 'oid=638307', 2280, -380, 23, 2230, 2330, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=638307", "summon", 0, 0);
      cm.npcMove(3005118, 0, -50, 2000);
      cm.npc_ChangeController(3005119, "oid=638308", 2175, -315, 26, 2125, 2225, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=638308", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 2164, -315);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("小鬼们，看那边！月亮高高挂了呢。", 56, 0, false, true, 1);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=638307", "jump", 1, 1);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction('oid=638308', "jump", 1, 1);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("看来你挺喜欢这里的，小鬼们看起来也都很开心！", 56, 0, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_ForcedFlip(-1);
                      cm.sendNormalTalk_Bottom("哎哟，有人靠近了，小鬼们，先别出声！", 56, 0, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("可不能像卡德娜那次一样让对方受惊，要悄悄地，悄悄地……", 56, 0, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.Npc_Fadeout("oid=638305", 0, 10);
                          cm.Npc_Fadeout('oid=638306', 0, 10);
                          cm.Npc_Fadeout("oid=638307", 0, 10);
                          cm.Npc_Fadeout("oid=638308", 0, 10);
                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 1832, -71);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.Npc_Fadeout('oid=638302', 255, 500);
                              cm.Npc_Fadeout('oid=638303', 255, 500);
                              cm.sendNormalTalk_Bottom("#face0#看那边，卡伊尔！狼牙说得没错，有冒险家！", 36, 3005126, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("你好，我叫啦啦！如果你不介意，可以让我用一下次元传送口吗？", 56, 0, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#倒也不是不可以，不过……", 36, 3005125, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#等一下，在那里这样活动会很危险的！", 36, 3005125, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_同时移动镜头和人(1, 8, 0);
                                      cm.inGameDirectionEvent_MoveAction(5);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Skill/16210.img/skill/162101012/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Skill/16210.img/skill/162101012/effect0"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.Npc_Fadeout("oid=638304", 255, 500);
                                          cm.npc_SetSpecialAction('oid=638304', "jump", 1, 1);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetSpecialAction("oid=638304", "stand", 1, 1);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.Npc_Fadeout("oid=638304", 0, 500);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#真厉害，你的能力可真惊人啊！刚刚那是什么啊？", 36, 3005126, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("它们叫元素灵，是一群帮我的朋友！", 56, 0, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#总之，幸好你没受伤。", 36, 3005125, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#如果你不介意，要一起吗？我可以为你带路。", 36, 3005125, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#狼牙在等着。", 36, 3005125, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                          } else if (status === V++) {
                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.setStandAloneMode(false);
                                                            cm.npc_LeaveField("oid=638302");
                                                            cm.npc_LeaveField("oid=638303");
                                                            cm.npc_LeaveField('oid=638304');
                                                            cm.npc_LeaveField("oid=638305");
                                                            cm.npc_LeaveField("oid=638306");
                                                            cm.npc_LeaveField("oid=638307");
                                                            cm.npc_LeaveField("oid=638308");
                                                            cm.dispose();
                                                            cm.warp(400000001, 0, false);
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