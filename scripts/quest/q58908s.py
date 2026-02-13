# A New Warrior Appears (Sengoku Era) Questline | Momiji Hills: Master Room (811000008)
# Author: Tiger

AYAME = 9130100
SUKUNO = 9130124

sm.setSpeakerID(AYAME)

sm.flipSpeaker()
sm.sendNext("哇，我还以为来这儿会死呢！我总是掉进奇怪的地方，真是累死了~")

sm.flipDialoguePlayerAsSpeaker()
sm.sendSay("武田信玄大人想知道你是怎么来到这里的。")

sm.setSpeakerID(AYAME)

sm.flipSpeaker()
sm.sendSay("武田信玄？我所知道的那个武田信玄？…… ")

sm.flipSpeaker()
sm.sendSay("那个爷爷真可笑。你要告诉武田信玄！我菖蒲可没什么好说的！那个死老头真没良心，也不看看是因为谁才做成了那件事的。")

sm.flipDialoguePlayerAsSpeaker()
sm.sendSay(" (她似乎对武田信玄大人没有好感……)")

sm.setSpeakerID(AYAME)

sm.flipSpeaker()
sm.sendSay("话说回来，樱乃在哪儿？我有很多话要和她说呢。樱乃~樱乃~樱乃~你在哪儿~")

sm.lockInGameUI(True)
sm.removeEscapeButton()
sm.moveCamera(200, 0, 150)

sm.spawnNpc(9130124, -603, 187)
sm.flipNpcByTemplateId(9130124, False)
sm.moveNpcByTemplateId(9130124, False, 300, 60)
sm.sendDelay(2500)

sm.setSpeakerID(SUKUNO)

sm.flipSpeaker()
sm.sendNext("菖蒲！")

sm.moveNpcByTemplateId(9130124, False, 100, 50)

sm.setSpeakerID(AYAME)

sm.flipSpeaker()
sm.sendSay("啊！樱乃。哈哈，樱乃，你还好吗？我可想死你了！")

sm.setSpeakerID(SUKUNO)

sm.flipSpeaker()
sm.sendSay("听说你回来了……我……我…………")

sm.flipSpeaker()
sm.sendSay("哎~哎？别哭啊，樱乃。我这不是回来了吗！")

sm.setSpeakerID(AYAME)

sm.flipSpeaker()
sm.sendSay("Heyyy, don't start the waterworks now! I'm back!")

sm.removeNpc(9130124)
sm.startQuest(parentID)
sm.warp(811000008)
