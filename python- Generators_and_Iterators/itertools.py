# Using itertools.cycle and itertools.count
from itertools import cycle, count

colors = ["red", "green", "blue"]
color_iterator = cycle(colors)
for i in range(10):
    print(next(color_iterator))

number_iterator = count(start=1, step=2)
for i in range(5):
    print(next(number_iterator))
