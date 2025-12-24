# Ms. Tan (1012105) | Henesys Skin-Care
sm.sendNext("Welcome to Henesys Skin-Care! "
            "For just one teeny-weeny #b#t5153015##k, I can make your skin supple and glow-y, like mine! "
            "Trust me, you don't want to miss my facials.")
options = [0, 1, 2, 3, 4, 5, 9, 10, 11, 12]
answer = sm.sendAskAvatar("We have the latest in beauty equipment. "
                          "With our technology, you can preview what your skin will look like in advance! "
                          "Which treatment would you like?", False, chr.isZeroBeta(), options)
sm.changeCharacterLook(answer)
