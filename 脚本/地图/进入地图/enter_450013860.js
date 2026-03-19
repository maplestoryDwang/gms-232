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
      cm.getMap().killAllMonsters(true);
      cm.fieldEffect_PlayBGM("Bgm50/WorldHorizon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(100);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_复合图片动画(["Effect/Direction20.img/bossBlackMage/start4_spine/black_Phase_3_4", "animation", '', "intro"], [0, 0, 1, 0, 0, 0, 0, 1]);
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/boss_start4", 200);
        cm.inGameDirectionEvent_AskAnswerTime(5000);
      } else {
        if (status === V++) {
          cm.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 1000, 0, 0, 13, 4, 1, -1, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_取消复合图片动画("intro", 100, 0);
            cm.fieldEffect_ProcessOnOffLayer("BlackOut", '', 2, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -322, 100);
            cm.npc_ChangeController(3003934, "oid=2273360", 0, 29, 1, -50, 50, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=2273360", "summon", 0, 0);
            cm.npc_ChangeController(3003902, "oid=2273361", -430, 29, 1, -480, -380, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=2273361", 'summon', 0, 0);
            cm.npc_setForceFlip("oid=2273361", 1);
            cm.inGameDirectionEvent_AskAnswerTime(100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_ForcedFlip(1);
              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -65, 88);
            } else {
              if (status === V++) {
                cm.npcMove(3003934, 0, -80, 0);
                cm.fieldEffect_PlayBGM("Bgm50/LostSpace", 0, 0);
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(4500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('空间变化了。', 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#创世开始了。片刻后一切都会回归于无。", 37, 3003902, true, true);
                  } else {
                    if (status === V++) {
                      cm.effect_Voice("Voice4.img/BM3/orca/77", 128);
                      cm.sendNormalTalk_Bottom("#face1#那家伙变弱后要使用对抗者的力量对其造成致命一击。", 37, 3003902, true, true);
                    } else {
                      if (status === V++) {
                        cm.effect_Voice("Voice4.img/BM3/orca/78", 128);
                        cm.sendNormalTalk_Bottom("对抗者的力量……可是……", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#你还不知道自己为什么会失败吗？\r\n只有心愿强大封印石才会松动。", 37, 3003902, true, true);
                        } else {
                          if (status === V++) {
                            cm.effect_Voice("Voice4.img/BM3/orca/79", 128);
                            cm.sendNormalTalk_Bottom("#face1#所以你要做好准备。\r\n哪怕牺牲一切甚至是生命，都要阻止它。", 37, 3003902, true, true);
                          } else {
                            if (status === V++) {
                              cm.effect_Voice("Voice4.img/BM3/orca/80", 128);
                              cm.sendNormalTalk_Bottom("哪怕付出生命也要……", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#很好……那……", 37, 3003902, true, true);
                              } else {
                                if (status === V++) {
                                  cm.effect_Voice("Voice4.img/BM3/orca/84", 128);
                                  cm.sendNormalTalk_Bottom("奥尔卡？", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face4#我……先……歇一会……", 37, 3003902, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_Voice("Voice4.img/BM3/orca/89", 128);
                                      cm.sendNormalTalk_Bottom("奥尔卡？！", 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetSpecialAction("oid=2273361", 'special5', -1, 1);
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/koong", 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else if (status === V++) {
                                          cm.npc_LeaveField("oid=2273360");
                                          cm.npc_LeaveField("oid=2273360");
                                          cm.npc_LeaveField("oid=2273361");
                                          cm.npc_LeaveField("oid=2273361");
                                          cm.dispose();
                                          cm.warp(450013870, 0, false);
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