def switch_case(case):
    return {
        1: "Case 1",
        2: "Case 2",
        3: "Case 3"
    }.get(case, "Default Case")

result = switch_case(2)
print(result)
