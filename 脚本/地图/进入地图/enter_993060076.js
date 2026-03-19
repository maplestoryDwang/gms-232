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
  if (status <= V++)
    cm.dispose();
  else if (status === V++) {
    cm.npc_ChangeController(3003687, 'oid=276047', 351, 182, 64, 301, 401, 1, false, 0, false);
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, false, true);
    cm.setStandAloneMode(true);
    cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 182, -238);
  } else if (status === V++) {
    cm.curNodeEventEnd(true);
    cm.forceCompleteQuest(35157);
    cm.forceStartQuest(35157, '');
    cm.Hidden_background('eye_start', 1, 0, 0, 0);
    cm.Hidden_background('eye_loop', 1, 0, 0, 0);
    cm.Hidden_background('chain0', 1, 0, 0, 0);
    cm.Hidden_background('chain1', 1, 0, 0, 0);
    cm.fieldEffect_Hero9(0, 1000);
    cm.inGameDirectionEvent_AskAnswerTime(5000);
  } else if (status === V++) {
    cm.effect_Text(['#fn黑体##fs18#片刻之后，甲板某处'], [
      100,
      1000,
      6,
      -50,
      -50,
      1,
      4,
      0,
      0,
      0
    ]);
    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
    cm.inGameDirectionEvent_AskAnswerTime(4000);
  } else if (status === V++) {
    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
    cm.inGameDirectionEvent_AskAnswerTime(1400);
  } else if (status === V++) {
    cm.fieldEffect_PlayBGM('Bgm00.img/Silence', 0, 0);
    cm.fieldEffect_Hero9(80, 1000);
    cm.setAmbience('Ambience.img/BM1_thunderA', 200, 60);
    cm.sendNormalTalk_Bottom('#face0#呃……终于进入了迷雾屏障。\r\n不，不……但那个……是什么东西！？', 37, 3003661, false, true);
  } else if (status === V++)
    cm.inGameDirectionEvent_AskAnswerTime(2000);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face0#呃……离这边越来越近了。\r\n……巨，巨大的锁链在往这边过来！！', 37, 3003661, false, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face1#哎，哎呀！！', 37, 3003661, true, true);
  else if (status === V++) {
    cm.inGameDirectionEvent_AskAnswerTime(1000);
    cm.effect_Voice('SoundEff.img/Falldown', 100);
  } else if (status === V++) {
    cm.inGameDirectionEvent_AskAnswerTime(1000);
    cm.effect_Voice('SoundEff.img/Falldown', 100);
  } else if (status === V++) {
    cm.fieldEffect_PlayFieldSound('Sound/SoundEff.img/blackHeaven/secretmission4', 100);
    cm.onSetBackEffect('eye_loop', 1, 1, 0, 0);
    cm.inGameDirectionEvent_AskAnswerTime(3000);
  } else if (status === V++) {
    cm.fieldEffect_PlayFieldSound('Sound/SoundEff.img/blackHeaven/secretmission5', 100);
    cm.onSetBackEffect('eye_loop', 1, 0, 0, 0);
    cm.inGameDirectionEvent_AskAnswerTime(5000);
  } else if (status === V++) {
    cm.npc_ChangeController(3003661, 'oid=2202776', -197, 140, 63, -247, -147, 0, true, 0, false);
    cm.npc_SetSpecialAction('oid=2202776', 'summon', 0, 0);
    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
  } else if (status === V++)
    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
  else if (status === V++)
    cm.inGameDirectionEvent_AskAnswerTime(300);
  else if (status === V++) {
    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -197, 178);
  } else if (status === V++) {
    cm.npc_SetForceMove('oid=2202776', 1, 30, 130);
    cm.inGameDirectionEvent_AskAnswerTime(1000);
  } else if (status === V++) {
    cm.npc_SetForceMove('oid=2202776', -1, 30, 130);
    cm.inGameDirectionEvent_AskAnswerTime(1000);
  } else if (status === V++) {
    cm.npc_SetForceMove('oid=2202776', 1, 30, 130);
    cm.inGameDirectionEvent_AskAnswerTime(1000);
  } else if (status === V++)
    cm.sendNormalTalk_Bottom('#face0#呃……刚才看到的可怕残像到底是什么！？\r\n好像有几千双眼睛……在看着这边……', 37, 3003661, false, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face0#是迷雾展现给我们看的……幻影吗……\r\n刚才的那条锁链……也是幻影吗……！？', 37, 3003661, true, true);
  else if (status === V++)
    cm.inGameDirectionEvent_AskAnswerTime(2000);
  else if (status === V++) {
    cm.npc_SetForceMove('oid=2202776', -1, 500, 130);
    cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1500, 5000, 351, 178);
  } else if (status === V++)
    cm.inGameDirectionEvent_AskAnswerTime(8000);
  else if (status === V++) {
    cm.fieldEffect_PlayFieldSound('Sound/SoundEff.img/blackHeaven/secretmission3', 100);
    cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 5000, 5000, 351, 378);
  } else if (status === V++)
    cm.inGameDirectionEvent_AskAnswerTime(1500);
  else if (status === V++) {
    cm.forceCompleteQuest(35157);
    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
    cm.inGameDirectionEvent_AskAnswerTime(500);
  } else if (status === V++)
    cm.inGameDirectionEvent_AskAnswerTime(1500);
  else if (status === V++) {
    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
  } else if (status === V++)
    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
  else if (status === V++)
    cm.inGameDirectionEvent_AskAnswerTime(300);
  else if (status === V++) {
    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
  } else if (status === V++) {
    cm.npc_LeaveField('oid=2202776');
    cm.setStandAloneMode(false);
    cm.setInGameDirectionMode(false, true, false);
    cm.warp(993060044, 0, false);
    cm.dispose();
  }
}