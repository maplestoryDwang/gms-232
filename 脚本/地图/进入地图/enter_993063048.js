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
    cm.npc_ChangeController(3003741, 'oid=277184', -913, 206, 3, -963, -863, 1, false, 0, false);
    cm.npc_ChangeController(3003742, 'oid=277185', -677, 206, 15, -727, -627, 1, false, 0, false);
    cm.npc_ChangeController(3003781, 'oid=277186', -805, 206, 14, -855, -755, 1, false, 0, false);
    cm.npc_ChangeController(3003781, 'oid=277187', -1221, 206, 13, -1271, -1171, 0, false, 0, false);
    cm.npc_ChangeController(3003781, 'oid=277188', -173, 206, 8, -223, -123, 1, false, 0, false);
    cm.npc_ChangeController(3003782, 'oid=277189', -560, 206, 16, -610, -510, 0, false, 0, false);
    cm.npc_ChangeController(3003782, 'oid=277190', -64, 206, 7, -114, -20, 0, false, 0, false);
    cm.npc_ChangeController(3003782, 'oid=277191', -1018, 206, 6, -1068, -968, 1, false, 0, false);
    cm.npc_ChangeController(3003781, 'oid=277192', -398, 206, 4, -448, -348, 1, false, 0, false);
    cm.npc_ChangeController(3003721, 'oid=277193', -560, 206, 16, -610, -510, 1, false, 0, false);
    cm.npc_ChangeController(3003721, 'oid=277194', -398, 206, 4, -448, -348, 1, false, 0, false);
    cm.npc_ChangeController(3003721, 'oid=277195', -173, 206, 8, -223, -123, 1, false, 0, false);
    cm.npc_ChangeController(3003721, 'oid=277196', -64, 206, 7, -114, -20, 1, false, 0, false);
    cm.npc_ChangeController(3003721, 'oid=277197', -805, 206, 14, -855, -755, 0, false, 0, false);
    cm.npc_ChangeController(3003721, 'oid=277198', -1018, 206, 6, -1068, -968, 0, false, 0, false);
    cm.npc_ChangeController(3003721, 'oid=277199', -1221, 206, 13, -1271, -1171, 0, false, 0, false);
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, false, true);
    cm.setStandAloneMode(true);
    cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
    cm.updateInfoQuest(35750, '01=h0;11=h0;02=h0;21=h0;03=h1;22=h2;04=h0;23=h2;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1');
    cm.updateInfoQuest(35750, '01=h0;11=h0;02=h0;21=h0;03=h1;22=h0;04=h0;23=h2;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1');
    cm.updateInfoQuest(35750, '01=h0;11=h0;02=h0;21=h0;03=h1;22=h0;04=h0;23=h0;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1');
    cm.updateInfoQuest(35751, '800=h0;04=h3;81=h1;90=h0;82=h0;91=h0;83=h0;92=h0;84=h0;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0');
    cm.updateInfoQuest(35751, '800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h0;92=h0;84=h0;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0');
    cm.updateInfoQuest(35751, '800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h1;92=h0;84=h0;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0');
    cm.updateInfoQuest(35751, '800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h1;92=h0;84=h1;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0');
    cm.updateInfoQuest(35751, '800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0');
    cm.updateInfoQuest(35751, '800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0');
    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -683, 90);
  } else if (status === V++) {
    cm.curNodeEventEnd(true);
    cm.inGameDirectionEvent_SetHideEffect(1);
    cm.inGameDirectionEvent_AskAnswerTime(1000);
  } else if (status === V++) {
    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
    cm.inGameDirectionEvent_AskAnswerTime(2000);
  } else if (status === V++) {
    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -726, 190);
  } else if (status === V++)
    cm.inGameDirectionEvent_AskAnswerTime(300);
  else if (status === V++) {
    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
    cm.inGameDirectionEvent_AskAnswerTime(1000);
  } else if (status === V++) {
    cm.inGameDirectionEvent_AskAnswerTime(3000);
    cm.effect_NormalSpeechBalloon('南哈特……', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 3003742, null, cm.getPlayer().getId());
  } else if (status === V++)
    cm.sendNormalTalk_Bottom('女皇！！！', 56, 0, false, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('南哈特！！！', 56, 0, true, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('真的……都变成那样了……？', 56, 0, true, true);
  else if (status === V++)
    cm.inGameDirectionEvent_AskAnswerTime(1000);
  else if (status === V++) {
    cm.updateInfoQuest(35750, '01=h0;11=h0;02=h0;21=h1;03=h1;22=h0;04=h0;23=h0;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1');
    cm.updateInfoQuest(35750, '01=h0;11=h0;02=h0;21=h1;03=h1;22=h1;04=h0;23=h0;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1');
    cm.updateInfoQuest(35750, '01=h0;11=h0;02=h0;21=h1;03=h1;22=h1;04=h0;23=h1;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1');
    cm.inGameDirectionEvent_AskAnswerTime(200);
  } else if (status === V++) {
    cm.updateInfoQuest(35751, '800=h0;04=h3;81=h0;90=h0;82=h1;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0');
    cm.updateInfoQuest(35751, '800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0');
    cm.updateInfoQuest(35751, '800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h0;92=h0;84=h1;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0');
    cm.updateInfoQuest(35751, '800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h0;92=h0;84=h0;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0');
    cm.updateInfoQuest(35751, '800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h0;92=h0;84=h0;93=h0;85=h0;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0');
    cm.updateInfoQuest(35751, '800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h0;92=h0;84=h0;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0');
    cm.inGameDirectionEvent_AskAnswerTime(700);
  } else if (status === V++) {
    cm.updateInfoQuest(35750, '01=h0;11=h0;02=h0;21=h2;03=h1;22=h1;04=h0;23=h1;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1');
    cm.updateInfoQuest(35750, '01=h0;11=h0;02=h0;21=h2;03=h1;22=h2;04=h0;23=h1;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1');
    cm.updateInfoQuest(35750, '01=h0;11=h0;02=h0;21=h2;03=h1;22=h2;04=h0;23=h2;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1');
    cm.inGameDirectionEvent_AskAnswerTime(1000);
  } else if (status === V++) {
    cm.inGameDirectionEvent_AskAnswerTime(3000);
    cm.effect_NormalSpeechBalloon('啊……', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 3003742, null, cm.getPlayer().getId());
  } else if (status === V++) {
    cm.inGameDirectionEvent_AskAnswerTime(3000);
    cm.effect_NormalSpeechBalloon('#h0#……', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 3003742, null, cm.getPlayer().getId());
  } else if (status === V++)
    cm.sendNormalTalk_Bottom('不可以……', 56, 0, false, true);
  else if (status === V++)
    cm.inGameDirectionEvent_AskAnswerTime(2000);
  else if (status === V++) {
    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
    cm.inGameDirectionEvent_AskAnswerTime(500);
  } else if (status === V++)
    cm.sendNormalTalk_Bottom('不可以！！！', 56, 0, false, true);
  else if (status === V++)
    cm.inGameDirectionEvent_AskAnswerTime(1000);
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
    cm.forceCompleteQuest(35725);
    cm.gainExp(170671356);
    cm.setStandAloneMode(false);
    cm.setInGameDirectionMode(false, true, false);
    cm.warp(450011220, 1, true);
    cm.dispose();

  }
}