var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.updateInfoQuest(33905, "check2=1;check3=1;check4=1;check5=1;check7=1;check=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 700, -550);
    } else {
      if (status === V++) {
        cm.Hidden_background("AF_Tuto", 1, 0, 0, 0);
        cm.Hidden_background("AF_breath", 1, 0, 0, 0);
        cm.Hidden_background('AF_mark', 1, 0, 0, 0);
        cm.Hidden_background("AF_mark2", 1, 0, 0, 0);
        cm.onActionBarResult(6, -1);
        cm.mapleHeroBecomeNpc(-1, 0);
        cm.setPartner(0, 1540785, 0, 0);
        cm.setPartner(0, 1540781, 0, 0);
        cm.npc_ChangeController(1540802, "oid=288244094", 630, -600, 22, 580, 680, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=288244094", 'summon', 0, 0);
        cm.npc_ChangeController(1540809, "oid=288244095", 1165, -800, 28, 1115, 1215, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=288244095", "summon", 0, 0);
        cm.npc_ChangeController(1540805, "oid=288244096", 690, -600, 24, 640, 740, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=288244096", "summon", 0, 0);
        cm.npc_ChangeController(1540807, "oid=288244097", 500, -600, 18, 450, 550, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=288244097", "summon", 0, 0);
        cm.npc_ChangeController(1540806, "oid=288244098", 560, -600, 20, 510, 610, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=288244098", "summon", 0, 0);
        cm.npcMove(1540807, 0, -100, 0);
        cm.Hidden_background("AF_Tuto", 1, 0, 0, 0);
        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face3#阿弗利埃，你睁开眼，我来了。", 37, 1540805, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=288220912", "special1", 1, 1);
              cm.Hidden_background("AF_breath", 1, 1, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=288220912", "special2", -1, 1);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("你来了啊，弗里德的后裔，还有……玛瑙龙最后的传人。", 37, 1540820, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#先祖……", 37, 1540807, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("别用这种眼神看我，我还没死。", 37, 1540820, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("不过感染得很严重，额头上的纹样已经完全变成了魔族的……\r\n看来已经到了难以挽回的阶段。", 37, 1540802, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#战神。", 37, 1540806, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("我不过是仍怀有对他的尊重而已。\r\n既然是个有信念的龙，至少有权利知晓自己会以怎样的面貌走向生命最后一程。", 37, 1540802, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("呵呵……战神啊，你说的没错，我的状态我最清楚。", 37, 1540820, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("但是不用担心，\r\n与其被他们夺走意志，沦为听命于他们的魔兽……\r\n倒不如在此之前了断自己的性命。", 37, 1540820, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("没时间了，你听好，\r\n在如此屈辱的状况之下，我之所以还没有自行了断，\r\n就是在等你。", 37, 1540820, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3#你说的是……我吗？", 37, 1540805, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("我原打算等你足够成熟之后再传授给你，\r\n可我眼下的时间已经所剩无多了。", 37, 1540820, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("我打算将弗里德留给我的一部分意识传给你。", 37, 1540820, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else if (status === V++) {
                                          cm.dispose();
                                          cm.warp(350112310, 0, true);
                                          cm.setInGameDirectionMode(false, true, false);
                                          cm.npc_LeaveField("oid=288220912");
                                          cm.npc_LeaveField("oid=288220912");
                                          cm.npc_LeaveField("oid=288244094");
                                          cm.npc_LeaveField("oid=288244094");
                                          cm.npc_LeaveField("oid=288244095");
                                          cm.npc_LeaveField("oid=288244095");
                                          cm.npc_LeaveField("oid=288244096");
                                          cm.npc_LeaveField("oid=288244096");
                                          cm.npc_LeaveField("oid=288244097");
                                          cm.npc_LeaveField("oid=288244097");
                                          cm.npc_LeaveField("oid=288244098");
                                          cm.npc_LeaveField("oid=288244098");
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