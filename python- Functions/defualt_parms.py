# Define a function with a default parameter
def greet(name="Guest"):
    return f"Hello, {name}!"

# Call the function without providing an argument
message = greet()
print(message)

# Call the function with an argument
message = greet("Bob")
print(message)
