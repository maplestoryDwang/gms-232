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
    cm.npc_ChangeController(3003568, 'oid=277141', 534, -20, 108, 484, 584, 1, true, 0, false);
    cm.npc_ChangeController(3003569, 'oid=277142', -136, -17, 106, -186, -86, 1, true, 0, false);
    cm.npc_ChangeController(3003569, 'oid=277143', 2372, 74, 113, 2322, 2422, 1, true, 0, false);
    cm.npc_ChangeController(3003567, 'oid=277144', 2765, 67, 114, 2715, 2815, 1, true, 0, false);
    cm.npc_ChangeController(3003568, 'oid=277145', 2605, 69, 113, 2555, 2655, 1, true, 0, false);
    cm.npc_ChangeController(9063002, 'oid=277146', -310, -18, 106, -360, -260, 0, false, 0, false);
    cm.npc_ChangeController(9063003, 'oid=277147', 143, -85, 135, 93, 193, 1, false, 0, false);
    cm.npc_ChangeController(3003570, 'oid=277148', 2934, 67, 149, 2884, 2984, 1, true, 0, false);
    cm.npc_ChangeController(3003658, 'oid=277149', 1607, 31, 111, 1557, 1657, 1, true, 0, false);
    cm.npc_ChangeController(3003659, 'oid=277150', 1932, 35, 112, 1882, 1982, 1, true, 0, false);
    cm.npc_ChangeController(3003659, 'oid=277151', 2017, 47, 112, 1967, 2067, 1, true, 0, false);
    cm.npc_ChangeController(3003660, 'oid=277152', 1799, 29, 111, 1749, 1849, 1, true, 0, false);
    cm.npc_ChangeController(3003661, 'oid=277153', 1054, 28, 110, 1004, 1104, 0, true, 0, false);
    cm.npc_ChangeController(3003661, 'oid=277154', 981, 18, 109, 931, 1031, 0, true, 0, false);
    cm.npc_ChangeController(3003667, 'oid=277155', 818, -9, 108, 768, 868, 0, true, 0, false);
    cm.npc_ChangeController(3003660, 'oid=277156', 1865, 29, 111, 1815, 1915, 1, true, 0, false);
    cm.npc_ChangeController(3003667, 'oid=277157', 917, 4, 109, 867, 967, 0, true, 0, false);
    cm.hideNpc(9063002);
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, false, true);
    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
    cm.setStandAloneMode(true);
    cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
    cm.inGameDirectionEvent_SetHideEffect(1);
    cm.npc_ChangeController(3003679, 'oid=2211883', 322, -108, 137, 272, 372, 1, false, 0, false);
    cm.npc_SetSpecialAction('oid=2211883', 'summon', 0, 0);
    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 260, -125);
  } else if (status === V++) {
    cm.curNodeEventEnd(true);
    cm.inGameDirectionEvent_AskAnswerTime(500);
  } else if (status === V++) {
    cm.effect_Text(['#fn黑体##fs18#同一时刻，前哨基地'], [
      100,
      1000,
      6,
      -50,
      -50,
      1,
      4,
      0,
      0,
      0,
      0
    ]);
    cm.inGameDirectionEvent_AskAnswerTime(4000);
  } else if (status === V++) {
    cm.fieldEffect_PlayFieldSound('Sound/SoundEff.img/radionoise', 100);
    cm.sendNormalTalk_Bottom('#face2#这里是白色之矛，这里是白色之矛。\r\n听到请回答。', 37, 3003751, false, true);
  } else if (status === V++)
    cm.inGameDirectionEvent_AskAnswerTime(1000);
  else if (status === V++) {
    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
    cm.inGameDirectionEvent_AskAnswerTime(1200);
  } else if (status === V++) {
    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
    cm.inGameDirectionEvent_AskAnswerTime(1400);
  } else if (status === V++)
    cm.inGameDirectionEvent_AskAnswerTime(500);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face0#南哈特，没事吧？白色之矛似乎还在战斗。', 37, 9063003, false, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face2#好不容易平缓下来。现在搜查队马上就可以行动了。', 37, 3003751, true, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face2#对了，我有事想要确认，所以才联系你的。', 37, 3003751, true, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face2#你能帮我确认一下我想的对不对吗？', 37, 3003751, true, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face0#你说说看。', 37, 9063003, true, true);
  else if (status === V++)
    cm.inGameDirectionEvent_AskAnswerTime(1500);
  else if (status === V++) {
    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
    cm.inGameDirectionEvent_AskAnswerTime(500);
  } else if (status === V++)
    cm.inGameDirectionEvent_AskAnswerTime(1000);
  else if (status === V++) {
    cm.fieldEffect_PlayBGM('Bgm49/WaveofEmptiness', 0, 0);
    cm.sendNormalTalk_Bottom('#face2#从我们整理的信息来看，#r创世仪式#k一共需要#r三种东西#k。', 37, 3003751, false, true);
  } else if (status === V++)
    cm.sendNormalTalk_Bottom('#face2#首先，光明超越者艾欧娜拥有的光。即，#fs20##r创造之力。', 37, 3003751, true, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face2#第二，黑魔法师自身拥有的黑暗。#fs20##r破坏之力。', 37, 3003751, true, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face2#第三，能够形成汪洋大海的大量高纯度艾尔达。\r\n#fs20##r神秘河#fs16##k。', 37, 3003751, true, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face2#我想了解的是关于第三条#r神秘河#k相关的事。', 37, 3003751, true, true);
  else if (status === V++)
    cm.inGameDirectionEvent_AskAnswerTime(1500);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face2#神秘河是三个世界合三为一的过程中发现的艾尔达流动。\r\n并且这一现象发源于#r超越者的空白#k。', 37, 3003751, false, true);
  else if (status === V++) {
    cm.fieldEffect_ProcessOnOffLayer('black', 'Effect/Direction16.img/effect/sealBlack0/0', 0, 700, 0, 80, 0, 4, 1, -1, 0, 0, 0);
    cm.sendNormalTalk_Bottom('#face2#具体原因为时间超越者伦娜，以及黑魔法师自身的封印。', 37, 3003751, true, true);
  } else if (status === V++)
    cm.sendNormalTalk_Bottom('#face2#也就是说最终，\r\n为了自己的理想，黑魔法师需要封印自己……', 37, 3003751, true, true);
  else if (status === V++) {
    cm.fieldEffect_ProcessOnOffLayer('black', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    cm.fieldEffect_ProcessOnOffLayer('f00', 'Effect/Direction20.img/effect/BMPre_flashBack/0', 0, 1000, 0, -80, 1, 4, 1, -1, 0, 0, 0);
    cm.inGameDirectionEvent_AskAnswerTime(2000);
  } else if (status === V++)
    cm.sendNormalTalk_Bottom('#face2#那数百年前，那场战斗难道……', 37, 3003751, false, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face0#……你想的没错。', 37, 9063003, true, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face0#现在想想……\r\n拥有创世理想的他，在冒险岛世界纵火本身就没有意义。', 37, 9063003, true, true);
  else if (status === V++) {
    cm.fieldEffect_ProcessOnOffLayer('f00', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    cm.inGameDirectionEvent_AskAnswerTime(1500);
  } else if (status === V++)
    cm.sendNormalTalk_Bottom('#face0#那场进攻假借召集成为自己手足的军团长名义，同时……', 37, 9063003, false, true);
  else if (status === V++) {
    cm.fieldEffect_ProcessOnOffLayer('hero', 'Effect/Direction13.img/effect/zero/hero/0', 0, 700, 0, -80, 0, 4, 1, -1, 0, 0, 0);
    cm.sendNormalTalk_Bottom('#face0#召唤能封印自己的勇士。', 37, 9063003, true, true);
  } else if (status === V++)
    cm.inGameDirectionEvent_AskAnswerTime(1500);
  else if (status === V++) {
    cm.fieldEffect_ProcessOnOffLayer('hero', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    cm.inGameDirectionEvent_AskAnswerTime(1500);
  } else if (status === V++)
    cm.sendNormalTalk_Bottom('#face2#……', 37, 3003751, false, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face0#你脸色不太好，南哈特。我理解你的愤怒……', 37, 9063003, true, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face2#不，不是的。\r\n比这更大的问题是为了这个假设能够成立，还需要解释很多东西，', 37, 3003751, true, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face0#这是什么意思？', 37, 9063003, true, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face2#得知黑魔法师的目的后，回想他的所作所为，四处都充满了微妙的违和感。', 37, 3003751, true, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face2#比如……你想想黑魔法师封印的过程。\r\n恶魔和阿卡伊勒之间的那件事。', 37, 3003751, true, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face0#二人反目的事？\r\n阿卡伊勒因恶魔的背叛而仇视他？', 37, 9063003, true, true);
  else if (status === V++) {
    cm.fieldEffect_ProcessOnOffLayer('home', 'Effect/Direction6.img/effect/tuto/backToHome/0', 0, 700, 0, 0, 0, 4, 1, -1, 0, 0, 0);
    cm.inGameDirectionEvent_AskAnswerTime(1500);
  } else if (status === V++)
    cm.sendNormalTalk_Bottom('#face2#如果当时，阿卡伊勒没有仇视恶魔，\r\n没有背后搞事情放火烧了神木村……', 37, 3003751, false, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face2#因家人死去而愤怒的恶魔就不会召唤英雄，\r\n或英雄们并没有相信恶魔的话……', 37, 3003751, true, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face2#封印就不会成功。', 37, 3003751, true, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face0#嗯……', 37, 9063003, true, true);
  else if (status === V++)
    cm.inGameDirectionEvent_AskAnswerTime(2000);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face2#但根据沃莉回忆，这一连串事件都是以#b小事为契机#k开始的。', 37, 3003751, false, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face0#小事为契机？', 37, 9063003, true, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face2#女神伦娜的封印成功之后。', 37, 3003751, true, true);
  else if (status === V++) {
    cm.fieldEffect_ProcessOnOffLayer('home', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    cm.fieldEffect_ProcessOnOffLayer('06', 'Effect/Direction20.img/effect/BM2_ak/0', 0, 1500, 0, 0, 0, 4, 1, -1, 0, 0, 0);
    cm.fieldEffect_ProcessOnOffLayer('07', 'Effect/Direction20.img/effect/BM2_ak/1', 0, 1500, 0, 0, 0, 4, 1, -1, 0, 0, 0);
    cm.inGameDirectionEvent_AskAnswerTime(3000);
  } else if (status === V++) {
    cm.inGameDirectionEvent_AskAnswerTime(5000);
    cm.effect_Text(['#r#fn黑体##fs26#应该给恶魔颁个奖。'], [
      100,
      2500,
      4,
      0,
      0,
      1,
      4,
      0,
      0,
      0,
      0
    ]);
  } else if (status === V++) {
    cm.fieldEffect_ProcessOnOffLayer('07', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    cm.fieldEffect_ProcessOnOffLayer('08', 'Effect/Direction20.img/effect/BM2_ak/2', 0, 700, 0, 0, 0, 4, 1, -1, 0, 0, 0);
    cm.inGameDirectionEvent_AskAnswerTime(3000);
  } else if (status === V++)
    cm.sendNormalTalk_Bottom('#face0#切……那个魔族的家伙……', 37, 3003405, false, true);
  else if (status === V++)
    cm.inGameDirectionEvent_AskAnswerTime(1000);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face2#一句话……为了让阿卡伊勒，恶魔，以及英雄们封印自己，黑魔法师做的事只有那一件而已。', 37, 3003751, false, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face0#嗯……！', 37, 9063003, true, true);
  else if (status === V++)
    cm.inGameDirectionEvent_AskAnswerTime(1000);
  else if (status === V++) {
    cm.fieldEffect_ProcessOnOffLayer('06', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    cm.fieldEffect_ProcessOnOffLayer('08', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
    cm.inGameDirectionEvent_AskAnswerTime(1200);
  } else if (status === V++) {
    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
    cm.inGameDirectionEvent_AskAnswerTime(1400);
  } else if (status === V++)
    cm.sendNormalTalk_Bottom('#face2#这到底应该怎么解释？ ', 37, 3003751, false, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face0#核心碎片的分析现在已经到最后阶段了 。\r\n不管真相是什么，我们很快就能知道。', 37, 9063003, true, true);
  else if (status === V++)
    cm.sendNormalTalk_Bottom('#face0#我得做好心理准备……', 37, 9063003, true, true);
  else if (status === V++) {
    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
    cm.inGameDirectionEvent_AskAnswerTime(500);
  } else if (status === V++)
    cm.inGameDirectionEvent_AskAnswerTime(2000);
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
    cm.forceCompleteQuest(35731);
    cm.finishAchievement(1233);
    cm.gainExp(170671356);
    cm.npc_LeaveField('oid=2211883');
    cm.npc_LeaveField('oid=2211883');
    cm.setStandAloneMode(false);
    cm.setInGameDirectionMode(false, true, false);
    cm.warp(450011660, 0, false);
    cm.dispose();
  }
}