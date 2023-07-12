import math

print(1819**13)
n = 241
i = 0
l = []
while n != 0:
    l.append(n%2)
    n = math.floor(n/2)
    i += 1
print(l)
l = list(reversed(l))
print(l)
print((3**644)%645)

print("")
print(29*31)
