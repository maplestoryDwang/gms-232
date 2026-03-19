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
      cm.onTeleport(1, cm.getPlayer().getId(), -356, 452);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9400580, "oid=5390620", 50, 445, 2, 0, 100, 1, true, false);
      cm.npc_SetSpecialAction("oid=5390620", "summon", 0, 0);
      cm.npc_ChangeController(9400595, "oid=5390621", 120, 445, 2, 70, 170, 1, true, false);
      cm.npc_SetSpecialAction("oid=5390621", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
      cm.npc_SetSpecialAction("oid=5390620", "fear", -1, 0);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 2000, 0, 450);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#b艾丽卡！你怎么会来这里？", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.npc_LeaveField("oid=5390620");
              cm.npc_ChangeController(9400580, "oid=5390620", 50, 445, 2, 0, 100, 1, true, false);
              cm.npc_SetSpecialAction("oid=5390620", 'summon', 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
                cm.npc_SetForceMove("oid=5390620", -1, 75, 50);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#我不能让#h0#一个人来，所以就跟来了。\t", 37, 9400580, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#森林里真的很危险。特别是在冬天！#h0#肯定是盲目相信自己的实力，什么都没准备就来了，所以我做好了万全的准备。\t", 37, 9400580, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/PL_MONAD1/8", "oid=5390620"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.sendNormalTalk_Bottom("#face0#回复药、针线、毛毯、应急食物……", 37, 9400580, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#b等下，那你刚才那么急着走……？", 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#b艾丽卡，就像你说的，森林太危险了，你回去吧。", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0##h0#，你可能忘记了吧，我可是亚皮纳斯最年轻的学者，我肯定能帮上你的忙的！", 37, 9400580, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#而且我已经进来这么远了，一个人出去也很危险哦？", 37, 9400580, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#b你怎么这么固执！", 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#……", 37, 9400580, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#b哈……", 57, 0, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#b好吧。但是你一定要跟紧我。", 57, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#太好了，#h0#！你走在前面吧！", 37, 9400580, true, true);
                                      } else if (status === V++) {
                                        cm.updateInfoQuest(64072, "chk1=1;chk2=1");
                                        cm.forceCompleteQuest(64072);
                                        cm.dispose();
                                        cm.openNpc(0, "副本_莫奈德_Act2_探索森林二");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;