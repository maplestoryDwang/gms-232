var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  status++;
  if (cm.isQuestActive(32335)) {
    action1(f, W, U);
  } else {
    action0(f, W, U);
  }
}
function action1(f, W, U) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askYesNo("要用音乐盒演奏新的音乐吗？", 0, 1033110);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayBGM("Bgm34.img/GoFight!ShowYourEnergy!", 0, 0);
        cm.sendNormalTalk("啊，这音乐是……。！", 4, 1033106, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("……我还是第一次听到如此令人勇气迸发的歌曲！谢谢你，冒险家！！", 4, 1033106, true, true);
        } else if (status === V++) {
          cm.forceStartQuest(32336, '');
          cm.sendNormalTalk("啊，双弩精灵，你回来啦！", 4, 1033106, true, false);
          cm.dispose();
        }
      }
    }
  }
}
function action0(f, W, U) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askMenu("在埃欧雷制作的花朵形状的音乐盒。貌似能演奏出多种舒缓悦耳的音乐哦……#b\r\n#L0#risingStar#l #b\r\n#L1#MoonlightShadow#l #b\r\n#L2#When The Morning Comes#l #b\r\n#L3#Flying In A Blue Dream#l #b\r\n#L4#Fantasia#l#b\r\n#L5#FairyTalediffvers#l #b\r\n#L6#Minar'sDream#l  #b\r\n#L7#ElinForest#l #b\r\n#L8#TimeTemple#l #b\r\n#L9#QueensGarden#l", 0, 1033110);
    } else if (status === V++) {
      cm.forceStartQuest(24103, '1');
      cm.effect_PlayMusic("BgmEvent2.img/risingStar2");
      cm.dispose();
    }
  }
}