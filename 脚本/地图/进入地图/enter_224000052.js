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
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -3698, -168);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074143, "oid=2606732", -3684, -215, 69, -3734, -3634, 1, false, 500, false);
        cm.npc_SetSpecialAction("oid=2606732", "summon", 0, 0);
        cm.npc_ChangeController(2074146, "oid=2606733", -3763, -215, 66, -3813, -3713, 0, true, 500, false);
        cm.npc_SetSpecialAction("oid=2606733", 'summon', 0, 0);
        cm.npc_SetSpecialAction("oid=2606732", "beauty", -1, 1);
        cm.sendNormalTalk_Bottom("哇，小荳啊！你今天……真漂亮。", 37, 2074146, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("哼……我，我哪里漂亮了啊？\r\n我漂亮吗？", 37, 2074148, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("是呢……嗯，很漂亮。\r\n谢谢你……朋友，\r\n我就只有你了……", 37, 2074146, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("你怎么了？发生什么事情了吗？", 37, 2074148, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("…………", 37, 2074146, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("怎么？发生什么事情了吗？\r\n你的表情怎么这么暗淡？\r\n难道，是因为……我……", 37, 2074148, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('其实！啊……没什么。', 37, 2074146, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("怎么了！为什么，为什么说到一半不说了。\r\n对我，对我这个朋友，你还有什么不能说的吗？", 37, 2074148, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('其实……', 37, 2074146, true, true);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(2074100, "oid=2606735", -3391, -233, 53, -3441, -3341, 1, true, 500, false);
                            cm.npc_SetSpecialAction("oid=2606735", "summon", 0, 0);
                            cm.inGameDirectionEvent_SetHideEffect(0);
                            cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 2000, -3521, -168);
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
                                  cm.sendNormalTalk_Bottom("#face0#嗯……到底在说什么呢？\r\n你听得清吗？脸也被遮住了，连表情都看不清。\r\n看他们靠得那么近说话，应该是很顺利的吧？\r\n啊啊，我们小荳，一定要成功才行，拜托了……郡守那个家伙……", 37, 2074100, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip("oid=2606732", 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2606735"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#额啊！那边，赶紧闪开，\r\n可不能被小荳发现了！", 37, 2074100, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_LeaveField("oid=2606732");
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(600);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(700);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#嗯？这是要去哪儿啊？\r\n那边不是集市的方向吗？\r\n这突然的，是发生什么事情了？嗯……\r\n干吗呢？还不赶紧小心点跟上去。", 37, 2074100, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.forceStartQuest(30919, '1');
                                                    cm.forceStartQuest(30922, '1');
                                                    cm.forceStartQuest(30924, '1');
                                                    cm.gainExp(198883);
                                                    cm.updateInfoQuest(30444, "gExpCheck=1");
                                                    cm.forceStartQuest(30444, '');
                                                    cm.forceCompleteQuest(30444);
                                                    cm.inGameDirectionEvent_AskAnswerTime(400);
                                                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                  } else if (status === V++) {
                                                    cm.dispose();
                                                    cm.warp(224000000, 27, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;