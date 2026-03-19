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
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -1033, 269);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(3005102, "oid=620341", -1189, 269, 8, -1239, -1139, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=620341", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -1032, 306);
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
            cm.sendNormalTalk_Bottom("#face0#嘿嘿，万幸。", 37, 3005100, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#多亏了你，我好像还认识了一位为人亲切又了不起的画家。", 37, 3005100, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face7#你还笑得出来？现在我们可是彻底完蛋了！", 37, 3005102, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#可那份契约书不是完全湿透了吗？", 37, 3005100, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#领主怎么可能会那么马虎，一定是把真契约书放在什么地方好好保管了吧。", 37, 3005102, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#他这会儿一定会怒气冲天地来追我们，\r\n他可不会忘了自己在人前所遭受的羞辱。", 37, 3005102, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face6#那一起逃就好了啊！", 37, 3005100, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（这个家伙……果然很奇怪。）", 37, 3005102, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（只要修好铃铛……）", 37, 3005102, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#啊，在那边！", 37, 3005120, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face6#你好！", 37, 3005100, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face7#喂！", 37, 3005102, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else if (status === V++) {
                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.setStandAloneMode(false);
                                      cm.forceStartQuest(36218, '');
                                      cm.forceCompleteQuest(36218);
                                      cm.gainExp(1903);
                                      cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h0;62=h1;53=h1;73=h0;55=h0;night=0;57=h0;76=h0;59=h0;77=h0;78=h0;set=1");
                                      cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h0;62=h1;53=h1;63=h1;73=h0;55=h0;night=0;57=h0;76=h0;59=h0;77=h0;78=h0;set=1");
                                      cm.npc_LeaveField("oid=620341");
                                      cm.dispose();
                                      cm.warp(410004003, 0, true);
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