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
    cm.npc_ChangeController(3003656, 'oid=276028', -64, 447, 4, -114, -14, 0, true, 0, false);
    cm.npc_ChangeController(3003651, 'oid=276029', -174, 447, 4, -224, -124, 0, true, 0, false);
    cm.npc_ChangeController(3003680, 'oid=276030', 138, 447, 3, 88, 188, 1, false, 0, false);
    cm.npc_ChangeController(3003681, 'oid=276031', 339, 447, 3, 289, 389, 1, false, 0, false);
    cm.npc_ChangeController(3003682, 'oid=276032', 233, 447, 3, 183, 283, 1, false, 0, false);
    cm.npc_ChangeController(3003659, 'oid=276033', -635, 447, 14, -685, -585, 0, true, 0, false);
    cm.npc_ChangeController(3003659, 'oid=276034', -737, 447, 14, -787, -687, 0, true, 0, false);
    cm.npc_ChangeController(3003659, 'oid=276035', 549, 447, 1, 499, 599, 1, true, 0, false);
    cm.npc_ChangeController(3003659, 'oid=276036', 652, 447, 1, 602, 702, 1, true, 0, false);
    cm.npc_ChangeController(3003659, 'oid=276037', 754, 447, 1, 704, 804, 1, true, 0, false);
    cm.npc_ChangeController(3003659, 'oid=276038', 981, 447, 2, 931, 1031, 1, true, 0, false);
    cm.npc_ChangeController(3003659, 'oid=276039', 1095, 447, 2, 1045, 1145, 1, true, 0, false);
    cm.npc_ChangeController(3003659, 'oid=276040', 1234, 447, 2, 1184, 1284, 1, true, 0, false);
    cm.npc_ChangeController(3003695, 'oid=276041', -355, 419, 6, -405, -305, 0, false, 0, false);
    cm.npc_ChangeController(3003698, 'oid=276042', -498, 447, 14, -548, -478, 0, false, 0, false);
    cm.npc_ChangeController(3003697, 'oid=276043', -167, 159, 0, -217, -117, 0, false, 0, false);
    cm.npc_ChangeController(3003696, 'oid=276044', -428, 419, 6, -478, -378, 0, false, 0, false);
    cm.npc_ChangeController(3003694, 'oid=276045', -277, 419, 6, -327, -227, 0, false, 0, false);
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, false, true);
    cm.setStandAloneMode(true);
    cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
    cm.userSetFieldFloating(993060075, 0, 0, 0);
    cm.inGameDirectionEvent_AskAnswerTime(500);
  } else if (status === V++) {
    cm.curNodeEventEnd(true);
    cm.inGameDirectionEvent_ForcedFlip(-1);
    cm.inGameDirectionEvent_AskAnswerTime(300);
  } else if (status === V++)
    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 70, 400);
  else if (status === V++)
    cm.inGameDirectionEvent_AskAnswerTime(300);
  else if (status === V++) {
    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
    cm.inGameDirectionEvent_AskAnswerTime(1200);
  } else if (status === V++) {
    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
    cm.inGameDirectionEvent_AskAnswerTime(1400);
  } else if (status === V++)
    cm.sendNormalTalk_Bottom('#face0#伊黛娜，麻烦你分析一下。', 37, 3003651, false, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face1#是，没问题。', 37, 3003674, true, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face1#在迷雾中诞生的敌人……这些东西的根源是深邃、黑暗的意念。\r\n是在其中融入了高纯度的艾尔达后制造出来的。', 37, 3003674, true, true);
  else if (status === V++) {
    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
    cm.inGameDirectionEvent_AskAnswerTime(1600);
  } else if (status === V++) {
    cm.fieldEffect_PlayFieldSound('Sound/SoundEff.img/blackHeaven/secretmission3', 100);
    cm.fieldEffect_ProcessOnOffLayer('00', 'Effect/Direction20.img/effect/BM1_mist/0', 0, 1000, 0, -80, 1, 4, 1);
    cm.inGameDirectionEvent_AskAnswerTime(2000);
  } else if (status === V++)
    cm.sendNormalTalk_Bottom('#face1#那片迷雾中一定有什么东西。\r\n只要那个东西还存在，这些意念体就会继续出现。', 37, 3003674, false, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face0#是黑太阳……的影响吗？', 37, 3003651, true, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face1#无法确定。\r\n因为看不到里面的情况。', 37, 3003674, true, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face1#问题是，有一种强大的屏障笼罩着迷雾。\r\n高能量……可以把它视作是一种非常高浓度的意念。', 37, 3003674, true, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face3#如果集中火力的话呢？', 37, 3003672, true, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face1#那就必须先消灭掉迷雾屏障和我们舰队之间的敌人。\r\n直接发射的话，威力会被削弱。', 37, 3003674, true, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face1#事事全都如愿只存在于假设之中。\r\n……关键是是否可以迅速压制敌人。', 37, 3003674, true, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face1#因为后面也有敌人正在接近，\r\n很难投入大量的兵力。', 37, 3003674, true, true);
  else if (status === V++) {
    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0);
    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
    cm.inGameDirectionEvent_AskAnswerTime(1600);
  } else if (status === V++)
    cm.sendNormalTalk_Bottom('#face3#交给我们反抗者吧。\r\n深入敌营，攻击敌人的弱点……是我们的特长。', 37, 3003672, false, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face1#好，那我们诺特勒斯号负责构想战术。', 37, 3003673, true, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face1#诺巴阵营负责殿后。', 37, 3003674, true, true);
  else if (status === V++)
    cm.inGameDirectionEvent_AskAnswerTime(1000);
  else if (status === V++) {
    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
  } else if (status === V++) {
    cm.gainExp(171586691);
    cm.gainItem(4036446, -50);
    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
  } else if (status === V++) {
    cm.inGameDirectionEvent_AskAnswerTime(700);
  } else if (status == V++) {
    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 562, 103);
  } else if (status === V++) {
    cm.npc_LeaveField('oid=50580');
    cm.npc_LeaveField('oid=50581');
    cm.npc_LeaveField('oid=50586');
    cm.npc_LeaveField('oid=50585');
    cm.npc_LeaveField('oid=50590');
    cm.setStandAloneMode(false);
    cm.setInGameDirectionMode(false, true, false);
    cm.dispose();
    cm.warp(450009100, 0, false);
  }
}