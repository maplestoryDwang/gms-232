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
      cm.askMenu("你想知道什么? \r\n\r\n#b#L0#战斗分析系统使用方法#l\r\n#b#L1#战斗分析系统相关用语#l\r\n#b#L2#帮助结束#l", 0, 9010061);
    } else {
      var e = "action分支" + selectionLog[1];
      eval(e)(g, w, a, v);
    }
  }
}
function action分支0(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("从现在开始我来告诉你使用战斗分析系统的方法. ", 0, 9010061, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("选择开始测量后, 按钮会变成结束测量, 随着战斗时间的流逝, 对怪物所造成的伤害、所获取的金币、获取的经验值都会被开始测量. ", 0, 9010061, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("最多可以测量60分钟, 当战斗时间达到60分钟时, 测量会自动结束. 也可以选择结束测量, 手动结束测量. ", 0, 9010061, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("在频道移动或还留有测量结果的状态下, 重新开始测量时, 相应结果会被重置, 这一点还请注意. ", 0, 9010061, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("按下帮助按钮旁边的最大化/最小化按钮, 可以调节UI的大小, 尺寸较大的主UI有可能在战斗中会碍事, 调整为小UI会比较方便吧? ", 0, 9010061, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("在主UI可以查看有关所使用技能和相应技能所造成的伤害、使用次数、平均值等详细信息. ", 0, 9010061, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("根据位数, 伤害、获取金币、获取经验值最多显示为十位, 比方说“1234亿5678万”的形式, 如果还想知道所显示的单位下的数值, 将鼠标悬停在主UI上相应的数值上, 就能够看到工具提示. ", 0, 9010061, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("技能的顺序基本上会按照使用的顺序进行排列, 但利用排列组合框, 可以按照想要的标准进行排序. ", 0, 9010061, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("如果使用的技能较多, 结果会分多页显示, 页面会在UI下方以圆形显示, 利用UI下方的左右箭头可以翻页. ", 0, 9010061, true, true);
                  } else if (status === v++) {
                    cm.sendNormalTalk("最后普通攻击不会出现在技能详细信息里, 如果想要知道UI上的单词, 可以参考战斗分析系统相关用语帮助. ", 0, 9010061, true, false);
                    status = -1;
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
function action分支1(g, w, a, v) {
  if (status <= v++) {
    cm.askMenu("你想知道什么? \r\n\r\n#b#L0#测量时间#l\r\n#b#L1#获取金币#l\r\n#b#L2#合计伤害#l\r\n#b#L3#平均伤害#l\r\n#b#L4#获取经验值#l\r\n#b#L5#平均经验值#l\r\n#b#L6# [技能详细信息]累计伤害#l\r\n#b#L7# [技能详细信息]伤害占有率#l\r\n#b#L8# [技能详细信息]平均伤害(每秒)#l\r\n#b#L9# [技能详细信息]使用次数#l\r\n#b#L10# [技能详细信息]平均伤害(每次)#l\r\n#b#L11# [技能详细信息]攻击次数#l\r\n#b#L12# [技能详细信息]最大伤害(每一击)#l\r\n#b#L13# [技能详细信息]最小伤害(每一击)#l\r\n#b#L14#帮助结束#l", 0, 9010061);
  } else {
    var e = "action分支1_" + selectionLog[2];
    eval(e)(g, w, a, v);
  }
}
function action分支1_0(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#b[测量时间]#k：选择开始测量后开始计算的时间, 这会成为平均值的测量标准, 最多可以测量到60分钟. ", 0, 9010061, false, false);
    status = -1;
  }
}
function action分支1_1(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#b[获得金币]#k：选择开始测定后所计算出的迄今为止所获得的金币，交易所获得的金币除外，包含了拾取、任务等所获得的所有金币。", 0, 9010061, false, false);
    status = -1;
  }
}
function action分支1_2(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#b[合计伤害]#k：选择测量开始后迄今为止所造成的所有伤害的合计值. ", 0, 9010061, false, false);
    status = -1;
  }
}
function action分支1_3(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#b[平均伤害]#k：选择测量开始后迄今为止所造成的所有伤害除以战斗时间的值, 表示的是每一秒平均造成的伤害. ", 0, 9010061, false, false);
    status = -1;
  }
}
function action分支1_4(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#b[获取经验值]#k：选择测量开始后迄今为止所得到的所有经验值的合计值, 包括捕猎怪物后获得的经验值在内, 任务、道具等所获取的所有经验值都包含在内. ", 0, 9010061, false, false);
    status = -1;
  }
}
function action分支1_4(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#b[获取经验值]#k：选择测量开始后迄今为止所得到的所有经验值的合计值, 包括捕猎怪物后获得的经验值在内, 任务、道具等所获取的所有经验值都包含在内. ", 0, 9010061, false, false);
    status = -1;
  }
}
function action分支1_5(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#b[平均经验值]#k：选择测量开始后迄今为止所得到的所有经验值的合计值除以战斗时间的值, 表示的是每一秒平均得到的经验值. ", 0, 9010061, false, false);
    status = -1;
  }
}
function action分支1_6(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#b[累计伤害]#k：选择测量开始后迄今为止相应技能所造成的伤害合计值. ", 0, 9010061, false, false);
    status = -1;
  }
}
function action分支1_7(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#b[伤害占有率]#k：合计伤害中, 相应技能所造成的伤害所占的比率值. 小数点后保留两位, 采用四舍五入的方式, 所以所有技能的伤害占有率加起来有可能并不是100%. ", 0, 9010061, false, false);
    status = -1;
  }
}
function action分支1_8(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#b[平均伤害(每秒)]#k：选择测量开始后迄今为止相应技能所造成的伤害除以战斗时间的值, 表示的是相应技能每1秒平均造成的伤害. ", 0, 9010061, false, false);
    status = -1;
  }
}
function action分支1_9(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#b[使用次数]#k：选择测量开始后迄今为止相应技能的使用次数. 主动技能时为使用技能, 被动技能时为触发技能, 都会相应地增加1次. ", 0, 9010061, false, false);
    status = -1;
  }
}
function action分支1_10(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#b[平均伤害(每次)]#k：选择测量开始后迄今为止相应技能所造成的所有伤害除以使用次数的值, 表示的是相应技能每使用1次, 或者每触发1次所造成的平均伤害. ", 0, 9010061, false, false);
    status = -1;
  }
}
function action分支1_11(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#b[攻击次数]#k：选择测量开始后迄今为止相应技能的攻击次数, 和使用1次时会攻击多次的技能的使用次数可能会有所不同. ", 0, 9010061, false, false);
    status = -1;
  }
}
function action分支1_12(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#b[最大伤害(每一击)]#k：用相应技能攻击时造成的最大伤害. ", 0, 9010061, false, false);
    status = -1;
  }
}
function action分支1_13(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#b[最小伤害(每一击)]#k：用相应技能攻击时造成的最小伤害. ", 0, 9010061, false, false);
    status = -1;
  }
}
function action分支1_14(g, w, a, v) {
  if (status <= v++) {
    cm.dispose();
  }
}
function action分支2(g, w, a, v) {
  if (status <= v++) {
    cm.dispose();
  }
}