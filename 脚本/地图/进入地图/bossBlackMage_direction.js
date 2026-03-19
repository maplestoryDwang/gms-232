var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (cm.getMapId() == 450013000) {
    action1(f, E, e);
  } else {
    if (cm.getMapId() == 450013200) {
      action2(f, E, e);
    } else {
      if (cm.getMapId() == 450013400) {
        action3(f, E, e);
      } else if (cm.getMapId() == 450013600) {
        action4(f, E, e);
      } else {
        cm.dispose();
      }
    }
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(100);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_复合图片动画(["Effect/Direction20.img/bossBlackMage/start_spine/blasck_space", "animation", '', "intro"], [0, 0, 1, 0, 0, 0, 0, 1]);
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/boss_start", 200);
        cm.inGameDirectionEvent_AskAnswerTime(5000);
      } else {
        if (status === V++) {
          cm.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 1000, 0, 0, 13, 4, 1, -1, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else if (status === V++) {
          cm.fieldEffect_取消复合图片动画('intro', 100, 0);
          cm.fieldEffect_ProcessOnOffLayer("BlackOut", '', 2, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          cm.setInGameDirectionMode(false, true, false);
          cm.dispose();
          cm.warp(450013100, 0, true);
        }
      }
    }
  }
}
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.getMap().killAllMonsters(true);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm50/ThroneOfDarkness", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(100);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_复合图片动画(["Effect/Direction20.img/bossBlackMage/start2_spine/skeleton", "animation", '', "intro"], [0, 0, 1, 0, 0, 0, 0, 1]);
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/boss_start2", 200);
        cm.inGameDirectionEvent_AskAnswerTime(5000);
      } else {
        if (status === V++) {
          cm.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 1000, 0, 0, 13, 4, 1, -1, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_取消复合图片动画('intro', 100, 0);
            cm.fieldEffect_ProcessOnOffLayer("BlackOut", '', 2, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -250, 21);
            cm.inGameDirectionEvent_ForcedFlip(1);
            cm.npc_ChangeController(3003932, "oid=2273124", 0, 0, 3, -50, 50, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=2273124", 'summon', 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 0, -80);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else if (status === V++) {
                cm.npc_LeaveField("oid=2273124");
                cm.npc_LeaveField("oid=2273124");
                cm.inGameDirectionEvent_AskAnswerTime(240);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.dispose();
                cm.warp(450013300, 0, true);
                cm.setInGameDirectionMode(false, true, false);
              }
            }
          }
        }
      }
    }
  }
}
function action3(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm50/WorldHorizon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.fieldEffect_复合图片动画(["Effect/Direction20.img/bossBlackMage/space/blasck_space", 'animation', '', "intro"], [0, 0, 1, 0, 0, 0, 0, 1]);
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/boss_start3", 200);
        cm.inGameDirectionEvent_AskAnswerTime(5000);
      } else {
        if (status === V++) {
          cm.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 1000, 0, 0, 13, 4, 1, -1, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_取消复合图片动画("intro", 100, 0);
            cm.fieldEffect_ProcessOnOffLayer("BlackOut", '', 2, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 20, -50);
          } else if (status === V++) {
            cm.npc_LeaveField("oid=2273275");
            cm.npc_LeaveField("oid=2273275");
            cm.npc_LeaveField("oid=2273276");
            cm.npc_LeaveField("oid=2273276");
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -172, 9);
            cm.inGameDirectionEvent_ForcedFlip(1);
            cm.npc_ChangeController(3003933, "oid=2273275", 0, 9, 1, -50, 50, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=2273275", 'summon', 0, 0);
            cm.Npc_Fadeout("oid=2273275", 0, 0);
            cm.npcMove(3003933, 0, -80, 0);
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(3500);
            cm.dispose();
            cm.warp(450013500, 0, true);
            cm.setInGameDirectionMode(false, true, false);
          }
        }
      }
    }
  }
}
function action4(f, E, e) {
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
            cm.npc_SetSpecialAction("oid=2273361", "summon", 0, 0);
            cm.npc_setForceFlip("oid=2273361", 1);
            cm.inGameDirectionEvent_AskAnswerTime(100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_ForcedFlip(1);
              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -65, 88);
            } else if (status === V++) {
              cm.npc_LeaveField("oid=2273360");
              cm.npc_LeaveField("oid=2273360");
              cm.npc_LeaveField("oid=2273361");
              cm.npc_LeaveField("oid=2273361");
              cm.npcMove(3003934, 0, -80, 0);
              cm.fieldEffect_PlayBGM("Bgm50/LostSpace", 0, 0);
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(4500);
              cm.dispose();
              cm.warp(450013700, 0, false);
              cm.setInGameDirectionMode(false, true, false);
            }
          }
        }
      }
    }
  }
}
function action5(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}