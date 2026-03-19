var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.getQuestStatus(63026) > 0) {
    action2(f, E, e);
  } else {
    action1(f, E, e);
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
  if (status <= V++)
    cm.dispose();
  else if (status === V++) {
    cm.npc_ChangeController(9400205, 'oid=113240', -443, 94, 6, -493, -393, 0, false, 0, false);
    cm.npc_ChangeController(9400256, 'oid=113241', 0, 94, 8, -50, 50, 1, false, 0, false);
    cm.npc_ChangeController(9400257, 'oid=113242', 0, 94, 8, -50, 50, 1, false, 0, false);
    cm.npc_ChangeController(9400258, 'oid=113243', 0, 94, 8, -50, 50, 1, false, 0, false);
    cm.npc_ChangeController(9400259, 'oid=113244', 0, 94, 8, -50, 50, 1, false, 0, false);
    cm.npc_ChangeController(9400260, 'oid=113245', 0, 94, 8, -50, 50, 1, false, 0, false);
    cm.npc_ChangeController(9400261, 'oid=113246', 0, 94, 8, -50, 50, 1, false, 0, false);
    cm.npc_ChangeController(9400262, 'oid=113247', 0, 94, 8, -50, 50, 1, false, 0, false);
    cm.npc_ChangeController(9400263, 'oid=113248', 0, 94, 8, -50, 50, 1, false, 0, false);
    cm.npc_ChangeController(9400264, 'oid=113249', 0, 94, 8, -50, 50, 1, false, 0, false);
    cm.npc_ChangeController(9400265, 'oid=113250', 0, 94, 8, -50, 50, 1, false, 0, false);
    cm.npc_ChangeController(9400266, 'oid=113251', 0, 94, 8, -50, 50, 1, false, 0, false);
    cm.npc_ChangeController(9400267, 'oid=113252', 0, 94, 8, -50, 50, 1, false, 0, false);
    cm.updateInfoQuest(63090, 'DnN=1');
    cm.updateInfoQuest(63091, 'SunState=9');
    cm.updateInfoQuest(63090, 'DnN=1;raining=0');
    cm.updateInfoQuest(63090, 'lightning=0;DnN=1;raining=0');
    cm.updateInfoQuest(63099, 'enterQ=4;keyCount=0');
    cm.updateInfoQuest(63099, 'door=0;enterQ=4;keyCount=0');
    cm.updateInfoQuest(63095, 'angle=0');
    cm.updateInfoQuest(63090, 'lightning=0;red=1;DnN=1;raining=0');
    cm.updateInfoQuest(63090, 'lightning=0;green=1;red=1;DnN=1;raining=0');
    cm.updateInfoQuest(63090, 'lightning=0;green=1;red=1;DnN=1;raining=0;blue=1');
    cm.updateInfoQuest(63098, 'FirstEnter=1');
    cm.forceStartQuest(63092, '');
    cm.playerMessage(5, '夜之气息缠绕全身，体力与恢复能力提高了。');
    cm.gainSkillBuff(2023633);
    cm.fieldEffect_PlayFieldSound('Sound/SoundEff.img/PL_AfterLand/RotationBack', 128);
    cm.updateInfoQuest(63095, 'angle=180');
    cm.forceStartQuest(63096, 'happy');
    cm.forceStartQuest(63253, 'not');
    cm.playSoundEffDirectly('SoundEff.img/PL_AfterLand/clear_day');
    cm.playSoundEffDirectly('SoundEff.img/PL_AfterLand/clear_night');
    cm.playSoundEffDirectly('SoundEff.img/PL_AfterLand/raining');
    cm.playSoundEffDirectly('SoundEff.img/PL_AfterLand/lightning');
    cm.playSoundEffDirectly('SoundEff.img/PL_AfterLand/rainNlightning');
    cm.setMobImage('SoundEff.img/PL_AfterLand/clear_night', 200);
    cm.fieldEffect_PlayFieldSound('Sound/SoundEff.img/PL_AfterLand/lamp_cle_on', 100);
    cm.fieldEffect_InsertCanvas11(5, 0, 0, 0, 0, 0);
    cm.fieldEffect_BackgroundCanvas(5, 255, 255, 255, 100, 0, 0);
    cm.forceStartQuest(63099, '0');
    cm.afterlandInitMapObject([
      'RotationBack_1',
      'RotationBack_2',
      'RotationBack_3',
      'RotationBack_4',
      'RotationBack_always',
      'RotationBack_always2'
    ], [
      1,
      1,
      1,
      1,
      1,
      1
    ], [
      1,
      1,
      1,
      1,
      1,
      1
    ], [
      1,
      1,
      1,
      1,
      1,
      1
    ], [
      45,
      135,
      225,
      315,
      0,
      0
    ], [
      0,
      0,
      0,
      0,
      40,
      30
    ]);
    cm.afterlandChangeMapObject('RotationBack', 0, 0, 0, 1, 180, 100, 1);
    cm.afterlandChangeMapObject('nightObj', 1, 1, 3000, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('FB_cle', 1, 0, 3000, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('FB_lig_day', 1, 0, 3000, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('FB_lig_night', 1, 0, 3000, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('FB_rai', 1, 0, 3000, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('FB_rainlig', 1, 0, 3000, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('lamp_cle_on', 1, 1, 3000, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('lamp_lig_on', 1, 0, 3000, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('lamp_rai_on', 1, 0, 3000, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('SunObj0', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('SunObj1', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('SunObj2', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('SunObj3', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('SunObj4', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('SunObj5', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('SunObj6', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('SunObj7', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('SunObj8', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('SunObj9', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('SunObj9', 1, 1, 100, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('Key0_Open', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('Key0_Close', 1, 1, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('Key1_Open', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('Key1_Close', 1, 1, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('Key2_Open', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('Key2_Close', 1, 1, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('Key3_Open', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('Key3_Close', 1, 1, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('Key4_Open', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('Key4_Close', 1, 1, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('Key5_Open', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('Key5_Close', 1, 1, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('Key6_Open', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('Key6_Close', 1, 1, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('Key7_Open', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('Key7_Close', 1, 1, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('Key8_Open', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('Key8_Close', 1, 1, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('Key9_Open', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('Key9_Close', 1, 1, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('Key10_Open', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('Key10_Close', 1, 1, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('Key11_Open', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('Key11_Close', 1, 1, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('rainbow', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('q63068_in', 1, 1, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('q63068_out', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('q63070_in', 1, 1, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('q63070_out', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('q63103s', 1, 1, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('flower', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('gT01_0', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('gT02_0', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('gT03_0', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('gT01_1', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('gT02_1', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('gT03_1', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('gT01_2', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('gT02_2', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('gT03_2', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('gT01_3', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('gT02_3', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('gT03_3', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('colorTree1', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('colorTree2', 1, 0, 0, 0, 0, 0, 0);
    cm.afterlandChangeMapObject('colorTree3', 1, 0, 0, 0, 0, 0, 0);
    cm.fieldEffect_InsertCanvas11(5, 0, 0, 0, 0, 0);
    cm.fieldEffect_BackgroundCanvas(5, 255, 255, 255, 100, 0, 0);
    cm.setMobImage('SoundEff.img/PL_AfterLand/clear_night', 200);
    cm.dispose();
    cm.warp(867113101, 0, true);
  }
}
function action2(f, E, e) {
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
    for (var V = 0; V < 12; V++) {
      var O = cm.getNumberFromQuestInfo(63094, '' + V) == 1;
      cm.afterlandChangeMapObject('Key' + V + '_Open', 1, O ? 1:0, 1000, 0, 0, 0, 0);
      cm.afterlandChangeMapObject('Key' + V + '_Close', 1, O ? 0:1, 1000, 0, 0, 0, 0);
    }
    if (!cm.isQuestFinished(63026)) {
      cm.spawnMobLimit(9402071, 1, 4, 94, 100);
      cm.effect_NormalSpeechBalloon('#fs12#草丛后面好像有什么东西？\r\n把草清理掉吧。', 1, 0, 0, 5000, 1, 0, 0, 0, 4, 0, cm.getPlayer().getId());
    }
    var b = cm.getNumberFromQuestInfo(63260, 'enterD');
    if (b == 1)
      cm.effect_NormalSpeechBalloon('#fs12#我们又见面了！#h0#！', 1, 0, 0, 5000, 1, 0, 0, 0, 4, 9400205, cm.getPlayer().getId());
    else if (cm.getNumberFromQuestInfo(63099, 'door') < 12 && cm.getNumberFromQuestInfo(63099, 'keyCount') > 0) {
      cm.effect_NormalSpeechBalloon('#fs12##h0#，你来是为了开锁的吗？', 1, 0, 0, 5000, 1, 0, 0, 0, 4, 9400205, cm.getPlayer().getId());
    } else {
      cm.effect_NormalSpeechBalloon('#fs12#哇，你又来啦，#h0#！\r\n我好想你。', 1, 0, 0, 5000, 1, 0, 0, 0, 4, 9400205, cm.getPlayer().getId());
    }
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}