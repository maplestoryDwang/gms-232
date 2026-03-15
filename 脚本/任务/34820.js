var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face0#呃啊，那个白毛，相当厉害啊！", 36, 3001326, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#你们到底是什么人！？", 37, 3001326, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#我们是谁你不需要知道！", 37, 3001311, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#还有，我们……不是高等翼人！", 37, 3001308, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face4#有关‘异次元’你都知道些什么，快说！", 37, 3001354, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#‘异次元’？", 37, 3001326, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#这是什么，吃的吗？", 37, 3001326, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#如果不想再被我朋友教训，就照实说吧，各位大叔！", 37, 3001310, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#我们真不知道！是真的！", 37, 3001326, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#说不定诺巴那些家伙知道！", 37, 3001326, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#嗯！去万神殿就能见到诺巴那些家伙了！", 37, 3001326, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face4#诺巴……？我在格兰蒂斯历史书上看到过。难道你说的是龙族吗？", 37, 3001354, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#是啊！我不知道是不是我们次元的！真的！", 37, 3001326, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#看来只能去万神殿那边了。走吧。", 37, 3001354, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#各位大叔……有什么吃的吗？？", 37, 3001310, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#这个蠢货……", 37, 3001311, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.askAcceptDecline_Bottom("#face0#马上带你前往万神殿。", 37, 3001300)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.forceStartQuest(34820, "");
                                                                                cm.npc_LeaveField("oid=425957");
                                                                                cm.npc_LeaveField("oid=425957");
                                                                                cm.npc_LeaveField("oid=425958");
                                                                                cm.npc_LeaveField("oid=425958");
                                                                                cm.npc_LeaveField("oid=425959");
                                                                                cm.npc_LeaveField("oid=425959");
                                                                                cm.npc_LeaveField("oid=425960");
                                                                                cm.npc_LeaveField("oid=425960");
                                                                                cm.dispose();
                                                                                cm.warp(402000112, 2);
                                                                                cm.OnStartNavigation(400000000, 0, "", 0)
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

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("这些人！？不是高等翼人那群家伙嘛？", 36, 3000002, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("召集所有士兵！立刻抓住他们！", 37, 3000002, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#呃唉！？救命啊！", 37, 3001307, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face3#放手！我们不是高等翼人！", 37, 3001311, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("话说八道！竟然说出这种话来！", 37, 3000002, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face3#是真的！你相信我！", 37, 3001310, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face4#我们是平民翼人。", 37, 3001354, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("平民……翼人？", 37, 3000002, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("平民翼人……？怎么会！", 37, 3000000, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("翼人族应该在阿波利斯沦陷时，全部被达尔莫尔杀害了啊。你们几个是从哪儿冒出来的？！", 37, 3000000, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("原来如此！！就是因为那些人！！！！", 37, 3000002, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("听说在视生命为稻草的平民翼人无情的攻击下，达尔莫尔觉醒了，结果狂性大发！", 37, 3000002, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face2#啊！怎么可能！", 37, 3001307, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face2#这都是谣言！", 37, 3001308, true, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face4#很久以前，达尔莫尔屠杀我们民族……只有少数幸存者躲在一个小村子里过着隐居生活。", 37, 3001354, true, true, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#可现在……", 37, 3001354, true, true, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#所谓传闻，不过是胜利者的工具，绝不能让无凭无据的传闻左右历史的真相。", 37, 3001300, true, true, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("闭嘴！你个小不点竟敢跟议会长顶嘴！要不是你们惹恼了达尔莫尔，我们赫里希安还活得好好的！", 37, 3000002, true, true, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face4#虽然不知道赫里希安是什么，但我们民族也是达尔莫尔的受害者！", 37, 3001310, true, true, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("贝尔德大人，请先冷静一下。好了，各位，你们为什么会来到这里呢？", 37, 3000000, true, true, 1)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face3#那个……", 37, 3001354, true, true, 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face3#(他们能否帮我们还是未知数。这里太危险了，先离开再说吧。)", 37, 3001354, true, true, 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face2#我们在寻找#b异次元#k……", 37, 3001310, true, true, 1)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face4#我们正打算通过这去其他地方。不会耽搁太久的，请允许我们离开万神殿吧！", 37, 3001354, true, true, 1)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("就是说只是路过喽？嗯。再怎么说，也不能随便把来历不明的异邦人留在我们的领土上……让他们在太阳落山前离开万神殿吧。", 37, 3000000, true, true, 1)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("一刻也不许在万神殿停留！不然我会采取强硬措施的！哼！", 37, 3000002, true, true, 1)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face4#嗯，知道了。", 37, 3001354, true, true, 1)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("唔，你们提到了#b其他次元#k吧……？", 37, 3000149, true, true, 1)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.forceCompleteQuest(34820);
                                                                                                                            cm.updateInfoQuest(34820, "kc=10;exp=1;043=1");
                                                                                                                            cm.dispose()
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
};