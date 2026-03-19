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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530180, "oid=37822010", 860, 20, 3, 810, 910, 1, true, false);
      cm.npc_SetSpecialAction("oid=37822010", 'summon', 0, 0);
      cm.npc_ChangeController(1530240, "oid=37822011", 660, 20, 2, 610, 710, 0, true, false);
      cm.npc_SetSpecialAction("oid=37822011", "summon", 0, 0);
      cm.npc_ChangeController(1530300, "oid=37822012", 600, 20, 2, 550, 650, 0, true, false);
      cm.npc_SetSpecialAction("oid=37822012", "summon", 0, 0);
      cm.npc_ChangeController(1530310, "oid=37822013", 540, 20, 2, 490, 590, 0, true, false);
      cm.npc_SetSpecialAction("oid=37822013", "summon", 0, 0);
      cm.npc_ChangeController(1530270, "oid=37822014", 480, 20, 1, 430, 530, 0, true, false);
      cm.npc_SetSpecialAction("oid=37822014", "summon", 0, 0);
      cm.npc_ChangeController(1530280, "oid=37822015", 420, 20, 1, 370, 470, 0, true, false);
      cm.npc_SetSpecialAction("oid=37822015", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 120, 700, 58);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(6048);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("唉咿，怎么可能。那也太夸张了。", 37, 1530270, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("这次的故事有些离谱，卡珊德拉。", 37, 1530310, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("是真的啦，我卡珊德拉什么时候说过谎？", 37, 1530180, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("我们当然相信你……但你这么说也没有确切的证据。", 37, 1530270, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("空无一人的旧楼那里传来了孩子的哭声！\r\n还有，你们看看那个看门大叔的样子，长得就很可疑啊，不是吗？", 37, 1530180, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("但是，我从未在旧楼附近听到过孩子的哭声。", 37, 1530270, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("如果总分是10分，这次怪谈我给7分……", 37, 1530310, true, true);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                            cm.setAmbience("Ambience.img/ding", 100, 60);
                            cm.npc_SetSpecialAction("oid=37822010", 'shade', -1, 1);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.playNpcEff(1530180);
                              cm.inGameDirectionEvent_Monologue("居然敢怀疑我卡珊德拉的灵性……", 1);
                              cm.effect_Voice("Voice2.img/Friends/CH4_01/1", 100);
                            } else {
                              if (status === V++) {
                                cm.playNpcEff(1530180);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=37822012"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=37822011"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=37822013"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=37822014"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=37822015"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("哎呀，天天天天天啊！这次的故事真是太轰动了！", 37, 1530310, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("你说的没错，卡珊德拉。\r\n我们怎么会怀疑你所说的话呢？？", 37, 1530300, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else if (status === V++) {
                                        cm.forceStartQuest(32864, '');
                                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                                        cm.forceCompleteQuest(32864);
                                        cm.dispose();
                                        cm.warp(330000200, 0);
                                        cm.inGameDirectionEvent_SetHideEffect(0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;