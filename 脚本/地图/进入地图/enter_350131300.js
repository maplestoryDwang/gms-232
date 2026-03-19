var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (cm.getNumberFromQuestInfo(33992, 'check1') > 0) {
    cm.showMapleHero();
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
      cm.updateInfoQuest(33915, "act1=350112400;act2=350123600;act3=350131300");
      cm.forceStartQuest(33900, '10');
      cm.mapleHeroBecomeNpc(13, 0);
      cm.onActionBarResult(6, -1);
      cm.onActionBarResult(5, 36);
      cm.mapleHeroSetList([10]);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1540879, "oid=306165815", -141, 220, 2, -191, -91, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=306165815", "summon", 0, 0);
      cm.npc_ChangeController(1540880, "oid=306165816", -50, 220, 2, -100, 0, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=306165816", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -100, 200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face5#哎，我就知道最终会变成这样。", 37, 1540878, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face11#但如果这种名为极限石的矿石就是我们在寻找的超越石，就没有必要再小心行动了。", 37, 1540805, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("龙神说得不错，事已至此，就得赶紧偷走才是！", 37, 1540878, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face4#偷走，这是今晚我所听到的话中最令我满意的了。", 37, 1540879, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#……我到底为何吃了那么多的苦头……", 37, 1540880, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face10#乐观点，木头，可以不用看人眼色行动，多好啊？", 37, 1540879, true, true);
                        } else {
                          if (status === V++) {
                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else if (status === V++) {
                                  cm.npc_LeaveField("oid=306165815");
                                  cm.npc_LeaveField("oid=306165815");
                                  cm.npc_LeaveField("oid=306165816");
                                  cm.npc_LeaveField("oid=306165816");
                                  cm.setInGameDirectionMode(false, true, false);
                                  cm.mapleHeroSetList([10, 11, 12]);
                                  cm.setNumberForQuestCustomData(33900, 10);
                                  cm.showMapleHero();
                                  cm.setNumberForQuestInfo(33992, "check1", 1);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;