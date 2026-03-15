var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askMenu("#e[荣耀特攻队普通任务]激战中的乱港#n\r\n\r\n#L0##b#e进入激战中的乱港#n#k#l\r\n\r\n#L1##b#e查看任务信息#n#k#l\r\n\r\n#L2##b#e回到之前来的地方#n#k#l", 0, 9062202);
    } else {
      var w = "action分支" + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    cm.askYesNo("#e#h0##n。\r\n现在就立刻前往#b#e激战中的乱港#n#k战场吗？", 0, 9062202);
  } else if (status === V++) {
    cm.dispose();
    cm.openNpc("荣耀活动_激战中的乱港");
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("\r\n#b#e普通任务：激战中的乱港#n#k\r\n\r\n#e任务进行时间#n\r\n2020年2月5日 ~2020年3月3日 晚间11时59分", 0, 9062202, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("\r\n在#b#e激战中的乱港#n#k任务中，需要乘着木筏，沿着激流移动，并灵活运用各式各样的武器，消灭尽可能多的翼人军。", 0, 9062202, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("\r\n任务开始后，可通过点击键盘上的#r#eW/S/A/D#k#n按键，顺着激流#r上/下/左/右#k移动。", 0, 9062202, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("\r\n自动装备基础武器#r#e弓箭#k#n，移动鼠标后在想要攻击的地点点击鼠标左键，即可发射弓箭。", 0, 9062202, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("\r\n每当消灭翼人军时，都可立刻获得指定的#b#e荣耀点数#k#n。", 0, 9062202, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("\r\n据说若是撞到了激流之上漂浮的#b#e武器箱#k#n道具，还能获得丰富多样的武器。", 0, 9062202, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("\r\n武器在耗尽指定数量的子弹或遭到翼人军的攻击时会消失不见，一定要多加留意！", 0, 9062202, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("\r\n当撞到激流之上漂浮的#b#e子弹强化#k#n道具，发射的子弹数量将会有所增加。", 0, 9062202, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("\r\n#b#e子弹强化等级#k#n最多可到第3阶段，通用于所有武器，同时，若遭到翼人军的攻击将被初始化。", 0, 9062202, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("\r\n到达最终地点后，将自动结束任务，当#r消灭数量超过150只#k时，可额外获得荣耀点数。", 0, 9062202, true, false);
                    } else if (status === V++) {
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
}
function action分支2(f, W, U, V) {
  if (status <= V++) {
    cm.dispose();
    cm.warp(cm.getNumberFromQuestInfo(100334, 'rMap'), 0);
  }
}