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
      cm.npc_ChangeController(1540662, "oid=36132", -273, 58, 15, -323, -223, 1, false, 0, false);
      cm.npc_ChangeController(1540502, "oid=22239280", 1050, 49, 18, 1000, 1100, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22239280", 'summon', 0, 0);
      cm.npc_ChangeController(1540503, "oid=22239281", 1100, 49, 18, 1050, 1150, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22239281", "summon", 0, 0);
      cm.npc_ChangeController(1540504, "oid=22239282", 1150, 49, 23, 1100, 1200, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22239282", "summon", 0, 0);
      cm.npc_ChangeController(1540650, "oid=22239283", 800, 49, 17, 750, 850, 0, true, 500, false);
      cm.npc_SetSpecialAction("oid=22239283", "summon", 0, 0);
      cm.npc_ChangeController(1540651, "oid=22239284", 750, 49, 16, 700, 800, 0, true, 500, false);
      cm.npc_SetSpecialAction("oid=22239284", "summon", 0, 0);
      cm.npc_ChangeController(1540652, "oid=22239285", 700, 49, 16, 650, 750, 0, true, 500, false);
      cm.npc_SetSpecialAction("oid=22239285", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 908, 109);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(100);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(1);
          cm.inGameDirectionEvent_AskAnswerTime(10);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_AskAnswerTime(10);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
              cm.sendNormalTalk_Bottom("这电脑芯片……\r\n就是那孩子的芯片，它原本或许会成为我们的第一个孩子。", 37, 1540650, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("请你不要误会，小软柿。\r\n我们想要的并不是报复。", 37, 1540651, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("没错，我们不想要报仇。\r\n不过，我们希望不会再有像我们这样不幸的智能机器人了。", 37, 1540650, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('……………………。', 37, 1540652, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("呃，人生在世难免有一两件伤心的往事，不是吗？哈哈哈！", 37, 1540650, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                            cm.sendNormalTalk_Bottom("头盔完成了。这是我做过的最棒的头盔了。\r\n小软柿，现在轮到你做出选择了。", 37, 1540651, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2000, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                    cm.sendNormalTalk_Bottom("请把我带到中央塔。", 57, 0, false, true);
                                  } else if (status === V++) {
                                    cm.dispose();
                                    cm.warp(350040200, 0, true);
                                    cm.setInGameDirectionMode(false, false, true);
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