var status = -1;
var selectionLog = [];
function action(p, O, V) {
  if (status == 0 && p == 0) {
    cm.dispose();
    return;
  }
  var I = cm.getNumberFromQuestInfo(34021, "hero1");
  var g = cm.getNumberFromQuestInfo(34021, 'hero2');
  status++;
  selectionLog[status] = V;
  var c = -1;
  if (status <= c++) {
    cm.dispose();
  } else {
    if (status === c++) {
      cm.setNumberForQuestCustomData(33900, 7);
      cm.showMapleHero();
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(1540912, "oid=294786120", 820, -200, 1, 770, 870, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=294786120", 'summon', 0, 0);
      cm.npc_ChangeController(1540807, "oid=294786121", 400, -120, 3, 350, 450, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=294786121", 'summon', 0, 0);
      cm.npc_ChangeController(1540801 + I, "oid=294786123", 480, -120, 3, 430, 530, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=294786123", "summon", 0, 0);
      cm.npc_ChangeController(1540801 + g, "oid=294786124", 420, -120, 3, 370, 470, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=294786124", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=294786120", "special2", -1, 1);
      cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 0, 650, 43);
      cm.curNodeEventEnd(true);
    } else {
      if (status === c++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === c++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === c++) {
            cm.sendNormalTalk_Bottom("#face7#额……", 37, 1540809, false, true);
            cm.effect_Voice("Voice3.img/HofM/ACT4/DND/1", 128);
          } else {
            if (status === c++) {
              cm.sendNormalTalk_Bottom("#face3#现在放弃吧，戴米安，你输了。", 37, 1540805, true, true);
              cm.effect_Voice("Voice3.img/HofM/ACT4/DND/2", 128);
            } else {
              if (status === c++) {
                cm.sendNormalTalk_Bottom("#face3#同伴们正在阻止世界树的感染，\r\n还有联盟军的许多勇士也会在制服魔族士兵后加入的。", 37, 1540805, true, true);
                cm.effect_Voice("Voice3.img/HofM/ACT4/DND/3", 128);
              } else {
                if (status === c++) {
                  cm.sendNormalTalk_Bottom("#face7#愚蠢至极，我是绝对不会输给区区你们的……！", 37, 1540809, true, true);
                  cm.effect_Voice("Voice3.img/HofM/ACT4/DND/4", 128);
                } else {
                  if (status === c++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === c++) {
                      cm.npc_SetSpecialAction("oid=294786120", "special6", 1, 1);
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/evilS_dem", 100);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=294786123"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=294786124"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === c++) {
                        cm.userSetFieldFloating(350160340, 10, 10, 10);
                        cm.fieldEffect_PlayBGM("Bgm45.img/Demian Spine", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === c++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === c++) {
                            cm.userSetFieldFloating(350160340, 0, 0, 0);
                            cm.inGameDirectionEvent_SetHideEffect(1);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === c++) {
                              cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -125, -700);
                            } else {
                              if (status === c++) {
                                cm.onNewSpecialEffect(3, 0);
                              } else {
                                if (status === c++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BossDemian/phase2", 100);
                                  cm.fieldEffect_复合图片动画(["Map/Effect2.img/DemianIllust/2pahseSp/003", "animation", '', ''], [0, 0, 1, 0, 0, 0, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(12500);
                                } else if (status === c++) {
                                  cm.dispose();
                                  cm.warp(350160360, 0, true);
                                  cm.inGameDirectionEvent_SetHideEffect(0);
                                  cm.setInGameDirectionMode(false, true, false);
                                  cm.npc_LeaveField("oid=294786120");
                                  cm.npc_LeaveField("oid=294786121");
                                  cm.npc_LeaveField("oid=294786123");
                                  cm.npc_LeaveField("oid=294786124");
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