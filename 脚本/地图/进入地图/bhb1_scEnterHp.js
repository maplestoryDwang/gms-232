var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (cm.getNumberFromQuestInfo(33293, "count") > 0) {
    cm.playerMessage(-1, "黑色天堂核心开始向入侵者发动攻击. ");
    cm.fieldEffect_PlayFieldSound("BlackHeavenBoss/CoreStart", 100);
    if (cm.getNumberFromQuestInfo(33293, 'difficulty') == 0) {
      cm.spawnMobLimit(8240097, 1, 0, -16, 1);
    } else {
      cm.spawnMobLimit(8240103, 1, 0, -16, 1);
    }
    cm.obstacleFallRepeat(3, "黑色天堂_蓝色残骸", "黑色天堂_紫色残骸", 5);
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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNormalTalk_Bottom("#face0#嘻嘻嘻嘻嘻！你最终还是来到了这里啊。", 37, 1540470, false, true);
      cm.effect_Voice("Voice3.img/BlackHeaven/gel/6_1/1", 100);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#好了，我来为你介绍一下我最得力的艺术作品吧！", 37, 1540470, true, true);
        cm.effect_Voice("Voice3.img/BlackHeaven/gel/6_1/2", 100);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(3400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#如果不阻止斯乌，就无法阻拦黑色天堂。", 37, 1540470, false, true);
            cm.effect_Voice("Voice3.img/BlackHeaven/gel/6_1/3_a", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#你究竟能不能对付他呢？", 37, 1540470, true, true);
              cm.effect_Voice("Voice3.img/BlackHeaven/gel/6_1/3_b", 100);
            } else if (status === V++) {
              cm.addPopupSay(1540470, 2000, "#face0#祝你好运. 嘻嘻嘻嘻!", "Voice3.img/BlackHeaven/6_1/4", 0);
              cm.setInGameDirectionMode(false, true, false);
              cm.playerMessage(-1, "黑色天堂核心开始向入侵者发动攻击. ");
              cm.fieldEffect_PlayFieldSound("BlackHeavenBoss/CoreStart", 100);
              if (cm.getNumberFromQuestInfo(33293, 'difficulty') == 0) {
                cm.spawnMobLimit(8240097, 1, 0, -16, 1);
              } else {
                cm.spawnMobLimit(8240103, 1, 0, -16, 1);
              }
              cm.obstacleFallRepeat(3, "黑色天堂_蓝色残骸", "黑色天堂_紫色残骸", 5);
              cm.dispose();
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