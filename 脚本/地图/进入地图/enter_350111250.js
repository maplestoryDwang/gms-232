var status = -1;
var selectionLog = [];
function action(G, h, b) {
  if (status == 0 && G == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = b;
  var d = -1;
  if (status <= d++) {
    cm.dispose();
  } else {
    if (status === d++) {
      cm.setNumberForQuestCustomData(33900, 6);
      cm.getPlayer().removeDragon();
      cm.mapleHeroBecomeNpc(9, 0);
      cm.onActionBarResult(6, -1);
      cm.onActionBarResult(5, 32);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(1540807, "oid=287839232", -274, 178, 27, -324, -224, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=287839232", 'summon', 0, 0);
      cm.npc_ChangeController(1540812, "oid=287839233", 0, 0, 24, -50, 50, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=287839233", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=287839233", "stand2", -1, 0);
      cm.sendNormalTalk_Bottom("#face4#咳咳……喂，别这么卑鄙地贴在顶上，下来打啊！", 37, 1540805, false, true, 1, 7000);
      cm.curNodeEventEnd(true);
      cm.effect_Voice("Voice3.img/HofM/ACT1/WD2/1", 128);
    } else {
      if (status === d++) {
        cm.setNpcSpecialActionReset("oid=287839233");
        cm.npc_SetSpecialAction("oid=287839233", "pre_attack", -1, 0);
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/waddler/pre_attack", 100);
        cm.sendNormalTalk_Bottom("#face2#哦……我没让你真下来啊……！？", 37, 1540805, true, true, 1, 4700);
        cm.effect_Voice("Voice3.img/HofM/ACT1/WD2/2", 128);
      } else {
        if (status === d++) {
          cm.sendNormalTalk_Bottom("#face1#主人，躲开！！！", 37, 1540807, true, true, 1, 1700);
          cm.effect_Voice("Voice3.img/HofM/ACT1/WD2/3", 128);
        } else {
          if (status === d++) {
            cm.setNpcSpecialActionReset("oid=287839233");
            cm.npc_SetSpecialAction("oid=287839233", "attack", 850, 0);
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/waddler/attack", 100);
            cm.fieldEffect_Tremble(0, 500, 30);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -108, 251);
            cm.emotion(13, -1);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === d++) {
              cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/WD2/4", 128);
              cm.sendNormalTalk_Bottom("#face2# #fs25#额#fs24#啊#fs23#啊#fs22#啊#fs21#啊#fs20#啊#fs19#啊#fs18#啊#fs17#啊#fs16#啊#fs15#啊#fs14#啊#fs13#啊#fs12#啊#fs11#啊~", 37, 1540805, false, true, 1, 2500);
              cm.npc_LeaveField("oid=287839232");
              cm.npc_LeaveField("oid=287839233");
            } else {
              if (status === d++) {
                cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/WD2/5", 128);
                cm.sendNormalTalk_Bottom("#face1#主人！！！", 37, 1540807, true, true, 1, 3000);
              } else {
                if (status === d++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else if (status === d++) {
                  cm.userSetFieldFloating(350111250, 0, 0, 0);
                  cm.updateInfoQuest(33901, 'rp=6');
                  cm.dispose();
                  cm.warp(350111300, 0, true);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.npc_LeaveField("oid=287839232");
                  cm.npc_LeaveField("oid=287839233");
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