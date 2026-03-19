var status = -1;
function action(f, E, e) {
  status++;
  if (cm.getPlayer().getGender() == 0) {
    var V = 1531000;
  } else {
    var V = 1531052;
  }
  ;
  var O = -1;
  if (status <= O++) {
    cm.dispose();
  } else {
    if (status === O++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.sendNormalTalk_Bottom("#face9#凯内西斯，现在是时候使用你所拥有的攻击技能了。", 37, 1531001, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === O++) {
        cm.sendNormalTalk_Bottom("#face9#我会把你的ESP限制器数据升级到#b1阶#k的。", 37, 1531001, true, true);
      } else {
        if (status === O++) {
          cm.changeJob(14200);
          cm.teachSkill(140000292, 0, -1);
          cm.teachSkill(142001000, 1, 10);
          cm.teachSkill(142001001, 1, 20);
          cm.teachSkill(142001004, 1, 5);
          cm.teachSkill(142001002, 1, 10);
          cm.funckeySetByScript(1, 142001000, 42);
          cm.funckeySetByScript(1, 142001001, 83);
          cm.setStandAloneMode(false);
          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
          cm.eventSKill(0);
          cm.setInGameDirectionMode(false, true, false);
          cm.sendNormalTalk_Bottom("#face9#超自然力量#g[SHIFT]#k技能是一种可以将怪物推向所想方向的技能。", 37, 1531001, true, true);
        } else {
          if (status === O++) {
            cm.sendNormalTalk_Bottom("#face9#然后心灵爆震#g[DEL]#k技能是一种可以用你的念力将敌人弹飞到空中后再将其狠狠摔下的技能。", 37, 1531001, true, true);
          } else {
            if (status === O++) {
              cm.sendNormalTalk_Bottom("用#gSHIFT#k推动，再用#gDEL#k攻击，是吧？", 37, V, true, true);
            } else {
              if (status === O++) {
                cm.sendNormalTalk_Bottom("#face9#没错，而且连续按下跳跃键，可以移动更远的距离。", 37, 1531001, true, true);
              } else if (status === O++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/metaldrop", 100);
                cm.spawnMobLimit(2700300, 1, -50, 63, 100);
                cm.spawnMobLimit(2700300, 1, 50, 63, 100);
                cm.spawnMobLimit(2700300, 1, 150, 63, 100);
                cm.spawnMobLimit(2700300, 1, 250, 63, 100);
                cm.spawnMobLimit(2700300, 1, 350, 63, 100);
                cm.spawnMobLimit(2700300, 1, 450, 63, 100);
                cm.spawnMobLimit(2700300, 1, 550, 63, 100);
                cm.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/wink", 100);
                cm.cameraSwitch_PushSwitchMoveInfo('go_ajit', 1000);
                cm.updateInfoQuest(22700, "V01=1;V02=1;kinetuto=1;kinetuto2=0;E1=1;E2=1");
                if (cm.isQuestActive(22714)) {
                  cm.forfeitQuest(22714);
                }
                cm.dispose();
              } else {
                cm.dispose();
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