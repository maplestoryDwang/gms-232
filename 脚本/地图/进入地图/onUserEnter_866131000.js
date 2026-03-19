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
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 1000, -480);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2506);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("来,现在我就借给你翅膀,继而使你能够飞到那里。", 1, 9390384, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#s110001510#\r\n施展保存在#b[Shift]#k键上的#b‘模式变更技能’#k，按#b'向上方向键'#k，就可以变更为猛鹰模式了。", 1, 9390384, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("在那之后，按#b[↑]+[跳跃]#k键，使用猛鹰飞翔技能", 1, 9390384, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("向想要移动的方向点击方向键即可。\r\n那就一口气飞到岗楼吧。要是不听我的话,我就把你扔下去。", 1, 9390384, true, true);
                  } else if (status === V++) {
                    cm.teachSkill(110001503, 0, -1);
                    cm.teachSkill(110001503, 1, 1);
                    cm.teachSkill(112111000, 1, 30);
                    cm.funckeySetByScript(1, 110001510, 42);
                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.setStandAloneMode(false);
                    cm.playerMessage(-1, "按[Shift]键之后，再按向上方向键，就能变更为猛鹰模式了。请按[↑] + [跳跃]键");
                    cm.effect_OnUserEff("Effect/Direction14.img/effect/ShamanBT/ChapterA/28");
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