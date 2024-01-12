# Define a function that returns multiple values
def get_user_info(name, age):
    return name, age

# Call the function and unpack the returned values
user_name, user_age = get_user_info("Bob", 30)
print(f"Name: {user_name}, Age: {user_age}")
