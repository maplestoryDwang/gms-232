var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.updateInfoQuest(501285, "count=0");
      cm.sendNormalTalk("初次来到冒险岛世界的#b#e#h0##n#k，\r\n开始冒险之前，我需要告诉你#b#e角色交易等待#n#k的相关事宜。", 4, 9310650, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("#b#e<什么是角色交易等待时间？>#n#k\r\n\r\n新角色创建之后，即使账号拥有交易许可证，\r\n本角色也无法立即进行交易，将临时受限，\r\n也不能向仓库存入金币和物品（可以取出）；\r\n\r\n本角色必须在冒险岛世界累积游戏满30小时，\r\n才能进行交易（需获得交易许可证）和仓库存入。\r\n\r\n关于累积游戏满30小时：\r\n每天7:00-23:45可以累积游戏时间，\r\n每天最多累积3小时；", 4, 9310650, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("但是，如果背包中持有可在商城购买的#b#e#i5420015##b#e#t5420015##n#k，即使角色处于交易等待时间，也可以优先解除限制，提前激活仓库存入功能和交易（账号需激活交易许可证效果）。", 4, 9310650, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("友情提示，角色等待时间全部充满后，请务必完成相关任务，届时如果持有#b#e#t5420015##n#k还能换回抵用券哦！", 4, 9310650, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("鼠标滑过画面上方的#i3801575#，即可查看角色交易等待的剩余时间。", 4, 9310650, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("#b#e服务器内交易待机系统完成了4次的账号#n#k的话,#r#e将不再做交易待机系统限制.#n#k\r\n\r\n- 服务器内交易待机系统完成次数 : 0/4次", 4, 9310650, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("好吧，如果你想了解什么可以随时再来找我！", 4, 9310650, true, true);
                } else if (status === v++) {
                  cm.forceCompleteQuest();
                  cm.updateInfoQuest(66001, 'check=1');
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
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}