# An infinite generator
def infinite_sequence():
    num = 1
    while True:
        yield num
        num += 1

# Using the infinite generator
numbers = infinite_sequence()
for i in numbers:
    if i > 10:
        break
    print(i)
