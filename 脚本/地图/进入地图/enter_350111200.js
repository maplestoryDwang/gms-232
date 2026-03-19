var status = -1;
var selectionLog = [];
function action(R, v, o) {
  if (status == 0 && R == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = o;
  var t = -1;
  if (status <= t++) {
    cm.dispose();
  } else {
    if (status === t++) {
      cm.setNumberForQuestCustomData(33900, 4);
      cm.mapleHeroBecomeNpc(7, 0);
      cm.getPlayer().makeDragon(2217);
      cm.onActionBarResult(6, -1);
      cm.onActionBarResult(5, 30);
      cm.npc_ChangeController(1540813, "oid=287812763", -394, 200, 7, -444, -344, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=287812763", "summon", 0, 0);
      cm.npc_ChangeController(1540813, "oid=287812764", -359, 200, 7, -409, -309, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=287812764", 'summon', 0, 0);
      cm.npc_ChangeController(1540813, "oid=287812765", -344, 200, 7, -394, -294, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=287812765", "summon", 0, 0);
      cm.npc_ChangeController(1540813, "oid=287812766", -269, 200, 7, -319, -219, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=287812766", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_PushScaleInfo(2500, 2000, 2500, 300, 280);
      cm.curNodeEventEnd(true);
    } else {
      if (status === t++) {
        cm.npc_SetForceMove("oid=287812763", 1, 2000, 300);
        cm.npc_SetForceMove("oid=287812764", 1, 2000, 300);
        cm.npc_SetForceMove("oid=287812765", 1, 2000, 300);
        cm.npc_SetForceMove("oid=287812766", 1, 2000, 300);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === t++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1800);
        } else {
          if (status === t++) {
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 500, -80, 280);
          } else {
            if (status === t++) {
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === t++) {
                cm.npc_LeaveField("oid=287812765");
                cm.npc_LeaveField("oid=287812765");
                cm.npc_LeaveField("oid=287812764");
                cm.npc_LeaveField("oid=287812764");
                cm.npc_LeaveField("oid=287812763");
                cm.npc_LeaveField("oid=287812763");
                cm.npc_LeaveField("oid=287812766");
                cm.npc_LeaveField("oid=287812766");
                cm.emotion(2, 10000);
                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                cm.sendNormalTalk_Bottom("#face0#搞什么，就是小蜘蛛嘛？", 37, 1540805, false, true);
              } else {
                if (status === t++) {
                  cm.sendNormalTalk_Bottom("#face0#这些家伙还挺可爱的。", 37, 1540807, true, true);
                } else {
                  if (status === t++) {
                    cm.npc_ChangeController(1540812, "oid=287817540", 0, 0, 4, -50, 50, 1, true, 0, false);
                    cm.npc_SetSpecialAction("oid=287817540", "summon", 0, 0);
                    cm.npc_SetSpecialAction("oid=287817540", "appear_top", 3000, 0);
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/waddler/appear", 100);
                    cm.userSetFieldFloating(350111200, 0, 3, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(200);
                  } else {
                    if (status === t++) {
                      cm.emotion(6, 10000);
                      cm.fieldEffect_PlayBGM("Bgm44/WildFury", 0, 0);
                      cm.inGameDirectionEvent_MoveAction(5);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === t++) {
                        cm.inGameDirectionEvent_MoveAction(2);
                        cm.inGameDirectionEvent_AskAnswerTime(100);
                      } else {
                        if (status === t++) {
                          cm.inGameDirectionEvent_MoveAction(0);
                          cm.userSetFieldFloating(350111200, 0, 0, 0);
                          cm.sendNormalTalk_Bottom("#face2#额啊！！！！！", 37, 1540805, false, true, 1, 2000);
                        } else {
                          if (status === t++) {
                            cm.inGameDirectionEvent_AskAnswerTime(100);
                          } else {
                            if (status === t++) {
                              cm.npc_LeaveField("oid=287817540");
                              cm.npc_LeaveField("oid=287817540");
                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                              cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                            } else {
                              if (status === t++) {
                                cm.spawnMobLimit(8240130, 1, 245, 1026, 100);
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                              } else {
                                if (status === t++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === t++) {
                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                  } else if (status === t++) {
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.addPopupSay(1540805, 2500, "#face2#什，什么东西！怎么一上来就攻击！", '', 0);
                                    cm.addPopupSay(1540807, 2500, "主人，那儿的怪物似乎对我们很生气！", '', 0);
                                    cm.addPopupSay(1540805, 2500, "#face3#切，那我们也不能坐以待毙。", '', 0);
                                    cm.addPopupSay(1540807, 2500, "难道你有什么不错的战略吗？", '', 0);
                                    cm.addPopupSay(1540805, 2500, "#face3#米乐，咬它！", '', 0);
                                    cm.addPopupSay(1540807, 2500, "你说什么呢，一看就知道是毒蜘蛛！", '', 0);
                                    cm.dispose();
                                    cm.scheduleWarpTask(30, 350111250, 0, false, true);
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