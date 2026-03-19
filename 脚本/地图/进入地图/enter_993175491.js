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
  if (cm.getInfoQuest(100433) != "43=1;47=0;65=1") {
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
      cm.npc_ChangeController(9062255, "oid=27830396", -80, 45, 5, -130, -30, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=27830396", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 100, 80);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#呜……呜呜……", 37, 9062259, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("有哭声。", 57, 0, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#……你现在……正在非常用力地抓着我的胳膊，你知道吗？", 37, 9062255, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("不好意思……因为有些发抖……", 57, 0, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(9062259, "oid=27831143", 200, 45, 1, 150, 250, 0, true, 2000, false);
                    cm.npc_SetSpecialAction("oid=27831143", "summon", 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#不见了。应该能找到的啊。不见了……", 37, 9062259, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#怎么回事？\r\n看来好像丢了什么东西。", 37, 9062255, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#我要去婚礼，可是#b戒指#k却找不到了。#k要快点去才行，不然就来不及了……\r\n你们没有在这儿看到我的#b戒指#k吗？如果戒指丢了的话……", 37, 9062259, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0##b#h0##k，看样子，如果要和微笑的假面进行对话，我们就要先帮他找到#b戒指#k。", 37, 9062255, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("那么微笑的假面放不下的东西是戒指吗？\r\n只要找到#b丢失的戒指#k就能立刻搞定了。", 57, 0, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#这个嘛。微笑的假面不是还说，必须要参加#b婚礼#k吗？", 37, 9062255, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#这肯定与牢牢抓着微笑的假面不放的留恋有关。\r\n 我们先找#b戒指#k吧。", 37, 9062255, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#我们来帮你找#b戒指#k。\r\n你可以先去客房找找看吗？这里交给我们就行。", 37, 9062255, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#呜呜……知道了。请快点帮忙找到戒指。快一点……", 37, 9062259, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.setStandAloneMode(false);
                                        cm.npc_LeaveField("oid=27830396");
                                        cm.npc_LeaveField("oid=27831143");
                                        cm.dispose();
                                        cm.warp(993175490, 0, false);
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