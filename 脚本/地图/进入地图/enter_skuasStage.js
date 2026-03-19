var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.getMapId() == 867233100) {
    action1(f, E, e);
  } else {
    if (cm.getMapId() == 867233200) {
      action2(f, E, e);
    } else {
      if (cm.getMapId() == 867233300) {
        action3(f, E, e);
      } else {
        if (cm.getMapId() == 867233400) {
          action4(f, E, e);
        } else {
          if (cm.getMapId() == 867233500) {
            action5(f, E, e);
          } else if (cm.getMapId() == 867233600) {
            action6(f, E, e);
          } else {
            cm.dispose();
          }
        }
      }
    }
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
  } else if (status === V++) {
    cm.onActionBarResult(15, 1010, 0, 3, 0);
    cm.onActionBarResult(15, 1010, 0, 3, 1);
    cm.onActionBarResult(15, 1010, 0, 3, 2);
    cm.onActionBarResult(15, 1010, 0, 3, 3);
    cm.onActionBarResult(15, 1010, 0, 3, 4);
    cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/base");
    cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/stage/0");
    cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/map/0");
    cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/enemy/4");
    cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/companion/1");
    cm.fieldEffect_复合图片动画(["Map/EffectPL.img/MainStream/Skuas/skillCut/skillcut_r_m", '6', '', ''], [0, 0, 1, 0, 0, 0, 0, 0]);
    cm.effect_Voice("PL_MONAD.img/effectSound/Skuas_StageStart", 100);
    cm.updateInfoQuest(64001, "dir1=0;man=720;stage=0;enemy=401253;seq=1;mine=0;Fidx=0;companion=108372654;dir0=0");
    cm.spawnMobLimit(9402252, 1, -1730, 105, 1);
    cm.spawnMobLimit(9402238, 1, -1430, 105, 4);
    cm.spawnMobLimit(9402241, 1, -1490, 105, 2);
    cm.spawnMobLimit(9402238, 1, -1550, 105, 4);
    cm.spawnMobLimit(9402241, 1, -1610, 105, 2);
    cm.spawnMobLimit(9402238, 1, -1670, 105, 4);
    cm.spawnMobLimit(9402238, 1, -1790, 105, 4);
    cm.spawnMobLimit(9402302, 1, -1030, 105, 1);
    cm.spawnMobLimit(9402314, 1, -790, 105, 2);
    cm.spawnMobLimit(9402314, 1, -730, 105, 2);
    cm.dispose();
  } else {
    cm.dispose();
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
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.onActionBarResult(15, 1010, 0, 3, 0);
    cm.onActionBarResult(15, 1010, 0, 3, 1);
    cm.onActionBarResult(15, 1010, 0, 3, 2);
    cm.onActionBarResult(15, 1010, 0, 3, 3);
    cm.onActionBarResult(15, 1010, 0, 3, 4);
    cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/base");
    cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/stage/1");
    cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/map/1");
    cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/enemy/0");
    cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/companion/2");
    cm.updateInfoQuest(64001, "dir1=0;man=557;stage=0;enemy=21053;seq=1;mine=0;Fidx=0;companion=3726514;dir0=0");
    cm.effect_Voice("PL_MONAD.img/effectSound/Skuas_StageStart", 100);
    cm.spawnMobLimit(9402250, 1, -1430, 105, 1);
    cm.spawnMobLimit(9402303, 1, -1030, 105, 1);
    cm.spawnMobLimit(9402314, 1, -970, 105, 4);
    cm.spawnMobLimit(9402314, 1, -910, 105, 4);
    cm.spawnMobLimit(9402314, 1, -850, 105, 4);
    cm.spawnMobLimit(9402314, 1, -790, 105, 4);
    cm.dispose();
  }
}
function action3(f, E, e) {
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
      cm.onActionBarResult(15, 1010, 0, 3, 0);
      cm.onActionBarResult(15, 1010, 0, 3, 1);
      cm.onActionBarResult(15, 1010, 0, 3, 2);
      cm.onActionBarResult(15, 1010, 0, 3, 3);
      cm.onActionBarResult(15, 1010, 0, 3, 4);
      cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/base");
      cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/stage/2");
      cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/map/2");
      cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/enemy/2");
      cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/companion/6");
      cm.fieldEffect_复合图片动画(["Map/EffectPL.img/MainStream/Skuas/skillCut/skillcut_r_m", '6', '', ''], [0, 0, 1, 0, 0, 0, 0, 0]);
      cm.effect_Voice("PL_MONAD.img/effectSound/Skuas_StageStart", 100);
      cm.updateInfoQuest(64001, "dir1=0;man=382;stage=1;enemy=5213;seq=1;mine=0;Fidx=0;companion=26514;dir0=0");
      cm.sendNormalTalk_Bottom("凯恩！！你怎么会在这里？？！", 56, 0, false, true);
    } else {
      if (status === V++) {
        cm.spawnMobLimit(9402249, 1, -870, 105, 1);
        cm.spawnMobLimit(9402301, 1, -630, 105, 1);
        cm.spawnMobLimit(9402307, 1, -570, 105, 1);
        cm.spawnMobLimit(9402314, 1, -390, 105, 2);
        cm.spawnMobLimit(9402314, 1, -330, 105, 2);
        cm.sendNormalTalk_Bottom("#face0#我有自己要做的事！", 37, 9400582, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face4#你真的不用来帮忙吗？！", 37, 9400580, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#是~我知道了，学者。", 37, 9400582, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face4#凯恩！！！", 37, 9400580, true, true);
            } else if (status === V++) {
              cm.updateInfoQuest(64001, "dir1=1;man=382;stage=1;enemy=5213;seq=1;mine=0;Fidx=0;companion=26514;dir0=0");
              cm.dispose();
            }
          }
        }
      }
    }
  }
}
function action4(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.onActionBarResult(15, 1010, 0, 3, 0);
    cm.onActionBarResult(15, 1010, 0, 3, 1);
    cm.onActionBarResult(15, 1010, 0, 3, 2);
    cm.onActionBarResult(15, 1010, 0, 3, 3);
    cm.onActionBarResult(15, 1010, 0, 3, 4);
    cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/base");
    cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/stage/3");
    cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/map/3");
    cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/enemy/1");
    cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/companion/4");
    cm.fieldEffect_复合图片动画(["Map/EffectPL.img/MainStream/Skuas/skillCut/skillcut_r_m", '6', '', ''], [0, 0, 1, 0, 0, 0, 0, 0]);
    cm.effect_Voice("PL_MONAD.img/effectSound/Skuas_StageStart", 100);
    cm.updateInfoQuest(64001, "dir1=1;man=298;stage=2;enemy=513;seq=1;mine=0;Fidx=0;companion=146;dir0=0");
    cm.spawnMobLimit(9402251, 1, -870, 105, 1);
    cm.spawnMobLimit(9402305, 1, -630, 105, 1);
    cm.spawnMobLimit(9402315, 1, -570, 105, 4);
    cm.spawnMobLimit(9402315, 1, -510, 105, 4);
    cm.spawnMobLimit(9402315, 1, -450, 105, 4);
    cm.spawnMobLimit(9402315, 1, -390, 105, 4);
    cm.dispose();
  }
}
function action5(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.onActionBarResult(15, 1010, 0, 3, 0);
    cm.onActionBarResult(15, 1010, 0, 3, 1);
    cm.onActionBarResult(15, 1010, 0, 3, 2);
    cm.onActionBarResult(15, 1010, 0, 3, 3);
    cm.onActionBarResult(15, 1010, 0, 3, 4);
    cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/base");
    cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/stage/4");
    cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/map/4");
    cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/enemy/5");
    cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/companion/4");
    cm.updateInfoQuest(64001, "dir1=1;man=110;stage=3;enemy=513;seq=1;mine=0;Fidx=0;companion=146;dir0=0");
    cm.effect_Voice("PL_MONAD.img/effectSound/Skuas_StageStart", 100);
    cm.spawnMobLimit(9402246, 1, -210, 105, 2);
    cm.spawnMobLimit(9402245, 1, -270, 105, 5);
    cm.spawnMobLimit(9402245, 1, -330, 105, 5);
    cm.spawnMobLimit(9402246, 1, -390, 105, 2);
    cm.spawnMobLimit(9402245, 1, -450, 105, 5);
    cm.spawnMobLimit(9402245, 1, -510, 105, 5);
    cm.spawnMobLimit(9402245, 1, -570, 105, 5);
    cm.spawnMobLimit(9402305, 1, 20, 105, 1);
    cm.spawnMobLimit(9402315, 1, 80, 105, 4);
    cm.spawnMobLimit(9402315, 1, 140, 105, 4);
    cm.spawnMobLimit(9402315, 1, 200, 105, 4);
    cm.spawnMobLimit(9402315, 1, 260, 105, 4);
    cm.dispose();
  }
}
function action6(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.onActionBarResult(15, 1010, 0, 3, 0);
    cm.onActionBarResult(15, 1010, 0, 3, 1);
    cm.onActionBarResult(15, 1010, 0, 3, 2);
    cm.onActionBarResult(15, 1010, 0, 3, 3);
    cm.onActionBarResult(15, 1010, 0, 3, 4);
    cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/base");
    cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/stage/5");
    cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/map/5");
    cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/enemy/3");
    cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/companion/9");
    cm.updateInfoQuest(64001, "dir1=1;man=42;stage=4;enemy=513;seq=1;mine=0;Fidx=0;companion=146;dir0=0");
    cm.effect_Voice("PL_MONAD.img/effectSound/Skuas_StageStart", 100);
    cm.spawnMobLimit(9402243, 1, -960, 40, 2);
    cm.spawnMobLimit(9402242, 1, -900, 42, 3);
    cm.spawnMobLimit(9402244, 1, -1020, 45, 1);
    cm.spawnMobLimit(9402243, 1, -1080, 51, 2);
    cm.spawnMobLimit(9402242, 1, -1140, 56, 3);
    cm.spawnMobLimit(9402242, 1, -1200, 55, 3);
    cm.spawnMobLimit(9402310, 1, -700, 48, 1);
    cm.spawnMobLimit(9402316, 1, -640, 45, 4);
    cm.spawnMobLimit(9402316, 1, -580, 45, 4);
    cm.spawnMobLimit(9402316, 1, -520, 45, 4);
    cm.spawnMobLimit(9402316, 1, -460, 45, 4);
    cm.spawnMobLimit(9402307, 1, -400, 46, 1);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;