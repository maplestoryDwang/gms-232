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
      cm.inGameDirectionEvent_MoveAction(2);
      cm.curNodeEventEnd(true);
      cm.sendNormalTalk("#b脑袋有点乱……", 3, 2159311, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#b但是我拥有的力量几乎全部消失了，这个事实是不会改变的。", 3, 2159311, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#b哈哈哈，我在说什么啊？这不是曾经对黑魔法师使用过的力量吗？", 3, 2159311, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#b诅咒的力量几乎全部消失了，也许是命运在告诉我应该选择其他道路。", 3, 2159311, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#b我竟然会说出这种话，真让人寒心。", 3, 2159311, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#b好了……让我们先确定该怎么办吧，#h0#。是用曾经对黑魔法师使用过的精气的力量呢？还是使用对黑魔法师的愤怒的力量呢？", 3, 2159311, true, true);
              } else {
                if (status === V++) {
                  cm.onScriptMessage_选择转职道路(1);
                } else {
                  var O = "action" + selectionLog[7];
                  eval(O)(f, E, e, V);
                }
              }
            }
          }
        }
      }
    }
  }
}
function action0(f, E, e, V) {
  if (status <= V++) {
    cm.changeJob(3101);
    var O = cm.getPlayer().getGender();
    cm.updateInfoQuest(1073, '3101=10');
    cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/avenger/" + O, 'oid=0'], [2820, -283, -120, 1, 0, 1, 1, 0, 0]);
    cm.fieldEffect_PlayFieldSound("tutoCommon/JobChanged", 100);
    cm.forceStartQuest(23977, '1');
    if (O == 0) {
      cm.setHair(36460);
      cm.setFace(20284);
      cm.equip(1050249, -5);
      cm.equip(1070029, -7);
    } else {
      cm.setHair(37450);
      cm.setFace(21280);
      cm.equip(1051305, -5);
      cm.equip(1071046, -7);
    }
    cm.equip(1232001, -11);
    cm.equip(1102505, -9);
    cm.equip(1099006, -10);
    cm.gainItem(1142553, 1);
    cm.gainItem(2001527, 30);
    cm.forceCompleteQuest(32000);
    cm.sendNormalTalk("#b对黑魔法师的愤怒和复仇之心在吸引着我。就算我的身体难以承受，我也要承受下来！！", 3, 2159311, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("#b在离开之前，打开背包，确认一下消耗栏中的物品吧。背包可以通过#r“I”#b键打开。", 3, 2159311, true, true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
        cm.setInGameDirectionMode(false, true, false);
        cm.finishAchievement(109);
        cm.giveAvengerHpBuff();
        cm.dispose();
        while (cm.getLevel() < 10) {
          cm.getPlayer().levelUp();
        }
      }
    }
  }
}
function action1(f, E, e, V) {
  if (status <= V++) {
    cm.changeJob(3100);
    cm.teachSkill(30010112, 0, -1);
    cm.updateInfoQuest(1073, "3100=10");
    cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/JobChangedDemon"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    cm.fieldEffect_PlayFieldSound("tutoCommon/JobChanged", 100);
    cm.forceStartQuest(23977, '1');
    cm.teachSkill(30010111, 1, 1);
    cm.equip(1322122, -11);
    cm.equip(1099000, -10);
    cm.gainItem(1142341, 1);
    cm.sendNormalTalk("#b为了向黑魔法师复仇，就算使用在军团长时期曾经用过的力量也在所不惜！！", 3, 2159311, false, true);
  } else {
    if (status === V++) {
      cm.gainItem(2001527, 30);
      cm.forceStartQuest(29958, '');
      cm.forceCompleteQuest(29958);
      cm.sendNormalTalk("#b在离开之前，打开背包，确认一下消耗栏中的物品吧。背包可以通过#r“I”#b键打开。", 3, 2159311, true, true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
        cm.setInGameDirectionMode(false, true, false);
        cm.dispose();
        while (cm.getLevel() < 10) {
          cm.getPlayer().levelUp();
        }
      }
    }
  }
}