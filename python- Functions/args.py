# Define a function with variable-length positional arguments
def add(*args):
    result = 0
    for num in args:
        result += num
    return result

# Call the function with different numbers of arguments
sum1 = add(1, 2, 3)
sum2 = add(4, 5, 6, 7)
print(sum1)
print(sum2)
