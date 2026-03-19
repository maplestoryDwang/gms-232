var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  if (cm.getNumberFromQuestInfo(33905, "check3") > 0) {
    cm.fieldEffect_PlayBGM("Bgm45.img/Army Of Fears Theme", 0, 0);
    cm.npc_ChangeController(1540795, "oid=57217", -691, -6, 7, -720, -641, 1, false, 0, false);
    cm.fieldEffect_复合图片动画(["Map/Effect2.img/Blizzard2/skeleton", 'normal', '', ''], [1, 1, 0, 0, 0, 0, 0, 0]);
    cm.setAmbience("Ambience.img/blizzard_soft", 80, 60);
    cm.npc_ChangeController(1540789, "oid=287759746", -50, -1000, 3, -100, 0, 0, false, 0, false);
    cm.npc_SetSpecialAction("oid=287759746", "summon", 0, 0);
    cm.npc_ChangeController(1540792, "oid=287759747", -50, -1000, 3, -100, 0, 0, false, 0, false);
    cm.npc_SetSpecialAction("oid=287759747", "summon", 0, 0);
    cm.npc_ChangeController(1540790, "oid=287759748", -50, -1000, 3, -100, 0, 0, false, 0, false);
    cm.npc_SetSpecialAction("oid=287759748", 'summon', 0, 0);
    cm.npc_ChangeController(1540793, "oid=287759749", -50, -1000, 3, -100, 0, 0, false, 0, false);
    cm.npc_SetSpecialAction("oid=287759749", "summon", 0, 0);
    cm.npcMove(1540789, 2800, 1250, 0);
    cm.npcMove(1540792, 1750, 1350, 0);
    cm.npcMove(1540790, 2250, 1450, 0);
    cm.npcMove(1540793, 1750, 1550, 0);
    cm.setNumberForQuestCustomData(33900, 4);
    cm.mapleHeroBecomeNpc(7, 0);
    cm.getPlayer().makeDragon(2217);
    cm.onActionBarResult(6, -1);
    cm.onActionBarResult(5, 30);
    cm.dispose();
  } else {
    action0(f, E, e);
  }
}
function action0(f, E, e) {
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
      cm.npc_ChangeController(1540795, "oid=57217", -691, -6, 7, -720, -641, 1, false, 0, false);
      cm.updateInfoQuest(33915, "act1=350111000");
      cm.fieldEffect_复合图片动画(["Map/Effect2.img/Blizzard2/skeleton", "normal", '', ''], [1, 1, 0, 0, 0, 0, 0, 0]);
      cm.setAmbience("Ambience.img/blizzard_soft", 80, 60);
      cm.npc_ChangeController(1540789, "oid=287759746", -50, -1000, 3, -100, 0, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=287759746", "summon", 0, 0);
      cm.npc_ChangeController(1540792, "oid=287759747", -50, -1000, 3, -100, 0, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=287759747", 'summon', 0, 0);
      cm.npc_ChangeController(1540790, "oid=287759748", -50, -1000, 3, -100, 0, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=287759748", "summon", 0, 0);
      cm.npc_ChangeController(1540793, "oid=287759749", -50, -1000, 3, -100, 0, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=287759749", "summon", 0, 0);
      cm.npcMove(1540789, 2800, 1250, 0);
      cm.npcMove(1540792, 1750, 1350, 0);
      cm.npcMove(1540790, 2250, 1450, 0);
      cm.npcMove(1540793, 1750, 1550, 0);
      cm.setNumberForQuestCustomData(33900, 6);
      cm.getPlayer().removeDragon();
      cm.mapleHeroBecomeNpc(9, 0);
      cm.onActionBarResult(6, -1);
      cm.onActionBarResult(5, 32);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1540807, "oid=287759750", -200, -100, 9, -250, -150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=287759750", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
        cm.forceCompleteQuest(33921);
        cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
        cm.updateInfoQuest(33960, "33920=1;33921=1");
        cm.inGameDirectionEvent_AskAnswerTime(3000);
        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
      } else {
        if (status === V++) {
          cm.onTeleport(0, 3, cm.getPlayer().getId(), -544, 262);
          cm.inGameDirectionEvent_MoveAction(3);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#咳咳……米乐！", 37, 1540805, false, true);
                  cm.effect_Voice("Voice3.img/HofM/ACT1/ARMY/1", 128);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(2);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(0);
                      cm.sendNormalTalk_Bottom("#face2#你怎么能自己一个人走？我差点可就要命丧黄泉了！", 37, 1540805, false, true);
                      cm.effect_Voice("Voice3.img/HofM/ACT1/ARMY/2", 128);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#嘘，你看那边，主人。", 37, 1540807, true, true);
                        cm.effect_Voice("Voice3.img/HofM/ACT1/ARMY/3", 128);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("恩？你让我看什么？\r\n除了暴风雪什么都没……", 37, 1540805, true, true);
                          cm.effect_Voice("Voice3.img/HofM/ACT1/ARMY/4", 128);
                        } else if (status === V++) {
                          cm.npc_LeaveField("oid=287759750");
                          cm.npc_LeaveField("oid=287759750");
                          cm.setInGameDirectionMode(false, true, false);
                          cm.onActionBarResult(6, -1);
                          cm.mapleHeroBecomeNpc(-1, 0);
                          cm.setNumberForQuestCustomData(33900, 4);
                          cm.mapleHeroBecomeNpc(7, 0);
                          cm.getPlayer().makeDragon(2217);
                          cm.onActionBarResult(6, -1);
                          cm.onActionBarResult(5, 30);
                          cm.addPopupSay(1540807, 2500, "是#b右边#k，主人。", '', 0);
                          cm.dispose();
                          cm.updateInfoQuest(33905, 'check3=1');
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