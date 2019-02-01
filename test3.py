# def showReversed(text):
#     textReversed = text[::-1]
#     return textReversed
#
#
# print(showReversed("dollar"))

def showReversed(text):
    textReversed = list(text)
    textReversed.reverse()
    return textReversed



print(showReversed("dollar"))


import random
num = random.randint(1,10)

while True:
    guess = input("Guess a number between 1 and 10")
    intguess = int(guess)
    if intguess == num:
        print("Good Work!")
        break
    else:
        print("Try again")