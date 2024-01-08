class MyCustomError(Exception):
    pass

try:
    age = -5
    if age < 0:
        raise MyCustomError("Age cannot be negative.")
except MyCustomError as error:
    print(error)
