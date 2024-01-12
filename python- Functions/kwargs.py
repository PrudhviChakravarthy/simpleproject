# Define a function with variable-length keyword arguments
def person_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

# Call the function with keyword arguments
person_info(name="Alice", age=25, country="USA")
