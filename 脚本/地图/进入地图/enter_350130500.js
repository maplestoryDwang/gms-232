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
      cm.npc_ChangeController(1540795, 'oid=58757', 903, -14, 2, 903, 953, 1, false, 0, false);
      cm.cancelItem(2210197);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setNumberForQuestCustomData(33900, 12);
      cm.showMapleHero();
      cm.mapleHeroSetList([12]);
      cm.updateInfoQuest(33915, "act1=350112400;act2=350123600;act3=350130500");
      cm.fieldEffect_Hero8(1);
      cm.fieldEffect_Hero9(30, 1000);
      cm.setAmbience("Ambience.img/gravity", 100, 60);
      cm.updateInfoQuest(33990, "check1=1;check2=1;check3=1;check5=1;check6=1;check7=1;check8=1;check9=1;check10=1;check11=1;check=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom(" #face13#夜光法师，幻影和双弩精灵已经拿到两张门禁卡了。", 37, 1540805, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("这可是目前为止最令人开心的消息了，我真想快点结束这种事情。", 37, 1540880, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("该不会因为只有我们在宴会上待着，你不开心了吧，木头？", 37, 1540879, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("我对宴会什么的不感兴趣，还有对偷东西我就更不感兴趣了。", 37, 1540880, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#你认为我们现在在做的是什么？", 37, 1540879, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("哎……我真是对同意这种作战计划的自己感到寒心。", 37, 1540880, true, true);
                  } else if (status === V++) {
                    cm.setInGameDirectionMode(false, true, false);
                    cm.dispose();
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