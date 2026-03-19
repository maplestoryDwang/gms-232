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
      cm.npc_ChangeController(2052042, "oid=39433931", 2000, 50, 22, 1950, 2050, 1, false, false);
      cm.npc_SetSpecialAction("oid=39433931", 'summon', 0, 0);
      cm.npc_ChangeController(2052010, "oid=39433932", 2300, -200, 12, 2250, 2350, 1, true, false);
      cm.npc_SetSpecialAction("oid=39433932", "summon", 0, 0);
      cm.npc_ChangeController(2052011, "oid=39433933", 1570, -200, 4, 1520, 1620, 0, true, false);
      cm.npc_SetSpecialAction("oid=39433933", "summon", 0, 0);
      cm.npc_ChangeController(2052012, "oid=39433934", 1500, -200, 2, 1450, 1550, 0, true, false);
      cm.npc_SetSpecialAction("oid=39433934", "summon", 0, 0);
      cm.npc_ChangeController(2052013, "oid=39433935", 2370, -200, 16, 2320, 2420, 1, true, false);
      cm.npc_SetSpecialAction("oid=39433935", "summon", 0, 0);
      cm.npc_ChangeController(2052015, "oid=39433936", 1910, -200, 11, 1860, 1960, 0, true, false);
      cm.npc_SetSpecialAction("oid=39433936", "summon", 0, 0);
      cm.npcMove(2052010, 0, 200, 0);
      cm.npcMove(2052011, 0, 200, 0);
      cm.npcMove(2052012, 0, 200, 0);
      cm.npcMove(2052013, 0, 200, 0);
      cm.npcMove(2052015, 0, 200, 0);
      cm.npcMove(2052042, 0, -30, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1930, 15);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("这可真是奇怪……", 37, 2052011, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("我总觉得有点不太对劲，我们退后等待C组吧。", 37, 2052012, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("要是白外星博士出现该怎么办。\r\n我会迅速翻翻看的，你们替我盯着点。", 37, 2052015, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("不要靠过去！都说了等等阿琳啊！", 37, 2052010, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#快逃，是陷阱~！", 37, 2052009, true, true);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayBGM("Bgm18.img/BlackWing", 0, 0);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=39433932"], [0, 0, 200, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=39433933"], [0, 0, 200, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=39433934"], [0, 0, 200, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=39433935"], [0, 0, 200, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=39433936"], [0, 0, 200, 1, 0, 1, 0, 0]);
                      cm.sendNormalTalk_Bottom("#face0#呵呵呵！真是一群死蠢冒险勇士~", 37, 2052008, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=39433931", 'special', 0, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(4000);
                          cm.effect_PlayMusic("SoundEff.img/omega/caoong/regen");
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=39433931", "special2", -1, 1);
                            cm.sendNormalTalk_Bottom("#face2#白外星博士！！", 37, 2052010, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#大戏开演啦！！", 37, 2052008, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#救……救命啊……", 37, 2052015, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("……滋滋……大家能听到吗？出什么事了？", 57, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#糟糕！通讯中断了，#h0#！", 37, 2052010, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#哈哈哈！我就说怎么对不上数呢，那边还有呢？！", 37, 2052008, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#走吧，卡雄！！", 37, 2052008, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("！！！", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face2#姐姐，哥哥们！！", 37, 2052027, true, true);
                                              } else if (status === V++) {
                                                cm.dispose();
                                                cm.warp(221030800, 1);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;