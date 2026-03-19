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
      cm.npc_ChangeController(1540662, "oid=36119", -273, 58, 15, -323, -223, 1, false, 0, false);
      cm.npc_ChangeController(1540446, "oid=36120", -438, 58, 7, -488, -388, 1, false, 0, false);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setAmbience("Ambience.img/secretmissionbase", 100, 60);
      cm.npc_ChangeController(1540502, "oid=22234938", 1080, 49, 18, 1030, 1130, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22234938", 'summon', 0, 0);
      cm.npc_ChangeController(1540503, "oid=22234939", 1130, 49, 23, 1080, 1180, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22234939", 'summon', 0, 0);
      cm.npc_ChangeController(1540504, "oid=22234940", 1200, 49, 23, 1150, 1250, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22234940", "summon", 0, 0);
      cm.npc_ChangeController(1540650, "oid=22234941", 800, 49, 17, 750, 850, 0, true, 500, false);
      cm.npc_SetSpecialAction("oid=22234941", "summon", 0, 0);
      cm.npc_ChangeController(1540651, "oid=22234942", 700, 49, 16, 650, 750, 0, true, 500, false);
      cm.npc_SetSpecialAction("oid=22234942", 'summon', 0, 0);
      cm.npc_ChangeController(1540652, "oid=22234943", 650, 49, 11, 600, 700, 0, true, 500, false);
      cm.npc_SetSpecialAction("oid=22234943", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 902, 109);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(1);
        cm.inGameDirectionEvent_AskAnswerTime(10);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("结束了吗？\r\n大家都没事吧？", 37, 1540502, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("我的另外一只眼睛还在，看来我没事。", 37, 1540650, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("老公……。", 37, 1540651, true, true);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=22234941", -1);
                    cm.inGameDirectionEvent_AskAnswerTime(200);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("嗯，现在这个地方也被发现了。\r\n我们该离开这里了。", 37, 1540650, false, true);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=22234941", 1);
                        cm.inGameDirectionEvent_AskAnswerTime(200);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("我们要先把之前的事情做完！\r\n小软柿，请把放置在#b左边帐篷#k内的#b电脑芯片#k拿给我。", 37, 1540650, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 500, -180, 109);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 300, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else if (status === V++) {
                                    cm.setInGameDirectionMode(false, true, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;