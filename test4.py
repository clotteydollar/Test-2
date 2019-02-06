from random import  randint

def getRandomColor():
    return (randint(0,255),randint(0,255),randint(0,255))


print(getRandomColor())