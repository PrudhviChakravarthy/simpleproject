# Iterating over dictionary keys and values
student = {
    'name': 'Bob',
    'age': 22,
    'grade': 'B'
}

for key in student:
    print(f"{key}: {student[key]}")

# Alternatively, using items()
for key, value in student.items():
    print(f"{key}: {value}")
