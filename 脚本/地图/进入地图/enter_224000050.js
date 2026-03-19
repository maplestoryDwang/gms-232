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
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -2294, -20);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074100, "oid=2606573", -2201, -74, 134, -2251, -2151, 1, true, 500, false);
        cm.npc_SetSpecialAction("oid=2606573", "summon", 0, 0);
        cm.npc_ChangeController(2074143, "oid=2606574", -2318, -74, 132, -2368, -2268, 0, false, 500, false);
        cm.npc_SetSpecialAction("oid=2606574", "summon", 0, 0);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.sendNormalTalk_Bottom("#face0#小荳啊~姐姐把衣服买回来了！\r\n要试试看吗？", 37, 2074100, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("什么？什么？啊，不用，我没关系的……", 37, 2074143, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#来来来！别废话了，赶紧去换上吧。", 37, 2074100, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('姐，姐姐我……', 37, 2074143, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#来，赶紧的！", 37, 2074100, true, true);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=2606574", "beauty", -1, 1);
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("天啊！姐姐！……太漂亮了。\r\n这，这让我太受宠若惊了。", 37, 2074148, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#嘿嘿，没关系的！没关系的！\r\n这可是服装店的姑娘特别制作的衣服。\r\n你穿着这身去表白啊，怎么样，肯定把那郡守小子迷得五迷三道的呢？", 37, 2074100, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("姐姐……呜呜，\r\n太谢谢你了。", 37, 2074148, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#哎哟哎哟，别哭了~\r\n我就是觉得你像我的妹妹似的，\r\n所以啊，你一定要穿着这身衣服表白成功，明白了吧？", 37, 2074100, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("姐姐啊啊啊啊，谢谢你！", 37, 2074148, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#b(撇开宝玉不说，好像已经做得太多了点……)", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#来，明天郡守就要离开了吧？\r\n那今天就早点睡，脸会水肿的，得美美地才行。", 37, 2074100, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("是，呜呜，真的谢谢你。", 37, 2074148, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_LeaveField("oid=2606573");
                                          cm.npc_LeaveField("oid=2606574");
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                              cm.effect_Text(["#fn黑体##fs18#第二天#fs15##fn黑体#小荳的家门前"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0]);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#b(去叫醒小可爱)", 57, 0, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.forceStartQuest(30925, '1');
                                                  cm.gainExp(568239);
                                                  cm.forceStartQuest(30919, '1');
                                                  cm.updateInfoQuest(30443, "gExpCheck=1");
                                                  cm.forceStartQuest(30443, '');
                                                  cm.forceCompleteQuest(30443);
                                                  cm.inGameDirectionEvent_AskAnswerTime(400);
                                                  cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                } else if (status === V++) {
                                                  cm.dispose();
                                                  cm.warp(224000000, 15, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;