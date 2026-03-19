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
      cm.npc_ChangeController(1540531, "oid=33184", -378, -14, 6, -428, -328, 1, false, 0, false);
      cm.npc_ChangeController(1540532, "oid=33185", 392, -14, 14, 342, 442, 1, false, 0, false);
      cm.npc_ChangeController(1540533, 'oid=33186', 86, -14, 1, 36, 136, 1, false, 0, false);
      cm.npc_ChangeController(1540534, 'oid=33187', -910, 586, 314, -960, -860, 1, false, 0, false);
      cm.npc_ChangeController(1540535, "oid=33188", -450, -14, 6, -500, -400, 1, false, 0, false);
      cm.npc_ChangeController(1540536, "oid=33189", -511, -14, 7, -561, -461, 1, false, 0, false);
      cm.npc_ChangeController(1540537, "oid=33190", -337, -14, 4, -387, -287, 1, false, 0, false);
      cm.npc_ChangeController(1540538, "oid=33191", -272, -14, 4, -322, -222, 1, false, 0, false);
      cm.npc_ChangeController(1540539, "oid=33192", 312, -14, 17, 262, 362, 1, false, 0, false);
      cm.npc_ChangeController(1540540, "oid=33193", 338, 586, 320, 288, 388, 1, false, 0, false);
      cm.npc_ChangeController(1540541, "oid=33194", -348, 456, 366, -398, -298, 1, false, 0, false);
      cm.npc_ChangeController(1540542, "oid=33195", -551, 586, 327, -601, -501, 1, false, 0, false);
      cm.npc_ChangeController(1540543, 'oid=33196', -682, 586, 319, -732, -632, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1540450, "oid=12994759", -184, 2257, 555, -234, -134, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=12994759", 'summon', 0, 0);
      cm.npc_ChangeController(1540451, "oid=12994760", -132, 2257, 555, -182, -82, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=12994760", "summon", 0, 0);
      cm.npc_ChangeController(1540452, "oid=12994761", -455, 2257, 554, -505, -405, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=12994761", 'summon', 0, 0);
      cm.npc_ChangeController(1540453, "oid=12994762", -64, 2257, 556, -114, -14, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=12994762", 'summon', 0, 0);
      cm.npc_ChangeController(1540478, "oid=12994763", -521, 2117, 533, -571, -471, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=12994763", 'summon', 0, 0);
      cm.npc_ChangeController(1540464, "oid=12994764", -427, 2160, 532, -477, -377, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=12994764", 'summon', 0, 0);
      cm.npc_ChangeController(1540464, "oid=12994765", -357, 2160, 532, -407, -307, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=12994765", "summon", 0, 0);
      cm.npc_ChangeController(1540466, "oid=12994766", 257, 1877, 546, 207, 307, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=12994766", 'summon', 0, 0);
      cm.npc_ChangeController(1540466, "oid=12994767", 357, 1877, 546, 307, 407, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=12994767", 'summon', 0, 0);
      cm.npc_ChangeController(1540466, "oid=12994768", -1000, 2257, 551, -1050, -950, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=12994768", "summon", 0, 0);
      cm.npc_ChangeController(1540466, "oid=12994769", -850, 2257, 552, -900, -800, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=12994769", "summon", 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 2000, 92, -1600);
      cm.curNodeEventEnd(true);
      cm.effect_Voice("SoundEff.img/blackHeaven/signal_m", 100);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2113);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 200, 92, 2200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(6000);
                  cm.effect_Text(["#fn黑体##fs18#作战开始3天前   #fs15##fn黑体#受到压迫的城市——埃德尔斯坦"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayBGM("Bgm22.img/UndergroundPlace", 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.addPopupSay(1540451, 3000, "果然……\r\n反抗者的基地原来在这种地方啊. ", "Voice3.img/BlackHeaven/nh/3", 0);
                      cm.addPopupSay(1540452, 2000, "喂, 骑士团!\r\n请不要东张西望. ", "Voice3.img/BlackHeaven/sig/3", 0);
                      cm.inGameDirectionEvent_AskAnswerTime(7000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                        cm.effect_Text(["#fn黑体##fs26#反抗者秘密本部"], [100, 1500, 4, 0, 0, 1, 4, 0, 0, 0]);
                      } else {
                        if (status === V++) {
                          cm.addPopupSay(1540452, 2000, "奥尔卡在这里. \r\n请跟我来. ", "Voice3.img/BlackHeaven/sig/4", 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=12994761", -1, 500, 150);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=12994759", -1, 600, 150);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=12994760", -1, 700, 150);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=12994762", -1, 800, 150);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_同时移动镜头和人(1, 800);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushMoveInfo(0, 200, -458, 2200);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else if (status === V++) {
                                          cm.dispose();
                                          cm.warp(350013000, 0, true);
                                          cm.inGameDirectionEvent_ForcedFlip(0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;