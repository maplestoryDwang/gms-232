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
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 7008, 273);
      cm.npc_ChangeController(3005110, "oid=388548", 7141, 279, 8, 7091, 7191, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=388548", "summon", 0, 0);
      cm.npc_ChangeController(3005111, "oid=388549", 7249, 279, 8, 7199, 7299, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=388549", 'summon', 0, 0);
      cm.npc_ChangeController(3005112, 'oid=388550', 7328, 279, 13, 7278, 7378, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=388550', "summon", 0, 0);
      cm.npc_ChangeController(3005102, "oid=388551", 7447, 279, 13, 7397, 7497, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=388551", "summon", 0, 0);
      cm.Npc_Fadeout("oid=388551", 0, 10);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 7102, 272);
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
            cm.sendNormalTalk_Bottom("#face1#你们这是在做什么呢？", 37, 3005102, false, true, 1);
          } else {
            if (status === V++) {
              cm.effect_Voice("Voice6.img/lara/3/Female/0", 100);
              cm.inGameDirectionEvent_PushScaleInfo(500, 0, 1500, 500, 7325, 272);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.Npc_Fadeout("oid=388551", 255, 100);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip('oid=388548', 1);
                    cm.npc_setForceFlip("oid=388549", 1);
                    cm.npc_setForceFlip("oid=388550", 1);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=388548"], [0, 0, -20, 1, 0, 1, 0, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=388549"], [0, 0, -20, 1, 0, 1, 0, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=388550"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.effect_Voice("Voice6.img/lara/3/Female/1", 100);
                        cm.sendNormalTalk_Bottom("#face0#后、后巷的狼怎么会在这里……", 37, 3005110, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.effect_Voice("Voice6.img/lara/3/Female/7", 100);
                          cm.sendNormalTalk_Bottom("#face1#肆意压榨外乡人的钱财可怎么能行？", 37, 3005102, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.effect_Voice("Voice6.img/lara/3/Female/8", 100);
                            cm.sendNormalTalk_Bottom("#face1#趁我现在还算客气，给我停下。", 37, 3005102, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.effect_Voice("Voice6.img/lara/3/Female/9", 100);
                              cm.sendNormalTalk_Bottom("#face0#唔……那个家伙该不会！", 37, 3005111, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.effect_Voice("Voice6.img/lara/3/Female/10", 100);
                                cm.sendNormalTalk_Bottom("#face1#嗯？", 37, 3005102, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.effect_Voice("Voice6.img/lara/3/Female/2", 100);
                                  cm.sendNormalTalk_Bottom("#face0#果然！原来假装出手相救就是为了讹一笔辛苦费。", 37, 3005111, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.effect_Voice("Voice6.img/lara/3/Female/3", 100);
                                    cm.sendNormalTalk_Bottom("#face1##fc0xFFbfbfbf#（现在已经烦透了从村里的外乡人那里讹钱了。）", 37, 3005102, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_Voice("Voice6.img/lara/3/Female/4", 100);
                                      cm.sendNormalTalk_Bottom("#face1##fc0xFFbfbfbf#（要想赚钱就要与众不同，这帮蠢货！）", 37, 3005102, true, true, 1);
                                    } else if (status === V++) {
                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.setStandAloneMode(false);
                                      cm.updateInfoQuest(36200, "50=h1;set=1");
                                      cm.npc_LeaveField('oid=388548');
                                      cm.npc_LeaveField("oid=388549");
                                      cm.npc_LeaveField("oid=388550");
                                      cm.npc_LeaveField('oid=388551');
                                      cm.dispose();
                                      cm.warp(410004010, 0, true);
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