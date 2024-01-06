
import pytest

def add(a, b):
    return a + b

def test_addition():
    assert add(3, 5) == 8
    assert add(0, 0) == 0
