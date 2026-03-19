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
      cm.npc_ChangeController(2074035, "oid=13634", 384, -1137, 112, 334, 434, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 250, -1179);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 181, -1115);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074100, "oid=1942039", 332, -1144, 112, 282, 382, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1942039", "summon", 0, 0);
        cm.npc_ChangeController(2074103, "oid=1942040", -163, -1447, 83, -213, -113, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=1942040", "summon", 0, 0);
        cm.sendNormalTalk_Bottom("#face2#这……这个！你看看这个！\r\n#g地上的洞#k……", 37, 2074100, false, true);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 300, 0);
          cm.fieldEffect_ProcessOnOffLayer("back", "Map/Effect2.img/downtown2015/illust/30", 0, 300, 0, 0, 9, 4, 1);
          cm.sendNormalTalk_Bottom("#face2#这个……被挖成了#g宝玉的形状#k。\r\n有人在这里保管着宝玉！", 37, 2074100, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face2#还有你看看这里，#b中间的一个窟窿还是热乎的呢，#k\r\n这里之前肯定有过宝玉。", 37, 2074100, true, true);
          } else {
            if (status === V++) {
              cm.fieldEffect_ProcessOnOffLayer("back", '', 2, 500, 0, 0, 0, 0, 0);
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
              cm.inGameDirectionEvent_PushScaleInfo(1000, 1500, 1000, 100, -1170);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0##g(啪嗒)", 37, 2074103, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#b(什么声音啊？)", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#嗯？刚刚的你听到了吗？\r\n#b左边有什么声音……？#k", 37, 2074100, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#这里……除了我们还有谁在……", 37, 2074100, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=1942040", -1);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.npc_LeaveField("oid=1942040");
                            cm.sendNormalTalk_Bottom("#face2#是谁啊？那边！往#g左上方！#k那边逃走了，\r\n赶紧追上去！", 37, 2074100, false, true);
                          } else if (status === V++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                            cm.updateInfoQuest(30450, "m1=1;m2=1");
                            cm.forceStartQuest(30927, '1');
                            cm.forceCompleteQuest(30927);
                            cm.gainExp(340943);
                            cm.forceForfeitQuest(30927);
                            cm.updateInfoQuest(30927, '');
                            cm.updateInfoQuest(30450, "gExpCheck=1;m1=1;m2=1");
                            cm.forceCompleteQuest(30450);
                            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                            cm.dispose();
                            cm.warp(224000092, 3, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;