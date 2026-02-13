# Start of Well-Behaved Student
KINU = 1102006

sm.setSpeakerID(KINU)

response = sm.sendAskYesNo("我来晚了吗？你好。我是负责教授圣地历史的奇努。干嘛站在那里？快过来坐下。")

if not response:
	sm.sendNext("走到椅子前面，按快捷键x，就可以坐到椅子上。")
	sm.dispose()

sm.removeEscapeButton()

sm.sendSay("Press X in front of any chair to sit down. "
"If you own one, it's the same deal. X marks the butt.")

sm.showEffect("Effect/OnUserEff.img/guideEffect/cygnusTutorial/10", 0, 5000)

sm.startQuest(parentID)