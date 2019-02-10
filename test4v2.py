# one
def remove_duplicate(value):
    return list(set(value))


listArray =["Yaw","Daniel","Richard","Alex","Richard","jack","Ted","Daniel","Gideon"]
numArray =[1,4,6,7,7,8,9,9,9,8]
print(remove_duplicate(listArray))
print(remove_duplicate(numArray))

def all_the_same(elements):
    return len(elements)< 1 or len(elements)== elements.count(elements[0])


print(all_the_same(numArray))



import random
def hexacolor():
    a = random.randint(0,16777215)
    print("#{}".format(a))


hexacolor()

# same elements int array

def all_the_same(elements):
    return len(set(elements))<=1


print(all_the_same(numArray))