def apply(func, x, y):
    return func(x, y)

result = apply(lambda a, b: a * b, 4, 7)
print(result)
