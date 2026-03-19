var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.getNumberFromQuestInfo(33907, "check0") == 0) {
    action1(f, E, e);
  } else {
    cm.npc_ChangeController(1540822, "oid=60096", 152, -175, 0);
    cm.Hidden_background("HofM_1540822", 0);
    cm.npc_ChangeController(1540807, "oid=481376044", 230, -100, 0);
    cm.npc_SetSpecialAction("oid=481376044", "summon", 0, 0);
    cm.Hidden_background("HofM_1540822", 1);
    cm.showMapleHero();
    cm.dispose();
    return;
  }
}
function action1(f, E, e) {
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
      cm.npc_ChangeController(1540822, "oid=60100", 152, -175, 7, 141, 202, 0, false, 0, false);
      cm.Hidden_background("HofM_1540822", 1, 0, 0, 0);
      cm.npc_ChangeController(1540807, "oid=286211984", 230, -100, 5, 180, 280, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286211984", "summon", 0, 0);
      cm.npcMove(1540807, 0, -100, 0);
      cm.setNumberForQuestCustomData(33900, 6);
      cm.mapleHeroSetList([6]);
      cm.showMapleHero();
      cm.Hidden_background("HofM_1540822", 1, 0, 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setAmbience("Ambience.img/wind", 100, 60);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
      cm.fieldEffect_复合图片动画(["Map/Effect2.img/Cloud/skeleton", "animation", '', ''], [1, 0, 1, 0, 0, 0, 0, 0]);
      cm.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 0, 0, 0, 2000000, 4, 1);
      cm.sendNewEffects(17, [0, 300, 300, 200, -150]);
      cm.curNodeEventEnd(true);
      cm.effect_Text(["#fn黑体##fs18#几天后……    #fs15##fn黑体#圣地上空"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.fieldEffect_ProcessOnOffLayer("BlackOut", '', 2, 3000, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(3500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(14000, 1000, 14000, 200, -100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(12000);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_Monologue("#fs34#\r\n\r\n\r\n\r\n\r\n-ACT 1.5-\r\n#fs28# 重逢: #fs20#英雄的重逢", 1);
                cm.effect_Voice("Field.img/flowervioleta/wink", 100);
              } else {
                if (status === V++) {
                  cm.playSoundEffDirectly("Ambience.img/wind");
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("欢迎光临，龙神！", 37, 1540822, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("我已经听南哈特说了，你要去会见传说中的英雄们？我会保证你旅途平安的。", 37, 1540822, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#谢谢，毕竟要米乐一直背着我也不太容易。", 37, 1540805, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#主人可比看上去沉多了，想要运走可要好一会儿呢。", 37, 1540807, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face6#什么叫运走，别把我说的跟行李似的。", 37, 1540805, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("哈哈，不愧是龙神呢！\r\n我还是头一次见到有人能和龙开玩笑的。", 37, 1540822, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("那么，就请告诉我你打算去哪里吧。", 37, 1540822, true, true);
                              } else if (status === V++) {
                                cm.Hidden_background("HofM_1540822", 1, 1, 0, 0);
                                cm.updateInfoQuest(33907, "check0=1");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;