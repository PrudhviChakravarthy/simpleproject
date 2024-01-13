# Yielding values on demand using a generator
def generate_numbers():
    yield 1
    yield 2
    yield 3

# Using the generator to fetch values on demand
numbers = generate_numbers()
print(next(numbers))
print(next(numbers))
print(next(numbers))
