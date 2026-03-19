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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3005110, "oid=621252", 885, 300, 6, 835, 935, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=621252", "summon", 0, 0);
      cm.npc_ChangeController(3005111, "oid=621253", 982, 300, 6, 932, 1032, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=621253", "summon", 0, 0);
      cm.npc_ChangeController(3005112, "oid=621254", 1075, 300, 6, 1025, 1125, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=621254", "summon", 0, 0);
      cm.npc_ChangeController(3005102, "oid=621255", 720, 300, 5, 670, 770, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=621255", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 970, 290);
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
            cm.sendNormalTalk_Bottom("#face0#我是真的很烦躁了，你们能不能别再跟着我了……", 37, 3005102, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#格里大哥……我仔细考虑过了。", 37, 3005110, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#专门抢外乡人的钱啊，靠坑蒙拐骗赚钱啊，\r\n这种事我们也想金盆洗手了。", 37, 3005111, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#是吗？", 37, 3005102, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#咳咳，可我还是想要找回被那个领主抢走的店铺，能怎么办呢！", 37, 3005110, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#我也是！我的铁匠铺！", 37, 3005111, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#我的年糕店！", 37, 3005112, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#我说过的啊，我没办法成为你们的大哥。", 37, 3005102, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#你们要是被抢走了什么，就自己去找回来。", 37, 3005102, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#我的意思是不要总是期待有人会出面。", 37, 3005102, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#那……谁来当大哥？！", 37, 3005110, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face7#那就不关我的事了吧？要不你来。", 37, 3005102, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#……！", 37, 3005110, true, true, 1);
                                  } else if (status === V++) {
                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.setStandAloneMode(false);
                                    cm.npc_LeaveField("oid=621252");
                                    cm.npc_LeaveField("oid=621253");
                                    cm.npc_LeaveField('oid=621254');
                                    cm.npc_LeaveField('oid=621255');
                                    cm.dispose();
                                    cm.warp(993165520, 0, true);
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