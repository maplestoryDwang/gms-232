options = [0, 1, 2, 3, 4, 5, 9, 10, 11, 12]
answer = sm.sendAskAvatar("We have the latest in beauty equipment. "
                          "With our technology, you can preview what your skin will look like in advance! "
                          "Which treatment would you like?", False, chr.isZeroBeta(), options)
sm.changeCharacterLook(answer)
