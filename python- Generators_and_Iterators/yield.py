# Creating a simple generator function
def count_up_to(n):
    i = 1
    while i <= n:
        yield i
        i += 1

# Using the generator
counter = count_up_to(5)
for num in counter:
    print(num)
