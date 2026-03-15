var epp = "#fEffect/CharacterEff/1082312/0/0#";
var eff = "#fCharacter/Weapon/01702523.img/48/straight/0/effect#";
var eff = "#fEffect/CharacterEff/1112905/0/1#";
var epp = "#fEffect/CharacterEff/1082312/0/0#";
var status = 0;
var typed = 0;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == -1) {
    cm.dispose();
  } else {
    if (f == 0 && status == 0) {
      cm.dispose();
      return;
    }
    if (f == 1) {
      status++;
    } else {
      status--;
    }
    if (status == 0) {
      var V = "                #v3994060##v3994073##v3994077##v3994077#\r\n";
      V += "#e#L1##r#fEffect/CharacterEff/1114000/1/0#特色副本#l#L2##r#fEffect/CharacterEff/1114000/1/0#日常组队#l#L4##r#fEffect/CharacterEff/1114000/1/0#武陵通天塔#l";
      V += "\r\n#L3##fEffect/CharacterEff/1114000/1/0#怪物公园#l#L5##r#fEffect/CharacterEff/1114000/1/0#重置副本次数#l#L100##r#fEffect/CharacterEff/1114000/1/0#组队副本#l#k\r\n";
      V += "#L6##d#fEffect/CharacterEff/1114000/1/0#[闹钟王]#l#L7##d#fEffect/CharacterEff/1114000/1/0#[暴力熊]#l#L15##d#fEffect/CharacterEff/1114000/1/0#[骑士团女皇]#l\r\n";
      V += "#L9##k#e#fEffect/CharacterEff/1114000/1/0#[简单/进阶]扎昆#l  #L10##k#e#fEffect/CharacterEff/1114000/1/0#[普通/进阶]黑龙#l\r\n";
      V += "#L11##k#e#fEffect/CharacterEff/1114000/1/0#[普通/混沌]品克缤#l#L12##k#e#fEffect/CharacterEff/1114000/1/0#[OX]问答#l\r\n";
      V += "#L14##d#e#fEffect/CharacterEff/1114000/1/0#艾菲尼娅#l#L8##d#e#fEffect/CharacterEff/1114000/1/0#钻机BOSS#l";
      V += "#L16##d#e#fEffect/CharacterEff/1114000/1/0#四大天王#l\r\n#L17##d#e#fEffect/CharacterEff/1114000/1/0#狮子王城#l";
      V += "#L20##r#fEffect/CharacterEff/1114000/1/0##b[守卫金猪] #l#L21##r#fEffect/CharacterEff/1114000/1/0##b[迷幻之域] #l#k\r\n";
      V += "#L209##r#fEffect/CharacterEff/1114000/1/0##b[金币副本] #l#k#L24##r#fEffect/CharacterEff/1114000/1/0##b[森兰丸]#l";
      V += "#L216##r#fEffect/CharacterEff/1114000/1/0##b[卧虎藏龙]#l\r\n";
      V += "#L210##r#fEffect/CharacterEff/1114000/1/0#[深海妖兽]#l#k";
      V += "#L23##r#fEffect/CharacterEff/1114000/1/0#[斯乌来袭]#l#k";
      V += "#L18##r#fEffect/CharacterEff/1114000/1/0#[贝勒德]#l\r\n";
      V += "#L19##r#fEffect/CharacterEff/1114000/1/0#[暴君麦格纳斯]#l#k";
      V += "#L1000##r#fEffect/CharacterEff/1114000/1/0#[乌鲁斯]#l#k";
      V += "#L13##r#fEffect/CharacterEff/1114000/1/0##b[戴米安]#l\r\n";
      V += "#L1001##r#fEffect/CharacterEff/1114000/1/0##b[桃乐丝]#l";
      V += "#L1003##r#fEffect/CharacterEff/1114000/1/0##b[路西德]#l\r\n";
      V += "#L1004##r#fEffect/CharacterEff/1114000/1/0##b[威尔]#l";
      V += "#L1110##r#fEffect/CharacterEff/1114000/1/0##b[羊羊刷级副本]#l";
      V += "#L1200##b#fEffect/CharacterEff/1114000/1/0##b[至暗魔晶]#l\r\n";
      V += "#L1201##b#fEffect/CharacterEff/1114000/1/0##b[敦凯尔]#l";
      V += "#L1202##b#fEffect/CharacterEff/1114000/1/0##b[觉醒希拉]#l";
      V += "#L1203##b#fEffect/CharacterEff/1114000/1/0##b[黑魔法师]#l";
      V += "\r\n\r\n#e#g================更多副本更新中=================\r\n\r\n";
      cm.askMenu(V);
    } else {
      if (status == 1) {
        if (U == 1) {
          typed = 1;
          cm.askYesNo("#e#r大量的奖励副本,每日必做,不同的玩法,不同的体验.#k\r\n\r\n- #e#d管理提示：#n#b点是进行查看。点否返回上一页.#k");
        } else {
          if (U == 1204) {
            cm.dispose();
            cm.openNpc(9900003, "接金币");
          } else {
            if (U == 1203) {
              typed = 1203;
              cm.askYesNo("#e#r[黑魔法师...] \r\n#fUI/UIWindow/Quest/reward#\r\n#r稀有椅子,极品卷轴..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
            } else {
              if (U == 1202) {
                typed = 1202;
                cm.askYesNo("#e#r[觉醒希拉...] \r\n#fUI/UIWindow/Quest/reward#\r\n#r稀有椅子,极品卷轴..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
              } else {
                if (U == 1201) {
                  typed = 1201;
                  cm.askYesNo("#e#r[敦凯尔...] \r\n#fUI/UIWindow/Quest/reward#\r\n#r稀有椅子,极品卷轴..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                } else {
                  if (U == 1200) {
                    typed = 1200;
                    cm.askYesNo("#e#r[至暗魔晶...] \r\n#fUI/UIWindow/Quest/reward#\r\n#r稀有椅子,极品卷轴..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                  } else {
                    if (U == 2) {
                      typed = 2;
                      cm.askYesNo("#e#d组队任务有每日一次的,也有无限制的哦!可以获得每日礼物箱子,箱子里有大量的好东西,#r平民好选!.#k\r\n\r\n- #e#d管理提示：#n#b点是进行查看。点否返回上一页.#k");
                    } else {
                      if (U == 3) {
                        typed = 3;
                        cm.askYesNo("#d#e160级可以进入副本,需要门票#v4001522#,每天最多10次\r\n#r门票获得途径:\r\n#b1.在线120分钟可获得1张\r\n2.可以通过匠人街挖矿挖草获得材料进行兑换\r\nP:兑换门票和奖励的在公园地图内左边吉普车NPC\r\n#r(最少2个人组队,只扣除队长门票)#k\r\n\r\n- #e#d管理提示：#n#b点是则进入怪物公园地图。点否返回上一页.#k");
                      } else {
                        if (U == 4) {
                          typed = 4;
                          cm.askYesNo("#e#r单人进入,每天免费2次,超级神奇魔方.\r\n可以获得#v1113070##v1402014##v1402037##v5530457##v5530458##v2046996##v2046997##v2047818#\r\n升级圣地#k\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                        } else {
                          if (U == 5) {
                            typed = 5;
                            cm.askYesNo("#r#e可以使用道具重置部分副本次数\r\n#b理财礼包可以重置更多的副本进入次数哦#k\r\n\r\n- #e#d管理提示：#n#b点是查看。点否返回上一页.#k");
                          } else {
                            if (U == 6) {
                              typed = 6;
                              cm.askYesNo("#r#e练级\r\n技能书\r\n无限次数，需要材料\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                            } else {
                              if (U == 7) {
                                typed = 7;
                                cm.askYesNo("#r#e制作装备材料\r\n\r\n#k\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                              } else {
                                if (U == 8) {
                                  typed = 8;
                                  cm.askYesNo("#e#r1线，一小时刷新一次,外星人金币,技能书.#k\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                                } else {
                                  if (U == 9) {
                                    typed = 9;
                                    cm.askYesNo("#e#r[简单/进阶] 2,4线为普通扎昆(默认每日4次)，3线为进阶扎昆(默认每日3次)\r\n#fUI/UIWindow/Quest/reward#\r\n#v3010313##v3010127##v3010865##v2213049# 星星 高级神奇魔方（必出） 各种制作材料\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                                  } else {
                                    if (U == 10) {
                                      typed = 10;
                                      cm.askYesNo("#e#r[普通/进阶] 3线为进阶黑龙(默认每日3次)，2和4线为普通黑龙(默认每日4次)\r\n#fUI/UIWindow/Quest/reward#\r\n#v2213050##v2210082##v3010436##v3010128# 星星 高级神奇魔方（必出）  各种制作材料\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                                    } else {
                                      if (U == 11) {
                                        typed = 11;
                                        cm.askYesNo("#e#r[普通/混沌] 1线为普通品克缤(默认每日2次)，2线为混沌品克缤(默认每日2次)\r\n#fUI/UIWindow/Quest/reward#\r\n#v3010185##v3010073##v3010543##v1052198# 各种制作材料.各种卷轴.135武器\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                                      } else {
                                        if (U == 12) {
                                          typed = 12;
                                          cm.askYesNo("#e#r[OX] OX宾果活动\r\n#fUI/UIWindow/Quest/reward#\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                                        } else {
                                          if (U == 13) {
                                            typed = 13;
                                            cm.askYesNo("#e#r[普通,困难] 载米安任务(默认每日3次)\r\n#fUI/UIWindow/Quest/reward#\r\n各种装备,各种玩具. \r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                                          } else {
                                            if (U == 14) {
                                              typed = 14;
                                              cm.askYesNo("#e#r[普通] 妖精女王-艾菲尼娅(默认每日3次)\r\n#fUI/UIWindow/Quest/reward#\r\n高经验\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                                            } else {
                                              if (U == 15) {
                                                typed = 15;
                                                cm.askYesNo("#e#r[骑士团] 女皇 - 希纳斯的庭院(默认每日2次)\r\n#fUI/UIWindow/Quest/reward#\r\n140装备....\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                                              } else {
                                                if (U == 16) {
                                                  typed = 16;
                                                  cm.askYesNo("#e#r[巨大树根] 鲁塔比斯 - 四大天王BOSS(默认每日2把钥匙)\r\n#fUI/UIWindow/Quest/reward#\r\n 4大天王帽子  130装备  技能书....\r\n\r\n#e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                                                } else {
                                                  if (U == 17) {
                                                    typed = 17;
                                                    cm.askYesNo("#e#r[班·雷昂] 狮子王之城 - 接见室走廊\r\n#fUI/UIWindow/Quest/reward#\r\n材料 经验\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                                                  } else {
                                                    if (U == 18) {
                                                      typed = 18;
                                                      cm.askYesNo("#e#r[噩梦的牢笼] 心树守护者之地 - 贝勒德入口(1X进入)(默认每日2次)\r\n#fUI/UIWindow/Quest/reward#\r\n#v3010698##v3010699#贝勒首饰  黄金枫叶   150防具  #v2431926#150防具箱子\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                                                    } else {
                                                      if (U == 19) {
                                                        typed = 19;
                                                        cm.askYesNo("#e#r[噩梦的牢笼] 暴君城堡战场 - 暴君麦格纳斯(New~)(默认每日3次)\r\n#fUI/UIWindow/Quest/reward#\r\n#v1112793##v3015014##v1102224##v1052852##v1004300##v1004140##v1004141##v1004142##v1004143##v1004144##v1004145##v1004146##v1004147##v1004148##v2512261# 漩涡装备.无损强化卷.黄金枫叶.自选发型盒子.暴君防具  150防具  #v2432397#漩涡武器自选箱子  #v2432069#暴君自选防具\r\n\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                                                      } else {
                                                        if (U == 20) {
                                                          typed = 20;
                                                          cm.askYesNo("#e#r[保护金猪] 看说明请点击下一步\r\n#fUI/UIWindow/Quest/reward#\r\n魔方，每日礼物箱子,点卷，抵用卷\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                                                        } else {
                                                          if (U == 21) {
                                                            typed = 21;
                                                            cm.askYesNo("#e#r[迷幻之域] 请提前到好足够的#v4000019##v4000016##v4000000#(约200个)\r\n#fUI/UIWindow/Quest/reward#\r\n#v4001839##v5062002##v5062500##v5064000##v2430069##v3800747##v2430781##v2340000#\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                                                          } else {
                                                            if (U == 22) {
                                                              typed = 22;
                                                              cm.askYesNo("#e#r[简单/进阶] 2线为普通扎昆，3线为进阶扎昆\r\n\r\n\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                                                            } else {
                                                              if (U == 23) {
                                                                typed = 23;
                                                                cm.askYesNo("#e#r[斯乌的来袭] \r\n#fUI/UIWindow/Quest/reward#\r\n#r暴君套装,天照套装,埃苏莱布斯套装,贝勒德首饰,稀有椅子,极品卷轴..等等\r\n#b\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                                                              } else {
                                                                if (U == 24) {
                                                                  typed = 24;
                                                                  cm.askYesNo("#e#r[森兰丸] \r\n#fUI/UIWindow/Quest/reward#\r\n#r森兰丸,稀有椅子,极品卷轴..等等\r\n#b\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                                                                } else {
                                                                  if (U == 1000) {
                                                                    typed = 1000;
                                                                    cm.askYesNo("#e#r[霸王乌鲁斯] \r\n#fUI/UIWindow/Quest/reward#\r\n#r稀有椅子,极品卷轴..等等\r\n#b进入条件：50个BOSS币#v4310143##v4310143#\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                                                                  } else {
                                                                    if (U == 1001) {
                                                                      typed = 1001;
                                                                      cm.askYesNo("#e#r[桃乐丝] \r\n#fUI/UIWindow/Quest/reward#\r\n#r稀有椅子,极品卷轴..等等\r\n#b\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                                                                    } else {
                                                                      if (U == 1002) {
                                                                        typed = 1002;
                                                                        cm.askYesNo("#e#r[因贝尔诺] \r\n#fUI/UIWindow/Quest/reward#\r\n#r稀有椅子,极品卷轴..等等\r\n#b\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                                                                      } else {
                                                                        if (U == 1003) {
                                                                          typed = 1003;
                                                                          cm.askYesNo("#e#r[路西德] \r\n#fUI/UIWindow/Quest/reward#\r\n#r稀有椅子,极品卷轴..等等\r\n#b\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                                                                        } else {
                                                                          if (U == 1004) {
                                                                            typed = 1004;
                                                                            cm.askYesNo("#e#r[威尔] \r\n#fUI/UIWindow/Quest/reward#\r\n#r稀有椅子,极品卷轴..等等\r\n#b\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                                                                          } else {
                                                                            if (U == 1110) {
                                                                              typed = 1110;
                                                                              cm.askYesNo("#e#r[一只养,二只羊,三只羊...] \r\n#fUI/UIWindow/Quest/reward#\r\n#r稀有椅子,极品卷轴..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k");
                                                                            } else {
                                                                              if (U == 216) {
                                                                                typed = 216;
                                                                                cm.dispose();
                                                                                cm.openNpc(9900005, 5);
                                                                              } else {
                                                                                if (U == 207) {
                                                                                  typed = 207;
                                                                                  cm.dispose();
                                                                                  cm.openNpc(9220059, 0);
                                                                                } else {
                                                                                  if (U == 208) {
                                                                                    typed = 208;
                                                                                    cm.dispose();
                                                                                    cm.openNpc(9310383, 0);
                                                                                  } else {
                                                                                    if (U == 209) {
                                                                                      typed = 209;
                                                                                      cm.dispose();
                                                                                      cm.openNpc(9310022, 0);
                                                                                    } else {
                                                                                      if (U == 210) {
                                                                                        typed = 210;
                                                                                        cm.dispose();
                                                                                        cm.warp(865000999, 0);
                                                                                      } else if (U == 100) {
                                                                                        typed = 100;
                                                                                        cm.dispose();
                                                                                        cm.warp(910002000, 0);
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
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        if (status == 2) {
          if (typed == 1) {
            cm.dispose();
            cm.openNpc(9900003, 108);
          } else {
            if (typed == 1203) {
              cm.dispose();
              cm.warp(450012500, 0);
            } else {
              if (typed == 1202) {
                cm.dispose();
                cm.warp(450011990, 0);
              } else {
                if (typed == 1201) {
                  cm.dispose();
                  cm.warp(450012200, 0);
                } else {
                  if (typed == 1200) {
                    cm.dispose();
                    cm.warp(450009301, 0);
                  } else {
                    if (typed == 2) {
                      cm.dispose();
                      cm.openNpc(9310144, 6);
                    } else {
                      if (typed == 3) {
                        cm.dispose();
                        cm.warp(951000000);
                      } else {
                        if (typed == 4) {
                          cm.dispose();
                          cm.warp(925020000);
                        } else {
                          if (typed == 5) {
                            cm.dispose();
                            cm.openNpc(9900004, 3);
                          } else {
                            if (typed == 6) {
                              cm.dispose();
                              cm.warp(220080000);
                            } else {
                              if (typed == 7) {
                                cm.dispose();
                                cm.warp(222130200);
                              } else {
                                if (typed == 8) {
                                  cm.dispose();
                                  cm.openNpc(9900005, 3);
                                } else {
                                  if (typed == 9) {
                                    cm.dispose();
                                    cm.warp(211042200);
                                  } else {
                                    if (typed == 10) {
                                      cm.dispose();
                                      cm.warp(240040700);
                                    } else {
                                      if (typed == 11) {
                                        cm.dispose();
                                        cm.warp(270050000);
                                      } else {
                                        if (typed == 12) {
                                          cm.dispose();
                                          cm.warp(910048000);
                                        } else {
                                          if (typed == 13) {
                                            cm.dispose();
                                            cm.warp(105300301, 0);
                                          } else {
                                            if (typed == 14) {
                                              cm.dispose();
                                              cm.warp(300030300);
                                            } else {
                                              if (typed == 15) {
                                                cm.dispose();
                                                cm.warp(271040000);
                                              } else {
                                                if (typed == 16) {
                                                  cm.dispose();
                                                  cm.warp(105200000);
                                                } else {
                                                  if (typed == 17) {
                                                    cm.dispose();
                                                    cm.warp(211070000);
                                                  } else {
                                                    if (typed == 18) {
                                                      cm.dispose();
                                                      cm.warp(610010000);
                                                    } else {
                                                      if (typed == 19) {
                                                        cm.dispose();
                                                        cm.warp(401060000);
                                                      } else {
                                                        if (typed == 20) {
                                                          cm.dispose();
                                                          cm.openNpc(9300006, 1);
                                                        } else {
                                                          if (typed == 216) {
                                                            cm.dispose();
                                                            cm.openNpc(9310461, 0);
                                                          } else {
                                                            if (typed == 207) {
                                                              cm.dispose();
                                                              cm.openNpc(9220059, 0);
                                                            } else {
                                                              if (typed == 21) {
                                                                cm.dispose();
                                                                cm.openNpc(9070010, 1);
                                                              } else {
                                                                if (typed == 22) {
                                                                  cm.dispose();
                                                                  cm.warp(272030300);
                                                                } else {
                                                                  if (typed == 23) {
                                                                    cm.warp(310070480, 0);
                                                                    cm.dispose();
                                                                  } else {
                                                                    if (typed == 24) {
                                                                      cm.dispose();
                                                                      cm.warp(807300100);
                                                                    } else {
                                                                      if (typed == 1000) {
                                                                        cm.warp(970072200);
                                                                        cm.dispose();
                                                                      } else {
                                                                        if (typed == 1001) {
                                                                          cm.warp(992000000);
                                                                          cm.dispose();
                                                                        } else {
                                                                          if (typed == 1002) {
                                                                            cm.dispose();
                                                                            cm.openNpc(9000113, "因贝尔诺BOSS");
                                                                          } else {
                                                                            if (typed == 1003) {
                                                                              cm.warp(450004000, 0);
                                                                              cm.dispose();
                                                                            } else {
                                                                              if (typed == 1004) {
                                                                                cm.warp(450007240, 0);
                                                                                cm.dispose();
                                                                              } else {
                                                                                if (typed == 1110) {
                                                                                  cm.dispose();
                                                                                  cm.warp(109090104, 0);
                                                                                } else if (typed == 24) {
                                                                                  cm.warp(401072000);
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
              }
            }
          }
        }
      }
    }
  }
}