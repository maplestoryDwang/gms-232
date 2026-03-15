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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17608.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function stage0(d, c, b) {
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17608.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.sendNormalTalk_Bottom("你好……请问，我能问你个问题吗？", 56, 9390201, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("天啊！！你真是太狼狈了啊！你遇到暴风雨了吗？你能活下来，运气真是太好了！", 36, 9390201, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("啊，是的……我为了去凯梅尔兹，坐上了船，但是遇到了暴风雨。老人家你能告诉我这里是哪里，怎么才能去凯梅尔兹吗？", 56, 9390201, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("哎呀，你的运气真的很好啊！如果你是来找凯梅尔兹，那就找对了，你现在所在的地方就是凯梅尔兹。而且，这里是凯梅尔兹最适宜生活的贝里村。", 36, 9390201, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("啊……是吗？能找到这里真是太好了。", 56, 9390201, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b(虽然宣布成立了共和国，但还是个普通的渔村啊……果然，传闻和现实还是有很大的差距。)#k", 56, 9390201, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("自我介绍下吧，我是这个村的村长贝里。我们家世世代代都生活在这里，都是这里的村长。所以我叫贝里，哈哈。既然你是来找凯梅尔兹的，那你就是我的客人了！你来凯梅尔兹有什么事吗？", 36, 9390201, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("啊，你好，我……", 56, 9390201, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.curNodeEventEnd(true);
                                            cm.setInGameDirectionMode(true, false, true);
                                            cm.fieldEffect_InsertCanvas(1, 120, 0, 0, 0, 500, 0);
                                            cm.sendNormalTalk_Bottom("#face1##b(……为了避免这样的误会，我们必须非常慎重地接近他们。如果可以，在转达女皇大人的信息之前，最好能够先获得他们的信赖……)#k", 37, 1540451, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                cm.setInGameDirectionMode(false, true, false);
                                                cm.sendNormalTalk_Bottom("#b(按照南哈特所说，现在马上就说出我的身份似乎有些危险，我还是先获得他们的信任吧)#k", 56, 9390201, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("……我是在冒险岛世界各地游历的冒险家。我听说了凯梅尔兹的故事，就想来看看，却在快要到达的时候遇到了风浪，差点就死了。幸好能够安全到达了凯梅尔兹……", 56, 9390201, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("差点就出大事了啊。总之，只要来到凯梅尔兹的冒险家就是我们村子的客人。我能让你舒舒服服地休息一下。你经历了这么大的事故，身体肯定也很疲惫了，你就当这里是你自己家，好好休息吧。", 36, 9390201, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("真的可以吗？我们还是第一次见面呢，你相信我吗？", 56, 9390201, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("哈哈哈，没关系的。你到了我这个年纪就会知道，上了年纪的人挺有看人的眼光的。我看你的样子就知道你是个善良的人。还有，你不是说你遇到了风浪嘛。我一辈子都与大海为伴，大海送来的客人，我怎么能坐视不管呢，哈哈哈", 36, 9390201, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#b(……太好了，他似乎是个好人。既然这位是凯梅尔兹的村长，我们再积累一些信任，然后提出缔结和约的事情就行了。)#k", 56, 9390201, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.forceCompleteQuest(17608);
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
};