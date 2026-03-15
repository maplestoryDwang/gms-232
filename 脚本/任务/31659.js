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
  } else if (status == v++) {
    cm.forceStartQuest(31659, '');
    cm.dispose();
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
      cm.sendNormalTalk("找我有什么事，说来听听。", 0, 3001002, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("狂龙战士没来这里吗？", 2, 3001002, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("什么，对叫做维克特和特雷格罗的麦格纳斯守护者没兴趣？不了解他们的话，会吃亏的。", 0, 3001002, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("这样啊，那我就听听看吧。", 2, 3001002, true, true);
          } else {
            if (status === v++) {
              cm.askMenu("那么我给你讲讲谁的故事呢？\r\n#b#L0# 我想了解维克特的故事。#l\r\n#b#L1# 我想了解特雷格罗的故事。#l\r\n#b#L2# 我想听听其他守护者的故事。#l\r\n", 0, 3001002);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("吼吼，想了解维克特的故事啊。我来给你讲讲。", 0, 3001002, false, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("维克特本来是守护首都赫里希安的3个守护者之一。维克特、 特雷格罗，还有伊黛娜那个狐狸，三个人。", 0, 3001002, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("维克特原来是画家，我还有他的画呢。呵呵。总之他在绘画，建筑以及艺术领域的造诣对诺巴造成了深刻影响。", 0, 3001002, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("维克特出生在世代活跃在美术和艺术领域的传统艺术家家族，我和他父亲是朋友。他父亲为他起维克特这个名字，就是希望他能够成为出色的画家。", 0, 3001002, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk("他曾有一个恋人，但现在已经不在这个世上了。维克特为那个女子画的肖像画，是他作品中最著名且完成度最高的一副。", 0, 3001002, true, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk("维克特在学习美术的过程中，发现魔法画布可以将接近完美的画变成现实。", 0, 3001002, true, true);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk("麦格纳斯在解除保护罩的过程中，利用了这个机会。麦格纳斯求达尔摩尔将魔法画布借给他，并以此为诱饵说服了维克特。", 0, 3001002, true, true);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk("维克特最终没有抵挡住麦格纳斯的诱惑。对他来说，最重要的就是生前爱着的那个女人，对那个女人的爱已经超越了种族和个人的安危。", 0, 3001002, true, true);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk("#b那维克特最终复活恋人了吗？", 2, 3001002, true, true);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk("嗯……复活了。当然复活了。但是达尔摩尔和麦格纳斯那些坏家伙们可不会就这么把魔法画布给他。", 0, 3001002, true, true);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk("起初那画布的确是令画像变成了实物，但维克特恋人的生前画像变出来的只是个没感情的人偶。因为在图画中无法描绘出人的灵魂。", 0, 3001002, true, true);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk("达尔摩尔给他之前在画布上下了诅咒。维克特被夺取了肉身，其灵魂被封在了魔法画布上面，成为了不得不服从麦格纳斯的守护者。", 0, 3001002, true, true);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk("与其说是画布，其实更像形态十分传统的物体。这种物体当然很容易附上图腾信仰般的诅咒。", 0, 3001002, true, true);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk("维克特现在作为麦格纳斯的守护者，正在用封锁自己灵魂的画布，创造生物。这些生物现在是麦格纳斯军队的一部分。", 0, 3001002, true, true);
                                        } else {
                                          if (status === v++) {
                                            cm.sendNormalTalk("这就是我知道的关于维克特的全部故事。", 0, 3001002, true, true);
                                          } else {
                                            if (status === v++) {
                                              cm.askMenu("那么我给你讲讲谁的故事呢？\r\n#b#L1# 我想了解特雷格罗的故事。#l\r\n#b#L2# 我想听听其他守护者的故事。#l\r\n", 0, 3001002);
                                            } else {
                                              if (status === v++) {
                                                cm.sendNormalTalk("吼吼，想了解特雷格罗的故事啊。我来给你讲讲。", 0, 3001002, false, true);
                                              } else {
                                                if (status === v++) {
                                                  cm.sendNormalTalk("特雷格罗是精通各种实用学问的科学天才。他最擅长的是化学领域，在制作药品方面，可以说是自成一派。", 0, 3001002, true, true);
                                                } else {
                                                  if (status === v++) {
                                                    cm.sendNormalTalk("特雷格罗作为诺巴的守护者，也是为诺巴献身的人物。不过特雷格罗好像有一个我们所不知道的夙愿。", 0, 3001002, true, true);
                                                  } else {
                                                    if (status === v++) {
                                                      cm.sendNormalTalk("#b什么夙愿？", 2, 3001002, true, true);
                                                    } else {
                                                      if (status === v++) {
                                                        cm.sendNormalTalk("嗯。简单的说就是制作拥有智能的人工生命体。虽然这是在诺巴的炼金术师中十分忌讳的行为，但从天才的角度来讲，能够通过自己的技术开启禁锢领域，是一种成就。", 0, 3001002, true, true);
                                                      } else {
                                                        if (status === v++) {
                                                          cm.sendNormalTalk("但欲望过于强烈时，往往会做错事。喜欢从人背后捅刀子的麦格纳斯怎么可能不关注这过于强烈的研究欲望呢。", 0, 3001002, true, true);
                                                        } else {
                                                          if (status === v++) {
                                                            cm.sendNormalTalk("麦格纳斯派了一个间谍伪装成商人，资助特雷格罗的研究，同时慢慢与其熟悉起来。总之是花了很长时间的功夫。虽然现在冒险岛世界已经和格兰蒂斯互通有无，但以前可不是这样，麦格纳斯给他找了许多冒险岛世界没有的文献资料。", 0, 3001002, true, true);
                                                          } else {
                                                            if (status === v++) {
                                                              cm.sendNormalTalk("没人知道麦格纳斯是怎样到达世界的另一边的。总之对特雷格罗而言，他既是个不错的交易对象，也是个值得信赖的资助者。", 0, 3001002, true, true);
                                                            } else {
                                                              if (status === v++) {
                                                                cm.sendNormalTalk("#b特雷格罗实现创造智能生命体的夙愿了吗？", 2, 3001002, true, true);
                                                              } else {
                                                                if (status === v++) {
                                                                  cm.sendNormalTalk("他真的是天才。好像在这一领域获得了很大成就。但是作为材料供应源且获得绝对信任的麦格纳斯，在进攻赫里希安之前，将受到诅咒的安瓿谎称为世界上最珍贵的材料，混入药品中交给了特雷格罗。", 0, 3001002, true, true);
                                                                } else {
                                                                  if (status === v++) {
                                                                    cm.sendNormalTalk("赫里希安被进攻那天，他的房间发生了巨大的爆炸，我在逃出赫里希安之前，看到了特雷格罗，那时他已经失去理智，完全疯掉了。", 0, 3001002, true, true);
                                                                  } else {
                                                                    if (status === v++) {
                                                                      cm.sendNormalTalk("智能生命体站在他的左右。当然它们并不是人类，而是像石块一样的怪物。但我看他脸上挂着满足的微笑，就好像对他来讲，人生的意义就在于研究了。", 0, 3001002, true, true);
                                                                    } else {
                                                                      if (status === v++) {
                                                                        cm.sendNormalTalk("他的创造物最终也成为守护麦格纳斯和特雷格罗的军队的一份子。", 0, 3001002, true, true);
                                                                      } else {
                                                                        if (status === v++) {
                                                                          cm.sendNormalTalk("这就是我知道的关于特雷格罗的全部故事。", 0, 3001002, true, true);
                                                                        } else {
                                                                          if (status === v++) {
                                                                            cm.askMenu("那么我给你讲讲谁的故事呢？\r\n#b#L2# 我想听听其他守护者的故事。#l\r\n", 0, 3001002);
                                                                          } else {
                                                                            if (status === v++) {
                                                                              cm.sendNormalTalk("其他守护者……对，守护者有三个人。", 0, 3001002, false, true);
                                                                            } else {
                                                                              if (status === v++) {
                                                                                cm.sendNormalTalk("维克特、 特雷格罗，还有曾守在宝座前的伊黛娜。这三个人。", 0, 3001002, true, true);
                                                                              } else {
                                                                                if (status === v++) {
                                                                                  cm.sendNormalTalk("#b伊黛娜怎么会在那个位置上？", 2, 3001002, true, true);
                                                                                } else {
                                                                                  if (status === v++) {
                                                                                    cm.sendNormalTalk("她曾经是我的弟子。虽然脾气不是一般的烂，但却是我在漫长岁月中，见过的所有魔法师中才能最为出众的天才。", 0, 3001002, true, true);
                                                                                  } else {
                                                                                    if (status === v++) {
                                                                                      cm.sendNormalTalk("#b曾经的弟子……那现在？", 2, 3001002, true, true);
                                                                                    } else {
                                                                                      if (status === v++) {
                                                                                        cm.sendNormalTalk("除名啦，除名。以练习魔法为借口，打碎了我的玩具，还摧毁了无辜的村庄，而且还将不能吃的曲奇重新烘烤，强迫别人吃掉，吃了那种曲奇的人，三日内什么都不能干。", 0, 3001002, true, true);
                                                                                      } else {
                                                                                        if (status === v++) {
                                                                                          cm.sendNormalTalk("要历数恶行的话，那可就没个头了。虽然现在看起来既冷静又酷，还成为了人们的偶像，但不定哪一天，本性就会被公诸于世的。狐狸一样的……", 0, 3001002, true, true);
                                                                                        } else {
                                                                                          if (status === v++) {
                                                                                            cm.sendNormalTalk("#b真是意外啊，伊黛娜。哈哈……故事就说到这里吧。你要震惊啊。", 2, 3001002, true, true);
                                                                                          } else {
                                                                                            if (status === v++) {
                                                                                              cm.sendNormalTalk("嗯，最后是要交给#b#p3001100#的书信#k吧？不能就这么给交给他。 #b#p3001100##k都给我便便了。", 0, 3001002, true, true);
                                                                                            } else {
                                                                                              if (status === v++) {
                                                                                                cm.sendNormalTalk("又是，便便？难道#p3001100#的便便……还真是变态老头！", 2, 3001002, true, true);
                                                                                              } else {
                                                                                                if (status === v++) {
                                                                                                  cm.sendNormalTalk("不，不是这样的。虽然我确实是变态老头！但我绝不是那种变态！那个……狂龙战士带来了#b#p3001100##k亲自烘烤的曲奇，那种曲奇就叫做便便。你想吃的话，我可以给你。总之就是这样！看来你要照顾一下我的情绪。帮我做两件小事，我就把要交给那个可恶女人的书信给你。", 0, 3001002, true, true);
                                                                                                } else {
                                                                                                  if (status === v++) {
                                                                                                    cm.sendNormalTalk("先帮帮#b波波拉#k吧？\r\n\r\n#Wbasic#\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 129,839", 0, 3001002, true, true);
                                                                                                  } else if (status === v++) {
                                                                                                    cm.forceCompleteQuest(31659);
                                                                                                    cm.gainExp(129839);
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
                }
              }
            }
          }
        }
      }
    }
  }
}